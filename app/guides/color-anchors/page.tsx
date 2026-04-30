import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Color Anchors: The Two-Color Rule",
  description:
    "Why two anchor colors are enough — and how to pick them for your skin tone.",
};

export default function ColorAnchorsPage() {
  return (
    <article className="space-y-6">
      <header>
        <div className="text-xs uppercase tracking-wider text-neutral-500">Guide</div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">
          Color Anchors: The Two-Color Rule
        </h1>
        <p className="mt-3 text-neutral-600">
          Two anchor colors are enough to build a complete wardrobe. More than two and
          you start producing outfits that don&apos;t share DNA.
        </p>
      </header>

      <section>
        <h2 className="mt-6 text-xl font-semibold">Pick one neutral, one personal</h2>
        <p className="mt-3 text-neutral-700">
          Your first anchor is a neutral — black, navy, charcoal, cream, or stone. This
          is the color most of your wardrobe will share. Your second anchor is
          personal: a color you actually wear well, picked against your skin
          temperature.
        </p>
      </section>

      <section>
        <h2 className="mt-6 text-xl font-semibold">The test</h2>
        <p className="mt-3 text-neutral-700">
          Hold a candidate color up to your face in natural light. If it makes your
          skin look healthier, it qualifies. If it makes you look tired, it does not.
          Trust the mirror, not the trend.
        </p>
      </section>

      <p className="pt-4 text-sm text-neutral-500">
        See also: <Link href="/guides/capsule-wardrobe" className="underline">How to Build a Capsule Wardrobe That Actually Works</Link>
      </p>
    </article>
  );
}
