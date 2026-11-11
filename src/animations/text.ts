import { all, gsap, num, ScrollTrigger, SplitText } from "./gsap";

/** Each init returns a cleanup that puts the DOM back the way React rendered it. */
type Cleanup = () => void;

/**
 * `.letters-fade-in` — wraps every letter in `.word > .char` spans; CSS transitions
 * them in once ScrollTrigger flags the heading `.is-visible`.
 */
export function lettersFadeIn(): Cleanup {
  const undo: Cleanup[] = [];
  all(".letters-fade-in").forEach((el) => {
    const original = el.innerHTML;
    const lines = original.split(/<br\s*\/?>/i);
    el.innerHTML = "";
    const step = num(el, "data-delay", 0.09);
    let index = 0;

    lines.forEach((line, lineIndex) => {
      line
        .trim()
        .split(/\s+/)
        .filter(Boolean)
        .forEach((word) => {
          const wordSpan = document.createElement("span");
          wordSpan.className = "word";
          [...word].forEach((letter) => {
            const charSpan = document.createElement("span");
            charSpan.className = "char";
            charSpan.textContent = letter;
            charSpan.style.setProperty("--transition-delay", `${index * step}s`);
            wordSpan.appendChild(charSpan);
            index++;
          });
          el.appendChild(wordSpan);
          el.appendChild(document.createTextNode(" "));
          index++;
        });
      if (lineIndex < lines.length - 1) el.appendChild(document.createElement("br"));
    });

    const st = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => el.classList.add("is-visible"),
    });
    undo.push(() => {
      st.kill();
      el.classList.remove("is-visible");
      el.innerHTML = original;
    });
  });
  return () => undo.forEach((fn) => fn());
}

/** `.bw-split-text` — line-by-line colour wipe that follows the scroll position */
export function splitTextScroll(): Cleanup {
  const splits: SplitText[] = [];
  all(".bw-split-text").forEach((el) => {
    const split = SplitText.create(el, { type: "lines" });
    splits.push(split);
    split.lines.forEach((line) => {
      gsap.fromTo(
        line,
        { backgroundPositionX: "100%" },
        {
          backgroundPositionX: "0%",
          ease: "none",
          scrollTrigger: { trigger: line, scrub: 1, start: "top 90%", end: "bottom center" },
        }
      );
    });
  });
  return () => splits.forEach((s) => s.revert());
}

/** `.bw-spilt-title-one` — characters flip in from the centre */
export function titleOne(): Cleanup {
  const splits: SplitText[] = [];
  all(".bw-spilt-title-one").forEach((el) => {
    const split = SplitText.create(el, { type: "words,chars", wordsClass: "word", charsClass: "char" });
    splits.push(split);
    let duration = num(el, "data-speed", 1);
    const delay = num(el, "data-delay", 0);
    if (window.innerWidth <= 768) duration *= 0.3;

    gsap.set(split.words, { willChange: "transform", perspective: 1000, transformStyle: "preserve-3d" });
    gsap.set(split.chars, { willChange: "transform", opacity: 0, rotateX: -80, transformOrigin: "center center -10px" });
    gsap.set(el, { perspective: 1000, transformStyle: "preserve-3d" });
    gsap.to(split.chars, {
      scrollTrigger: { trigger: el, start: "top 80%" },
      opacity: 1,
      rotateX: 0,
      duration,
      delay,
      ease: "power3.out",
      stagger: { each: 0.05, from: "center", grid: "auto" },
    });
  });
  return () => splits.forEach((s) => s.revert());
}

/** `.bw-spilt-title-two` — words rise and de-blur */
export function titleTwo(): Cleanup {
  const splits: SplitText[] = [];
  all(".bw-spilt-title-two").forEach((el) => {
    el.style.display = "block";
    const split = SplitText.create(el, { type: "words" });
    splits.push(split);
    const blur = num(el, "data-blur", 5);
    if (blur > 0) split.words.forEach((w) => ((w as HTMLElement).style.opacity = "1"));

    gsap.from(split.words, {
      y: num(el, "data-y", 20),
      rotation: num(el, "data-rotation", 0),
      filter: `blur(${blur}px)`,
      opacity: blur > 0 ? 0 : 1,
      duration: num(el, "data-duration", 0.75),
      delay: num(el, "data-delay", 0),
      stagger: num(el, "data-stagger", 0.02),
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 100%", once: true },
    });
  });
  return () => {
    splits.forEach((s) => s.revert());
    all(".bw-spilt-title-two").forEach((el) => void (el.style.display = ""));
  };
}

/** `.bw-spilt-title-three` — per-letter CSS stagger */
export function titleThree(): Cleanup {
  const undo: Cleanup[] = [];
  all(".bw-spilt-title-three").forEach((el) => {
    const original = el.innerHTML;
    const text = el.textContent ?? "";
    el.innerHTML = "";
    [...text].forEach((char, i) => {
      const span = document.createElement("span");
      span.innerHTML = char === " " ? "&nbsp;" : char;
      span.style.transitionDelay = `${i * 0.05}s`;
      span.classList.add("animate");
      el.appendChild(span);
    });
    undo.push(() => (el.innerHTML = original));
  });
  return () => undo.forEach((fn) => fn());
}
