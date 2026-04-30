import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/section";
import { ArticleCard } from "@/components/article-card";
import { CtaBlock } from "@/components/cta-block";
import { articlesByCategory } from "@/data/articles";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "The System",
  description:
    "The vocabulary behind every wardrobe decision: formality, silhouette, color, and layer.",
  path: "/system",
});

const DIMENSIONS = [
  {
    name: "Formality",
    body: "A 7-step ladder from athletic to black tie. Every garment sits on one rung. Outfits work when all garments are within ±1 step.",
  },
  {
    name: "Silhouette",
    body: "Fitted, regular, relaxed, oversized. Mix at most one loud silhouette per outfit; everything else stays regular.",
  },
  {
    name: "Color temperature",
    body: "Warm, neutral, cool. Anchor your wardrobe to one temperature; the other two are accents only.",
  },
  {
    name: "Layer",
    body: "Base, mid, outer, accessory. Outfits scale by adding layers, not by changing the base.",
  },
];

export default function SystemPage() {
  const articles = articlesByCategory("system");

  return (
    <div className="space-y-12">
      <Section
        kicker="System"
        title="The four dimensions of every outfit"
        description="Every outfit decision can be reduced to four dimensions. Once you can name them, you can reason about why an outfit works — or why it doesn't."
      />

      <ul className="grid gap-4 sm:grid-cols-2">
        {DIMENSIONS.map((d) => (
          <li key={d.name} className="rounded-lg border border-neutral-200 p-5">
            <div className="font-medium">{d.name}</div>
            <p className="mt-2 text-neutral-700">{d.body}</p>
          </li>
        ))}
      </ul>

      <p className="max-w-2xl text-neutral-700">
        The system is the vocabulary. The{" "}
        <Link className="underline" href="/method">Method</Link> is how you apply
        it. The <Link className="underline" href="/guides">Guides</Link> are
        worked examples.
      </p>

      {articles.length > 0 ? (
        <section className="space-y-5">
          <h2 className="text-xl font-semibold tracking-tight">
            Read deeper into the system
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {articles.map((a) => (
              <li key={a.slug}>
                <ArticleCard article={a} />
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <CtaBlock
        title="See the system applied."
        description="Worked examples of outfits built from the four dimensions."
        ctaLabel="See Outfits"
        ctaHref="/outfits"
      />
    </div>
  );
}
