"use client";

import type { BrandConfig } from "../../data/brands";
import { img } from "../../utils";

interface Props {
  brand: BrandConfig;
  variant?: "dark" | "light";
  width?: number;
}

/** Custom SVG + wordmark logo for rebranded pages, or template PNG fallback */
export default function BrandLogo({ brand, variant = "dark", width = 120 }: Props) {
  if (brand.useImageLogo) {
    return (
      <img
        src={img(variant === "light" ? "logo-light.png" : "logo-dark.png")}
        alt={brand.name}
        width={width}
      />
    );
  }

  const fg = variant === "light" ? "#FFFFFF" : "#0C0610";
  const accent = "#FF6A3A";
  const fontSize = Math.round(width * 0.23);
  const iconSize = Math.round(width * 0.24);

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        color: fg,
        fontFamily: 'var(--pikiz-heading-font, "Bricolage Grotesque", sans-serif)',
        fontWeight: 800,
        fontSize: `${fontSize}px`,
        lineHeight: 1,
        letterSpacing: "-0.03em",
        whiteSpace: "nowrap",
      }}
    >
      {brand.id === "matte" ? (
        <svg width={iconSize} height={iconSize} viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <rect x="2" y="2" width="28" height="28" rx="7" fill={fg} />
          <circle cx="16" cy="16" r="6" fill={accent} />
        </svg>
      ) : (
        <svg width={iconSize} height={iconSize} viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <path
            d="M16 2L19.8 12.2L30 16L19.8 19.8L16 30L12.2 19.8L2 16L12.2 12.2L16 2Z"
            fill={accent}
          />
          <circle cx="16" cy="16" r="3.5" fill={fg} />
        </svg>
      )}
      <span>{brand.name}</span>
    </span>
  );
}

