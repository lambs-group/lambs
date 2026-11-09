import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';
import { readFileSync } from 'node:fs';
import { oldSiteRedirects } from './src/data/old-site-redirects.mjs';

// Production build (Cloudflare Pages, https://lambsgroup.co.uk) is SITE_TARGET=production;
// anything else is the GitHub Pages client preview under /lambs.
const production = process.env.SITE_TARGET === 'production';
const base = production ? '' : '/lambs';
const site = production ? 'https://lambsgroup.co.uk' : 'https://lambs-group.github.io';

// Sitemap <lastmod> dates, keyed by page path. Generated from real git history
// by scripts/sitemap-lastmod.mjs (runs before every build) and committed.
const lastmod = JSON.parse(readFileSync(new URL('./src/data/sitemap-lastmod.json', import.meta.url), 'utf8'));
// Static output emits meta-refresh pages for these; production also gets real 301s (scripts/redirects.mjs).
const redirects = Object.fromEntries(Object.entries(oldSiteRedirects).map(([from, to]) => [from, base + to]));


export default defineConfig({
  redirects,
  site,
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
