import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/section";
import { ArticleCard } from "@/components/article-card";
import { articlesByCategory } from "@/data/articles";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Outfits",
  description: "Worked examples of outfits assembled using the system.",
  path: "/outfits",
});

const EXAMPLES = [
  {
    name: "Weekday Smart Casual",
    pieces: [
      "White oxford shirt",
      "Charcoal trousers",
      "Brown leather loafers",
      "Tan belt",
    ],
    note: "All four garments sit at smart-casual on the formality ladder. One warm accent (tan) against a cool base.",
  },
  {
    name: "Saturday Casual",
    pieces: [
      "Cream knit sweater",
      "Indigo selvedge jeans",
      "White leather sneakers",
    ],
    note: "Three pieces, one silhouette family (regular). Color stays neutral with a single warm note.",
  },
];

export default function OutfitsPage() {
  const articles = articlesByCategory("outfits");

  return (
    <div className="space-y-12">
      <Section
        kicker="Outfits"
        title="Worked examples"
        description="Each outfit below was assembled using the four dimensions from The System."
      />

      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight">Examples</h2>
        <ul className="grid gap-4 sm:grid-cols-2">
          {EXAMPLES.map((o) => (
            <li
              key={o.name}
              className="rounded-lg border border-neutral-200 p-5"
            >
              <div className="font-medium">{o.name}</div>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-neutral-700">
                {o.pieces.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <p className="mt-3 text-sm text-neutral-600">{o.note}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight">Read</h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {articles.map((a) => (
            <li key={a.slug}>
              <ArticleCard article={a} />
            </li>
          ))}
        </ul>
      </section>

      <p className="max-w-2xl text-sm text-neutral-600">
        See{" "}
        <Link className="underline" href="/system">The System</Link> for the rules
        every outfit on this page follows.
      </p>
    </div>
  );
}
