import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  X,
  ShoppingBasket,
  Leaf,
  Apple,
  Bike,
  ShieldCheck,
  Lock,
  FileText,
  Gem,
  Flower2,
  Quote,
} from "lucide-react";

import case1 from "../assets/case1.png";
import case2 from "../assets/case2.png";
// import case3 from "../../assets/case3.png"; // ready for the next case study — just add `image: case3` below

/* -------------------------------------------------------------------- */
/*  Case study data — pulled from real project write-ups                */
/* -------------------------------------------------------------------- */

const NOISE_TEXTURE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

const cases = [
  {
    id: "Pure-fresh",
    tag: "Hyperlocal Commerce",
    app: "Pure Fresh",
    image: case1,
    weeks: "8",
    weeksLabel: "weeks to launch",
    title: "Redefining hyperlocal grocery delivery for the people of Tenali.",
    challenge:
      "Build one marketplace for groceries, medicine and homemade food — without losing simplicity — while founding a brand identity from a blank page.",
    solution:
      "A full digital ecosystem: brand, responsive web, a mobile app and a scalable backend, all built to shorten the path from browse to checkout.",
    stack: ["React Native", "React", "Node.js", "MongoDB", "Firebase"],
    capabilities:
      "A single marketplace spanning fruits, vegetables, dairy, homemade food and medicine — fast product discovery, secure sign-in, efficient order management, and a mobile-first experience built to grow without a rebuild.",
    outcome:
      "Pure Fresh launched with a professional brand identity, a responsive website and a high-performance mobile app — a technical foundation built for efficient day-to-day operations.",
    impact:
      "An idea became a fully working platform serving several business categories in one app, strengthening the brand's online presence and setting up the business for expansion.",
    testimonial:
      "The team understood our vision from the very beginning and transformed it into a modern digital platform that exceeded our expectations.",
    testimonialAuthor: "Ratnababu",
    testimonialRole: "Founder, Pure Fresh",
    lookingAhead:
      "Real-time order tracking, digital payments, loyalty programs, intelligent recommendations, vendor tools and expansion into new locations.",
    accent: {
      from: "#15803D",
      via: "#65A30D",
      to: "#EAB308",
      soft: "#ECFCCB",
      ring: "focus-visible:ring-lime-400",
      chip: "bg-lime-50 text-emerald-700 border-emerald-100",
    },
    icon: ShoppingBasket,
    orbit: [Leaf, Apple, Bike],
  },
  {
    id: "cu",
    tag: "Secure Digital Platform",
    app: "CU",
    image: case2,
    weeks: "12",
    weeksLabel: "weeks to launch",
    title: "A secure digital legacy platform, built for future generations.",
    challenge:
      "Turn estate planning — usually overwhelming and opaque — into something simple and trustworthy, without compromising the security of deeply sensitive information.",
    solution:
      "One ecosystem — product strategy, premium UX, secure architecture and scalable technology — guiding people through organizing what matters most.",
    stack: ["React Native", "React", "Node.js", "MongoDB", "AWS"],
    capabilities:
      "Secure management of financial assets, real estate, insurance, investments, digital assets, liabilities and beneficiaries — guided workflows, progress tracking and secure authentication across every device.",
    outcome:
      "CU evolved into a fully functional legacy platform with a premium mobile app and a responsive web experience — secure, scalable and ready for what comes next.",
    impact:
      "A modern approach to digital estate planning that turned complex legal and financial processes into an experience people actually trust.",
    testimonial:
      "The team transformed a complex vision into a secure and beautifully designed platform that exceeded our expectations. They delivered more than software.",
    testimonialAuthor: "Avinash",
    testimonialRole: "Founder, Life & Beyond Technology",
    lookingAhead:
      "AI-powered planning assistance, digital will creation, secure document vaults, family collaboration and global estate-planning capabilities.",
    accent: {
      from: "#312E81",
      via: "#4C1D95",
      to: "#C9A227",
      soft: "#EEF2FF",
      ring: "focus-visible:ring-indigo-400",
      chip: "bg-indigo-50 text-indigo-700 border-indigo-100",
    },
    icon: ShieldCheck,
    orbit: [Lock, FileText, Gem],
  },
];

/* -------------------------------------------------------------------- */
/*  Flower burst — the signature "crack open" moment                    */
/* -------------------------------------------------------------------- */

