export const PRELOADER_DONE_EVENT = "preloaderDone";

let done = false;

export const isPreloaderDone = () => done;

/** called by the Preloader (or by pages that never show it) */
export function markPreloaderDone() {
  if (done) return;
  done = true;
  document.dispatchEvent(new Event(PRELOADER_DONE_EVENT));
}
