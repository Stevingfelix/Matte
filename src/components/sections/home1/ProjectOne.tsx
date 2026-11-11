"use client";

import { Col, Container, Row } from "react-bootstrap";
import { projectsLeft, projectsRight } from "../../../data/content";
import { ROUTES } from "../../../data/routes";
import WorkBox from "../../cards/WorkBox";
import Counter from "../../common/Counter";
import SmartLink from "../../common/SmartLink";

interface Props {
  id?: string;
  /** show the "Power of People" heading + total project counter (work page) */
  withTop?: boolean;
}

export default function ProjectOne({ id, withTop }: Props) {
  return (
    <section className="project-one" id={id}>
      <Container>
        {withTop && (
          <div className="project-one__top">
            <Row className="align-items-center gutter-y-30">
              <Col lg={8}>
                <div className="sec-title">
                  <h2 className="sec-title__title letters-fade-in" data-delay="0.12">
                    The Power Of People,The Impact Of Creativity.
                  </h2>
                </div>
              </Col>
              <Col lg={4}>
                <div className="project-one__top__funfact">
                  <p className="project-one__top__funfact__text">Total Project</p>
                  <Counter as="h3" stop={10} suffix="K+" className="project-one__top__funfact__count" />
                </div>
              </Col>
            </Row>
          </div>
        )}
        <Row className="gutter-y-30 gutter-x-30">
          <Col lg={6}>
            <div className="project-one__inner bwfade-anim">
              <div className="work-box__title">
                <p className="work-box__title__subtitle wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="300ms">
                  <span className="work-box__title__subtitle-box"></span> Projects
                </p>
                <h2 className="work-box__title__title letters-fade-in" data-delay="0.12">
                  Our Recent <br /> Works
                </h2>
              </div>
              {projectsLeft.map((p, i) => (
                <WorkBox key={i} {...p} />
              ))}
            </div>
          </Col>
          <Col lg={6}>
            <div className="project-one__inner project-one__inner--two">
              {projectsRight.map((p, i) => (
                <WorkBox key={i} {...p} />
              ))}
              <div className="work-box__bottom wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="300ms">
                <div className="work-box__bottom__content">
                  <h3 className="work-box__bottom__text bw-spilt-title-one">Let's Make Something Great Work Together</h3>
                </div>
                <SmartLink to={ROUTES.workDetails} className="work-box__bottom__btn">
                  <i className="icon-right-down"></i>
                </SmartLink>
                <span className="work-box__bottom__shape"></span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
