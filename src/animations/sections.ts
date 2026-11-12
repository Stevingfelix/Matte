import { all, gsap, isRtl, num, one, ScrollTrigger, SplitText } from "./gsap";

type Cleanup = () => void;
type MM = gsap.MatchMedia;

const DESKTOP = "(min-width: 992px)";
const WIDE = "(min-width: 1200px)";

/** Home one hero: big title, customer avatars, quick-discuss list */
export function heroOne(mm: MM): Cleanup {
  const splits: SplitText[] = [];
  mm.add(DESKTOP, () => {
    all(".title-anim").forEach((el) => {
      const split = SplitText.create(el, { type: "words,chars", wordsClass: "word", charsClass: "char" });
      splits.push(split);
      gsap.set(split.chars, { scaleY: 0, opacity: 0, transformOrigin: "top center" });
      const tl = gsap.timeline({ scrollTrigger: { trigger: el, start: "top 80%" } });
      split.words.forEach((word) => {
        tl.to(word.querySelectorAll(".char"), { scaleY: 1, opacity: 1, duration: 1, ease: "power3.out", stagger: 0.05 });
      });
    });

    if (one(".hero-one__customer")) {
      gsap
        .timeline({ scrollTrigger: { trigger: ".hero-one__customer", start: "top 80%" } })
        .from(".hero-one__customer__thumb img", { x: -80, opacity: 0, duration: 0.8, ease: "power3.out", stagger: 0.3 })
        .from(".hero-one__customer__funfact", { x: -60, opacity: 0, duration: 0.8, ease: "power3.out" });
    }
    if (one(".hero-one__quick-wrap")) {
      gsap
        .timeline({ scrollTrigger: { trigger: ".hero-one__quick-wrap", start: "top 80%" } })
        .from(".hero-one__quick-wrap", { x: 150, opacity: 0, duration: 1, ease: "power3.out", stagger: 0.3 })
        .from(".hero-one__list-wrap ul li", { x: 150, opacity: 0, duration: 1.5, ease: "power3.out", stagger: 0.3 });
    }
  });
  return () => splits.forEach((s) => s.revert());
}

export function heroTwo(mm: MM) {
  mm.add(DESKTOP, () => {
    if (!one(".hero-two__funfact")) return;
    gsap
      .timeline({ scrollTrigger: { trigger: ".hero-two__funfact", start: "top 80%" } })
      .from(".hero-two__funfact", { x: 250, opacity: 0, duration: 1, ease: "power3.out" })
      .from(".hero-two__list-wrap ul li", { x: 150, opacity: 0, duration: 1, ease: "power3.out", stagger: 0.2 });
  });
}

export function heroThree(mm: MM) {
  mm.add(DESKTOP, () => {
    if (!one(".hero-three__top")) return;
    const tl = gsap.timeline({ scrollTrigger: { trigger: ".hero-three__top", start: "top 85%" } });
    if (one(".hero-three__top__left")) {
      tl.from(".hero-three__top__left", { x: -80, opacity: 0, duration: 0.9, ease: "power3.out" });
    }
    tl.from(".hero-three__customer__thumb img", { x: -150, opacity: 0, duration: 1, ease: "power3.out", stagger: 0.2 }, "<")
      .from(".hero-three__customer__funfact", { x: 150, opacity: 0, duration: 1, ease: "power3.out" }, "<");
  });
}

