"use client";

import { ROUTES } from "../../data/routes";
import { img } from "../../utils";
import SmartLink from "../common/SmartLink";

interface Props {
  title: string;
  year: string;
  tag: string;
  image: string;
  to?: string;
}

/** Project card with hover cursor label (home one + work page) */
export default function WorkBox({ title, year, tag, image, to = ROUTES.workDetails }: Props) {
  return (
    <div className="work-box">
      <div className="thumb">
        <div className="image scale cursor-text" data-cursor-text="View Project">
          <SmartLink to={to}>
            <img src={img(`project/${image}`)} alt="image" />
          </SmartLink>
        </div>
      </div>
      <div className="content">
        <h3 className="title">
          <SmartLink to={to}>{title}</SmartLink>
        </h3>
        <div className="meta">
          <span className="date">{year}</span>
          <span className="tag">{tag}</span>
        </div>
      </div>
    </div>
  );
}
