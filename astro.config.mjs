import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';
import { readFileSync } from 'node:fs';

// Old lambsgroup.co.uk (WordPress) URLs -> new pages, so search engines and
// bookmarks don't hit dead links at launch. Source list taken from the old
// site's wp-sitemap. Static output emits meta-refresh pages; swap for host-level
// 301s (e.g. _redirects / staticwebapp.config.json) once hosting is chosen.
const base = '/lambs'; // production: ''

// Baseline <lastmod> dates for the sitemap (July-September 2026), keyed by page path.
// Fixed on purpose so they don't change every build. Replace with real edit dates
// (or git commit dates) once the site is live: Google discounts lastmod that proves unreliable.
const lastmod = JSON.parse(readFileSync(new URL('./src/data/sitemap-lastmod.json', import.meta.url), 'utf8'));
const redirects = Object.fromEntries(Object.entries({
  // Company pages
  '/about-us': '/about',
  '/contact-us': '/contact',
  '/our-team': '/team',
  '/staff-member/administrative-staff': '/team',
  '/staff-member/team-managers': '/team',
  '/staff-member/dave-edmonds': '/team',
  '/staff-member/ray-pennington': '/team',
  '/staff-member/amanda-lamb': '/team',
  '/staff-member/simon-lamb': '/team',
  '/standards-training': '/how-we-deliver',

  // Services
  '/our-services': '/telecoms',
  '/what-we-do': '/telecoms',
  '/our-expertise': '/telecoms',
  '/services': '/telecoms',

  // Work / case studies
  '/case-studies': '/work',
  '/local-authority-work': '/work',
  '/barratt-developments-plc': '/work',
  '/portfolio-item/civil-engineering': '/work',
  '/portfolio-item/structural-engineering': '/work',
  '/portfolio-category/recent-work': '/work',
  '/slides/lambsuk': '/work',
  '/slides/lambsuk-2': '/work',
  '/slides/lambsuk-3': '/work',

  // Legal pages
  '/cookie-privacy-policy': '/privacy',
  '/terms-conditions': '/terms',

  // News / test posts (no equivalent on the new site)
  '/news': '/',
  '/category/latest-news': '/',
  '/test-post-one': '/',
  '/test-post-2': '/',
}).map(([from, to]) => [from, base + to]));

export default defineConfig({
  redirects,
  // production: site: 'https://lambsgroup.co.uk',
  site: 'https://lambs-group.github.io',
  base,
  integrations: [
    react(),
    sitemap({
      serialize(item) {
        const path = new URL(item.url).pathname.replace(base, '') || '/';
        if (lastmod[path]) item.lastmod = new Date(lastmod[path]).toISOString();
        return item;
      },
    }),
  ],
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
