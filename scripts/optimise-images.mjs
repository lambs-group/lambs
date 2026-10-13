// One-off helper (run manually: `node scripts/optimise-images.mjs`): resizes the large
// project photos to what the pages need and writes a 640px variant next to each for
// srcset. Skips public/images/private/ (Private Works photos are still being chosen).
import sharp from "sharp";

sharp.cache(false); // we rewrite files and read them back in the same run
import { readdirSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const DIR = "public/images/utilities";
const files = readdirSync(DIR).filter((f) => /^job-\d+\.webp$/.test(f));
let before = 0, after = 0;
for (const f of files) {
  const p = join(DIR, f);
  const size0 = statSync(p).size;
  before += size0;
  const { width } = await sharp(p).metadata();
  if (width > 1280) {
    // Only resize originals that are still oversized (avoids re-encoding twice).
    const buf = await sharp(p).resize({ width: 1280 }).webp({ quality: 74, effort: 5 }).toBuffer();
    if (buf.length < size0) writeFileSync(p, buf);
  }
  after += statSync(p).size;
  const small = await sharp(p).resize({ width: 640, withoutEnlargement: true }).webp({ quality: 72, effort: 5 }).toBuffer();
  writeFileSync(join(DIR, f.replace(".webp", "-640.webp")), small);
  console.log(f, Math.round(size0 / 1024) + "KB ->", Math.round(statSync(p).size / 1024) + "KB (+ " + Math.round(small.length / 1024) + "KB @640w)");
}
console.log(`total ${Math.round(before / 1024)}KB -> ${Math.round(after / 1024)}KB`);
