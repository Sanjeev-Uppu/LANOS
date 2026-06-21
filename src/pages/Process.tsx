import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, ClipboardList, FileText, Code2, Rocket } from "lucide-react";
import logoUrl from "../assets/lanos-logo.png";

const steps = [
  { n: "01", t: "Discover", d: "We map your real bottlenecks — not the symptoms.", Icon: Search, angle: -90 },
  { n: "02", t: "Audit", d: "Systems, data, and workflows examined end-to-end.", Icon: ClipboardList, angle: -18 },
  { n: "03", t: "Proposal", d: "A focused build plan with measurable outcomes.", Icon: FileText, angle: 54 },
  { n: "04", t: "Build", d: "Engineered in sprints with weekly demos.", Icon: Code2, angle: 126 },
  { n: "05", t: "Handover", d: "Documented, owned by you, designed to scale.", Icon: Rocket, angle: 198 },
];

export default function Process() {
  // Layout geometry (in % of square container) — desktop/tablet circular layout only
  const R = 38; // card center radius
  const r = 32; // connector arc radius
  const cx = 50, cy = 50;
  const polar = (angle: number, rad: number) => {
    const a = (angle * Math.PI) / 180;
    return { x: cx + Math.cos(a) * rad, y: cy + Math.sin(a) * rad };
  };

  return (
    <section className="pt-32 pb-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,360px)_1fr] lg:items-start">
          {/* Heading */}
          <div className="lg:pt-12">
            <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--accent-hover)]">Process</p>
            <h1 className="mt-5 text-5xl leading-[1.05] text-[color:var(--navy)] md:text-6xl">
              A premium build,<br />
              <span className="text-gradient">end to end.</span>
            </h1>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-[color:var(--muted-foreground)]">
              A clear, proven process that turns your ideas into scalable, high-performing systems.
            </p>
            <div className="mt-8">
              <Link to="/contact" className="btn-magnetic btn-primary inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium">
                Start your build
              </Link>
            </div>
          </div>

          {/* ───────────────────────────────────────────
              MOBILE: vertical stacked timeline
              Circular layout doesn't scale down below md —
              cards overlap once the container gets narrow.
              A simple top-to-bottom list with a connecting
              line reads cleanly at any phone width.
          ─────────────────────────────────────────── */}
          <div className="relative md:hidden">
            {/* Connecting line down the left side */}
            <div
              aria-hidden
              className="absolute left-[19px] top-2 bottom-2 w-px"
              style={{ background: "linear-gradient(180deg, color-mix(in oklab, var(--accent) 40%, transparent), color-mix(in oklab, var(--accent-hover) 40%, transparent))" }}
            />

            <div className="flex flex-col gap-5">
              {steps.map((s, i) => {
                const { Icon } = s;
                return (
                  <motion.div
                    key={s.n}
                    className="relative flex gap-4"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.45, delay: i * 0.08, ease: "easeOut" }}
                  >
                    {/* Step icon node, sits on the connecting line */}
                    <div
                      className="relative z-10 flex h-10 w-10 flex-none items-center justify-center rounded-full border hairline bg-white"
                      style={{ boxShadow: "0 4px 14px -6px rgba(7,26,46,0.18)" }}
                    >
                      <div
                        className="flex h-7 w-7 items-center justify-center rounded-full"
                        style={{ background: "color-mix(in oklab, var(--accent) 14%, white)" }}
                      >
                        <Icon style={{ color: "var(--accent-hover)", width: 14, height: 14 }} strokeWidth={1.8} />
                      </div>
                    </div>

                    {/* Card */}
                    <div
                      className="min-w-0 flex-1 rounded-2xl border hairline bg-white/90 p-4"
                      style={{ boxShadow: "0 4px 18px -10px rgba(7,26,46,0.12)" }}
                    >
                      <div className="text-[10px] font-semibold tracking-widest text-[color:var(--accent-hover)]">{s.n}</div>
                      <h3 className="mt-0.5 text-[15px] font-semibold leading-tight text-[color:var(--navy)]">{s.t}</h3>
                      <p className="mt-1.5 text-[12.5px] leading-relaxed text-[color:var(--muted-foreground)]">{s.d}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Center logo, shown once below the timeline on mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mt-8 flex justify-center"
            >
              <div
                className="flex h-16 w-16 items-center justify-center rounded-full"
                style={{
                  background: "linear-gradient(135deg, var(--navy), var(--midnight))",
                  boxShadow: "0 16px 40px -16px color-mix(in oklab, var(--accent) 70%, transparent), 0 0 0 5px rgba(255,255,255,0.6), 0 0 0 6px color-mix(in oklab, var(--navy) 10%, transparent)",
                }}
              >
                <img src={logoUrl} alt="Lanos" className="h-8 w-8 object-contain" style={{ filter: "drop-shadow(0 0 6px color-mix(in oklab, var(--accent) 70%, transparent))" }} />
              </div>
            </motion.div>
          </div>

          {/* ───────────────────────────────────────────
              DESKTOP / TABLET: circular orbit layout
              Unchanged from the original — only visible
              at md and above, where there's room for it.
          ─────────────────────────────────────────── */}
          <div className="relative mx-auto hidden aspect-square w-full max-w-[680px] md:block">
            {/* SVG: arcs + arrows + center glow */}
            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible">
              <defs>
                <radialGradient id="center-glow">
                  <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.18" />
                  <stop offset="60%" stopColor="var(--accent)" stopOpacity="0.04" />
                  <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
                </radialGradient>
                <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                  <path d="M0,1 L8,5 L0,9" fill="none" stroke="var(--accent-hover)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </marker>
              </defs>

              {/* center radial bloom */}
              <circle cx={cx} cy={cy} r="22" fill="url(#center-glow)" />
              {/* faint ring */}
              <circle cx={cx} cy={cy} r="14" fill="none" stroke="var(--navy)" strokeOpacity="0.08" strokeWidth="0.3" />
              <circle cx={cx} cy={cy} r="9" fill="none" stroke="var(--navy)" strokeOpacity="0.06" strokeWidth="0.25" />

              {/* Arcs between consecutive steps */}
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
                    markerEnd="url(#arrow)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.9, delay: 0.4 + i * 0.18, ease: "easeInOut" }}
                  />
                );
              })}

              {/* dot anchors at each step on the arc */}
              {steps.map((s, i) => {
                const p = polar(s.angle, r);
                return (
                  <circle key={`dot-${i}`} cx={p.x} cy={p.y} r="0.7" fill="var(--accent-hover)" />
                );
              })}
            </svg>

            {/* Center logo */}
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

            {/* Step cards positioned around the circle */}
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
                        <Icon className="h-4.5 w-4.5" strokeWidth={1.8} style={{ color: "var(--accent-hover)", width: 18, height: 18 }} />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[11px] font-semibold tracking-widest text-[color:var(--accent-hover)]">{s.n}</div>
                        <h3 className="mt-0.5 text-[17px] font-semibold leading-tight text-[color:var(--navy)]">{s.t}</h3>
                      </div>
                    </div>
                    <p className="mt-3 text-[12.5px] leading-relaxed text-[color:var(--muted-foreground)]">
                      {s.d}
                    </p>
                    {/* hover accent line */}
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