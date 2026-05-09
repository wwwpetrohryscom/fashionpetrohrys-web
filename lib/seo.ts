import type { Metadata } from "next";
import { DEFAULT_LOCALE, LOCALES, localizePath, type Locale } from "@/lib/i18n";

export const SITE_CONFIG = {
  name: "Fashion Area Top",
  url: "https://fashionarea.top",
  company: "HELPERG LLC",
  email: "info@helperg.com",
  description:
    "A system for thinking about clothing, building wardrobes, and making better style decisions.",
  defaultOgImage: "/og-default.png",
} as const;

type BuildMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  locale?: Locale;
};

export function buildMetadata(input: BuildMetadataInput): Metadata {
  const locale = input.locale ?? DEFAULT_LOCALE;
  const localizedPath = localizePath(locale, input.path);
  const url = new URL(localizedPath, SITE_CONFIG.url).toString();
  const ogTitle = `${input.title} | ${SITE_CONFIG.name}`;
  const image = new URL(
    input.image ?? SITE_CONFIG.defaultOgImage,
    SITE_CONFIG.url,
  ).toString();
  const languages = Object.fromEntries([
    ...LOCALES.map((language) => [
      language,
      localizePath(language, input.path),
    ]),
    ["x-default", localizePath(DEFAULT_LOCALE, input.path)],
  ]);

  return {
    title: input.title,
    description: input.description,
    alternates: {
      canonical: localizedPath,
      languages,
    },
    openGraph: {
      type: input.type ?? "website",
      url,
      siteName: SITE_CONFIG.name,
      title: ogTitle,
      description: input.description,
      images: [{ url: image, width: 1200, height: 630, alt: input.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: input.description,
      images: [image],
    },
  };
}
