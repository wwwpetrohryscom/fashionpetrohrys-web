import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Method",
  description:
    "How we approach style — a clear, repeatable method for building a wardrobe.",
};

export default function MethodPage() {
  return (
    <article className="space-y-6">
      <header>
        <div className="text-xs uppercase tracking-wider text-neutral-500">Method</div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">
          Style is a method, not a mood
        </h1>
      </header>

      <p className="text-lg text-neutral-700">
        Most people treat style as a feeling. The result is a closet full of clothes
        that don&apos;t work together. Style works when you treat it as a method — a
        small set of rules that produce consistent decisions.
      </p>

      <section>
        <h2 className="mt-6 text-xl font-semibold">The three steps</h2>
        <ol className="mt-4 space-y-4 text-neutral-700">
          <li>
            <strong className="text-neutral-900">1. Anchor.</strong> Pick the colors,
            fits, and formality range you commit to. These are non-negotiable.
          </li>
          <li>
            <strong className="text-neutral-900">2. Curate.</strong> Add only garments
            that survive all three anchors.
          </li>
          <li>
            <strong className="text-neutral-900">3. Compose.</strong> Build outfits
            from the curated set. No exceptions.
          </li>
        </ol>
      </section>

      <p className="text-neutral-700">
        The method is not about taste. It is about removing decisions. Once your
        anchors are set, every shopping question has a binary answer.
      </p>
    </article>
  );
}
