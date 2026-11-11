"use client";

import CtaArea from "../../components/common/CtaArea";
import PageHeader from "../../components/common/PageHeader";
import Layout from "../../components/layout/Layout";
import ProjectOne from "../../components/sections/home1/ProjectOne";

export default function Work() {
  return (
    <Layout header={{ variant: "one" }} footer="two">
      <PageHeader className="page-header__border" title="Work" />
      <ProjectOne withTop />
      <CtaArea />
    </Layout>
  );
}
