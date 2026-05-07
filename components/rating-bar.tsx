type RatingBarProps = {
  label: string;
  value: number;
  max?: number;
};

export function RatingBar({ label, value, max = 10 }: RatingBarProps) {
  const clamped = Math.max(0, Math.min(value, max));
  const percent = (clamped / max) * 100;
  const formatted = clamped.toFixed(1);

  return (
    <div className="space-y-1">
      <div className="flex items-baseline justify-between gap-3">
        <span className="text-sm text-neutral-700">{label}</span>
        <span
          className="text-sm font-medium tabular-nums text-neutral-900"
          aria-label={`${label} ${formatted} out of ${max}`}
        >
          {formatted}
        </span>
      </div>
      <div
        className="h-1.5 w-full overflow-hidden rounded-full bg-neutral-200"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={clamped}
        aria-label={label}
      >
        <div
          className="h-full bg-neutral-900"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
