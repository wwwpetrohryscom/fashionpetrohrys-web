import type { Metadata } from "next";

export const SITE_CONFIG = {
  name: "FashionPetroHrys",
  url: "https://fashionpetrohrys.com",
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
};

export function buildMetadata(input: BuildMetadataInput): Metadata {
  const url = new URL(input.path, SITE_CONFIG.url).toString();
  const ogTitle = `${input.title} | ${SITE_CONFIG.name}`;
  const image = new URL(
    input.image ?? SITE_CONFIG.defaultOgImage,
    SITE_CONFIG.url,
  ).toString();

  return {
    title: input.title,
    description: input.description,
    alternates: { canonical: url },
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
