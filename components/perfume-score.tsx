import { RatingBar } from "@/components/rating-bar";

type PerfumeScoreLabels = {
  overall: string;
  longevity: string;
  projection: string;
  versatility: string;
  value: string;
  outOf: string;
};

type PerfumeScoreProps = {
  rating: number;
  longevity: number;
  projection: number;
  versatility: number;
  value: number;
  labels: PerfumeScoreLabels;
};

export function PerfumeScore({
  rating,
  longevity,
  projection,
  versatility,
  value,
  labels,
}: PerfumeScoreProps) {
  const overallFormatted = rating.toFixed(1);

  return (
    <section
      aria-label={labels.overall}
      className="rounded-lg border border-neutral-200 bg-neutral-50 p-5"
    >
      <div className="flex items-baseline justify-between gap-4">
        <div className="text-xs font-semibold uppercase tracking-widest text-neutral-700">
          {labels.overall}
        </div>
        <div className="text-3xl font-semibold tabular-nums text-neutral-900">
          {overallFormatted}
          <span className="ml-1 text-base font-normal text-neutral-500">
            {labels.outOf}
          </span>
        </div>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <RatingBar label={labels.longevity} value={longevity} />
        <RatingBar label={labels.projection} value={projection} />
        <RatingBar label={labels.versatility} value={versatility} />
        <RatingBar label={labels.value} value={value} />
      </div>
    </section>
  );
}
