"use client";

import type { ComponentType, ReactNode } from "react";
import SlickImport, { type Settings } from "react-slick";

// react-slick is CommonJS; depending on the bundler the default import is wrapped in { default }
const Slider = ((SlickImport as unknown as { default?: unknown }).default ?? SlickImport) as ComponentType<Settings>;

interface Props extends Settings {
  children: ReactNode;
  className?: string;
}

/**
 * Thin wrapper over react-slick that applies the template's
 * `pikiz-slick__carousel` styling hook. Pass any slick setting as a prop.
 */
export default function PikizSlider({ children, className = "", ...settings }: Props) {
  return (
    <Slider
      className={`pikiz-slick__carousel ${className}`.trim()}
      // match jquery-slick markup: react-slick forces `display: block` on the dots list and renders page numbers
      appendDots={(dots) => <ul style={{ display: "flex" }}>{dots}</ul>}
      customPaging={() => <button type="button" aria-label="slide" />}
      {...settings}
    >
      {children}
    </Slider>
  );
}
