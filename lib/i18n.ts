export const LOCALES = ["en", "de", "fr", "es", "pt"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "English",
  de: "Deutsch",
  fr: "Français",
  es: "Español",
  pt: "Português",
};

export function isLocale(value: string): value is Locale {
  return LOCALES.includes(value as Locale);
}

export function localizePath(locale: Locale, path: string): string {
  if (path === "/" || path === "") {
    return `/${locale}`;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${normalizedPath}`;
}

export function removeLocaleFromPath(pathname: string): string {
  const segments = pathname.split("/");
  const maybeLocale = segments[1];

  if (maybeLocale && isLocale(maybeLocale)) {
    const rest = segments.slice(2).join("/");
    return rest ? `/${rest}` : "/";
  }

  return pathname || "/";
}
