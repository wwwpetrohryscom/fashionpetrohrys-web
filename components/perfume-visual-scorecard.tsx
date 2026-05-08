type ScorecardLabels = {
  longevity: string;
  projection: string;
  versatility: string;
  uniqueness: string;
  value: string;
};

type PerfumeVisualScorecardProps = {
  longevity: number;
  projection: number;
  versatility: number;
  uniqueness: number;
  value: number;
  labels: ScorecardLabels;
  variant?: "compact" | "comfortable";
};

export function PerfumeVisualScorecard({
  longevity,
  projection,
  versatility,
  uniqueness,
  value,
  labels,
  variant = "compact",
}: PerfumeVisualScorecardProps) {
  const chips = [
    { label: labels.longevity, value: longevity },
    { label: labels.projection, value: projection },
    { label: labels.versatility, value: versatility },
    { label: labels.uniqueness, value: uniqueness },
    { label: labels.value, value: value },
  ];

  const labelClass =
    variant === "compact"
      ? "text-[10px] uppercase tracking-widest text-neutral-500"
      : "text-xs uppercase tracking-widest text-neutral-500";
  const valueClass =
    variant === "compact"
      ? "text-sm font-semibold tabular-nums text-neutral-900"
      : "text-base font-semibold tabular-nums text-neutral-900";

  return (
    <ul
      className="grid grid-cols-5 gap-1.5"
      role="list"
      aria-label="Score breakdown"
    >
      {chips.map((chip) => (
        <li
          key={chip.label}
          className="flex flex-col items-center justify-center rounded-md border border-neutral-200 bg-white px-1.5 py-1.5 text-center"
        >
          <span className={labelClass}>{chip.label}</span>
          <span className={valueClass}>{chip.value.toFixed(1)}</span>
        </li>
      ))}
    </ul>
  );
}
