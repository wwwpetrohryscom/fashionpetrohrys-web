import { PerfumeProductImage } from "@/components/perfume-product-image";
import type { PerfumeRating } from "@/data/perfumes";

type PerfumeHeroProps = {
  kicker: string;
  title: string;
  intro: string;
  ratedByLabel: string;
  perfumes: PerfumeRating[];
};

export function PerfumeHero({
  kicker,
  title,
  intro,
  ratedByLabel,
  perfumes,
}: PerfumeHeroProps) {
  const collage = perfumes.slice(0, 6);

  return (
    <section className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
      <div className="space-y-5">
        <div className="inline-block border-t-2 border-signal pt-2 text-xs font-semibold uppercase tracking-widest text-neutral-900">
          {kicker}
        </div>
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="max-w-2xl text-lg text-neutral-600">{intro}</p>
        <p className="text-xs uppercase tracking-widest text-neutral-500">
          {ratedByLabel}
        </p>
      </div>

      {collage.length > 0 ? (
        <div
          aria-hidden="true"
          className="grid grid-cols-3 gap-3 rounded-3xl border border-neutral-200 bg-neutral-50 p-4 sm:p-6"
        >
          {collage.map((perfume, index) => (
            <PerfumeProductImage
              key={perfume.slug}
              perfume={perfume}
              size="sm"
              priority={index < 3}
            />
          ))}
        </div>
      ) : null}
    </section>
  );
}
