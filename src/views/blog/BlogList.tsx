"use client";

import { Col, Container, Row } from "react-bootstrap";
import BlogCardList from "../../components/cards/BlogCardList";
import BlogSidebar from "../../components/blog/BlogSidebar";
import Pagination from "../../components/blog/Pagination";
import CtaArea from "../../components/common/CtaArea";
import PageHeader from "../../components/common/PageHeader";
import Layout from "../../components/layout/Layout";
import { listPosts } from "../../data/blogList";
import { ROUTES } from "../../data/routes";

interface Props {
  sidebar?: "none" | "left" | "right";
}

/** Blog list: no sidebar (centered), left sidebar or right sidebar */
export default function BlogList({ sidebar = "none" }: Props) {
  const linkTo = sidebar === "left" ? ROUTES.blogListLeft : ROUTES.blogListRight;
  const posts = (
    <Col lg={8}>
      <Row className="gutter-y-52">
        {listPosts.map((p) => (
          <Col xs={12} key={p.image}>
            <BlogCardList {...p} />
          </Col>
        ))}
        <Col xs={12}>
          <Pagination />
        </Col>
      </Row>
    </Col>
  );
  const side = (
    <Col lg={4}>
      <BlogSidebar aside linkTo={linkTo} />
    </Col>
  );

  return (
    <Layout header={{ variant: "one" }} footer="two">
      <PageHeader className="page-header__border" title="Blog List" />
      <section className="blog-list-page">
        <Container>
          <Row className={sidebar === "none" ? "justify-content-center" : "gutter-y-52"}>
            {sidebar === "left" && side}
            {posts}
            {sidebar === "right" && side}
          </Row>
        </Container>
      </section>
      <CtaArea />
    </Layout>
  );
}
