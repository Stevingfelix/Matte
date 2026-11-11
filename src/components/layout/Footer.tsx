"use client";

import { useState, type FormEvent } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { footerBottomLinks, footerLinks } from "../../data/navigation";
import { img } from "../../utils";
import SmartLink from "../common/SmartLink";
import { useLayout } from "./LayoutContext";

export interface FooterProps {
  /** "one" = classic, "two" = big wordmark text, "three" = logo shapes */
  variant?: "one" | "two" | "three";
}

const year = new Date().getFullYear();

const matteFooterLinks = [
  { label: "Home", to: "#home" },
  { label: "Work", to: "#work" },
  { label: "Services", to: "#services" },
  { label: "Pricing", to: "#pricing" },
  { label: "FAQs", to: "#faq" },
  { label: "Contact Us", to: "#contact" },
];

const matteBottomLinks = [
  { label: "FAQs", to: "#faq" },
  { label: "Services", to: "#services" },
  { label: "Contact", to: "#contact" },
];

function FooterAbout() {
  const { brand } = useLayout();
  return (
    <div className="footer-widget footer-widget--about">
      <h2 className="main-footer__title">Let’s Talk</h2>
      <p className="footer-widget__text">{brand.ctaLine}</p>
      <ul className="footer-widget__info list-unstyled">
        <li><a href={`mailto:${brand.email}`}>{brand.email}</a></li>
        <li><a href={`tel:${brand.phone}`}>{brand.displayPhone}</a></li>
      </ul>
      <ul className="footer-widget__social-link list-unstyled">
        <li><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a></li>
        <li><a href="https://dribbble.com/" target="_blank" rel="noreferrer">Dribbble</a></li>
        <li><a href="https://linkedin.com/" target="_blank" rel="noreferrer">Linkedin</a></li>
      </ul>
    </div>
  );
}

