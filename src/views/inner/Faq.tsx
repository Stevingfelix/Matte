"use client";

import { Col, Container, Row } from "react-bootstrap";
import Accordion from "../../components/common/Accordion";
import BigImage from "../../components/common/BigImage";
import PageHeader from "../../components/common/PageHeader";
import PikizButton from "../../components/common/PikizButton";
import Layout from "../../components/layout/Layout";
import { faqsFive } from "../../data/content";
import { ROUTES } from "../../data/routes";
import { img } from "../../utils";

export default function Faq() {
  return (
    <Layout overflowVisible header={{ variant: "one" }} footer="one" footerCta>
      <PageHeader title="Faq" />
      <section className="faq-one">
        <Container>
          <div className="faq-one__top">
            <Row className="gutter-y-30 align-items-end">
              <Col lg={7}>
                <div className="sec-title">
                  <h2 className="sec-title__title bw-spilt-title-one" data-delay="0.50">Frequently Asked Question!</h2>
                </div>
              </Col>
              <Col lg={5}>
                <div className="sec-title sec-title__pricing">
                  <p className="sec-title__text bw-split-text">Crafted with creativity and passion. Let’s stay connected reach out anytime!</p>
                  <div className="sec-title__btn wow bounceInDown" data-wow-delay="500ms">
                    <PikizButton to={ROUTES.contact} label="Let’s Talk" />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <Row className="gutter-y-30">
            <Col lg={4}>
              <div className="faq-one__thumb wow bw-animated-left fadeInLeft" data-wow-duration="1500ms" data-wow-delay="500ms">
                <img src={img("resources/faq-image.jpg")} alt="image" />
              </div>
            </Col>
            <Col lg={8}>
              <Accordion items={faqsFive} itemAnimation={false} wrapperAnimation />
            </Col>
          </Row>
        </Container>
      </section>
      <BigImage />
    </Layout>
  );
}
