# Astro Starter Template

A production-ready website starter built with Astro, React and Tailwind CSS. Includes SEO, structured data, sitemap, contact form, and responsive design out of the box.

## Quick Start

```bash
# 1. Copy this template for your new client
cp -r astro-starter-template my-client-website
cd my-client-website

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Build for production
npm run build
```

## Customising for a New Client

### 1. Site URL
In `astro.config.mjs`, set the `site` property:
```js
site: 'https://yourclient.com',
```

### 2. Colours
Edit `src/styles/global.css` to set the brand palette. All colours use CSS custom properties:
- `--color-primary-deep` — primary dark (buttons, headers)
- `--color-primary-mid` — primary medium (accents, links)
- `--color-primary-light` — primary light (highlights)
- `--color-primary-pale` — primary very light (backgrounds)
- `--color-accent` — secondary accent colour
- `--color-highlight` — tertiary highlight colour

### 3. Content
Edit the markdown files in `src/content/pages/`:
- `home.md` — SEO title, description, hero text, CTA
- `about.md` — about page content
- `services.md` — services page content
- `contact.md` — email, phone, address, Calendly URL

### 4. Components
Customise the React components in `src/components/`:
- `Navbar.tsx` — navigation links, brand name, phone number
- `Footer.tsx` — footer links, contact details, trust badges
- `home/` — home page sections (hero, services, CTA)
- `pages/` — inner page components (about, services, contact)

### 5. Images
Add client images to `public/images/`. Replace:
- Logo / brand mark
- Team photos
- OG image (`og-default.jpg` — 1200x630px)
- Favicons (`favicon.ico`, `favicon-32.png`, `apple-touch-icon.png`)

### 6. Forms (Cloudflare Worker + Resend + Turnstile)
All forms (contact, careers, Private Works quote) POST to a Cloudflare Worker in `workers/forms/`, which checks a Cloudflare Turnstile token and then emails the submission via [Resend](https://resend.com). No form key is stored in the site.
- Setup and go-live steps: [`workers/forms/README.md`](workers/forms/README.md)
- The site build reads two GitHub repo variables: `PUBLIC_FORM_ENDPOINT` (the worker URL) and `PUBLIC_TURNSTILE_SITE_KEY` (public Turnstile key)
- Secrets (`RESEND_API_KEY`, `TURNSTILE_SECRET_KEY`) live on the worker only, set with `wrangler secret put`

### 7. SEO
- **Per-page meta**: set `seo_title` and `seo_description` in each `.md` file
- **Structured data**: edit the JSON-LD in `src/layouts/Base.astro`
- **Sitemap**: auto-generated at `/sitemap-index.xml`
- **robots.txt**: update the sitemap URL in `public/robots.txt`
- **AI/LLM**: update `public/llms.txt` with business details

## Deploying

Pushes to `main` build and deploy the site to GitHub Pages via `.github/workflows/deploy.yml` (preview at https://lambs-group.github.io/lambs/). To build locally:

```bash
npm run build   # output in dist/
```

For production on `lambsgroup.co.uk`, set `site` to `https://lambsgroup.co.uk` and `base` to `''` in `astro.config.mjs`. Old-URL redirects are in the same file.

## What's Included

- **Astro** — static site generator
- **React** — interactive components
- **Tailwind CSS** — utility-first styling
- **Sitemap** — auto-generated XML sitemap
- **SEO** — meta tags, Open Graph, Twitter cards, canonical URLs, JSON-LD
- **Cloudflare Worker + Resend + Turnstile** — form handling with bot protection (`workers/forms/`)
- **Responsive** — mobile-first design
- **Animations** — fade-in scroll animations
- **Button icons** — auto calendar/phone/email icons based on link type
