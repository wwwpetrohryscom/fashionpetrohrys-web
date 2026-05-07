import Link from "next/link";
import { PerfumeTierBadge } from "@/components/perfume-tier-badge";
import type { PerfumeRating, PerfumeTier } from "@/data/perfumes";

type PerfumeRatingCardProps = {
  perfume: PerfumeRating;
  href: string;
  outOfLabel: string;
  tierLabels: Record<PerfumeTier, string>;
  showRank?: boolean;
};

export function PerfumeRatingCard({
  perfume,
  href,
  outOfLabel,
  tierLabels,
  showRank = false,
}: PerfumeRatingCardProps) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-lg border border-neutral-200 p-5 transition-colors hover:border-neutral-900"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <PerfumeTierBadge
              tier={perfume.tier}
              label={tierLabels[perfume.tier]}
              size="sm"
            />
            {showRank ? (
              <span className="text-xs font-semibold tabular-nums text-neutral-500">
                #{perfume.rank}
              </span>
            ) : null}
          </div>
          <div className="mt-3 text-xs uppercase tracking-wider text-neutral-500">
            {perfume.brand}
          </div>
          <div className="mt-1 text-lg font-medium leading-snug text-neutral-900">
            {perfume.name}
          </div>
        </div>
        <div className="shrink-0 rounded border border-neutral-300 px-2.5 py-1 text-sm font-semibold tabular-nums text-neutral-900">
          {perfume.rating.toFixed(1)}
          <span className="ml-1 text-xs font-normal text-neutral-500">
            {outOfLabel}
          </span>
        </div>
      </div>
      <p className="mt-3 text-sm text-neutral-600">{perfume.shortDescription}</p>
      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-neutral-500">
        {perfume.concentration ? <span>{perfume.concentration}</span> : null}
        {perfume.concentration ? <span aria-hidden="true">·</span> : null}
        <span className="capitalize">{perfume.gender}</span>
      </div>
    </Link>
  );
}
