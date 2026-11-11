import { all, gsap, SplitText } from "./gsap";

type Cleanup = () => void;

/**
 * Circle buttons: the hover dot follows the cursor entry point and the whole
 * button is magnetically pulled toward the pointer. Delegated, so carousel
 * clones and later-mounted buttons work too.
 */
export function circleButtons(): Cleanup {
  const placeDot = (e: MouseEvent) => {
    const btn = (e.target as HTMLElement | null)?.closest<HTMLElement>(".pikiz-circle-btn");
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const dot = btn.querySelector<HTMLElement>(".pikiz-circle-btn__dot");
    if (dot) {
      dot.style.left = `${e.clientX - rect.left}px`;
      dot.style.top = `${e.clientY - rect.top}px`;
    }
  };

  const pull = (e: MouseEvent) => {
    const wrap = (e.target as HTMLElement | null)?.closest<HTMLElement>(".pikiz-circle-btn__wrapper");
    const btn = wrap?.querySelector<HTMLElement>(".pikiz-circle-btn");
    if (!wrap || !btn) return;
    const rect = wrap.getBoundingClientRect();
    gsap.to(btn, {
      duration: 0.5,
      x: ((e.clientX - rect.left - rect.width / 2) / rect.width) * 80,
      y: ((e.clientY - rect.top - rect.height / 2) / rect.height) * 80,
      ease: "power2.out",
    });
  };

  const release = (e: MouseEvent) => {
    const wrap = (e.target as HTMLElement | null)?.closest<HTMLElement>(".pikiz-circle-btn__wrapper");
    const btn = wrap?.querySelector<HTMLElement>(".pikiz-circle-btn");
    if (wrap && btn && !wrap.contains(e.relatedTarget as Node | null)) {
      gsap.to(btn, { duration: 0.5, x: 0, y: 0, ease: "power2.out" });
    }
  };

  document.addEventListener("mouseover", placeDot);
  document.addEventListener("mouseout", placeDot);
  document.addEventListener("mousemove", pull);
  document.addEventListener("mouseout", release);
  return () => {
    document.removeEventListener("mouseover", placeDot);
    document.removeEventListener("mouseout", placeDot);
    document.removeEventListener("mousemove", pull);
    document.removeEventListener("mouseout", release);
  };
}

/** footer social links: letters roll upwards on hover */
export function dualHoverText(): Cleanup {
  const undo: Cleanup[] = [];
  all(".footer-widget__social-link a").forEach((link) => {
    const original = link.innerHTML;
    const text = (link.textContent ?? "").trim();
    link.innerHTML = `<span class="social-wrap"><span class="social-top">${text}</span><span class="social-bottom">${text}</span></span>`;
    const top = SplitText.create(link.querySelector(".social-top")!, { type: "chars" });
    const bottom = SplitText.create(link.querySelector(".social-bottom")!, { type: "chars" });
    gsap.set(bottom.chars, { y: "100%" });
    const tl = gsap
      .timeline({ paused: true })
      .to(top.chars, { y: "-100%", stagger: 0.03, duration: 0.4, ease: "power2.out" })
      .to(bottom.chars, { y: "0%", stagger: 0.03, duration: 0.4, ease: "power2.out" }, 0);
    const enter = () => tl.play();
    const leave = () => tl.reverse();
    link.addEventListener("mouseenter", enter);
    link.addEventListener("mouseleave", leave);
    undo.push(() => {
      link.removeEventListener("mouseenter", enter);
      link.removeEventListener("mouseleave", leave);
      top.revert();
      bottom.revert();
      tl.kill();
      link.innerHTML = original;
    });
  });
  return () => undo.forEach((fn) => fn());
}
