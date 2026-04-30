import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/section";
import { CtaBlock } from "@/components/cta-block";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Shop",
  description:
    "Curated clothing picks that survive the system. Coming soon.",
  path: "/shop",
});

export default function ShopPage() {
  return (
    <div className="space-y-12">
      <Section
        kicker="Shop"
        title="Curated picks, coming soon"
        description="Every piece sold here will pass the same quality, fit, and formality tests we apply across the rest of the site. We are not opening the shop until that is true."
      />

      <p className="max-w-2xl text-neutral-700">
        Until then, learn how we evaluate garments in{" "}
        <Link className="underline" href="/clothing">Clothing</Link>, or read{" "}
        <Link className="underline" href="/clothing/how-to-check-clothing-quality">
          How to Check Clothing Quality
        </Link>{" "}
        to do your own evaluation.
      </p>

      <CtaBlock
        title="Use the system in the meantime."
        description="The Method and System work for any wardrobe — including the one you already own."
        ctaLabel="Read the Method"
        ctaHref="/method"
      />
    </div>
  );
}
