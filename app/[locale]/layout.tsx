import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AnalyticsProvider } from "@/components/analytics-provider";
import { CookieConsent } from "@/components/cookie-consent";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { DEFAULT_LOCALE, LOCALES, isLocale, type Locale } from "@/lib/i18n";
import { getMessages } from "@/lib/messages";
import { SITE_CONFIG } from "@/lib/seo";
import "../globals.css";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const { locale: requestedLocale } = await params;
  const locale = isLocale(requestedLocale) ? requestedLocale : DEFAULT_LOCALE;
  const messages = getMessages(locale);

  return {
    metadataBase: new URL(SITE_CONFIG.url),
    title: {
      default: `${messages.common.brand} - ${messages.common.tagline}`,
      template: `%s | ${messages.common.brand}`,
    },
    description: messages.pageMeta.home.description,
    applicationName: messages.common.brand,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale: requestedLocale } = await params;

  if (!isLocale(requestedLocale)) {
    notFound();
  }

  const locale: Locale = requestedLocale;
  const messages = getMessages(locale);

  return (
    <html lang={locale}>
      <body className="flex min-h-screen flex-col bg-white text-neutral-900">
        <AnalyticsProvider />
        <SiteHeader locale={locale} />
        <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-12">
          {children}
        </main>
        <SiteFooter locale={locale} />
        <CookieConsent messages={messages.cookie} />
      </body>
    </html>
  );
}
