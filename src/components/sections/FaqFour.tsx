"use client";

import { Col, Container, Row } from "react-bootstrap";
import { faqsFive, SECTION_INTRO } from "../../data/content";
import { img } from "../../utils";
import Accordion from "../common/Accordion";

interface Props {
  id?: string;
  /** small label above the heading (service pages show "FAQS") */
  subtitle?: string;
  heading?: string;
  intro?: string;
  items?: { title: string; content: string }[];
}

/** "Frequently Asked Questions" block (homes three/four, service details) */
export default function FaqFour({
  id,
  subtitle,
  heading = "Frequently Asked Questions Got Questions?",
  intro = `${SECTION_INTRO}.`,
  items = faqsFive,
}: Props) {
  return (
    <section className="faq-four" id={id}>
      <Container>
        <div className="faq-four__top">
          <div className="sec-title">
            {subtitle && (
              <p className="sec-title__subtitle">
                <span></span>
                {subtitle}
              </p>
            )}
            <h2 className="sec-title__title bw-spilt-title-one" data-delay="0.8">{heading}</h2>
          </div>
        </div>
        <Row className="gutter-y-30">
          <Col lg={4}>
            <div className="faq-four__content">
              <p className="faq-four__text bw-split-text">{intro}</p>
              <div className="faq-four__thumb wow bw-animated-left fadeInLeft" data-wow-duration="1500ms" data-wow-delay="500ms">
                <img src={img("resources/faqs-4-1.jpg")} alt="faqs image" />
              </div>
            </div>
          </Col>
          <Col lg={8}>
            <Accordion items={items} className="faq-one__accordion faq-one__accordion--two" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
