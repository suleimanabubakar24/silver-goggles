import { useEffect, useMemo, useState } from "react";
import { X, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { PORTFOLIO, PORTFOLIO_CATEGORIES, type PortfolioItem } from "../lib/data";
import { CATEGORY_TO_SERVICE, waLink, WA_MESSAGES } from "../lib/site";
import { Btn, Reveal, Em } from "./ui";
import { RevealMask } from "./motion";

const SPAN: Record<PortfolioItem["span"], string> = {
  std: "col-span-1 md:col-span-2",
  tall: "col-span-1 md:col-span-2",
  wide: "col-span-2 md:col-span-4",
};
const RATIO: Record<PortfolioItem["span"], string> = {
  std: "aspect-[4/3]",
  tall: "aspect-[4/5]",
  wide: "aspect-[16/10]",
};

/* ---------- flat design boards (vector deliverables) ---------- */
export function BoardArt({ variant }: { variant: "logo" | "event" | "landing" }) {
  if (variant === "logo") {
    return (
      <div className="flex h-full w-full flex-col bg-coal-900 p-5 sm:p-6">
        <div className="eyebrow flex items-center justify-between text-ash">
          <span>Logo concepts</span>
          <span className="text-gold-400">Sheet 04</span>
        </div>
        <div className="mt-4 grid flex-1 grid-cols-2 gap-3">
          {[
            <svg key="a" viewBox="0 0 60 60" className="h-12 w-12 sm:h-14 sm:w-14">
              <circle cx="30" cy="30" r="20" fill="none" stroke="#d4b26a" strokeWidth="2.5" />
              <path d="M20 40 40 20" stroke="#ffffff" strokeWidth="3" />
            </svg>,
            <svg key="b" viewBox="0 0 60 60" className="h-12 w-12 sm:h-14 sm:w-14">
              <path d="M30 8 52 20v20L30 52 8 40V20z" fill="none" stroke="#ffffff" strokeWidth="2.5" />
              <circle cx="30" cy="30" r="5" fill="#d4b26a" />
            </svg>,
            <svg key="c" viewBox="0 0 60 60" className="h-12 w-12 sm:h-14 sm:w-14">
              <rect x="13" y="13" width="34" height="34" transform="rotate(45 30 30)" fill="#d4b26a" />
              <circle cx="30" cy="30" r="7" fill="#101010" />
            </svg>,
            <svg key="d" viewBox="0 0 60 60" className="h-12 w-12 sm:h-14 sm:w-14">
              <path d="M14 46V14h14a11 11 0 0 1 0 22H24l14 10" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>,
          ].map((mark, i) => (
            <div key={i} className="grid place-items-center border border-white/10 bg-black">
              {mark}
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-[11px] text-ash">
          <span>Monogram studies</span>
          <span>Gold / White</span>
        </div>
      </div>
    );
  }
  if (variant === "event") {
    return (
      <div className="flex h-full w-full flex-col bg-coal-900 p-5 sm:p-6">
        <div className="eyebrow flex items-center justify-between text-ash">
          <span>Event frame</span>
          <span className="text-gold-400">10ft × 8ft</span>
        </div>
        <div className="relative mt-4 flex flex-1 flex-col items-center justify-center border border-gold-500/70 bg-black px-4 text-center">
          <span className="absolute inset-2 border border-white/10" aria-hidden="true" />
          <p className="eyebrow text-gold-400">Celebrate</p>
          <p className="mt-2 font-mark text-2xl italic text-white sm:text-4xl">Happy Birthday</p>
          <p className="mt-2 font-display text-xs font-semibold tracking-[0.18em] text-white/80 uppercase sm:text-sm">
            Chief Mrs. A. Bello
          </p>
          <p className="mt-3 text-[10px] tracking-[0.2em] text-ash uppercase">Sat 14 May · Abuja</p>
        </div>
        <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-[11px] text-ash">
          <span>Backdrop · Story · Post</span>
          <span>Matching social frames</span>
        </div>
      </div>
    );
  }
  return (
    <div className="flex h-full w-full flex-col bg-coal-900 p-5 sm:p-6">
      <div className="eyebrow flex items-center justify-between text-ash">
        <span>Landing page</span>
        <span className="text-gold-400">UI board v2</span>
      </div>
      <div className="mt-4 flex flex-1 flex-col overflow-hidden border border-white/10 bg-paper">
        <div className="flex items-center justify-between bg-black px-3 py-2">
          <span className="h-1.5 w-8 bg-white/80" aria-hidden="true" />
          <span className="flex gap-1.5" aria-hidden="true">
            {[0, 1, 2].map((i) => (
              <span key={i} className="h-1 w-5 bg-white/30" />
            ))}
          </span>
          <span className="h-3 w-10 border border-gold-400" aria-hidden="true" />
        </div>
        <div className="bg-black px-4 py-4">
          <div className="h-2.5 w-3/4 bg-white" aria-hidden="true" />
          <div className="mt-1.5 h-2.5 w-1/2 bg-white/60" aria-hidden="true" />
          <div className="mt-3 h-4 w-16 bg-gold-400" aria-hidden="true" />
        </div>
        <div className="grid flex-1 grid-cols-3 gap-2 p-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="border border-black/10 bg-white p-2">
              <div className="h-6 bg-coal-700" aria-hidden="true" />
              <div className="mt-1.5 h-1.5 w-full bg-black/10" aria-hidden="true" />
              <div className="mt-1 h-1.5 w-2/3 bg-black/10" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- project viewer ---------- */
function PortfolioModal({
  item,
  index,
  total,
  onClose,
  onStep,
}: {
  item: PortfolioItem;
  index: number;
  total: number;
  onClose: () => void;
  onStep: (dir: 1 | -1) => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onStep(1);
      if (e.key === "ArrowLeft") onStep(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onStep]);

  const service = CATEGORY_TO_SERVICE[item.category] ?? "Graphic Design";
  const waMsg =
    item.category === "Printing"
      ? WA_MESSAGES.printing
      : item.category === "Web Design"
      ? WA_MESSAGES.web
      : item.category === "Events"
      ? WA_MESSAGES.event
      : item.category === "Branding"
      ? WA_MESSAGES.branding
      : WA_MESSAGES.graphic;

  return (
    <div className="fixed inset-0 z-[70] flex items-start justify-center overflow-y-auto p-3 sm:p-8" role="dialog" aria-modal="true" aria-label={item.title}>
      <button type="button" aria-label="Close project preview" onClick={onClose} className="pfade fixed inset-0 cursor-zoom-out bg-black/90" />
      <div className="relative my-auto w-full max-w-5xl pop-in border border-white/10 bg-coal-900">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center bg-black/70 text-white transition-colors hover:text-gold-300"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>
        <div className="grid md:grid-cols-5">
          <div className="relative aspect-[4/3] bg-black md:col-span-3 md:aspect-auto md:min-h-[520px]">
            <div key={item.id} className="swap-anim absolute inset-0">
              {item.image ? (
                <img src={item.image} alt={item.alt} className="absolute inset-0 h-full w-full object-cover" />
              ) : (
                <BoardArt variant={item.board!} />
              )}
            </div>
            {/* prev / next */}
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-3">
              <button
                type="button"
                onClick={() => onStep(-1)}
                aria-label="Previous project"
                className="grid h-10 w-10 place-items-center border border-white/20 bg-black/60 text-white backdrop-blur-sm transition-colors hover:border-gold-400 hover:text-gold-300"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <span className="font-mark text-sm italic text-white/70">
                {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
              <button
                type="button"
                onClick={() => onStep(1)}
                aria-label="Next project"
                className="grid h-10 w-10 place-items-center border border-white/20 bg-black/60 text-white backdrop-blur-sm transition-colors hover:border-gold-400 hover:text-gold-300"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div key={`${item.id}-meta`} className="swap-anim flex flex-col p-6 md:col-span-2 md:p-9">
            <p className="eyebrow text-gold-400">{item.category}</p>
            <h3 className="mt-3 font-display text-2xl font-bold leading-tight tracking-[-0.02em] text-white">{item.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-ash">{item.desc}</p>
            <ul className="mt-5 space-y-1.5 border-t border-white/10 pt-4 text-[13px] text-white/70">
              {item.tags.map((t) => (
                <li key={t} className="flex items-center gap-2.5">
                  <span className="h-px w-3 bg-gold-500" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-auto space-y-3 pt-8">
              <Btn href={`#/contact/${encodeURIComponent(service)}`} className="w-full" iconRight={<ArrowRight className="h-4 w-4 text-gold-400" aria-hidden="true" />}>
                Start a Project
              </Btn>
              <Btn href={waLink(waMsg)} external variant="outline" className="w-full" icon={<FaWhatsapp className="text-base text-wa-500" aria-hidden="true" />}>
                Discuss on WhatsApp
              </Btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- gallery ---------- */
export default function PortfolioGrid({
  filterable = false,
  limit,
  showCta = false,
}: {
  filterable?: boolean;
  limit?: number;
  showCta?: boolean;
}) {
  const [cat, setCat] = useState<(typeof PORTFOLIO_CATEGORIES)[number]>("All");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const base = cat === "All" ? PORTFOLIO : PORTFOLIO.filter((p) => p.category === cat);
    return limit ? base.slice(0, limit) : base;
  }, [cat, limit]);

  const counts = useMemo(() => {
    const m: Record<string, number> = { All: PORTFOLIO.length };
    PORTFOLIO.forEach((p) => (m[p.category] = (m[p.category] ?? 0) + 1));
    return m;
  }, []);

  const selectedIndex = filtered.findIndex((p) => p.id === selectedId);
  const selected = selectedIndex >= 0 ? filtered[selectedIndex] : null;
  const step = (dir: 1 | -1) => {
    if (selectedIndex < 0) return;
    const next = (selectedIndex + dir + filtered.length) % filtered.length;
    setSelectedId(filtered[next].id);
  };

  return (
    <>
      {filterable && (
        <div className="no-scrollbar -mx-5 mb-12 flex gap-7 overflow-x-auto border-b border-white/10 px-5 sm:mx-0 sm:px-0" role="tablist" aria-label="Portfolio categories">
          {PORTFOLIO_CATEGORIES.map((c) => {
            const active = cat === c;
            return (
              <button
                key={c}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setCat(c)}
                className={`relative shrink-0 pb-4 font-display text-sm font-medium transition-colors ${
                  active ? "text-white" : "text-white/50 hover:text-white"
                }`}
              >
                {c}
                <sup className={`ml-1.5 text-[10px] ${active ? "text-gold-400" : "text-white/40"}`}>{counts[c] ?? 0}</sup>
                <span className={`absolute bottom-0 left-0 h-px w-full origin-left bg-gold-400 transition-transform duration-500 ${active ? "scale-x-100" : "scale-x-0"}`} aria-hidden="true" />
              </button>
            );
          })}
        </div>
      )}

      <div className="grid grid-flow-dense grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-6 md:gap-x-6 md:gap-y-14">
        {filtered.map((item, i) => (
          <Reveal key={item.id} delay={(i % 3) * 60} className={SPAN[item.span]}>
            <figure>
              <RevealMask delay={(i % 3) * 60}>
                <button
                  type="button"
                  onClick={() => setSelectedId(item.id)}
                  className={`img-reveal group relative block w-full overflow-hidden bg-coal-900 ${RATIO[item.span]}`}
                  aria-label={`Open project: ${item.title}`}
                >
                  {item.image ? (
                    <img src={item.image} alt={item.alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.045]" />
                  ) : (
                    <div className="absolute inset-0 transition-transform duration-[900ms] group-hover:scale-[1.02]">
                      <BoardArt variant={item.board!} />
                    </div>
                  )}
                  {/* hover: dark overlay + title + gold line */}
                  <span className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/85 via-black/25 to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:p-5" aria-hidden="true">
                    <span className="h-px w-0 bg-gold-400 transition-all duration-500 group-hover:w-12" />
                    <span className="mt-3 translate-y-2 font-display text-base font-semibold text-white transition-transform duration-500 group-hover:translate-y-0">
                      {item.title}
                    </span>
                    <span className="mt-1 translate-y-2 text-[11px] tracking-[0.14em] text-white/60 uppercase transition-transform duration-500 delay-75 group-hover:translate-y-0">
                      View project
                    </span>
                  </span>
                </button>
              </RevealMask>
              <figcaption className="mt-3.5 flex items-start justify-between gap-4">
                <div>
                  <p className="eyebrow text-gold-400">{item.category}</p>
                  <h3 className="mt-1 font-display text-[15px] font-semibold leading-snug text-white sm:text-base">{item.title}</h3>
                </div>
                <span className="mt-1 hidden font-mark text-sm italic text-white/35 sm:block">{String(i + 1).padStart(2, "0")}</span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      {showCta && (
        <Reveal className="mt-20">
          <div className="flex flex-col gap-6 border-t border-white/10 pt-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h3 className="font-display text-3xl font-bold leading-tight tracking-[-0.02em] text-white sm:text-4xl">
                Have a project in mind? <Em>Let's create it.</Em>
              </h3>
              <p className="mt-3 max-w-md text-sm text-ash sm:text-base">Tell us what you need — we'll design, print or build it with you.</p>
            </div>
            <Btn href="#/contact" size="lg" iconRight={<ArrowRight className="h-4 w-4 text-gold-400" aria-hidden="true" />}>
              Start a Project
            </Btn>
          </div>
        </Reveal>
      )}

      {selected && (
        <PortfolioModal item={selected} index={selectedIndex} total={filtered.length} onClose={() => setSelectedId(null)} onStep={step} />
      )}
    </>
  );
}
