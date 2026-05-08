import Link from "next/link";
import { PerfumeRankingCard } from "@/components/perfume-ranking-card";
import type { PerfumeRating, PerfumeTier } from "@/data/perfumes";

type ScorecardLabels = {
  longevity: string;
  projection: string;
  versatility: string;
  uniqueness: string;
  value: string;
};

type PerfumeTierSectionProps = {
  title: string;
  intro: string;
  perfumes: PerfumeRating[];
  buildHref: (slug: string) => string;
  outOfLabel: string;
  ctaLabel: string;
  rankLabel: string;
  scorecardLabels: ScorecardLabels;
  tierLabels: Record<PerfumeTier, string>;
  viewAllHref?: string;
  viewAllLabel?: string;
  variant?: "prominent" | "regular";
};

export function PerfumeTierSection({
  title,
  intro,
  perfumes,
  buildHref,
  outOfLabel,
  ctaLabel,
  rankLabel,
  scorecardLabels,
  tierLabels,
  viewAllHref,
  viewAllLabel,
  variant = "regular",
}: PerfumeTierSectionProps) {
  if (perfumes.length === 0) return null;

  const prominent = variant === "prominent";
  const featured = prominent ? perfumes.slice(0, 3) : [];
  const rest = prominent ? perfumes.slice(3) : perfumes;

  return (
    <section className="space-y-6">
      <header className="flex flex-wrap items-baseline justify-between gap-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
            {title}
          </h2>
          <p className="max-w-2xl text-neutral-600">{intro}</p>
        </div>
        {viewAllHref && viewAllLabel ? (
          <Link
            className="text-sm font-medium underline underline-offset-4 hover:text-signal"
            href={viewAllHref}
          >
            {viewAllLabel} →
          </Link>
        ) : null}
      </header>

      {featured.length > 0 ? (
        <ol className="space-y-4" role="list">
          {featured.map((perfume) => (
            <li key={perfume.slug}>
              <PerfumeRankingCard
                perfume={perfume}
                href={buildHref(perfume.slug)}
                outOfLabel={outOfLabel}
                ctaLabel={ctaLabel}
                rankLabel={rankLabel}
                scorecardLabels={scorecardLabels}
                tierLabels={tierLabels}
                variant="prominent"
              />
            </li>
          ))}
        </ol>
      ) : null}

      {rest.length > 0 ? (
        <ol
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
        >
          {rest.map((perfume) => (
            <li key={perfume.slug}>
              <PerfumeRankingCard
                perfume={perfume}
                href={buildHref(perfume.slug)}
                outOfLabel={outOfLabel}
                ctaLabel={ctaLabel}
                rankLabel={rankLabel}
                scorecardLabels={scorecardLabels}
                tierLabels={tierLabels}
                variant="regular"
              />
            </li>
          ))}
        </ol>
      ) : null}
    </section>
  );
}
