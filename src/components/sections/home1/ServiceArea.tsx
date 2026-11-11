"use client";

import { Col, Container, Row } from "react-bootstrap";
import { services } from "../../../data/content";
import ServiceCard from "../../cards/ServiceCard";
import SectionTitle from "../../common/SectionTitle";

const INTRO =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis cursus, mi quis viverra ornare. sed do eiusmod tempor incididunt Lorem ipsum dolor site";

interface Props {
  id?: string;
  /** show the "WHAT WE DO" header block (hidden on the services page) */
  withHeader?: boolean;
  subtitle?: string;
}

/** Stack of service cards, with optional header */
export default function ServiceArea({ id, withHeader = true, subtitle = "WHAT WE DO" }: Props) {
  return (
    <section className="service-area" id={id}>
      <Container>
        {withHeader && (
          <div className="service-area__top">
            <Row className="gutter-y-30 align-items-end">
              <Col xl={6} lg={7} md={6}>
                <SectionTitle subtitle={subtitle} title="Our Services" />
              </Col>
              <Col xl={6} lg={5} md={6} xxl={{ span: 4, offset: 2 }}>
                <SectionTitle text={INTRO} textClass="bw-spilt-title-two" textDelay="1" />
              </Col>
            </Row>
          </div>
        )}
        <div className="service-area__inner">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </Container>
    </section>
  );
}
