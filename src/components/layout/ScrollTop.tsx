"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "../../animations/gsap";

/** Circular scroll-progress / back-to-top button driven by ScrollTrigger + ScrollToPlugin */
export default function ScrollTop() {
  const root = useRef<HTMLDivElement>(null);
  const label = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = root.current;
    const valueEl = label.current;
    if (!el || !valueEl) return;

    const st = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        const value = Math.round(self.progress * 100);
        el.style.background = `conic-gradient(var(--pikiz-base) ${value}%, var(--pikiz-white) ${value}%)`;
        el.classList.toggle("active", self.scroll() > 100);
        if (value < 96) valueEl.textContent = `${value}%`;
        else valueEl.innerHTML = '<i class="fas fa-arrow-up"></i>';
      },
    });
    return () => st.kill();
  }, []);

  return (
    <div id="scroll-top" className="scroll-top" ref={root} onClick={() => gsap.to(window, { scrollTo: { y: 0 }, duration: 1, ease: "power2.out" })}>
      <span id="scroll-top-value" className="scroll-top-value" ref={label}></span>
    </div>
  );
}
