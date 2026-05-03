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
    title: messages.legal.privacyTitle,
    description: messages.legal.privacyDescription,
    path: "/privacy-policy",
    locale,
  });
}

export default async function PrivacyPolicyPage({ params }: LocalePageProps) {
  const locale = await resolveLocale(params);
  const messages = getMessages(locale);

  return (
    <article className="space-y-10">
      <Section
        kicker={messages.legal.updated}
        title={messages.legal.privacyTitle}
        description={messages.legal.privacyDescription}
      />

      <div className="max-w-2xl space-y-6 text-neutral-700">
        <p className="text-sm text-neutral-500">{UPDATED_DATE}</p>
        <p>
          {messages.legal.company}. {messages.legal.contact}. This policy
          explains how {SITE_CONFIG.company} processes personal data for{" "}
          {messages.common.brand} at {SITE_CONFIG.url}.
        </p>

        <h2 className="pt-2 text-xl font-semibold text-neutral-900">
          Data we process
        </h2>
        <p>
          We process basic technical data needed to deliver the website, including
          request metadata, security logs, device/browser information, and cookie
          consent preferences stored in the browser. If you contact us, we process
          the information you send to respond to the request.
        </p>

        <h2 className="pt-2 text-xl font-semibold text-neutral-900">
          Analytics and marketing
        </h2>
        <p>
          Google Analytics is prepared but blocked by default. It loads only when
          you explicitly enable analytics cookies. Marketing cookies and pixels are
          also blocked by default and load only after explicit marketing consent.
        </p>

        <h2 className="pt-2 text-xl font-semibold text-neutral-900">
          Legal bases
        </h2>
        <p>
          Necessary processing is used to provide the website, maintain security,
          and remember consent choices. Optional analytics and marketing
          processing rely on consent, which can be withdrawn at any time through
          the footer privacy settings.
        </p>

        <h2 className="pt-2 text-xl font-semibold text-neutral-900">
          Processors and transfers
        </h2>
        <p>
          Hosting is provided through Vercel. If analytics consent is granted,
          Google may process analytics data as a processor or independent
          controller depending on its service terms. International transfers, when
          applicable, should rely on appropriate safeguards such as Standard
          Contractual Clauses.
        </p>

        <h2 className="pt-2 text-xl font-semibold text-neutral-900">
          Your rights
        </h2>
        <p>
          Depending on your location, you may request access, correction,
          deletion, restriction, portability, objection, or withdrawal of consent.
          Contact {SITE_CONFIG.email} to exercise these rights.
        </p>
      </div>
    </article>
  );
}
