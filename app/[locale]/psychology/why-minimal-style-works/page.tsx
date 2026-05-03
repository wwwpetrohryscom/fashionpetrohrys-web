import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/section";
import { localizePath } from "@/lib/i18n";
import { type LocalePageProps, resolveLocale } from "@/lib/locale-page";
import { getMessages } from "@/lib/messages";
import { buildMetadata } from "@/lib/seo";

const ARTICLE_SLUG = "why-minimal-style-works";
const ARTICLE_PATH = "/psychology/why-minimal-style-works";

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const messages = getMessages(locale);
  const article = messages.articles[ARTICLE_SLUG];

  return buildMetadata({
    title: article.title,
    description: article.description,
    path: ARTICLE_PATH,
    type: "article",
    locale,
  });
}

export default async function Page({ params }: LocalePageProps) {
  const locale = await resolveLocale(params);

  return (
    <article className="space-y-8">
      <Section
        kicker="Psychology"
        title="Why Minimal Style Works"
        description="Minimal style is misunderstood as a look. It is actually a system rule — and the reason it works has nothing to do with monochrome."
      />

      <div className="max-w-2xl space-y-6 text-neutral-700">
        <h2 className="pt-2 text-xl font-semibold text-neutral-900">
          Minimalism reduces decisions
        </h2>
        <p>
          A minimal wardrobe has fewer pieces and fewer compatible combinations to
          consider. Less variance means less time spent deciding and fewer bad
          decisions. The cognitive savings compound.
        </p>

        <h2 className="pt-2 text-xl font-semibold text-neutral-900">
          Minimalism makes quality affordable
        </h2>
        <p>
          When you own ten shirts, you cannot afford to pay much per shirt. When you
          own three, you can. The same budget produces a better wardrobe by spending
          it on fewer things.
        </p>

        <h2 className="pt-2 text-xl font-semibold text-neutral-900">
          Minimalism is not the look
        </h2>
        <p>
          A wardrobe of bright colors and bold patterns can still be minimal — if it
          follows a small set of consistent rules. The rule, not the palette, is what
          makes a wardrobe minimal. Many people copy the palette and miss the system.
        </p>
      </div>

      <p className="text-sm text-neutral-500">
        See also:{" "}
        <Link
          className="underline"
          href={localizePath(locale, "/psychology/clothing-and-first-impressions")}
        >
          Clothing and First Impressions
        </Link>{" "}
        ·{" "}
        <Link className="underline" href={localizePath(locale, "/system")}>
          The System
        </Link>
      </p>
    </article>
  );
}
