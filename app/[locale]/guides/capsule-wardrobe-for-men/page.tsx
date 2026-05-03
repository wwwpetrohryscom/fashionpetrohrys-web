import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/section";
import { localizePath } from "@/lib/i18n";
import { type LocalePageProps, resolveLocale } from "@/lib/locale-page";
import { getMessages } from "@/lib/messages";
import { buildMetadata } from "@/lib/seo";

const ARTICLE_SLUG = "capsule-wardrobe-for-men";
const ARTICLE_PATH = "/guides/capsule-wardrobe-for-men";

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
        title="Capsule Wardrobe for Men"
        description="Most capsule wardrobe lists fail because they read like shopping lists. A working capsule is twelve pieces chosen against a single rule."
      />

      <div className="max-w-2xl space-y-6 text-neutral-700">
        <h2 className="pt-2 text-xl font-semibold text-neutral-900">
          The twelve
        </h2>
        <p>
          Two trousers (one dark, one mid). Two shirts (one white, one patterned).
          One knit. One T-shirt. One pair of clean sneakers. One pair of leather
          shoes. One blazer. One overshirt. One coat. One belt. That is twelve. It
          is enough for every weekday for a year.
        </p>

        <h2 className="pt-2 text-xl font-semibold text-neutral-900">
          The rule
        </h2>
        <p>
          A piece earns a slot only if it pairs with at least 70% of the other
          pieces. If a garment only works with one outfit, it is not a capsule
          piece — it is a costume.
        </p>

        <h2 className="pt-2 text-xl font-semibold text-neutral-900">
          The order matters
        </h2>
        <p>
          Pick base before layers, layers before statement. People who buy the
          statement piece first end up biasing every other purchase toward it. The
          base is what you wear most days, so it is what you should buy first.
        </p>
      </div>

      <p className="text-sm text-neutral-500">
        See also:{" "}
        <Link
          className="underline"
          href={localizePath(locale, "/guides/how-to-dress-better")}
        >
          How to Dress Better
        </Link>
      </p>
    </article>
  );
}
