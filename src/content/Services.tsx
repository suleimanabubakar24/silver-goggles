import { ArrowRight, Maximize2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { PageHero, Reveal, Btn, CtaBand, Em } from "../components/ui";
import { useServicePanel } from "../components/ServicePanel";
import { SERVICES } from "../lib/data";
import { WA_MESSAGES, waLink } from "../lib/site";

export default function Services() {
  const { open } = useServicePanel();
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Everything your brand needs, <Em>under one roof.</Em>
          </>
        }
        lead="Graphic design, branding, printing, web development and event design. Pick one service or combine them — one team, one consistent standard."
      >
        <nav aria-label="Services on this page" className="flex flex-wrap gap-x-7 gap-y-3 border-t border-white/10 pt-6">
          {SERVICES.map((s, i) => (
            <a key={s.id} href={`#/services#${s.id}`} onClick={(e) => { e.preventDefault(); document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth" }); }} className="group inline-flex items-baseline gap-2 text-sm text-white/70 transition hover:text-white">
              <span className="font-mark text-xs italic text-gold-400">0{i + 1}</span>
              {s.title}
            </a>
          ))}
        </nav>
      </PageHero>

      {SERVICES.map((s, i) => (
        <section key={s.id} id={s.id} className={`scroll-mt-24 ${i % 2 === 0 ? "bg-black" : "bg-coal-900"} py-16 lg:py-24`} aria-label={s.title}>
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:px-12">
            <div className="lg:col-span-5">
              <Reveal>
                <span className="font-mark text-2xl italic text-gold-400">0{i + 1}</span>
                <h2 className="mt-4 font-display text-3xl font-bold leading-[1.05] tracking-[-0.025em] text-white sm:text-4xl">
                  {s.title}
                </h2>
                <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ash sm:text-base">{s.blurb}</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Btn href={`#/contact/${encodeURIComponent(s.formService)}`} iconRight={<ArrowRight className="h-4 w-4 text-gold-400" aria-hidden="true" />}>
                    Request Service
                  </Btn>
                  <Btn href={waLink(s.waMsg)} external variant="outline" icon={<FaWhatsapp className="text-base text-wa-500" aria-hidden="true" />}>
                    WhatsApp
                  </Btn>
                </div>
                <button
                  type="button"
                  onClick={() => open(s.id)}
                  className="group mt-6 inline-flex items-center gap-2 font-display text-sm font-semibold text-gold-400 transition-colors hover:text-gold-300"
                >
                  <Maximize2 className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                  Open interactive showcase
                </button>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={100}>
                <ul className="grid border-t border-white/10 sm:grid-cols-2 sm:gap-x-10">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-center gap-3 border-b border-white/10 py-4 text-[15px] text-white/85">
                      <span className="h-px w-4 bg-gold-500" aria-hidden="true" />
                      {it}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      <CtaBand
        title={
          <>
            Not sure which service <Em>you need?</Em>
          </>
        }
        text="Describe your project and we'll recommend the right mix of design, print and web."
        waMsg={WA_MESSAGES.default}
      />
    </>
  );
}
