import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Logo from "./Logo";
import { Btn } from "./ui";
import { NAV_LINKS, BUSINESS, waLink } from "../lib/site";

export default function Nav({ path }: { path: string }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [path]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* slim utility line */}
      <div className="hidden border-b border-white/8 bg-black md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2 text-[12px] text-ash sm:px-8 lg:px-12">
          <span>{BUSINESS.legalName} — {BUSINESS.location}</span>
          <div className="flex items-center gap-6">
            <a href={`tel:${BUSINESS.phonePrimaryTel}`} className="transition hover:text-white">
              {BUSINESS.phonePrimaryDisplay}
            </a>
            <a href={`tel:${BUSINESS.phoneSecondaryTel}`} className="transition hover:text-white">
              {BUSINESS.phoneSecondaryDisplay}
            </a>
            <a href={BUSINESS.instagramUrl} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
              {BUSINESS.instagramHandle}
            </a>
            <a href={BUSINESS.facebookUrl} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
              Facebook
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
          scrolled ? "border-white/10 bg-black/92 backdrop-blur" : "border-white/8 bg-black"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8 lg:px-12">
          <a href="#/" aria-label="DaveToolz Graphics — home" className="shrink-0 py-1">
            <Logo />
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((l) => {
              const active = path === l.to;
              return (
                <a
                  key={l.to}
                  href={`#${l.to}`}
                  aria-current={active ? "page" : undefined}
                  className={`group relative py-1 font-display text-[14px] font-medium transition-colors ${
                    active ? "text-white" : "text-white/60 hover:text-white"
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px origin-left bg-gold-400 transition-transform duration-300 ease-out ${
                      active ? "w-full scale-x-100" : "w-full scale-x-0 group-hover:scale-x-100"
                    }`}
                    aria-hidden="true"
                  />
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with DaveToolz Graphics on WhatsApp"
              className="hidden h-10 w-10 place-items-center border border-white/15 text-wa-500 transition hover:border-wa-500 md:grid"
            >
              <FaWhatsapp className="h-4 w-4" aria-hidden="true" />
            </a>
            <Btn href="#/contact" size="sm" className="hidden sm:inline-flex">
              Request a Quote
            </Btn>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid h-10 w-10 place-items-center border border-white/15 text-white transition hover:border-white/50 lg:hidden"
            >
              {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-black lg:hidden">
          <div className="mt-[78px] flex flex-1 flex-col px-6 pb-10 pt-4">
            <nav aria-label="Mobile" className="flex flex-col">
              {NAV_LINKS.map((l) => {
                const active = path === l.to;
                return (
                  <a
                    key={l.to}
                    href={`#${l.to}`}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between border-b border-white/10 py-4 font-display text-[28px] font-semibold tracking-[-0.02em] ${
                      active ? "text-gold-400" : "text-white"
                    }`}
                  >
                    {l.label}
                    {active && <span className="h-1.5 w-1.5 rounded-full bg-gold-400" aria-hidden="true" />}
                  </a>
                );
              })}
            </nav>
            <div className="mt-8 flex flex-col gap-3">
              <Btn href="#/contact" size="lg">
                Request a Quote
              </Btn>
              <Btn href={waLink()} external size="lg" variant="wa" icon={<FaWhatsapp className="text-base" aria-hidden="true" />}>
                WhatsApp Us
              </Btn>
            </div>
            <div className="mt-auto space-y-1.5 pt-10 text-sm text-ash">
              <a href={`tel:${BUSINESS.phonePrimaryTel}`} className="block">
                {BUSINESS.phonePrimaryDisplay}
              </a>
              <a href={`tel:${BUSINESS.phoneSecondaryTel}`} className="block">
                {BUSINESS.phoneSecondaryDisplay}
              </a>
              <p>{BUSINESS.location}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
