import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/section";
import { localizePath } from "@/lib/i18n";
import { type LocalePageProps, resolveLocale } from "@/lib/locale-page";
import { getMessages } from "@/lib/messages";
import { buildMetadata } from "@/lib/seo";

const ARTICLE_SLUG = "clothing-and-first-impressions";
const ARTICLE_PATH = "/psychology/clothing-and-first-impressions";

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
        title="Clothing and First Impressions"
        description="A first impression is mostly formed before you speak. Three signals do most of the work."
      />

      <div className="max-w-2xl space-y-6 text-neutral-700">
        <h2 className="pt-2 text-xl font-semibold text-neutral-900">
          1. Fit
        </h2>
        <p>
          Fit is read first because it is the easiest signal to spot from across a
          room. A well-fitted garment communicates that you pay attention to detail.
          A poorly-fitted one communicates the opposite — even if the garment is
          expensive.
        </p>

        <h2 className="pt-2 text-xl font-semibold text-neutral-900">
          2. Cleanliness and care
        </h2>
        <p>
          Wrinkles, stains, scuffed shoes, and pilled fabric are read as carelessness.
          The signal is not what you wear; it is whether you maintain it. A $50 shirt
          that is pressed beats a $500 shirt that is wrinkled.
        </p>

        <h2 className="pt-2 text-xl font-semibold text-neutral-900">
          3. Coherence
        </h2>
        <p>
          When colors, formality, and silhouette agree, the outfit reads as
          intentional. When they disagree, the outfit reads as random — even if every
          individual piece is good. Coherence is a stronger signal than cost.
        </p>
      </div>

      <p className="text-sm text-neutral-500">
        See also:{" "}
        <Link
          className="underline"
          href={localizePath(locale, "/psychology/why-minimal-style-works")}
        >
          Why Minimal Style Works
        </Link>{" "}
        ·{" "}
        <Link className="underline" href={localizePath(locale, "/method")}>
          The Method
        </Link>
      </p>
    </article>
  );
}
