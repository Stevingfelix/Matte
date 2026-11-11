"use client";

import { Col, Container, Row } from "react-bootstrap";
import { ROUTES } from "../../../data/routes";
import { img } from "../../../utils";
import SectionTitle from "../../common/SectionTitle";
import SmartLink from "../../common/SmartLink";

const works = [
  { title: "Branding", tag: "Branding", image: "work-2-1.jpg", delay: "100ms" },
  { title: "Webflow case", tag: "Development", image: "work-2-2.jpg", delay: "300ms" },
  { title: "Digital Consulting", tag: "Digital", image: "work-2-3.jpg", delay: "500ms" },
];

export default function WorkArea() {
  return (
    <section className="work-area">
      <Container>
        <div className="work-area__top">
          <Row className="gutter-y-30">
            <Col lg={6}>
              <SectionTitle
                variant="one"
                subtitle="Featured Works"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis cursus mi quis viverra ornare."
              />
            </Col>
            <Col lg={6}>
              <SectionTitle variant="one" title="Work" titleDelay="0.20" />
            </Col>
          </Row>
        </div>
        <div className="work-area__wrap">
          {works.map((w) => (
            <div className="work-area__item bw-animated-top wow fadeInUp" data-wow-duration="1500ms" data-wow-delay={w.delay} key={w.title}>
              <div className="work-area__item__thumb">
                <SmartLink to={ROUTES.workDetails}>
                  <img src={img(`resources/${w.image}`)} alt="work image" />
                </SmartLink>
              </div>
              <div className="work-area__item__content">
                <h3 className="work-area__item__title">
                  <SmartLink to={ROUTES.workDetails}>{w.title}</SmartLink>
                </h3>
                <p className="work-area__item__text">
                  2025 <span>. {w.tag}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
