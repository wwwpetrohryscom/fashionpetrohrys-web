import Link from "next/link";
import { CookieSettingsButton } from "@/components/cookie-settings-modal";
import { FOOTER_NAV } from "@/data/navigation";
import { localizePath, type Locale } from "@/lib/i18n";
import { getMessages } from "@/lib/messages";

export function SiteFooter({ locale }: { locale: Locale }) {
  const messages = getMessages(locale);

  return (
    <footer className="mt-24 border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div>
            <div className="text-sm font-semibold tracking-tight">
              {messages.common.brand}
            </div>
            <div className="mt-1 text-sm text-neutral-500">
              {messages.common.tagline}
            </div>
          </div>
          <nav className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-neutral-600 sm:grid-cols-3">
            {FOOTER_NAV.map((item) => (
              <Link
                key={item.href}
                href={localizePath(locale, item.href)}
                className="hover:text-neutral-900"
              >
                {messages.nav[item.key]}
              </Link>
            ))}
            <Link
              href={localizePath(locale, "/privacy-policy")}
              className="hover:text-neutral-900"
            >
              {messages.footer.privacyPolicy}
            </Link>
            <Link
              href={localizePath(locale, "/cookie-policy")}
              className="hover:text-neutral-900"
            >
              {messages.footer.cookiePolicy}
            </Link>
            <CookieSettingsButton label={messages.footer.privacySettings} />
          </nav>
        </div>
        <div className="mt-8 text-xs text-neutral-500">
          © {new Date().getFullYear()} {messages.common.brand}.{" "}
          {messages.common.allRightsReserved}
        </div>
      </div>
    </footer>
  );
}
