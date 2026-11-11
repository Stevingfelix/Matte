"use client";

import { useState, type FormEvent } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BlogSidebar from "../../components/blog/BlogSidebar";
import CtaArea from "../../components/common/CtaArea";
import PageHeader from "../../components/common/PageHeader";
import PikizButton from "../../components/common/PikizButton";
import SmartLink from "../../components/common/SmartLink";
import Layout from "../../components/layout/Layout";
import { ROUTES } from "../../data/routes";
import { img } from "../../utils";

const wow = { "data-wow-duration": "1500ms", "data-wow-delay": "300ms" };

const takeaways = [
  "Digital marketing attribution tracks which channels and touchpoints drive conversions, so you know where to invest your time and budget",
  "There’s no universal “best” model. Each attribution approach has strengths and tradeoffs based on your goals and customer journey.",
  "Single-touch models (like first-touch or last-touch) are simple but miss most of the buyer journey.",
  "The right model depends on your business goals, sales cycle length, and how customers interact with your brand.",
];

function Article() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.reset();
    setSent(true);
  };

  return (
    <div className="blog-details__wrapper">
      <div className="blog-details__content">
        <div className="tag">
          <span>Marketing</span>
          <span>design</span>
        </div>
        <h3 className="blog-details__title bw-spilt-title-two">How to Use Marketing Attribution to Take Your Business to the Next Level</h3>
        <p className="blog-details__text wow fadeInUp" {...wow}>
          Marketing today is more complex than ever. With so many channels, touchpoints, and customer behaviors to track, figuring out what actually drives conversions can feel impossible.
        </p>
        <p className="blog-details__text wow fadeInUp" {...wow}>
          That’s where digital marketing attribution comes in. It shows you which marketing efforts are working and which ones are wasting your budget.ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <div className="blog-details__list-box wow fadeInUp" {...wow}>
          <h4 className="blog-details__list__title">Key Takeaways</h4>
          <ul className="blog-details__list list-unstyled">
            {takeaways.map((t) => (
              <li key={t}>
                <span className="blog-details__list__icon">
                  <i className="fas fa-check-circle"></i>
                </span>
                <p className="blog-details__list__text">{t}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="blog-details__info-box">
          <h3 className="blog-details__info__title wow fadeInUp" {...wow}>What is Marketing Attribution?</h3>
          <p className="blog-details__info__text wow fadeInUp" {...wow}>
            Marketing attribution is how you figure out which marketing efforts actually drive results.It assigns credit to the touchpoints (ads, blog posts, emails, social posts, webinars) that influence someone to convert.
          </p>
          <div className="blog-details__info__img img-container wow fadeInUp" {...wow}>
            <img src={img("blog/blog-details-1.jpg")} alt="blog image" />
          </div>
        </div>
        <div className="blog-details__info-box">
          <h3 className="blog-details__info__title wow fadeInUp" {...wow}>Why Marketing Attribution is Important</h3>
          <p className="blog-details__info__text wow fadeInUp" {...wow}>
            Marketing attribution matters because without it, you’re not measuring performance. You’re guessing.It connects campaigns to conversions, showing you which efforts drive real impact and which ones drain your budget. The thing about it is it’s also getting harder. Less cookies to rely on and the presence of AI are notable factors.
          </p>
          <div className="blog-details__info__img img-container wow fadeInUp" {...wow}>
            <img src={img("blog/blog-details-2.jpg")} alt="blog image" />
          </div>
        </div>
        <div className="blog-details__info-box-two wow fadeInUp" {...wow}>
          <h3 className="blog-details__info__title">Option #1. First-touch attribution</h3>
          <p className="blog-details__info__text">
            The first-touch attribution model applies all the ‘credit’ to touch points that lead a visitor to your website for the very first time.
          </p>
        </div>
        <div className="blog-details__info-box-two wow fadeInUp" {...wow}>
          <h3 className="blog-details__info__title">Option #2. Last-touch attribution</h3>
          <p className="blog-details__info__text">
            The last-touch attribution model is the exact opposite of the first-touch attribution model, hence the name.It’s often the “default,” go-to model for most marketers. It gives all the credit to the final touch point before someone buys.
          </p>
        </div>
        <div className="blog-details__info-box-two wow fadeInUp" {...wow}>
          <h3 className="blog-details__info__title">Conclusion</h3>
          <p className="blog-details__info__text">
            Mastering marketing funnel analytics is essential for businesses aiming to attract, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
        <blockquote className="blog-details__text-1 wow fadeInUp" {...wow}>
          "Envato has completely transformed the way I approach web design. As a designer with minimal coding skills, I can now create stunning websites that not only look great but also function seamlessly on any device. It's truly a game-changer!"
          <span className="quote-author">CEO @Nada- Leaders in Envato</span>
        </blockquote>
        <div className="blog-details__post-meta wow fadeInUp" {...wow}>
          <div className="blog-details__tags">
            <h4 className="blog-details__tags__title">Tags:</h4>
            <div className="sidebar__tags-two">
              {["Marketing", "design", "Concept"].map((t) => (
                <SmartLink to={ROUTES.blogListRight} key={t}>{t}</SmartLink>
              ))}
            </div>
          </div>
          <div className="blog-details__posts">
            <h4 className="blog-details__posts__title">Share :</h4>
            <div className="sidebar__posts-two">
              <a href="#">FB</a>
              <a href="#">IN</a>
            </div>
          </div>
        </div>
        <div className="comments-form wow fadeInUp" {...wow}>
          <h3 className="comments-form__title bw-spilt-title-two">Leave a reply</h3>
          <form className="comments-form__form contact-form-validated form-one" onSubmit={onSubmit}>
            <div className="form-one__group">
              <div className="form-one__control">
                <input type="text" name="name" placeholder="Name" required />
              </div>
              <div className="form-one__control ">
                <input type="email" name="email" placeholder="Email" required />
              </div>
              <div className="form-one__control form-one__control--full">
                <textarea name="message" placeholder="Message" required></textarea>
              </div>
              <div className="form-one__control form-one__control--full">
                <PikizButton type="submit" label="Send Message" />
              </div>
            </div>
          </form>
          <div className="result">{sent && <p>Thank you! Your reply has been sent.</p>}</div>
        </div>
      </div>
    </div>
  );
}

interface Props {
  sidebar?: "none" | "left" | "right";
}

/** Blog details: no sidebar (centered), left sidebar or right sidebar */
export default function BlogDetails({ sidebar = "none" }: Props) {
  const article = (
    <Col lg={8}>
      <Article />
    </Col>
  );
  const side = (
    <Col lg={4}>
      <BlogSidebar />
    </Col>
  );
  return (
    <Layout header={{ variant: "one" }} footer="two">
      <PageHeader className="page-header__border" title="Details" />
      <section className="blog-details">
        <div className="blog-details__top-image img-container">
          <img src={img("backgrounds/blog-detail-bg-1-1.jpg")} alt="image" />
        </div>
        <Container>
          <Row className={sidebar === "none" ? "justify-content-center" : "gutter-y-52"}>
            {sidebar === "left" && side}
            {article}
            {sidebar === "right" && side}
          </Row>
        </Container>
      </section>
      <CtaArea />
    </Layout>
  );
}
