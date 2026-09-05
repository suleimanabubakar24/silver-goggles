import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";
import Logo from "./Logo";
import { BUSINESS, waLink, NAV_LINKS } from "../lib/site";
import { SERVICES } from "../lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-5 pb-8 pt-16 sm:px-8 lg:px-12 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <a href="#/" aria-label="DaveToolz Graphics — home" className="inline-block">
              <Logo />
            </a>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ash">
              A creative design and printing business in Abuja, Nigeria — professional visual
              communication, branding and web solutions for individuals, businesses and
              organizations.
            </p>
            <p className="mt-5 text-[13px] text-white/70">{BUSINESS.trustLine}</p>
          </div>

          <nav aria-label="Footer quick links" className="lg:col-span-2">
            <p className="eyebrow text-gold-400">Quick Links</p>
            <ul className="mt-5 space-y-2.5">
              {NAV_LINKS.filter((l) => l.to !== "/" && l.to !== "/about").map((l) => (
                <li key={l.to}>
                  <a href={`#${l.to}`} className="text-sm text-white/75 transition hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer services" className="lg:col-span-2">
            <p className="eyebrow text-gold-400">Services</p>
            <ul className="mt-5 space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href={`#/services`} className="text-sm text-white/75 transition hover:text-white">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <p className="eyebrow text-gold-400">Contact</p>
            <ul className="mt-5 space-y-2.5 text-sm text-white/75">
              <li>{BUSINESS.legalName}</li>
              <li>{BUSINESS.location}</li>
              <li>
                <a href={`tel:${BUSINESS.phonePrimaryTel}`} className="transition hover:text-white">
                  {BUSINESS.phonePrimaryDisplay}
                </a>
              </li>
              <li>
                <a href={`tel:${BUSINESS.phoneSecondaryTel}`} className="transition hover:text-white">
                  {BUSINESS.phoneSecondaryDisplay}
                </a>
              </li>
              <li>
                <a href={BUSINESS.instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition hover:text-white">
                  <FaInstagram className="h-3.5 w-3.5 text-gold-400" aria-hidden="true" />
                  Instagram: {BUSINESS.instagramHandle}
                </a>
              </li>
              <li>
                <a href={BUSINESS.facebookUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition hover:text-white">
                  <FaFacebook className="h-3.5 w-3.5 text-gold-400" aria-hidden="true" />
                  Facebook Page
                </a>
              </li>
              <li>
                <a href={waLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition hover:text-white">
                  <FaWhatsapp className="h-3.5 w-3.5 text-wa-500" aria-hidden="true" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-ash sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 DaveToolz Graphics. All rights reserved.</p>
          <p>{BUSINESS.location}</p>
        </div>
        <p className="mt-8 flex items-center justify-center gap-3 text-[11px] tracking-[0.18em] text-ash uppercase">
          <span className="h-px w-5 bg-gold-500/70" aria-hidden="true" />
          Demo by SASX Global
          <span className="h-px w-5 bg-gold-500/70" aria-hidden="true" />
        </p>
      </div>
    </footer>
  );
}
