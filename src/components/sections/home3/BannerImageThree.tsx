"use client";

import { img } from "../../../utils";
import Counter from "../../common/Counter";

export default function BannerImageThree() {
  return (
    <div className="banner-image__three">
      <div className="banner-image__box">
        <div className="banner-image__thumb">
          <img src={img("backgrounds/hero-3-1.jpg")} alt="image" />
          <div className="banner-image__three__wrap">
            {Array.from({ length: 10 }, (_, i) => (
              <span className="banner-image__three__wrap__shape" key={i}></span>
            ))}
          </div>
        </div>
        <div className="banner-image__funfact-box wow bounceInDown" data-wow-duration="1500ms" data-wow-delay="500ms">
          <p className="banner-image__funfact__text">
            Years of <br /> Experience
          </p>
          <Counter stop={12} suffix="+" className="banner-image__funfact__count" />
        </div>
      </div>
    </div>
  );
}
