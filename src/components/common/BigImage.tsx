"use client";

import { img } from "../../utils";

/** Full-width image band under pricing / faq pages */
export default function BigImage({ src = "backgrounds/package-big-image.jpg" }: { src?: string }) {
  return (
    <div className="pricing-big-image">
      <div className="pricing-big-image__box img-container">
        <img src={img(src)} alt="image" />
      </div>
    </div>
  );
}
