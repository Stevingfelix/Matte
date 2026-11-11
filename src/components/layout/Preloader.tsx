"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { isPreloaderDone, markPreloaderDone } from "./preloaderState";

const CURVE = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
const FLAT = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

/** Intro loader (first visit only): letters lift away, the panel curves and slides up */
export default function Preloader({ letters = ["P", "I", "K", "I", "Z"] }: { letters?: string[] }) {
  const [visible, setVisible] = useState(!isPreloaderDone());
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!visible || !root.current) return;
    const el = root.current;
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          onComplete: () => {
            setVisible(false);
            markPreloaderDone();
          },
        })
        .to(".loader-wrap-heading .load-text", { delay: 1.5, y: -100, opacity: 0 })
        .to("#svg", { duration: 0.5, attr: { d: CURVE }, ease: "power2.in" })
        .to("#svg", { duration: 0.5, attr: { d: FLAT }, ease: "power2.out" })
        .to(el, { y: -1500, duration: 0.8, ease: "power2.inOut" });
    }, el);
    return () => ctx.revert();
  }, [visible]);

  if (!visible) return null;
  return (
    <div className="loader-wrap" ref={root}>
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
      </svg>
      <div className="loader-wrap-heading">
        <div className="load-text">
          {letters.map((c, i) => (
            <span key={i}>{c}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
