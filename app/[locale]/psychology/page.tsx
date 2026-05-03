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
    title: messages.pageMeta.psychology.title,
    description: messages.pageMeta.psychology.description,
    path: "/psychology",
    locale,
  });
}

export default async function PsychologyPage({ params }: LocalePageProps) {
  const locale = await resolveLocale(params);
  const articles = localizedArticlesByCategory(locale, "psychology");

  return (
    <div className="space-y-10">
      <Section
        kicker="Psychology"
        title="Clothing is a signal"
        description="What you wear changes how others perceive you and how you perceive yourself. The articles below explain which signals matter most and how to send them on purpose."
      />

      <ul className="grid gap-3 sm:grid-cols-2">
        {articles.map((a) => (
          <li key={a.slug}>
            <ArticleCard article={a} />
          </li>
        ))}
      </ul>

      <p className="max-w-2xl text-sm text-neutral-600">
        Want to apply this practically?{" "}
        <Link className="underline" href={localizePath(locale, "/method")}>
          The Method
        </Link>{" "}
        and{" "}
        <Link className="underline" href={localizePath(locale, "/guides")}>
          Guides
        </Link>{" "}
        are where signal becomes wardrobe.
      </p>
    </div>
  );
}
