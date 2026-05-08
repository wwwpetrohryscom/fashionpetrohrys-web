import type { Metadata } from "next";
import Link from "next/link";
import { PerfumeTierSection } from "@/components/perfume-tier-section";
import { getPerfumesByTier } from "@/data/perfumes";
import { localizePath } from "@/lib/i18n";
import { type LocalePageProps, resolveLocale } from "@/lib/locale-page";
import { getMessages } from "@/lib/messages";
import { getCompactScorecardLabels } from "@/lib/perfume-labels";
import { getTierLabels } from "@/lib/perfume-tiers";
import { buildMetadata } from "@/lib/seo";

const PATH = "/perfumes/top-of-the-top";

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const messages = getMessages(locale);

  return buildMetadata({
    title: messages.pageMeta.perfumesTopOfTheTop.title,
    description: messages.pageMeta.perfumesTopOfTheTop.description,
    path: PATH,
    locale,
  });
}

export default async function PerfumesTopOfTheTopPage({
  params,
}: LocalePageProps) {
  const locale = await resolveLocale(params);
  const messages = getMessages(locale);
  const labels = messages.perfumes.labels;
  const tierLabels = getTierLabels(messages);
  const scorecardLabels = getCompactScorecardLabels(messages);

  const perfumes = getPerfumesByTier("top-of-the-top");

  return (
    <div className="space-y-12">
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
          <li className="text-neutral-700">
            {messages.perfumes.tiers.topOfTheTopShort}
          </li>
        </ol>
      </nav>

      <PerfumeTierSection
        title={messages.perfumes.tiers.topOfTheTopTitle}
        intro={messages.perfumes.tiers.topOfTheTopIntro}
        perfumes={perfumes}
        buildHref={(slug) => localizePath(locale, `/perfumes/${slug}`)}
        outOfLabel={labels.outOf}
        ctaLabel={labels.readReview}
        rankLabel={labels.rank}
        scorecardLabels={scorecardLabels}
        tierLabels={tierLabels}
        variant="prominent"
      />

      <p className="max-w-2xl text-sm text-neutral-500">
        {labels.ratingMethodology}
      </p>

      <p className="text-sm text-neutral-500">
        <Link className="underline" href={localizePath(locale, "/perfumes")}>
          ← {labels.backToList}
        </Link>
      </p>
    </div>
  );
}
