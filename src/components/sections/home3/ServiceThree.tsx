"use client";

import { Col, Container, Row } from "react-bootstrap";
import { ROUTES } from "../../../data/routes";
import { img } from "../../../utils";
import CircleButton from "../../common/CircleButton";
import Lines from "../../common/Lines";
import PikizButton from "../../common/PikizButton";
import SmartLink from "../../common/SmartLink";

const items = [
  {
    title: "Search Engine\nOptimization",
    image: "service-3-1.jpg",
    tags: ["Technical SEO", "Organic Growth"],
    text: "Technical site audits, search architecture, and high-intent content roadmaps built to compound qualified organic traffic month after month.",
  },
  {
    title: "Social\nMarketing",
    image: "service-3-2.jpg",
    tags: ["Paid Social", "Creative"],
    text: "Scroll-stopping creative direction, creator partnerships, and full-funnel social campaigns engineered for lower acquisition costs.",
  },
  {
    title: "Content\nMarketing",
    image: "service-3-3.jpg",
    tags: ["Editorial", "Positioning"],
    text: "Distinctive brand storytelling, editorial systems, and conversion copywriting that turn first-time visitors into loyal advocates.",
  },
  {
    title: "Email\nMarketing",
    image: "service-3-4.jpg",
    tags: ["Lifecycle", "Retention"],
    text: "Automated lifecycle flows, segmented launch sequences, and retention experiments designed to maximize customer lifetime value.",
  },
];

export default function ServiceThree({ id, onePage }: { id?: string; onePage?: boolean }) {
  const target = onePage ? "#pricing" : ROUTES.services;
  const detailTarget = onePage ? "#contact" : ROUTES.services;
  return (
    <section className="service-three" id={id}>
      <Container>
        <div className="service-three__top">
          <Row className="gutter-y-30">
            <Col xs={12}>
              <div className="sec-title">
                <h2 className="sec-title__title bw-spilt-title-one" data-delay="0.8">Strategy & Craft Built To Scale Your Brand</h2>
              </div>
            </Col>
            <Col lg={6}>
              <div className="service-three__top__left">
                <div className="service-three__top__shape">
                  <img src={img("shapes/service-shape.png")} alt="image" />
                </div>
                <div className="service-three__top__btn wow bounceInDown" data-wow-delay="500ms">
                  <PikizButton to={target} label={onePage ? "View Plans" : "All Services"} />
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="sec-title">
                <p className="sec-title__text bw-split-text">
                  Our services pair brand clarity, conversion-focused design, and disciplined growth experimentation to move the metrics that matter.
                </p>
              </div>
            </Col>
          </Row>
        </div>
        <div className="service-three__wrap">
          {items.map((s) => (
            <div className="service-three__item" key={s.image}>
              <Row className="gutter-y-30 align-items-center">
                <Col lg={6}>
                  <div className="service-three__item__left">
                    <div className="service-three__item__thumb">
                      <img src={img(`service/${s.image}`)} alt={s.title.replace("\n", " ")} />
                    </div>
                    <div className="service-three__item__left__content">
                      <h2 className="service-three__item__title">
                        <SmartLink to={detailTarget}>
                          <Lines text={s.title} />
                        </SmartLink>
                      </h2>
                      <div className="service-three__item__tag">
                        {s.tags.map((tag) => (
                          <SmartLink key={tag} to={detailTarget}>{tag}</SmartLink>
                        ))}
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="service-three__item__right">
                    <p className="service-three__item__text">{s.text}</p>
                    <CircleButton to={detailTarget} labelClass="blog-card-two__btn__text" label={<>View <br /> More</>} />
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
