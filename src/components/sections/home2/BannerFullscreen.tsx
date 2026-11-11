"use client";

import { img } from "../../../utils";

export default function BannerFullscreen() {
  return (
    <div className="banner-image banner-image__fullscreen">
      <div className="banner-image__box">
        <img src={img("resources/hero-2-1.jpg")} alt="image" />
      </div>
    </div>
  );
}
