import type { Metadata } from "next";
import Link from "next/link";
import { PerfumeHero } from "@/components/perfume-hero";
import { PerfumeTierSection } from "@/components/perfume-tier-section";
import { getPerfumesByTier } from "@/data/perfumes";
import { localizePath } from "@/lib/i18n";
import { type LocalePageProps, resolveLocale } from "@/lib/locale-page";
import { getMessages } from "@/lib/messages";
import { getCompactScorecardLabels } from "@/lib/perfume-labels";
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
  const scorecardLabels = getCompactScorecardLabels(messages);

  const topOfTheTop = getPerfumesByTier("top-of-the-top");
  const topOk = getPerfumesByTier("top-ok");

  const buildHref = (slug: string) =>
    localizePath(locale, `/perfumes/${slug}`);

  return (
    <div className="space-y-16">
      <PerfumeHero
        kicker={messages.perfumes.category.kicker}
        title={messages.perfumes.category.title}
        intro={messages.perfumes.category.intro}
        ratedByLabel={messages.perfumes.category.ratedBy}
        perfumes={topOfTheTop}
      />

      <PerfumeTierSection
        title={messages.perfumes.tiers.topOfTheTopTitle}
        intro={messages.perfumes.tiers.topOfTheTopIntro}
        perfumes={topOfTheTop}
        buildHref={buildHref}
        outOfLabel={labels.outOf}
        ctaLabel={labels.readReview}
        rankLabel={labels.rank}
        scorecardLabels={scorecardLabels}
        tierLabels={tierLabels}
        viewAllHref={localizePath(locale, "/perfumes/top-of-the-top")}
        viewAllLabel={labels.viewTier}
        variant="prominent"
      />

      <PerfumeTierSection
        title={messages.perfumes.tiers.topOkTitle}
        intro={messages.perfumes.tiers.topOkIntro}
        perfumes={topOk}
        buildHref={buildHref}
        outOfLabel={labels.outOf}
        ctaLabel={labels.readReview}
        rankLabel={labels.rank}
        scorecardLabels={scorecardLabels}
        tierLabels={tierLabels}
        viewAllHref={localizePath(locale, "/perfumes/top-ok")}
        viewAllLabel={labels.viewTier}
        variant="regular"
      />

      <section className="space-y-3 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-neutral-900">
          {messages.perfumes.category.howWeRateTitle}
        </h2>
        <p className="max-w-2xl text-neutral-700">
          {messages.perfumes.category.howWeRateBody}
        </p>
        <ul className="mt-4 grid gap-2 text-sm text-neutral-700 sm:grid-cols-2 lg:grid-cols-3">
          <li>· {labels.scentProfile}</li>
          <li>· {labels.longevity}</li>
          <li>· {labels.projection}</li>
          <li>· {labels.versatility}</li>
          <li>· {labels.uniqueness}</li>
          <li>· {labels.value}</li>
        </ul>
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
