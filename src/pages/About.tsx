
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const values = [
  {
    title: "Senior-only Team",
    description:
      "Every project is executed by experienced engineers and AI specialists.",
  },
  {
    title: "Fixed-price Builds",
    description:
      "Transparent pricing with clear scope and predictable delivery.",
  },
  {
    title: "You Own Everything",
    description:
      "Source code, infrastructure, documentation, and workflows belong to you.",
  },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "95%", label: "Client Retention" },
  { value: "10x", label: "Average Efficiency Gain" },
];

export default function About() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50 to-indigo-50" />

      {/* Glow */}
      <div className="absolute -top-40 left-0 h-[500px] w-[500px] rounded-full bg-cyan-400/20 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-violet-400/20 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl"
        >
          <span className="inline-flex rounded-full border border-blue-100 bg-white/80 px-5 py-2 text-xs font-semibold tracking-[0.25em] text-blue-600 backdrop-blur-xl">
            ABOUT US
          </span>

          <h1 className="mt-8 text-5xl font-bold leading-tight text-[#041F3E] md:text-7xl">
            Engineering Systems
            <br />
            For The
            <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-500 bg-clip-text text-transparent">
              {" "}AI Era
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-slate-600">
            Lanos Innovation helps ambitious companies eliminate operational
            friction through software, automation, and AI systems that scale
            with the business.
          </p>
        </motion.div>

        {/* Content */}
        <div className="mt-24 grid gap-16 lg:grid-cols-2">
          <div className="space-y-6 text-lg leading-relaxed text-slate-600">
            <p>
              Most businesses don't need another tool. They need systems that
              reduce complexity, automate repetitive work, and create leverage.
            </p>

            <p>
              We combine senior product engineering, applied AI, and growth
              strategy to build solutions that drive measurable outcomes—not
              vanity metrics.
            </p>

            <p className="font-semibold text-[#041F3E]">
              We don't sell AI.
              <br />
              We sell business outcomes powered by AI.
            </p>
          </div>

          {/* Stats */}
          <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-white/40 bg-white/70 p-8 backdrop-blur-xl"
              >
                <div className="text-5xl font-black text-[#041F3E]">
                  {stat.value}
                </div>

                <div className="mt-2 text-sm uppercase tracking-widest text-slate-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mt-24 grid gap-6 md:grid-cols-3">
          {values.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -8 }}
              className="rounded-3xl border border-white/40 bg-white/70 p-8 backdrop-blur-xl transition-all"
            >
              <h3 className="text-xl font-semibold text-[#041F3E]">
                {item.title}
              </h3>

              <p className="mt-4 leading-relaxed text-slate-600">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <h2 className="text-4xl font-bold text-[#041F3E] md:text-5xl">
            Ready To Build Something Exceptional?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Partner with a team focused on outcomes, not billable hours.
          </p>

          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105"
          >
            Work With Us
          </Link>
        </div>
      </div>
    </section>
  );
}

