"use client";

import CtaArea from "../../components/common/CtaArea";
import MarqueeText from "../../components/common/MarqueeText";
import Layout from "../../components/layout/Layout";
import FaqTwo from "../../components/sections/FaqTwo";
import AboutOne from "../../components/sections/home1/AboutOne";
import BannerImageOne from "../../components/sections/home1/BannerImageOne";
import BlogOne from "../../components/sections/home1/BlogOne";
import HeroOne from "../../components/sections/home1/HeroOne";
import ProjectOne from "../../components/sections/home1/ProjectOne";
import ServiceArea from "../../components/sections/home1/ServiceArea";

interface Props {
  /** one-page variant: adds section ids + hash menu */
  onePage?: boolean;
  /** boxed layout variant */
  boxed?: boolean;
}

/** Home 1 (multi-page, one-page and boxed) */
export default function HomeOne({ onePage, boxed }: Props) {
  const id = (name: string) => (onePage ? name : undefined);
  return (
    <Layout
      header={{ variant: "two", onePage }}
      footer="two"
      bodyClass={`bg-peach ${boxed ? "boxed-wrapper" : ""}`}
    >
      <HeroOne id={id("home")} />
      <BannerImageOne />
      <AboutOne />
      <MarqueeText />
      <ProjectOne id={id("project")} />
      <ServiceArea id={id("services")} subtitle={onePage || boxed ? "What We Do" : "WHAT WE DO"} />
      <FaqTwo id={id("faq")} />
      <BlogOne id={id("blog")} />
      <CtaArea className="cta-area-two pt-0" />
    </Layout>
  );
}
