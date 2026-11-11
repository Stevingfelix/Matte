"use client";

import { Col, Container, Row } from "react-bootstrap";
import { faqs } from "../../data/content";
import { img } from "../../utils";
import Accordion from "../common/Accordion";
import SectionTitle from "../common/SectionTitle";

const INTRO =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis cursus, mi quis viverra ornare. sed do eiusmod tempor incididunt Lorem ipsum dolor sit";

/** FAQ block with decorative shape on the left (home one, about) */
export default function FaqTwo({ id }: { id?: string }) {
  return (
    <section className="faq-two" id={id}>
      <Container>
        <div className="faq-two__top">
          <Row className="gutter-y-30 align-items-center">
            <Col xxl={8} xl={7} lg={6} md={6}>
              <SectionTitle subtitle="Faq's" title="Faq's" />
            </Col>
            <Col xxl={4} xl={5} lg={6} md={6}>
              <SectionTitle text={INTRO} />
            </Col>
          </Row>
        </div>
        <Row className="gutter-y-30 align-items-center">
          <Col lg={4}>
            <div className="faq-two__shape">
              <img src={img("shapes/faq-shape-1-1.png")} alt="shape" />
            </div>
          </Col>
          <Col lg={8}>
            <Accordion items={faqs} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
