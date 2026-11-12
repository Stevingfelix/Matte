"use client";

import { Container } from "react-bootstrap";
import { ROUTES } from "../../../data/routes";
import { img } from "../../../utils";
import Counter from "../../common/Counter";
import PikizButton from "../../common/PikizButton";
import SmartLink from "../../common/SmartLink";
import { SocialWrap } from "../home1/HeroOne";
import styles from "./HeroThree.module.css";

export default function HeroThree({ id, onePage }: { id?: string; onePage?: boolean }) {
  return (
    <section className="hero-three" id={id}>
      <div className={styles.gradientBackdrop} aria-hidden="true">
        <span className={styles.orbWarm} />
        <span className={styles.orbCool} />
      </div>
      <Container>
        <div className="hero-three__wrap">
          <div className="hero-three__top">
            <div className={`hero-three__top__left ${styles.kineticWrap}`}>
              <SmartLink
                to={onePage ? "#work" : ROUTES.work}
                className={styles.kineticBadge}
                aria-label="Explore Matte featured work"
              >
                <span className={styles.kineticRingWrap} aria-hidden="true">
                  <svg className={styles.kineticTextSvg} viewBox="0 0 120 120">
                    <defs>
                      <path
                        id="matte-hero-orbit"
                        d="M 60, 60 m -44, 0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0"
                      />
                    </defs>
                    <text className={styles.kineticRingText}>
                      <textPath href="#matte-hero-orbit" startOffset="0%" textLength="270" lengthAdjust="spacing">
                        DIGITAL CRAFT • BRAND STRATEGY • MATTE •
                      </textPath>
                    </text>
                  </svg>
                  <span className={styles.kineticOrbitTrack}>
                    <span className={styles.kineticOrbitDot} />
                  </span>
                  <span className={styles.kineticCore}>
                    <svg className={styles.kineticStar} viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 1.5L13.9 9.1L21.5 11L13.9 12.9L12 20.5L10.1 12.9L2.5 11L10.1 9.1L12 1.5Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className={styles.kineticArrow}>↘</span>
                  </span>
                </span>
              </SmartLink>
            </div>
            <div className="hero-three__customer">
              <div className="hero-three__customer__thumb">
                {[1, 2, 3].map((n) => (
                  <img key={n} src={img(`resources/funfact-3-${n}.png`)} alt="image" />
                ))}
              </div>
              <div className="hero-three__customer__funfact">
                <Counter stop={140} suffix="+" className="hero-three__customer__count" />
                <p className="hero-three__customer__text">happy client partners</p>
              </div>
            </div>
          </div>
          <div className="hero-three__content">
            <div className="hero-three__title">
              <span className="hero-three__title__box letters-fade-in" data-delay="0.12">Digital</span>
              <div className="hero-three__title__center">
                <div className="hero-three__slider-text__box">
                  <div className="hero-three__slider-text">
                    {Array.from({ length: 5 }, (_, i) => (
                      <div className="slider-text__item" key={i}> Matte</div>
                    ))}
                  </div>
                </div>
                <span className="hero-three__title__box letters-fade-in" data-delay="0.12"> Strategy </span>
              </div>
              <span className="hero-three__title__box letters-fade-in" data-delay="0.12">Agency</span>
            </div>
            <p className="hero-three__text  bw-spilt-title-one" data-delay="0.01">
              Our services are designed to craft impactful digital solutions while solving real business challenges through strategy, innovation, and sharp design.
            </p>
          </div>
          <div className="hero-three__btn-wrap wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="300ms">
            <PikizButton to={onePage ? "#contact" : ROUTES.contact} label="Get Started" />
            <div className="hero-three__btn__shape">
              <img src={img("shapes/service-shape.png")} alt="image" />
            </div>
          </div>
        </div>
      </Container>
      <SocialWrap />
    </section>
  );
}
