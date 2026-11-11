import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import { initAnimations } from "../animations";
import { isPreloaderDone, PRELOADER_DONE_EVENT } from "../components/layout/preloaderState";

/**
 * Runs all GSAP effects once the page is mounted (and after the intro loader on the
 * first visit), and tears them down on route change so pins / split text are removed
 * before React unmounts the page.
 */
export default function useGsapAnimations() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    let dispose: (() => void) | undefined;
    let raf = 0;

    const start = () => {
      // wait a frame so child effects (react-slick, counters) have committed
      raf = requestAnimationFrame(() => {
        dispose = initAnimations();
      });
    };

    if (isPreloaderDone()) start();
    else document.addEventListener(PRELOADER_DONE_EVENT, start, { once: true });

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener(PRELOADER_DONE_EVENT, start);
      dispose?.();
    };
  }, [pathname]);
}
