import Link from "next/link";
import type { OutfitIdea } from "@/data/outfit-ideas";

type OutfitIdeaCardProps = {
  idea: OutfitIdea;
  href: string;
  ctaLabel: string;
};

export function OutfitIdeaCard({ idea, href, ctaLabel }: OutfitIdeaCardProps) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-900"
    >
      <div className="text-xs uppercase tracking-widest text-neutral-500">
        {idea.itemName}
      </div>
      <h3 className="mt-2 text-lg font-semibold leading-snug text-neutral-900">
        {idea.h1}
      </h3>
      <p className="mt-3 flex-1 text-sm text-neutral-600">
        {idea.shortDescription}
      </p>
      <span className="mt-4 inline-flex items-center text-sm font-semibold text-neutral-900 underline underline-offset-4 group-hover:text-signal">
        {ctaLabel} →
      </span>
    </Link>
  );
}
