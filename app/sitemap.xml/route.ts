import { ARTICLES } from "@/data/articles";
import { LOCALES, localizePath, type Locale } from "@/lib/i18n";
import { SITE_CONFIG } from "@/lib/seo";

const LAST_MODIFIED = "2026-05-05T00:00:00.000Z";

type SitemapEntry = {
  path: string;
  changeFrequency: "weekly" | "monthly" | "yearly";
  priority: string;
};

const HOME_ROUTES: SitemapEntry[] = [
  { path: "/", changeFrequency: "weekly", priority: "1.0" },
];

const CATEGORY_ROUTES: SitemapEntry[] = [
  { path: "/method", changeFrequency: "monthly", priority: "0.8" },
  { path: "/system", changeFrequency: "monthly", priority: "0.8" },
  { path: "/guides", changeFrequency: "monthly", priority: "0.8" },
  { path: "/outfits", changeFrequency: "monthly", priority: "0.8" },
  { path: "/clothing", changeFrequency: "monthly", priority: "0.8" },
  { path: "/psychology", changeFrequency: "monthly", priority: "0.8" },
];

const ARTICLE_ROUTES: SitemapEntry[] = ARTICLES.map((article) => ({
  path: article.href,
  changeFrequency: "monthly",
  priority: "0.7",
}));

const SHOP_ROUTES: SitemapEntry[] = [
  { path: "/shop", changeFrequency: "monthly", priority: "0.5" },
];

const LEGAL_ROUTES: SitemapEntry[] = [
  { path: "/privacy-policy", changeFrequency: "yearly", priority: "0.3" },
  { path: "/cookie-policy", changeFrequency: "yearly", priority: "0.3" },
];

const ROUTES: SitemapEntry[] = [
  ...HOME_ROUTES,
  ...CATEGORY_ROUTES,
  ...ARTICLE_ROUTES,
  ...SHOP_ROUTES,
  ...LEGAL_ROUTES,
];

function absoluteUrl(locale: Locale, path: string) {
  return new URL(localizePath(locale, path), SITE_CONFIG.url).toString();
}

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function renderSitemap() {
  const urls = ROUTES.flatMap((route) =>
    LOCALES.map((locale) => {
      const loc = escapeXml(absoluteUrl(locale, route.path));

      return [
        "  <url>",
        `    <loc>${loc}</loc>`,
        `    <lastmod>${LAST_MODIFIED}</lastmod>`,
        `    <changefreq>${route.changeFrequency}</changefreq>`,
        `    <priority>${route.priority}</priority>`,
        "  </url>",
      ].join("\n");
    }),
  ).join("\n");

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urls,
    '</urlset>',
  ].join("\n");
}

export function GET() {
  return new Response(renderSitemap(), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
