import type { OutfitFormula } from "@/data/outfit-ideas";

type OutfitFormulaCardProps = {
  index: number;
  formula: OutfitFormula;
  labels: {
    pieces: string;
    bestFor: string;
    why: string;
  };
};

export function OutfitFormulaCard({
  index,
  formula,
  labels,
}: OutfitFormulaCardProps) {
  return (
    <article className="rounded-2xl border border-neutral-200 bg-white p-5">
      <header className="flex items-start gap-3">
        <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-full border border-neutral-300 px-2 text-xs font-semibold tabular-nums text-neutral-700">
          {index}
        </span>
        <h3 className="text-base font-semibold leading-snug text-neutral-900">
          {formula.name}
        </h3>
      </header>

      <div className="mt-4 space-y-4">
        <div>
          <div className="text-xs uppercase tracking-widest text-neutral-500">
            {labels.pieces}
          </div>
          <ul className="mt-2 flex flex-wrap gap-1.5">
            {formula.pieces.map((piece) => (
              <li
                key={piece}
                className="rounded-full border border-neutral-200 px-2.5 py-1 text-xs text-neutral-700"
              >
                {piece}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest text-neutral-500">
            {labels.bestFor}
          </div>
          <p className="mt-1 text-sm text-neutral-800">{formula.bestFor}</p>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest text-neutral-500">
            {labels.why}
          </div>
          <p className="mt-1 text-sm text-neutral-700">{formula.why}</p>
        </div>
      </div>
    </article>
  );
}
