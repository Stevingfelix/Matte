"use client";

import { Col, Container, Row } from "react-bootstrap";
import { usePathname } from "next/navigation";
import CtaArea from "../../components/common/CtaArea";
import PageHeader from "../../components/common/PageHeader";
import PikizButton from "../../components/common/PikizButton";
import SectionTitle from "../../components/common/SectionTitle";
import SmartLink from "../../components/common/SmartLink";
import Layout from "../../components/layout/Layout";
import FaqFour from "../../components/sections/FaqFour";
import { ROUTES } from "../../data/routes";
import { img } from "../../utils";

const sidebar = [
  { label: "Brand Identity", to: ROUTES.serviceBrand },
  { label: "Communication", to: ROUTES.serviceCommunication },
  { label: "Research", to: ROUTES.serviceResearch },
  { label: "Consultation", to: ROUTES.serviceConsultation },
];

const steps = ["Discovery ", "Visual identity design ", "Brand guidelines ", "Design Validation "];
const STEP_TEXT =
  "Our mission is to empower the brands we believe in with tailor-made approaches that ignite creativity and growth without limits.";

/** Service detail page (brand identity, communication, research, consultation share one layout) */
export default function ServiceDetails() {
  const pathname = usePathname();
  return (
    <Layout header={{ variant: "one" }} footer="two">
      <PageHeader className="page-header--brand-guideline" title="Brand Guideline" text={null} />

      <section className="service-details">
        <Container>
          <div className="service-details__top">
            <Row className="gutter-y-30 align-items-center">
              <Col xl={8}>
                <SectionTitle subtitle="BRANDING" title="Where Design Meets Strategy To Create Unforgettable Brands." titleDelay="1" />
              </Col>
              <Col xl={4}>
                <div className="sec-title-two">
                  <p className="sec-title-two__text bw-split-text">
                    Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Ut minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                  </p>
                  <ul className="sec-title-two__list service-sidebar__nav list-unstyled wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="300ms">
                    {sidebar.map((s) => (
                      <li key={s.to} className={pathname === s.to ? "current" : undefined}>
                        <SmartLink to={s.to}>{s.label}</SmartLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
          <div className="service-details__thumb bwfade-anim">
            <div className="service-details__thumb__box scale">
              <img src={img("service/service-d-1-1.jpg")} alt="image" />
            </div>
          </div>
          <p className="service-details__text wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="300ms">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.{" "}
          </p>
          <div className="service-details__image-small__box bwfade-anim">
            {[1, 2].map((n) => (
              <div className="service-details__image__item scale" key={n}>
                <img src={img(`service/service-s-1-${n}.jpg`)} alt="image" />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="we-work">
        <Container>
          <div className="we-work__top">
            <Row className="gutter-y-30 align-items-center">
              <Col xl={8}>
                <SectionTitle subtitle="How We Work" title="Everything You Need To Grow Online" titleDelay="1" />
              </Col>
              <Col xl={4}>
                <SectionTitle text="Sincerely, it's the final time that they've been given a furnished common. To avoid class, tidy them up. He has a wide-ranging influence." />
              </Col>
            </Row>
          </div>
          <div className="we-work__inner">
            {steps.map((s) => (
              <div className="we-work__item wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="300ms" key={s}>
                <h2 className="we-work__item__title">{s}</h2>
                <p className="we-work__item__text">{STEP_TEXT}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <div className="service-cta">
        <Container>
          <Row className="gutter-y-30">
            <Col lg={4}>
              <div className="service-cta__thumb wow bw-animated-left fadeInLeft" data-wow-duration="1500ms" data-wow-delay="500ms">
                <img src={img("service/service-s-1-3.jpg")} alt="image" />
              </div>
            </Col>
            <Col lg={8}>
              <div className="service-cta__content wow bw-animated-right fadeInRight" data-wow-duration="1500ms" data-wow-delay="500ms">
                <h2 className="service-cta__title">Building Smarter Brands That Shape The Way People Live And Work.</h2>
                <PikizButton to={ROUTES.contact} label="Book a call" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <FaqFour subtitle="FAQS" />
      <CtaArea />
    </Layout>
  );
}
