"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Floating label that eases after the mouse over any `.cursor-text` element
 * (text comes from its `data-cursor-text`).
 */
export default function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const x = gsap.quickTo(el, "x", { duration: 0.25, ease: "power3.out" });
    const y = gsap.quickTo(el, "y", { duration: 0.25, ease: "power3.out" });
    let shown = false;

    const move = (e: MouseEvent) => {
      x(e.clientX);
      y(e.clientY);
      const target = (e.target as HTMLElement | null)?.closest<HTMLElement>(".cursor-text");
      if (target && !shown) {
        shown = true;
        el.textContent = target.dataset.cursorText || "VIEW";
        gsap.to(el, { opacity: 1, scale: 1, duration: 0.25 });
      } else if (!target && shown) {
        shown = false;
        gsap.to(el, { opacity: 0, scale: 0.8, duration: 0.25 });
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return <div className="custom-cursor-text" ref={ref}></div>;
}