function FooterLinks() {
  const { brand } = useLayout();
  const links = brand.id === "matte" ? matteFooterLinks : footerLinks;
  return (
    <div className="footer-widget footer-widget--links">
      <ul className="list-unstyled footer-widget__links">
        {links.map((l) => (
          <li key={l.label}>
            <SmartLink to={l.label === "Home" && brand.id !== "matte" ? brand.homePath : l.to}>{l.label}</SmartLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterNewsletter({ children }: { children?: React.ReactNode }) {
  const { brand } = useLayout();
  const [subscribed, setSubscribed] = useState(false);
  const onSubscribe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.reset();
    setSubscribed(true);
  };
  return (
    <div className="footer-widget footer-widget--newsletter">
      <p className="footer-widget__text-two">
        By subscribing you agree with our <br /> Privacy Policy
      </p>
      <form action="#" className="footer-widget__newsletter mc-form" onSubmit={onSubscribe}>
        <input type="email" name="EMAIL" placeholder="Enter Your Email" required />
        <button type="submit" aria-label="Subscribe">
          <i className="fas fa-paper-plane"></i>
        </button>
      </form>
      {subscribed && (
        <p className="mt-2 mb-0 small fw-medium text-success">
          Subscribed to {brand.name} updates.
        </p>
      )}
      {children}
    </div>
  );
}

function BottomLinks({ className }: { className: string }) {
  const { brand } = useLayout();
  const links = brand.id === "matte" ? matteBottomLinks : footerBottomLinks;
  return (
    <ul className={`list-unstyled ${className}`}>
      {links.map((l) => (
        <li key={l.label}>
          <SmartLink to={l.to}>{l.label}</SmartLink>
        </li>
      ))}
    </ul>
  );
}

function FooterTwo() {
  const { brand } = useLayout();
  return (
    <footer className="main-footer main-footer--two">
      <div className="main-footer__big-text">
        {brand.letters.map((c, i) => (
          <span key={i}>{c}</span>
        ))}
      </div>
      <Container>
        <div className="main-footer__inner">
          <div className="main-footer__top">
            <Row className="gutter-y-30">
              <Col md={6} xl={4} className="wow fadeInUp" data-wow-delay="200ms">
                <FooterAbout />
              </Col>
              <Col md={6} xl={3} className="wow fadeInUp" data-wow-delay="400ms">
                <FooterLinks />
              </Col>
              <Col md={12} xl={5} className="wow fadeInUp" data-wow-delay="500ms">
                <FooterNewsletter />
              </Col>
            </Row>
          </div>
          <div className="main-footer__bottom wow fadeInUp" data-wow-delay="00ms">
            <p className="main-footer__copyright"> &copy; <span className="dynamic-year">{year}</span> {brand.name}. All rights reserved</p>
          </div>
        </div>
      </Container>
      <span className="main-footer__shape"></span>
    </footer>
  );
}

function FooterOne() {
  const { brand } = useLayout();
  return (
    <footer className="main-footer">
      <div className="main-footer__top">
        <Container>
          <Row className="gutter-y-30">
            <Col md={6} xl={4} className="wow fadeInUp" data-wow-delay="00ms">
              <FooterAbout />
            </Col>
            <Col md={6} xl={3} className="wow fadeInUp" data-wow-delay="100ms">
              <FooterLinks />
            </Col>
            <Col md={6} xl={5} className="wow fadeInUp" data-wow-delay="200ms">
              <FooterNewsletter />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="main-footer__bottom wow fadeInUp" data-wow-delay="300ms">
        <Container>
          <p className="main-footer__copyright"> &copy; <span className="dynamic-year">{year}</span> {brand.name}. All rights reserved</p>
          <Row className="gutter-y-30">
            <Col xl={5} md={6}>
              <div className="footer-widget footer-widget--links-bottom">
                <ul className="list-unstyled footer-widget__links-two">
                  <li>{brand.hours[0]}</li>
                  <li>{brand.hours[1]}</li>
                </ul>
                <BottomLinks className="footer-widget__links-three" />
              </div>
            </Col>
            <Col xl={7} md={6}>
              <div className="footer-widget__logo">
                <SmartLink to={brand.homePath}>
                  {brand.useImageLogo ? (
                    <img className="wow bounceInUp" data-wow-delay="500ms" src={img("shapes/logo-b-footer.png")} alt={brand.name} />
                  ) : (
                    <span
                      className="wow bounceInUp d-inline-flex align-items-center"
                      data-wow-delay="500ms"
                      style={{
                        fontFamily: 'var(--pikiz-heading-font, "Bricolage Grotesque", sans-serif)',
                        fontWeight: 800,
                        fontSize: "clamp(54px, 11vw, 150px)",
                        lineHeight: 0.9,
                        letterSpacing: "-0.04em",
                        color: "var(--pikiz-black, #0C0610)",
                        textTransform: "uppercase",
                      }}
                    >
                      {brand.name}
                    </span>
                  )}
                </SmartLink>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
}

function FooterThree() {
  const { brand } = useLayout();
  const extraWide = brand.letters.length > 5;
  return (
    <footer className="main-footer main-footer--three">
      <div className="main-footer__top">
        <Container>
          <Row className="gutter-y-30">
            <Col md={6} xl={4} lg={4} className="wow fadeInUp" data-wow-delay="00ms">
              <FooterAbout />
            </Col>
            <Col md={6} xl={3} lg={3} className="wow fadeInUp" data-wow-delay="100ms">
              <FooterLinks />
            </Col>
            <Col md={6} xl={5} lg={5} className="wow fadeInUp" data-wow-delay="200ms">
              <FooterNewsletter>
                <ul className="list-unstyled footer-widget__links-two">
                  <li>{brand.hours[0]} {brand.hours[1]}</li>
                </ul>
              </FooterNewsletter>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="main-footer__bottom">
        <Container>
          <div className="footer-widget__logo">
            <span><img src={img("shapes/footer-logo-shape-1-1.png")} alt="shape" /></span>
            <SmartLink to={brand.homePath}>
              <div className="main-footer__big-text-two">
                {brand.letters.map((c, i) => (
                  <span key={i} style={extraWide ? { fontSize: "clamp(42px, 11vw, 200px)" } : undefined}>{c}</span>
                ))}
              </div>
            </SmartLink>
            <span><img src={img("shapes/footer-logo-shape-1-1.png")} alt="shape" /></span>
          </div>
          <div className="main-footer__bottom__inner wow fadeInUp" data-wow-delay="300ms">
            <p className="main-footer__copyright"> &copy; <span className="dynamic-year">{year}</span> {brand.name}. All rights reserved</p>
            <div className="footer-widget footer-widget--links-bottom">
              <BottomLinks className="footer-widget__links-three" />
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}

export default function Footer({ variant = "one" }: FooterProps) {
  if (variant === "two") return <FooterTwo />;
  if (variant === "three") return <FooterThree />;
  return <FooterOne />;
}
