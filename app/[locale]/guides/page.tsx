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
    title: messages.pageMeta.guides.title,
    description: messages.pageMeta.guides.description,
    path: "/guides",
    locale,
  });
}

export default async function GuidesPage({ params }: LocalePageProps) {
  const locale = await resolveLocale(params);
  const articles = localizedArticlesByCategory(locale, "guides");

  return (
    <div className="space-y-10">
      <Section
        kicker="Guides"
        title="Practical guides for building a real wardrobe"
        description="Each guide is a step-by-step application of the system. Start with the capsule and work outward."
      />

      <ul className="grid gap-3 sm:grid-cols-2">
        {articles.map((a) => (
          <li key={a.slug}>
            <ArticleCard article={a} />
          </li>
        ))}
      </ul>

      <p className="max-w-2xl text-sm text-neutral-600">
        New here? Read{" "}
        <Link className="underline" href={localizePath(locale, "/method")}>
          The Method
        </Link>{" "}
        and{" "}
        <Link className="underline" href={localizePath(locale, "/system")}>
          The System
        </Link>{" "}
        first — every guide assumes that vocabulary.
      </p>
    </div>
  );
}
