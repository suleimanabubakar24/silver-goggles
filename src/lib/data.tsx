import {
  PenTool,
  Fingerprint,
  Printer,
  Code2,
  Smartphone,
  PartyPopper,
  Briefcase,
  Gift,
  BadgeCheck,
  type LucideIcon,
} from "lucide-react";
import { WA_MESSAGES } from "./site";

export type Service = {
  id: string;
  title: string;
  icon: LucideIcon;
  blurb: string;
  items: string[];
  waMsg: string;
  formService: string;
};

export const SERVICES: Service[] = [
  {
    id: "graphic-design",
    title: "Graphic Design",
    icon: PenTool,
    blurb:
      "Clean, bold visual communication for print and screen — designed around your message and your audience.",
    items: [
      "Flyers",
      "Posters",
      "Brochures",
      "Invitation Cards",
      "Complementary / Business Cards",
      "Digital Art",
      "Picture Retouching",
    ],
    waMsg: WA_MESSAGES.graphic,
    formService: "Graphic Design",
  },
  {
    id: "branding",
    title: "Branding",
    icon: Fingerprint,
    blurb:
      "Identity systems that make your business recognizable and trustworthy — from the logo to every touchpoint.",
    items: ["Logo Design", "Brand Identity", "Business Branding", "Marketing Materials"],
    waMsg: WA_MESSAGES.branding,
    formService: "Branding",
  },
  {
    id: "printing",
    title: "Printing",
    icon: Printer,
    blurb:
      "From screen to finished product. Sharp colour, clean finishes and reliable turnaround on every job.",
    items: [
      "Flyers",
      "Posters",
      "Business Cards",
      "Invitation Cards",
      "Event Materials",
      "Branded Materials",
    ],
    waMsg: WA_MESSAGES.printing,
    formService: "Printing",
  },
  {
    id: "web-design",
    title: "Web Design & Development",
    icon: Code2,
    blurb:
      "Modern, responsive websites that present your business professionally and work on every screen.",
    items: [
      "Business Websites",
      "Landing Pages",
      "Frontend Development",
      "Backend Development",
      "Responsive Websites",
      "Website Maintenance",
    ],
    waMsg: WA_MESSAGES.web,
    formService: "Web Design",
  },
  {
    id: "gadgets",
    title: "Gadgets",
    icon: Smartphone,
    blurb:
      "Genuine phones, laptops and accessories — sold with the same trust and after-sales support behind every design job.",
    items: [
      "Phones",
      "Laptops",
      "Phone & Laptop Accessories",
      "Gadget Repairs",
      "Sales & Swap",
    ],
    waMsg: WA_MESSAGES.gadgets,
    formService: "Gadgets",
  },
];

export type PortfolioCategory =
  | "Graphic Design"
  | "Branding"
  | "Printing"
  | "Events"
  | "Web Design";

export const PORTFOLIO_CATEGORIES: ("All" | PortfolioCategory)[] = [
  "All",
  "Graphic Design",
  "Branding",
  "Printing",
  "Events",
  "Web Design",
];

