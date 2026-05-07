import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { PerfumeScore } from "@/components/perfume-score";
import { Section } from "@/components/section";
import {
  PERFUMES,
  getPerfumeBySlug,
  getRelatedPerfumes,
  type PerfumeRating,
} from "@/data/perfumes";
import { LOCALES, isLocale, localizePath, type Locale } from "@/lib/i18n";
import { getMessages, type Messages } from "@/lib/messages";
import { SITE_CONFIG, buildMetadata } from "@/lib/seo";

type PerfumeReviewPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    PERFUMES.map((perfume) => ({ locale, slug: perfume.slug })),
  );
}

export async function generateMetadata({
  params,
}: PerfumeReviewPageProps): Promise<Metadata> {
  const { locale: requestedLocale, slug } = await params;

  if (!isLocale(requestedLocale)) {
    notFound();
  }

  const perfume = getPerfumeBySlug(slug);
  if (!perfume) {
    notFound();
  }

  return buildMetadata({
    title: perfume.metaTitle,
    description: perfume.metaDescription,
    path: `/perfumes/${perfume.slug}`,
    type: "article",
    locale: requestedLocale,
  });
}

function localizedSeason(messages: Messages, season: string): string {
  const seasons = messages.perfumes.seasons as Record<string, string>;
  return seasons[season] ?? season;
}

function buildProductJsonLd(perfume: PerfumeRating, locale: Locale) {
  const url = new URL(
    localizePath(locale, `/perfumes/${perfume.slug}`),
    SITE_CONFIG.url,
  ).toString();

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: perfume.name,
    brand: {
      "@type": "Brand",
      name: perfume.brand,
    },
    category: "Fragrance",
    description: perfume.shortDescription,
    review: {
      "@type": "Review",
      author: {
        "@type": "Organization",
        name: SITE_CONFIG.name,
      },
      datePublished: perfume.publishedAt,
      reviewBody: perfume.review.verdict,
      reviewRating: {
        "@type": "Rating",
        ratingValue: perfume.rating,
        bestRating: 10,
        worstRating: 1,
      },
      itemReviewed: {
        "@type": "Product",
        name: perfume.name,
        brand: { "@type": "Brand", name: perfume.brand },
      },
      url,
    },
  };
}

function buildBreadcrumbJsonLd(perfume: PerfumeRating, locale: Locale) {
  const base = SITE_CONFIG.url;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: SITE_CONFIG.name,
        item: new URL(localizePath(locale, "/"), base).toString(),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Perfumes",
        item: new URL(localizePath(locale, "/perfumes"), base).toString(),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: perfume.name,
        item: new URL(
          localizePath(locale, `/perfumes/${perfume.slug}`),
          base,
        ).toString(),
      },
    ],
  };
}

