"use client";

import { Container } from "react-bootstrap";
import { grumpyHeroLinks } from "../../../data/grumpy";
import { img } from "../../../utils";
import SmartLink from "../../common/SmartLink";

export default function HeroFour({ id, onePage }: { id?: string; onePage?: boolean }) {
  return (
    <section className="hero-four" id={id}>
      <Container>
        <div className="hero-four__wrap">
          <div className="hero-four__top">
            <h2 className="hero-four__title text-anim-header">
              <span className="hero-four__title-box"><strong>Pro</strong>duct.</span>
              <span className="hero-four__title-box">AI UX.</span>
              <span className="hero-four__title-box">Systems...</span>
            </h2>
          </div>
          <div className="hero-four__bottom">
            <div className="hero-four__thumb">
              <img src={img("resources/hero-4-1.jpg")} alt="Grumpy AI & SaaS design studio" />
            </div>
            <div className="hero-four__bottom__inner">
              <p className="hero-four__text">
                Grumpy designs AI-native interfaces, B2B SaaS workflows, and scalable design systems that turn complex models into effortless products.
              </p>
              <div className="hero-four__list-wrap">
                <ul className="hero-four__list list-unstyled">
                  {grumpyHeroLinks.map((l) => (
                    <li key={l.label}>
                      <i className="fas fa-circle"></i> <SmartLink to={onePage ? "#services" : l.to}>{l.label}</SmartLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="hero-four__banner">
        <div className="hero-four__banner__move">
          <div className="hero-four__banner__box">
            <img src={img("backgrounds/hero-banner-4-1.jpg")} alt="image" />
          </div>
        </div>
      </div>
    </section>
  );
}
