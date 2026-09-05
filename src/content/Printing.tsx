import { ArrowRight } from "lucide-react";
import { PageHero, Reveal, SectionHead, Btn, WaBtn, CtaBand, Em } from "../components/ui";
import { PRINT_CATEGORIES } from "../lib/data";
import { WA_MESSAGES } from "../lib/site";

const NOTES = [
  { title: "Quoted per job", text: "No confusing price lists — every job is quoted by size, material and quantity before we start." },
  { title: "Design and print together", text: "Artwork is prepared for print from the start, so colours and finishes come out as designed." },
  { title: "Finished and delivered", text: "Trimmed, checked and packed — ready for pickup or delivery once you approve." },
];

const PRINT_SHOTS = [
  { src: "/images/work-cards.jpg", alt: "Business cards with gold foil edges", label: "Business cards" },
  { src: "/images/work-flyer.jpg", alt: "Stack of printed event flyers", label: "Flyers" },
  { src: "/images/work-brochure.jpg", alt: "Open tri-fold brochure", label: "Brochures" },
  { src: "/images/work-wedding.jpg", alt: "Wedding invitation suite with gold script", label: "Invitation cards" },
];

export default function Printing() {
  return (
    <>
      <PageHero
        eyebrow="Printing"
        title={
          <>
            Your one-stop creative and <Em>printing partner.</Em>
          </>
        }
        lead="From business cards to full event materials — we design it, print it and hand you the finished product."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Btn href="#/contact/Printing" iconRight={<ArrowRight className="h-4 w-4 text-gold-400" aria-hidden="true" />}>
            Request a Printing Quote
          </Btn>
          <WaBtn msg={WA_MESSAGES.printing} variant="outline">
            WhatsApp a Print Job
          </WaBtn>
        </div>
      </PageHero>

      {/* printed work — the images carry the colour */}
      <section className="bg-black py-16 lg:py-24" aria-label="Printed materials">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {PRINT_SHOTS.map((p, i) => (
              <Reveal key={p.label} delay={i * 70}>
                <figure className="img-reveal group">
                  <div className="overflow-hidden bg-coal-900">
                    <img src={p.src} alt={p.alt} loading="lazy" className={`w-full object-cover group-hover:scale-[1.03] ${i % 2 === 0 ? "aspect-[4/5]" : "aspect-[4/5] md:mt-10"}`} />
                  </div>
                  <figcaption className="mt-3 text-xs text-ash">{p.label}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* categories — editorial columns */}
      <section className="bg-coal-900 py-20 lg:py-28" aria-label="What we print">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <Reveal>
            <SectionHead
              eyebrow="What we print"
              title={
                <>
                  Sharp colour. Clean finishes. <Em>Every time.</Em>
                </>
              }
              lead="Because design and printing happen under one roof, nothing gets lost between the screen and the press."
            />
          </Reveal>
          <div className="mt-14 grid gap-12 border-t border-white/10 pt-12 lg:grid-cols-3 lg:gap-10">
            {PRINT_CATEGORIES.map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <div className={`${i > 0 ? "lg:border-l lg:border-white/10 lg:pl-10" : ""}`}>
                  <span className="font-mark text-xl italic text-gold-400">0{i + 1}</span>
                  <h3 className="mt-3 font-display text-2xl font-bold tracking-[-0.02em] text-white">{c.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ash">{c.intro}</p>
                  <ul className="mt-6 border-t border-white/10">
                    {c.items.map((it) => (
                      <li key={it} className="border-b border-white/10 py-3 text-[15px] text-white/85">
                        {it}
                      </li>
                    ))}
                  </ul>
                  <a href="#/contact/Printing" className="group mt-6 inline-flex items-center gap-2 font-display text-sm font-semibold text-white transition hover:text-gold-300">
                    Request a printing quote
                    <ArrowRight className="h-4 w-4 text-gold-400 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-16 lg:py-24" aria-label="How printing works with us">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 md:grid-cols-3 md:gap-8 lg:px-12">
          {NOTES.map((n, i) => (
            <Reveal key={n.title} delay={i * 70}>
              <div className="border-t border-white/15 pt-6">
                <h3 className="font-display text-lg font-bold text-white">{n.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ash">{n.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        title={
          <>
            Need something <Em>printed?</Em>
          </>
        }
        text="Send us the idea, the size and the quantity — we'll handle design, print and finishing."
        primaryLabel="Request a Printing Quote"
        primaryHref="#/contact/Printing"
        waMsg={WA_MESSAGES.printing}
        waLabel="WhatsApp a Print Job"
      />
    </>
  );
}