export default async function PerfumeReviewPage({
  params,
}: PerfumeReviewPageProps) {
  const { locale: requestedLocale, slug } = await params;

  if (!isLocale(requestedLocale)) {
    notFound();
  }

  const locale: Locale = requestedLocale;
  const perfume = getPerfumeBySlug(slug);

  if (!perfume) {
    notFound();
  }

  const messages = getMessages(locale);
  const labels = messages.perfumes.labels;
  const related = getRelatedPerfumes(slug);
  const genderLabel =
    messages.perfumes.gender[perfume.gender] ?? perfume.gender;

  return (
    <article className="space-y-10">
      <JsonLd data={buildProductJsonLd(perfume, locale)} />
      <JsonLd data={buildBreadcrumbJsonLd(perfume, locale)} />

      <nav
        aria-label="Breadcrumb"
        className="text-xs uppercase tracking-widest text-neutral-500"
      >
        <ol className="flex flex-wrap gap-1">
          <li>
            <Link
              className="hover:text-neutral-900"
              href={localizePath(locale, "/perfumes")}
            >
              {messages.perfumes.category.kicker}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-neutral-700">{perfume.brand}</li>
        </ol>
      </nav>

      <Section
        kicker={`${perfume.brand} · ${perfume.concentration}`}
        title={`${perfume.name} ${labels.review}`}
        description={perfume.shortDescription}
      />

      <PerfumeScore
        rating={perfume.rating}
        longevity={perfume.longevity}
        projection={perfume.projection}
        versatility={perfume.versatility}
        value={perfume.value}
        labels={{
          overall: labels.overall,
          longevity: labels.longevity,
          projection: labels.projection,
          versatility: labels.versatility,
          value: labels.value,
          outOf: labels.outOf,
        }}
      />

      <section className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-neutral-200 p-5">
          <div className="text-xs uppercase tracking-widest text-neutral-500">
            {labels.gender}
          </div>
          <div className="mt-2 text-neutral-900">{genderLabel}</div>
        </div>
        <div className="rounded-lg border border-neutral-200 p-5">
          <div className="text-xs uppercase tracking-widest text-neutral-500">
            {labels.concentration}
          </div>
          <div className="mt-2 text-neutral-900">{perfume.concentration}</div>
        </div>
        <div className="rounded-lg border border-neutral-200 p-5">
          <div className="text-xs uppercase tracking-widest text-neutral-500">
            {labels.seasons}
          </div>
          <div className="mt-2 text-neutral-900">
            {perfume.seasons
              .map((season) => localizedSeason(messages, season))
              .join(", ")}
          </div>
        </div>
        <div className="rounded-lg border border-neutral-200 p-5">
          <div className="text-xs uppercase tracking-widest text-neutral-500">
            {labels.occasions}
          </div>
          <div className="mt-2 text-neutral-900">
            {perfume.occasions.join(", ")}
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-neutral-900">
          {labels.notes}
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {(
            [
              { title: labels.topNotes, items: perfume.notes.top },
              { title: labels.middleNotes, items: perfume.notes.middle },
              { title: labels.baseNotes, items: perfume.notes.base },
            ] as const
          ).map((group) => (
            <div
              key={group.title}
              className="rounded-lg border border-neutral-200 p-5"
            >
              <div className="text-xs uppercase tracking-widest text-neutral-500">
                {group.title}
              </div>
              <ul className="mt-3 space-y-1 text-sm text-neutral-800">
                {group.items.map((note) => (
                  <li key={note} className="capitalize">
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-2xl space-y-6 text-neutral-700">
        <p>{perfume.review.intro}</p>

        <h2 className="pt-2 text-xl font-semibold text-neutral-900">
          {labels.scentProfile}
        </h2>
        <p>{perfume.review.scentProfile}</p>

        <h2 className="pt-2 text-xl font-semibold text-neutral-900">
          {labels.performance}
        </h2>
        <p>{perfume.review.performance}</p>

        <h2 className="pt-2 text-xl font-semibold text-neutral-900">
          {labels.bestFor}
        </h2>
        <p>{perfume.review.bestFor}</p>

        <h2 className="pt-2 text-xl font-semibold text-neutral-900">
          {labels.avoidIf}
        </h2>
        <p>{perfume.review.avoidIf}</p>
      </div>

      <section className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-neutral-200 p-5">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-neutral-700">
            {labels.pros}
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-neutral-800">
            {perfume.pros.map((p) => (
              <li key={p} className="flex gap-2">
                <span aria-hidden="true" className="text-neutral-400">
                  +
                </span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg border border-neutral-200 p-5">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-neutral-700">
            {labels.cons}
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-neutral-800">
            {perfume.cons.map((c) => (
              <li key={c} className="flex gap-2">
                <span aria-hidden="true" className="text-neutral-400">
                  −
                </span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="max-w-2xl space-y-4">
        <h2 className="text-xl font-semibold text-neutral-900">
          {labels.verdict}
        </h2>
        <p className="border-l-4 border-signal py-1 pl-4 text-neutral-800">
          {perfume.review.verdict}
        </p>
      </section>

      {related.length > 0 ? (
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-neutral-900">
            {labels.related}
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {related.map((r) => (
              <li key={r.slug}>
                <Link
                  className="block rounded-lg border border-neutral-200 p-4 transition-colors hover:border-neutral-900"
                  href={localizePath(locale, `/perfumes/${r.slug}`)}
                >
                  <div className="text-xs uppercase tracking-wider text-neutral-500">
                    {r.brand}
                  </div>
                  <div className="mt-1 text-sm font-medium text-neutral-900">
                    {r.name}
                  </div>
                  <div className="mt-1 text-xs text-neutral-500">
                    {r.rating.toFixed(1)} {labels.outOf}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <p className="text-sm text-neutral-500">
        <Link className="underline" href={localizePath(locale, "/perfumes")}>
          ← {labels.backToList}
        </Link>
      </p>

      <p className="text-xs text-neutral-500">{labels.ratingMethodology}</p>
    </article>
  );
}
