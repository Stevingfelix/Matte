"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ROUTES } from "../../../data/routes";
import { img } from "../../../utils";
import Counter from "../../common/Counter";
import SmartLink from "../../common/SmartLink";
import styles from "./BannerImageThree.module.css";

const STUDIO_PROOFS = [
  { value: "Senior-Only", label: "Direct Partner Pods" },
  { value: "4 Weeks", label: "First Sprint Launch" },
  { value: "End-to-End", label: "Strategy to Production" },
];

const CAPABILITY_TICKER = [
  "Brand Architecture",
  "Design Systems",
  "Conversion Web",
  "Next.js Engineering",
  "Product Strategy",
  "Growth Loops",
];

export default function BannerImageThree({ onePage }: { onePage?: boolean }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !photoRef.current) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        photoRef.current,
        { scale: 1.08, yPercent: -2 },
        {
          scale: 1,
          yPercent: 2,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="banner-image__three" ref={sectionRef}>
      <div className="banner-image__box">
        <div className={`banner-image__thumb ${styles.thumbInteractive}`}>
          <img
            ref={photoRef}
            className={styles.bannerPhoto}
            src={img("backgrounds/hero-3-1.jpg")}
            alt="Matte product and engineering team collaborating"
          />
          <div className={styles.scrim} aria-hidden="true" />

          <div className={styles.topPill}>
            <span className={styles.topPillDot} aria-hidden="true" />
            <span>Matte Lab · Brand &amp; Product Systems</span>
          </div>

          <div className={styles.proofCard}>
            <div className={styles.proofGrid}>
              {STUDIO_PROOFS.map((item) => (
                <div className={styles.proofItem} key={item.value}>
                  <span className={styles.proofValue}>{item.value}</span>
                  <span className={styles.proofLabel}>{item.label}</span>
                </div>
              ))}
            </div>
            <SmartLink to={onePage ? "#work" : ROUTES.work} className={styles.proofCta}>
              <span>Selected Work</span>
              <span aria-hidden="true">↘</span>
            </SmartLink>
          </div>

          <div className="banner-image__three__wrap">
            {Array.from({ length: 10 }, (_, i) => (
              <span className="banner-image__three__wrap__shape" key={i}></span>
            ))}
          </div>
        </div>

        <div
          className={`banner-image__funfact-box ${styles.studioSeal} wow bounceInDown`}
          data-wow-duration="1500ms"
          data-wow-delay="500ms"
        >
          <svg className={styles.sealOrbitSvg} viewBox="0 0 200 200" aria-hidden="true">
            <defs>
              <path
                id="matte-banner-seal-orbit"
                d="M 100, 100 m -84, 0 a 84,84 0 1,1 168,0 a 84,84 0 1,1 -168,0"
              />
            </defs>
            <text className={styles.sealOrbitText}>
              <textPath
                href="#matte-banner-seal-orbit"
                startOffset="0%"
                textLength="515"
                lengthAdjust="spacing"
              >
                MATTE STUDIO • EST. 2014 • SENIOR-LED CRAFT •
              </textPath>
            </text>
          </svg>
          <span className={styles.sealInnerRing} aria-hidden="true" />

          <div className={styles.sealContent}>
            <span className={styles.sealEyebrow}>Est. 2014</span>
            <Counter stop={12} suffix="+" className={`banner-image__funfact__count ${styles.sealCount}`} />
            <p className={`banner-image__funfact__text ${styles.sealLabel}`}>
              Years of <br /> Experience
            </p>
          </div>
        </div>
      </div>

      <div className={styles.tickerBar} aria-hidden="true">
        <div className={styles.tickerTrack}>
          {[0, 1].map((dup) => (
            <div className={styles.tickerGroup} key={dup}>
              {CAPABILITY_TICKER.map((item) => (
                <span className={styles.tickerItem} key={`${dup}-${item}`}>
                  <span>{item}</span>
                  <span className={styles.tickerDot} />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
