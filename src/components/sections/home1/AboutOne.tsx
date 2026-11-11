"use client";

import { Col, Container, Row } from "react-bootstrap";
import { SECTION_INTRO } from "../../../data/content";
import Counter from "../../common/Counter";
import SectionTitle from "../../common/SectionTitle";

const stats = [
  { label: "Project Done", stop: 7.1, suffix: "K", delay: "100ms" },
  { label: "Happy Clients", stop: 1200, suffix: undefined, delay: "300ms" },
  { label: "Total Growth", stop: 20, suffix: "K", delay: "500ms" },
];

export default function AboutOne() {
  return (
    <section className="about-one" id="about">
      <Container>
        <div className="about-one__top">
          <Row className="gutter-y-30">
            <Col lg={5}>
              <SectionTitle subtitle="About" title="Agency" />
            </Col>
            <Col lg={7}>
              <SectionTitle text={SECTION_INTRO} />
            </Col>
          </Row>
        </div>
        <ul className="about-one__list list-unstyled">
          {stats.map((s) => (
            <li className="wow bounceInUp" data-wow-duration="1500ms" data-wow-delay={s.delay} key={s.label}>
              <div className="about-one__list__item__item">
                <p className="about-one__list__item__text">{s.label}</p>
                <Counter stop={s.stop} suffix={s.suffix} className="about-one__list__item__count" />
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
