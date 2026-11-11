"use client";

import type { ReactNode } from "react";
import SmartLink from "./SmartLink";

interface Props {
  to: string;
  className?: string;
  icon?: string;
  /** replaces the arrow icon with text (e.g. "View <br/> More") */
  label?: ReactNode;
  labelClass?: string;
}

/** Round arrow button used by service / blog / team cards */
export default function CircleButton({ to, className = "", icon = "icon-right-down", label, labelClass = "" }: Props) {
  return (
    <div className="pikiz-circle-btn__wrapper">
      <SmartLink to={to} className={`pikiz-circle-btn ${className}`.trim()}>
        {label ? <span className={labelClass}>{label}</span> : <span className={icon}></span>}
        <i className="pikiz-circle-btn__dot"></i>
      </SmartLink>
    </div>
  );
}
