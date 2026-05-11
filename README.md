# Fashion Area Top

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
├── [locale]/               # /en, /de, /fr, /es, /pt localized routes
├── globals.css             # Tailwind v4 + signal red token
├── robots.ts               # robots.txt
└── sitemap.xml/route.ts    # localized XML sitemap

components/
├── site-header.tsx
├── site-footer.tsx
├── language-switcher.tsx
├── cookie-consent.tsx
├── cookie-settings-modal.tsx
├── analytics-provider.tsx
├── section.tsx             # page heading with kicker + title + description
├── article-card.tsx        # used on home + category pages
└── cta-block.tsx           # dark "next step" call-to-action

data/
├── articles.ts             # all article previews + category helper
└── navigation.ts           # primary + footer nav

lib/
├── i18n.ts                 # locale config + route helpers
├── messages.ts             # message loader
├── consent.ts              # consent storage contract
└── seo.ts                  # buildMetadata() + SITE_CONFIG

messages/
├── en.json
├── de.json
├── fr.json
├── es.json
└── pt.json
```

## Routes

- `/en`, `/de`, `/fr`, `/es`, `/pt` — localized home
- `/<locale>/method` — the 3-step method
- `/<locale>/system` — the 4 dimensions of an outfit
- `/<locale>/guides` — index + style guide articles
- `/<locale>/outfits` — examples + 1 article
- `/<locale>/clothing` — index + 1 article
- `/<locale>/psychology` — index + 2 articles
- `/<locale>/privacy-policy`, `/<locale>/cookie-policy` — legal pages
- `/`, `/method`, `/privacy-policy`, etc. redirect to `/en/...`

## Brand

Red / white / black. Red is used sparingly — only as a kicker top-border accent.
The token `--color-signal: #e10600` is defined in `app/globals.css` and exposed
via Tailwind as `bg-signal`, `text-signal`, `border-signal`.

## SEO

Each page exports localized metadata built via `buildMetadata()` from
`lib/seo.ts`. This returns canonical URL, hreflang alternates, Open Graph, and
Twitter card tags from a single input object. Use it on every new page.

## Privacy and analytics

Cookie consent is explicit and stored in `localStorage` under
`fashion_area_cookie_consent`. Google Analytics is denied by default and loads
only when analytics consent is true. Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` to
enable production GA loading.

## Next development steps

- Real OG image at `/public/og-default.png`
- More articles in `data/articles.ts` + matching `app/<category>/<slug>/page.tsx`
- MDX layer (later) — keep articles in `data/articles.ts` until volume justifies it
- `/shop` integration (Shopify or Stripe) — not before content depth is in place
