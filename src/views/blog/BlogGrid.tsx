"use client";

import CtaArea from "../../components/common/CtaArea";
import PageHeader from "../../components/common/PageHeader";
import Layout from "../../components/layout/Layout";
import BlogOne from "../../components/sections/home1/BlogOne";

export default function BlogGrid() {
  return (
    <Layout header={{ variant: "one" }} footer="two">
      <PageHeader className="page-header__border" title="Our Blog" />
      <BlogOne grid />
      <CtaArea />
    </Layout>
  );
}
