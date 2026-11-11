"use client";

import type { TeamMember } from "../../data/team";
import { ROUTES } from "../../data/routes";
import { img } from "../../utils";
import SmartLink from "../common/SmartLink";

interface Props extends TeamMember {
  delay?: string;
  /** disable wow reveal (inside carousels) */
  noAnimation?: boolean;
}

/** Team member card with social links */
export default function TeamCard({ name, designation, image, delay = "100ms", noAnimation }: Props) {
  return (
    <div
      className={`team-card ${noAnimation ? "" : "wow fadeInUp"}`.trim()}
      {...(noAnimation ? {} : { "data-wow-duration": "1500ms", "data-wow-delay": delay })}
    >
      <div className="team-card__image">
        <img src={img(`team/${image}`)} alt={name} />
        <SmartLink to={ROUTES.teamDetails} className="team-card__image__link"></SmartLink>
      </div>
      <div className="team-card__content">
        <div className="team-card__content-box">
          <h3 className="team-card__title">
            <SmartLink to={ROUTES.teamDetails}>{name}</SmartLink>
          </h3>
          <p className="team-card__designation">{designation}</p>
        </div>
        <ul className="team-card__social-link list-unstyled">
          <li><a href="https://linkedin.com/">IN</a></li>
          <li><a href="https://www.facebook.com/">FB</a></li>
          <li><a href="http://google.com/">IG</a></li>
        </ul>
      </div>
    </div>
  );
}
