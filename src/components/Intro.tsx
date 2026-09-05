import { useCallback, useEffect, useState } from "react";
import Logo from "./Logo";

const KEY = "dtg-intro-v1";

/**
 * Cinematic opening: darkness → faint light → logo emerges → gold light sweep
 * across the mark → a thin gold line crosses → the veil lifts into the site.
 * Skipped on return visits and under prefers-reduced-motion.
 */
export default function Intro() {
  const [phase, setPhase] = useState<"run" | "exit" | "done">(() => {
    if (typeof window === "undefined") return "done";
    try {
      if (sessionStorage.getItem(KEY)) return "done";
    } catch {
      /* private mode */
    }
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "done" : "run";
  });

  const finish = useCallback(() => {
    setPhase((p) => {
      if (p !== "run") return p;
      try {
        sessionStorage.setItem(KEY, "1");
      } catch {
        /* ignore */
      }
      return "exit";
    });
  }, []);

  useEffect(() => {
    if (phase === "run") {
      const t = window.setTimeout(finish, 2650);
      return () => window.clearTimeout(t);
    }
    if (phase === "exit") {
      const t = window.setTimeout(() => setPhase("done"), 640);
      return () => window.clearTimeout(t);
    }
  }, [phase, finish]);

  useEffect(() => {
    if (phase === "done") return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [phase]);

  if (phase === "done") return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-black ${phase === "exit" ? "intro-anim" : ""}`}
      style={phase === "exit" ? { animation: "intro-exit .6s cubic-bezier(.7,0,.3,1) forwards" } : undefined}
      role="presentation"
    >
      {/* faint light arriving in the darkness */}
      <div
        className="intro-anim pointer-events-none absolute h-[62vmin] w-[62vmin] opacity-0"
        style={{ background: "radial-gradient(closest-side, #d4b26a, transparent 70%)", animation: "intro-glow 1.6s ease .1s both" }}
        aria-hidden="true"
      />

      <div className="relative flex flex-col items-center px-6">
        {/* logo emerges, then a gold light band sweeps across it */}
        <div className="relative overflow-hidden px-4 py-2">
          <div className="intro-anim" style={{ animation: "intro-logo 1.1s cubic-bezier(.22,1,.36,1) .45s both" }}>
            <Logo />
          </div>
          <span
            className="intro-anim pointer-events-none absolute inset-y-0 left-0 w-2/5 -translate-x-[140%]"
            style={{
              background: "linear-gradient(100deg, transparent 20%, rgba(212,178,106,.45) 50%, transparent 80%)",
              animation: "intro-band 1.05s ease-in-out 1.45s both",
            }}
            aria-hidden="true"
          />
        </div>
        <p
          className="intro-anim mt-6 text-center text-[11px] font-medium uppercase tracking-[0.28em] text-white/45 opacity-0"
          style={{ animation: "intro-logo .9s ease 1.15s both" }}
        >
          Creative Design Studio — Abuja, Nigeria
        </p>
      </div>

      {/* thin gold line crossing the frame */}
      <div
        className="intro-anim pointer-events-none absolute left-1/2 top-[62%] h-px w-[min(560px,72vw)] opacity-0"
        style={{ background: "linear-gradient(90deg, transparent, #d4b26a 30%, #ffffff 50%, #d4b26a 70%, transparent)", animation: "intro-line 1.15s cubic-bezier(.65,0,.35,1) 1.85s both" }}
        aria-hidden="true"
      />

      <div className="absolute inset-x-0 bottom-8 flex justify-center">
        <button
          type="button"
          onClick={finish}
          className="intro-anim text-[11px] uppercase tracking-[0.24em] text-white/40 transition-colors hover:text-white opacity-0"
          style={{ animation: "intro-logo .6s ease .9s both" }}
        >
          Skip intro
        </button>
      </div>
    </div>
  );
}
