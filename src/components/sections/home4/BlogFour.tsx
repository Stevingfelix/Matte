"use client";

import { Col, Container, Row } from "react-bootstrap";
import { grumpyBlogPosts } from "../../../data/grumpy";
import { ROUTES } from "../../../data/routes";
import BlogCardTwo from "../../cards/BlogCardTwo";
import SectionTitleThree from "../../common/SectionTitleThree";

export default function BlogFour({ id, onePage }: { id?: string; onePage?: boolean }) {
  return (
    <section className="blog-four blog-four" id={id}>
      <Container>
        <div className="blog-four__top">
          <SectionTitleThree
            title="Product Notes"
            subtitle="AI & SaaS UX Playbooks"
            btnLabel={onePage ? "Work With Us" : "All Blog Post"}
            btnTo={onePage ? "#contact" : ROUTES.blogGrid}
          />
        </div>
        <Row className="gutter-y-30 gutter-x-70">
          {grumpyBlogPosts.map((p, i) => (
            <Col lg={6} key={p.image}>
              <BlogCardTwo {...p} to={onePage ? "#contact" : p.to} variant="two" iconWrapped side={i === 0 ? "left" : "right"} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
