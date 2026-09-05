import { createContext, useContext, useEffect, useState, type CSSProperties, type ReactNode } from "react";
import { X, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { SERVICES, type Service } from "../lib/data";
import { waLink } from "../lib/site";
import { Btn } from "./ui";
import MiniSite from "./MiniSite";
import { BoardArt } from "./Portfolio";

/* ---------------- context ---------------- */
const Ctx = createContext<{ open: (id: string) => void }>({ open: () => {} });
export const useServicePanel = () => useContext(Ctx);

export function ServiceProvider({ children }: { children: ReactNode }) {
  const [id, setId] = useState<string | null>(null);
  const svc = SERVICES.find((s) => s.id === id) ?? null;
  return (
    <Ctx.Provider value={{ open: setId }}>
      {children}
      {svc && <Panel s={svc} close={() => setId(null)} />}
    </Ctx.Provider>
  );
}

/* ---------------- staggered showcase tile ---------------- */
function Tile({
  d = 0,
  tx = "0px",
  ty = "16px",
  r = "0deg",
  s = 1,
  className = "",
  caption,
  children,
}: {
  d?: number;
  tx?: string;
  ty?: string;
  r?: string;
  s?: number;
  className?: string;
  caption?: string;
  children: ReactNode;
}) {
  return (
    <figure
      className={`st ${className}`}
      style={{ "--tx": tx, "--ty": ty, "--r": r, "--s": String(s), animationDelay: `${d}ms` } as CSSProperties}
    >
      {children}
      {caption && <figcaption className="mt-2 text-[11px] tracking-[0.04em] text-ash">{caption}</figcaption>}
    </figure>
  );
}

function Frame({ className = "", children }: { className?: string; children: ReactNode }) {
  return <div className={`overflow-hidden border border-white/10 bg-black ${className}`}>{children}</div>;
}

const COPY: Record<string, string> = {
  "graphic-design":
    "From flyers and posters to brochures, invitations and digital artwork, we create visual materials designed to communicate clearly and professionally.",
  branding:
    "From logo design to complete identity systems, we build brands that stay recognisable across every touchpoint — stationery, signage and marketing materials.",
  printing:
    "We take artwork from screen to finished product: colour-checked proofs, clean trimming and reliable turnaround on every print run.",
  "web-design":
    "Modern, responsive websites designed and developed front to back — from landing pages to full business platforms, with maintenance included.",
  gadgets:
    "Genuine phones, laptops and accessories, backed by real after-sales support — plus repairs and swaps when something needs fixing, not replacing.",
};

/* ---------------- per-service animated showcases ---------------- */
function Showcase({ id }: { id: string }) {
  if (id === "graphic-design") {
    return (
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        <Tile d={0} tx="-26px" ty="0px" caption="Flyer — event series">
          <Frame className="aspect-[3/4]">
            <img src="/images/work-flyer.jpg" alt="Event flyer design sliding into place" loading="lazy" className="h-full w-full object-cover" />
          </Frame>
        </Tile>
        <Tile d={130} ty="26px" caption="Poster — typographic">
          <Frame className="aspect-[3/4]">
            <img src="/images/work-poster.jpg" alt="Typographic poster design sliding into place" loading="lazy" className="h-full w-full object-cover" />
          </Frame>
        </Tile>
        <Tile d={260} tx="26px" ty="0px" className="col-span-2 sm:col-span-1" caption="Social — campaign kit">
          <Frame className="aspect-[3/4]">
            <img src="/images/work-social.jpg" alt="Social media design grid sliding into place" loading="lazy" className="h-full w-full object-cover" />
          </Frame>
        </Tile>
        <Tile d={400} ty="18px" className="col-span-2 sm:col-span-3" caption="Type & grid systems set the structure before artwork begins">
          <Frame className="flex items-center justify-between px-5 py-4">
            <span className="font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl">Aa Bb Cc</span>
            <span className="hidden h-6 flex-1 mx-6 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,.14)_0_1px,transparent_1px_22px)] sm:block" aria-hidden="true" />
            <span className="font-mark text-xl italic text-gold-400">01 → 04</span>
          </Frame>
        </Tile>
      </div>
    );
  }
  if (id === "branding") {
    return (
      <div className="grid grid-cols-2 gap-4">
        <Tile d={0} s={0.92} caption="The mark comes first">
          <Frame className="grid aspect-square place-items-center">
            <svg viewBox="0 0 72 64" className="h-16 w-16" aria-hidden="true">
              <path d="M25 6h22a5 5 0 0 1 5 5v7H20v-7a5 5 0 0 1 5-5z" fill="#fff" />
              <rect x="6" y="16" width="60" height="42" rx="8" fill="#fff" />
              <circle cx="36" cy="37" r="14" fill="#0a0a0a" />
              <circle cx="36" cy="37" r="14" fill="none" stroke="#d4b26a" strokeWidth="2" />
              <path d="M29 44c4.5-14 9.5-14 14 0M29 30c4.5 14 9.5 14 14 0" stroke="#d4b26a" strokeWidth="2.6" fill="none" strokeLinecap="round" />
            </svg>
          </Frame>
        </Tile>
        <Tile d={160} r="-2deg" caption="…then the card">
          <Frame className="aspect-square">
            <img src="/images/work-business-card.jpg" alt="DaveToolz business card carrying the identity" loading="lazy" className="h-full w-full object-cover" />
          </Frame>
        </Tile>
        <Tile d={320} r="1.5deg" caption="…stationery & documents">
          <Frame className="aspect-square">
            <img src="/images/work-brand-board.jpg" alt="Brand stationery and guideline board" loading="lazy" className="h-full w-full object-cover" />
          </Frame>
        </Tile>
        <Tile d={470} ty="22px" caption="…one consistent brand board">
          <Frame className="aspect-square">
            <img src="/images/work-branding-expe.jpg" alt="Brand identity applied to real client work" loading="lazy" className="h-full w-full object-cover" />
          </Frame>
        </Tile>
      </div>
    );
  }
  if (id === "printing") {
    return (
      <div className="grid grid-cols-2 gap-4">
        <Tile d={0} ty="-20px" className="col-span-2" caption="Artwork approved on screen…">
          <Frame className="aspect-[16/7] p-2">
            <MiniSite cols={3} />
          </Frame>
        </Tile>
        <Tile d={220} ty="22px" caption="…pressed, trimmed…">
          <Frame className="aspect-[4/3]">
            <img src="/images/work-print.jpg" alt="Print production run" loading="lazy" className="h-full w-full object-cover" />
          </Frame>
        </Tile>
        <Tile d={380} ty="22px" caption="…stacked and finished">
          <Frame className="aspect-[4/3]">
            <img src="/images/work-cards.jpg" alt="Finished printed cards" loading="lazy" className="h-full w-full object-cover" />
          </Frame>
        </Tile>
        <Tile d={520} tx="-18px" className="col-span-2" caption="Brochures folded and checked before delivery">
          <Frame className="aspect-[16/6]">
            <img src="/images/work-brochure.jpg" alt="Finished brochure" loading="lazy" className="h-full w-full object-cover" />
          </Frame>
        </Tile>
      </div>
    );
  }
  if (id === "web-design") {
    return (
      <div>
        <div className="flex items-end justify-center gap-4 sm:gap-6">
          <Tile d={140} ty="24px" s={0.96} className="hidden w-32 sm:block lg:w-40" caption="Tablet">
            <Frame className="aspect-[3/4] p-1.5">
              <MiniSite cols={2} />
            </Frame>
          </Tile>
          <Tile d={0} s={0.95} className="w-full max-w-md" caption="Desktop">
            <Frame className="aspect-[16/10] p-1.5">
              <MiniSite cols={3} />
            </Frame>
          </Tile>
          <Tile d={280} ty="30px" s={0.94} className="w-20 sm:w-24" caption="Mobile">
            <Frame className="aspect-[9/16] p-1">
              <MiniSite cols={1} />
            </Frame>
          </Tile>
        </div>
        <Tile d={460} ty="18px" className="mt-5" caption="The same brand, assembled for every breakpoint">
          <Frame className="aspect-[16/6]">
            <img src="/images/work-web.jpg" alt="Responsive website on laptop and phone" loading="lazy" className="h-full w-full object-cover" />
          </Frame>
        </Tile>
      </div>
    );
  }
  if (id === "gadgets") {
    return (
      <div className="grid grid-cols-2 gap-4">
        <Tile d={0} r="-1.5deg" className="row-span-2" caption="In stock — HP, Dell & more">
          <Frame className="aspect-[3/4] h-full">
            <img src="/images/work-gadgets.jpg" alt="HP and Dell laptops on display" loading="lazy" className="h-full w-full object-cover" />
          </Frame>
        </Tile>
        <Tile d={180} ty="20px" caption="Checked before it leaves the shop">
          <Frame className="aspect-[4/3]">
            <img src="/images/gadgets-hold.jpg" alt="Laptop being inspected at DaveToolz Graphics & Gadgets" loading="lazy" className="h-full w-full object-cover" />
          </Frame>
        </Tile>
        <Tile d={340} r="1.5deg" caption="Ready for sale">
          <Frame className="aspect-[4/3]">
            <img src="/images/gadgets-stack.jpg" alt="Stack of HP laptops ready for sale" loading="lazy" className="h-full w-full object-cover" />
          </Frame>
        </Tile>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-2 gap-4">
      <Tile d={0} r="-1.5deg" className="row-span-2" caption="Invitation suite">
        <Frame className="aspect-[3/4] h-full">
          <img src="/images/work-wedding-real.jpg" alt="Wedding programme cards" loading="lazy" className="h-full w-full object-cover" />
        </Frame>
      </Tile>
      <Tile d={180} ty="20px" caption="Stage frame & backdrop">
        <Frame className="aspect-[4/3]">
          <BoardArt variant="event" />
        </Frame>
      </Tile>
      <Tile d={340} r="1.5deg" caption="Event poster">
        <Frame className="aspect-[4/3]">
          <img src="/images/work-poster.jpg" alt="Event poster design" loading="lazy" className="h-full w-full object-cover" />
        </Frame>
      </Tile>
    </div>
  );
}

/* ---------------- the panel ---------------- */
function Panel({ s, close }: { s: Service; close: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [close]);

  const idx = SERVICES.findIndex((x) => x.id === s.id);

  return (
    <div className="fixed inset-0 z-[70] overflow-y-auto" role="dialog" aria-modal="true" aria-label={s.title}>
      <button type="button" aria-label="Close service details" onClick={close} className="pfade fixed inset-0 cursor-zoom-out bg-black/85 backdrop-blur-[2px]" />
      <div className="relative mx-auto my-4 w-[min(1100px,94vw)] sm:my-8">
        <div className="pop-in border border-white/12 bg-coal-900">
          {/* header */}
          <div className="flex items-start justify-between gap-6 border-b border-white/10 px-6 py-5 sm:px-9">
            <div className="flex items-baseline gap-4">
              <span className="font-mark text-xl italic text-gold-400">0{idx + 1}</span>
              <div>
                <p className="eyebrow text-ash">Service showcase</p>
                <h2 className="mt-1 font-display text-2xl font-bold tracking-[-0.02em] text-white sm:text-3xl">{s.title}</h2>
              </div>
            </div>
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="grid h-10 w-10 shrink-0 place-items-center border border-white/15 text-white transition-colors hover:border-gold-400 hover:text-gold-300"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div className="grid lg:grid-cols-12">
            {/* copy + actions */}
            <div className="order-2 px-6 py-7 sm:px-9 lg:order-1 lg:col-span-5">
              <p className="text-[15px] leading-relaxed text-ash sm:text-base">{COPY[s.id] ?? s.blurb}</p>
              <ul className="mt-6 grid grid-cols-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-1">
                {s.items.map((it, i) => (
                  <li
                    key={it}
                    className="st flex items-center gap-3 border-b border-white/8 py-2.5 text-[14px] text-white/85"
                    style={{ "--ty": "10px", animationDelay: `${250 + i * 60}ms` } as CSSProperties}
                  >
                    <span className="h-px w-4 bg-gold-500" aria-hidden="true" />
                    {it}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3">
                <Btn href={`#/contact/${encodeURIComponent(s.formService)}`} onClick={close} iconRight={<ArrowRight className="h-4 w-4 text-gold-400" aria-hidden="true" />}>
                  Request This Service
                </Btn>
                <Btn href={waLink(s.waMsg)} external variant="outline" icon={<FaWhatsapp className="text-base text-wa-500" aria-hidden="true" />}>
                  WhatsApp Us
                </Btn>
              </div>
            </div>

            {/* animated showcase */}
            <div className="order-1 border-b border-white/10 bg-black p-5 sm:p-8 lg:order-2 lg:col-span-7 lg:border-b-0 lg:border-l">
              <Showcase id={s.id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
