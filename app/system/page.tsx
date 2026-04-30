import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The System",
  description:
    "The vocabulary behind every wardrobe decision: formality, silhouette, color, and layer.",
};

const DIMENSIONS = [
  {
    name: "Formality",
    body: "A 7-step ladder from athletic to black tie. Every garment sits on one rung. Outfits work when all garments are within ±1 step.",
  },
  {
    name: "Silhouette",
    body: "Fitted, regular, relaxed, oversized. Mix at most one loud silhouette per outfit.",
  },
  {
    name: "Color temperature",
    body: "Warm, neutral, cool. Anchor your wardrobe to one temperature; the other two are accents.",
  },
  {
    name: "Layer",
    body: "Base, mid, outer, accessory. Outfits scale by adding layers, not by changing the base.",
  },
];

export default function SystemPage() {
  return (
    <article className="space-y-8">
      <header>
        <div className="text-xs uppercase tracking-wider text-neutral-500">System</div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">
          The four dimensions of every outfit
        </h1>
      </header>

      <p className="text-lg text-neutral-700">
        Every outfit decision can be reduced to four dimensions. Once you can name
        them, you can reason about why an outfit works — or why it doesn&apos;t.
      </p>

      <ul className="space-y-5">
        {DIMENSIONS.map((d) => (
          <li
            key={d.name}
            className="rounded-lg border border-neutral-200 p-5"
          >
            <div className="font-medium">{d.name}</div>
            <p className="mt-2 text-neutral-700">{d.body}</p>
          </li>
        ))}
      </ul>
    </article>
  );
}
