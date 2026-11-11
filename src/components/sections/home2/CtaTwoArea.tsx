"use client";

import { Container } from "react-bootstrap";

/** Full-bleed "Let's create together" mail banner */
export default function CtaTwoArea({ withIcon = true }: { withIcon?: boolean }) {
  return (
    <section className="cta-two-area">
      <div className="cta-two-area__inner">
        <Container>
          <div className="cta-two-area__bg"></div>
          <div className="cta-two-area__content cta-two-area-scale">
            <h2 className="section-title bw_line">Let’s create together</h2>
            <a href="mailto:pikizhelp@gmail.com" className="cta-two-area__link bw_line">
              <span>Pikizhelp@Gmail.com</span> {withIcon && <i className="icon-right-down"></i>}
            </a>
          </div>
        </Container>
      </div>
    </section>
  );
}
