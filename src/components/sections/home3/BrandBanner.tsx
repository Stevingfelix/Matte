"use client";

import { Container } from "react-bootstrap";
import { img } from "../../../utils";

const ticker = ["Brand Strategy", "Digital Design", "Growth Marketing", "Web Craft"];

/** "Brand Boosters" parallax banner with second marquee */
export default function BrandBanner() {
  const items = [...ticker, ...ticker, ...ticker];
  return (
    <section className="brand-banner">
      <div className="brand-banner__item">
        <div
          className="brand-banner__item__bg"
          style={{
            backgroundImage: `url(${img("backgrounds/v-banner-1-1.jpg")})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <span className="brand-banner__item__shape"></span>
        <Container className="position-relative">
          <div className="brand-banner__item__text-box">
            <span className="brand-banner__item__text">Brand</span>
            <span className="brand-banner__item__text">Boosters</span>
          </div>
        </Container>
      </div>
      <div className="slider-text-two">
        <div className="slider-text-two__inner">
          {items.map((t, i) => (
            <div className="slider-text-two__item" key={i}>
              <span></span> {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
