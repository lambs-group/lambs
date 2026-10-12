// Turns the weekly live-works file into map-ready coordinates.
//
//   input : src/data/live-works.json            (edited/replaced weekly - see docs/live-works.md)
//   output: src/data/live-works.resolved.json   (generated, git-ignored, read by the map)
//   cache : src/data/geocode-cache.json         (committed; each place is looked up once)
//
// Runs automatically before `npm run dev` and `npm run build`.
//
// Privacy: the repo is public and so is the map, so positions are only ever
// resolved to postcode-district / town level (plus a small deterministic
// offset so dots in the same place don't stack). A FULL postcode on a
// Private Works entry fails the build - it would publish a customer's address.

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const INPUT = process.env.LIVE_WORKS_INPUT || join(root, "src/data/live-works.json");
const OUTPUT = process.env.LIVE_WORKS_OUTPUT || join(root, "src/data/live-works.resolved.json");
const CACHE = join(root, "src/data/geocode-cache.json");

const SECTORS = ["Telecoms", "Utilities", "Private Works"];
const OUTCODE_RE = /^[A-Z]{1,2}\d[A-Z\d]?$/;
const FULL_POSTCODE_RE = /^([A-Z]{1,2}\d[A-Z\d]?)\s*\d[A-Z]{2}$/;
const JITTER_DEG = 0.012; // ~1.3 km

const inCI = process.env.GITHUB_ACTIONS === "true";
const warn = (msg) => console.warn(inCI ? `::warning title=live-works::${msg}` : `WARN  ${msg}`);
const fail = (msg) => {
  console.error(inCI ? `::error title=live-works::${msg}` : `ERROR ${msg}`);
  process.exit(1);
};

function readJson(path, what) {
  try {
    return JSON.parse(readFileSync(path, "utf8"));
  } catch (e) {
    fail(`${what} is not valid JSON: ${e.message}`);
  }
}

const raw = readJson(INPUT, "src/data/live-works.json");
if (!raw || !Array.isArray(raw.dots)) fail('src/data/live-works.json must look like { "lastUpdated": "...", "dots": [ ... ] }');

const cache = existsSync(CACHE) ? readJson(CACHE, "src/data/geocode-cache.json") : {};
let cacheDirty = false;

async function getJson(url) {
  const resp = await fetch(url, { signal: AbortSignal.timeout(15000) });
  if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
  return resp.json();
}

async function lookupOutcode(outcode) {
  const key = `outcode:${outcode}`;
  if (cache[key]) return cache[key];
  const body = await getJson(`https://api.postcodes.io/outcodes/${encodeURIComponent(outcode)}`);
  const r = body.result;
  if (!r || typeof r.latitude !== "number") throw new Error("not found");
  const district = (r.admin_district && r.admin_district[0]) || outcode;
  cache[key] = { lat: r.latitude, lng: r.longitude, label: `${district} (${outcode})` };
  cacheDirty = true;
  return cache[key];
}

async function lookupPlace(name) {
  const key = `place:${name.toLowerCase()}`;
  if (cache[key]) return cache[key];
  const body = await getJson(`https://api.postcodes.io/places?q=${encodeURIComponent(name)}&limit=10`);
  const results = body.result || [];
  // Prefer a real town/city over hamlets with the same name.
  const rank = { City: 0, Town: 1, "Suburban Area": 2, Village: 3 };
  results.sort((a, b) => (rank[a.local_type] ?? 9) - (rank[b.local_type] ?? 9));
  const r = results.find((p) => typeof p.latitude === "number");
  if (!r) throw new Error("not found");
  const label = [r.name_1, r.region || r.county_unitary].filter(Boolean).join(", ");
  cache[key] = { lat: r.latitude, lng: r.longitude, label };
  cacheDirty = true;
  return cache[key];
}

// Deterministic offset so the same entry always lands in the same spot.
function jitter(id, lat) {
  let h = 2166136261;
  for (const ch of id) h = Math.imul(h ^ ch.charCodeAt(0), 16777619) >>> 0;
  const angle = ((h & 0xffff) / 0xffff) * Math.PI * 2;
  const radius = (0.35 + (((h >>> 16) & 0xffff) / 0xffff) * 0.65) * JITTER_DEG;
  return { dLat: Math.sin(angle) * radius, dLng: (Math.cos(angle) * radius) / Math.cos((lat * Math.PI) / 180) };
}

const slug = (s) => String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const dots = [];
const seen = new Set();
let skipped = 0;

for (const [i, entry] of raw.dots.entries()) {
  const where = `entry ${i + 1}${entry.location ? ` ("${entry.location}")` : ""}`;
  if (!SECTORS.includes(entry.sector)) fail(`${where}: sector must be one of ${SECTORS.join(", ")} (got "${entry.sector}")`);

  const base = {
    sector: entry.sector,
    status: entry.status || "Active",
    note: entry.note || "",
  };

  let lat, lng, label;

  if (typeof entry.lat === "number" && typeof entry.lng === "number") {
    // Legacy / pre-resolved coordinates: used exactly as given.
    ({ lat, lng } = entry);
    label = entry.region || entry.location || "Location";
  } else if (typeof entry.location === "string" && entry.location.trim()) {
    const loc = entry.location.trim();
    const upper = loc.toUpperCase().replace(/\s+/g, " ");
    const full = upper.match(FULL_POSTCODE_RE);
    try {
      let hit;
      if (full) {
        if (entry.sector === "Private Works") {
          fail(
            `${where}: Private Works entries must not contain a full postcode (the repo and map are public). ` +
              `Use the district only, e.g. "${full[1]}", or the town name.`
          );
        }
        warn(`${where}: full postcode shortened to district "${full[1]}" for the public map.`);
        hit = await lookupOutcode(full[1]);
      } else if (OUTCODE_RE.test(upper)) {
        hit = await lookupOutcode(upper);
      } else {
        hit = await lookupPlace(loc);
      }
      const id0 = entry.id || `${slug(loc)}-${i + 1}`;
      const { dLat, dLng } = jitter(id0, hit.lat);
      lat = hit.lat + dLat;
      lng = hit.lng + dLng;
      label = entry.region || hit.label;
    } catch (e) {
      warn(`${where}: could not find a map position (${e.message}) - skipped. Check the spelling or use a postcode district.`);
      skipped++;
      continue;
    }
  } else {
    fail(`${where}: needs a "location" (postcode district or town name).`);
  }

  const id = entry.id || `${slug(entry.location || label)}-${i + 1}`;
  if (seen.has(id)) fail(`${where}: duplicate id "${id}"`);
  seen.add(id);

  dots.push({ id, region: label, ...base, lat: Number(lat.toFixed(5)), lng: Number(lng.toFixed(5)) });
}

writeFileSync(
  OUTPUT,
  JSON.stringify({ lastUpdated: raw.lastUpdated || new Date().toISOString().slice(0, 10), dots }, null, 2) + "\n"
);
if (cacheDirty) writeFileSync(CACHE, JSON.stringify(cache, null, 2) + "\n");

console.log(`live-works: ${dots.length} location(s) ready${skipped ? `, ${skipped} skipped` : ""}.`);
