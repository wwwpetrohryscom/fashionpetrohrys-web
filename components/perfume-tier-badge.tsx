import type { PerfumeTier } from "@/data/perfumes";

type PerfumeTierBadgeProps = {
  tier: PerfumeTier;
  label: string;
  size?: "sm" | "md";
};

const TIER_STYLE: Record<PerfumeTier, string> = {
  "top-of-the-top":
    "border-signal bg-signal/10 text-signal",
  "top-ok": "border-neutral-900 bg-neutral-900 text-white",
  average: "border-neutral-400 bg-neutral-100 text-neutral-700",
  avoid: "border-neutral-300 bg-white text-neutral-500",
};

export function PerfumeTierBadge({
  tier,
  label,
  size = "md",
}: PerfumeTierBadgeProps) {
  const sizing =
    size === "sm"
      ? "px-2 py-0.5 text-[10px]"
      : "px-2.5 py-1 text-xs";

  return (
    <span
      className={`inline-flex items-center rounded-full border font-semibold uppercase tracking-widest ${sizing} ${TIER_STYLE[tier]}`}
    >
      {label}
    </span>
  );
}
