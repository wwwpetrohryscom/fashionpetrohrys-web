import Image from "next/image";
import type { PerfumeRating, PerfumeTier } from "@/data/perfumes";

type Size = "sm" | "md" | "lg";

type PerfumeProductImageProps = {
  perfume: PerfumeRating;
  size?: Size;
  priority?: boolean;
  className?: string;
};

const CONTAINER_SIZE: Record<Size, string> = {
  sm: "aspect-[4/5] w-full max-w-[160px]",
  md: "aspect-[4/5] w-full max-w-[260px]",
  lg: "aspect-[4/5] w-full max-w-[360px]",
};

const ACCENT: Record<PerfumeTier, string> = {
  "top-of-the-top": "text-signal",
  "top-ok": "text-neutral-900",
  average: "text-neutral-500",
  avoid: "text-neutral-400",
};

const BACKGROUND: Record<PerfumeTier, string> = {
  "top-of-the-top":
    "bg-gradient-to-br from-neutral-50 via-white to-neutral-100",
  "top-ok": "bg-gradient-to-br from-neutral-50 to-neutral-100",
  average: "bg-neutral-50",
  avoid: "bg-neutral-50",
};

const SIZES_ATTR: Record<Size, string> = {
  sm: "(max-width: 640px) 50vw, 160px",
  md: "(max-width: 768px) 60vw, 260px",
  lg: "(max-width: 1024px) 80vw, 360px",
};

export function PerfumeProductImage({
  perfume,
  size = "md",
  priority = false,
  className = "",
}: PerfumeProductImageProps) {
  const image = perfume.bottleImage;
  const isPlaceholder = !image || image.sourceType === "placeholder";

  return (
    <div
      className={[
        "relative flex items-center justify-center overflow-hidden rounded-2xl border border-neutral-200 shadow-[0_1px_2px_rgba(0,0,0,0.04)]",
        BACKGROUND[perfume.tier],
        CONTAINER_SIZE[size],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {isPlaceholder ? (
        <BottleSilhouette
          accentClassName={ACCENT[perfume.tier]}
          brand={perfume.brand}
          name={perfume.name}
          ariaLabel={image?.alt ?? `${perfume.fullName} placeholder visual`}
        />
      ) : (
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes={SIZES_ATTR[size]}
          priority={priority}
          loading={priority ? "eager" : "lazy"}
          className="h-full w-full object-contain p-4"
        />
      )}
    </div>
  );
}

type BottleSilhouetteProps = {
  accentClassName: string;
  brand: string;
  name: string;
  ariaLabel: string;
};

function BottleSilhouette({
  accentClassName,
  brand,
  name,
  ariaLabel,
}: BottleSilhouetteProps) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-between p-5">
      <svg
        viewBox="0 0 80 110"
        role="img"
        aria-label={ariaLabel}
        className="h-3/5 w-auto"
      >
        <rect
          x="34"
          y="4"
          width="12"
          height="6"
          rx="1"
          className={accentClassName}
          fill="currentColor"
        />
        <rect
          x="32"
          y="10"
          width="16"
          height="14"
          rx="2"
          className="text-neutral-300"
          fill="currentColor"
        />
        <path
          d="M22 30 Q22 24 30 24 H50 Q58 24 58 30 V96 Q58 104 50 104 H30 Q22 104 22 96 Z"
          className="text-white"
          fill="currentColor"
          stroke="currentColor"
          strokeOpacity="0.18"
        />
        <path
          d="M22 30 Q22 24 30 24 H50 Q58 24 58 30 V96 Q58 104 50 104 H30 Q22 104 22 96 Z"
          className="text-neutral-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.8"
        />
        <rect
          x="28"
          y="56"
          width="24"
          height="22"
          className={accentClassName}
          fill="currentColor"
          fillOpacity="0.08"
        />
        <line
          x1="28"
          y1="56"
          x2="52"
          y2="56"
          className={accentClassName}
          stroke="currentColor"
          strokeWidth="0.6"
          strokeOpacity="0.4"
        />
        <line
          x1="28"
          y1="78"
          x2="52"
          y2="78"
          className={accentClassName}
          stroke="currentColor"
          strokeWidth="0.6"
          strokeOpacity="0.4"
        />
      </svg>
      <div className="mt-3 w-full text-center">
        <div className="truncate text-[10px] font-semibold uppercase tracking-widest text-neutral-500">
          {brand}
        </div>
        <div className="mt-0.5 line-clamp-2 text-xs font-medium text-neutral-800">
          {name}
        </div>
      </div>
    </div>
  );
}
