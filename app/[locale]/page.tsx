import type { Metadata } from "next";
import Link from "next/link";
import { ArticleCard } from "@/components/article-card";
import { CtaBlock } from "@/components/cta-block";
import { PRIMARY_NAV } from "@/data/navigation";
import { getLocalizedArticles } from "@/lib/articles";
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
    title: messages.pageMeta.home.title,
    description: messages.pageMeta.home.description,
    path: "/",
    locale,
  });
}

export default async function HomePage({ params }: LocalePageProps) {
  const locale = await resolveLocale(params);
  const messages = getMessages(locale);
  const articles = getLocalizedArticles(locale);

  return (
    <div className="space-y-20">
      <section className="space-y-6">
        <div className="inline-block border-t-2 border-signal pt-2 text-xs font-semibold uppercase tracking-widest">
          {messages.home.kicker}
        </div>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          {messages.home.title}
        </h1>
        <p className="max-w-2xl text-lg text-neutral-600">
          {messages.home.description}
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href={localizePath(locale, "/method")}
            className="border border-neutral-900 bg-neutral-900 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-white hover:text-neutral-900"
          >
            {messages.home.primaryCta}
          </Link>
          <Link
            href={localizePath(locale, "/system")}
            className="border border-neutral-900 px-5 py-2 text-sm font-medium transition-colors hover:bg-neutral-900 hover:text-white"
          >
            {messages.home.secondaryCta}
          </Link>
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight">
          {messages.home.whereToStart}
        </h2>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {PRIMARY_NAV.map((entry) => (
            <li key={entry.href}>
              <Link
                href={localizePath(locale, entry.href)}
                className="block h-full rounded-lg border border-neutral-200 p-5 transition-colors hover:border-neutral-900"
              >
                <div className="font-medium">{messages.nav[entry.key]}</div>
                <div className="mt-1 text-sm text-neutral-600">
                  {messages.home.entryPoints[entry.key]}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight">
          {messages.home.read}
        </h2>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <li key={article.slug}>
              <ArticleCard article={article} />
            </li>
          ))}
        </ul>
      </section>

      <CtaBlock
        title={messages.home.ctaTitle}
        description={messages.home.ctaDescription}
        ctaLabel={messages.home.ctaLabel}
        ctaHref={localizePath(locale, "/method")}
      />
    </div>
  );
}
