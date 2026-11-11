"use client";

import { useEffect } from "react";
import Layout from "../../components/layout/Layout";
import SectionTitle from "../../components/common/SectionTitle";
import BannerFullscreen from "../../components/sections/home2/BannerFullscreen";
import BlogTwo from "../../components/sections/home2/BlogTwo";
import CtaTwoArea from "../../components/sections/home2/CtaTwoArea";
import FaqThree from "../../components/sections/home2/FaqThree";
import HeroTwo from "../../components/sections/home2/HeroTwo";
import ServiceTwo from "../../components/sections/home2/ServiceTwo";
import StudioArea from "../../components/sections/home2/StudioArea";
import WorkArea from "../../components/sections/home2/WorkArea";
import Testimonials from "../../components/sections/Testimonials";
import TeamOne from "../../components/sections/TeamOne";
import { asset } from "../../utils";
import useStylesheet from "../../hooks/useStylesheet";

interface Props {
  /** one-page variant: adds section ids + hash menu */
  onePage?: boolean;
  /** dark skin */
  dark?: boolean;
  /** right-to-left skin */
  rtl?: boolean;
}

/** Home 2 (multi page, one page, dark and RTL variants) */
export default function HomeTwo({ onePage, dark, rtl }: Props) {
  useStylesheet(...(dark ? [asset("assets/css/pikiz-dark.css")] : []), ...(rtl ? [asset("assets/css/pikiz-rtl.css"), asset("assets/css/pikiz-custom-rtl.css")] : []));
  useEffect(() => {
    if (!rtl) return;
    document.documentElement.dir = "rtl";
    return () => {
      document.documentElement.dir = "ltr";
    };
  }, [rtl]);

  const id = (name: string) => (onePage ? name : undefined);
  return (
    <Layout
      header={{ variant: "three", logo: dark ? "light" : "dark", onePage }}
      footer="one"
    >
      <HeroTwo id={id("home")} dark={dark} />
      <BannerFullscreen />
      <StudioArea id={id("studio")} />
      <ServiceTwo id={id("services")} />
      <WorkArea />
      <Testimonials
        id={id("testimonial")}
        fadeCarousel
        heading={
          onePage ? (
            <SectionTitle subtitle="Review" title="Clients Say" />
          ) : (
            <SectionTitle
              variant="one"
              subtitle="clients says"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis cursus mi quis viverra ornare."
            />
          )
        }
      />
      <FaqThree dark={dark} />
      <TeamOne limit={3} />
      <BlogTwo id={id("blog")} />
      <CtaTwoArea withIcon={!rtl} />
    </Layout>
  );
}
