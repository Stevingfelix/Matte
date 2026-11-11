"use client";

import { img } from "../../utils";
import CircleButton from "../common/CircleButton";
import SmartLink from "../common/SmartLink";
import type { ServiceItem } from "../../data/content";

/** Image service card with tags and circle arrow */
export default function ServiceCard({ title, text, image, tags, to }: ServiceItem) {
  return (
    <div className="service-card">
      <div className="service-card__thumb">
        <img src={img(`service/${image}`)} alt="image" />
      </div>
      <div className="service-card__content-box">
        <div className="service-card__content">
          <h3 className="title">
            <SmartLink to={to}>{title}</SmartLink>
          </h3>
          <p className="text">{text}</p>
          <div className="tag">
            {tags.map((t) => (
              <SmartLink to={to} className="tag__item" key={t}>
                {t}
              </SmartLink>
            ))}
          </div>
        </div>
        <CircleButton to={to} className="service-card__btn" />
      </div>
    </div>
  );
}
