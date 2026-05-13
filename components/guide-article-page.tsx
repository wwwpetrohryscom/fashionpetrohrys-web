import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { Section } from "@/components/section";
import {
  getGuideArticle,
  type GuideArticleSlug,
} from "@/data/guide-articles";
import { localizePath, type Locale } from "@/lib/i18n";
import { getMessages } from "@/lib/messages";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

type GuideArticlePageProps = {
  slug: GuideArticleSlug;
  locale: Locale;
};

export function buildGuideArticleMetadata(
  slug: GuideArticleSlug,
  locale: Locale,
): Metadata {
  const messages = getMessages(locale);
  const article = getGuideArticle(slug);
  const translated =
    messages.articles[slug as keyof typeof messages.articles] ?? article;

  return buildMetadata({
    title: translated.title,
    description: translated.description,
    path: `/guides/${slug}`,
    type: "article",
    locale,
  });
}

export function GuideArticlePage({ slug, locale }: GuideArticlePageProps) {
  const article = getGuideArticle(slug);
  const messages = getMessages(locale);
  const localizedPath = localizePath(locale, `/guides/${slug}`);
  const guidesPath = localizePath(locale, "/guides");
  const homeLabel = messages.common.home;
  const guidesLabel = messages.nav.guides;

  return (
    <article className="space-y-10">
      <JsonLd
        data={articleSchema({
          headline: article.title,
          description: article.description,
          path: localizedPath,
          datePublished: article.publishedAt,
          dateModified: article.updatedAt,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: homeLabel, path: localizePath(locale, "/") },
          { name: guidesLabel, path: guidesPath },
          { name: article.title, path: localizedPath },
        ])}
      />

      <Breadcrumbs
        locale={locale}
        items={[
          { label: homeLabel, href: "/" },
          { label: guidesLabel, href: "/guides" },
          { label: article.title },
        ]}
      />

      <Section
        kicker="Guide"
        title={article.title}
        description={article.description}
      />

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_16rem] lg:items-start">
        <div className="max-w-2xl space-y-8 text-neutral-700">
          <p className="text-sm text-neutral-500">
            Published {article.publishedAt}. Updated {article.updatedAt}.
          </p>

          <div className="space-y-5">
            {article.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          {article.sections.map((section) => (
            <section key={section.title} className="space-y-4">
              <h2 className="pt-2 text-xl font-semibold text-neutral-900">
                {section.title}
              </h2>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.subsections?.map((subsection) => (
                <div key={subsection.title} className="space-y-2">
                  <h3 className="text-lg font-semibold text-neutral-900">
                    {subsection.title}
                  </h3>
                  <p>{subsection.body}</p>
                </div>
              ))}
              {section.checklist ? (
                <ul className="space-y-2 pl-5">
                  {section.checklist.map((item) => (
                    <li key={item} className="list-disc">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}

          <p className="text-sm text-neutral-500">
            More structured wardrobe advice lives in{" "}
            <Link className="underline" href={guidesPath}>
              Guides
            </Link>
            .
          </p>
        </div>

        <aside className="space-y-3 border-l-2 border-signal pl-4 text-sm">
          <h2 className="font-semibold text-neutral-900">Use this with</h2>
          <ul className="space-y-3">
            {article.internalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={localizePath(locale, link.href)}
                  className="font-medium text-neutral-900 underline-offset-4 hover:underline"
                >
                  {link.label}
                </Link>
                <p className="mt-1 text-neutral-600">{link.description}</p>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </article>
  );
}
