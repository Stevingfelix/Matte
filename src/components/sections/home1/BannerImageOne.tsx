"use client";

import { img } from "../../../utils";

export default function BannerImageOne() {
  return (
    <div className="banner-image banner-image__one">
      <div className="banner-image__box img-container">
        <img src={img("backgrounds/hero-1-1.jpg")} alt="banner image" />
        <div className="banner-image__wrap">
          {Array.from({ length: 10 }, (_, i) => (
            <span className="banner-image__wrap__shape" key={i}></span>
          ))}
        </div>
      </div>
    </div>
  );
}
