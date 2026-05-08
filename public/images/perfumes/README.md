# Perfume product images

Drop optimized product photos here using the slug-based filename convention:

```
public/images/perfumes/{slug}-bottle.webp
public/images/perfumes/{slug}-box.webp
public/images/perfumes/{slug}-hero.webp
```

Recommended dimensions:

- bottle: 800x1000, target < 180 KB
- box: 900x900
- hero composition: 1400x900, target < 350 KB

To activate a real image for a perfume, edit `data/perfumes.ts` and override
`bottleImage` (or `boxImage`, `heroImage`) on that entry with the real
metadata, including a non-`placeholder` `sourceType`. The default placeholder
SVG is rendered automatically when no image is provided or when
`sourceType === "placeholder"`.

Every image must be documented in `docs/perfume-image-sources.md`.

Only commit images you have the right to use. Do not hotlink.
