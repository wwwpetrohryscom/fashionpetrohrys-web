import type { Messages } from "@/lib/messages";

export function getCompactScorecardLabels(messages: Messages) {
  const labels = messages.perfumes.labels;
  return {
    longevity: labels.longevityShort,
    projection: labels.projectionShort,
    versatility: labels.versatilityShort,
    uniqueness: labels.uniquenessShort,
    value: labels.valueShort,
  };
}

export function getFullScorecardLabels(messages: Messages) {
  const labels = messages.perfumes.labels;
  return {
    longevity: labels.longevity,
    projection: labels.projection,
    versatility: labels.versatility,
    uniqueness: labels.uniqueness,
    value: labels.value,
  };
}
