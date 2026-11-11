"use client";

import type { ReactNode } from "react";
import { Container } from "react-bootstrap";
import { testimonials, type Testimonial } from "../../data/content";
import { img } from "../../utils";
import Counter from "../common/Counter";
import PikizSlider from "../common/PikizSlider";
import TestimonialCard from "../cards/TestimonialCard";

interface Props {
  /** heading block (SectionTitle variant differs per home) */
  heading: ReactNode;
  id?: string;
  fadeCarousel?: boolean;
  items?: Testimonial[];
  memberCount?: number;
  memberSuffix?: string;
  memberText?: string;
}

/** Testimonials with member counter + react-slick carousel (about, home two, home four) */
export default function Testimonials({
  heading,
  id,
  fadeCarousel,
  items = testimonials,
  memberCount = 200,
  memberSuffix = "K",
  memberText = "Members love our company services",
}: Props) {
  return (
    <section className="testimonials-one" id={id}>
      <Container>
        <div className="testimonials-one__top">
          {heading}
          <div className="testimonials-one__members wow bounceInDown" data-wow-duration="1500ms" data-wow-delay="500ms">
            <div className="testimonials-one__members__image">
              <img src={img("resources/testi1-1.jpg")} alt="image" />
            </div>
            <div className="testimonials-one__members__content">
              <Counter stop={memberCount} speed={2500} suffix={memberSuffix} className="testimonials-one__members__count" />
              <p className="testimonials-one__members__text">{memberText}</p>
            </div>
          </div>
        </div>
        <div
          className={`testimonials-one__carousel-box ${fadeCarousel ? "wow fadeInRight" : ""}`.trim()}
          data-wow-duration="1500ms"
          data-wow-delay="300ms"
        >
          <PikizSlider
            className="testimonials-one__carousel"
            infinite
            slidesToShow={2}
            slidesToScroll={1}
            autoplay
            autoplaySpeed={4000}
            speed={2000}
            arrows={false}
            dots
            responsive={[
              { breakpoint: 992, settings: { slidesToShow: 2, slidesToScroll: 2 } },
              { breakpoint: 767, settings: { slidesToShow: 1, slidesToScroll: 1 } },
            ]}
          >
            {items.map((t, i) => (
              <div className="item" key={i}>
                <TestimonialCard {...t} />
              </div>
            ))}
          </PikizSlider>
        </div>
      </Container>
    </section>
  );
}
