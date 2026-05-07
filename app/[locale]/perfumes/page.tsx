import type { Metadata } from "next";
import Link from "next/link";
import { PerfumeRatingCard } from "@/components/perfume-rating-card";
import { Section } from "@/components/section";
import { getPerfumesByTier } from "@/data/perfumes";
import { localizePath } from "@/lib/i18n";
import { type LocalePageProps, resolveLocale } from "@/lib/locale-page";
import { getMessages } from "@/lib/messages";
import { getTierLabels } from "@/lib/perfume-tiers";
import { buildMetadata } from "@/lib/seo";

const PATH = "/perfumes";

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const messages = getMessages(locale);

  return buildMetadata({
    title: messages.pageMeta.perfumes.title,
    description: messages.pageMeta.perfumes.description,
    path: PATH,
    locale,
  });
}

export default async function PerfumesPage({ params }: LocalePageProps) {
  const locale = await resolveLocale(params);
  const messages = getMessages(locale);
  const labels = messages.perfumes.labels;
  const tierLabels = getTierLabels(messages);

  const topOfTheTop = getPerfumesByTier("top-of-the-top");
  const topOk = getPerfumesByTier("top-ok");

  return (
    <div className="space-y-16">
      <Section
        kicker={messages.perfumes.category.kicker}
        title={messages.perfumes.category.title}
        description={messages.perfumes.category.intro}
      />

      <section className="space-y-6">
        <header className="flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="text-2xl font-semibold text-neutral-900">
            {messages.perfumes.tiers.topOfTheTopTitle}
          </h2>
          <Link
            className="text-sm underline underline-offset-4 hover:text-neutral-900"
            href={localizePath(locale, "/perfumes/top-of-the-top")}
          >
            {messages.perfumes.labels.viewTier} →
          </Link>
        </header>
        <p className="max-w-2xl text-neutral-600">
          {messages.perfumes.tiers.topOfTheTopIntro}
        </p>
        <ul className="grid gap-4 sm:grid-cols-2">
          {topOfTheTop.map((perfume) => (
            <li key={perfume.slug}>
              <PerfumeRatingCard
                perfume={perfume}
                href={localizePath(locale, `/perfumes/${perfume.slug}`)}
                outOfLabel={labels.outOf}
                tierLabels={tierLabels}
                showRank
              />
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-6">
        <header className="flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="text-2xl font-semibold text-neutral-900">
            {messages.perfumes.tiers.topOkTitle}
          </h2>
          <Link
            className="text-sm underline underline-offset-4 hover:text-neutral-900"
            href={localizePath(locale, "/perfumes/top-ok")}
          >
            {messages.perfumes.labels.viewTier} →
          </Link>
        </header>
        <p className="max-w-2xl text-neutral-600">
          {messages.perfumes.tiers.topOkIntro}
        </p>
        <ul className="grid gap-4 sm:grid-cols-2">
          {topOk.map((perfume) => (
            <li key={perfume.slug}>
              <PerfumeRatingCard
                perfume={perfume}
                href={localizePath(locale, `/perfumes/${perfume.slug}`)}
                outOfLabel={labels.outOf}
                tierLabels={tierLabels}
                showRank
              />
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-3 rounded-lg border border-neutral-200 bg-neutral-50 p-6">
        <h2 className="text-xl font-semibold text-neutral-900">
          {messages.perfumes.category.howWeRateTitle}
        </h2>
        <p className="max-w-2xl text-neutral-700">
          {messages.perfumes.category.howWeRateBody}
        </p>
        <p className="max-w-2xl text-sm text-neutral-500">
          {labels.ratingMethodology}
        </p>
      </section>

      <p className="max-w-2xl text-sm text-neutral-600">
        {messages.perfumes.category.systemLink}{" "}
        <Link className="underline" href={localizePath(locale, "/method")}>
          {messages.nav.method}
        </Link>{" "}
        ·{" "}
        <Link className="underline" href={localizePath(locale, "/system")}>
          {messages.nav.system}
        </Link>{" "}
        ·{" "}
        <Link className="underline" href={localizePath(locale, "/guides")}>
          {messages.nav.guides}
        </Link>
      </p>
    </div>
  );
}
