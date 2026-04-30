import Link from "next/link";

type CtaBlockProps = {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
};

export function CtaBlock({ title, description, ctaLabel, ctaHref }: CtaBlockProps) {
  return (
    <div className="rounded-lg border border-neutral-900 bg-neutral-900 p-8 text-white">
      <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-3 text-neutral-300">{description}</p>
      <Link
        href={ctaHref}
        className="mt-5 inline-block border border-white px-5 py-2 text-sm font-medium transition-colors hover:bg-white hover:text-neutral-900"
      >
        {ctaLabel} →
      </Link>
    </div>
  );
}
