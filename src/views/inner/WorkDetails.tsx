"use client";

import { Col, Container, Row } from "react-bootstrap";
import CtaArea from "../../components/common/CtaArea";
import Layout from "../../components/layout/Layout";
import { img } from "../../utils";

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse ";

const info = [
  { icon: <i className="icon-user1"></i>, title: "Client ", description: "Navan Digital Agency" },
  { icon: <i className="icon-calendarblank"></i>, title: "Project Date ", description: "January 2025" },
  { icon: <img src={img("icon/chevron.png")} alt="icon" />, title: "Categories", description: "Visual Identity, Branding" },
];

export default function WorkDetails() {
  return (
    <Layout header={{ variant: "one" }} footer="two">
      <section className="page-header page-header--two ">
        <Container>
          <Row className="gutter-y-30">
            <Col lg={8}>
              <div className="page-header__content">
                <h2 className="page-header__title letters-fade-in">Navan Branding</h2>
                <p className="page-header__text">
                  Our services are designed to craft impactful digital solutions while addressing <br /> your problems through strategy, innovation, and analysis
                </p>
              </div>
            </Col>
            <Col lg={4}>
              <div className="bwfade-anim">
                <div className="page-header__thumb scale">
                  <img src={img("project/project-head.jpg")} alt="image" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="page-header__shape-two">
          <img src={img("shapes/page-header-1-1.png")} alt="image" />
        </div>
      </section>

      <section className="project-details">
        <Container>
          <div className="project-details__top">
            <Row className="gutter-y-30">
              <Col lg={6}>
                <div className="sec-title">
                  <h2 className="sec-title__title bw-spilt-title-one" data-delay="0.50">
                    Your Growth Is <br /> Our Mission
                  </h2>
                </div>
              </Col>
              <Col lg={6}>
                <div className="sec-title">
                  <p className="sec-title__text">{LOREM}</p>
                </div>
              </Col>
            </Row>
          </div>
          <div className="project-details__content">
            <div className="project-details__image__box img-container">
              <img src={img("project/project-d-1-1.jpg")} alt="image" />
            </div>
            <div className="project-details__info">
              <ul className="project-details__list list-unstyled">
                {info.map((i) => (
                  <li className="project-details__list__item" key={i.title}>
                    <div className="project-details__list__item__icon">{i.icon}</div>
                    <div className="project-details__list__item__content">
                      <h3 className="title">{i.title}</h3>
                      <p className="description">{i.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <p className="project-details__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <div className="project-details__image-small__box bwfade-anim">
              {[1, 2, 3, 4].map((n) => (
                <div className="project-details__image__item scale" key={n}>
                  <img src={img(`project/project-s-1-${n}.jpg`)} alt="image" />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <CtaArea />
    </Layout>
  );
}
