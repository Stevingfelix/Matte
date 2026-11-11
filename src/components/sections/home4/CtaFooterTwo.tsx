"use client";

import { Container } from "react-bootstrap";
import { ROUTES } from "../../../data/routes";
import { img } from "../../../utils";
import PikizButton from "../../common/PikizButton";

interface CtaFooterTwoProps {
  id?: string;
  onePage?: boolean;
  highlight?: string;
  titleRest?: string;
  buttonLabel?: string;
  ctaTo?: string;
  backgroundImage?: string;
}

export default function CtaFooterTwo({
  id,
  onePage,
  highlight = "AI UX",
  titleRest = "Is Our Obsession.",
  buttonLabel = "Let’s Talk",
  ctaTo,
  backgroundImage = "backgrounds/cta-4-1.jpg",
}: CtaFooterTwoProps) {
  return (
    <div className="cta-footer-two" id={id}>
      <div className="cta-footer-two__bg" style={{ backgroundImage: `url(${img(backgroundImage)})` }}></div>
      <Container>
        <div className="cta-footer-two__content">
          <h2 className="cta-footer-two__title">
            <span>{highlight}</span> {titleRest}
          </h2>
          <div className="cta-footer-two__btn">
            <PikizButton to={ctaTo ?? (onePage ? "#contact" : ROUTES.contact)} label={buttonLabel} />
          </div>
        </div>
      </Container>
    </div>
  );
}
