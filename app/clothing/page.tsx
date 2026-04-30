import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/section";
import { ArticleCard } from "@/components/article-card";
import { articlesByCategory } from "@/data/articles";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Clothing",
  description:
    "How to evaluate clothing — fabric, construction, fit — before buying anything.",
  path: "/clothing",
});

export default function ClothingPage() {
  const articles = articlesByCategory("clothing");

  return (
    <div className="space-y-10">
      <Section
        kicker="Clothing"
        title="Evaluate before you buy"
        description="A wardrobe is only as good as the pieces in it. Articles in this section teach you how to evaluate fabric, construction, and fit so you stop wasting money on garments that fail in 6 months."
      />

      <ul className="grid gap-3 sm:grid-cols-2">
        {articles.map((a) => (
          <li key={a.slug}>
            <ArticleCard article={a} />
          </li>
        ))}
      </ul>

      <p className="max-w-2xl text-sm text-neutral-600">
        Once you can spot quality, see{" "}
        <Link className="underline" href="/shop">Shop</Link> for curated picks that
        survive these tests.
      </p>
    </div>
  );
}
