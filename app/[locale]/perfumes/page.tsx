import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/section";
import { PerfumeRatingCard } from "@/components/perfume-rating-card";
import { PERFUMES } from "@/data/perfumes";
import { localizePath } from "@/lib/i18n";
import { type LocalePageProps, resolveLocale } from "@/lib/locale-page";
import { getMessages } from "@/lib/messages";
import { buildMetadata } from "@/lib/seo";

const PATH = "/perfumes";

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const messages = getMessages(locale);

  return buildMetadata({
    title: messages.pageMeta.perfumes.title,
    description: messages.pageMeta.perfumes.description,
    path: PATH,
    locale,
  });
}

export default async function PerfumesPage({ params }: LocalePageProps) {
  const locale = await resolveLocale(params);
  const messages = getMessages(locale);

  return (
    <div className="space-y-12">
      <Section
        kicker={messages.perfumes.category.kicker}
        title={messages.perfumes.category.title}
        description={messages.perfumes.category.intro}
      />

      <ul className="grid gap-4 sm:grid-cols-2">
        {PERFUMES.map((perfume) => (
          <li key={perfume.slug}>
            <PerfumeRatingCard
              perfume={perfume}
              href={localizePath(locale, `/perfumes/${perfume.slug}`)}
              outOfLabel={messages.perfumes.labels.outOf}
            />
          </li>
        ))}
      </ul>

      <p className="max-w-2xl text-sm text-neutral-600">
        {messages.perfumes.category.systemLink}{" "}
        <Link className="underline" href={localizePath(locale, "/method")}>
          {messages.nav.method}
        </Link>{" "}
        ·{" "}
        <Link className="underline" href={localizePath(locale, "/system")}>
          {messages.nav.system}
        </Link>{" "}
        ·{" "}
        <Link className="underline" href={localizePath(locale, "/guides")}>
          {messages.nav.guides}
        </Link>
      </p>

      <p className="max-w-2xl text-xs text-neutral-500">
        {messages.perfumes.labels.ratingMethodology}
      </p>
    </div>
  );
}
