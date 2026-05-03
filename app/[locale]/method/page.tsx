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
    title: messages.pageMeta.method.title,
    description: messages.pageMeta.method.description,
    path: "/method",
    locale,
  });
}

export default async function MethodPage({ params }: LocalePageProps) {
  const locale = await resolveLocale(params);

  return (
    <div className="space-y-12">
      <Section
        kicker="Method"
        title="Style is a method, not a mood"
        description="Most people treat style as a feeling. The result is a closet full of clothes that don't work together. Style works when you treat it as a method."
      />

      <article className="max-w-2xl space-y-6 text-neutral-700">
        <p>
          A method is a small set of rules that produces consistent decisions. The
          method below is three steps. It does not require taste, money, or a stylist.
        </p>

        <h2 className="pt-4 text-xl font-semibold text-neutral-900">The three steps</h2>
        <ol className="space-y-4">
          <li>
            <strong className="text-neutral-900">1. Anchor.</strong> Pick the colors,
            fits, and formality range you commit to. These are non-negotiable for the
            next 12 months.
          </li>
          <li>
            <strong className="text-neutral-900">2. Curate.</strong> Add only garments
            that survive all three anchors. Everything else is noise — sell it, donate
            it, or shelve it.
          </li>
          <li>
            <strong className="text-neutral-900">3. Compose.</strong> Build outfits
            from the curated set. No outfit is allowed to use a piece outside the
            curated set, even on Saturday.
          </li>
        </ol>

        <p>
          The method is not about taste. It is about removing decisions. Once your
          anchors are set, every shopping question has a binary answer.
        </p>

        <p>
          The vocabulary the method uses — formality, silhouette, color, layer — is
          defined in{" "}
          <Link className="underline" href={localizePath(locale, "/system")}>
            The System
          </Link>
          . Read that next.
        </p>
      </article>

      <CtaBlock
        title="Ready to build the system?"
        description="The four dimensions of every outfit, plus the rules that decide whether one works."
        ctaLabel="Read the System"
        ctaHref={localizePath(locale, "/system")}
      />
    </div>
  );
}
