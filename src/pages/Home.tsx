import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Bot, TrendingUp, Check, Clock, Zap, PiggyBank, Search, ClipboardList, FileText, Rocket } from "lucide-react";
import { NeuralOrb } from "@/components/NeuralOrb";
import logoUrl from "../assets/lanos-logo.png";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7 },
} as const;

function Hero() {
  const words = ["Build", "what", "competitors", "won't", "see", "coming."];
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-white" />
        <div className="absolute -left-32 -top-32 h-[600px] w-[600px] rounded-full opacity-30 blur-3xl"
             style={{ background: "radial-gradient(circle, var(--accent), transparent 70%)" }} />
        <div className="absolute -bottom-40 right-0 h-[700px] w-[700px] rounded-full opacity-25 blur-3xl"
             style={{ background: "radial-gradient(circle, var(--accent-hover), transparent 70%)" }} />
        <div className="absolute inset-0 opacity-[0.5]"
             style={{
               background: "linear-gradient(180deg, transparent 0%, transparent 60%, color-mix(in oklab, var(--navy) 4%, transparent) 100%)",
             }} />
        <div className="noise-overlay" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-[1.6fr_1fr] lg:gap-8 lg:py-0">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[11px] font-medium uppercase tracking-[0.22em] text-[color:var(--muted-foreground)]"
          >
            <span className="text-[color:var(--navy)]">Lanos Innovation</span>
            <span className="mx-2">•</span>
            Engineered for the AI era
          </motion.p>

          <h1 className="mt-6 text-5xl font-normal leading-[1.02] text-[color:var(--navy)] md:text-7xl lg:text-[88px]">
            {words.map((w, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.08, ease: "easeOut" }}
                className="mr-[0.25em] inline-block"
              >
                {i >= 2 ? <span className="text-gradient">{w}</span> : w}
              </motion.span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-8 grid max-w-xl gap-1 text-lg text-[color:var(--foreground)]/80 md:text-xl"
          >
            <p>Software.</p>
            <p>Intelligence.</p>
            <p>Growth.</p>
            <p className="mt-3 text-base text-[color:var(--muted-foreground)]">
              Designed as systems — not services.
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.05 }}
            className="mt-6 max-w-lg text-sm text-[color:var(--muted-foreground)] md:text-base"
          >
            We architect software, AI operations, and growth engines that compound over time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/contact"
              className="btn-magnetic btn-primary group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium"
            >
              Start Your Build
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/process"
              className="btn-magnetic group inline-flex items-center gap-2 rounded-full border hairline bg-white/60 px-7 py-3.5 text-sm font-medium text-[color:var(--navy)] backdrop-blur hover:border-[color:var(--accent)]"
            >
              See How We Think
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.4 }}
            className="mt-8 text-xs text-[color:var(--muted-foreground)]"
          >
            Trusted by ambitious businesses building their next phase.
          </motion.p>
        </div>

        <div className="flex items-center justify-center lg:justify-end">
          <NeuralOrb />
        </div>
      </div>
    </section>
  );
}

