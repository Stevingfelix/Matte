import { useEffect, useState } from "react";

/** Tracks scrollY and whether the user is scrolling up (for the sticky header). */
export default function useScrollPosition() {
  const [state, setState] = useState({ y: 0, up: false });
  useEffect(() => {
    let last = 0;
    const onScroll = () => {
      const y = window.pageYOffset || document.documentElement.scrollTop;
      setState({ y, up: y > 500 && y < last });
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return state;
}