/** Home four hero: title letters + list + image, then the pinned spinning banner */
export function heroFour(mm: MM): Cleanup {
  const splits: SplitText[] = [];
  if (!one(".hero-four")) return () => {};

  all(".hero-four__title-box").forEach((box) => {
    const split = SplitText.create(box, { type: "chars", charsClass: "char-inner" });
    splits.push(split);
    gsap.set(split.chars, { y: 100, opacity: 0, rotateX: -90, filter: "blur(10px)" });
    gsap.to(split.chars, {
      y: 0,
      opacity: 1,
      rotateX: 0,
      filter: "blur(0px)",
      duration: 0.8,
      ease: "power4.out",
      stagger: 0.1,
      scrollTrigger: { trigger: box, start: "top 85%", toggleActions: "play none none reverse" },
    });
  });

  gsap
    .timeline({ scrollTrigger: { trigger: ".hero-four__list-wrap", start: "top 80%" } })
    .from(".hero-four__list-wrap ul li", { x: -150, opacity: 0, duration: 1, ease: "power3.out", stagger: 0.3 });

  gsap
    .timeline({ scrollTrigger: { trigger: ".hero-four__thumb", start: "top 80%" } })
    .from(".hero-four__thumb img", { x: 150, opacity: 0, duration: 1, delay: 0.5, ease: "power3.out", stagger: 0.3 })
    .fromTo(".hero-four__text", { y: 150, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" });

  mm.add(DESKTOP, () => {
    const banner = one(".hero-four__banner__move");
    const inner = one(".hero-four__banner__box");
    if (!banner || !inner) return;
    gsap
      .timeline({
        scrollTrigger: { trigger: ".hero-four", start: "top -100%", end: "+=200%", pin: true, pinSpacing: true, scrub: 1.3, anticipatePin: 1 },
      })
      .to(banner, { y: "120vh", ease: "none", duration: 1 })
      .to(inner, { x: "-55%", rotation: 360, ease: "none", duration: 1 })
      .to(banner, { x: "55%", y: "120vh", left: "50%", top: "50%", xPercent: -50, yPercent: -50, ease: "none" })
      .to(banner, { width: "100vw", height: "100vh", borderRadius: 0, ease: "none" })
      .to(inner, { maskImage: "none", webkitMaskImage: "none", ease: "none" }, "<");
  });
  return () => splits.forEach((s) => s.revert());
}

/** Full-screen hero image that grows to cover the viewport (home two) */
export function heroImageFullScreen(mm: MM) {
  mm.add(WIDE, () => {
    const hero = one(".banner-image__fullscreen");
    const box = one(".banner-image__fullscreen .banner-image__box");
    if (!hero || !box) return;
    gsap.to(box, {
      width: "100vw",
      height: "100vh",
      ease: "power4.inOut",
      scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: 1, pin: true },
    });
  });
}

export function bannerReveals() {
  const one1 = all(".banner-image__wrap__shape");
  if (one1.length) {
    gsap.fromTo(
      one1,
      { y: 0 },
      {
        y: (i: number) => (i % 2 === 0 ? "-100%" : "100%"),
        ease: "power3.out",
        duration: 1,
        scrollTrigger: { trigger: ".banner-image__one", start: "top 30%", toggleActions: "play none none reverse" },
      }
    );
  }
  const three = all(".banner-image__three__wrap__shape");
  if (three.length) {
    gsap.to(three, {
      width: "0%",
      duration: 0.5,
      ease: "power3.inOut",
      stagger: 0.05,
      scrollTrigger: { trigger: ".banner-image__three", start: "top 30%", toggleActions: "play none none reverse" },
    });
  }
}

/** `.scale` blocks and their images zoom while scrolling through */
export function scaleAnimations() {
  all(".scale").forEach((item) => {
    gsap.to(item, {
      scale: 1,
      duration: 1,
      ease: "power1.out",
      scrollTrigger: { trigger: item, start: "top bottom", end: "bottom top", toggleActions: "play reverse play reverse" },
    });
  });
  all(".scale img").forEach((image) => {
    gsap.set(image, { scale: 1.3 });
    gsap.to(image, {
      scale: 1,
      duration: 1,
      ease: "power1.out",
      scrollTrigger: { trigger: image, start: "top bottom", end: "bottom top", toggleActions: "play reverse play reverse" },
    });
  });
}

/** `.bw-img-anim-left/right` clip-path reveals */
export function imageClipReveal() {
  all(".bw-img-anim-left, .bw-img-anim-right").forEach((img) => {
    gsap.to(img, {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: { trigger: img, start: "top 80%", toggleActions: "play none none reverse" },
    });
  });
}

/** parallax on `.img-container img` */
export function imageParallax(mm: MM) {
  mm.add(DESKTOP, () => {
    all(".img-container").forEach((wrap) => {
      const image = wrap.querySelector("img");
      if (!image) return;
      gsap.fromTo(image, { y: "-10%" }, { y: "10%", ease: "none", scrollTrigger: { trigger: wrap, scrub: true } });
    });
  });
}

export function imageHoverScrollReveal() {
  all(".image-hover").forEach((el) => {
    gsap.to(el, {
      "--before-x": "-100%",
      "--after-x": "100%",
      scrollTrigger: { trigger: el, start: "top 80%", end: "top 30%", scrub: true },
    });
  });
}

/** `.bwfade-anim` — generic fade-in driven by data-* attributes */
export function fadeAnimations() {
  all(".bwfade-anim").forEach((item) => {
    const direction = item.getAttribute("data-direction") ?? "bottom";
    const offset = num(item, "data-offset", 50);
    const vars: gsap.TweenVars = {
      opacity: 0,
      ease: item.getAttribute("data-ease") ?? "power2.out",
      duration: num(item, "data-duration", 1.15),
      delay: num(item, "data-delay", 0.15),
    };
    if (direction === "top") vars.y = -offset;
    if (direction === "bottom") vars.y = offset;
    if (direction === "left") vars.x = -offset;
    if (direction === "right") vars.x = offset;
    if (num(item, "data-on-scroll", 1) === 1) vars.scrollTrigger = { trigger: item, start: "top 85%" };
    gsap.from(item, vars);
  });
}

/** service cards slide in from the right while scrolling the list (home one) */
export function serviceAreaSlide(mm: MM) {
  mm.add(DESKTOP, () => {
    const area = one(".service-area");
    const boxes = area ? all(".service-card", area) : [];
    const inner = area ? one(".service-area__inner", area) : null;
    if (!area || !boxes.length || !inner) return;
    gsap.from(boxes, {
      x: "100%",
      duration: 1,
      stagger: 0.3,
      ease: "power2.out",
      scrollTrigger: { scrub: 2, trigger: inner, start: "top 90%", end: "bottom 10%", toggleActions: "play none none reverse" },
    });
  });
}

/** service list items scale/fade into place (homes two, three, four) */
export function serviceItemScale() {
  all(".service-two__item, .service-three__item").forEach((item) => {
    gsap.to(item, {
      scale: 1,
      opacity: 1,
      y: 0,
      ease: "power3.out",
      scrollTrigger: { trigger: item, start: "top 90%", end: "bottom 60%", scrub: 0.5, invalidateOnRefresh: true },
    });
  });
  all(".service-four__item").forEach((item) => {
    gsap.to(item, {
      opacity: 1,
      scale: 1,
      x: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: item,
        start: "top 90%",
        end: "bottom 60%",
        scrub: 0.5,
        invalidateOnRefresh: true,
        toggleActions: "play reverse play reverse",
      },
    });
  });
}

