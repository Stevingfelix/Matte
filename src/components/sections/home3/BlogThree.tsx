"use client";

import { Col, Container, Row } from "react-bootstrap";
import { blogPostsTwo } from "../../../data/blog";
import { img } from "../../../utils";
import BlogCardTwo from "../../cards/BlogCardTwo";

export default function BlogThree({ id, onePage }: { id?: string; onePage?: boolean }) {
  const [first, second] = blogPostsTwo;
  const secondPost = second ?? first;
  return (
    <section className="blog-three" id={id}>
      <Container>
        <Row className="gutter-y-30 gutter-x-70">
          <Col lg={6}>
            <div className="blog-three__top">
              <div className="sec-title">
                <h2 className="sec-title__title bw-spilt-title-one" data-delay="0.8">Article</h2>
                <p className="sec-title__text bw-split-text">
                  Insights on brand positioning, digital growth, and product craft from the Matte studio team.
                </p>
              </div>
            </div>
            <BlogCardTwo {...first} to={onePage ? "#contact" : first.to} variant="two" side="left" />
          </Col>
          <Col lg={6}>
            <BlogCardTwo {...secondPost} to={onePage ? "#contact" : secondPost.to} variant="two" side="right" />
            <div className="blog-three__shape">
              <img src={img("shapes/blog-shape-1-1.png")} alt="spane" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
