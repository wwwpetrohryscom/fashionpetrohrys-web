import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/section";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "How to Check Clothing Quality",
  description:
    "Five tests you can run in 90 seconds before buying anything. Most failures are visible if you know where to look.",
  path: "/clothing/how-to-check-clothing-quality",
  type: "article",
});

const TESTS = [
  {
    name: "1. Check the seams",
    body: "Stretch a seam gently. If you can see daylight through it, the stitch density is too low — the seam will fail within a year. Look for at least 8–10 stitches per inch.",
  },
  {
    name: "2. Check the fabric weight",
    body: "Hold the garment up by the shoulders. If it droops or feels paper-thin, the fabric will pill, fade, or tear. Quality cotton has body; quality wool has bounce.",
  },
  {
    name: "3. Check the buttons",
    body: "Buttons should be sewn through with cross-stitch, not parallel threads. Parallel threads are factory shortcuts and the first thing to break.",
  },
  {
    name: "4. Check the lining and inner construction",
    body: "Turn the garment inside out. Loose threads, exposed seam tape, or glued (rather than stitched) interfacing are signs of low cost-per-unit construction.",
  },
  {
    name: "5. Check the label",
    body: "Look for fiber composition. 100% natural fibers usually outlast blends, with one exception: a small percentage of synthetic in a knit can extend its life. More than 30% synthetic is a red flag.",
  },
];

export default function Page() {
  return (
    <article className="space-y-8">
      <Section
        kicker="Clothing"
        title="How to Check Clothing Quality"
        description="You do not need to be a tailor to spot a bad garment. Five 90-second tests catch most failures before they reach your closet."
      />

      <ul className="grid max-w-3xl gap-4">
        {TESTS.map((t) => (
          <li
            key={t.name}
            className="rounded-lg border border-neutral-200 p-5"
          >
            <div className="font-medium">{t.name}</div>
            <p className="mt-2 text-neutral-700">{t.body}</p>
          </li>
        ))}
      </ul>

      <p className="text-sm text-neutral-500">
        See also:{" "}
        <Link className="underline" href="/clothing">
          More on Clothing
        </Link>{" "}
        ·{" "}
        <Link className="underline" href="/guides/capsule-wardrobe-for-men">
          Capsule Wardrobe for Men
        </Link>
      </p>
    </article>
  );
}
