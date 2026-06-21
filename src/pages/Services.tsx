import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Code2,
  Bot,
  Rocket,
} from "lucide-react";

const services = [
  {
    title: "Custom Software",
    badge: "Build Faster",
    icon: Code2,
    gradient: "from-cyan-400 to-blue-600",
    button: "from-cyan-500 to-blue-600",
    desc: "Scalable platforms, internal systems and customer-facing products engineered for long-term growth.",
    points: [
      "Web Applications",
      "Customer Portals",
      "Internal Dashboards",
      "API Integrations",
    ],
  },
  {
    title: "AI Agents",
    badge: "AI Powered",
    icon: Bot,
    gradient: "from-purple-500 to-indigo-600",
    button: "from-purple-500 to-indigo-600",
    desc: "Intelligent automation systems that eliminate repetitive work and unlock operational efficiency.",
    points: [
      "AI Assistants",
      "Workflow Automation",
      "Lead Qualification",
      "Business Operations",
    ],
  },
  {
    title: "AI Ads",
    badge: "Scale Revenue",
    icon: Rocket,
    gradient: "from-pink-500 to-orange-500",
    button: "from-pink-500 to-orange-500",
    desc: "Performance-driven growth systems designed to continuously generate leads and revenue.",
    points: [
      "Conversion Funnels",
      "Paid Advertising",
      "Growth Optimization",
      "Analytics Systems",
    ],
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50 to-indigo-50" />

      {/* Grid Texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#041F3E 1px, transparent 1px), linear-gradient(to right, #041F3E 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Glow Orbs */}
      <div className="absolute -left-40 top-0 h-[600px] w-[600px] rounded-full bg-cyan-400/20 blur-[180px]" />
      <div className="absolute -right-40 bottom-0 h-[600px] w-[600px] rounded-full bg-purple-500/20 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex rounded-full border border-cyan-200 bg-white/70 px-5 py-2 text-xs font-semibold tracking-[0.25em] text-cyan-700 backdrop-blur-xl">
            OUR SERVICES
          </span>

          <h2 className="mt-8 text-5xl font-semibold tracking-tight text-[#041F3E] md:text-7xl">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent">
              Systems
            </span>
            , Not Services.
          </h2>

          <p className="mx-auto mt-8 max-w-[700px] text-lg leading-relaxed text-slate-600">
            We build software, AI systems and growth engines that create
            compounding business advantages instead of one-time deliverables.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-24 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                className="group relative flex h-full flex-col overflow-hidden rounded-[32px] border border-white/20 bg-white/70 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-4 hover:scale-[1.02] hover:shadow-[0_40px_120px_-20px_rgba(0,0,0,0.15)]"
              >
                {/* Gradient Border */}
                <div
                  className={`absolute inset-0 rounded-[32px] bg-gradient-to-br ${service.gradient} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-20`}
                />

                {/* Spotlight */}
                <div className="absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-white/40 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Floating Decorations */}
                <div className="absolute right-5 top-5 h-24 w-24 rounded-full bg-white/20 blur-2xl" />
                <div
                  className={`absolute bottom-10 left-0 h-20 w-20 rounded-full bg-gradient-to-r ${service.gradient} opacity-20 blur-3xl`}
                />

                {/* SVG Wave */}
                <svg
                  className="absolute bottom-0 left-0 w-full opacity-10"
                  viewBox="0 0 1440 320"
                  fill="none"
                >
                  <path
                    fill="currentColor"
                    d="M0,192L80,197.3C160,203,320,213,480,192C640,171,800,117,960,112C1120,107,1280,149,1360,170.7L1440,192V320H0Z"
                  />
                </svg>

                {/* Icon */}
                <div
                  className={`relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} shadow-2xl`}
                >
                  <Icon className="h-8 w-8 text-white" />
                </div>

                {/* Badge */}
                <div className="mt-6">
                  <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700 backdrop-blur">
                    {service.badge}
                  </span>
                </div>

                {/* Content */}
                <h3 className="mt-6 text-3xl font-semibold text-[#041F3E]">
                  {service.title}
                </h3>

                <p className="mt-4 text-slate-600">
                  {service.desc}
                </p>

                {/* Features */}
                <div className="mt-8 flex flex-wrap gap-3">
                  {service.points.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 rounded-xl bg-white/60 px-4 py-3 text-sm font-medium text-slate-700 backdrop-blur"
                    >
                      <CheckCircle className="h-4 w-4 text-cyan-500" />
                      {item}
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-auto pt-10">
                  <Link
                    to="/services"
                    className={`group/button inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r ${service.button} px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
                  >
                    Explore Service
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Premium CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mt-32 overflow-hidden rounded-[40px] border border-white/20 bg-white/60 p-12 backdrop-blur-2xl md:p-20"
        >
          {/* Animated Glow Border */}
          <div className="absolute inset-0 rounded-[40px] bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-20 blur-3xl" />

          <div className="relative text-center">
            <h2 className="text-4xl font-semibold text-[#041F3E] md:text-6xl">
              Ready to Build Your Competitive Advantage?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
              Software, AI and growth systems engineered to compound value over
              time.
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
                className="rounded-full border border-slate-200 bg-white/70 px-8 py-4 font-semibold text-[#041F3E] backdrop-blur transition-all duration-300 hover:scale-105"
              >
                Book a Strategy Call
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}