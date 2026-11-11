"use client";

import SectionTitle from "../../components/common/SectionTitle";
import Layout from "../../components/layout/Layout";
import ApproachArea from "../../components/sections/ApproachArea";
import ContactSection from "../../components/sections/ContactSection";
import FaqFour from "../../components/sections/FaqFour";
import FunfactOne from "../../components/sections/FunfactOne";
import PricingOne from "../../components/sections/PricingOne";
import Testimonials from "../../components/sections/Testimonials";
import BlogFour from "../../components/sections/home4/BlogFour";
import CtaFooterTwo from "../../components/sections/home4/CtaFooterTwo";
import HeroFour from "../../components/sections/home4/HeroFour";
import ServiceFour from "../../components/sections/home4/ServiceFour";
import WorkFour from "../../components/sections/home4/WorkFour";
import { BRANDS } from "../../data/brands";
import {
  grumpyApproach,
  grumpyFaqs,
  grumpyFunfacts,
  grumpyPricingPlans,
  grumpyTestimonials,
} from "../../data/grumpy";
import { grumpyMultiMenu, grumpyOnePageMenu } from "../../data/navigation";

/** Home 4 — Grumpy: AI Product & SaaS UX/UI Design Agency (multi page + one page) */
export default function HomeFour({ onePage }: { onePage?: boolean }) {
  const id = (name: string) => (onePage ? name : undefined);
  return (
    <Layout
      overflowVisible
      brand={BRANDS.grumpy}
      header={{
        variant: "four",
        sidePanelTrigger: true,
        onePage,
        menuItems: onePage ? grumpyOnePageMenu : grumpyMultiMenu,
        ctaTo: onePage ? "#contact" : undefined,
      }}
      footer="three"
    >
      <HeroFour id={id("home")} onePage={onePage} />
      <WorkFour id={id("work")} onePage={onePage} />
      <ApproachArea {...grumpyApproach} />
      <FunfactOne {...grumpyFunfacts} />
      <ServiceFour id={id("services")} onePage={onePage} />
      <Testimonials
        id={id("testimonial")}
        items={grumpyTestimonials}
        memberCount={85}
        memberSuffix="+"
        memberText="AI & SaaS teams trust our product UX"
        heading={
          <SectionTitle
            variant="one"
            subtitle="Founder Reviews"
            title="SaaS Teams Say"
          />
        }
      />
      <PricingOne
        id={id("pricing")}
        topSpace
        plans={grumpyPricingPlans}
        heading="Product Design Sprints & Pods"
        subheading="Transparent monthly pods and fixed-scope UX audits built for fast-moving AI & SaaS teams."
        ctaTo={onePage ? "#contact" : undefined}
      />
      <FaqFour
        id={id("faq")}
        subtitle="FAQS"
        heading="AI & SaaS UX Questions, Answered"
        intro="Everything founders and product leaders ask before kicking off a sprint or product design pod with Grumpy."
        items={grumpyFaqs}
      />
      <BlogFour id={id("blog")} onePage={onePage} />
      <ContactSection id={id("contact")} />
      <CtaFooterTwo onePage={onePage} />
    </Layout>
  );
}
