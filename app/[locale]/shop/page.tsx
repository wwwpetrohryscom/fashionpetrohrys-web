import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/section";
import { CtaBlock } from "@/components/cta-block";
import { localizePath } from "@/lib/i18n";
import { type LocalePageProps, resolveLocale } from "@/lib/locale-page";
import { getMessages } from "@/lib/messages";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const messages = getMessages(locale);

  return buildMetadata({
    title: messages.pageMeta.shop.title,
    description: messages.pageMeta.shop.description,
    path: "/shop",
    locale,
  });
}

export default async function ShopPage({ params }: LocalePageProps) {
  const locale = await resolveLocale(params);

  return (
    <div className="space-y-12">
      <Section
        kicker="Shop"
        title="Curated picks, coming soon"
        description="Every piece sold here will pass the same quality, fit, and formality tests we apply across the rest of the site. We are not opening the shop until that is true."
      />

      <p className="max-w-2xl text-neutral-700">
        Until then, learn how we evaluate garments in{" "}
        <Link className="underline" href={localizePath(locale, "/clothing")}>
          Clothing
        </Link>
        , or read{" "}
        <Link
          className="underline"
          href={localizePath(locale, "/clothing/how-to-check-clothing-quality")}
        >
          How to Check Clothing Quality
        </Link>{" "}
        to do your own evaluation.
      </p>

      <CtaBlock
        title="Use the system in the meantime."
        description="The Method and System work for any wardrobe — including the one you already own."
        ctaLabel="Read the Method"
        ctaHref={localizePath(locale, "/method")}
      />
    </div>
  );
}
