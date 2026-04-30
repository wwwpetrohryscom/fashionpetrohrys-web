import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/section";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Simple Outfit Formulas",
  description:
    "The four formulas that cover 80% of real-world dressing — and how to vary them without breaking the system.",
  path: "/outfits/simple-outfit-formulas",
  type: "article",
});

const FORMULAS = [
  {
    name: "Top + Bottom + Shoe",
    body: "T-shirt, jeans, sneakers. The default. Variations come from changing only the top — knit instead of tee, oxford instead of knit.",
  },
  {
    name: "Top + Bottom + Layer + Shoe",
    body: "Add an overshirt or cardigan. Layer pulls a casual base toward smart-casual without changing the base pieces.",
  },
  {
    name: "Top + Bottom + Outerwear + Shoe",
    body: "Coat, blazer, or jacket added on top. Use this when temperature or formality require it. The rest of the outfit stays unchanged.",
  },
  {
    name: "Top + Bottom + Layer + Outerwear + Shoe",
    body: "Full stack. Five elements maximum. Past five and the outfit reads as styled, not lived in.",
  },
];

export default function Page() {
  return (
    <article className="space-y-8">
      <Section
        kicker="Outfits"
        title="Simple Outfit Formulas"
        description="If you have to think about an outfit for more than 30 seconds, you are missing a formula. The four below cover most situations."
      />

      <ul className="grid max-w-3xl gap-4">
        {FORMULAS.map((f) => (
          <li
            key={f.name}
            className="rounded-lg border border-neutral-200 p-5"
          >
            <div className="font-medium">{f.name}</div>
            <p className="mt-2 text-neutral-700">{f.body}</p>
          </li>
        ))}
      </ul>

      <div className="max-w-2xl space-y-4 text-neutral-700">
        <h2 className="pt-2 text-xl font-semibold text-neutral-900">
          How to vary without breaking
        </h2>
        <p>
          Variation happens at one slot at a time, not all of them. Change the top
          and keep the rest. Change the shoe and keep the rest. Outfits that change
          three slots at once stop reading as the same person.
        </p>
      </div>

      <p className="text-sm text-neutral-500">
        See also:{" "}
        <Link className="underline" href="/system">The System</Link> ·{" "}
        <Link className="underline" href="/guides/how-to-dress-better">
          How to Dress Better
        </Link>
      </p>
    </article>
  );
}
