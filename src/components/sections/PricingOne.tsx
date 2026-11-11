"use client";

import { Col, Container, Row } from "react-bootstrap";
import { pricingPlans, type PricingPlan } from "../../data/pricing";
import { ROUTES } from "../../data/routes";
import PricingCard from "../cards/PricingCard";
import PikizButton from "../common/PikizButton";
import PikizSlider from "../common/PikizSlider";

interface PricingOneProps {
  carousel?: boolean;
  id?: string;
  ctaTo?: string;
  topSpace?: boolean;
  plans?: PricingPlan[];
  heading?: string;
  subheading?: string;
}

/** Pricing: stacked cards + plan list (default) or carousel */
export default function PricingOne({
  carousel,
  id,
  ctaTo = ROUTES.contact,
  topSpace,
  plans = pricingPlans,
  heading = "Flexible Plans For Every Brand",
  subheading = "Crafted with creativity and passion. Let’s stay connected—reach out anytime!",
}: PricingOneProps) {
  const sectionStyle = topSpace ? { paddingTop: "120px" } : undefined;
  if (carousel) {
    return (
      <section className="pricing-one" id={id} style={sectionStyle}>
        <Container>
          <PikizSlider
            className="pricing-one__carousel pikiz-slick__carousel--basic-nav"
            infinite
            slidesToShow={3}
            slidesToScroll={1}
            autoplay
            autoplaySpeed={4000}
            speed={2000}
            arrows={false}
            dots
            responsive={[
              { breakpoint: 992, settings: { slidesToShow: 2, slidesToScroll: 1 } },
              { breakpoint: 767, settings: { slidesToShow: 1, slidesToScroll: 1 } },
            ]}
          >
            {[...plans, plans[0]].map((p, i) => (
              <div className="item" key={i}>
                <PricingCard {...p} ctaTo={ctaTo} />
              </div>
            ))}
          </PikizSlider>
        </Container>
      </section>
    );
  }

  return (
    <section className="pricing-one" id={id} style={sectionStyle}>
      <Container>
        <div className="pricing-one__top">
          <Row className="gutter-y-30 align-items-end">
            <Col lg={7}>
              <div className="sec-title">
                <h2 className="sec-title__title bw-spilt-title-one" data-delay="1">{heading}</h2>
              </div>
            </Col>
            <Col lg={5}>
              <div className="sec-title sec-title__pricing">
                <p className="sec-title__text bw-split-text">{subheading}</p>
                <div className="sec-title__btn wow bounceInDown" data-wow-delay="500ms">
                  <PikizButton to={ctaTo} label="Let’s Talk" />
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="pricing-one__tab-box">
          <Row className="gutter-y-30">
            <Col lg={6}>
              <div className="pricing-card-box wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="300ms">
                {plans.map((p, i) => (
                  <PricingCard key={p.price} {...p} active={i === 0} ctaTo={ctaTo} />
                ))}
              </div>
            </Col>
            <Col lg={6}>
              <div className="pricing-card-categories-plan wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="300ms">
                {plans.map((p, i) => (
                  <div
                    key={p.name}
                    className={`pricing-card-categories-plan__item ${i === 0 ? "active" : ""}`.trim()}
                  >
                    <h3 className="pricing-card-categories-plan__title">{p.name}</h3>
                    <p className="pricing-card-categories-plan__text">{p.description}</p>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}
