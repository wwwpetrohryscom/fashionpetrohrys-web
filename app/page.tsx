import Link from "next/link";
import { ARTICLES } from "@/data/articles";
import { ArticleCard } from "@/components/article-card";
import { CtaBlock } from "@/components/cta-block";

const ENTRY_POINTS = [
  { href: "/method", label: "Method", description: "How we approach style decisions." },
  { href: "/system", label: "System", description: "The four dimensions of every outfit." },
  { href: "/guides", label: "Guides", description: "Practical articles for building a wardrobe." },
  { href: "/outfits", label: "Outfits", description: "Worked examples assembled from the system." },
  { href: "/clothing", label: "Clothing", description: "How to evaluate and buy individual pieces." },
  { href: "/psychology", label: "Psychology", description: "Why clothing changes how you are perceived." },
  { href: "/shop", label: "Shop", description: "Curated picks that survive the system." },
];

export default function HomePage() {
  return (
    <div className="space-y-20">
      <section className="space-y-6">
        <div className="inline-block border-t-2 border-signal pt-2 text-xs font-semibold uppercase tracking-widest">
          The Style Operating System
        </div>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Style is a system, not a guess.
        </h1>
        <p className="max-w-2xl text-lg text-neutral-600">
          FashionPetroHrys is not a trend feed. It is a system for making structured
          decisions about clothing — what to buy, what to wear, and why one outfit
          works while another does not.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="/method"
            className="border border-neutral-900 bg-neutral-900 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-white hover:text-neutral-900"
          >
            Start with the Method
          </Link>
          <Link
            href="/system"
            className="border border-neutral-900 px-5 py-2 text-sm font-medium transition-colors hover:bg-neutral-900 hover:text-white"
          >
            See the System
          </Link>
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight">Where to start</h2>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ENTRY_POINTS.map((entry) => (
            <li key={entry.href}>
              <Link
                href={entry.href}
                className="block h-full rounded-lg border border-neutral-200 p-5 transition-colors hover:border-neutral-900"
              >
                <div className="font-medium">{entry.label}</div>
                <div className="mt-1 text-sm text-neutral-600">
                  {entry.description}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight">Read</h2>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((article) => (
            <li key={article.slug}>
              <ArticleCard article={article} />
            </li>
          ))}
        </ul>
      </section>

      <CtaBlock
        title="Build your wardrobe on a system."
        description="The Method is a 3-step process for making consistent style decisions — no taste required."
        ctaLabel="Read the Method"
        ctaHref="/method"
      />
    </div>
  );
}
