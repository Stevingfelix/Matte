"use client";

import { Col, Container, Row } from "react-bootstrap";
import { blogPosts } from "../../../data/content";
import BlogCard from "../../cards/BlogCard";
import SectionTitle from "../../common/SectionTitle";

interface Props {
  id?: string;
  /** blog grid page: different heading and fadeInUp cards */
  grid?: boolean;
}

export default function BlogOne({ id, grid }: Props) {
  return (
    <section className={`blog-one ${grid ? "" : "blog-one--one"}`.trim()} id={id}>
      <Container>
        <div className="blog-one__top">
          {grid ? (
            <Row className="align-items-center gutter-y-30">
              <Col lg={8}>
                <div className="sec-title">
                  <h2 className="sec-title__title bw-spilt-title-one">Learn Our Recent News & Insights</h2>
                </div>
              </Col>
              <Col lg={4}>
                <div className="sec-title">
                  <p className="sec-title__text bw-split-text">
                    Crafted with creativity and passion. Let’s stay connected reach out anytime! we create solutions that blend creativity, strategy, and technology.
                  </p>
                </div>
              </Col>
            </Row>
          ) : (
            <SectionTitle subtitle="Blog & ARTICLE " title="Latest Post" />
          )}
        </div>
        <Row className="gutter-y-30">
          {blogPosts.map((p) => (
            <Col xs={12} key={p.image}>
              <BlogCard {...p} animation={grid ? "fadeInUp" : "fadeInRight"} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
