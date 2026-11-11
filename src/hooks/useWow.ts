import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Re-inits wow.js scroll reveal on every route change. */
export default function useWow() {
  const pathname = usePathname();
  useEffect(() => {
    let cancelled = false;
    const t = setTimeout(async () => {
      const { default: WOW } = await import("wow.js");
      if (cancelled) return;
      new WOW({ boxClass: "wow", animateClass: "animated", mobile: true, live: false }).init();
    }, 50);
    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, [pathname]);
}
