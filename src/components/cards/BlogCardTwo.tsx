"use client";

import type { BlogPostTwo } from "../../data/blog";
import { img } from "../../utils";
import CircleButton from "../common/CircleButton";
import SmartLink from "../common/SmartLink";

interface Props extends BlogPostTwo {
  /** reveal direction */
  side?: "left" | "right";
  /** "two" puts the image first (home three / four) */
  variant?: "one" | "two";
  /** wrap the arrow in `blog-card-two__btn__icon` (home four) */
  iconWrapped?: boolean;
}

/** Two-column blog card (homes two, three, four) */
export default function BlogCardTwo({ title, image, tags, text, to, side = "left", variant = "one", iconWrapped }: Props) {
  const dir = side === "left" ? "bw-animated-left wow fadeInLeft" : "bw-animated-right wow fadeInRight";
  const thumb = (
    <div className="blog-card-two__thumb">
      <img src={img(`blog/${image}`)} alt="image" />
      <SmartLink to={to} className="blog-card-two__thumb__link"></SmartLink>
    </div>
  );
  return (
    <div className={`blog-card-two ${variant === "two" ? "blog-card-two--two" : ""} ${dir}`} data-wow-duration="1500ms" data-wow-delay="300ms">
      {variant === "two" && thumb}
      <div className="blog-card-two__content">
        <div className="blog-card-two__top">
          <span className="blog-card-two__number"></span>
          <div className="blog-card-two__tag">
            {tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
        <h3 className="blog-card-two__title">
          <SmartLink to={to}>{title}</SmartLink>
        </h3>
        <div className="blog-card-two__link-box">
          <p className="blog-card-two__text">{text}</p>
          {iconWrapped ? (
            <CircleButton to={to} labelClass="blog-card-two__btn__icon" label={<i className="icon-right-down"></i>} />
          ) : (
            <CircleButton to={to} />
          )}
        </div>
      </div>
      {variant === "one" && thumb}
    </div>
  );
}
