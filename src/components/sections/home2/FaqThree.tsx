"use client";

import { Col, Container, Row } from "react-bootstrap";
import { faqs } from "../../../data/content";
import { img } from "../../../utils";
import Accordion from "../../common/Accordion";
import SectionTitle from "../../common/SectionTitle";

export default function FaqThree({ dark }: { dark?: boolean }) {
  return (
    <section className="faq-three">
      <Container>
        <div className="faq-three__top">
          <Row className="gutter-y-30">
            <Col lg={6}>
              <SectionTitle
                variant="one"
                subtitle="Ask Question "
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis cursus mi quis viverra ornare."
              />
            </Col>
            <Col lg={6}>
              <SectionTitle variant="one" title="Questions" titleDelay="0.20" />
            </Col>
          </Row>
          <div className="faq-three__shape-top">
            <svg className="faq-shape-svg" width="105" height="105" viewBox="0 0 105 105" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M52.5 0C50.1594 48.2344 48.2344 50.1594 0 52.5C48.2344 54.8406 50.1594 56.7656 52.5 105C54.8406 56.7656 56.7656 54.8406 105 52.5C56.7656 50.1594 54.8406 48.2344 52.5 0Z"
                fill={dark ? "#ffffff" : "#000000"}
              />
            </svg>
          </div>
        </div>
        <Row className="gutter-y-30">
          <Col lg={4}>
            <div className="faq-two__thumb wow bw-animated-left fadeInLeft" data-wow-duration="1500ms" data-wow-delay="300ms">
              <img src={img("resources/faq-image-2.jpg")} alt="image" />
            </div>
          </Col>
          <Col lg={8}>
            <Accordion items={faqs} className="faq-one__accordion faq-one__accordion--three" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
