import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/section";
import { ArticleCard } from "@/components/article-card";
import { articlesByCategory } from "@/data/articles";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Psychology",
  description:
    "How clothing changes perception — yours and other people's. The signal layer of style.",
  path: "/psychology",
});

export default function PsychologyPage() {
  const articles = articlesByCategory("psychology");

  return (
    <div className="space-y-10">
      <Section
        kicker="Psychology"
        title="Clothing is a signal"
        description="What you wear changes how others perceive you and how you perceive yourself. The articles below explain which signals matter most and how to send them on purpose."
      />

      <ul className="grid gap-3 sm:grid-cols-2">
        {articles.map((a) => (
          <li key={a.slug}>
            <ArticleCard article={a} />
          </li>
        ))}
      </ul>

      <p className="max-w-2xl text-sm text-neutral-600">
        Want to apply this practically?{" "}
        <Link className="underline" href="/method">The Method</Link> and{" "}
        <Link className="underline" href="/guides">Guides</Link> are where signal
        becomes wardrobe.
      </p>
    </div>
  );
}
