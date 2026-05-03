import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/section";
import { localizePath } from "@/lib/i18n";
import { type LocalePageProps, resolveLocale } from "@/lib/locale-page";
import { getMessages } from "@/lib/messages";
import { buildMetadata } from "@/lib/seo";

const ARTICLE_SLUG = "how-to-dress-better";
const ARTICLE_PATH = "/guides/how-to-dress-better";

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
        kicker="Guide"
        title="How to Dress Better"
        description="The fastest way to dress better is not to buy more clothes. It is to apply three constraints to the clothes you already own."
      />

      <div className="max-w-2xl space-y-6 text-neutral-700">
        <h2 className="pt-2 text-xl font-semibold text-neutral-900">
          1. Limit each outfit to three colors
        </h2>
        <p>
          Most bad outfits have four or more colors fighting for attention. Cap your
          outfit at three — one base, one neutral, one accent. Anything beyond three
          should be a strong reason, not an accident.
        </p>

        <h2 className="pt-2 text-xl font-semibold text-neutral-900">
          2. Keep formality within one step
        </h2>
        <p>
          Outfits break when one piece is dressed up and another is dressed down. A
          blazer with athletic sneakers reads as confused. Keep every piece within
          one rung of the formality ladder.
        </p>

        <h2 className="pt-2 text-xl font-semibold text-neutral-900">
          3. Tailor everything that can be tailored
        </h2>
        <p>
          A $40 shirt that fits beats a $400 shirt that does not. Take everything to
          a tailor once. Sleeves, shoulders, waist, hem. The improvement is bigger
          than any new purchase you can make.
        </p>
      </div>

      <p className="text-sm text-neutral-500">
        See also:{" "}
        <Link
          className="underline"
          href={localizePath(locale, "/guides/capsule-wardrobe-for-men")}
        >
          Capsule Wardrobe for Men
        </Link>{" "}
        ·{" "}
        <Link
          className="underline"
          href={localizePath(locale, "/outfits/simple-outfit-formulas")}
        >
          Simple Outfit Formulas
        </Link>
      </p>
    </article>
  );
}
