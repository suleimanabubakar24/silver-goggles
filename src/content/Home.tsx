import { ArrowRight } from "lucide-react";
import { Btn, WaBtn, Reveal, SectionHead, CtaBand, Em, ArrowLink } from "../components/ui";
import { MouseGlow, Parallax, RevealMask } from "../components/motion";
import { useServicePanel } from "../components/ServicePanel";
import PortfolioGrid from "../components/Portfolio";
import { SERVICES, WHY_POINTS, PROCESS_STEPS } from "../lib/data";
import { BUSINESS, WA_MESSAGES } from "../lib/site";

const CARD_IMG: Record<string, string> = {
  "graphic-design": "/images/work-flyer.jpg",
  branding: "/images/work-brand.jpg",
  printing: "/images/work-print.jpg",
  "web-design": "/images/work-web.jpg",
  gadgets: "/images/work-gadgets.jpg",
};
const CARD_ALT: Record<string, string> = {
  "graphic-design": "Printed event flyers from a DaveToolz Graphics design project",
  branding: "Brand identity board from a DaveToolz Graphics branding project",
  printing: "Print production run at DaveToolz Graphics",
  "web-design": "Responsive website built by DaveToolz Graphics on laptop and phone",
  gadgets: "HP and Dell laptops available at DaveToolz Graphics & Gadgets",
};
const CARD_SPAN = ["md:col-span-3", "md:col-span-3", "md:col-span-2", "md:col-span-2", "md:col-span-2"];

