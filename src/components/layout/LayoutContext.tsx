"use client";

import { createContext, useContext } from "react";
import { BRANDS, type BrandConfig } from "../../data/brands";

interface LayoutState {
  mobileNavOpen: boolean;
  toggleMobileNav: () => void;
  closeMobileNav: () => void;
  sidebarOpen: boolean;
  setSidebarOpen: (v: boolean) => void;
  brand: BrandConfig;
}

export const LayoutContext = createContext<LayoutState>({
  mobileNavOpen: false,
  toggleMobileNav: () => {},
  closeMobileNav: () => {},
  sidebarOpen: false,
  setSidebarOpen: () => {},
  brand: BRANDS.default,
});

export const useLayout = () => useContext(LayoutContext);