export type PortfolioItem = {
  id: string;
  title: string;
  category: PortfolioCategory;
  desc: string;
  tags: string[];
  image?: string;
  board?: "logo" | "event" | "landing";
  span: "std" | "tall" | "wide";
  alt: string;
};

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: "laundry-flyer",
    title: "Young's Laundry & Cleaning — Service Flyer",
    category: "Graphic Design",
    desc: "A real client flyer for a laundry, cleaning and fumigation business — organizing two service lists and contact details into one clear, scannable layout.",
    tags: ["Flyer Design", "Print Ready", "Client Work"],
    image: "/images/work-flyer-laundry.jpg",
    span: "tall",
    alt: "Young's Laundry and Cleaning Services promotional flyer",
  },
  {
    id: "bold-type-poster",
    title: "Bold Type — Concert Poster",
    category: "Graphic Design",
    desc: "A typographic poster concept using an oversized display face on a strict Swiss grid, with a single gold diagonal cutting through the composition.",
    tags: ["Poster", "Typography", "Wall Print"],
    image: "/images/work-poster.jpg",
    span: "tall",
    alt: "Framed typographic concert poster in orange and white on a navy background",
  },
  {
    id: "social-campaign-kit",
    title: "Brand Campaign — Social Media Kit",
    category: "Graphic Design",
    desc: "A cohesive set of square social media templates — announcements, promos and quote cards — keeping every post instantly on-brand.",
    tags: ["Social Media Graphics", "Digital Art", "Templates"],
    image: "/images/work-social.jpg",
    span: "std",
    alt: "Phone displaying a cohesive grid of navy and orange social media designs",
  },
  {
    id: "expe-logistics-branding",
    title: "Expe Logistics — Delivery Box Branding",
    category: "Branding",
    desc: "Real client branding applied to a delivery bike box — logo, contact numbers and social handles laid out to stay legible in motion, out on the street.",
    tags: ["Vehicle Branding", "Sticker Design", "Client Work"],
    image: "/images/work-branding-expe.jpg",
    span: "wide",
    alt: "Expe Logistics branded delivery box mounted on a delivery bike",
  },
  {
    id: "gold-foil-cards",
    title: "DaveToolz Business Card — Gold & Black",
    category: "Branding",
    desc: "The studio's own business card: matte black stock, gold foil detailing and a clear breakdown of every service on the reverse — design, printing, photocopying, cybercafé, gadgets and repairs.",
    tags: ["Business Cards", "Gold Foil", "Identity"],
    image: "/images/work-business-card.jpg",
    span: "std",
    alt: "DaveToolz Graphics and Gadget business card in gold and black",
  },
  {
    id: "corporate-stationery",
    title: "Brand Guideline Board",
    category: "Branding",
    desc: "Full brand reference sheet: logo variations, colour palette, typography, business card, stationery and merchandise mockups, all on one board so the identity stays consistent everywhere it appears.",
    tags: ["Brand Guidelines", "Identity System", "Stationery"],
    image: "/images/work-brand-board.jpg",
    span: "wide",
    alt: "DaveToolz Graphics full brand guideline board with logo variations and stationery",
  },
  {
    id: "monogram-studies",
    title: "Monogram & Logo Studies",
    category: "Branding",
    desc: "Exploration sheet from a logo project: four monogram directions tested in gold, orange and white before the final mark was chosen.",
    tags: ["Logo Design", "Concept Sheet", "Monogram"],
    board: "logo",
    span: "std",
    alt: "Logo concept sheet showing four monogram studies in gold and orange",
  },
  {
    id: "trifold-brochure",
    title: "Corporate Tri-Fold Brochure",
    category: "Printing",
    desc: "A six-panel brochure with a clear reading flow across the folds — navy header bands, orange call-outs and photography placed on a strict column grid.",
    tags: ["Brochure", "Print Layout", "Corporate"],
    image: "/images/work-brochure.jpg",
    span: "std",
    alt: "Open tri-fold brochure with navy and orange corporate layout",
  },
  {
    id: "large-format-run",
    title: "Large-Format Print Production",
    category: "Printing",
    desc: "Poster run straight off the press: colour-checked proofs, trimmed stacks and finished materials prepared for delivery.",
    tags: ["Large Format", "Posters", "Production"],
    image: "/images/work-print.jpg",
    span: "wide",
    alt: "Large format printer producing vibrant orange and navy posters",
  },
  {
    id: "wedding-suite",
    title: "Wedding Programme Cards — Grace & James",
    category: "Events",
    desc: "Printed reception programme cards for a real client wedding — full run of the day's order of events, laid out clean and easy to follow on the day.",
    tags: ["Wedding Design", "Programme Cards", "Print"],
    image: "/images/work-wedding-real.jpg",
    span: "tall",
    alt: "Stack of printed wedding programme cards for Grace and James",
  },
  {
    id: "event-frame-board",
    title: "Event Frame & Backdrop Design",
    category: "Events",
    desc: "Frame and stage backdrop system for a birthday celebration, with matching social media frame so photos stay on-brand before and after the event.",
    tags: ["Event Frames", "Backdrop", "Birthday"],
    board: "event",
    span: "std",
    alt: "Event frame and stage backdrop design board in navy and gold",
  },
  {
    id: "business-website-ui",
    title: "Business Website — UI Design",
    category: "Web Design",
    desc: "Responsive business website designed and built front to back: navy header, confident orange calls-to-action and clean content sections on every breakpoint.",
    tags: ["Web Design", "Responsive", "Development"],
    image: "/images/work-web.jpg",
    span: "wide",
    alt: "Laptop and phone displaying a responsive navy and orange business website",
  },
  {
    id: "landing-page-board",
    title: "Landing Page — UI Design Board",
    category: "Web Design",
    desc: "Conversion-focused landing page layout: one promise above the fold, proof in the middle, and a single clear action repeated exactly where it is needed.",
    tags: ["Landing Page", "UI/UX", "Frontend"],
    board: "landing",
    span: "std",
    alt: "Landing page user interface design board with hero and card sections",
  },
];

export type PrintCategory = {
  title: string;
  icon: LucideIcon;
  intro: string;
  items: string[];
};

export const PRINT_CATEGORIES: PrintCategory[] = [
  {
    title: "Business Printing",
    icon: Briefcase,
    intro: "Everyday professional materials that keep your business looking established.",
    items: ["Business Cards", "Brochures", "Flyers", "Posters", "Complementary Cards"],
  },
  {
    title: "Event Printing",
    icon: Gift,
    intro: "From the first invitation to the last thank-you card, printed beautifully.",
    items: [
      "Invitation Cards",
      "Event Materials",
      "Memorial / Burial Materials",
      "Birthday Materials",
      "Wedding Materials",
    ],
  },
  {
    title: "Branding Materials",
    icon: BadgeCheck,
    intro: "Physical touchpoints that carry your identity into the real world.",
    items: ["Business Branding", "Promotional Materials", "Branded Items"],
  },
];

export const WHY_POINTS = [
  {
    title: "Creative Design",
    icon: PenTool,
    text: "Professional visual communication designed around the client's goals.",
  },
  {
    title: "One Creative Partner",
    icon: BadgeCheck,
    text: "Design, branding, printing and web solutions under one roof.",
  },
  {
    title: "Business-Focused",
    icon: Briefcase,
    text: "Designs created to help businesses communicate professionally.",
  },
  {
    title: "Local & Accessible",
    icon: PartyPopper,
    text: "Based in Abuja and available to clients who need reliable creative services.",
  },
];

export const PROCESS_STEPS = [
  {
    num: "01",
    title: "Tell Us What You Need",
    text: "Send a message on WhatsApp, call, or fill the quote form with your idea and deadline.",
  },
  {
    num: "02",
    title: "Get a Quote",
    text: "We review the job and send you a clear quote — no hidden surprises.",
  },
  {
    num: "03",
    title: "We Create",
    text: "Design, print or build begins. You see progress and stay in control.",
  },
  {
    num: "04",
    title: "You Approve & Receive",
    text: "After your approval, finished files or printed materials are delivered.",
  },
];

export const WEB_SERVICES = [
  "Business Websites",
  "Portfolio Websites",
  "Landing Pages",
  "Responsive Websites",
  "Frontend Development",
  "Backend Development",
];
