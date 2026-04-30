import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Build a Capsule Wardrobe That Actually Works",
  description:
    "The 7-3-1 rule and how to pick the seven pieces every wardrobe needs first.",
};

export default function CapsuleWardrobePage() {
  return (
    <article className="space-y-6">
      <header>
        <div className="text-xs uppercase tracking-wider text-neutral-500">Guide</div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">
          How to Build a Capsule Wardrobe That Actually Works
        </h1>
        <p className="mt-3 text-neutral-600">
          Most capsule wardrobe lists fail because they treat it as a shopping list. A
          real capsule is a system of constraints.
        </p>
      </header>

      <section>
        <h2 className="mt-6 text-xl font-semibold">The 7-3-1 rule</h2>
        <p className="mt-3 text-neutral-700">
          A working capsule has 7 base pieces, 3 layering pieces, and 1 statement piece.
          That ratio is what separates a wardrobe that compounds from a closet of
          one-off purchases.
        </p>
        <ul className="mt-4 space-y-2 text-neutral-700">
          <li><strong className="text-neutral-900">7 base.</strong> Two trousers, two shirts, one knit, one tee, one pair of shoes.</li>
          <li><strong className="text-neutral-900">3 layers.</strong> A blazer, an overshirt, a coat.</li>
          <li><strong className="text-neutral-900">1 statement.</strong> One garment that signals identity. Picked last.</li>
        </ul>
      </section>

      <section>
        <h2 className="mt-6 text-xl font-semibold">Why the order matters</h2>
        <p className="mt-3 text-neutral-700">
          Pick the statement piece first and you bias every other purchase toward it.
          Pick the base last and nothing matches. The order — base, then layers, then
          statement — is the system.
        </p>
      </section>

      <p className="pt-4 text-sm text-neutral-500">
        See also: <Link href="/guides/color-anchors" className="underline">Color Anchors: The Two-Color Rule</Link>
      </p>
    </article>
  );
}
