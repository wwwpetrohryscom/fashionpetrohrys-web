# SEO Content Quality Audit

Date: 2026-05-05
Repository: `wwwpetrohryscom/fashionpetrohrys-web`

## Current architecture

- Framework: Next.js App Router.
- UI: React, Tailwind CSS.
- Routing: localized routes under `/en`, `/de`, `/fr`, `/es`, `/pt`.
- SEO foundation: centralized `buildMetadata()`, localized sitemap, robots route, canonical and alternates.
- Privacy foundation: cookie consent and consent-based analytics loading.

## Issues found

### Technical SEO

1. Structured data was not centralized.
   - Risk: inconsistent JSON-LD implementation across pages.
   - Fix: added reusable JSON-LD component and schema builders.

2. Anti-spam protections were not available as reusable server-side utilities.
   - Risk: future forms can ship with only client-side validation.
   - Fix: added content validation, sanitization, rate limiting, and optional Turnstile verification.

3. Content quality checks were not codified.
   - Risk: thin text, repeated phrases, keyword stuffing, and excessive outbound links can enter the site unnoticed.
   - Fix: added `validateContent()` with explicit quality rules.

4. Sitemap and robots are present, but all future pages must have real `updatedDate` values.
   - Requirement: every content item should expose `publishedAt` and `updatedAt` so `lastmod` remains accurate.

### Content SEO

1. Category pages should avoid short generic summaries.
   - Add clearer search intent per category.
   - Use distinct language across `/guides`, `/clothing`, `/outfits`, and `/psychology`.

2. Article pages should follow a consistent semantic structure.
   - H1: one clear search intent.
   - H2: practical sections.
   - H3: only where a section needs sub-steps.
   - Internal links: parent category, one sibling article, one foundational page.

3. Topic clusters should be explicit instead of flat.

Recommended clusters:

```txt
/style-system
  /method
  /system

/guides
  /guides/capsule-wardrobe-for-men
  /guides/how-to-dress-better
  /guides/minimalist-wardrobe-for-men
  /guides/wardrobe-audit-checklist

/clothing
  /clothing/how-to-check-clothing-quality
  /clothing/best-fabrics-for-men
  /clothing/how-clothes-should-fit

/outfits
  /outfits/simple-outfit-formulas
  /outfits/smart-casual-outfits-men
  /outfits/minimalist-outfit-ideas

/psychology
  /psychology/clothing-and-first-impressions
  /psychology/why-minimal-style-works
  /psychology/how-style-affects-confidence
```

## Metadata rules

Every indexable page should have:

- title: 50-60 characters when possible;
- description: 140-160 characters when possible;
- canonical URL;
- Open Graph title, description, URL, type;
- Twitter card metadata;
- locale alternates where applicable.

## Content rules

Reject or rewrite content when it has:

- fewer than 120 words for articles;
- repeated 3-word phrases four or more times;
- target keyword density above 4.5%;
- more than three outbound links unless editorially required;
- generic filler such as `ultimate guide`, `unlock your style`, or `elevate your wardrobe` without concrete advice.

## Internal linking rules

Each article should link to:

1. Its parent category.
2. One sibling article.
3. `/method` or `/system`.
4. `/shop` only if there is a concrete buying intent.

## Form/security rules

All future forms should use:

- server-side validation;
- honeypot field named `company_website`;
- IP-based throttling;
- input sanitization;
- optional Cloudflare Turnstile with `TURNSTILE_SECRET_KEY`.

## Files added in this pass

- `lib/content-guard.ts`
- `lib/rate-limit.ts`
- `lib/sanitize.ts`
- `lib/turnstile.ts`
- `lib/schema.ts`
- `components/json-ld.tsx`
- `app/api/contact/route.ts`

## Manual follow-up

1. Add `updatedAt` and `publishedAt` to article data if missing.
2. Wire `JsonLd` into locale layout and article pages.
3. Replace in-memory rate limiting with Redis/KV before high-traffic launch.
4. Run:

```bash
npm run lint
npm run build
```
