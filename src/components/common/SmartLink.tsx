"use client";

import type { AnchorHTMLAttributes, MouseEvent } from "react";
import Link from "next/link";

interface SmartLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  to: string;
}

/**
 * Internal paths -> next/link <Link>, "#hash" -> smooth scroll anchor,
 * everything else (http, mailto, tel) -> plain <a>.
 */
export default function SmartLink({ to, children, onClick, ...rest }: SmartLinkProps) {
  if (to.startsWith("#") && to.length > 1) {
    const handle = (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      document.querySelector(to)?.scrollIntoView({ behavior: "smooth" });
      onClick?.(e);
    };
    return (
      <a href={to} onClick={handle} {...rest}>
        {children}
      </a>
    );
  }
  if (to === "#" || /^(https?:|mailto:|tel:)/.test(to)) {
    return (
      <a href={to} onClick={onClick} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={to} onClick={onClick} {...rest}>
      {children}
    </Link>
  );
}
