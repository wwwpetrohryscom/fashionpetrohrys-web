import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/section";
import { ArticleCard } from "@/components/article-card";
import { localizedArticlesByCategory } from "@/lib/articles";
import { localizePath } from "@/lib/i18n";
import { type LocalePageProps, resolveLocale } from "@/lib/locale-page";
import { getMessages } from "@/lib/messages";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const messages = getMessages(locale);

  return buildMetadata({
    title: messages.pageMeta.clothing.title,
    description: messages.pageMeta.clothing.description,
    path: "/clothing",
    locale,
  });
}

export default async function ClothingPage({ params }: LocalePageProps) {
  const locale = await resolveLocale(params);
  const articles = localizedArticlesByCategory(locale, "clothing");

  return (
    <div className="space-y-10">
      <Section
        kicker="Clothing"
        title="Evaluate before you buy"
        description="A wardrobe is only as good as the pieces in it. Articles in this section teach you how to evaluate fabric, construction, and fit so you stop wasting money on garments that fail in 6 months."
      />

      <ul className="grid gap-3 sm:grid-cols-2">
        {articles.map((a) => (
          <li key={a.slug}>
            <ArticleCard article={a} />
          </li>
        ))}
      </ul>

      <p className="max-w-2xl text-sm text-neutral-600">
        Once you can spot quality, see{" "}
        <Link className="underline" href={localizePath(locale, "/shop")}>
          Shop
        </Link>{" "}
        for curated picks that survive these tests.
      </p>
    </div>
  );
}
