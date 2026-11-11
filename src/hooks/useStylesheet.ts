import { useEffect } from "react";

/** Mounts a <link rel="stylesheet"> for the lifetime of the component (dark / rtl / landing skins). */
export default function useStylesheet(...hrefs: string[]) {
  const key = hrefs.join("|");
  useEffect(() => {
    const links = key.split("|").filter(Boolean).map((href) => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      document.head.appendChild(link);
      return link;
    });
    return () => links.forEach((l) => l.remove());
  }, [key]);
}
