import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Guides",
  description: "Practical articles on building a wardrobe that works.",
};

const GUIDES = [
  {
    slug: "capsule-wardrobe",
    title: "How to Build a Capsule Wardrobe That Actually Works",
    description:
      "The 7-3-1 rule and how to pick the seven pieces every wardrobe needs first.",
  },
  {
    slug: "color-anchors",
    title: "Color Anchors: The Two-Color Rule",
    description:
      "Why two anchor colors are enough — and how to pick them for your skin tone.",
  },
];

export default function GuidesPage() {
  return (
    <div className="space-y-8">
      <header>
        <div className="text-xs uppercase tracking-wider text-neutral-500">Guides</div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">
          Practical guides for building a real wardrobe
        </h1>
      </header>

      <ul className="space-y-3">
        {GUIDES.map((g) => (
          <li key={g.slug}>
            <Link
              href={`/guides/${g.slug}`}
              className="block rounded-lg border border-neutral-200 p-5 transition-colors hover:border-neutral-900"
            >
              <div className="font-medium">{g.title}</div>
              <div className="mt-1 text-sm text-neutral-600">{g.description}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
