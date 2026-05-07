import Link from "next/link";
import type { PerfumeRating } from "@/data/perfumes";

type PerfumeRatingCardProps = {
  perfume: PerfumeRating;
  href: string;
  outOfLabel: string;
};

export function PerfumeRatingCard({
  perfume,
  href,
  outOfLabel,
}: PerfumeRatingCardProps) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-lg border border-neutral-200 p-5 transition-colors hover:border-neutral-900"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs uppercase tracking-wider text-neutral-500">
            {perfume.brand}
          </div>
          <div className="mt-2 text-lg font-medium leading-snug text-neutral-900">
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
        <span>{perfume.concentration}</span>
        <span aria-hidden="true">·</span>
        <span className="capitalize">{perfume.gender}</span>
      </div>
    </Link>
  );
}