const FLOWER_LAYOUT = [
  { x: -120, y: -70, r: -18, s: 0.9, d: 0 },
  { x: 110, y: -90, r: 14, s: 0.7, d: 0.04 },
  { x: -150, y: 40, r: 24, s: 0.6, d: 0.08 },
  { x: 140, y: 30, r: -10, s: 0.85, d: 0.02 },
  { x: 0, y: -120, r: 6, s: 0.55, d: 0.1 },
  { x: -40, y: 110, r: -22, s: 0.7, d: 0.06 },
  { x: 60, y: 115, r: 16, s: 0.65, d: 0.12 },
];

function FlowerBurst({ color, reduce }) {
  if (reduce) return null;
  return (
    <div className="pointer-events-none absolute inset-0 overflow-visible">
      {FLOWER_LAYOUT.map((f, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2"
          style={{ color }}
          initial={{ x: 0, y: 0, scale: 0, opacity: 0, rotate: 0 }}
          animate={{
            x: f.x,
            y: f.y,
            scale: [0, f.s * 1.2, f.s],
            opacity: [0, 1, 0.85],
            rotate: f.r,
          }}
          exit={{ opacity: 0, scale: 0, transition: { duration: 0.2 } }}
          transition={{ duration: 0.55, delay: f.d, ease: [0.16, 1, 0.3, 1] }}
        >
          <Flower2 className="h-6 w-6 drop-shadow-sm" strokeWidth={1.75} />
        </motion.div>
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------- */
/*  Reveal box — hover lifts the showcase image + opens a tab;          */
/*  click cracks the seal open into the full case study                 */
/* -------------------------------------------------------------------- */

/** Motion variants shared across the sealed image, its glow and the tab.
 *  They all live as siblings under the parent's whileHover="hover" so they
 *  animate together without needing their own hover listeners. */
const imageVariants = {
  rest: {
    y: 0,
    scale: 1,
    rotate: 0,
    boxShadow: "0 25px 60px -20px rgba(4,31,62,0.35)",
  },
  hover: {
    y: -18,
    scale: 1.04,
    rotate: 1,
    boxShadow: "0 45px 100px -20px rgba(4,31,62,0.55)",
  },
};

const imageVariantsReduced = {
  rest: { y: 0, scale: 1, rotate: 0 },
  hover: { y: 0, scale: 1, rotate: 0 },
};

const glowVariants = {
  rest: { opacity: 0.22, scale: 1 },
  hover: { opacity: 0.5, scale: 1.06 },
};

const tabVariants = {
  rest: { opacity: 0, y: 22, filter: "blur(8px)", pointerEvents: "none" },
  hover: { opacity: 1, y: 0, filter: "blur(0px)", pointerEvents: "auto" },
};

function RevealBox({ item }) {
  const [expanded, setExpanded] = useState(false);
  const reduce = useReducedMotion();
  const Icon = item.icon;
  const gradient = `linear-gradient(135deg, ${item.accent.from}, ${item.accent.via} 55%, ${item.accent.to})`;

  const activeImageVariants = reduce ? imageVariantsReduced : imageVariants;

  const imageExit = reduce
    ? { opacity: 0, transition: { duration: 0.2 } }
    : { y: -200, opacity: 0, scale: 0.86, rotate: -2, transition: { duration: 0.34, ease: [0.6, 0, 0.4, 1] } };

  const tabExit = reduce
    ? { opacity: 0, transition: { duration: 0.15 } }
    : { y: 70, opacity: 0, filter: "blur(6px)", transition: { duration: 0.26, ease: "easeIn" } };

  const panelExit = reduce
    ? { opacity: 0, transition: { duration: 0.2 } }
    : {
        scale: [1, 1.05, 0.35, 0],
        rotate: [0, -3, -16, -28],
        opacity: [1, 1, 0.5, 0],
        transition: { duration: 0.5, times: [0, 0.15, 0.7, 1], ease: "easeIn" },
      };

  return (
    <div className="relative mx-auto w-full max-w-[650px]">
      <div className="relative min-h-[420px] md:min-h-[460px] lg:min-h-[520px]">
        <AnimatePresence mode="wait">
          {!expanded ? (
            <motion.div
              key="sealed"
              className="flex flex-col items-center"
              initial="rest"
              animate="rest"
              whileHover="hover"
              exit="exit"
            >
              {/* Ambient premium glow, sits behind the image */}
              <motion.div
                aria-hidden
                className="pointer-events-none absolute -inset-6 -z-10 rounded-[48px] blur-3xl"
                style={{ background: gradient }}
                variants={glowVariants}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              />

              {/* Large premium image showcase */}
              <motion.button
                type="button"
                aria-label={`Open the ${item.app} case study`}
                onClick={() => setExpanded(true)}
                variants={activeImageVariants}
                exit={imageExit}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative block w-full overflow-hidden rounded-[32px] p-[1.5px] outline-none focus-visible:ring-4 ${item.accent.ring}`}
                style={{ backgroundImage: gradient }}
              >
                <div className="relative h-[340px] w-full overflow-hidden rounded-[31px] border border-white/50 bg-[#041F3E] sm:h-[400px] md:h-[440px] lg:h-[500px]">
                  <img
                    src={item.image}
                    alt={item.app}
                    loading="lazy"
                    draggable={false}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                  />

                  {/* glass overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#041F3E]/30 via-transparent to-white/10" />

                  {/* reflection sheen */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/25 via-white/5 to-transparent mix-blend-overlay" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/20 to-transparent" />

                  {/* light noise texture */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
                    style={{ backgroundImage: NOISE_TEXTURE }}
                  />

                  {/* brand badge, small + tucked so the screenshot stays the hero */}
                  <div className="absolute left-5 top-5 flex items-center gap-2 rounded-2xl bg-white/90 px-3 py-2 shadow-lg backdrop-blur-md">
                    <Icon className="h-4 w-4" style={{ color: item.accent.from }} strokeWidth={1.75} />
                    <span className="font-display text-sm font-bold tracking-tight text-[#041F3E]">
                      {item.app}
                    </span>
                  </div>

                  {/* orbiting brand icons */}
                  {item.orbit.map((OrbitIcon, i) => (
                    <span
                      key={i}
                      className="absolute flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur-md"
                      style={{
                        top: `${[18, 62, 40][i]}%`,
                        left: `${[14, 20, 78][i]}%`,
                        animation: `orbitFloat 5.5s ease-in-out ${i * 0.6}s infinite`,
                      }}
                    >
                      <OrbitIcon className="h-4 w-4 text-white" strokeWidth={2} />
                    </span>
                  ))}

                  {/* ribbon stat */}
                  <div className="absolute left-[-14%] top-6 w-[140%] -rotate-6 bg-[#041F3E]/90 py-1.5 text-center backdrop-blur-sm">
                    <span className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-white">
                      Launched in {item.weeks} {item.weeks === "1" ? "week" : "weeks"}
                    </span>
                  </div>
                </div>
              </motion.button>

              {/* hover / click-me pill */}
              <motion.div
                variants={tabVariants}
                exit={tabExit}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative mt-5"
              >
                <button
                  type="button"
                  onClick={() => setExpanded(true)}
                  className="group relative flex items-center gap-2 overflow-hidden rounded-full border border-white/50 bg-white/80 px-6 py-3 text-sm font-semibold text-[#041F3E] shadow-[0_15px_40px_-12px_rgba(4,31,62,0.45)] backdrop-blur-xl transition-transform duration-300 hover:scale-105"
                >
                  <span
                    className="pointer-events-none absolute inset-0 -z-10 animate-gradientPan opacity-25"
                    style={{ backgroundImage: gradient, backgroundSize: "200% 200%" }}
                  />
                  Click Me For More
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight className="h-3.5 w-3.5" />
                  </motion.span>
                </button>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="open"
              className="absolute inset-0"
              initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.85 }}
              animate={reduce ? { opacity: 1 } : { opacity: 1, scale: 1 }}
              exit={panelExit}
              transition={{ type: "spring", stiffness: 220, damping: 26 }}
            >
              {/* colour blast */}
              <motion.div
                className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-2xl"
                style={{ background: gradient }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1.15, opacity: 0.55 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
              <FlowerBurst color={item.accent.to} reduce={reduce} />

              {/* detail card */}
              <div className="relative flex h-full max-h-[560px] flex-col overflow-hidden rounded-[32px] border border-white/60 bg-white/90 shadow-2xl backdrop-blur-xl">
                <div
                  className="flex items-center justify-between px-6 py-4"
                  style={{ background: gradient }}
                >
                  <div className="flex items-center gap-2 text-white">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                    <span className="font-display text-lg font-bold tracking-tight">{item.app}</span>
                  </div>
                  <button
                    type="button"
                    aria-label="Close Me"
                    onClick={() => setExpanded(false)}
                    className="flex items-center gap-1.5 rounded-full bg-white/20 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-md transition-colors hover:bg-white/30"
                  >
                    <X className="h-3.5 w-3.5" />
                    Close Me
                  </button>
                </div>

                <div className="thin-scroll flex-1 space-y-5 overflow-y-auto px-6 py-5 text-left">
                  {/* small preview thumbnail so the image stays present inside the reveal */}
                  <div className="overflow-hidden rounded-2xl border border-white/60 shadow-md">
                    <img
                      src={item.image}
                      alt={item.app}
                      loading="lazy"
                      draggable={false}
                      className="h-40 w-full object-cover"
                    />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                      Key Capabilities
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                      {item.capabilities}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                      Outcome
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{item.outcome}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                      Business Impact
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{item.impact}</p>
                  </div>

                  <div
                    className="rounded-2xl border p-4"
                    style={{ background: item.accent.soft, borderColor: `${item.accent.from}22` }}
                  >
                    <Quote className="h-4 w-4" style={{ color: item.accent.from }} />
                    <p className="mt-2 text-sm italic leading-relaxed text-[#041F3E]">
                      “{item.testimonial}”
                    </p>
                    <p className="mt-2 text-xs font-bold text-slate-500">
                      {item.testimonialAuthor} · {item.testimonialRole}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                      Looking Ahead
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                      {item.lookingAhead}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------- */
/*  Page                                                                 */
/* -------------------------------------------------------------------- */

export default function CaseStudies() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap');
        .font-display { font-family: 'Bricolage Grotesque', ui-sans-serif, system-ui, sans-serif; }
        .font-body { font-family: 'Inter', ui-sans-serif, system-ui, sans-serif; }
        @keyframes orbitFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes gradientPan {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradientPan { animation: gradientPan 4s ease infinite; }
        .thin-scroll::-webkit-scrollbar { width: 6px; }
        .thin-scroll::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 999px; }
        @media (prefers-reduced-motion: reduce) {
          * { animation-duration: 0.01ms !important; }
        }
      `}</style>

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50 to-indigo-50" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#041F3E 1px, transparent 1px), linear-gradient(to right, #041F3E 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-cyan-400/20 blur-[140px]" />
      <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-violet-400/20 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 font-body">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex rounded-full border border-blue-100 bg-white/80 px-5 py-2 text-xs font-semibold tracking-[0.25em] text-blue-600 backdrop-blur-xl">
            CASE STUDIES
          </span>

          <h1 className="font-display mt-8 text-5xl font-bold tracking-tight text-[#041F3E] md:text-7xl">
            Proof Over
            <br />
            <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-500 bg-clip-text text-transparent">
              Promises
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-slate-600">
            Every engagement is built around a real product, shipped for a real founder.
            Click a seal below to open the full story.
          </p>
        </motion.div>

        {/* Case Studies */}
        <div className="mt-24 space-y-28">
          {cases.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`grid items-center gap-12 lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Content */}
              <div>
                <div className="flex items-center gap-3">
                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-widest ${item.accent.chip}`}
                  >
                    {item.tag}
                  </span>
                </div>

                <h2 className="font-display mt-6 text-3xl font-bold leading-tight text-[#041F3E] md:text-5xl">
                  {item.title}
                </h2>

                <div className="mt-8 space-y-4">
                  <div className="rounded-2xl border border-slate-200 bg-white/80 p-5 backdrop-blur-xl">
                    <p className="text-xs font-bold uppercase tracking-widest text-red-500">
                      Challenge
                    </p>
                    <p className="mt-2 text-slate-600">{item.challenge}</p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white/80 p-5 backdrop-blur-xl">
                    <p className="text-xs font-bold uppercase tracking-widest text-emerald-500">
                      Solution
                    </p>
                    <p className="mt-2 text-slate-600">{item.solution}</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {item.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105"
                  style={{
                    background: `linear-gradient(135deg, ${item.accent.from}, ${item.accent.to})`,
                  }}
                >
                  Start a Project Like This
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Interactive reveal box */}
              <RevealBox item={item} />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mt-28 overflow-hidden rounded-[40px] border border-white/40 bg-white/70 p-10 backdrop-blur-2xl md:p-16"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-violet-500/10" />

          <div className="relative text-center">
            <h2 className="font-display text-4xl font-bold text-[#041F3E] md:text-6xl">
              Ready To Become
              <br />
              The Next Success Story?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
              Let's build software, AI systems and growth engines that create measurable
              business outcomes.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105"
              >
                Start a Project
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-slate-200 bg-white px-8 py-4 font-semibold text-[#041F3E] transition-all duration-300 hover:shadow-lg"
              >
                Book Strategy Call
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}