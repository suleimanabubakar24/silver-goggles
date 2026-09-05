export const BUSINESS = {
  name: "DaveToolz Graphics",
  legalName: "DaveToolz Graphics & Gadgets",
  location: "Phase 1, Army Barracks, MI Illegoma Street, Kurudu Phase 1, Abuja, Kurudu, Abuja 900100, Federal Capital Territory",
  phonePrimaryDisplay: "0807 151 9250",
  phonePrimaryTel: "+2348071519250",
  phoneSecondaryDisplay: "0706 908 8799",
  phoneSecondaryTel: "+2347069088799",
  waNumber: "2348071519250",
  instagramHandle: "@davetoollz",
  instagramUrl: "https://www.instagram.com/davetoollz",
  facebookUrl: "https://web.facebook.com/davetoolz1",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Phase+1%2C+Army+Barracks%2C+MI+Illegoma+Street%2C+Kurudu+Phase+1%2C+Abuja+900100%2C+Federal+Capital+Territory",
  trustLine: "Graphic Design • Printing • Branding • Web Design",
} as const;

export const WA_MESSAGES = {
  default: "Hello DaveToolz Graphics, I would like to request a quote for a project.",
  graphic: "Hello DaveToolz Graphics, I am interested in your graphic design services.",
  branding: "Hello DaveToolz Graphics, I am interested in your branding services.",
  printing: "Hello DaveToolz Graphics, I need a printing quote.",
  web: "Hello DaveToolz Graphics, I would like to build a website.",
  event: "Hello DaveToolz Graphics, I saw your event design work and would like a quote for something similar.",
  gadgets: "Hello DaveToolz Graphics, I am interested in your gadgets — sales, repairs or accessories.",
} as const;

export function waLink(message: string = WA_MESSAGES.default): string {
  return `https://wa.me/${BUSINESS.waNumber}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Printing", to: "/printing" },
  { label: "Web Design", to: "/web-design" },
  { label: "Contact", to: "/contact" },
] as const;

export const SERVICES_FOR_FORM = [
  "Graphic Design",
  "Branding",
  "Printing",
  "Web Design",
  "Gadgets",
  "Other",
] as const;

/** Maps a portfolio category to the matching quote-form service. */
export const CATEGORY_TO_SERVICE: Record<string, string> = {
  "Graphic Design": "Graphic Design",
  Branding: "Branding",
  Printing: "Printing",
  Events: "Other",
  "Web Design": "Web Design",
};

export const SEO: Record<string, { title: string; description: string }> = {
  "/": {
    title: "DaveToolz Graphics — Graphic Design, Printing, Branding & Web Design in Abuja",
    description:
      "We create designs that make your brand stand out. Professional graphic design, printing, branding and web design services for businesses, events and individuals in Abuja, Nigeria.",
  },
  "/about": {
    title: "About DaveToolz Graphics | Creative Design Studio in Abuja",
    description:
      "DaveToolz Graphics is a creative design and printing business in Abuja, Nigeria providing professional visual communication, branding and web solutions.",
  },
  "/services": {
    title: "Services — Graphic Design, Branding, Printing & Web | DaveToolz Graphics Abuja",
    description:
      "Flyers, posters, logos, brand identity, business card printing, event design and website development. Explore all services from DaveToolz Graphics Abuja.",
  },
  "/portfolio": {
    title: "Portfolio — Design, Branding, Print & Web Work | DaveToolz Graphics Abuja",
    description:
      "Browse selected work from DaveToolz Graphics: flyers, logos, business cards, posters, event designs, brochures, social media graphics and website interfaces.",
  },
  "/printing": {
    title: "Printing Services in Abuja — Flyers, Cards & Brand Materials | DaveToolz Graphics",
    description:
      "One-stop creative and printing partner in Abuja: business cards, brochures, flyers, posters, invitation cards, event materials and branded items. Request a printing quote.",
  },
  "/web-design": {
    title: "Web Design & Development in Abuja | DaveToolz Graphics",
    description:
      "Business websites, portfolio websites, landing pages, responsive design, frontend and backend development. We don't just design graphics — we build for the web.",
  },
  "/contact": {
    title: "Request a Quote — DaveToolz Graphics Abuja | Contact & WhatsApp",
    description:
      "Request a quote from DaveToolz Graphics in Abuja, Nigeria. Call 0807 151 9250 or 0706 908 8799, chat on WhatsApp or reach us on Instagram @davetoollz.",
  },
};