export default function Home() {
  const { open } = useServicePanel();

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden bg-black" aria-label="Introduction">
        {/* living background: drifting gold light, slow sweep, faint lines, cursor light */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div
            className="hero-anim absolute -top-1/3 left-1/5 h-[85%] w-[65%] opacity-[0.05] -translate-x-[10%]"
            style={{ background: "radial-gradient(closest-side, #d4b26a, transparent 70%)", animation: "hero-drift 26s ease-in-out infinite alternate" }}
          />
          <div
            className="hero-anim absolute inset-y-0 left-0 w-[38%] opacity-[0.035] -translate-x-[130%]"
            style={{ background: "linear-gradient(100deg, transparent, #ffffff, transparent)", animation: "hero-sweep 19s ease-in-out 2s infinite" }}
          />
          <div
            className="absolute inset-0 opacity-[0.5]"
            style={{ backgroundImage: "repeating-linear-gradient(90deg, rgba(255,255,255,0.028) 0 1px, transparent 1px 180px)" }}
          />
          <MouseGlow />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-8 lg:px-12 lg:pb-28 lg:pt-28">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="eyebrow flex items-center gap-3 text-ash">
                  <span className="h-px w-6 bg-gold-500" aria-hidden="true" />
                  Creative Design Studio — {BUSINESS.location}
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="mt-8 max-w-[11ch] font-display text-[2.9rem] font-bold leading-[1.0] tracking-[-0.03em] text-white sm:text-6xl lg:text-[4.6rem]">
                  We create designs that make your brand <Em>stand out.</Em>
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-8 max-w-md text-base leading-relaxed text-ash sm:text-[17px]">
                  Professional graphic design, printing, branding and web design services for
                  businesses, events and individuals.
                </p>
              </Reveal>
              <Reveal delay={230}>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Btn href="#/contact" size="lg" iconRight={<ArrowRight className="h-4 w-4 text-gold-400" aria-hidden="true" />}>
                    Request a Quote
                  </Btn>
                  <WaBtn msg={WA_MESSAGES.default} size="lg" variant="outline">
                    Chat on WhatsApp
                  </WaBtn>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={140}>
                <Parallax speed={0.04}>
                  <figure>
                    <RevealMask>
                      <img
                        src="/images/toolss.jpg.jpeg"
                        alt="DaveToolz Graphics tools and equipment"
                        className="aspect-[4/5] w-full object-cover"
                      />
                    </RevealMask>
                    <figcaption className="mt-3 flex items-center justify-between text-xs text-ash">
                      <span>DaveToolz Graphics studio office</span>
                      <span className="text-gold-400">The studio</span>
                    </figcaption>
                  </figure>
                </Parallax>
              </Reveal>
            </div>
          </div>

          {/* trust line */}
          <Reveal delay={200}>
            <ul className="mt-20 grid grid-cols-2 gap-x-8 border-t border-white/10 sm:grid-cols-4">
              {["Graphic Design", "Printing", "Branding", "Web Design"].map((s, i) => (
                <li key={s} className="flex items-baseline gap-3 border-b border-white/10 py-5 sm:border-b-0">
                  <span className="font-mark text-sm italic text-gold-400">0{i + 1}</span>
                  <span className="font-display text-sm font-semibold text-white">{s}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ============ SERVICES — interactive cards ============ */}
      <section className="bg-black py-20 lg:py-28" aria-label="Services">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <SectionHead
                eyebrow="What we do"
                title={
                  <>
                    Five services. <Em>One studio.</Em>
                  </>
                }
                lead="Open a service to see how we work — or jump straight to a quote."
              />
            </Reveal>
            <Reveal delay={100}>
              <ArrowLink href="#/services">All services</ArrowLink>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-6">
            {SERVICES.map((s, i) => (
              <Reveal key={s.id} delay={i * 70} className={CARD_SPAN[i]}>
                <button
                  type="button"
                  onClick={() => open(s.id)}
                  aria-label={`Open the ${s.title} showcase`}
                  className="group relative block h-full w-full overflow-hidden border border-white/10 bg-coal-900 text-left transition-all duration-500 hover:-translate-y-1 hover:border-gold-500/50 hover:bg-coal-800"
                >
                  <div className="overflow-hidden">
                    <img
                      src={CARD_IMG[s.id]}
                      alt={CARD_ALT[s.id]}
                      loading="lazy"
                      className="aspect-[16/10] w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1 group-hover:scale-[1.045]"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-display text-xl font-bold tracking-[-0.02em] text-white">{s.title}</h3>
                      <span className="font-mark text-sm italic text-gold-400">0{i + 1}</span>
                    </div>
                    <p className="mt-2.5 text-[14px] leading-relaxed text-ash">{s.blurb}</p>
                    <p className="mt-3 line-clamp-1 text-[12px] text-white/45">{s.items.join(" · ")}</p>
                    <span className="mt-5 inline-flex items-center gap-2 font-display text-sm font-semibold text-white transition-colors group-hover:text-gold-300">
                      Open service
                      <ArrowRight className="h-4 w-4 text-gold-400 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </div>
                  {/* gold edge that draws in on hover */}
                  <span className="absolute bottom-0 left-0 h-px w-0 bg-gold-400 transition-all duration-500 group-hover:w-full" aria-hidden="true" />
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SELECTED WORK ============ */}
      <section className="bg-black pb-20 pt-6 lg:pb-28" aria-label="Selected work">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <SectionHead
                eyebrow="Selected work"
                title="The work speaks first."
                lead="Flyers, identities, print runs and interfaces — a sample of what leaves the studio."
              />
            </Reveal>
            <Reveal delay={100}>
              <ArrowLink href="#/portfolio">Full portfolio</ArrowLink>
            </Reveal>
          </div>
          <div className="mt-14">
            <PortfolioGrid limit={5} />
          </div>
        </div>
      </section>

      {/* ============ WHY — light editorial ============ */}
      <section className="bg-paper py-20 text-black lg:py-28" aria-label="Why DaveToolz">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:px-12">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHead
                tone="light"
                eyebrow="Why DaveToolz"
                title="One creative partner for design, print and web."
                lead="Fewer hand-offs, one consistent standard, and a team you can actually reach in Abuja."
              />
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-10">
                <Btn href="#/about" variant="outlineDark" iconRight={<ArrowRight className="h-4 w-4 text-gold-600" aria-hidden="true" />}>
                  About the studio
                </Btn>
              </div>
            </Reveal>
          </div>
          <ol className="lg:col-span-7">
            {WHY_POINTS.map((w, i) => (
              <Reveal key={w.title} delay={i * 70}>
                <li className={`grid gap-3 py-7 sm:grid-cols-12 ${i === 0 ? "border-t" : ""} border-b border-black/10`}>
                  <span className="font-mark text-lg italic text-gold-600 sm:col-span-2">0{i + 1}</span>
                  <h3 className="font-display text-xl font-bold tracking-[-0.02em] sm:col-span-4">{w.title}</h3>
                  <p className="text-[15px] leading-relaxed text-graphite sm:col-span-6">{w.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <section className="bg-black py-20 lg:py-28" aria-label="How it works">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <Reveal>
            <SectionHead eyebrow="How it works" title="From idea to delivered, in four steps." />
          </Reveal>
          <ol className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((p, i) => (
              <Reveal key={p.num} delay={i * 80}>
                <li className="border-t border-white/15 pt-6">
                  <span className="font-mark text-2xl italic text-gold-400">{p.num}</span>
                  <h3 className="mt-5 font-display text-lg font-bold tracking-[-0.01em] text-white">{p.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ash">{p.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ============ PRINT / WEB ============ */}
      <section className="border-t border-white/10 bg-black" aria-label="Printing and web design">
        <div className="mx-auto grid max-w-7xl gap-px px-5 sm:px-8 lg:grid-cols-2 lg:px-12">
          {[
            {
              img: "/images/work-brochure.jpg",
              alt: "Open tri-fold brochure printed by DaveToolz Graphics",
              eyebrow: "Printing",
              title: "Design and print, under one roof.",
              text: "Business cards, flyers, brochures, invitations and event materials — prepared for print from the first draft.",
              href: "#/printing",
              label: "Explore printing",
            },
            {
              img: "/images/work-web.jpg",
              alt: "Laptop and phone showing a responsive business website built by DaveToolz Graphics",
              eyebrow: "Web Design & Development",
              title: "We build for the web too.",
              text: "Business websites, landing pages and full frontend & backend development — responsive on every screen.",
              href: "#/web-design",
              label: "Explore web design",
            },
          ].map((t, i) => (
            <Reveal key={t.href} delay={i * 80}>
              <a href={t.href} className={`group block py-16 lg:py-24 ${i === 1 ? "lg:border-l lg:border-white/10 lg:pl-14" : "lg:pr-14"}`}>
                <Parallax speed={0.03}>
                  <RevealMask>
                    <img src={t.img} alt={t.alt} loading="lazy" className="aspect-[16/10] w-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.03]" />
                  </RevealMask>
                </Parallax>
                <p className="eyebrow mt-8 text-gold-400">{t.eyebrow}</p>
                <h3 className="mt-3 font-display text-2xl font-bold tracking-[-0.02em] text-white sm:text-3xl">{t.title}</h3>
                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ash">{t.text}</p>
                <span className="mt-6 inline-flex items-center gap-2 font-display text-sm font-semibold text-white transition-colors group-hover:text-gold-300">
                  {t.label}
                  <ArrowRight className="h-4 w-4 text-gold-400 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand waMsg={WA_MESSAGES.default} />
    </>
  );
}
