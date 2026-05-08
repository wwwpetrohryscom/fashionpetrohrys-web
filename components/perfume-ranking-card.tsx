import Link from "next/link";
import { PerfumeProductImage } from "@/components/perfume-product-image";
import { PerfumeTierBadge } from "@/components/perfume-tier-badge";
import { PerfumeVisualScorecard } from "@/components/perfume-visual-scorecard";
import type { PerfumeRating, PerfumeTier } from "@/data/perfumes";

type ScorecardLabels = {
  longevity: string;
  projection: string;
  versatility: string;
  uniqueness: string;
  value: string;
};

type PerfumeRankingCardProps = {
  perfume: PerfumeRating;
  href: string;
  outOfLabel: string;
  ctaLabel: string;
  rankLabel: string;
  scorecardLabels: ScorecardLabels;
  tierLabels: Record<PerfumeTier, string>;
  variant?: "prominent" | "regular";
};

export function PerfumeRankingCard({
  perfume,
  href,
  outOfLabel,
  ctaLabel,
  rankLabel,
  scorecardLabels,
  tierLabels,
  variant = "regular",
}: PerfumeRankingCardProps) {
  const prominent = variant === "prominent";

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-colors hover:border-neutral-900 ${
        prominent ? "sm:flex-row" : ""
      }`}
    >
      <div
        className={
          prominent
            ? "flex shrink-0 items-center justify-center bg-neutral-50 p-6 sm:w-[42%] sm:p-8"
            : "flex shrink-0 items-center justify-center bg-neutral-50 p-5"
        }
      >
        <PerfumeProductImage
          perfume={perfume}
          size={prominent ? "lg" : "sm"}
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
        <header className="flex flex-wrap items-center gap-3">
          <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-full border border-neutral-300 bg-white px-2 text-xs font-semibold tabular-nums text-neutral-900">
            {rankLabel} #{perfume.rank}
          </span>
          <PerfumeTierBadge
            tier={perfume.tier}
            label={tierLabels[perfume.tier]}
            size="sm"
          />
          <span className="ml-auto rounded border border-neutral-300 px-2.5 py-1 text-sm font-semibold tabular-nums text-neutral-900">
            {perfume.rating.toFixed(1)}
            <span className="ml-1 text-xs font-normal text-neutral-500">
              {outOfLabel}
            </span>
          </span>
        </header>

        <div>
          <div className="text-xs uppercase tracking-wider text-neutral-500">
            {perfume.brand}
          </div>
          <h3
            className={`mt-1 font-semibold leading-snug text-neutral-900 ${
              prominent ? "text-xl sm:text-2xl" : "text-lg"
            }`}
          >
            {perfume.name}
          </h3>
        </div>

        <PerfumeVisualScorecard
          longevity={perfume.longevity}
          projection={perfume.projection}
          versatility={perfume.versatility}
          uniqueness={perfume.uniqueness}
          value={perfume.value}
          labels={scorecardLabels}
          variant={prominent ? "comfortable" : "compact"}
        />

        <p
          className={`text-sm text-neutral-600 ${
            prominent ? "" : "line-clamp-3"
          }`}
        >
          {perfume.shortDescription}
        </p>

        <div className="mt-auto flex flex-wrap items-center gap-3 text-xs text-neutral-500">
          {perfume.concentration ? <span>{perfume.concentration}</span> : null}
          {perfume.concentration ? <span aria-hidden="true">·</span> : null}
          <span className="capitalize">{perfume.gender}</span>
        </div>

        <Link
          href={href}
          className="text-sm font-semibold text-neutral-900 underline underline-offset-4 hover:text-signal"
          aria-label={`${ctaLabel}: ${perfume.fullName}`}
        >
          {ctaLabel} →
        </Link>
      </div>
    </article>
  );
}
