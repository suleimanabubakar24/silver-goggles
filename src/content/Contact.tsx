import { Phone, MapPin } from "lucide-react";
import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { PageHero, Reveal, Btn, WaBtn, Em } from "../components/ui";
import QuoteForm from "../components/QuoteForm";
import { BUSINESS, WA_MESSAGES, waLink } from "../lib/site";

export default function Contact({ prefillService }: { prefillService?: string }) {
  return (
    <>
      <PageHero
        eyebrow="Contact / Request a Quote"
        title={
          <>
            Let's create something <Em>great.</Em>
          </>
        }
        lead="Have a design, printing or web project in mind? Tell us what you need and let's discuss it."
      />

      <section className="bg-black py-16 lg:py-24" aria-label="Contact and quote form">
        <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-12 lg:gap-20 lg:px-12">
          {/* form */}
          <div className="order-2 min-w-0 lg:order-1 lg:col-span-7">
            <Reveal>
              <div className="mb-8 flex items-end justify-between gap-4 border-b border-white/10 pb-5">
                <h2 className="font-display text-2xl font-bold tracking-[-0.02em] text-white">Request a Quote</h2>
                {prefillService && <span className="text-xs text-gold-400">Service: {prefillService}</span>}
              </div>
              <QuoteForm key={prefillService ?? "none"} prefillService={prefillService} />
            </Reveal>
          </div>

          {/* details */}
          <aside className="order-1 min-w-0 lg:order-2 lg:col-span-5">
            <Reveal delay={80}>
              <p className="eyebrow text-gold-400">Contact</p>
              <h2 className="mt-3 font-display text-2xl font-bold tracking-[-0.02em] text-white">{BUSINESS.legalName}</h2>
              <p className="mt-1 text-sm text-ash">{BUSINESS.location}</p>

              <dl className="mt-8 border-t border-white/10">
                <div className="grid grid-cols-3 gap-4 border-b border-white/10 py-4">
                  <dt className="text-[12px] tracking-[0.06em] text-ash uppercase">Phone</dt>
                  <dd className="col-span-2">
                    <a href={`tel:${BUSINESS.phonePrimaryTel}`} className="block font-display text-lg font-semibold text-white transition hover:text-gold-300">
                      {BUSINESS.phonePrimaryDisplay}
                    </a>
                    <a href={`tel:${BUSINESS.phoneSecondaryTel}`} className="mt-1 block font-display text-lg font-semibold text-white transition hover:text-gold-300">
                      {BUSINESS.phoneSecondaryDisplay}
                    </a>
                  </dd>
                </div>
                <div className="grid grid-cols-3 gap-4 border-b border-white/10 py-4">
                  <dt className="text-[12px] tracking-[0.06em] text-ash uppercase">WhatsApp</dt>
                  <dd className="col-span-2">
                    <a href={waLink()} target="_blank" rel="noopener noreferrer" className="font-display text-lg font-semibold text-white transition hover:text-gold-300">
                      {BUSINESS.phonePrimaryDisplay}
                    </a>
                  </dd>
                </div>
                <div className="grid grid-cols-3 gap-4 border-b border-white/10 py-4">
                  <dt className="text-[12px] tracking-[0.06em] text-ash uppercase">Instagram</dt>
                  <dd className="col-span-2">
                    <a href={BUSINESS.instagramUrl} target="_blank" rel="noopener noreferrer" className="font-display text-lg font-semibold text-white transition hover:text-gold-300">
                      {BUSINESS.instagramHandle}
                    </a>
                  </dd>
                </div>
                <div className="grid grid-cols-3 gap-4 border-b border-white/10 py-4">
                  <dt className="text-[12px] tracking-[0.06em] text-ash uppercase">Facebook</dt>
                  <dd className="col-span-2">
                    <a href={BUSINESS.facebookUrl} target="_blank" rel="noopener noreferrer" className="font-display text-lg font-semibold text-white transition hover:text-gold-300">
                      Facebook Page
                    </a>
                  </dd>
                </div>
                <div className="grid grid-cols-3 gap-4 border-b border-white/10 py-4">
                  <dt className="text-[12px] tracking-[0.06em] text-ash uppercase">Location</dt>
                  <dd className="col-span-2 min-w-0 break-words text-white/85">{BUSINESS.location}</dd>
                </div>
              </dl>

              <div className="mt-8 grid grid-cols-2 gap-3">
                <Btn href={`tel:${BUSINESS.phonePrimaryTel}`} variant="outline" size="sm" icon={<Phone className="h-3.5 w-3.5 text-gold-400" aria-hidden="true" />}>
                  Call Us
                </Btn>
                <Btn href={waLink()} external variant="wa" size="sm" icon={<FaWhatsapp className="text-sm" aria-hidden="true" />}>
                  WhatsApp
                </Btn>
                <Btn href={BUSINESS.instagramUrl} external variant="outline" size="sm" icon={<FaInstagram className="h-3.5 w-3.5 text-gold-400" aria-hidden="true" />}>
                  Instagram
                </Btn>
                <Btn href={BUSINESS.facebookUrl} external variant="outline" size="sm" icon={<FaFacebook className="h-3.5 w-3.5 text-gold-400" aria-hidden="true" />}>
                  Facebook
                </Btn>
                <Btn href={BUSINESS.mapsUrl} external variant="outline" size="sm" icon={<MapPin className="h-3.5 w-3.5 text-gold-400" aria-hidden="true" />}>
                  Get Directions
                </Btn>
              </div>

              <div className="mt-10 border-t border-gold-500/50 pt-6">
                <p className="font-display text-base font-semibold text-white">Prefer WhatsApp?</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ash">Chat with DaveToolz Graphics directly — send your idea and get a quote in chat.</p>
                <WaBtn msg={WA_MESSAGES.default} size="sm" className="mt-4">
                  Chat on WhatsApp
                </WaBtn>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  );
}
