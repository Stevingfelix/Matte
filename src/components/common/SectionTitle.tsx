"use client";

import type { ReactNode } from "react";

interface Props {
  subtitle?: ReactNode;
  title?: ReactNode;
  text?: ReactNode;
  className?: string;
  /** "one" = `sec-title` (subtitle framed by two dots), "two" = `sec-title-two` */
  variant?: "one" | "two";
  /** class applied to the paragraph (defaults to the split-text style used on most pages) */
  textClass?: string;
  textDelay?: string;
  titleDelay?: string;
}

/** Section heading: orange subtitle + big title + optional paragraph */
export default function SectionTitle({
  subtitle,
  title,
  text,
  className = "",
  variant = "two",
  textClass = "bw-split-text",
  textDelay,
  titleDelay = "0.12",
}: Props) {
  const base = variant === "one" ? "sec-title" : "sec-title-two";
  return (
    <div className={`${base} ${className}`.trim()}>
      {subtitle && (
        <p className={`${base}__subtitle wow fadeInRight`} data-wow-duration="1500ms" data-wow-delay="300ms">
          <span></span>
          {subtitle}
          {variant === "one" && <span></span>}
        </p>
      )}
      {text && variant === "one" && (
        <p className={`${base}__text ${textClass}`} {...(textDelay ? { "data-delay": textDelay } : {})}>
          {text}
        </p>
      )}
      {title && (
        <h2 className={`${base}__title letters-fade-in`} data-delay={titleDelay}>
          {title}
        </h2>
      )}
      {text && variant === "two" && (
        <p className={`${base}__text ${textClass}`} {...(textDelay ? { "data-delay": textDelay } : {})}>
          {text}
        </p>
      )}
    </div>
  );
}
