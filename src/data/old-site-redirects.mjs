// Old lambsgroup.co.uk (WordPress) URLs -> new pages, so search engines and bookmarks
// don't hit dead links at launch. Source list taken from the old site's wp-sitemap.
// Used by astro.config.mjs (meta-refresh fallback pages) and scripts/redirects.mjs
// (real 301s for Cloudflare Pages, written to dist/_redirects on production builds).
export const oldSiteRedirects = {
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

  // Preview-only: the live works map was removed
  '/map': '/',

  // News / test posts (no equivalent on the new site)
  '/news': '/',
  '/category/latest-news': '/',
  '/test-post-one': '/',
  '/test-post-2': '/',
};

// Whole old sections with no individual equivalent. Matched after the exact paths above.
export const oldSiteSplats = {
  '/staff-member/*': '/team',
  '/portfolio-item/*': '/work',
  '/portfolio-category/*': '/work',
  '/slides/*': '/work',
  '/category/*': '/',
};
