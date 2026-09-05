import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { waLink } from "../lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with DaveToolz Graphics on WhatsApp"
      className="fixed bottom-[76px] right-4 z-40 grid h-13 w-13 place-items-center rounded-full bg-wa-500 text-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.7)] ring-2 ring-brand-red-500 ring-offset-2 ring-offset-black transition-colors duration-300 hover:bg-wa-600 md:bottom-7 md:right-7 md:h-14 md:w-14"
    >
      <FaWhatsapp className="h-6 w-6 md:h-7 md:w-7" aria-hidden="true" />
    </a>
  );
}

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-white/10 bg-black md:hidden">
      <a
        href="#/contact"
        className="flex items-center justify-center gap-2 border-r border-white/10 bg-brand-red-500 py-4 font-display text-[13px] font-semibold text-white"
      >
        Request a Quote
        <ArrowRight className="h-3.5 w-3.5 text-white" aria-hidden="true" />
      </a>
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-wa-600 py-4 font-display text-[13px] font-semibold text-white"
      >
        <FaWhatsapp className="h-4 w-4" aria-hidden="true" />
        WhatsApp Us
      </a>
    </div>
  );
}