function WhyExists() {
  const metrics = [
    { k: "Hours Saved", v: "+40%", d: "Per week, across operations", icon: Clock },
    { k: "Revenue Impact", v: "3.2×", d: "Compounded over 12 months", icon: TrendingUp },
    { k: "Faster Delivery", v: "60%", d: "Time-to-launch reduction", icon: Zap },
    { k: "Cost Efficiency", v: "−35%", d: "Operating cost decrease", icon: PiggyBank },
  ];

  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.p {...fadeUp} className="text-xs uppercase tracking-[0.22em] text-[color:var(--muted-foreground)]">
          Why Lanos exists
        </motion.p>
        <div className="mt-6 grid gap-12 md:grid-cols-2 md:gap-20">
          <motion.h2 {...fadeUp} className="text-4xl leading-tight text-[color:var(--navy)] md:text-5xl">
            We're not selling AI.
            <br />
            <span className="text-gradient">We're solving operational debt.</span>
          </motion.h2>
          <motion.p {...fadeUp} className="self-end text-base text-[color:var(--muted-foreground)]">
            Most businesses don't need more tools. They need better systems — engineered to compound, not to clutter. Every Lanos build is designed to remove friction, not add it.
          </motion.p>
        </div>

        {/* Rotating glass-orb stat cards — replaces the old flat square grid.
            Same 4 metrics, same copy, now styled as spinning spheres using
            this page's own CSS custom properties so colors stay in sync
            with the rest of the site automatically. */}
        <div className="mt-20 grid grid-cols-2 gap-x-4 gap-y-12 sm:gap-x-6 md:flex md:flex-wrap md:items-start md:justify-center md:gap-12 lg:gap-16">
          {metrics.map((m, i) => (
            <StatOrb key={m.k} metric={m} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

type Metric = { k: string; v: string; d: string; icon: typeof Clock };

function StatOrb({ metric, index }: { metric: Metric; index: number }) {
  const Icon = metric.icon;
  // Alternate accent between the two brand tones already defined as
  // CSS variables on this page, so the orbs read as one coherent set
  // instead of four unrelated colors.
  const accentVar = index % 2 === 0 ? "var(--accent)" : "var(--accent-hover)";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="flex flex-col items-center"
    >
      <div className="relative flex items-center justify-center">
        {/* Ambient glow behind the sphere */}
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-4 rounded-full opacity-60 blur-2xl"
          style={{ background: accentVar }}
        />

        {/* Rotating glass sphere */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
          className="relative flex h-[112px] w-[112px] items-center justify-center overflow-hidden rounded-full border hairline sm:h-[140px] sm:w-[140px] md:h-[160px] md:w-[160px]"
          style={{
            background:
              "radial-gradient(circle at 30% 28%, rgba(255,255,255,0.95), color-mix(in oklab, var(--accent) 8%, white) 55%, color-mix(in oklab, var(--accent) 14%, white) 100%)",
            boxShadow:
              "inset 10px 10px 22px rgba(255,255,255,0.7), inset -14px -18px 30px color-mix(in oklab, var(--navy) 12%, transparent), 0 18px 40px -16px rgba(7,26,46,0.25)",
          }}
        >
          {/* Counter-rotating tinted wash for parallax shimmer */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 11, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${accentVar}, transparent 65%)`,
              opacity: 0.16,
            }}
          />

          {/* Faint orbit rings for texture */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
            className="absolute inset-3 rounded-full"
            style={{ border: "1px solid color-mix(in oklab, var(--navy) 10%, transparent)" }}
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 13, repeat: Infinity, ease: "linear" }}
            className="absolute inset-7 rounded-full"
            style={{ border: "1px solid color-mix(in oklab, var(--navy) 6%, transparent)" }}
          />

          {/* Specular shine */}
          <div className="absolute left-[18%] top-[12%] h-9 w-11 rounded-full bg-white/50 blur-lg sm:h-11 sm:w-12" />

          {/* Static content — never rotates */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5">
            <div
              className="flex h-8 w-8 items-center justify-center rounded-full text-white shadow-[0_8px_18px_-8px_rgba(7,26,46,0.5)] sm:h-9 sm:w-9 md:h-10 md:w-10"
              style={{ background: "linear-gradient(135deg, var(--navy), color-mix(in oklab, var(--navy) 70%, var(--accent-hover)))" }}
            >
              <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-[18px] md:w-[18px]" strokeWidth={1.8} />
            </div>
            <span className="text-lg font-semibold tracking-tight text-[color:var(--navy)] sm:text-2xl md:text-[28px]">
              {metric.v}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Label — sits below the circle, never overlapping it */}
      <div className="mt-4 max-w-[130px] text-center sm:mt-5 sm:max-w-[160px]">
        <h3 className="text-[13px] font-medium leading-tight text-[color:var(--navy)] sm:text-sm">
          {metric.k}
        </h3>
        <p className="mt-1 text-[11px] leading-snug text-[color:var(--muted-foreground)] sm:text-xs">
          {metric.d}
        </p>
      </div>
    </motion.div>
  );
}

function SoftwarePreview() {
  return (
    <svg viewBox="0 0 400 220" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="sw-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--navy)" />
          <stop offset="100%" stopColor="var(--midnight)" />
        </linearGradient>
        <linearGradient id="sw-chart" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.7" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g transform="translate(40 22) rotate(-6 160 88)">
        <rect width="320" height="176" rx="14" fill="url(#sw-bg)" />
        <rect x="0" y="0" width="320" height="22" rx="14" fill="#0b1830" />
        <circle cx="14" cy="11" r="3" fill="#ff5f57" />
        <circle cx="26" cy="11" r="3" fill="#febc2e" />
        <circle cx="38" cy="11" r="3" fill="#28c840" />
        {/* Sidebar */}
        <rect x="10" y="32" width="64" height="134" rx="8" fill="#0b1830" />
        {[0,1,2,3,4].map(i => (
          <rect key={i} x="18" y={42 + i*22} width="48" height="6" rx="3" fill="var(--accent)" fillOpacity={i===1 ? 0.9 : 0.2} />
        ))}
        {/* Main chart card */}
        <rect x="82" y="32" width="228" height="84" rx="8" fill="#0b1830" />
        <path d="M92 100 L122 78 L150 88 L182 60 L214 70 L246 48 L290 58 L290 108 L92 108 Z" fill="url(#sw-chart)" />
        <path d="M92 100 L122 78 L150 88 L182 60 L214 70 L246 48 L290 58" stroke="var(--accent)" strokeWidth="1.6" fill="none" />
        {[122,150,182,214,246,290].map((x,i)=>(
          <circle key={i} cx={x} cy={[78,88,60,70,48,58][i]} r="2" fill="var(--accent)" />
        ))}
        {/* Stat cards */}
        <rect x="82" y="124" width="72" height="42" rx="6" fill="#0b1830" />
        <rect x="90" y="132" width="32" height="5" rx="2" fill="var(--accent)" fillOpacity="0.6" />
        <rect x="90" y="144" width="48" height="10" rx="2" fill="#fff" fillOpacity="0.9" />
        <rect x="160" y="124" width="72" height="42" rx="6" fill="#0b1830" />
        <rect x="168" y="132" width="40" height="5" rx="2" fill="var(--accent)" fillOpacity="0.4" />
        <rect x="168" y="144" width="36" height="10" rx="2" fill="#fff" fillOpacity="0.9" />
        <rect x="238" y="124" width="72" height="42" rx="6" fill="#0b1830" />
        <rect x="246" y="132" width="28" height="5" rx="2" fill="var(--accent)" fillOpacity="0.5" />
        <rect x="246" y="144" width="44" height="10" rx="2" fill="#fff" fillOpacity="0.9" />
      </g>
    </svg>
  );
}

function AIPreview() {
  return (
    <svg viewBox="0 0 400 220" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="ai-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0" />
          <stop offset="50%" stopColor="var(--accent)" stopOpacity="0.8" />
          <stop offset="100%" stopColor="var(--accent-hover)" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Inputs */}
      {["CRM","Forms","APIs"].map((t,i)=>(
        <g key={t} transform={`translate(20 ${36 + i*52})`}>
          <rect width="92" height="36" rx="8" fill="#fff" stroke="var(--navy)" strokeOpacity="0.12" />
          <circle cx="14" cy="18" r="5" fill="var(--accent)" fillOpacity="0.2" />
          <circle cx="14" cy="18" r="2" fill="var(--accent)" />
          <text x="28" y="22" fontSize="10" fontFamily="Inter, sans-serif" fill="var(--navy)" fontWeight="500">{t}</text>
        </g>
      ))}
      {/* Center engine */}
      <g transform="translate(160 70)">
        <rect width="80" height="80" rx="16" fill="var(--navy)" />
        <circle cx="40" cy="40" r="28" fill="none" stroke="var(--accent)" strokeOpacity="0.4" strokeDasharray="2 3" />
        <circle cx="40" cy="40" r="14" fill="var(--accent)" fillOpacity="0.2" />
        <circle cx="40" cy="40" r="6" fill="var(--accent)" />
        <text x="40" y="120" textAnchor="middle" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="600" fill="var(--navy)">AI Engine</text>
      </g>
      {/* Outputs */}
      {["Actions","Updates","Alerts"].map((t,i)=>(
        <g key={t} transform={`translate(288 ${36 + i*52})`}>
          <rect width="92" height="36" rx="8" fill="#fff" stroke="var(--navy)" strokeOpacity="0.12" />
          <rect x="8" y="14" width="14" height="8" rx="2" fill="var(--accent-hover)" fillOpacity="0.25" />
          <text x="28" y="22" fontSize="10" fontFamily="Inter, sans-serif" fill="var(--navy)" fontWeight="500">{t}</text>
        </g>
      ))}
      {/* Connecting lines */}
      {[0,1,2].map(i=>(
        <g key={i}>
          <path d={`M112 ${54 + i*52} C 140 ${54 + i*52}, 140 110, 160 110`} stroke="url(#ai-line)" strokeWidth="1.4" fill="none" />
          <path d={`M240 110 C 260 110, 260 ${54 + i*52}, 288 ${54 + i*52}`} stroke="url(#ai-line)" strokeWidth="1.4" fill="none" />
        </g>
      ))}
    </svg>
  );
}

function GrowthPreview() {
  return (
    <svg viewBox="0 0 400 220" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="gr-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--accent-hover)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="var(--accent-hover)" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Main analytics card */}
      <g transform="translate(24 24)">
        <rect width="240" height="172" rx="14" fill="#fff" stroke="var(--navy)" strokeOpacity="0.08" />
        <rect x="16" y="16" width="80" height="8" rx="3" fill="var(--navy)" fillOpacity="0.7" />
        <rect x="16" y="30" width="50" height="6" rx="2" fill="var(--navy)" fillOpacity="0.2" />
        <text x="16" y="68" fontSize="22" fontFamily="Inter, sans-serif" fontWeight="700" fill="var(--navy)">3.4×</text>
        <rect x="64" y="58" width="34" height="14" rx="7" fill="var(--accent)" fillOpacity="0.2" />
        <text x="81" y="68" textAnchor="middle" fontSize="8" fontFamily="Inter, sans-serif" fontWeight="700" fill="var(--accent-hover)">ROAS</text>
        {/* area chart */}
        <path d="M16 140 L48 120 L80 128 L112 100 L144 110 L176 80 L208 70 L224 64 L224 156 L16 156 Z" fill="url(#gr-area)" />
        <path d="M16 140 L48 120 L80 128 L112 100 L144 110 L176 80 L208 70 L224 64" stroke="var(--accent-hover)" strokeWidth="1.8" fill="none" />
        <circle cx="224" cy="64" r="3" fill="var(--accent-hover)" />
        <circle cx="224" cy="64" r="6" fill="var(--accent-hover)" fillOpacity="0.25" />
      </g>
      {/* Side metric cards */}
      <g transform="translate(280 24)">
        <rect width="96" height="52" rx="10" fill="var(--navy)" />
        <rect x="12" y="12" width="36" height="6" rx="2" fill="var(--accent)" fillOpacity="0.7" />
        <text x="12" y="38" fontSize="14" fontFamily="Inter, sans-serif" fontWeight="700" fill="#fff">+128%</text>
      </g>
      <g transform="translate(280 84)">
        <rect width="96" height="52" rx="10" fill="#fff" stroke="var(--navy)" strokeOpacity="0.08" />
        <rect x="12" y="12" width="40" height="6" rx="2" fill="var(--navy)" fillOpacity="0.5" />
        <text x="12" y="38" fontSize="14" fontFamily="Inter, sans-serif" fontWeight="700" fill="var(--navy)">−42% CAC</text>
      </g>
      <g transform="translate(280 144)">
        <rect width="96" height="52" rx="10" fill="#fff" stroke="var(--navy)" strokeOpacity="0.08" />
        <rect x="12" y="12" width="40" height="6" rx="2" fill="var(--accent-hover)" fillOpacity="0.7" />
        <text x="12" y="38" fontSize="14" fontFamily="Inter, sans-serif" fontWeight="700" fill="var(--navy)">12.4k</text>
      </g>
    </svg>
  );
}

function Services() {
  const services = [
    {
      icon: Code2,
      title: "Custom Software",
      desc: "High-performance websites, web apps, and mobile platforms engineered to scale.",
      points: ["High-performance websites", "Web applications", "Mobile platforms", "Scalable architecture"],
      badge: "+40% Faster Delivery",
      cta: "Build Software",
      preview: <SoftwarePreview />,
      bg: "linear-gradient(135deg, #f6f8fb 0%, #eaf2f8 100%)",
    },
    {
      icon: Bot,
      title: "AI Agents & Automation",
      desc: "Operational AI that runs your workflows end-to-end — not another demo.",
      points: ["Workflow automation", "Custom AI agents", "Operational efficiency", "End-to-end systems"],
      badge: "Fully Autonomous Systems",
      cta: "Automate Work",
      preview: <AIPreview />,
      bg: "linear-gradient(135deg, #f4f7fc 0%, #e8edf7 100%)",
    },
    {
      icon: TrendingUp,
      title: "AI Ads & Growth",
      desc: "Acquisition engines that compound — paid media, analytics, and conversion in one system.",
      points: ["Acquisition systems", "Paid media automation", "Analytics & attribution", "Conversion optimization"],
      badge: "Real-Time Optimization",
      cta: "Scale Growth",
      preview: <GrowthPreview />,
      bg: "linear-gradient(135deg, #f7f5fb 0%, #ecedfa 100%)",
    },
  ];

  return (
    <section className="relative py-32" style={{ background: "linear-gradient(180deg, #fafbfd 0%, #f3f6fa 100%)" }}>
      <div className="mx-auto max-w-7xl px-6">
        <motion.p {...fadeUp} className="text-xs uppercase tracking-[0.22em] text-[color:var(--muted-foreground)]">Services</motion.p>
        <div className="mt-4 grid gap-8 md:grid-cols-[2fr_1fr] md:items-end">
          <motion.h2 {...fadeUp} className="max-w-3xl text-4xl leading-[1.05] text-[color:var(--navy)] md:text-6xl">
            Our <span className="text-gradient">Engineering Services</span>
          </motion.h2>
          <motion.p {...fadeUp} className="max-w-md text-base text-[color:var(--muted-foreground)]">
            Three pillars. One operating system — built to compound across software, intelligence, and growth.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-7 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.2, 0.8, 0.2, 1] }}
              whileHover={{ y: -8 }}
              className="group relative flex flex-col overflow-hidden rounded-[24px] border border-white bg-white p-3 shadow-[0_1px_2px_rgba(7,26,46,0.04),0_20px_50px_-30px_rgba(7,26,46,0.18)] transition-all duration-500 hover:shadow-[0_40px_80px_-30px_rgba(25,211,243,0.35),0_0_0_1px_color-mix(in_oklab,var(--accent)_25%,transparent)]"
            >
              {/* Preview canvas */}
              <div
                className="relative h-[220px] overflow-hidden rounded-[18px]"
                style={{ background: s.bg }}
              >
                {/* faint grid */}
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-40"
                  style={{
                    backgroundImage:
                      "linear-gradient(color-mix(in oklab, var(--navy) 6%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in oklab, var(--navy) 6%, transparent) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                    maskImage: "radial-gradient(circle at 50% 60%, black 30%, transparent 80%)",
                  }}
                />
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.03]">
                  {s.preview}
                </div>
                {/* cyan bloom on hover */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--accent) 70%, transparent), transparent 70%)" }}
                />
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col px-5 pb-5 pt-6">
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl text-white shadow-[0_10px_24px_-10px_rgba(7,26,46,0.5)]"
                    style={{ background: "linear-gradient(135deg, var(--navy), color-mix(in oklab, var(--navy) 65%, var(--accent-hover)))" }}
                  >
                    <s.icon className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-[22px] leading-tight text-[color:var(--navy)]">{s.title}</h3>
                </div>

                <p className="mt-4 text-[14px] leading-relaxed text-[color:var(--muted-foreground)]">{s.desc}</p>

                <ul className="mt-5 grid grid-cols-2 gap-x-3 gap-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-[13px] text-[color:var(--foreground)]/80">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[color:var(--accent-hover)]" strokeWidth={2.5} />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full border border-[color:var(--accent)]/30 bg-[color:var(--accent)]/10 px-3 py-1.5 text-[11px] font-semibold tracking-wide text-[color:var(--navy)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent-hover)]" />
                  {s.badge}
                </div>

                <Link
                  to="/services"
                  className="btn-magnetic btn-primary mt-6 inline-flex w-full items-center justify-between gap-2 rounded-full px-5 py-3.5 text-sm font-medium"
                >
                  <span>{s.cta}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", t: "Discover", d: "We map your real bottlenecks — not the symptoms.", Icon: Search, angle: -90 },
    { n: "02", t: "Audit", d: "Systems, data, and workflows examined end-to-end.", Icon: ClipboardList, angle: -18 },
    { n: "03", t: "Proposal", d: "A focused build plan with measurable outcomes.", Icon: FileText, angle: 54 },
    { n: "04", t: "Build", d: "Engineered in sprints with weekly demos.", Icon: Code2, angle: 126 },
    { n: "05", t: "Handover", d: "Documented, owned by you, designed to scale.", Icon: Rocket, angle: 198 },
  ];
  const R = 38, r = 32, cx = 50, cy = 50;
  const polar = (angle: number, rad: number) => {
    const a = (angle * Math.PI) / 180;
    return { x: cx + Math.cos(a) * rad, y: cy + Math.sin(a) * rad };
  };

  return (
    <section className="py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,360px)_1fr] lg:items-start">
          <div className="lg:pt-12">
            <motion.p {...fadeUp} className="text-xs uppercase tracking-[0.28em] text-[color:var(--accent-hover)]">Process</motion.p>
            <motion.h2 {...fadeUp} className="mt-5 text-5xl leading-[1.05] text-[color:var(--navy)] md:text-6xl">
              A premium build,<br />
              <span className="text-gradient">end to end.</span>
            </motion.h2>
            <motion.p {...fadeUp} className="mt-6 max-w-md text-[15px] leading-relaxed text-[color:var(--muted-foreground)]">
              A clear, proven process that turns your ideas into scalable, high-performing systems.
            </motion.p>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-[680px]">
            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible">
              <defs>
                <radialGradient id="home-center-glow">
                  <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.18" />
                  <stop offset="60%" stopColor="var(--accent)" stopOpacity="0.04" />
                  <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
                </radialGradient>
                <marker id="home-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                  <path d="M0,1 L8,5 L0,9" fill="none" stroke="var(--accent-hover)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </marker>
              </defs>
              <circle cx={cx} cy={cy} r="22" fill="url(#home-center-glow)" />
              <circle cx={cx} cy={cy} r="14" fill="none" stroke="var(--navy)" strokeOpacity="0.08" strokeWidth="0.3" />
              <circle cx={cx} cy={cy} r="9" fill="none" stroke="var(--navy)" strokeOpacity="0.06" strokeWidth="0.25" />
              {steps.map((s, i) => {
                const next = steps[(i + 1) % steps.length];
                const sa = (s.angle * Math.PI) / 180;
                const ea = (next.angle * Math.PI) / 180;
                const sx = cx + Math.cos(sa) * r;
                const sy = cy + Math.sin(sa) * r;
                const ex = cx + Math.cos(ea) * r;
                const ey = cy + Math.sin(ea) * r;
                return (
                  <motion.path
                    key={`arc-${i}`}
                    d={`M ${sx} ${sy} A ${r} ${r} 0 0 1 ${ex} ${ey}`}
                    fill="none"
                    stroke="var(--accent-hover)"
                    strokeOpacity="0.55"
                    strokeWidth="0.35"
                    strokeLinecap="round"
                    markerEnd="url(#home-arrow)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.9, delay: 0.4 + i * 0.18, ease: "easeInOut" }}
                  />
                );
              })}
              {steps.map((s, i) => {
                const p = polar(s.angle, r);
                return <circle key={`dot-${i}`} cx={p.x} cy={p.y} r="0.7" fill="var(--accent-hover)" />;
              })}
            </svg>

            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <div
                className="flex h-[88px] w-[88px] items-center justify-center rounded-full"
                style={{
                  background: "linear-gradient(135deg, var(--navy), var(--midnight))",
                  boxShadow: "0 20px 60px -20px color-mix(in oklab, var(--accent) 70%, transparent), 0 0 0 6px rgba(255,255,255,0.6), 0 0 0 7px color-mix(in oklab, var(--navy) 10%, transparent)",
                }}
              >
                <img src={logoUrl} alt="Lanos" className="h-10 w-10 object-contain" style={{ filter: "drop-shadow(0 0 8px color-mix(in oklab, var(--accent) 70%, transparent))" }} />
              </div>
            </motion.div>

            {steps.map((s, i) => {
              const p = polar(s.angle, R);
              const { Icon } = s;
              return (
                <motion.div
                  key={s.n}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${p.x}%`, top: `${p.y}%`, width: "min(220px, 32%)" }}
                  initial={{ opacity: 0, scale: 0.9, y: 8 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.12, ease: "easeOut" }}
                  whileHover={{ y: -4 }}
                >
                  <div
                    className="group relative rounded-[22px] border hairline bg-white/85 p-5 backdrop-blur-md transition-all duration-300 hover:shadow-[0_24px_60px_-24px_color-mix(in_oklab,var(--accent)_55%,transparent)]"
                    style={{ boxShadow: "0 6px 24px -10px rgba(7,26,46,0.12)" }}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className="flex h-10 w-10 flex-none items-center justify-center rounded-full"
                        style={{ background: "color-mix(in oklab, var(--accent) 14%, white)" }}
                      >
                        <Icon strokeWidth={1.8} style={{ color: "var(--accent-hover)", width: 18, height: 18 }} />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[11px] font-semibold tracking-widest text-[color:var(--accent-hover)]">{s.n}</div>
                        <h3 className="mt-0.5 text-[17px] font-semibold leading-tight text-[color:var(--navy)]">{s.t}</h3>
                      </div>
                    </div>
                    <p className="mt-3 text-[12.5px] leading-relaxed text-[color:var(--muted-foreground)]">{s.d}</p>
                    <div
                      className="pointer-events-none absolute inset-x-5 bottom-2 h-px origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                      style={{ background: "linear-gradient(90deg, transparent, var(--accent), transparent)" }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseStudies() {
  const cases = [
    {
      tag: "AI Operations",
      title: "How a logistics ops team cut 32 hours/week with agent automation.",
      result: "−32h/week",
    },
    {
      tag: "Custom Software",
      title: "A B2B SaaS replatform that doubled activation in 90 days.",
      result: "2.1× activation",
    },
    {
      tag: "Growth",
      title: "A DTC brand's acquisition engine, rebuilt to scale profitably.",
      result: "3.4× ROAS",
    },
  ];
  return (
    <section className="bg-[color:var(--muted)]/40 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.p {...fadeUp} className="text-xs uppercase tracking-[0.22em] text-[color:var(--muted-foreground)]">Case Studies</motion.p>
        <motion.h2 {...fadeUp} className="mt-4 max-w-3xl text-4xl leading-tight text-[color:var(--navy)] md:text-5xl">
          Built systems. Measured outcomes.
        </motion.h2>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {cases.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border hairline bg-white p-8"
            >
              <div className="text-[10px] uppercase tracking-widest text-[color:var(--accent-hover)]">{c.tag}</div>
              <h3 className="mt-3 flex-1 text-xl leading-snug text-[color:var(--navy)]">{c.title}</h3>
              <div className="mt-8 flex items-end justify-between">
                <div className="text-3xl font-semibold text-gradient">{c.result}</div>
                <Link to="/case-studies" className="text-sm text-[color:var(--muted-foreground)] transition-colors group-hover:text-[color:var(--navy)]">
                  Read →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section className="relative overflow-hidden py-32" style={{ background: "linear-gradient(135deg, var(--navy) 0%, var(--midnight) 100%)" }}>
      <div className="absolute inset-0 opacity-30"
           style={{ background: "radial-gradient(circle at 30% 50%, var(--accent), transparent 60%)" }} />
      <div className="absolute inset-0 noise-overlay" />
      <div className="relative mx-auto max-w-5xl px-6">
        <motion.p {...fadeUp} className="text-xs uppercase tracking-[0.22em] text-[color:var(--accent)]">Founder note</motion.p>
        <motion.blockquote
          {...fadeUp}
          className="mt-8 text-4xl leading-tight text-white md:text-6xl"
        >
          "We don't automate
          <br />
          for the sake of AI.
          <br />
          <span className="text-[color:var(--accent)]">We engineer systems</span>
          <br />
          that compound."
        </motion.blockquote>
        <motion.div {...fadeUp} className="mt-12 flex items-center gap-4">
          <div className="h-12 w-12 rounded-full" style={{ background: "linear-gradient(135deg, var(--accent), white)" }} />
          <div>
            <div className="text-sm font-medium text-white">Founder</div>
            <div className="text-xs text-white/60">Lanos Innovation</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.h2 {...fadeUp} className="text-4xl leading-tight text-[color:var(--navy)] md:text-6xl">
          Let's build something
          <br />
          <span className="text-gradient">competitors won't see coming.</span>
        </motion.h2>
        <motion.div {...fadeUp} className="mt-10 flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="btn-magnetic btn-primary inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium">
            Start Your Build <ArrowRight className="h-4 w-4" />
          </Link>
          <a href="mailto:hello@lanos.io" className="rounded-full border hairline bg-white px-7 py-3.5 text-sm font-medium text-[color:var(--navy)]">
            hello@lanos.io
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <WhyExists />
      <Services />
      <Process />
      <CaseStudies />
      <Philosophy />
      <CTA />
    </>
  );
}