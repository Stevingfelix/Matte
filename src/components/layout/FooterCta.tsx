"use client";

import { Container } from "react-bootstrap";
import { useLayout } from "./LayoutContext";

/** "Let's Work" call-out banner shown above the classic footer */
export default function FooterCta() {
  const { brand } = useLayout();
  return (
    <section className="footer__cta">
      <div className="footer__cta__inner">
        <div className="footer__cta__bg"></div>
        <Container>
          <div className="footer__cta__content">
            <div className="footer__cta__content__inner">
              <div className="footer__cta__content__wrapper">
                <h2 className="footer__cta__title">Let’s Work</h2>
                <a href={`mailto:${brand.email}`} className="footer__cta__link">
                  <i className="icon-right-arrow-1-4"></i>{brand.email}
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
