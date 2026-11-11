"use client";

import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { BRANDS, type BrandConfig } from "../../data/brands";
import useBodyClass from "../../hooks/useBodyClass";
import useGsapAnimations from "../../hooks/useGsapAnimations";
import useWow from "../../hooks/useWow";
import CustomCursor from "./CustomCursor";
import Footer, { type FooterProps } from "./Footer";
import FooterCta from "./FooterCta";
import Header, { type HeaderProps } from "./Header";
import HeaderSidebar from "./HeaderSidebar";
import { LayoutContext } from "./LayoutContext";
import MobileNav from "./MobileNav";
import Preloader from "./Preloader";
import ScrollTop from "./ScrollTop";

interface LayoutProps {
  children: ReactNode;
  header?: HeaderProps;
  footer?: FooterProps["variant"] | false;
  /** render the "Let's Work" banner above the footer */
  footerCta?: boolean;
  /** extra classes for <body> (e.g. "bg-peach", "boxed-wrapper") */
  bodyClass?: string;
  /** lets `position: sticky` children work (pricing, faq, team carousel pages) */
  overflowVisible?: boolean;
  /** brand identity overrides for rebranded landing pages */
  brand?: BrandConfig;
}

/** Shared page shell: preloader, header, mobile drawer, footer, scroll-top */
export default function Layout({ children, header, footer = "two", footerCta, bodyClass = "", overflowVisible, brand = BRANDS.default }: LayoutProps) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useBodyClass(`body-wrapper ${bodyClass}`);
  useWow();
  useGsapAnimations();

  useEffect(() => {
    document.body.classList.toggle("locked", mobileNavOpen || sidebarOpen);
    return () => document.body.classList.remove("locked");
  }, [mobileNavOpen, sidebarOpen]);

  const toggleMobileNav = useCallback(() => setMobileNavOpen((o) => !o), []);
  const closeMobileNav = useCallback(() => setMobileNavOpen(false), []);

  const ctx = useMemo(
    () => ({ mobileNavOpen, toggleMobileNav, closeMobileNav, sidebarOpen, setSidebarOpen, brand }),
    [mobileNavOpen, toggleMobileNav, closeMobileNav, sidebarOpen, brand]
  );

  return (
    <LayoutContext.Provider value={ctx}>
      <CustomCursor />
      <Preloader letters={brand.letters} />
      <div className={`page-wrapper ${overflowVisible ? "overflow-visible" : ""}`.trim()}>
        <Header {...header} />
        {children}
        {footerCta && <FooterCta />}
        {footer && <Footer variant={footer} />}
      </div>
      <MobileNav onePage={header?.onePage} menuItems={header?.menuItems} />
      {header?.sidePanelTrigger && <HeaderSidebar />}
      <div className="bw-blur-bottom"></div>
      <ScrollTop />
    </LayoutContext.Provider>
  );
}
