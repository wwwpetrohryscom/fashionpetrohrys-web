import type { MetadataRoute } from "next";
import { LOCALES, localizePath, type Locale } from "@/lib/i18n";
import { SITE_CONFIG } from "@/lib/seo";

const UPDATED_DATE = new Date("2026-05-03");

const ROUTES = [
  "/",
  "/method",
  "/system",
  "/system/the-formality-ladder-explained",
  "/guides",
  "/guides/capsule-wardrobe-for-men",
  "/guides/how-to-dress-better",
  "/outfits",
  "/outfits/simple-outfit-formulas",
  "/clothing",
  "/clothing/how-to-check-clothing-quality",
  "/psychology",
  "/psychology/clothing-and-first-impressions",
  "/psychology/why-minimal-style-works",
  "/shop",
  "/privacy-policy",
  "/cookie-policy",
];

function absoluteUrl(locale: Locale, path: string) {
  return new URL(localizePath(locale, path), SITE_CONFIG.url).toString();
}

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.flatMap((path) =>
    LOCALES.map((locale) => ({
      url: absoluteUrl(locale, path),
      lastModified: UPDATED_DATE,
      changeFrequency: path === "/" ? "weekly" : "monthly",
      priority: path === "/" ? 1 : 0.7,
      alternates: {
        languages: Object.fromEntries(
          LOCALES.map((alternateLocale) => [
            alternateLocale,
            absoluteUrl(alternateLocale, path),
          ]),
        ),
      },
    })),
  );
}
