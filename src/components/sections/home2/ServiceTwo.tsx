"use client";

import { Col, Container, Row } from "react-bootstrap";
import { ROUTES } from "../../../data/routes";
import CircleButton from "../../common/CircleButton";
import SectionTitle from "../../common/SectionTitle";
import SmartLink from "../../common/SmartLink";

const LOREM = "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.velit esse cillum dolore eu fugiat nulla pariatur.";

const items = [
  { icon: "icon-dice", title: "Branding", tags: ["Branding", "design"] },
  { icon: "icon-paintbrush", title: "UI/UX Design", tags: [" UI Design", " UX design"] },
  { icon: "icon-code-editing", title: "Development", tags: ["Development", "design"] },
  { icon: "icon-megaphone", title: "Marketing", tags: ["Marketing", "design"] },
];

export default function ServiceTwo({ id }: { id?: string }) {
  return (
    <section className="service-two" id={id}>
      <Container>
        <div className="service-two__top">
          <Row className="gutter-y-30">
            <Col lg={6}>
              <SectionTitle
                variant="one"
                subtitle="The Service "
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis cursus mi quis viverra ornare."
              />
            </Col>
            <Col lg={6}>
              <SectionTitle variant="one" title="Services" titleDelay="0.20" />
            </Col>
          </Row>
        </div>
        <div className="service-two__list">
          {items.map((s) => (
            <div className="service-two__item" key={s.title}>
              <Row className="gutter-y-30 align-items-center">
                <Col lg={6}>
                  <div className="service-two__item__content-left">
                    <div className="service-two__item__icon">
                      <i className={s.icon}></i>
                    </div>
                    <div className="service-two__item__content">
                      <h2 className="service-two__item__title">{s.title}</h2>
                      <div className="service-two__item__tag">
                        {s.tags.map((t) => (
                          <SmartLink to="#" key={t}>{t}</SmartLink>
                        ))}
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="service-two__item__content-right">
                    <p className="service-two__item__text">{LOREM}</p>
                    <CircleButton to={ROUTES.services} className="service-two__item__link" />
                  </div>
                </Col>
              </Row>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
