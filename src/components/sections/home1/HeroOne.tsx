"use client";

import { Container } from "react-bootstrap";
import { heroServiceLinks, socialLinks } from "../../../data/content";
import { ROUTES } from "../../../data/routes";
import { img } from "../../../utils";
import Counter from "../../common/Counter";
import SmartLink from "../../common/SmartLink";

export default function HeroOne({ id }: { id?: string }) {
  return (
    <section className="hero-one" id={id}>
      <div className="hero-one__bg" style={{ backgroundImage: `url(${img("resources/hero-bg-1-1.png")})` }}></div>
      <Container>
        <div className="hero-one__inner">
          <div className="hero-one__top">
            <div className="hero-one__customer">
              <div className="hero-one__customer__thumb">
                {[1, 2, 3].map((n) => (
                  <img key={n} src={img(`resources/funfact-1-${n}.png`)} alt="image" />
                ))}
              </div>
              <div className="hero-one__customer__funfact">
                <Counter stop={15000} suffix="+" className="hero-one__customer__count" />
                <p className="hero-one__customer__text">satisfied customers</p>
              </div>
            </div>
            <div className="hero-one__quick-wrap">
              <SmartLink to={ROUTES.contact} className="hero-one__quick__icon">
                <img src={img("icon/arrow-up.png")} alt="icon" />
                <img src={img("icon/arrow-up.png")} alt="icon" />
              </SmartLink>
              <div className="hero-one__quick__content">
                <p className="hero-one__quick__title">Quick Discuss</p>
                <p className="hero-one__quick__text">
                  Our services are designed to craft impactful digital solutions while addressing your problems through strategy, innovation, and analysis
                </p>
              </div>
            </div>
          </div>
          <div className="hero-one__bottom">
            <div className="hero-one__title-wrap">
              <h2 className="hero-one__title title-anim">Digital Thrive</h2>
            </div>
            <div className="hero-one__list-wrap">
              <ul className="hero-one__list list-unstyled">
                {heroServiceLinks.map((l) => (
                  <li key={l.label}>
                    <SmartLink to={l.to}>{l.label}</SmartLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
      <SocialWrap />
      <div className="hero-one__shape">
        <img src={img("shapes/page-header-1-1.png")} alt="image" />
      </div>
    </section>
  );
}

/** Vertical social list pinned to the hero's side */
export function SocialWrap() {
  return (
    <div className="social-wrap">
      <ul className="social-wrap__list list-unstyled">
        {socialLinks.map((s) => (
          <li key={s.label}>
            <a href={s.href} target="_blank" rel="noreferrer">
              <i className={s.icon}></i>
              <span>{s.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
