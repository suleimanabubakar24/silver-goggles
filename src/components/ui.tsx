import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { waLink } from "../lib/site";

/* ---------------- Scroll reveal ---------------- */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "is-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ---------------- Emphasis word (gold italic serif, ties to the logo mark) ---------------- */
export function Em({ children }: { children: ReactNode }) {
  return <em className="font-mark not-italic italic font-medium text-gold-400">{children}</em>;
}

/* ---------------- Section heading ---------------- */
export function SectionHead({
  eyebrow,
  title,
  lead,
  tone = "dark",
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <div className={`max-w-2xl ${className}`}>
      <p className={`eyebrow flex items-center gap-3 ${dark ? "text-gold-400" : "text-gold-600"}`}>
        <span className="h-px w-6 bg-current" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2
        className={`mt-5 font-display text-3xl font-bold leading-[1.08] tracking-[-0.02em] sm:text-4xl lg:text-[2.75rem] ${
          dark ? "text-white" : "text-black"
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p className={`mt-5 max-w-xl text-base leading-relaxed sm:text-[17px] ${dark ? "text-ash" : "text-graphite"}`}>
          {lead}
        </p>
      )}
    </div>
  );
}

/* ---------------- Buttons ---------------- */
type BtnProps = {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: "primary" | "outline" | "outlineDark" | "wa" | "white" | "link";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
  iconRight?: ReactNode;
  external?: boolean;
  className?: string;
  type?: "button" | "submit";
  ariaLabel?: string;
};

export function Btn({
  href,
  onClick,
  children,
  variant = "primary",
  size = "md",
  icon,
  iconRight,
  external,
  className = "",
  type = "button",
  ariaLabel,
}: BtnProps) {
  const base =
    "inline-flex items-center justify-center gap-2.5 font-display font-semibold tracking-[0.01em] transition-colors duration-300 select-none";
  const sizes = {
    sm: "px-4 py-2.5 text-[13px]",
    md: "px-6 py-3.5 text-sm",
    lg: "px-7 py-4 text-[15px]",
  }[size];
  const variants = {
    primary:
      "bg-brand-red-500 text-white border border-brand-red-500 hover:bg-brand-red-600 hover:border-brand-red-600",
    outline: "border border-white/20 text-white hover:border-brand-red-400 hover:text-brand-red-400",
    outlineDark: "border border-black/25 text-black hover:border-brand-red-500 hover:text-brand-red-500",
    wa: "bg-wa-500 text-[#04301a] hover:bg-wa-600 hover:text-white",
    white: "bg-white text-black hover:bg-cream",
    link: "px-0 py-0 text-gold-400 hover:text-gold-300",
  }[variant];
  const cls = `${base} ${variant === "link" ? "" : sizes} ${variants} ${className}`;
  const inner = (
    <>
      {icon}
      <span>{children}</span>
      {iconRight ?? null}
    </>
  );
  if (href) {
    return (
      <a
        href={href}
        aria-label={ariaLabel}
        className={cls}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        onClick={onClick}
      >
        {inner}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls} aria-label={ariaLabel}>
      {inner}
    </button>
  );
}

export function WaBtn({
  msg,
  children = "WhatsApp Us",
  variant = "wa",
  size = "md",
  className = "",
}: {
  msg?: string;
  children?: ReactNode;
  variant?: "wa" | "outline" | "outlineDark";
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  return (
    <Btn
      href={waLink(msg)}
      external
      variant={variant}
      size={size}
      className={className}
      icon={<FaWhatsapp className={`text-base ${variant === "wa" ? "" : "text-wa-500"}`} aria-hidden="true" />}
    >
      {children}
    </Btn>
  );
}

/* ---------------- Arrow link ---------------- */
export function ArrowLink({ href, children, tone = "dark" }: { href: string; children: ReactNode; tone?: "dark" | "light" }) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-2 font-display text-sm font-semibold transition-colors ${
        tone === "dark" ? "text-white hover:text-gold-300" : "text-black hover:text-gold-600"
      }`}
    >
      {children}
      <ArrowRight className="h-4 w-4 text-gold-400 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
    </a>
  );
}

/* ---------------- Closing CTA ---------------- */
export function CtaBand({
  title = (
    <>
      Let's create something <Em>great.</Em>
    </>
  ),
  text = "Have a design, printing or web project in mind? Tell us what you need and let's discuss it.",
  primaryLabel = "Request a Quote",
  primaryHref = "#/contact",
  waMsg,
  waLabel = "WhatsApp Us",
}: {
  title?: ReactNode;
  text?: string;
  primaryLabel?: string;
  primaryHref?: string;
  waMsg?: string;
  waLabel?: string;
}) {
  return (
    <section className="bg-black" aria-label="Call to action">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="rule-gold" aria-hidden="true" />
          <div className="grid gap-10 py-20 lg:grid-cols-12 lg:items-end lg:py-28">
            <div className="lg:col-span-8">
              <h2 className="font-display text-4xl font-bold leading-[1.02] tracking-[-0.025em] text-white sm:text-5xl lg:text-6xl">
                {title}
              </h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-ash sm:text-[17px]">{text}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:justify-end">
              <Btn href={primaryHref} size="lg" iconRight={<ArrowRight className="h-4 w-4 text-gold-400" aria-hidden="true" />}>
                {primaryLabel}
              </Btn>
              <WaBtn msg={waMsg} size="lg" variant="outline">
                {waLabel}
              </WaBtn>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Page header (inner pages) ---------------- */
export function PageHero({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  children?: ReactNode;
}) {
  return (
    <header className="border-b border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-5 pb-16 pt-14 sm:px-8 lg:px-12 lg:pb-24 lg:pt-24">
        <Reveal>
          <nav aria-label="Breadcrumb" className="eyebrow flex items-center gap-3 text-ash">
            <a href="#/" className="transition hover:text-white">
              Home
            </a>
            <span className="h-px w-4 bg-gold-500" aria-hidden="true" />
            <span className="text-gold-400">{eyebrow}</span>
          </nav>
          <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-end">
            <h1 className="font-display text-4xl font-bold leading-[1.02] tracking-[-0.025em] text-white sm:text-5xl lg:col-span-8 lg:text-6xl">
              {title}
            </h1>
            {lead && (
              <p className="max-w-md text-base leading-relaxed text-ash sm:text-[17px] lg:col-span-4 lg:pb-2">
                {lead}
              </p>
            )}
          </div>
          {children && <div className="mt-10">{children}</div>}
        </Reveal>
      </div>
    </header>
  );
}
