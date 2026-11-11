"use client";

import { Container } from "react-bootstrap";
import { heroServiceLinks } from "../../../data/content";
import { ROUTES } from "../../../data/routes";
import { img } from "../../../utils";
import Counter from "../../common/Counter";
import SmartLink from "../../common/SmartLink";
import { SocialWrap } from "../home1/HeroOne";

export default function HeroTwo({ id, dark }: { id?: string; dark?: boolean }) {
  const arrow = dark ? "icon/arrow-up-dark.png" : "icon/arrow-up.png";
  return (
    <section className="hero-two" id={id}>
      <Container>
        <div className="hero-two__wrap">
          <div className="hero-two__top">
            <div className="hero-two__thumb wow bw-animated-right fadeInRight" data-wow-duration="1500ms" data-wow-delay="300ms">
              <img src={img("gif/project-1-1.gif")} alt="image" />
            </div>
            <p className="hero-two__text wow bw-animated-left fadeInLeft" data-wow-duration="1500ms" data-wow-delay="300ms">
              Our services are designed to craft impactful digital solutions while addressing your problems through strategy, innovation, and analysis
            </p>
          </div>
          <div className="hero-two__content">
            <div className="hero-two__title-box">
              <div className="hero-two__title">
                <span className="letters-fade-in" data-delay="0.10">Build A Stronger Brand With Our </span>
                <div className="hero-two__slider-text__box">
                  <div className="hero-two__slider-text">
                    {Array.from({ length: 5 }, (_, i) => (
                      <div className="slider-text__item" key={i}> Pikiz</div>
                    ))}
                  </div>
                </div>
                <span className="letters-fade-in" data-delay="0.10">Agency</span>
              </div>
            </div>
            <div className="hero-two__funfact">
              <span className="hero-two__funfact__shape">
                <img src={img(dark ? "shapes/funfact-dark-1-1.png" : "shapes/funfact-1-1.png")} alt="shape" />
              </span>
              <Counter stop={98} suffix="%" className="hero-two__funfact__count" />
              <p className="hero-two__funfact__text">satisfied customers</p>
            </div>
          </div>
          <div className="hero-two__bottom">
            <div className="hero-two__bottom__link">
              <SmartLink to={ROUTES.contact} className="hero-two__icon">
                <img src={img(arrow)} alt="image" />
                <img src={img(arrow)} alt="image" />
              </SmartLink>
            </div>
            <div className="hero-two__list-wrap">
              <ul className="hero-two__list list-unstyled">
                {heroServiceLinks.map((l) => (
                  <li key={l.label}>
                    <i className="fas fa-circle"></i> <SmartLink to={l.to}>{l.label}</SmartLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
      <SocialWrap />
      <div className="hero-one__shape">
        <img src={img(dark ? "shapes/page-header-dark-1-1.png" : "shapes/page-header-1-1.png")} alt="image" />
      </div>
    </section>
  );
}
