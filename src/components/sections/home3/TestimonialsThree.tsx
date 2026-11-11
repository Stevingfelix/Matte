"use client";

import type { CustomArrowProps } from "react-slick";
import { Col, Container, Row } from "react-bootstrap";
import { img } from "../../../utils";
import Counter from "../../common/Counter";
import PikizSlider from "../../common/PikizSlider";

const items = [
  {
    text: "Matte has been by our side for years—and as their strategic scope has grown, so has the measurable conversion growth they’ve driven across every launch.",
    name: "Camila Mensah",
    role: "VP of Brand, Solis Collective",
  },
  {
    text: "From positioning research to our final product site, the Matte team moved fast without sacrificing a single detail of visual craft.",
    name: "Marcus Lindqvist",
    role: "Head of Growth, Northbeam Labs",
  },
  {
    text: "Our sign-ups doubled within six weeks of shipping the new Matte landing system and content framework.",
    name: "Elena Vance",
    role: "Founder, Atelier Nine",
  },
];

/** custom slick arrows (class names match the template CSS) */
function Arrow({ dir, onClick }: CustomArrowProps & { dir: "prev" | "next" }) {
  return (
    <button className={`testimonials-three__slick-button testimonials-three__slick-button--${dir}`} onClick={onClick}>
      <i className={dir === "prev" ? "icon-arrow-right" : "icon-arrow-left"}></i>
    </button>
  );
}

export default function TestimonialsThree({ id }: { id?: string }) {
  return (
    <section className="testimonials-three" id={id}>
      <Container>
        <div className="testimonials-three__top">
          <Row className="gutter-y-30 align-items-end">
            <Col xl={4} lg={5}>
              <div className="sec-title wow bounceInDown" data-wow-duration="1500ms" data-wow-delay="500ms">
                <div className="sec-title__member">
                  <div className="sec-title__member__thumb">
                    <img src={img("resources/testimonials-three-1-1.png")} alt="author image" />
                  </div>
                  <div className="sec-title__member__content">
                    <Counter as="h3" stop={98} suffix="%" className="sec-title__member__count" />
                    <p className="sec-title__member__text">client retention across studio partners</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xl={8} lg={7}>
              <div className="sec-title">
                <h2 className="sec-title__title bw-spilt-title-one" data-delay="0.8">Testimonial</h2>
              </div>
            </Col>
          </Row>
        </div>
        <div className="testimonials-three__wrap wow bw-animated-top fadeInUp" data-wow-duration="1500ms" data-wow-delay="300ms">
          <PikizSlider
            className="testimonials-three__slider"
            infinite
            slidesToShow={1}
            slidesToScroll={1}
            autoplay
            autoplaySpeed={4000}
            speed={2000}
            arrows
            dots={false}
            prevArrow={<Arrow dir="prev" />}
            nextArrow={<Arrow dir="next" />}
          >
            {items.map((t, i) => (
              <div className="item" key={i}>
                <div className="testimonials-three__item">
                  <div className="testimonials-three__item__quite">
                    <i className="icon-quite2"></i>
                  </div>
                  <p className="testimonials-three__item__text">{t.text}</p>
                  <div className="testimonials-three__item__author">
                    <h3 className="author__name">{t.name}</h3>
                    <span className="author__degination">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </PikizSlider>
        </div>
      </Container>
    </section>
  );
}
