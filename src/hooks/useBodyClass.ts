import { useEffect } from "react";

/** Adds classes to <body> while the page is mounted. */
export default function useBodyClass(classes: string) {
  useEffect(() => {
    const list = classes.split(" ").filter(Boolean);
    document.body.classList.add(...list);
    return () => document.body.classList.remove(...list);
  }, [classes]);
}
