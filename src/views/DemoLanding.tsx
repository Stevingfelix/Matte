"use client";

import { Col, Container, Row } from "react-bootstrap";
import PikizButton from "../components/common/PikizButton";
import SmartLink from "../components/common/SmartLink";
import { demos } from "../data/navigation";
import { ROUTES } from "../data/routes";
import useWow from "../hooks/useWow";
import { img } from "../utils";

const topFeatures = [
  { image: "feature-2-1.png", w: 50, h: 50, alt: "5000+ Clients Trust Us", title: ["20 000+", "Clients Trust Us"] },
  { image: "feature-2-2.png", w: 64, h: 50, alt: "Exentsive Documentation Clean Code", title: ["1 Click Demo", "Content Import"] },
  { image: "feature-2-3.png", w: 50, h: 50, alt: "Free Lifetime Updates", title: ["Free Lifetime", "Updates"] },
  { image: "feature-2-4.png", w: 50, h: 57, alt: "Get Professional Support", title: ["Get Professional", "Support"] },
];

const features: { n: number; title: string[]; hidden?: boolean }[] = [
  { n: 1, title: ["Customizer", "Kirki Framework"], hidden: true },
  { n: 2, title: ["Elementor", "Page Builder"], hidden: true },
  { n: 3, title: ["Shop", "Support"], hidden: true },
  { n: 4, title: ["RTL + LTR", "Support"] },
  { n: 5, title: ["One Click", "Demo Import"], hidden: true },
  { n: 6, title: ["CSS3", "Animation"] },
  { n: 7, title: ["Bootstrap", "5"] },
  { n: 8, title: ["Mailchimp"] },
  { n: 9, title: ["Color", "Schemes"] },
  { n: 10, title: ["Google", "Fonts"] },
  { n: 11, title: ["Parallax", "Backgrounds"] },
  { n: 12, title: ["Fully", "Responsive"] },
  { n: 13, title: ["W3C", "Validation"] },
  { n: 14, title: ["Cross", "Browser"] },
  { n: 15, title: ["Speed", "Optimized"] },
  { n: 16, title: ["Exentsive", "Documentation"] },
];

const withBreaks = (lines: string[]) =>
  lines.map((l, i) => (
    <span key={i}>
      {l}
      {i < lines.length - 1 && <br />}
    </span>
  ));

/** Template showcase / demo chooser. Uses its own stylesheet instead of the main template CSS. */
export default function DemoLanding() {
  useWow();

  return (
    <div className="page-wrapper">
      <header className="main-header">
        <Container>
          <SmartLink to={ROUTES.home} className="main-header__logo">
            <img src={img("pikiz-landing/logo-light.png")} width={185} alt="pikiz" />
          </SmartLink>
        </Container>
      </header>

      <section className="hero-section">
        <div className="hero-section__bg-shape" style={{ backgroundImage: `url(${img("pikiz-landing/demo-hero-bg-shape.png")})` }}></div>
        <Container>
          <div className="hero-section__content">
            <h1 className="hero-section__title">
              Creative. Powerful. <br /> Customizable.
            </h1>
            <p className="hero-section__text">
              Building a website with the Pikiz ReactJS <br /> Template is super fast and easy.
            </p>
            <PikizButton to="#" label="Purchase Template" />
          </div>
        </Container>
        <div className="hero-section__arrow"></div>
        <div className="hero-section__badge"></div>
        <div className="hero-section__images">
          <img src={img("pikiz-landing/hero-img-1-1.png")} alt="home one" className="wow fadeInRight" data-wow-delay="1500ms" />
          <img src={img("pikiz-landing/hero-img-1-3.png")} alt="home three" className="wow fadeInRight" data-wow-delay="1000ms" />
          <img src={img("pikiz-landing/hero-img-1-2.png")} alt="home two" className="wow fadeInRight" data-wow-delay="500ms" />
          <img src={img("pikiz-landing/hero-img-1-4.png")} alt="home Four" className="wow fadeInRight" data-wow-delay="0ms" />
        </div>
      </section>

      <section className="features-two">
        <Container>
          <Row>
            {topFeatures.map((f) => (
              <Col md={6} lg={3} key={f.image}>
                <div className="features-two__box">
                  <img src={img(`pikiz-landing/${f.image}`)} width={f.w} height={f.h} alt={f.alt} />
                  <h2 className="features-two__title">{withBreaks(f.title)}</h2>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="demos-one">
        <Container>
          <h3 className="demos-one__title">Creative & Stunning Demo</h3>
          <Row className="gutter-y-30">
            {demos.map((d) => (
              <Col md={6} lg={4} key={d.title}>
                <div className="demos-one__card">
                  <div className="demos-one__image-box">
                    <SmartLink to={d.buttons[0].to} className="demos-one__image">
                      <img src={img(`pikiz-landing/${d.image}`)} alt="pikiz" />
                    </SmartLink>
                    <div className="demos-one__btns-box">
                      {d.buttons.map((b) => (
                        <div className="demos-one__btn" key={b.label}>
                          <PikizButton to={b.to} label={b.label} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="demos-one__content">
                    <h3 className="demos-one__title">
                      <SmartLink to={d.titleTo}>{d.title}</SmartLink>
                    </h3>
                  </div>
                </div>
              </Col>
            ))}
            <Col md={6} lg={4}>
              <div className="demos-one__card">
                <div className="demos-one__image-box">
                  <SmartLink to={ROUTES.home} className="demos-one__image">
                    <img src={img("pikiz-landing/coming-soon.jpg")} alt="pikiz" />
                  </SmartLink>
                </div>
                <div className="demos-one__content">
                  <h3 className="demos-one__title">
                    <SmartLink to={ROUTES.home}>Coming Soon</SmartLink>
                  </h3>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="features-one">
        <Container>
          <h2 className="features-one__title">Amazing Features</h2>
          <div className="features-one__grid">
            {features.map((f) => (
              <div className="features-one__box" hidden={f.hidden} key={f.n}>
                <div className="features-one__box__image">
                  <img src={img(`pikiz-landing/feature-i-1-${f.n}.png`)} alt={f.title.join(" ")} />
                </div>
                <h3 className="features-one__box__title">{withBreaks(f.title)}</h3>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <footer className="main-footer">
        <div className="main-footer__bg" style={{ backgroundImage: `url(${img("pikiz-landing/footer-bg-1-1.jpg")})` }}></div>
        <Container className="text-center">
          <h2 className="main-footer__title">Create Stunning Website Now!</h2>
          <p className="main-footer__text">Purchase Pikiz ReactJS Template</p>
          <div className="main-footer__btn">
            <PikizButton to={ROUTES.home} label="Purchase Template" className="demos-one__btn" />
          </div>
        </Container>
        <Container>
          <div className="main-footer__copyright text-center">
            <p>
              © Copyright <span className="dynamic-year">{new Date().getFullYear()}</span> by Pikiz ReactJS Template
            </p>
          </div>
        </Container>
      </footer>
    </div>
  );
}
