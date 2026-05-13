import type { Metadata } from "next";
import Link from "next/link";
import { ArticleCard } from "@/components/article-card";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Section } from "@/components/section";
import { localizedArticlesByCategory } from "@/lib/articles";
import { localizePath } from "@/lib/i18n";
import { type LocalePageProps, resolveLocale } from "@/lib/locale-page";
import { getMessages } from "@/lib/messages";
import { buildMetadata } from "@/lib/seo";

type GuideCluster = {
  title: string;
  description: string;
  slugs: string[];
};

const CLUSTERS: GuideCluster[] = [
  {
    title: "Core system",
    description:
      "Start here. These articles set the vocabulary every other guide assumes.",
    slugs: ["how-to-dress-better"],
  },
  {
    title: "Wardrobe building",
    description:
      "Long-term wardrobe decisions: capsule logic, building personal style, and the styles people search for by name.",
    slugs: [
      "capsule-wardrobe-for-men",
      "how-to-build-personal-style",
      "old-money-style-men",
      "quiet-luxury-style",
    ],
  },
  {
    title: "Dress codes",
    description:
      "Specific dress codes translated into outfit boundaries you can actually hold to.",
    slugs: [
      "smart-casual-dress-code",
      "business-casual-men",
      "cocktail-attire-men",
      "first-date-outfit-men",
    ],
  },
  {
    title: "Color and outfits",
    description:
      "How to combine colors and how to assemble repeatable outfit formulas.",
    slugs: ["how-to-match-colors-in-outfits"],
  },
];

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const messages = getMessages(locale);

  return buildMetadata({
    title: messages.pageMeta.guides.title,
    description: messages.pageMeta.guides.description,
    path: "/guides",
    locale,
  });
}

export default async function GuidesPage({ params }: LocalePageProps) {
  const locale = await resolveLocale(params);
  const messages = getMessages(locale);
  const articles = localizedArticlesByCategory(locale, "guides");
  const articleBySlug = new Map(articles.map((a) => [a.slug, a]));
  const seen = new Set<string>();

  const clusters = CLUSTERS.map((cluster) => ({
    ...cluster,
    items: cluster.slugs
      .map((slug) => articleBySlug.get(slug))
      .filter((a): a is NonNullable<typeof a> => Boolean(a)),
  })).filter((cluster) => cluster.items.length > 0);

  for (const cluster of clusters) {
    for (const item of cluster.items) {
      seen.add(item.slug);
    }
  }

  const uncategorized = articles.filter((a) => !seen.has(a.slug));

  return (
    <div className="space-y-12">
      <Breadcrumbs
        locale={locale}
        items={[
          { label: messages.common.home, href: "/" },
          { label: messages.nav.guides },
        ]}
      />

      <Section
        kicker="Guides"
        title="Style Guides"
        description="A connected set of style guides — wardrobe systems, dress codes, color logic, clothing quality, and outfit formulas — written to fit together rather than stand alone."
      />

      {clusters.map((cluster) => (
        <section key={cluster.title} className="space-y-4">
          <header className="space-y-2">
            <h2 className="text-xl font-semibold text-neutral-900">
              {cluster.title}
            </h2>
            <p className="max-w-2xl text-sm text-neutral-600">
              {cluster.description}
            </p>
          </header>
          <ul className="grid gap-3 sm:grid-cols-2">
            {cluster.items.map((article) => (
              <li key={article.slug}>
                <ArticleCard article={article} />
              </li>
            ))}
          </ul>
        </section>
      ))}

      {uncategorized.length > 0 ? (
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-neutral-900">More guides</h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {uncategorized.map((article) => (
              <li key={article.slug}>
                <ArticleCard article={article} />
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="space-y-3 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
        <h2 className="text-lg font-semibold text-neutral-900">
          Where this fits
        </h2>
        <p className="max-w-2xl text-sm text-neutral-700">
          The guides depend on a small shared vocabulary. New readers should
          start with{" "}
          <Link className="underline" href={localizePath(locale, "/method")}>
            The Method
          </Link>{" "}
          and{" "}
          <Link className="underline" href={localizePath(locale, "/system")}>
            The System
          </Link>
          . Outfit formulas live under{" "}
          <Link
            className="underline"
            href={localizePath(locale, "/outfits/simple-outfit-formulas")}
          >
            Outfits
          </Link>
          , quality tests under{" "}
          <Link
            className="underline"
            href={localizePath(locale, "/clothing/how-to-check-clothing-quality")}
          >
            Clothing
          </Link>
          , and editorial fragrance ratings under{" "}
          <Link className="underline" href={localizePath(locale, "/perfumes")}>
            Perfumes
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
