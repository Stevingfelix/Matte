"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  stop: number;
  speed?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  as?: "h2" | "h3" | "div" | "span";
}

/** Count-up number: a GSAP tween that starts when the element scrolls into view. */
export default function Counter({ stop, speed = 1500, prefix, suffix, className = "", as: Tag = "h2" }: Props) {
  const ref = useRef<HTMLElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const counter = { n: 0 };
    const tween = gsap.to(counter, {
      n: stop,
      duration: speed / 1000,
      ease: "none",
      paused: true,
      onUpdate: () => setValue(Number.isInteger(stop) ? Math.floor(counter.n) : Math.floor(counter.n * 10) / 10),
      onComplete: () => setValue(stop),
    });
    const trigger = ScrollTrigger.create({ trigger: el, start: "top 95%", once: true, onEnter: () => tween.play() });
    return () => {
      trigger.kill();
      tween.kill();
    };
  }, [stop, speed]);

  const shown = Number.isInteger(stop) ? value : value.toFixed(1);
  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag ref={ref as any} className={`${className} count-box`.trim()}>
      {prefix && <span>{prefix}</span>}
      <span className="count-text">{shown}</span>
      {suffix && <span>{suffix}</span>}
    </Tag>
  );
}
