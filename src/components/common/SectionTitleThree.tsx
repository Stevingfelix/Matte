"use client";

import PikizButton from "./PikizButton";

interface Props {
  title: string;
  subtitle: string;
  btnLabel: string;
  btnTo: string;
  /** adds the underline (`--border`) */
  border?: boolean;
  /** title reveal class: letters or split */
  titleClass?: string;
  titleDelay?: string;
}

/** `sec-title__three` heading with button + subtitle row (home four) */
export default function SectionTitleThree({
  title,
  subtitle,
  btnLabel,
  btnTo,
  border,
  titleClass = "letters-fade-in",
  titleDelay = "0.12",
}: Props) {
  return (
    <div className={`sec-title__three ${border ? "sec-title__three--border" : ""}`.trim()}>
      <div className="sec-title__three__box">
        <div className="sec-title__three__btn wow bounceInDown" data-wow-duration="1500ms" data-wow-delay="100ms">
          <PikizButton to={btnTo} label={btnLabel} />
        </div>
        <span className="sec-title__three__sub-title bw-split-text">{subtitle}</span>
      </div>
      <h2 className={`sec-title__three__title ${titleClass}`} data-delay={titleDelay}>
        {title}
      </h2>
    </div>
  );
}
