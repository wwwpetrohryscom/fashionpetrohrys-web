import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { OutfitFormulaCard } from "@/components/outfit-formula-card";
import { Section } from "@/components/section";
import {
  OUTFIT_IDEAS,
  getOutfitIdea,
  type OutfitIdea,
} from "@/data/outfit-ideas";
import {
  LOCALES,
  isLocale,
  localizePath,
  type Locale,
} from "@/lib/i18n";
import { getMessages } from "@/lib/messages";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

type OutfitIdeaPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    OUTFIT_IDEAS.map((idea) => ({ locale, slug: idea.slug })),
  );
}

export async function generateMetadata({
  params,
}: OutfitIdeaPageProps): Promise<Metadata> {
  const { locale: requestedLocale, slug } = await params;
  if (!isLocale(requestedLocale)) notFound();

  const idea = getOutfitIdea(slug);
  if (!idea) notFound();

  return buildMetadata({
    title: idea.metaTitle,
    description: idea.metaDescription,
    path: idea.href,
    type: "article",
    locale: requestedLocale,
  });
}

export default async function OutfitIdeaDetailPage({
  params,
}: OutfitIdeaPageProps) {
  const { locale: requestedLocale, slug } = await params;
  if (!isLocale(requestedLocale)) notFound();

  const locale: Locale = requestedLocale;
  const idea: OutfitIdea | undefined = getOutfitIdea(slug);
  if (!idea) notFound();

  const messages = getMessages(locale);
  const labels = messages.outfitIdeas;
  const localizedHref = localizePath(locale, idea.href);
  const hubPath = localizePath(locale, "/outfit-ideas");

  const formulaLabels = {
    pieces: labels.piecesLabel,
    bestFor: labels.bestForLabel,
    why: labels.whyLabel,
  };

  return (
    <article className="space-y-12">
      <JsonLd
        data={articleSchema({
          headline: idea.h1,
          description: idea.metaDescription,
          path: localizedHref,
          datePublished: idea.publishedAt,
          dateModified: idea.updatedAt,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: messages.common.home, path: localizePath(locale, "/") },
          { name: labels.kicker, path: hubPath },
          { name: idea.h1, path: localizedHref },
        ])}
      />

      <Breadcrumbs
        locale={locale}
        items={[
          { label: messages.common.home, href: "/" },
          { label: labels.kicker, href: "/outfit-ideas" },
          { label: idea.h1 },
        ]}
      />

      <Section
        kicker={idea.itemName}
        title={idea.h1}
        description={idea.shortDescription}
      />

      <p className="max-w-2xl text-neutral-700">{idea.intro}</p>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-neutral-900">
          {labels.quickRulesTitle}
        </h2>
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-neutral-200 p-5">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-neutral-700">
              {labels.whyItWorksTitle}
            </h3>
            <p className="mt-3 text-sm text-neutral-700">{idea.whyItWorks}</p>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-5">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-neutral-700">
              {labels.colorRulesTitle}
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-neutral-800">
              {idea.colorRules.map((rule) => (
                <li key={rule} className="flex gap-2">
                  <span aria-hidden="true" className="text-neutral-400">·</span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-5">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-neutral-700">
              {labels.bestShoesTitle}
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-neutral-800">
              {idea.bestShoes.map((shoe) => (
                <li key={shoe} className="flex gap-2">
                  <span aria-hidden="true" className="text-neutral-400">·</span>
                  <span>{shoe}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-5">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-neutral-700">
              {labels.mistakesTitle}
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-neutral-800">
              {idea.mistakes.map((mistake) => (
                <li key={mistake} className="flex gap-2">
                  <span aria-hidden="true" className="text-neutral-400">−</span>
                  <span>{mistake}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-neutral-900">
          {labels.formulasTitle}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {idea.formulas.map((formula, index) => (
            <OutfitFormulaCard
              key={formula.name}
              index={index + 1}
              formula={formula}
              labels={formulaLabels}
            />
          ))}
        </div>
      </section>

      <section className="space-y-3 rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
        <h2 className="text-base font-semibold text-neutral-900">
          {labels.relatedTitle}
        </h2>
        <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
          {idea.relatedLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={localizePath(locale, link.href)}
                className="underline underline-offset-4 hover:text-signal"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <p className="text-sm text-neutral-500">
        <Link className="underline" href={hubPath}>
          ← {labels.backToHub}
        </Link>
      </p>
    </article>
  );
}
