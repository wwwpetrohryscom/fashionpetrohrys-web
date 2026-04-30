# FashionPetroHrys

Style Operating System.

This project is focused on building a scalable fashion platform:
- SEO-driven content system
- Wardrobe logic and outfit frameworks
- Future e-commerce layer

## Vision

Not a fashion blog. A system for thinking about style.

## Stack

- Next.js 15 (App Router)
- React 19
- Tailwind CSS v4
- TypeScript

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

```
app/                        # routes
├── layout.tsx              # global layout with SiteHeader/SiteFooter
├── page.tsx                # /
├── globals.css             # Tailwind v4 + signal red token
├── method/                 # /method
├── system/                 # /system
├── guides/                 # /guides + 2 articles
├── outfits/                # /outfits + 1 article
├── clothing/               # /clothing + 1 article
├── psychology/             # /psychology + 2 articles
└── shop/                   # /shop (placeholder)

components/
├── site-header.tsx
├── site-footer.tsx
├── section.tsx             # page heading with kicker + title + description
├── article-card.tsx        # used on home + category pages
└── cta-block.tsx           # dark "next step" call-to-action

data/
├── articles.ts             # all article previews + category helper
└── navigation.ts           # primary + footer nav

lib/
└── seo.ts                  # buildMetadata() + SITE_CONFIG
```

## Routes

- `/` — home (hero + entry points + all article cards)
- `/method` — the 3-step method
- `/system` — the 4 dimensions of an outfit
- `/guides` — index → `/guides/capsule-wardrobe-for-men`, `/guides/how-to-dress-better`
- `/outfits` — examples + `/outfits/simple-outfit-formulas`
- `/clothing` — index → `/clothing/how-to-check-clothing-quality`
- `/psychology` — index → `/psychology/clothing-and-first-impressions`, `/psychology/why-minimal-style-works`
- `/shop` — placeholder (coming soon)

## Brand

Red / white / black. Red is used sparingly — only as a kicker top-border accent.
The token `--color-signal: #e10600` is defined in `app/globals.css` and exposed
via Tailwind as `bg-signal`, `text-signal`, `border-signal`.

## SEO

Each page exports `metadata` built via `buildMetadata()` from `lib/seo.ts`. This
returns canonical URL, Open Graph, and Twitter card tags from a single input
object. Use it on every new page.

## Next development steps

- Real OG image at `/public/og-default.png`
- `app/sitemap.ts` and `app/robots.ts` once the production URL is live
- More articles in `data/articles.ts` + matching `app/<category>/<slug>/page.tsx`
- MDX layer (later) — keep articles in `data/articles.ts` until volume justifies it
- `/shop` integration (Shopify or Stripe) — not before content depth is in place
