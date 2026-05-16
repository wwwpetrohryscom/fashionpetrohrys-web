import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { OutfitIdeaCard } from "@/components/outfit-idea-card";
import { Section } from "@/components/section";
import { OUTFIT_IDEAS } from "@/data/outfit-ideas";
import { localizePath } from "@/lib/i18n";
import { type LocalePageProps, resolveLocale } from "@/lib/locale-page";
import { getMessages } from "@/lib/messages";
import { buildMetadata } from "@/lib/seo";

const PATH = "/outfit-ideas";

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const messages = getMessages(locale);

  return buildMetadata({
    title: messages.pageMeta.outfitIdeas.title,
    description: messages.pageMeta.outfitIdeas.description,
    path: PATH,
    locale,
  });
}

export default async function OutfitIdeasHubPage({ params }: LocalePageProps) {
  const locale = await resolveLocale(params);
  const messages = getMessages(locale);
  const labels = messages.outfitIdeas;

  return (
    <div className="space-y-12">
      <Breadcrumbs
        locale={locale}
        items={[
          { label: messages.common.home, href: "/" },
          { label: labels.kicker },
        ]}
      />

      <Section
        kicker={labels.kicker}
        title={labels.title}
        description={labels.hubIntro}
      >
        <p className="max-w-2xl text-sm text-neutral-600">{labels.hubNote}</p>
      </Section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-neutral-900">
          {labels.browseTitle}
        </h2>
        <ul
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
        >
          {OUTFIT_IDEAS.map((idea) => (
            <li key={idea.slug}>
              <OutfitIdeaCard
                idea={idea}
                href={localizePath(locale, idea.href)}
                ctaLabel={labels.readFormulas}
              />
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-3 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-neutral-900">
          {labels.methodologyTitle}
        </h2>
        <p className="max-w-2xl text-neutral-700">
          {labels.methodologyIntro}
        </p>
        <ul className="mt-2 space-y-1.5 text-sm text-neutral-700">
          <li>· {labels.methodFormality}</li>
          <li>· {labels.methodColor}</li>
          <li>· {labels.methodFit}</li>
          <li>· {labels.methodShoes}</li>
          <li>· {labels.methodRepeat}</li>
        </ul>
      </section>

      <p className="max-w-2xl text-sm text-neutral-600">
        Build the bigger picture in{" "}
        <Link className="underline" href={localizePath(locale, "/method")}>
          The Method
        </Link>{" "}
        and{" "}
        <Link className="underline" href={localizePath(locale, "/system")}>
          The System
        </Link>
        , see worked examples under{" "}
        <Link className="underline" href={localizePath(locale, "/outfits")}>
          Outfits
        </Link>{" "}
        and{" "}
        <Link
          className="underline"
          href={localizePath(locale, "/outfits/simple-outfit-formulas")}
        >
          Simple Outfit Formulas
        </Link>
        , and pair these formulas with the wider{" "}
        <Link className="underline" href={localizePath(locale, "/guides")}>
          Guides
        </Link>
        .
      </p>
    </div>
  );
}
