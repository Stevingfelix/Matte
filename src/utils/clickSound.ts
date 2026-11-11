type ClickSoundKind = "primary" | "nav" | "subtle" | "tap";

interface SoundProfile {
  startFreq: number;
  endFreq: number;
  durationSec: number;
  gain: number;
  transientGain: number;
  filterFreq: number;
}

const SOUND_PROFILES: Record<ClickSoundKind, SoundProfile> = {
  primary: {
    startFreq: 520,
    endFreq: 185,
    durationSec: 0.026,
    gain: 0.11,
    transientGain: 0.045,
    filterFreq: 2100,
  },
  nav: {
    startFreq: 780,
    endFreq: 310,
    durationSec: 0.019,
    gain: 0.075,
    transientGain: 0.032,
    filterFreq: 2800,
  },
  subtle: {
    startFreq: 640,
    endFreq: 245,
    durationSec: 0.017,
    gain: 0.06,
    transientGain: 0.024,
    filterFreq: 2400,
  },
  tap: {
    startFreq: 540,
    endFreq: 215,
    durationSec: 0.013,
    gain: 0.032,
    transientGain: 0.012,
    filterFreq: 1900,
  },
};

let audioCtx: AudioContext | null = null;
let noiseBuffer: AudioBuffer | null = null;
let lastPlayedAt = 0;

function getAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (audioCtx && audioCtx.state !== "closed") return audioCtx;

  const Ctx =
    window.AudioContext ||
    (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!Ctx) return null;

  audioCtx = new Ctx();
  return audioCtx;
}

function getTransientNoiseBuffer(ctx: AudioContext): AudioBuffer {
  if (noiseBuffer && noiseBuffer.sampleRate === ctx.sampleRate) {
    return noiseBuffer;
  }

  const length = Math.max(1, Math.floor(ctx.sampleRate * 0.012));
  const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
  const channel = buffer.getChannelData(0);
  for (let i = 0; i < length; i += 1) {
    const decay = 1 - i / length;
    channel[i] = (Math.random() * 2 - 1) * decay * decay;
  }
  noiseBuffer = buffer;
  return buffer;
}

/** Play a brief synthesized tactile UI click using the Web Audio API. */
export function playClickSound(kind: ClickSoundKind = "subtle"): void {
  if (typeof window === "undefined") return;

  const nowMs = performance.now();
  if (nowMs - lastPlayedAt < 25) return;
  lastPlayedAt = nowMs;

  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    if (ctx.state === "suspended") {
      void ctx.resume();
    }

    const profile = SOUND_PROFILES[kind];
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const oscGain = ctx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(profile.startFreq, now);
    osc.frequency.exponentialRampToValueAtTime(profile.endFreq, now + profile.durationSec);

    oscGain.gain.setValueAtTime(0.0001, now);
    oscGain.gain.linearRampToValueAtTime(profile.gain, now + 0.0018);
    oscGain.gain.exponentialRampToValueAtTime(0.0001, now + profile.durationSec);

    osc.connect(oscGain);
    oscGain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + profile.durationSec + 0.004);

    const noise = ctx.createBufferSource();
    noise.buffer = getTransientNoiseBuffer(ctx);
    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(profile.filterFreq, now);
    filter.Q.setValueAtTime(1.4, now);

    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(profile.transientGain, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.009);

    noise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(ctx.destination);
    noise.start(now);
    noise.stop(now + 0.011);
  } catch {
    // Ignore audio context errors when playback is restricted by the browser.
  }
}

/** Determine the appropriate click sound profile for a clicked DOM element. */
export function classifyClickTarget(target: EventTarget | null): ClickSoundKind {
  if (!(target instanceof Element)) return "tap";
  if (target.closest("[data-click-sound='off']")) return "tap";

  const buttonEl = target.closest(
    "button, .pikiz-btn, [type='submit'], [type='button'], [role='button'], .bw-popup-box-trigger-item"
  );
  if (buttonEl && !buttonEl.hasAttribute("disabled")) return "primary";

  if (target.closest("a[href]")) return "nav";

  if (
    target.closest(
      "input, textarea, select, label, summary, [role='tab'], .accordion-header, .pricing-one__category li"
    )
  ) {
    return "subtle";
  }

  return "tap";
}

