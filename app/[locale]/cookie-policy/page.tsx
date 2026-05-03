import type { Metadata } from "next";
import { Section } from "@/components/section";
import { type LocalePageProps, resolveLocale } from "@/lib/locale-page";
import { getMessages } from "@/lib/messages";
import { buildMetadata, SITE_CONFIG } from "@/lib/seo";

const UPDATED_DATE = "2026-05-03";

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const messages = getMessages(locale);

  return buildMetadata({
    title: messages.legal.cookieTitle,
    description: messages.legal.cookieDescription,
    path: "/cookie-policy",
    locale,
  });
}

export default async function CookiePolicyPage({ params }: LocalePageProps) {
  const locale = await resolveLocale(params);
  const messages = getMessages(locale);

  return (
    <article className="space-y-10">
      <Section
        kicker={messages.legal.updated}
        title={messages.legal.cookieTitle}
        description={messages.legal.cookieDescription}
      />

      <div className="max-w-2xl space-y-6 text-neutral-700">
        <p className="text-sm text-neutral-500">{UPDATED_DATE}</p>
        <p>
          {messages.common.brand} uses a consent-first cookie model. Necessary
          storage is active for site delivery and consent storage. Analytics and
          marketing scripts are blocked until you choose to enable them.
        </p>

        <h2 className="pt-2 text-xl font-semibold text-neutral-900">
          Necessary cookies
        </h2>
        <p>
          Necessary storage keeps the website secure, remembers privacy choices,
          and supports normal page delivery. This category is always enabled
          because the site cannot operate reliably without it.
        </p>

        <h2 className="pt-2 text-xl font-semibold text-neutral-900">
          Analytics cookies
        </h2>
        <p>
          Analytics is disabled by default. If you grant analytics consent, the
          site may load Google Analytics using consent-based loading and IP
          anonymization. If you reject analytics, Google Analytics is not loaded.
        </p>

        <h2 className="pt-2 text-xl font-semibold text-neutral-900">
          Marketing cookies
        </h2>
        <p>
          Marketing storage is reserved for advertising, conversion measurement,
          and retargeting pixels. No marketing scripts are currently required for
          the core site, and none load unless marketing consent is granted.
        </p>

        <h2 className="pt-2 text-xl font-semibold text-neutral-900">
          Managing consent
        </h2>
        <p>
          Use the privacy settings link in the footer to accept all, reject
          non-essential cookies, or customize analytics and marketing consent. Your
          choice is stored locally in your browser under the{" "}
          <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-sm">
            fashion_area_cookie_consent
          </code>{" "}
          key.
        </p>

        <p className="text-sm text-neutral-500">
          Controller: {SITE_CONFIG.company}. Contact: {SITE_CONFIG.email}.
        </p>
      </div>
    </article>
  );
}
