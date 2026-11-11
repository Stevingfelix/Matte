"use client";

import { Col, Container, Row } from "react-bootstrap";
import { blogPostsTwo } from "../../../data/blog";
import BlogCardTwo from "../../cards/BlogCardTwo";
import SectionTitle from "../../common/SectionTitle";

export default function BlogTwo({ id }: { id?: string }) {
  return (
    <section className="blog-two" id={id}>
      <Container>
        <div className="blog-two__top">
          <Row className="gutter-y-30">
            <Col md={6}>
              <SectionTitle
                variant="one"
                subtitle="BLOGS "
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis cursus mi quis viverra ornare."
              />
            </Col>
            <Col md={6}>
              <SectionTitle variant="one" title="Article" />
            </Col>
          </Row>
        </div>
        <Row className="gutter-y-30 gutter-x-70">
          {blogPostsTwo.map((p, i) => (
            <Col lg={6} key={p.image}>
              <BlogCardTwo {...p} side={i === 0 ? "left" : "right"} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
