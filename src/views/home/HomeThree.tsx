"use client";

import Layout from "../../components/layout/Layout";
import ContactSection from "../../components/sections/ContactSection";
import FaqFour from "../../components/sections/FaqFour";
import FunfactOne from "../../components/sections/FunfactOne";
import PricingOne from "../../components/sections/PricingOne";
import BannerImageThree from "../../components/sections/home3/BannerImageThree";
import BlogThree from "../../components/sections/home3/BlogThree";
import BrandBanner from "../../components/sections/home3/BrandBanner";
import HeroThree from "../../components/sections/home3/HeroThree";
import ServiceThree from "../../components/sections/home3/ServiceThree";
import TestimonialsThree from "../../components/sections/home3/TestimonialsThree";
import WorkThree from "../../components/sections/home3/WorkThree";
import CtaFooterTwo from "../../components/sections/home4/CtaFooterTwo";
import { BRANDS } from "../../data/brands";
import { matteMultiMenu, matteOnePageMenu } from "../../data/navigation";

const matteFunfacts = {
  title: "Product Impact",
  intro:
    "From ambitious startups to category-leading brands, Matte pairs sharp digital strategy with high-converting craft to deliver measurable growth.",
  stats: [
    { text: "Digital Launches\nShipped", stop: 140, suffix: "+", delay: "100ms" },
    { text: "Monthly Visitors\nDriven", stop: 3.8, suffix: "M", delay: "300ms" },
    { text: "Client Revenue\nGenerated", stop: 65, suffix: "M", prefix: "$", delay: "500ms" },
  ],
  reveal: {
    eyebrow: "Inside Matte Studio",
    title: "Built To Make Brands",
    highlight: "Unignorable.",
    text: "We unite sharp positioning, editorial design systems, and measurable acquisition loops so every launch moves revenue.",
    pillars: ["01 · Brand Systems", "02 · Conversion Web", "03 · Growth Loops"],
    ctaLabel: "Explore Services",
    ctaTo: "#services",
  },
};

/** Home 3 — Matte (multi page + one page) */
export default function HomeThree({ onePage }: { onePage?: boolean }) {
  return (
    <Layout
      overflowVisible
      brand={BRANDS.matte}
      header={{
        variant: "five",
        sidePanelTrigger: true,
        sidePanelLabel: "Subscribe",
        onePage,
        menuItems: onePage ? matteOnePageMenu : matteMultiMenu,
        ctaTo: onePage ? "#contact" : undefined,
      }}
      footer="one"
    >
      <HeroThree id="home" onePage={onePage} />
      <BannerImageThree />
      <WorkThree id="work" onePage={onePage} />
      <FunfactOne id="impact" {...matteFunfacts} />
      <ServiceThree id="services" onePage={onePage} />
      <TestimonialsThree id="testimonial" />
      <BrandBanner />
      <PricingOne id="pricing" ctaTo={onePage ? "#contact" : undefined} topSpace />
      <FaqFour id="faq" subtitle="FAQS" />
      <BlogThree id="blog" onePage={onePage} />
      <ContactSection id="contact" />
      <CtaFooterTwo onePage={onePage} highlight="Design" titleRest="Is Our Obsession." />
    </Layout>
  );
}
