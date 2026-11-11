"use client";

import { Col, Container, Row } from "react-bootstrap";
import PageHeader from "../../components/common/PageHeader";
import SmartLink from "../../components/common/SmartLink";
import Layout from "../../components/layout/Layout";
import { ROUTES } from "../../data/routes";
import { img } from "../../utils";

export default function TeamDetails() {
  return (
    <Layout header={{ variant: "one" }} footer="one" footerCta>
      <PageHeader title="team" />
      <section className="team-details">
        <Container>
          <Row className="gutter-y-30">
            <Col xl={5} md={6}>
              <div className="team-details__content">
                <h3 className="team-details__title bw-spilt-title-one" data-delay="1">Alex Petrovski</h3>
                <p className="team-details__subtitle bw-spilt-title-two" data-delay="1">UX Designer, Research</p>
                <ul className="team-details__social-link list-unstyled wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="300ms">
                  <li><a href="https://linkedin.com/">IN</a></li>
                  <li><a href="https://www.facebook.com/">FB</a></li>
                  <li><a href="http://google.com/">IG</a></li>
                </ul>
                <p className="team-details__text wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="500ms">
                  A UX design leader driven by empathy, curiosity, and purpose. I craft experiences that don’t just look good — they solve real problems. From apps to websites, my goal is to make products feel natural, intuitive, and truly impactful in people’s lives. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis cursus mi quis viverra ornare.
                </p>
                <div className="team-details__author">
                  <h3 className="team-details__author__title bw-spilt-title-one" data-delay="1">Collaborate with Me</h3>
                  <p className="team-details__author__text wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="500ms">
                    Let’s create something extraordinary together! Whether you’re looking to visualize a product, animate a concept, or build an interactive experience.
                  </p>
                  <div className="team-details__author__link wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="500ms">
                    <SmartLink to={ROUTES.contact}>Let’s Talk</SmartLink>
                    <a href="http://google.com/">Protfolio</a>
                    <a href="https://www.behance.net/">Behance</a>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6} xl={{ offset: 1 }}>
              <div className="team-details__thumb wow bounceInRight" data-wow-delay="300ms">
                <img src={img("team/team-d-1.jpg")} alt="team image" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
}
