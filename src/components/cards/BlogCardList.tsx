"use client";

import type { ListPost } from "../../data/blogList";
import { img } from "../../utils";
import SmartLink from "../common/SmartLink";

/** Horizontal blog list card (list pages) */
export default function BlogCardList({ title, image, text, tags, to }: ListPost) {
  return (
    <div className="blog-card-list wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="300ms">
      <div className="blog-card-list__image">
        <img src={img(`blog/${image}`)} alt={title} />
      </div>
      <div className="blog-card-list__content">
        <div className="blog-card-list__tag">
          {tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <h3 className="blog-card-list__title bw-spilt-title-two" data-delay="0.50">
          <SmartLink to={to}>{title}</SmartLink>
        </h3>
        <p className="blog-card-list__text">{text}</p>
      </div>
    </div>
  );
}
