// Builds the "coming soon" holding page as ONE self-contained HTML file (fonts, logo and
// favicon inlined), so it can be dropped onto any host with no other files.
//
//   node scripts/maintenance.mjs            writes maintenance/index.html (upload this anywhere)
//   MAINTENANCE_MODE=true npm run build     also swaps the built site (dist/) for the holding page
//
// The swap is the on/off flag: with MAINTENANCE_MODE unset or anything but "true", the full
// site builds as normal and this script only refreshes maintenance/index.html.
import { readFileSync, writeFileSync, mkdirSync, readdirSync, rmSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const b64 = (p) => readFileSync(join(root, p)).toString("base64");

const font = (weight) =>
  `@font-face{font-family:Inter;font-weight:${weight};font-style:normal;font-display:swap;src:url(data:font/woff2;base64,${b64(`node_modules/@fontsource/inter/files/inter-latin-${weight}-normal.woff2`)}) format("woff2")}`;

const html = `<!doctype html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Lambs Group | New website coming soon</title>
<meta name="description" content="Lambs Group's new website is coming soon. Family-run since 1988: telecoms, utilities and private works.">
<meta name="robots" content="noindex, nofollow">
<meta name="theme-color" content="#264A88">
<link rel="icon" type="image/png" sizes="32x32" href="data:image/png;base64,${b64("public/favicon-32.png")}">
<style>
${font(400)}
${font(600)}
:root{--dark-blue:#264A88;--cyan:#6CC5EA;--mid-blue:#7DA0C3;--light-grey:#F5F5F7;--charcoal:#242A38}
*{box-sizing:border-box;margin:0}
html,body{height:100%}
body{font-family:Inter,ui-sans-serif,system-ui,sans-serif;color:var(--charcoal);background:#fff;-webkit-font-smoothing:antialiased;line-height:1.6}
.page{min-height:100%;display:flex;flex-direction:column;background-image:linear-gradient(to right,rgba(125,160,195,.08) 1px,transparent 1px),linear-gradient(to bottom,rgba(125,160,195,.08) 1px,transparent 1px);background-size:64px 64px}
header{padding:28px clamp(20px,5vw,48px)}
header img{height:36px;width:auto;display:block}
main{flex:1;display:flex;flex-direction:column;justify-content:center;padding:clamp(24px,6vw,64px) clamp(20px,5vw,48px);max-width:1400px;width:100%;margin:0 auto}
.eyebrow{display:inline-flex;align-items:center;gap:14px;font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:var(--mid-blue);font-weight:600}
.eyebrow::before{content:"";width:28px;height:1px;background:var(--cyan)}
h1{margin-top:24px;font-weight:600;color:var(--dark-blue);font-size:clamp(44px,8vw,104px);line-height:1.02;letter-spacing:-.025em;max-width:11ch}
.lede{margin-top:28px;font-size:clamp(17px,2vw,21px);max-width:34em}
.contact{margin-top:44px;display:flex;flex-wrap:wrap;gap:12px 40px;font-size:16px}
.contact span{display:block;font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:var(--mid-blue);font-weight:600;margin-bottom:4px}
.contact a{overflow-wrap:anywhere;color:var(--dark-blue);font-weight:600;text-decoration:none;border-bottom:2px solid var(--cyan)}
.contact a:hover,.contact a:focus-visible{background:var(--cyan)}
footer{padding:24px clamp(20px,5vw,48px);border-top:1px solid rgba(125,160,195,.32);background:var(--light-grey);font-size:13px;color:var(--charcoal);display:flex;flex-wrap:wrap;gap:6px 24px;justify-content:space-between}
footer strong{color:var(--dark-blue)}
</style>
</head>
<body>
<div class="page">
<header><img src="data:image/webp;base64,${b64("public/images/lambs-logo-v2.webp")}" alt="Lambs Group" width="209" height="36"></header>
<main>
<span class="eyebrow">New website</span>
<h1>Coming soon.</h1>
<p class="lede">We&rsquo;re putting the finishing touches to our new website. Lambs Group has been family-run since 1988, delivering telecoms, utilities and private works. In the meantime, we&rsquo;re always happy to talk about your project.</p>
<div class="contact">
<div><span>Call us</span><a href="tel:01925810991">01925 810 991</a></div>
<div><span>Email us</span><a href="mailto:contact@lambsgroup.co.uk">contact@lambsgroup.co.uk</a></div>
</div>
</main>
<footer><strong>Lambs Group</strong><span>Built on experience. Delivered with care.</span></footer>
</div>
</body>
</html>
`;

mkdirSync(join(root, "maintenance"), { recursive: true });
writeFileSync(join(root, "maintenance/index.html"), html);
console.log(`maintenance: wrote maintenance/index.html (${Math.round(html.length / 1024)} KB)`);

if (process.env.MAINTENANCE_MODE === "true") {
  const dist = join(root, "dist");
  for (const f of readdirSync(dist)) rmSync(join(dist, f), { recursive: true, force: true });
  writeFileSync(join(dist, "index.html"), html);
  writeFileSync(join(dist, "404.html"), html); // every other address shows the holding page too
  writeFileSync(join(dist, "robots.txt"), "User-agent: *\nDisallow: /\n");
  console.log("maintenance: MAINTENANCE_MODE=true, dist/ replaced with the holding page");
}
