import { gsap, ScrollTrigger } from "./gsap";
import { circleButtons, dualHoverText } from "./interactions";
import * as sections from "./sections";
import * as text from "./text";

/**
 * Wires every GSAP / ScrollTrigger effect of the template to the elements that are
 * currently in the DOM. Call after a page has mounted; the returned function
 * undoes everything (tweens, pins, split text) so the next route starts clean.
 */
export function initAnimations(): () => void {
  const cleanups: (() => void)[] = [];
  const mm = gsap.matchMedia();

  const ctx = gsap.context(() => {
    // headings first: they change layout (split lines) before triggers measure positions
    cleanups.push(text.lettersFadeIn(), text.splitTextScroll(), text.titleOne(), text.titleTwo(), text.titleThree());

    cleanups.push(sections.heroOne(mm), sections.heroFour(mm), sections.ctaTwoArea(mm));
    sections.heroTwo(mm);
    sections.heroThree(mm);
    sections.heroImageFullScreen(mm);
    sections.bannerReveals();
    sections.imageParallax(mm);
    sections.imageClipReveal();
    sections.imageHoverScrollReveal();
    sections.fadeAnimations();
    sections.scaleAnimations();
    sections.serviceAreaSlide(mm);
    sections.serviceItemScale();
    sections.workThree(mm);
    sections.approach(mm);
    sections.brandBanner(mm);
    sections.faqShapeRotate(mm);
    sections.funfactShape(mm);
    sections.ctaFooterTwo(mm);
    sections.footerCta();
    sections.footerBigText();
    sections.error404();

    cleanups.push(dualHoverText(), circleButtons(), sections.pricingStickyActive());
  });

  ScrollTrigger.sort();
  ScrollTrigger.refresh();

  // images / fonts / slick change the page height after first paint
  const timers = [setTimeout(() => ScrollTrigger.refresh(), 600), setTimeout(() => ScrollTrigger.refresh(), 2000)];
  const onLoad = () => ScrollTrigger.refresh();
  window.addEventListener("load", onLoad);

  return () => {
    timers.forEach(clearTimeout);
    window.removeEventListener("load", onLoad);
    mm.revert();
    ctx.revert();
    cleanups.reverse().forEach((fn) => fn());
  };
}
