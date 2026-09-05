import { ArrowRight } from "lucide-react";
import { PageHero, Reveal, SectionHead, Btn, WaBtn, CtaBand, Em } from "../components/ui";
import MiniSite from "../components/MiniSite";
import { Parallax, RevealMask } from "../components/motion";
import { WEB_SERVICES } from "../lib/data";
import { WA_MESSAGES } from "../lib/site";

const WEB_POINTS = [
  { title: "Responsive on every screen", text: "Desktop, tablet and mobile layouts designed deliberately — not squeezed." },
  { title: "Fast, clean builds", text: "Lightweight frontend code that loads quickly even on mobile data." },
  { title: "Search-ready structure", text: "Proper headings, metadata and content hierarchy so customers can find you." },
  { title: "Frontend and backend", text: "From the interface your customers see to the logic running behind it." },
];

export default function WebDesign() {
  return (
    <>
      <PageHero
        eyebrow="Web Design"
        title={
          <>
            We don't just design graphics. <Em>We build for the web.</Em>
          </>
        }
        lead="Website design and development — business websites, portfolio sites and landing pages, designed and coded to present your business professionally online."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Btn href="#/contact/Web%20Design" iconRight={<ArrowRight className="h-4 w-4 text-gold-400" aria-hidden="true" />}>
            Build My Website
          </Btn>
          <WaBtn msg={WA_MESSAGES.web} variant="outline">
            Chat on WhatsApp
          </WaBtn>
        </div>
      </PageHero>

      {/* devices */}
      <section className="overflow-hidden bg-black py-16 lg:py-24" aria-label="Website mockups on devices">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <Reveal>
            <SectionHead eyebrow="One site, every screen" title="Designed once. Correct everywhere." lead="The same brand, laid out deliberately for desktop, tablet and mobile." />
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-14 flex items-end justify-center gap-5 sm:gap-8">
              <div className="hidden w-44 shrink-0 border border-white/15 bg-coal-900 p-2 sm:block lg:w-56">
                <div className="aspect-[3/4] overflow-hidden">
                  <MiniSite cols={2} />
                </div>
              </div>
              <div className="w-full max-w-2xl border border-white/15 bg-coal-900 p-2">
                <div className="flex items-center gap-1.5 px-2 pb-2 pt-1" aria-hidden="true">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
                  <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
                </div>
                <div className="aspect-[16/10] overflow-hidden">
                  <MiniSite cols={3} />
                </div>
              </div>
              <div className="w-24 shrink-0 border border-white/15 bg-coal-900 p-1.5 sm:w-28">
                <div className="aspect-[9/16] overflow-hidden">
                  <MiniSite cols={1} />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* real work */}
      <section className="bg-black pb-16 lg:pb-24" aria-label="Website project">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <Reveal>
            <Parallax speed={0.035}>
              <figure>
                <RevealMask>
                  <img
                    src="/images/work-web.jpg"
                    alt="Laptop and phone displaying a responsive business website designed and built by DaveToolz Graphics"
                    loading="lazy"
                    className="aspect-[16/9] w-full object-cover lg:aspect-[21/9]"
                  />
                </RevealMask>
                <figcaption className="mt-3 flex items-center justify-between text-xs text-ash">
                  <span>Business website — designed and developed front to back</span>
                  <span className="text-gold-400">Web Design</span>
                </figcaption>
              </figure>
            </Parallax>
          </Reveal>
        </div>
      </section>

      {/* services + points */}
      <section className="bg-coal-900 py-20 lg:py-28" aria-label="Web services">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:px-12">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHead
                eyebrow="Web services"
                title={
                  <>
                    What we can <Em>build for you.</Em>
                  </>
                }
              />
            </Reveal>
            <Reveal delay={100}>
              <ul className="mt-10 border-t border-white/10">
                {WEB_SERVICES.map((w, i) => (
                  <li key={w} className="flex items-baseline gap-4 border-b border-white/10 py-4">
                    <span className="font-mark text-sm italic text-gold-400">0{i + 1}</span>
                    <span className="font-display text-lg font-semibold text-white">{w}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={80}>
              <p className="eyebrow text-gold-400">How we build</p>
            </Reveal>
            <div className="mt-6 grid gap-8 sm:grid-cols-2">
              {WEB_POINTS.map((p, i) => (
                <Reveal key={p.title} delay={i * 70}>
                  <div className="border-t border-white/15 pt-5">
                    <h3 className="font-display text-lg font-bold text-white">{p.title}</h3>
                    <p className="mt-2.5 text-[15px] leading-relaxed text-ash">{p.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Your business deserves more than <Em>a social page.</Em>
          </>
        }
        text="Let's put your brand on the web — designed, built and maintained by one team."
        primaryLabel="Build My Website"
        primaryHref="#/contact/Web%20Design"
        waMsg={WA_MESSAGES.web}
        waLabel="WhatsApp About a Website"
      />
    </>
  );
}
