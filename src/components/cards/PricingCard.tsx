"use client";

import type { PricingPlan } from "../../data/pricing";
import { ROUTES } from "../../data/routes";
import PikizButton from "../common/PikizButton";

interface Props extends Pick<PricingPlan, "price" | "features"> {
  active?: boolean;
  ctaTo?: string;
}

export default function PricingCard({ price, features, active, ctaTo = ROUTES.contact }: Props) {
  return (
    <div className={`pricing-card ${active ? "active" : ""}`.trim()}>
      <div className="pricing-card__content">
        <h2 className="pricing-card__title">{price}</h2>
        <ul className="pricing-card__list">
          {features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
        <div className="pricing-card__btn">
          <PikizButton to={ctaTo} label="Get Started" />
        </div>
      </div>
    </div>
  );
}
