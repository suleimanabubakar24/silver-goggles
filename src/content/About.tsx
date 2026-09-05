import { ArrowRight } from "lucide-react";
import { PageHero, Reveal, SectionHead, Btn, WaBtn, CtaBand, Em } from "../components/ui";
import { WHY_POINTS } from "../lib/data";
import { BUSINESS, WA_MESSAGES } from "../lib/site";

const FACTS: { k: string; v: string }[] = [
  { k: "Studio", v: "DaveToolz Graphics & Gadgets" },
  { k: "Location", v: "Abuja, Nigeria" },
  { k: "Design", v: "Flyers, posters, brochures, cards, digital art, retouching" },
  { k: "Branding", v: "Logo design, brand identity, marketing materials" },
  { k: "Printing", v: "Business, event and branded materials" },
  { k: "Web", v: "Business websites, landing pages, frontend & backend" },
  { k: "Instagram", v: BUSINESS.instagramHandle },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            A creative and technology studio <Em>in Abuja.</Em>
          </>
        }
        lead="Professional visual communication, branding and web solutions for individuals, businesses and organizations."
      />

      <section className="bg-black py-20 lg:py-28" aria-label="About DaveToolz Graphics">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:px-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="font-display text-2xl font-medium leading-[1.35] tracking-[-0.015em] text-white sm:text-[1.75rem] lg:text-[2rem]">
                DaveToolz Graphics is a creative design and printing business providing professional
                visual communication, branding and web solutions. From a single flyer to a complete
                brand identity or website, we help turn ideas into professional visual experiences.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-ash sm:text-base">
                We work with individuals, businesses and organizations — combining an eye for design
                with hands-on printing and web technology, so a project can move from concept to
                finished product without bouncing between vendors.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Btn href="#/portfolio" iconRight={<ArrowRight className="h-4 w-4 text-gold-400" aria-hidden="true" />}>
                  See the work
                </Btn>
                <WaBtn msg={WA_MESSAGES.default} variant="outline">
                  WhatsApp Us
                </WaBtn>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={120}>
              <dl className="border-t border-white/10">
                {FACTS.map((f) => (
                  <div key={f.k} className="grid grid-cols-3 gap-4 border-b border-white/10 py-4">
                    <dt className="text-[12px] font-medium tracking-[0.06em] text-gold-400 uppercase">{f.k}</dt>
                    <dd className="col-span-2 text-sm leading-relaxed text-white/85">{f.v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-black pb-20 lg:pb-28" aria-label="Studio work">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <Reveal>
            <figure className="img-reveal">
              <div className="overflow-hidden bg-coal-900">
                <img
                  src="/images/work-brand.jpg"
                  alt="Brand identity board with logo variations, colour swatches and stationery from a DaveToolz Graphics project"
                  loading="lazy"
                  className="aspect-[16/9] w-full object-cover lg:aspect-[21/9]"
                />
              </div>
              <figcaption className="mt-3 flex items-center justify-between text-xs text-ash">
                <span>Brand identity system — presentation board</span>
                <span className="text-gold-400">Branding</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-20 text-black lg:py-28" aria-label="What we stand for">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:px-12">
          <div className="lg:col-span-4">
            <Reveal>
              <SectionHead tone="light" eyebrow="What we stand for" title="Creative work with a business purpose." />
            </Reveal>
          </div>
          <ol className="lg:col-span-8">
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

      <section className="bg-black py-20 lg:py-28" aria-label="Founder">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:items-center lg:gap-16 lg:px-12">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="overflow-hidden bg-coal-900">
                <img
                  src="/images/ceo-office.jpg"
                  alt="Founder and CEO of DaveToolz Graphics"
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={100}>
              <p className="eyebrow text-gold-400">Founder</p>
              <h2 className="mt-3 font-display text-2xl font-bold tracking-[-0.02em] text-white sm:text-3xl">
                David Ifeanyichukwu Duru — Founder &amp; CEO
              </h2>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-ash">
                Dave started DaveToolz Graphics with a simple idea: creative work should be reliable,
                not just good-looking. What began as a small design and printing outfit in Abuja has
                grown into a full studio covering branding, print and web — built on the same
                hands-on attention to every client, from a single flyer to a complete brand identity.
                He still works directly on projects, making sure every job that leaves the studio
                meets the standard the DaveToolz name is known for.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-black py-16 lg:py-20" aria-label="Location">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <Reveal>
            <div className="flex flex-col gap-8 border-y border-white/10 py-10 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="eyebrow text-gold-400">Local & accessible</p>
                <h2 className="mt-3 font-display text-2xl font-bold tracking-[-0.02em] text-white sm:text-3xl">
                  Based in {BUSINESS.location}.
                </h2>
                <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-ash">
                  Available to clients who need reliable creative services — in person, on the phone, or on WhatsApp.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Btn href={BUSINESS.mapsUrl} external variant="outline">
                  Get Directions
                </Btn>
                <Btn href={`tel:${BUSINESS.phonePrimaryTel}`} variant="outline">
                  Call {BUSINESS.phonePrimaryDisplay}
                </Btn>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand waMsg={WA_MESSAGES.default} />
    </>
  );
}
