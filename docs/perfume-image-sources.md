# Perfume image source register

This file documents every product image used in the perfume ranking cluster.
Every image added under `public/images/perfumes/` must have a corresponding
row here.

## Policy

Allowed sources, in order of preference:

1. Official brand websites (with usage rights confirmed).
2. Official press / press-kit pages.
3. Official retailer product images **only** when licensing permits use.
4. Wikimedia Commons, when the license permits use and attribution is
   included in this file.
5. Self-hosted images provided by the repository owner.
6. Generated placeholder / typography illustrations when real product image
   rights cannot be confirmed.

Disallowed:

- Random images scraped from Google Images, Pinterest, Reddit, TikTok,
  Instagram, marketplaces, or any third-party site without a license.
- Hotlinking to external image URLs.
- Imitations of brand packaging dressed up as the real product.

## Current state (2026-05-08)

Image rights for all 15 perfumes have **not** been confirmed by the
repository owner. To stay safe, every entry below is rendered as a
typography + abstract bottle silhouette placeholder. The data shape is
ready to accept real images: replace the `bottleImage` (or add `boxImage`
/ `heroImage`) on the perfume entry in `data/perfumes.ts` and update the
row here.

| Perfume                                | Slug                            | File                                            | Source URL | Source type | Attribution |
| -------------------------------------- | ------------------------------- | ----------------------------------------------- | ---------- | ----------- | ----------- |
| Creed Aventus                          | creed-aventus                   | (placeholder)                                   | —          | placeholder | —           |
| Roja Elysium                           | roja-elysium                    | (placeholder)                                   | —          | placeholder | —           |
| Nasomatto Black Afgano                 | nasomatto-black-afgano          | (placeholder)                                   | —          | placeholder | —           |
| Marc-Antoine Barrois Ganymede          | marc-antoine-barrois-ganymede   | (placeholder)                                   | —          | placeholder | —           |
| Clive Christian Hedonistic             | clive-christian-hedonistic      | (placeholder)                                   | —          | placeholder | —           |
| Maison Francis Kurkdjian Baccarat Rouge 540 | baccarat-rouge-540         | (placeholder)                                   | —          | placeholder | —           |
| Initio Parfums Privés Oud for Greatness     | initio-oud-for-greatness   | (placeholder)                                   | —          | placeholder | —           |
| Louis Vuitton Imagination              | louis-vuitton-imagination       | (placeholder)                                   | —          | placeholder | —           |
| BVLGARI Le Gemme Tygar                 | bvlgari-tygar                   | (placeholder)                                   | —          | placeholder | —           |
| Maison Crivelli Oud Maracujá           | maison-crivelli-oud-maracuja    | (placeholder)                                   | —          | placeholder | —           |
| Chanel Bleu de Chanel Parfum           | bleu-de-chanel-parfum           | (placeholder)                                   | —          | placeholder | —           |
| Dior Homme Intense                     | dior-homme-intense              | (placeholder)                                   | —          | placeholder | —           |
| Ex Nihilo Fleur Narcotique             | ex-nihilo-fleur-narcotique      | (placeholder)                                   | —          | placeholder | —           |
| Kilian Good Girl Gone Bad              | kilian-good-girl-gone-bad       | (placeholder)                                   | —          | placeholder | —           |
| Chanel Platinum Égoïste                | chanel-platinum-egoiste         | (placeholder)                                   | —          | placeholder | —           |

## How to add a real image

1. Confirm usage rights from a trustworthy source listed in the policy above.
2. Save an optimized WebP under `public/images/perfumes/` using the
   `{slug}-bottle.webp` (or `-box.webp`, `-hero.webp`) convention.
3. In `data/perfumes.ts`, override `bottleImage` on the perfume entry with
   the real metadata and `sourceType` other than `"placeholder"`.
4. Replace the matching row in this table with the file path, source URL,
   source type, and attribution string if required by the license.
