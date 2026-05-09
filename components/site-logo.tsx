type SiteLogoProps = {
  variant?: "full" | "mark" | "wordmark";
  size?: "sm" | "md" | "lg";
  className?: string;
};

const MARK_SIZES: Record<NonNullable<SiteLogoProps["size"]>, string> = {
  sm: "h-6 w-6",
  md: "h-8 w-8",
  lg: "h-10 w-10",
};

const WORDMARK_SIZES: Record<NonNullable<SiteLogoProps["size"]>, string> = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
};

export function SiteLogo({
  variant = "full",
  size = "md",
  className = "",
}: SiteLogoProps) {
  const wordmarkClass = `font-bold uppercase tracking-[0.18em] ${WORDMARK_SIZES[size]}`;

  return (
    <span
      className={`inline-flex items-center gap-2.5 ${className}`}
      aria-hidden="false"
    >
      {variant !== "wordmark" ? (
        <svg
          viewBox="0 0 120 120"
          className={`shrink-0 ${MARK_SIZES[size]}`}
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M18 18 H82 L62 38 H44 V52 H72 L60 64 H44 V102 L26 102 V32 L18 18 Z"
            className="text-neutral-900"
          />
          <path
            fill="#e10600"
            d="M58 30 H102 L92 44 H82 V102 L70 102 V44 L60 44 Z"
          />
        </svg>
      ) : null}

      {variant !== "mark" ? (
        <span className={wordmarkClass}>
          <span className="text-neutral-900">Fashion Area</span>
          <span className="ml-1.5 text-signal">Top</span>
        </span>
      ) : null}
    </span>
  );
}
