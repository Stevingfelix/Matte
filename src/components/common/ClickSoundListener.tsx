"use client";

import { useEffect } from "react";
import { classifyClickTarget, playClickSound } from "../../utils/clickSound";

const KEYBOARD_INTERACTIVE_SELECTOR =
  "a[href], button, [role='button'], [role='tab'], summary, .pricing-one__category li";

/** Global listener that adds subtle tactile audio feedback to clicks across the site. */
export default function ClickSoundListener() {
  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType === "mouse" && event.button !== 0) return;
      if (event.target instanceof Element && event.target.closest("[data-click-sound='off']")) {
        return;
      }
      playClickSound(classifyClickTarget(event.target));
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.repeat || (event.key !== "Enter" && event.key !== " ")) return;
      const target = event.target;
      if (!(target instanceof Element)) return;
      if (!target.matches(KEYBOARD_INTERACTIVE_SELECTOR)) return;
      playClickSound(classifyClickTarget(target));
    };

    document.addEventListener("pointerdown", onPointerDown, { capture: true, passive: true });
    document.addEventListener("keydown", onKeyDown, { capture: true, passive: true });

    return () => {
      document.removeEventListener("pointerdown", onPointerDown, true);
      document.removeEventListener("keydown", onKeyDown, true);
    };
  }, []);

  return null;
}

