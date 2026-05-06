import type { MetadataRoute } from "next";
import { ARTICLES } from "@/data/articles";
import { LOCALES, localizePath, type Locale } from "@/lib/i18n";
import { SITE_CONFIG } from "@/lib/seo";

const LAST_MODIFIED = new Date("2026-05-05");

type RouteEntry = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

const HOME_ROUTES: RouteEntry[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
];

const CATEGORY_ROUTES: RouteEntry[] = [
  { path: "/method", changeFrequency: "monthly", priority: 0.8 },
  { path: "/system", changeFrequency: "monthly", priority: 0.8 },
  { path: "/guides", changeFrequency: "monthly", priority: 0.8 },
  { path: "/outfits", changeFrequency: "monthly", priority: 0.8 },
  { path: "/clothing", changeFrequency: "monthly", priority: 0.8 },
  { path: "/psychology", changeFrequency: "monthly", priority: 0.8 },
];

const ARTICLE_ROUTES: RouteEntry[] = ARTICLES.map((article) => ({
  path: article.href,
  changeFrequency: "monthly",
  priority: 0.7,
}));

const SHOP_ROUTES: RouteEntry[] = [
  { path: "/shop", changeFrequency: "monthly", priority: 0.5 },
];

const LEGAL_ROUTES: RouteEntry[] = [
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/cookie-policy", changeFrequency: "yearly", priority: 0.3 },
];

const ROUTES: RouteEntry[] = [
  ...HOME_ROUTES,
  ...CATEGORY_ROUTES,
  ...ARTICLE_ROUTES,
  ...SHOP_ROUTES,
  ...LEGAL_ROUTES,
];

function absoluteUrl(locale: Locale, path: string) {
  return new URL(localizePath(locale, path), SITE_CONFIG.url).toString();
}

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.flatMap((route) =>
    LOCALES.map((locale) => ({
      url: absoluteUrl(locale, route.path),
      lastModified: LAST_MODIFIED,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: Object.fromEntries(
          LOCALES.map((alternateLocale) => [
            alternateLocale,
            absoluteUrl(alternateLocale, route.path),
          ]),
        ),
      },
    })),
  );
}
