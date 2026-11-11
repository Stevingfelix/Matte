"use client";

import { Col, Container, Row } from "react-bootstrap";
import { demos } from "../../data/navigation";
import { img } from "../../utils";
import PikizButton from "../common/PikizButton";
import SmartLink from "../common/SmartLink";

/** Home demo showcase shown inside the "Home" mega menu */
export default function MegaMenu() {
  return (
    <section className="home-showcase">
      <Container fluid>
        <div className="home-showcase__inner">
          <Row>
            {demos.map((demo) => (
              <Col md={6} lg={3} key={demo.title}>
                <div className="demo-one__card">
                  <div className="demo-one__image-box">
                    <SmartLink to={demo.buttons[0].to} className="demo-one__image">
                      <img src={img(`pikiz-landing/${demo.image}`)} alt="pikiz" />
                    </SmartLink>
                    <div className="demo-one__btns-box">
                      {demo.buttons.map((b) => (
                        <div className="demo-one__btn" key={b.label}>
                          <PikizButton to={b.to} label={b.label} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="demo-one__content">
                    <h3 className="demo-one__title">
                      <SmartLink to={demo.titleTo}>{demo.title}</SmartLink>
                    </h3>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
}
