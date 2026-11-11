"use client";

import CtaArea from "../../components/common/CtaArea";
import PageHeader from "../../components/common/PageHeader";
import Layout from "../../components/layout/Layout";
import ServiceArea from "../../components/sections/home1/ServiceArea";

export default function Services() {
  return (
    <Layout header={{ variant: "one" }} footer="two">
      <PageHeader title="Services" />
      <ServiceArea subtitle="What We Do" />
      <CtaArea />
    </Layout>
  );
}
