"use client";

import { useState } from "react";
import { Container } from "react-bootstrap";
import type { CustomArrowProps } from "react-slick";
import PikizSlider from "../components/common/PikizSlider";
import SmartLink from "../components/common/SmartLink";
import Layout from "../components/layout/Layout";
import { SocialWrap } from "../components/sections/home1/HeroOne";
import { ROUTES } from "../data/routes";
import { img } from "../utils";

const slides = ["hero-1-2.jpg", "hero-1-1.jpg", "hero-1-3.jpg", "hero-1-4.jpg"];

function Arrow({ dir, onClick }: CustomArrowProps & { dir: "prev" | "next" }) {
  return (
    <button className={`slider-one__slick-button slider-one__slick-button--${dir}`} onClick={onClick}>
      {dir === "prev" ? (
        <>
          <i className="icon-long-icon-left"></i>
          <span>Prev</span>
        </>
      ) : (
        <>
          <span>Next</span>
          <i className="icon-long-icon-right"></i>
        </>
      )}
    </button>
  );
}

/** 24 shuffled blocks with random transition delays that create the "box" reveal */
function GridMask() {
  const [delays] = useState(() =>
    Array.from({ length: 24 }, () => `${Math.random() * 1.2}s`).sort(() => Math.random() - 0.5)
  );
  return (
    <div className="grid-mask">
      {delays.map((d, i) => (
        <div key={i} style={{ transitionDelay: d }}></div>
      ))}
    </div>
  );
}

/** Full-screen portfolio slider with box transition (react-slick, fade) */
export default function PortfolioBoxEffect() {
  return (
    <Layout header={{ variant: "three", logo: "light", blur: true }} footer={false}>
      <section className="slider-one">
        <PikizSlider
          className="slider-one__carousel"
          infinite
          slidesToShow={1}
          slidesToScroll={1}
          autoplay
          autoplaySpeed={3000}
          fade
          speed={2000}
          arrows
          dots
          prevArrow={<Arrow dir="prev" />}
          nextArrow={<Arrow dir="next" />}
        >
          {slides.map((bg) => (
            <div className="slider-one__item" key={bg}>
              <div className="slider-one__bg" style={{ backgroundImage: `url(${img(`hero/${bg}`)})` }}></div>
              <GridMask />
              <Container>
                <div className="slider-one__content">
                  <ul className="slider-one__protfolio-list list-unstyled">
                    <li><SmartLink to={ROUTES.work}>Design</SmartLink></li>
                    <li><SmartLink to={ROUTES.work}>Branding</SmartLink></li>
                    <li><SmartLink to={ROUTES.work}>2014</SmartLink></li>
                  </ul>
                  <h2 className="slider-one__title">
                    <SmartLink to={ROUTES.workDetails}>
                      Business <br />
                      Brand Identity
                    </SmartLink>
                  </h2>
                </div>
              </Container>
            </div>
          ))}
        </PikizSlider>
        <SocialWrap />
      </section>
    </Layout>
  );
}
