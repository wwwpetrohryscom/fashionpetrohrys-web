import type { PerfumeTier } from "@/data/perfumes";
import type { Messages } from "@/lib/messages";

export type TierLabels = Record<PerfumeTier, string>;

export function getTierLabels(messages: Messages): TierLabels {
  const tiers = messages.perfumes.tiers;
  return {
    "top-of-the-top": tiers.topOfTheTopShort,
    "top-ok": tiers.topOkShort,
    average: tiers.averageShort,
    avoid: tiers.avoidShort,
  };
}

export const TIER_PATHS: Record<PerfumeTier, string | null> = {
  "top-of-the-top": "/perfumes/top-of-the-top",
  "top-ok": "/perfumes/top-ok",
  average: null,
  avoid: null,
};
