"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  LOCALE_LABELS,
  LOCALES,
  localizePath,
  removeLocaleFromPath,
  type Locale,
} from "@/lib/i18n";

export function LanguageSwitcher({
  currentLocale,
}: {
  currentLocale: Locale;
}) {
  const pathname = usePathname();
  const router = useRouter();

  function handleChange(nextLocale: Locale) {
    const pathWithoutLocale = removeLocaleFromPath(pathname);
    router.push(localizePath(nextLocale, pathWithoutLocale));
  }

  return (
    <label className="shrink-0 text-xs font-medium text-neutral-600">
      <span className="sr-only">Language</span>
      <select
        value={currentLocale}
        onChange={(event) => handleChange(event.target.value as Locale)}
        className="border border-neutral-300 bg-white px-2 py-1 text-xs text-neutral-900 outline-none transition-colors hover:border-neutral-900 focus:border-neutral-900"
        aria-label="Language"
      >
        {LOCALES.map((locale) => (
          <option key={locale} value={locale}>
            {LOCALE_LABELS[locale]}
          </option>
        ))}
      </select>
    </label>
  );
}
