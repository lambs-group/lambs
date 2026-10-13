// Writes src/data/image-sizes.json: intrinsic width/height (and any -640 variant)
// for every raster image in public/images, so components can add width/height
// attributes (prevents layout shift) and a srcset. Runs before every build.
import sharp from "sharp";
import { readdirSync, existsSync, writeFileSync, readFileSync } from "node:fs";
import { join, relative, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const IMG = join(root, "public/images");
const OUT = join(root, "src/data/image-sizes.json");

const walk = (d) =>
  readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(join(d, e.name)) : [join(d, e.name)]));

const result = {};
for (const file of walk(IMG).sort()) {
  if (!/\.(webp|jpe?g|png)$/i.test(file) || /-640\.webp$/.test(file)) continue;
  const { width, height } = await sharp(file).metadata();
  const key = "/images/" + relative(IMG, file).split("\\").join("/");
  const entry = { width, height };
  const small = file.replace(/\.webp$/, "-640.webp");
  if (file.endsWith(".webp") && existsSync(small)) {
    const m = await sharp(small).metadata();
    entry.small = { src: key.replace(/\.webp$/, "-640.webp"), width: m.width };
  }
  result[key] = entry;
}
const next = JSON.stringify(result, null, 2) + "\n";
const prev = existsSync(OUT) ? readFileSync(OUT, "utf8") : "";
if (next !== prev) writeFileSync(OUT, next);
console.log(`image-sizes: ${Object.keys(result).length} images mapped.`);
