# Lambs Group Website — Pre-Launch Checklist (Client Content)

All technical work complete. These content items must be provided by Lambs before launch:

## 1. Brand assets
- [ ] Official Lambs Group logo SVG (currently uses an approximation at `public/images/logo-lambs-group-colour.svg` and `-white.svg`)

## 2. Accreditations — verify and provide SVGs
- [ ] NRSWA, CSCS, ECS, NEBOSH — verify credentials
- [ ] ISO 9001, ISO 14001, ISO 45001 — confirm current certification
- [ ] CHAS, Constructionline — confirm current membership
- [ ] WIRS, GIRS, NERS — confirm utilities accreditations (on `UtilitiesPage.tsx`)

## 3. Client logos — home page logo wall
Currently rendered as text. Provide SVGs for:
- [ ] Fujitsu
- [ ] Virgin Media
- [ ] Barratt Developments
- [ ] Alfred McAlpine
- [ ] Bury Council
- [ ] Kier

## 4. Photography (≥70 images)
- [ ] Home hero + about teaser (2)
- [ ] 4 sector heroes + inline shots per page (≈16)
- [ ] Private Works: before/after hero + 8–12 portfolio pairs + 6 finish swatches
- [ ] About: HQ + crew environmental (2)
- [ ] Team: 6–10 leadership portraits + 6–8 Motif crew portraits
- [ ] Our Work: 3 per non-Motif case study + 20–30 for Motif microsite
- [ ] How We Deliver: 7 stage photos
- [ ] Careers: 3 life-on-site shots

Deliver to `public/images/` — filenames per component's `src` prop (search for `picsum.photos` in the codebase to find replacement targets).

## 5. Pricing confirmation
- [ ] Confirm Private Works indicative pricing bands in `src/components/pages/private/PricingBand.tsx`

## 7. Forms (Resend + Turnstile)
- [x] Forms worker deployed to the customer Cloudflare account (`workers/forms/`)
- [x] Turnstile widget created, `TURNSTILE_SECRET_KEY` set on the worker
- [x] Repo variables `PUBLIC_FORM_ENDPOINT` and `PUBLIC_TURNSTILE_SITE_KEY` set
- [ ] Resend account created and `lambsgroup.co.uk` sending domain verified (DNS records)
- [ ] `RESEND_API_KEY` set on the worker (`wrangler secret put RESEND_API_KEY`)
- [ ] Confirm contact@ and careers@ mailboxes exist and receive test submissions
- [ ] Add `lambsgroup.co.uk` / `www.lambsgroup.co.uk` to the Turnstile widget hostnames if not already there

## 8. SEO copy per page
- [ ] Review and approve meta titles/descriptions in each `.astro` page file

## 9. Deployment
- [ ] Static hosting configured for `lambsgroup.co.uk`
- [ ] DNS pointing to static host
- [ ] SSL certificate in place
- [ ] Sitemap at `https://lambsgroup.co.uk/sitemap-index.xml` reachable

## 10. Accessibility and performance
- [ ] Lighthouse audit on production hosting (desktop + mobile)
- [ ] axe-core a11y scan across all 15 pages
- [ ] Cross-browser check (Chrome, Safari, Firefox, mobile Safari)

## Content that must be confirmed or replaced before launch
- [x] **Accreditations (received 2026-10-23):** ISO 9001:2015, ISO 14001:2015, ISO 45001:2018; working towards CHAS; team qualifications NRSWA, Openreach-specific training, manual handling, banksman, abrasive wheels, first aid, asbestos awareness. Site now uses only these (`src/data/credentials.ts`). **Still open:** do they also hold CSCS, NEBOSH, ECS, WIRS, GIRS, NERS (removed from the site); what is "Smart Awards"; ISO certification body and certificate numbers; confirm NRSWA wording.
- [ ] **Private Works images:** replace the placeholder portfolio, finishes gallery and before/after (`PortfolioGallery.tsx`, `FinishesGallery.tsx`, `images/private/`) with the chosen real photos; then convert the before/after PNGs to the existing .webp files.
- [ ] **Motif crew section:** removed from the page. Re-add `MotifCrew` only with real names, roles and photos.
- [ ] **How We Deliver stages 1-3 (Brief, Survey, Design):** currently a brand panel; add real photos if available.
- [ ] **Project photos:** the 11 `images/utilities/job-*.webp` photos are one street-works scene and show a "JN Civils" branded truck. Confirm they are Lambs' own work (or that JN Civils agrees), and consider more varied photos.
- [ ] **Legal pages:** registered company name/number, ICO number, registered office, retention periods (Lambs Group has confirmed it is the data controller).
- [ ] **LinkedIn:** the linked page is the Civils company (`lambs-uk-civils-ltd`); replace with a Lambs Group page.

## Civils and groundworks messaging (client direction 2026-10-23)
Client (Amanda): civils is a current, substantial capability across Telecoms, Utilities and Groundworks; present the group's combined experience, no separate Civils page, no old company names. Done on the site: Home "Our experience" section, About paragraph, years-counting removed ("Our roots date back to 1988"), search wording. Still waiting on the client's team to confirm:
- [ ] Civils work carried out in Telecoms today, and the reinstatement standard (then add the Telecoms civils section)
- [ ] Civils and groundworks work carried out in Utilities and Private Works today (then add those sections)
- [ ] Qualifications and accreditations held (NRSWA etc.)
- [ ] Customer names and whether logos can be shown; previous-work entries (e.g. housebuilder, local authority)
- [ ] Whether the JN Civils photos/logo may be used
- [ ] Whether the About page keeps the original name "S Lamb Construction"
- [ ] About page 1988 story says "employ the people who do the work... subcontracting undermines quality": review against the self-employed engineers point
- [ ] LinkedIn: rename the page to Lambs Group (and its web address), then update the link in `src/utils/schema.ts`
