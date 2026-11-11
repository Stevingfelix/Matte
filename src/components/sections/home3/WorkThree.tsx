"use client";

import { Col, Container, Row } from "react-bootstrap";
import { ROUTES } from "../../../data/routes";
import { img } from "../../../utils";
import SmartLink from "../../common/SmartLink";

const works = [
  { title: "Pulse Commerce", category: "2025 . E-Commerce Growth", tags: ["Strategy", "UX/UI"], image: "project-3-1.jpg", to: ROUTES.serviceResearch, style: "one" },
  { title: "Aura Brand System", category: "2025 . Visual Identity", tags: ["Branding", "Web"], image: "project-3-2.jpg", to: ROUTES.serviceConsultation, style: "two" },
  { title: "Inventory Audit Tool", category: "2025 . SaaS Product", tags: ["Product", "Research"], image: "project-3-3.jpg", to: ROUTES.serviceCommunication, style: "one" },
  { title: "Kinetix Point of Sale", category: "2025 . Retail Platform", tags: ["Design", "Growth"], image: "project-3-4.jpg", to: ROUTES.serviceBrand, style: "two" },
];

export default function WorkThree({ id, onePage }: { id?: string; onePage?: boolean }) {
  return (
    <section className="work-three" id={id}>
      <Container>
        <div className="work-three__top">
          <Row className="align-items-center gutter-y-30">
            <Col lg={4} md={6}>
              <div className="sec-title">
                <p className="sec__title-subtitle wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="300ms">Featured works</p>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className="sec-title">
                <h2 className="sec__title-title bw-spilt-title-one" data-delay="0.8">Work</h2>
              </div>
            </Col>
            <Col lg={4} md={12}>
              <div className="sec-title">
                <p className="sec__title-text bw-split-text">Selected digital products, brand systems, and growth launches crafted by Matte.</p>
              </div>
            </Col>
          </Row>
        </div>
        <div className="work-three-wrap">
          {works.map((w) => {
            const href = onePage ? "#contact" : w.to;
            return (
              <div className="item" key={w.title}>
                <div className={`work-three-item work-three-style-${w.style}`}>
                  <div className="work-three-item__thumb scale cursor-text" data-cursor-text={onePage ? "Inquire" : "View Project"}>
                    <SmartLink to={href}>
                      <img src={img(`project/${w.image}`)} alt={w.title} />
                    </SmartLink>
                  </div>
                  <div className="work-three-item__content-box">
                    <div className="work-three-item__content">
                      <h2 className="work-three-item__title">
                        <SmartLink to={href}>{w.title}</SmartLink>
                      </h2>
                      <p className="work-three-item__text">{w.category}</p>
                    </div>
                    <div className="tag">
                      {w.tags.map((t) => (
                        <SmartLink key={t} to={href}>{t}</SmartLink>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