/** home three: work cards fly in from both sides as pairs */
export function workThree(mm: MM) {
  mm.add(DESKTOP, () => {
    all(".work-three-wrap").forEach((wrap) => {
      all(".item:nth-child(odd)", wrap).forEach((pair) => {
        const a = pair.querySelector<HTMLElement>(".work-three-style-one");
        const b = pair.nextElementSibling?.querySelector<HTMLElement>(".work-three-style-two");
        if (!a || !b) return;
        gsap.set(a, { xPercent: -120, rotate: -40 });
        gsap.set(b, { xPercent: 120, rotate: 40 });
        gsap
          .timeline({ scrollTrigger: { trigger: pair, start: "top 90%", end: "top 20%", scrub: 1 } })
          .to(a, { xPercent: 0, rotate: 0, ease: "none" }, 0)
          .to(b, { xPercent: 0, rotate: 0, ease: "none" }, 0);
      });
    });
  });
}

/** pinned "approach" block that slides into place (about, home four) */
export function approach(mm: MM) {
  mm.add(DESKTOP, () => {
    const box = one(".approach-area__content__box");
    if (!box) return;
    gsap.set(box, { x: 440, y: -80 });
    gsap.to(box, {
      x: 0,
      y: 0,
      ease: "power3.out",
      scrollTrigger: { trigger: ".approach-area", start: "top top", end: "+=120%", scrub: 1, pin: true },
    });
  });
}

/** pinned brand banner with parallax background (home three) */
export function brandBanner(mm: MM) {
  mm.add(DESKTOP, () => {
    all(".brand-banner__item").forEach((item) => {
      const bg = one(".brand-banner__item__bg", item);
      const overlay = one(".brand-banner__item__shape", item);
      const texts = all(".brand-banner__item__text", item);
      const textBox = one(".brand-banner__item__text-box", item);
      if (!bg || !overlay || !textBox) return;
      gsap
        .timeline({ scrollTrigger: { trigger: item, start: "top top", end: "+=120%", scrub: 1, pin: true } })
        .from(bg, { scale: 1.3, y: 150, ease: "none" }, 0)
        .to(texts, { y: 0, stagger: 0.15, ease: "power4.out", duration: 1 }, 0.2)
        .to(textBox, { y: -200, ease: "none" }, 0.5)
        .to(overlay, { autoAlpha: 0.7, ease: "none", duration: 0.6 }, 0.5);
    });
  });
}

