"use client";

import { Container } from "react-bootstrap";
import { ROUTES } from "../../data/routes";
import PikizButton from "./PikizButton";

interface Props {
  className?: string;
}

/** "Smart strategies…" call-to-action strip */
export default function CtaArea({ className = "cta-area-two cta-area-two__two" }: Props) {
  return (
    <div className={className}>
      <Container>
        <div className="cta-area-two__inner">
          <div className="cta-area-two__text bw-spilt-title-two" data-delay="0.80">
            Smart strategies, smarter digital solutions. <span>Building digital products</span> with purpose
          </div>
          <PikizButton to={ROUTES.contact} label="Let’s Talk" className="wow bounceInUp" wowDelay="500ms" />
        </div>
      </Container>
    </div>
  );
}
