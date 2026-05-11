import type { Metadata } from "next";
import {
  GuideArticlePage,
  buildGuideArticleMetadata,
} from "@/components/guide-article-page";
import { type LocalePageProps, resolveLocale } from "@/lib/locale-page";

const SLUG = "how-to-build-personal-style";

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const locale = await resolveLocale(params);
  return buildGuideArticleMetadata(SLUG, locale);
}

export default async function Page({ params }: LocalePageProps) {
  const locale = await resolveLocale(params);
  return <GuideArticlePage slug={SLUG} locale={locale} />;
}