/** the diamond in faq-three falls, spins and floods the screen */
export function faqShapeRotate(mm: MM) {
  mm.add(WIDE, () => {
    const svg = one(".faq-shape-svg");
    const path = one(".faq-shape-svg path");
    if (!svg || !path) return;
    gsap
      .timeline({ scrollTrigger: { trigger: ".faq-three", start: "top -100%", end: "+=200%", pin: true, scrub: 1.3, anticipatePin: 1 } })
      .to(svg, { y: "120vh", ease: "none", duration: 1 })
      .to(svg, { rotation: 720, scale: 20, transformOrigin: "50% 50%", ease: "none", duration: 1 })
      .to(path, { fill: "#FFF5F0", ease: "none", duration: 1 }, "<")
      .to(".faq-three", { backgroundColor: "#FFF5F0", duration: 0.45 }, "-=0.50");
  });
}

/** same trick for the round shape in "Strategic Actions" */
export function funfactShape(mm: MM) {
  mm.add(WIDE, () => {
    const shape = one(".funfact-one__shape");
    if (!shape) return;
    const reveal = one(".funfact-one__reveal");
    const tl = gsap
      .timeline({ scrollTrigger: { trigger: ".funfact-one", start: "top -120%", end: "+=200%", pin: true, scrub: 1.3, anticipatePin: 1 } })
      .to(shape, { y: "100vh", ease: "none", duration: 1 })
      .to(shape, { x: "55%", ease: "none", duration: 1 })
      .to(shape, { rotation: 720, scale: 20, transformOrigin: "50% 50%", ease: "none", duration: 1 })
      .to(
        ".funfact-one__top, .funfact-one__content > :not(.funfact-one__shape), .funfact-one__content-box",
        { opacity: 0, pointerEvents: "none", duration: 0.35 },
        "-=0.55"
      )
      .to(".funfact-one", { backgroundColor: "#0C0610", duration: 0.45 }, "-=0.50");

    if (reveal) {
      tl.to(
        reveal,
        { opacity: 1, y: 0, scale: 1, pointerEvents: "auto", duration: 0.9, ease: "power3.out" },
        "-=0.30"
      ).to({}, { duration: 0.55 });
    }
  });
}

/** "Let's create together" — pinned, text wipes in then zooms through (home two) */
export function ctaTwoArea(mm: MM): Cleanup {
  const splits: SplitText[] = [];
  mm.add(DESKTOP, () => {
    const section = one(".cta-two-area");
    if (!section) return;
    const lines = all(".bw_line", section);
    const rtl = isRtl();
    const tl = gsap.timeline({ scrollTrigger: { trigger: section, pin: true, scrub: 1, start: "top top", end: "bottom+=1500 top" } });
    const split = SplitText.create(lines, { type: "lines" });
    splits.push(split);
    split.lines.forEach((line) => {
      gsap.fromTo(
        line,
        { backgroundPositionX: rtl ? "0%" : "100%" },
        { backgroundPositionX: rtl ? "100%" : "0%", ease: "none", scrollTrigger: { trigger: line, scrub: 1, start: "top 25%", end: "center 25%" } }
      );
    });
    tl.to(one(".cta-two-area-scale", section), { scale: 40, opacity: 0, ease: "power4.inOut", delay: 0.35, duration: 0.75 });
    tl.to(section, { backgroundColor: "#0C0610", duration: 0.45 }, "-=0.50");
  });
  return () => splits.forEach((s) => s.revert());
}

/** home four closing banner */
export function ctaFooterTwo(mm: MM) {
  mm.add(DESKTOP, () => {
    if (!one(".cta-footer-two")) return;
    gsap
      .timeline({ scrollTrigger: { trigger: ".cta-footer-two", start: "bottom 100%", end: "+=200%", scrub: true, pin: true, anticipatePin: 1 } })
      .to(".cta-footer-two__bg", { opacity: 1, duration: 1, scale: 1, ease: "none" })
      .to(".cta-footer-two__content", { scale: 1, filter: "blur(0px)", duration: 2, ease: "power2.out" }, ">-=0.2");
  });
}

