import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Calendar, Check, Shield, Zap, Lock, ArrowRight, User, Building2, Briefcase, Clock } from "lucide-react";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Lanos Innovation" },
      { name: "description", content: "Start a serious project conversation with Lanos Innovation. Book a call, send a message, or reach us on WhatsApp." },
      { property: "og:title", content: "Contact — Lanos Innovation" },
      { property: "og:description", content: "Start your build with Lanos Innovation." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const Schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Valid work email required").max(255),
  company: z.string().trim().max(100).optional().or(z.literal("")),
  budget: z.string().max(50).optional().or(z.literal("")),
  timeline: z.string().max(50).optional().or(z.literal("")),
  service: z.string().max(80).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Tell us a bit more").max(2000),
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd) as Record<string, string>;
    const parsed = Schema.safeParse(data);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Please check the form.");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    const body = `Name: ${parsed.data.name}\nCompany: ${parsed.data.company ?? ""}\nBudget: ${parsed.data.budget ?? ""}\nTimeline: ${parsed.data.timeline ?? ""}\nService: ${parsed.data.service ?? ""}\n\n${parsed.data.message}`;
    window.location.href = `mailto:hello@lanosinnovation.com?subject=${encodeURIComponent(`New inquiry — ${parsed.data.name}`)}&body=${encodeURIComponent(body)}`;
    setLoading(false);
    setSent(true);
  };

  return (
    <section className="relative min-h-screen overflow-hidden pt-32 pb-24">
      {/* Subtle neural ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full opacity-20 blur-3xl"
             style={{ background: "radial-gradient(circle, var(--accent), transparent 70%)" }} />
        <div className="absolute -right-40 bottom-20 h-[600px] w-[600px] rounded-full opacity-15 blur-3xl"
             style={{ background: "radial-gradient(circle, var(--accent-hover), transparent 70%)" }} />
        <svg className="absolute inset-0 h-full w-full opacity-[0.08]" viewBox="0 0 800 600" preserveAspectRatio="none">
          <motion.path
            d="M0,400 Q200,300 400,380 T800,360"
            fill="none" stroke="var(--accent)" strokeWidth="1"
            animate={{ pathLength: [0, 1, 1], opacity: [0, 0.6, 0.6] }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.path
            d="M0,500 Q300,420 500,470 T800,440"
            fill="none" stroke="var(--accent-hover)" strokeWidth="1"
            animate={{ pathLength: [0, 1, 1], opacity: [0, 0.4, 0.4] }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
          />
        </svg>
      </div>

      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[45fr_55fr] lg:gap-20">
        {/* LEFT — Conversation */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-3">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--accent-hover)]">Contact us</p>
            <div className="h-px w-12 bg-gradient-to-r from-[color:var(--accent)] to-transparent" />
          </div>

          <h1 className="mt-6 text-5xl leading-[1.05] text-[color:var(--navy)] md:text-6xl lg:text-[64px]">
            Let's build something
            <br />
            that <span className="text-gradient italic">compounds.</span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-[color:var(--muted-foreground)]">
            Share your vision. We'll map the smartest path forward and respond within one business day.
          </p>

          <div className="mt-12 space-y-3">
            <ContactCard
              href="https://calendly.com/"
              icon={<Calendar className="h-5 w-5" />}
              title="Book a Call"
              sub="Schedule a 30-minute strategy call."
              variant="lift"
            />
            <ContactCard
              href="mailto:hello@lanosinnovation.com"
              icon={<Mail className="h-5 w-5" />}
              title="Email Us"
              sub="hello@lanosinnovation.com"
              variant="glow"
            />
            <ContactCard
              href="https://wa.me/"
              icon={<MessageSquare className="h-5 w-5" />}
              title="WhatsApp"
              sub="Quick conversation. Real answers."
              variant="magnetic"
            />
          </div>
        </div>

        {/* RIGHT — Premium form panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[28px] p-[1px]"
          style={{
            background: "linear-gradient(135deg, color-mix(in oklab, var(--accent) 30%, transparent), transparent 40%, color-mix(in oklab, var(--accent-hover) 25%, transparent))",
          }}
        >
          <div
            className="relative overflow-hidden rounded-[27px] p-8 md:p-10"
            style={{
              background: "linear-gradient(160deg, oklch(0.22 0.06 250) 0%, oklch(0.16 0.05 255) 50%, oklch(0.20 0.06 252) 100%)",
              boxShadow: "0 50px 100px -30px rgba(7,26,46,0.6), inset 0 1px 0 color-mix(in oklab, white 6%, transparent)",
            }}
          >
            {/* Internal glow */}
            <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full opacity-30 blur-3xl"
                 style={{ background: "radial-gradient(circle, var(--accent), transparent 60%)" }} />
            <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full opacity-20 blur-3xl"
                 style={{ background: "radial-gradient(circle, var(--accent-hover), transparent 60%)" }} />

            {sent ? (
              <SuccessState />
            ) : (
              <div className="relative">
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-2xl text-white md:text-3xl" style={{ fontFamily: "var(--font-display)" }}>
                      Start the conversation
                    </h2>
                    <p className="mt-2 text-sm text-white/60">Tell us about your project and goals.</p>
                  </div>
                  <div className="hidden shrink-0 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-md sm:flex">
                    <Shield className="h-4 w-4 text-[color:var(--accent)]" />
                    <div className="text-[10px] leading-tight text-white/80">
                      Your data is safe with us.<br /><span className="text-white/50">Zero spam. Ever.</span>
                    </div>
                  </div>
                </div>

                <form onSubmit={onSubmit} className="mt-8 grid gap-5">
                  <div className="grid gap-5 md:grid-cols-2">
                    <Field name="name" label="Your Name" icon={<User className="h-4 w-4" />} required placeholder="Enter your name" />
                    <Field name="email" type="email" label="Work Email" icon={<Mail className="h-4 w-4" />} required placeholder="Enter your work email" />
                  </div>
                  <div className="grid gap-5 md:grid-cols-2">
                    <Field name="company" label="Company Name" icon={<Building2 className="h-4 w-4" />} placeholder="Enter your company" />
                    <SelectField name="budget" label="Project Budget" icon={<Briefcase className="h-4 w-4" />} placeholder="Select your budget range"
                      options={["Under $10k", "$10k – $25k", "$25k – $50k", "$50k – $100k", "$100k+"]} />
                  </div>
                  <div className="grid gap-5 md:grid-cols-2">
                    <SelectField name="timeline" label="Project Timeline" icon={<Clock className="h-4 w-4" />} placeholder="When do you plan to start?"
                      options={["ASAP", "Within 1 month", "1–3 months", "3–6 months", "Just exploring"]} />
                    <SelectField name="service" label="What can we help you build?" placeholder="Select a service"
                      options={["Custom Software", "AI Agents & Automation", "AI Ads & Growth", "Not sure yet"]} />
                  </div>

                  <label className="block">
                    <span className="text-[11px] font-medium uppercase tracking-widest text-white/60">Tell us more about your project</span>
                    <textarea
                      name="message" rows={5} required maxLength={2000}
                      placeholder="Describe your goals, challenges, timeline, and what success looks like."
                      className="luxe-input mt-2 w-full resize-none px-4 py-3 text-sm"
                    />
                  </label>

                  {error && (
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-[color:var(--destructive)]">
                      {error}
                    </motion.p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="group relative mt-2 inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full py-4 text-sm font-semibold text-white shadow-[0_20px_50px_-15px_color-mix(in_oklab,var(--accent)_60%,transparent)] transition-transform hover:-translate-y-0.5 disabled:opacity-70"
                    style={{
                      background: "linear-gradient(95deg, var(--accent-hover) 0%, oklch(0.55 0.22 255) 50%, var(--accent) 100%)",
                    }}
                  >
                    <span
                      className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                    />
                    {loading ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Inquiry
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </form>

                {/* Trust strip */}
                <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md sm:flex-row sm:items-center">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="h-7 w-7 rounded-full border-2 border-[color:var(--navy)]"
                             style={{ background: `linear-gradient(135deg, var(--accent), var(--accent-hover) ${i * 30}%)` }} />
                      ))}
                    </div>
                    <div className="text-[12px] leading-tight text-white/85">
                      Trusted by ambitious teams worldwide
                      <div className="text-[10px] text-white/50">We don't just build. We build what matters.</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-white/60">
                    <TrustIcon icon={<Zap className="h-3.5 w-3.5" />} label="Fast" />
                    <TrustIcon icon={<Shield className="h-3.5 w-3.5" />} label="Secure" />
                    <TrustIcon icon={<Lock className="h-3.5 w-3.5" />} label="Private" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Inline luxe-input styles */}
      <style>{`
        .luxe-input {
          background: color-mix(in oklab, white 4%, transparent);
          border: 1px solid color-mix(in oklab, white 10%, transparent);
          border-radius: 12px;
          color: white;
          outline: none;
          transition: border-color 0.3s, box-shadow 0.3s, background 0.3s;
        }
        .luxe-input::placeholder { color: color-mix(in oklab, white 35%, transparent); }
        .luxe-input:hover {
          border-color: color-mix(in oklab, var(--accent) 40%, transparent);
        }
        .luxe-input:focus {
          border-color: color-mix(in oklab, var(--accent) 70%, transparent);
          box-shadow: 0 0 0 4px color-mix(in oklab, var(--accent) 15%, transparent),
                      inset 0 0 24px color-mix(in oklab, var(--accent) 8%, transparent);
          background: color-mix(in oklab, white 6%, transparent);
        }
        select.luxe-input option { background: oklch(0.18 0.05 255); color: white; }
      `}</style>
    </section>
  );
}

function Field({ name, label, icon, type = "text", required, placeholder }: { name: string; label: string; icon?: React.ReactNode; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <label className="block">
      <span className="text-[11px] font-medium uppercase tracking-widest text-white/60">{label}</span>
      <div className="relative mt-2">
        {icon && <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40">{icon}</span>}
        <input
          name={name} type={type} required={required} placeholder={placeholder} maxLength={255}
          className={`luxe-input w-full py-3 text-sm ${icon ? "pl-10 pr-4" : "px-4"}`}
        />
      </div>
    </label>
  );
}

function SelectField({ name, label, icon, placeholder, options }: { name: string; label: string; icon?: React.ReactNode; placeholder: string; options: string[] }) {
  return (
    <label className="block">
      <span className="text-[11px] font-medium uppercase tracking-widest text-white/60">{label}</span>
      <div className="relative mt-2">
        {icon && <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40">{icon}</span>}
        <select
          name={name} defaultValue=""
          className={`luxe-input w-full appearance-none py-3 text-sm ${icon ? "pl-10 pr-10" : "px-4 pr-10"}`}
        >
          <option value="" disabled>{placeholder}</option>
          {options.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
        <svg className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" viewBox="0 0 20 20" fill="currentColor">
          <path d="M5.5 7.5L10 12l4.5-4.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </svg>
      </div>
    </label>
  );
}

function ContactCard({ href, icon, title, sub, variant }: { href: string; icon: React.ReactNode; title: string; sub: string; variant: "lift" | "glow" | "magnetic" }) {
  const variantClass =
    variant === "lift" ? "hover:-translate-y-1" :
    variant === "glow" ? "hover:shadow-[0_20px_60px_-20px_color-mix(in_oklab,var(--accent)_60%,transparent)]" :
    "hover:border-[color:var(--accent)] hover:bg-white";
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className={`group flex items-center gap-4 rounded-2xl border hairline bg-white/80 p-5 backdrop-blur-md transition-all duration-300 ${variantClass}`}
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white transition-transform group-hover:scale-105"
           style={{ background: "linear-gradient(135deg, var(--accent-hover), var(--accent))" }}>
        {icon}
      </div>
      <div className="flex-1">
        <div className="text-sm font-semibold text-[color:var(--navy)]">{title}</div>
        <div className="text-xs text-[color:var(--muted-foreground)]">{sub}</div>
      </div>
      <ArrowRight className="h-4 w-4 text-[color:var(--muted-foreground)] transition-all group-hover:translate-x-1 group-hover:text-[color:var(--accent-hover)]" />
    </a>
  );
}

function TrustIcon({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-1 rounded-md bg-white/5 px-2 py-1 text-[10px]">
      {icon}<span>{label}</span>
    </div>
  );
}

function SuccessState() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center gap-4 py-20 text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="flex h-16 w-16 items-center justify-center rounded-full"
        style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-hover))" }}
      >
        <Check className="h-7 w-7 text-white" />
      </motion.div>
      <h2 className="text-2xl text-white" style={{ fontFamily: "var(--font-display)" }}>Inquiry on its way</h2>
      <p className="max-w-xs text-sm text-white/60">Your email client should be opening. If not, write to hello@lanosinnovation.com — we reply within one business day.</p>
    </motion.div>
  );
}
