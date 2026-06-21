
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Bot,
  TrendingUp,
} from "lucide-react";

const cases = [
  {
    tag: "AI Operations",
    result: "-32h/week",
    icon: Bot,
    title:
      "Logistics operations team saves 32 hours every week through AI automation.",
    challenge:
      "Manual order routing consumed over 40 hours weekly and created scaling bottlenecks.",
    solution:
      "Built a multi-agent workflow that validates, routes and updates orders automatically.",
    stack: ["GPT-5", "TypeScript", "Postgres", "ERP Integration"],
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    tag: "Custom Software",
    result: "2.1×",
    icon: Sparkles,
    title:
      "SaaS onboarding redesign doubles activation within ninety days.",
    challenge:
      "Users abandoned onboarding before reaching product value.",
    solution:
      "Rebuilt onboarding around guided milestones and contextual AI assistance.",
    stack: ["Next.js", "Stripe", "Segment", "Postgres"],
    gradient: "from-violet-500 to-indigo-600",
  },
  {
    tag: "Growth Systems",
    result: "3.4×",
    icon: TrendingUp,
    title:
      "Acquisition engine rebuilt to scale revenue profitably.",
    challenge:
      "Advertising costs increased while attribution visibility declined.",
    solution:
      "Created unified analytics and automated testing systems.",
    stack: ["Meta Ads", "GA4", "Klaviyo", "Dashboard"],
    gradient: "from-pink-500 to-orange-500",
  },
];

export default function CaseStudies() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50 to-indigo-50" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#041F3E 1px, transparent 1px), linear-gradient(to right, #041F3E 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Glow Effects */}
      <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-cyan-400/20 blur-[140px]" />
      <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-violet-400/20 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">
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

          <h1 className="mt-8 text-5xl font-bold tracking-tight text-[#041F3E] md:text-7xl">
            Proof Over
            <br />
            <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-500 bg-clip-text text-transparent">
              Promises
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-slate-600">
            Every engagement is built around measurable business outcomes,
            not deliverables.
          </p>
        </motion.div>

        {/* Case Studies */}
        <div className="mt-24 space-y-24">
          {cases.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={`grid items-center gap-12 lg:grid-cols-2 ${
                  index % 2 === 1
                    ? "lg:[&>*:first-child]:order-2"
                    : ""
                }`}
              >
                {/* Content */}
                <div>
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${item.gradient}`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>

                    <span className="text-sm font-semibold uppercase tracking-widest text-slate-500">
                      {item.tag}
                    </span>
                  </div>

                  <h2 className="mt-6 text-3xl font-bold leading-tight text-[#041F3E] md:text-5xl">
                    {item.title}
                  </h2>

                  <div className="mt-8 space-y-4">
                    <div className="rounded-2xl border border-slate-200 bg-white/80 p-5 backdrop-blur-xl">
                      <p className="text-xs font-bold uppercase tracking-widest text-red-500">
                        Challenge
                      </p>

                      <p className="mt-2 text-slate-600">
                        {item.challenge}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white/80 p-5 backdrop-blur-xl">
                      <p className="text-xs font-bold uppercase tracking-widest text-emerald-500">
                        Solution
                      </p>

                      <p className="mt-2 text-slate-600">
                        {item.solution}
                      </p>
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
                    className={`mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${item.gradient} px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105`}
                  >
                    View Case Study
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                {/* Metric */}
                <div className="flex justify-center">
                  <div className="relative">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-20 blur-[100px]`}
                    />

                    <h1
                      className={`relative bg-gradient-to-r ${item.gradient} bg-clip-text text-center text-6xl font-black text-transparent sm:text-8xl md:text-9xl`}
                    >
                      {item.result}
                    </h1>
                  </div>
                </div>
              </motion.div>
            );
          })}
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
            <h2 className="text-4xl font-bold text-[#041F3E] md:text-6xl">
              Ready To Become
              <br />
              The Next Success Story?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
              Let's build software, AI systems and growth engines that create
              measurable business outcomes.
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

