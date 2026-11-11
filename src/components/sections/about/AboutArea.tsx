"use client";

import { Col, Container, Row } from "react-bootstrap";
import { SECTION_INTRO } from "../../../data/content";
import SectionTitle from "../../common/SectionTitle";

export default function AboutArea() {
  return (
    <section className="about-area">
      <Container>
        <div className="about-area__top">
          <Row className="gutter-y-30">
            <Col lg={6}>
              <SectionTitle subtitle="About" title="Agency" />
            </Col>
            <Col lg={6}>
              <SectionTitle text={SECTION_INTRO} />
            </Col>
          </Row>
        </div>
        <h3 className="about-area__text bw-spilt-title-one" data-delay="0.1">
          Our Approach Merges Strategy,Technology, And Analysis To Create Digital Products That Drive Real Results
        </h3>
      </Container>
    </section>
  );
}
