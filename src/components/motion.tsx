import { useEffect, useRef, useState, type ReactNode } from "react";

const reduced = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const coarse = () =>
  typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches;

/* ---------------- scroll progress — thin gold line ---------------- */
export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      if (ref.current) ref.current.style.transform = `scaleX(${p})`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px]" aria-hidden="true">
      <div ref={ref} className="h-full origin-left bg-gold-400/90" style={{ transform: "scaleX(0)" }} />
    </div>
  );
}

/* ---------------- page transition veil + travelling gold line ---------------- */
export function PageVeil({ active }: { active: boolean }) {
  if (!active) return null;
  return (
    <div className="pointer-events-none fixed inset-0 z-[80]" aria-hidden="true">
      <div className="veil-anim absolute inset-0 bg-black opacity-0" style={{ animation: "veil-out .55s ease forwards" }} />
      <div
        className="veil-anim absolute left-0 top-1/2 h-px w-full opacity-0"
        style={{
          animation: "pline .6s cubic-bezier(.65,0,.35,1) forwards",
          background: "linear-gradient(90deg, transparent, #d4b26a 45%, #ffffff 50%, #d4b26a 55%, transparent)",
        }}
      />
    </div>
  );
}

/* ---------------- film grain ---------------- */
export function Grain() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[55] opacity-[0.045]"
      aria-hidden="true"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      }}
    />
  );
}

/* ---------------- section light-up observer ---------------- */
export function LitObserver({ dep }: { dep: string }) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll("main section:not(.is-lit)"));
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-lit");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [dep]);
  return null;
}

/* ---------------- subtle scroll parallax (desktop only) ---------------- */
export function Parallax({
  speed = 0.05,
  className = "",
  children,
}: {
  speed?: number;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (reduced() || coarse()) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const off = (r.top + r.height / 2 - window.innerHeight / 2) * -speed;
      el.style.transform = `translate3d(0,${off.toFixed(1)}px,0)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed]);
  return (
    <div ref={ref} className={className} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
}

/* ---------------- cursor-following gold light (hero, desktop only) ---------------- */
export function MouseGlow() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (reduced() || coarse()) return;
    const el = ref.current;
    const host = (el?.closest("section") as HTMLElement | null) ?? el?.parentElement;
    if (!el || !host) return;
    let raf = 0;
    let x = 0;
    let y = 0;
    const move = (e: MouseEvent) => {
      const r = host.getBoundingClientRect();
      x = e.clientX - r.left;
      y = e.clientY - r.top;
      if (!raf)
        raf = requestAnimationFrame(() => {
          raf = 0;
          el.style.transform = `translate3d(${(x - 250).toFixed(0)}px, ${(y - 250).toFixed(0)}px, 0)`;
        });
    };
    host.addEventListener("mousemove", move, { passive: true });
    return () => {
      host.removeEventListener("mousemove", move);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] opacity-[0.07]"
      style={{ background: "radial-gradient(closest-side, #d4b26a, transparent 70%)" }}
    />
  );
}

/* ---------------- masked image reveal ---------------- */
export function RevealMask({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <div
        className={`transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          inView ? "translate-y-0 scale-100 opacity-100" : "translate-y-8 scale-[1.045] opacity-0"
        }`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </div>
    </div>
  );
}
