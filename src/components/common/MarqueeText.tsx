"use client";

import { marqueeItems } from "../../data/content";

/** Scrolling keyword strip (`slider-text`) */
export default function MarqueeText({ items = marqueeItems, repeat = 3 }: { items?: string[]; repeat?: number }) {
  const all = Array.from({ length: repeat }, () => items).flat();
  return (
    <div className="slider-text wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="300ms">
      <div className="slider-text__inner">
        {all.map((t, i) => (
          <div className="slider-text__item" key={i}>
            <span></span> {t}
          </div>
        ))}
      </div>
    </div>
  );
}
