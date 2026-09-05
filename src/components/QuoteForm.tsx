import { useMemo, useRef, useState, type FormEvent } from "react";
import { ArrowRight, Paperclip, X, Loader2, Check } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { SERVICES_FOR_FORM, waLink } from "../lib/site";
import { Btn } from "./ui";

/**
 * Web3Forms access key — tied to davetoolzgraphicsandgadget@gmail.com.
 * Get this free at https://web3forms.com (enter the email above, they email you the key
 * instantly, no account/password needed). Paste it below and the form goes live —
 * nothing else in this file needs to change.
 */
const WEB3FORMS_ACCESS_KEY = "ae8cccc6-7d87-4222-acae-de1eb4f891cc";

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  description: string;
  deadline: string;
};

const EMPTY: FormState = { name: "", phone: "", email: "", service: "", description: "", deadline: "" };

export default function QuoteForm({ prefillService }: { prefillService?: string }) {
  const initial = useMemo<FormState>(
    () => ({
      ...EMPTY,
      service:
        prefillService && (SERVICES_FOR_FORM as readonly string[]).includes(prefillService) ? prefillService : "",
    }),
    [prefillService]
  );
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [fileName, setFileName] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const today = new Date().toISOString().split("T")[0];

  const set = (k: keyof FormState) => (v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const validate = () => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (form.name.trim().length < 2) e.name = "Please enter your name.";
    if (form.phone.replace(/\D/g, "").length < 7) e.phone = "Please enter a valid phone number.";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Please enter a valid email address.";
    if (!form.service) e.service = "Please choose the service you need.";
    if (form.description.trim().length < 10) e.description = "Tell us a little about the project (at least 10 characters).";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus("sending");

    try {
      const fd = new FormData();
      fd.append("access_key", WEB3FORMS_ACCESS_KEY);
      fd.append("subject", `New quote request — ${form.service}`);
      fd.append("from_name", "DaveToolz Graphics — Website Quote Form");
      fd.append("Name", form.name);
      fd.append("Phone", form.phone);
      fd.append("Email", form.email || "Not provided");
      fd.append("Service", form.service);
      fd.append("Description", form.description);
      fd.append("Preferred Deadline", form.deadline || "Not specified");
      const file = fileRef.current?.files?.[0];
      if (file) fd.append("attachment", file);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: fd,
        headers: { Accept: "application/json" },
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const waFollowUp = waLink(
    `Hello DaveToolz Graphics, my name is ${form.name}. I would like to request a quote for: ${form.service}.${
      form.description ? ` Details: ${form.description.slice(0, 180)}` : ""
    }${form.deadline ? ` Preferred deadline: ${form.deadline}.` : ""}`
  );

  const label = "mb-2 block text-[12px] font-medium tracking-[0.04em] text-ash";
  const field = (err?: string) =>
    `w-full border-0 border-b bg-transparent px-0 py-3 text-[15px] text-white placeholder:text-white/30 transition-colors focus:outline-none ${
      err ? "border-gold-400" : "border-white/20 focus:border-gold-400"
    }`;

  if (status === "error") {
    return (
      <div className="animate-rise border-t border-white/20 pt-8" role="alert">
        <h3 className="font-display text-2xl font-bold tracking-[-0.02em] text-white sm:text-3xl">
          Something went wrong sending that.
        </h3>
        <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-ash">
          Your request wasn't delivered. Please try again, or send it directly on WhatsApp instead —
          it'll reach us immediately either way.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Btn href={waFollowUp} external variant="wa" icon={<FaWhatsapp className="text-base" aria-hidden="true" />}>
            Send on WhatsApp instead
          </Btn>
          <Btn variant="outline" onClick={() => setStatus("idle")}>
            Try again
          </Btn>
        </div>
      </div>
    );
  }

  if (status === "success") {
    return (
      <div className="animate-rise border-t border-gold-500/70 pt-8" role="status">
        <span className="grid h-10 w-10 place-items-center border border-gold-500/70 text-gold-400">
          <Check className="h-5 w-5" aria-hidden="true" />
        </span>
        <h3 className="mt-6 font-display text-3xl font-bold tracking-[-0.02em] text-white">Quote request received.</h3>
        <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-ash">
          Thank you, <span className="text-white">{form.name}</span>. Your request for{" "}
          <span className="text-white">{form.service}</span> has been logged. We will review it and contact you on{" "}
          <span className="text-white">{form.phone}</span> with your quote.
        </p>
        {fileName && (
          <p className="mt-4 inline-flex items-center gap-2 text-xs text-ash">
            <Paperclip className="h-3.5 w-3.5 text-gold-400" aria-hidden="true" />
            Reference attached: {fileName}
          </p>
        )}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Btn href={waFollowUp} external variant="wa" icon={<FaWhatsapp className="text-base" aria-hidden="true" />}>
            Also send on WhatsApp
          </Btn>
          <Btn
            variant="outline"
            onClick={() => {
              setForm({ ...EMPTY });
              setFileName(null);
              setStatus("idle");
            }}
          >
            Submit another request
          </Btn>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
        <div>
          <label htmlFor="q-name" className={label}>Name *</label>
          <input id="q-name" type="text" autoComplete="name" placeholder="Your full name" value={form.name} onChange={(e) => set("name")(e.target.value)} className={field(errors.name)} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "q-name-error" : undefined} />
          {errors.name && <FieldError id="q-name-error" msg={errors.name} />}
        </div>
        <div>
          <label htmlFor="q-phone" className={label}>Phone Number *</label>
          <input id="q-phone" type="tel" autoComplete="tel" placeholder="e.g. 0807 151 9250" value={form.phone} onChange={(e) => set("phone")(e.target.value)} className={field(errors.phone)} aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "q-phone-error" : undefined} />
          {errors.phone && <FieldError id="q-phone-error" msg={errors.phone} />}
        </div>
        <div>
          <label htmlFor="q-email" className={label}>Email</label>
          <input id="q-email" type="email" autoComplete="email" placeholder="Optional" value={form.email} onChange={(e) => set("email")(e.target.value)} className={field(errors.email)} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "q-email-error" : undefined} />
          {errors.email && <FieldError id="q-email-error" msg={errors.email} />}
        </div>
        <div>
          <label htmlFor="q-service" className={label}>Service Needed *</label>
          <select
            id="q-service"
            value={form.service}
            onChange={(e) => set("service")(e.target.value)}
            className={`${field(errors.service)} appearance-none ${form.service ? "text-white" : "text-white/30"}`}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? "q-service-error" : undefined}
          >
            <option value="" disabled>Select a service</option>
            {SERVICES_FOR_FORM.map((s) => (
              <option key={s} value={s} className="bg-coal-900 text-white">{s}</option>
            ))}
          </select>
          {errors.service && <FieldError id="q-service-error" msg={errors.service} />}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="q-desc" className={label}>Project Description *</label>
          <textarea
            id="q-desc"
            rows={4}
            placeholder="What you need, quantity, sizes, colours, links or references…"
            value={form.description}
            onChange={(e) => set("description")(e.target.value)}
            className={`${field(errors.description)} resize-y`}
            aria-invalid={Boolean(errors.description)}
            aria-describedby={errors.description ? "q-description-error" : undefined}
          />
          {errors.description && <FieldError id="q-description-error" msg={errors.description} />}
        </div>
        <div>
          <label htmlFor="q-deadline" className={label}>Preferred Deadline</label>
          <input id="q-deadline" type="date" min={today} value={form.deadline} onChange={(e) => set("deadline")(e.target.value)} className={`${field()} [color-scheme:dark]`} />
        </div>
        <div>
          <span className={label}>Upload Reference / Design (optional)</span>
          <input ref={fileRef} id="q-file" type="file" accept="image/*,.pdf,.ai,.psd,.cdr" className="hidden" onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)} />
          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            className="flex w-full items-center gap-2 border-b border-dashed border-white/25 py-3 text-[15px] text-white/50 transition hover:border-gold-400 hover:text-white"
          >
            <Paperclip className="h-4 w-4" aria-hidden="true" />
            {fileName ? "Change file" : "Choose file"}
          </button>
          {fileName && (
            <span className="mt-2 inline-flex items-center gap-2 text-xs text-ash">
              {fileName}
              <button
                type="button"
                onClick={() => {
                  setFileName(null);
                  if (fileRef.current) fileRef.current.value = "";
                }}
                aria-label="Remove attached file"
                className="text-ash transition hover:text-white"
              >
                <X className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            </span>
          )}
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
        <Btn
          type="submit"
          size="lg"
          iconRight={status === "sending" ? <Loader2 className="h-4 w-4 animate-spin text-gold-400" aria-hidden="true" /> : <ArrowRight className="h-4 w-4 text-gold-400" aria-hidden="true" />}
        >
          {status === "sending" ? "Sending…" : "Request My Quote"}
        </Btn>
        <p className="text-xs leading-relaxed text-ash">We reply with a clear quote and next steps.</p>
      </div>
    </form>
  );
}

function FieldError({ id, msg }: { id: string; msg: string }) {
  return (
    <p id={id} className="mt-2 text-xs text-gold-300" role="alert">
      {msg}
    </p>
  );
}
