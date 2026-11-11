import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, SplitText);

export { gsap, ScrollTrigger, SplitText };

/** querySelectorAll as a real array of HTMLElements */
export const all = (selector: string, root: ParentNode = document) => Array.from(root.querySelectorAll<HTMLElement>(selector));

/** first match or null */
export const one = (selector: string, root: ParentNode = document) => root.querySelector<HTMLElement>(selector);

/** numeric data-* attribute with fallback */
export const num = (el: Element, attr: string, fallback: number) => {
  const v = parseFloat(el.getAttribute(attr) ?? "");
  return Number.isNaN(v) ? fallback : v;
};

export const isRtl = () => document.documentElement.dir === "rtl";