/** "Let's Work" banner above the footer grows to fill the screen */
export function footerCta() {
  if (!one(".footer__cta")) return;
  gsap
    .timeline({ ease: "none", scrollTrigger: { trigger: ".footer__cta", pin: true, pinSpacing: true, scrub: 2, start: "bottom 100%", end: "200%" } })
    .to(".footer__cta .footer__cta__bg", { scale: 10, delay: 0.1, ease: "power2.in" })
    .to(".footer__cta .footer__cta__title", { fontSize: "clamp(32px, 12vw, 140px)", ease: "power2.in" }, "<")
    .to(".footer__cta .footer__cta__link", { fontSize: "clamp(14px, 2.5vw, 32px)", ease: "power2.in" }, "<");
}

/** huge PIKIZ lettering in the footers */
export function footerBigText() {
  if (one(".main-footer__big-text")) {
    gsap
      .timeline({ scrollTrigger: { trigger: ".main-footer__big-text", start: "top 80%", toggleActions: "play none none none", once: true } })
      .from(".main-footer__big-text", { x: 300, opacity: 0, duration: 1.2, ease: "power4.out" })
      .fromTo(
        ".main-footer__big-text span",
        { scaleY: 1 },
        { scaleY: 1.6, duration: 0.35, yoyo: true, repeat: 1, stagger: 0.12, ease: "power2.out" },
        "-=0.3"
      );
  }
  if (one(".main-footer__big-text-two")) {
    gsap
      .timeline({ scrollTrigger: { trigger: ".main-footer__big-text-two", start: "top 90%", toggleActions: "play none none none", once: true } })
      .fromTo(
        ".main-footer__big-text-two span",
        { scaleY: 1 },
        { scaleY: 0.6, duration: 0.35, yoyo: true, repeat: 1, stagger: 0.18, ease: "power3.out" }
      );
  }
}

/** 404 page entrance */
export function error404() {
  if (!one(".error-404")) return;
  gsap
    .timeline()
    .from(".error-404__title > span", { duration: 1.5, y: "-100vh", opacity: 0, ease: "power3.out", stagger: 0.2 })
    .from(".error-404__subtitle", { duration: 1, y: 40, opacity: 0, ease: "power3.out" }, "-=0.3")
    .from(".error-404__shape img", { duration: 1, x: 40, opacity: 0, ease: "power3.out" }, "-=0.3")
    .from(".error-404__text", { duration: 1, y: 40, opacity: 0, ease: "power3.out" }, "-=0.6");
}

/**
 * Pricing tabs: the stacked card (and its plan on the left) that reaches mid-screen becomes
 * `.active`; hovering a plan previews its tab, clicking scrolls to its card.
 * The index is derived from the (non-sticky) tab box, so it stays correct no matter
 * when ScrollTrigger measured the sticky cards.
 */
export function pricingStickyActive(): () => void {
  const box = one(".pricing-one__tab-box");
  const cards = all(".pricing-card-box .pricing-card");
  const plans = all(".pricing-card-categories-plan__item");
  if (!box || !cards.length || cards.length !== plans.length) return () => {};

  const setActive = (index: number) => {
    cards.forEach((c, i) => c.classList.toggle("active", i === index));
    plans.forEach((p, i) => p.classList.toggle("active", i === index));
  };
  const step = () => cards[0].offsetHeight + (parseFloat(getComputedStyle(cards[1] ?? cards[0]).marginTop) || 30);
  const indexAtScroll = () => {
    const rect = box.getBoundingClientRect();
    const i = Math.floor((window.innerHeight / 2 - rect.top) / step());
    return Math.min(cards.length - 1, Math.max(0, i));
  };

  ScrollTrigger.create({
    trigger: box,
    start: "top bottom",
    end: "bottom top",
    onUpdate: () => setActive(indexAtScroll()),
    onRefresh: () => setActive(indexAtScroll()),
  });

  const undo: (() => void)[] = [];
  plans.forEach((plan, index) => {
    const hover = () => setActive(index);
    const click = () => {
      const top = box.getBoundingClientRect().top + window.scrollY;
      gsap.to(window, { scrollTo: { y: top + index * step() - window.innerHeight / 2 + 10 }, duration: 0.8, ease: "power2.out" });
      setActive(index);
    };
    plan.addEventListener("mouseenter", hover);
    plan.addEventListener("click", click);
    plan.style.cursor = "pointer";
    undo.push(() => {
      plan.removeEventListener("mouseenter", hover);
      plan.removeEventListener("click", click);
      plan.style.cursor = "";
    });
  });
  return () => undo.forEach((fn) => fn());
}
