// Sets each page's sitemap <lastmod> from the REAL git history of the files that
// make up that page (its route file, page component and page-specific data).
// Shared chrome (navbar, footer, layout) is deliberately ignored so a footer
// tweak doesn't mark every page as updated.
//
// Output: src/data/sitemap-lastmod.json (committed; read by astro.config.mjs).
// If git history isn't available (no git, or a shallow clone) the committed
// file is left as it was. CI checks out full history so it stays accurate.
import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(root, "src/data/sitemap-lastmod.json");
const P = "src/components/pages/";

// route (as in the sitemap) -> files that determine when the page really changed
const PAGES = {
  "/": ["src/pages/index.astro", `${P}HomePage.tsx`],
  "/about/": ["src/pages/about.astro", `${P}AboutPage.tsx`],
  "/careers/": ["src/pages/careers.astro", `${P}CareersPage.tsx`, "src/data/vacancies.ts"],
  "/careers/apply/": ["src/pages/careers/apply.astro", `${P}careers/`],
  "/contact/": ["src/pages/contact.astro", `${P}ContactPage.tsx`],
  "/cookies/": ["src/pages/cookies.astro", `${P}legal/CookiesPage.tsx`, `${P}legal/LegalPage.tsx`, `${P}legal/company.ts`],
  "/how-we-deliver/": ["src/pages/how-we-deliver.astro", `${P}HowWeDeliverPage.tsx`],
  "/privacy/": ["src/pages/privacy.astro", `${P}legal/PrivacyPage.tsx`, `${P}legal/LegalPage.tsx`, `${P}legal/company.ts`],
  "/private-works/": ["src/pages/private-works.astro", `${P}PrivateWorksPage.tsx`, `${P}private/`],
  "/team/": ["src/pages/team.astro", `${P}TeamPage.tsx`],
  "/telecoms/": ["src/pages/telecoms.astro", `${P}TelecomsPage.tsx`],
  "/terms/": ["src/pages/terms.astro", `${P}legal/TermsPage.tsx`, `${P}legal/LegalPage.tsx`, `${P}legal/company.ts`],
  "/utilities/": ["src/pages/utilities.astro", `${P}UtilitiesPage.tsx`],
  "/work/": ["src/pages/work.astro", `${P}CaseStudiesPage.tsx`],
  "/work/motif/": ["src/pages/work/motif.astro", `${P}MotifPage.tsx`, `${P}motif/`],
};

const git = (...args) => execFileSync("git", args, { cwd: root, encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim();

let usable = true;
try {
  if (git("rev-parse", "--is-shallow-repository") === "true") usable = false;
} catch {
  usable = false;
}
if (!usable) {
  console.warn("sitemap-lastmod: no full git history here - keeping the committed dates.");
  process.exit(0);
}

const result = {};
for (const [route, files] of Object.entries(PAGES)) {
  const existing = files.filter((f) => existsSync(join(root, f)));
  const iso = existing.length ? git("log", "-1", "--format=%cI", "--", ...existing) : "";
  if (iso) result[route] = iso.slice(0, 10);
}

const next = JSON.stringify(result, null, 2) + "\n";
const prev = existsSync(OUT) ? readFileSync(OUT, "utf8") : "";
if (next !== prev) {
  writeFileSync(OUT, next);
  console.log(`sitemap-lastmod: updated ${Object.keys(result).length} page dates from git history.`);
} else {
  console.log("sitemap-lastmod: dates already current.");
}
