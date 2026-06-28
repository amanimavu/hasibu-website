# Hasibu Website

Marketing and product website for **Hasibu** — an all-in-one ERP and POS platform built for African SMEs. Designed in Africa for Africa, with mobile money payments, multi-currency support, and local compliance (KRA eTIMS) baked in.

Live site: [hasibu.africa](https://hasibu.africa)

## Tech Stack

| Concern | Choice |
|---|---|
| Framework | [Astro](https://astro.build) 6.4 (static output / SSG) |
| UI islands | React 19 (`@astrojs/react`) |
| Styling | Tailwind CSS 4 (via `@tailwindcss/vite`) |
| Icons | `astro-icon` + Iconify (hugeicons, material-symbols) |
| Content (CMS) | Directus (`@directus/sdk`) |
| Blog | Hasibu blog API (`api.hasibu.africa`) |
| Language | TypeScript (strict) |
| Package manager | npm |

## Getting Started

Requirements: Node.js 18+ and npm.

```bash
npm install          # install dependencies
cp .env.example .env # configure content sources (optional, see below)
npm run dev          # start dev server with file watching
```

The dev server runs at `http://localhost:4321` by default.

## Scripts

| Command | Action |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Build the static site to `dist/` |
| `npm run preview` | Preview the built site locally |
| `npm run check` | Run Astro / TypeScript type checking |
| `npm run astro` | Run the Astro CLI directly |

## Environment Variables

Content is fetched at build time from external sources. See `.env.example`. Both sources fall back to seed data if unavailable, so a local build works without them.

| Variable | Purpose |
|---|---|
| `DIRECTUS_URL` | Directus CMS base URL |
| `DIRECTUS_TOKEN` | Directus access token |
| `HASIBU_API_URL` | Hasibu blog API base URL |
| `HASIBU_API_KEY` | Hasibu blog API key |

## Project Structure

```
src/
├── pages/            # File-based routes
│   ├── index.astro           # Home
│   ├── pricing.astro
│   ├── company/              # about, contact
│   ├── product/              # module pages + [module].astro dynamic + integrations
│   └── solutions/            # index + [slug].astro (industries & roles)
├── components/       # Header, Footer, SEO, ProductHero
│   └── sections/             # Hero, Modules, Pricing, CustomerStories, CTABanner, Payments
├── layouts/
│   └── BaseLayout.astro      # Shell: Header + Footer + SEO
├── styles/
│   └── global.css            # Tailwind v4 + brand theme tokens
├── data/
│   └── solutions.ts          # Industry & role solution data
├── lib/
│   ├── directus.ts           # Directus client + typed schema
│   └── hasibu.ts             # Blog API client
└── assets/images/    # brand, desktop, mobile, partners, integrations
public/                       # favicons, robots.txt, web manifest
```

### Routing notes

- `product/[module].astro` — dynamic per-module detail pages.
- `solutions/[slug].astro` — dynamic pages for industries (retail, restaurant, wholesale, manufacturing, services, supermarket, pharmacy) and roles (owners, cashiers, accountants, distributors).

## Content Sources

- **Directus CMS** — site settings, pages, product modules, solutions, countries, integrations, testimonials, pricing tiers. Falls back to seed data at build time.
- **Hasibu blog API** — `/blog/posts` and `/blog/posts/{slug}`, normalized to `BlogPost` objects.

## Building & Deploying

```bash
npm run build      # outputs static site to dist/
npm run preview    # verify the build locally
```

The `dist/` output is static and deployable to any static host (Vercel, Netlify, Cloudflare Pages, S3, etc.). No deploy config is committed — configure your host to run `npm run build` and serve `dist/`.

## Configuration Files

- `astro.config.mjs` — site URL, static output, React + astro-icon integrations.
- `tsconfig.json` — strict mode, `@/*` → `./src/*` path alias.
