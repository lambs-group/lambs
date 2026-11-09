// Writes dist/_redirects (real 301s for Cloudflare Pages) from the old WordPress URL map.
// Production builds only (SITE_TARGET=production); the GitHub Pages preview can't do 301s.
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { oldSiteRedirects, oldSiteSplats } from "../src/data/old-site-redirects.mjs";

if (process.env.SITE_TARGET !== "production") {
  console.log("redirects: not a production build, skipping _redirects");
  process.exit(0);
}

const lines = [];
for (const [from, to] of Object.entries(oldSiteRedirects)) {
  lines.push(`${from} ${to} 301`, `${from}/ ${to} 301`);
}
for (const [from, to] of Object.entries(oldSiteSplats)) lines.push(`${from} ${to} 301`);

const dist = new URL("../dist", import.meta.url).pathname;
writeFileSync(join(dist, "_redirects"), lines.join("\n") + "\n");
console.log(`redirects: wrote ${lines.length} rules to dist/_redirects`);
