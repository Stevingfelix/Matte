"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export interface AccordionItem {
  title: string;
  content: string;
}

interface Props {
  items: AccordionItem[];
  /** index opened by default (-1 for none) */
  defaultOpen?: number;
  className?: string;
  /** reveal each item on scroll (default) */
  itemAnimation?: boolean;
  /** reveal the whole accordion instead, sliding from the right (faq page) */
  wrapperAnimation?: boolean;
}

/** Single-open accordion (`pikiz-accrodion`) with GSAP slide up / down */
export default function Accordion({
  items,
  defaultOpen = 2,
  className = "faq-one__accordion",
  itemAnimation = true,
  wrapperAnimation = false,
}: Props) {
  const [open, setOpen] = useState(defaultOpen);
  const panels = useRef<(HTMLDivElement | null)[]>([]);
  const previous = useRef(defaultOpen);
  const first = useRef(true);

  useEffect(() => {
    // the initial state is rendered by React; only animate real changes
    if (first.current) {
      first.current = false;
      return;
    }
    const closing = panels.current[previous.current];
    const opening = panels.current[open];
    if (closing && previous.current !== open) {
      gsap.to(closing, { height: 0, duration: 0.35, ease: "power2.inOut", onComplete: () => void (closing.style.display = "none") });
    }
    if (opening) {
      gsap.set(opening, { display: "block", overflow: "hidden" });
      gsap.fromTo(opening, { height: 0 }, { height: "auto", duration: 0.35, ease: "power2.inOut", clearProps: "height,overflow" });
    }
    previous.current = open;
  }, [open]);

  return (
    <div
      className={`${className} pikiz-accrodion ${wrapperAnimation ? "wow bw-animated-right fadeInRight" : ""}`.trim()}
      {...(wrapperAnimation ? { "data-wow-duration": "1500ms", "data-wow-delay": "500ms" } : {})}
    >
      {items.map((item, i) => (
        <div
          key={item.title}
          className={`accrodion ${open === i ? "active" : ""} ${itemAnimation ? "wow fadeInUp" : ""}`.trim()}
          {...(itemAnimation ? { "data-wow-duration": "1500ms", "data-wow-delay": "300ms" } : {})}
        >
          <div className="accrodion-title" onClick={() => setOpen(open === i ? -1 : i)}>
            <h3>
              {item.title}
              <i className="accrodion-title__icon"></i>
            </h3>
          </div>
          <div className="accrodion-content" ref={(el) => void (panels.current[i] = el)} style={{ display: defaultOpen === i ? "block" : "none" }}>
            <div className="inner">
              <p>{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
