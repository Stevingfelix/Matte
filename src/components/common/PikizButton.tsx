"use client";

import SmartLink from "./SmartLink";

interface Props {
  to?: string;
  label: string;
  className?: string;
  /** `two` renders the flat `pikiz-btn-two` style */
  variant?: "one" | "two";
  type?: "link" | "submit" | "button";
  wowDelay?: string;
}

export default function PikizButton({ to = "#", label, className = "", variant = "one", type = "link", wowDelay }: Props) {
  const cls = `${variant === "two" ? "pikiz-btn-two" : "pikiz-btn"} ${className}`.trim();
  const inner =
    variant === "two" ? (
      <span>{label}</span>
    ) : (
      <>
        <i>{label}</i>
        <span>{label}</span>
      </>
    );
  if (type !== "link") {
    return (
      <button type={type} className={cls}>
        {inner}
      </button>
    );
  }
  return (
    <SmartLink to={to} className={cls} {...(wowDelay ? { "data-wow-delay": wowDelay } : {})}>
      {inner}
    </SmartLink>
  );
}
