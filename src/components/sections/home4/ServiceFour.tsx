"use client";

import { Col, Container, Row } from "react-bootstrap";
import { grumpyServices } from "../../../data/grumpy";
import { ROUTES } from "../../../data/routes";
import { img } from "../../../utils";
import CircleButton from "../../common/CircleButton";
import SectionTitleThree from "../../common/SectionTitleThree";
import SmartLink from "../../common/SmartLink";

export default function ServiceFour({ id, onePage }: { id?: string; onePage?: boolean }) {
  return (
    <section className="service-four" id={id}>
      <Container>
        <div className="service-four__top">
          <SectionTitleThree
            border
            title="AI & SaaS Services"
            subtitle="What We Ship"
            btnLabel={onePage ? "View Pricing" : "All Services"}
            btnTo={onePage ? "#pricing" : ROUTES.services}
            titleClass="bw-spilt-title-one"
            titleDelay="0.8"
          />
        </div>
        <div className="service-four__wrap">
          {grumpyServices.map((s) => {
            const href = onePage ? "#contact" : s.to;
            return (
              <div className="service-four__item" key={s.title}>
                <Row className="gutter-y-30 align-items-center">
                  <Col lg={8}>
                    <div className="service-four__item__content">
                      <div className="service-four__item__top">
                        <div className="service-four__item__top__box">
                          <h3 className="service-four__item__title">
                            <SmartLink to={href}>{s.title}</SmartLink>
                          </h3>
                          <div className="tag">
                            {s.tags.map((t) => (
                              <span key={t}>{t}</span>
                            ))}
                          </div>
                        </div>
                        <CircleButton to={href} labelClass="blog-card-two__btn__text" label={<>View <br /> More</>} />
                      </div>
                      <p className="service-four__item__text">{s.text}</p>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className="service-four__item__thumb wow bw-animated-right fadeInRight" data-wow-duration="1500ms" data-wow-delay="500ms">
                      <img src={img(`icon/${s.icon}`)} alt={s.title} />
                    </div>
                  </Col>
                </Row>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
