"use client";

import CtaArea from "../../components/common/CtaArea";
import PageHeader from "../../components/common/PageHeader";
import SectionTitle from "../../components/common/SectionTitle";
import Layout from "../../components/layout/Layout";
import AboutArea from "../../components/sections/about/AboutArea";
import ApproachArea from "../../components/sections/ApproachArea";
import FaqTwo from "../../components/sections/FaqTwo";
import FunfactOne from "../../components/sections/FunfactOne";
import Testimonials from "../../components/sections/Testimonials";

export default function About() {
  return (
    <Layout header={{ variant: "one" }} footer="two">
      <PageHeader title="About" />
      <AboutArea />
      <ApproachArea />
      <FunfactOne />
      <Testimonials heading={<SectionTitle subtitle="Review" title="Clients Say" />} />
      <FaqTwo />
      <CtaArea />
    </Layout>
  );
}
