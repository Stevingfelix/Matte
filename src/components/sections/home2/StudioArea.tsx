"use client";

import { Col, Container, Row } from "react-bootstrap";
import { ROUTES } from "../../../data/routes";
import { img } from "../../../utils";
import Counter from "../../common/Counter";
import PikizButton from "../../common/PikizButton";

const stats = [
  { label: "Project Done", stop: 7.1, suffix: "K", delay: "100ms" },
  { label: "Happy Clients", stop: 1200, suffix: undefined, delay: "300ms" },
  { label: "Total Growth", stop: 20, suffix: "K", delay: "500ms" },
];

export default function StudioArea({ id }: { id?: string }) {
  return (
    <section className="studio-area" id={id}>
      <Container>
        <div className="studio-area__top">
          <div className="sec-title">
            <p className="sec-title__subtitle wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="300ms">
              <span></span>Our Studio<span></span>
            </p>
            <h2 className="sec-title__text bw-spilt-title-one" data-delay="1">
              Our services are designed to craft impactful digital solutions while addressing your problems through strategy, innovation, and analysis
            </h2>
          </div>
        </div>
        <Row className="gutter-y-30">
          <Col xxl={4} lg={5} md={12}>
            <div className="studio-area__thumb bw-animated-left wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="300ms">
              <img src={img("resources/stdio-image.jpg")} alt="image" />
            </div>
          </Col>
          <Col xxl={{ span: 6, offset: 2 }} lg={7} md={12}>
            <div className="studio-area__content wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="300ms">
              <p className="studio-area__content__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
              <PikizButton to={ROUTES.about} label="Start A Project" variant="two" />
            </div>
          </Col>
        </Row>
      </Container>
      <ul className="studio-area__list list-unstyled">
        {stats.map((s) => (
          <li className="wow bounceInUp" data-wow-duration="1500ms" data-wow-delay={s.delay} key={s.label}>
            <div className="studio-area__list__item__item">
              <p className="studio-area__list__item__text">{s.label}</p>
              <Counter stop={s.stop} suffix={s.suffix} className="studio-area__list__item__count" />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
