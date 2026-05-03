import Link from "next/link";
import { PRIMARY_NAV } from "@/data/navigation";
import { LanguageSwitcher } from "@/components/language-switcher";
import { localizePath, type Locale } from "@/lib/i18n";
import { getMessages } from "@/lib/messages";

export function SiteHeader({ locale }: { locale: Locale }) {
  const messages = getMessages(locale);

  return (
    <header className="border-b border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-5 px-6 py-5">
        <Link
          href={localizePath(locale, "/")}
          className="text-sm font-semibold tracking-tight"
        >
          {messages.common.brand}
        </Link>
        <div className="flex min-w-0 flex-1 items-center justify-end gap-4">
          <nav
            aria-label="Primary navigation"
            className="flex gap-5 overflow-x-auto text-sm text-neutral-600"
          >
            {PRIMARY_NAV.map((item) => (
              <Link
                key={item.href}
                href={localizePath(locale, item.href)}
                className="whitespace-nowrap transition-colors hover:text-neutral-900"
              >
                {messages.nav[item.key]}
              </Link>
            ))}
          </nav>
          <LanguageSwitcher currentLocale={locale} />
        </div>
      </div>
    </header>
  );
}
