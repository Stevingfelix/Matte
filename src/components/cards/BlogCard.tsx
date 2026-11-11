"use client";

import type { BlogPost } from "../../data/content";
import { img } from "../../utils";
import CircleButton from "../common/CircleButton";
import Lines from "../common/Lines";
import SmartLink from "../common/SmartLink";

interface Props extends BlogPost {
  /** scroll-reveal style: home uses fadeInRight, the blog grid uses fadeInUp */
  animation?: "fadeInRight" | "fadeInUp";
}

/** Wide numbered blog row (home one, blog grid) */
export default function BlogCard({ title, image, tags, text, to, animation = "fadeInRight" }: Props) {
  return (
    <div
      className={`blog-card wow ${animation}`}
      data-wow-duration="1500ms"
      data-wow-delay={animation === "fadeInUp" ? "00ms" : "500ms"}
    >
      <div className="blog-card__content">
        <span className="blog-card__number"></span>
        <h3 className="blog-card__title">
          <SmartLink to={to}>
            <Lines text={title} />
          </SmartLink>
        </h3>
        <div className="blog-card__tag">
          {tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
      <div className="blog-card__thumb-box">
        <div className="blog-card__thumb">
          <img src={img(`blog/${image}`)} alt={title.replace("\n", " ")} />
          <SmartLink to={to} className="blog-card__thumb__link image-hover"></SmartLink>
        </div>
        <div className="blog-card__link-box">
          <CircleButton to={to} className="blog-card__btn" />
          <p className="blog-card__text">{text}</p>
        </div>
      </div>
    </div>
  );
}
