import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { Code2, Bot, TrendingUp, type LucideIcon } from "lucide-react";
import logoUrl from "../assets/lanos-logo.png";

// ─────────────────────────────────────────────
// Premium Brand Palette
// ─────────────────────────────────────────────
const COLORS = {
  navy: "#041F3E",
  royal: "#224CA6",
  azure: "#1C89F4",
  steel: "#87AAD6",
  ice: "#DEF8FD",
  cyan: "#5EE7FF",
  white: "#FFFFFF",
};

const ORBIT_DURATION = 50;
const RADIUS = 200;

type Node = {
  label: string;
  sub: string;
  angle: number;
  icon: LucideIcon;
};

const NODES: Node[] = [
  { label: "Software", sub: "Web · Apps · Platforms", angle: -90, icon: Code2 },
  { label: "AI Systems", sub: "Agents · Automation · Workflows", angle: 30, icon: Bot },
  { label: "AI Ads & Growth", sub: "Funnels · Acquisition · Analytics", angle: 150, icon: TrendingUp },
];

// Deterministic pseudo-random so SSR/client match and particles don't "jump"
function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

// ─────────────────────────────────────────────
// Ambient background particles (behind everything)
// ─────────────────────────────────────────────
function AmbientParticles({ count = 18 }: { count?: number }) {
  const particles = useMemo(() => {
    const rnd = seededRandom(42);
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: rnd() * 100,
      y: rnd() * 100,
      size: 1.5 + rnd() * 2.5,
      duration: 10 + rnd() * 14,
      delay: rnd() * 6,
      opacity: 0.25 + rnd() * 0.4,
    }));
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: COLORS.cyan,
            boxShadow: `0 0 6px ${COLORS.cyan}`,
          }}
          animate={{
            y: [0, -16, 0],
            opacity: [0, p.opacity, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────
// Orbiting micro-particles riding along a ring radius
// ─────────────────────────────────────────────
function RingParticles({ radius, count, duration, reverse = false }: { radius: number; count: number; duration: number; reverse?: boolean }) {
  const items = useMemo(() => Array.from({ length: count }, (_, i) => i), [count]);
  return (
    <motion.div
      className="absolute left-1/2 top-1/2"
      style={{ width: 0, height: 0 }}
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      {items.map((i) => {
        const angle = (360 / count) * i;
        const rad = (angle * Math.PI) / 180;
        const x = Math.cos(rad) * radius;
        const y = Math.sin(rad) * radius;
        return (
          <span
            key={i}
            className="absolute h-[3px] w-[3px] rounded-full"
            style={{
              left: x,
              top: y,
              background: COLORS.azure,
              boxShadow: `0 0 8px ${COLORS.azure}, 0 0 2px ${COLORS.white}`,
              transform: "translate(-50%, -50%)",
            }}
          />
        );
      })}
    </motion.div>
  );
}

export function NeuralOrb() {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const handler = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduceMotion) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) / r.width;
      const y = (e.clientY - r.top - r.height / 2) / r.height;
      el.style.setProperty("--rx", `${(-y * 7).toFixed(2)}deg`);
      el.style.setProperty("--ry", `${(x * 10).toFixed(2)}deg`);
      el.style.setProperty("--px", `${(x * 14).toFixed(2)}px`);
      el.style.setProperty("--py", `${(y * 14).toFixed(2)}px`);
    };
    const onLeave = () => {
      el.style.setProperty("--rx", `0deg`);
      el.style.setProperty("--ry", `0deg`);
      el.style.setProperty("--px", `0px`);
      el.style.setProperty("--py", `0px`);
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [reduceMotion]);

  const orbitDuration = reduceMotion ? ORBIT_DURATION * 4 : ORBIT_DURATION;

  return (
    <div className="relative flex w-full items-center justify-center py-12">
      {/* ───────── Ambient backdrop glow clouds ───────── */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <motion.div
          className="h-[480px] w-[480px] rounded-full opacity-30 blur-3xl"
          style={{ background: `radial-gradient(circle, ${COLORS.azure}, transparent 70%)` }}
          animate={{ scale: [1, 1.08, 1], opacity: [0.25, 0.35, 0.25] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute h-[360px] w-[360px] rounded-full opacity-20 blur-3xl"
          style={{ background: `radial-gradient(circle, ${COLORS.royal}, transparent 70%)` }}
          animate={{ scale: [1.05, 0.95, 1.05], opacity: [0.18, 0.28, 0.18] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <AmbientParticles />

      <div
        ref={ref}
        className="relative z-10 aspect-square w-[92vw] max-w-[640px] sm:w-full"
        style={{ perspective: "1400px" }}
      >
        <motion.div
          className="relative h-full w-full"
          style={{
            transform:
              "translate3d(var(--px,0px), var(--py,0px), 0) rotateX(var(--rx,0)) rotateY(var(--ry,0))",
            transformStyle: "preserve-3d",
            transition: "transform 0.25s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          {/* ───────── Layered static orbital rings (depth) ───────── */}
          {[0.96, 0.78, 0.6].map((scale, i) => (
            <div
              key={i}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                width: `${scale * 100}%`,
                height: `${scale * 100}%`,
                border: `1px solid rgba(135,170,214,${0.16 - i * 0.03})`,
                boxShadow: i === 0 ? `inset 0 0 40px rgba(28,137,244,0.05)` : undefined,
              }}
            />
          ))}

          {/* ───────── Slow-rotating dashed accent ring ───────── */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              width: "112%",
              height: "112%",
              border: `1px dashed rgba(28,137,244,0.18)`,
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: orbitDuration * 1.6, repeat: Infinity, ease: "linear" }}
          />

          {/* ───────── Orbiting micro-particles on two rings ───────── */}
          <RingParticles radius={RADIUS * 0.88} count={5} duration={orbitDuration * 0.7} />
          <RingParticles radius={RADIUS * 1.12} count={7} duration={orbitDuration * 1.3} reverse />

          {/* ───────── MAIN ROTATING GROUP: beams + nodes ───────── */}
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ duration: orbitDuration, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "50% 50%" }}
          >
            {/* Energy beams */}
            <svg viewBox="0 0 500 500" className="absolute inset-0 h-full w-full overflow-visible">
              <defs>
                <filter id="orb-glow" x="-60%" y="-60%" width="220%" height="220%">
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {NODES.map((n, i) => {
                const rad = (n.angle * Math.PI) / 180;
                const x = 250 + Math.cos(rad) * RADIUS;
                const y = 250 + Math.sin(rad) * RADIUS;
                const gradId = `beam-${i}`;
                return (
                  <g key={n.label} filter="url(#orb-glow)">
                    <defs>
                      <linearGradient id={gradId} gradientUnits="userSpaceOnUse" x1="250" y1="250" x2={x} y2={y}>
                        <stop offset="0%" stopColor={COLORS.cyan} stopOpacity="0" />
                        <stop offset="30%" stopColor={COLORS.azure} stopOpacity="0.7" />
                        <stop offset="70%" stopColor={COLORS.royal} stopOpacity="0.8" />
                        <stop offset="100%" stopColor={COLORS.royal} stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    {/* Base beam line */}
                    <line
                      x1="250" y1="250" x2={x} y2={y}
                      stroke={`url(#${gradId})`}
                      strokeWidth="1.4"
                      strokeOpacity="0.9"
                      strokeLinecap="round"
                    />
                    {/* Faint outer beam halo for thickness */}
                    <line
                      x1="250" y1="250" x2={x} y2={y}
                      stroke={COLORS.azure}
                      strokeWidth="5"
                      strokeOpacity="0.06"
                      strokeLinecap="round"
                    />
                    {/* Traveling energy particle */}
                    <motion.circle
                      r="3.2"
                      fill={COLORS.cyan}
                      initial={{ opacity: 0 }}
                      animate={{
                        cx: [250, x],
                        cy: [250, y],
                        opacity: [0, 1, 0],
                        scale: [0.6, 1.2, 0.6],
                      }}
                      transition={{
                        duration: 2.8,
                        repeat: Infinity,
                        delay: i * 0.9,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                      style={{ filter: `drop-shadow(0 0 10px ${COLORS.cyan})` }}
                    />
                    {/* Secondary trailing particle for richer flow */}
                    <motion.circle
                      r="1.8"
                      fill={COLORS.azure}
                      initial={{ opacity: 0 }}
                      animate={{
                        cx: [250, x],
                        cy: [250, y],
                        opacity: [0, 0.8, 0],
                      }}
                      transition={{
                        duration: 2.8,
                        repeat: Infinity,
                        delay: i * 0.9 + 0.55,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                    />
                  </g>
                );
              })}
            </svg>

            {/* Nodes */}
            {NODES.map((n) => {
              const rad = (n.angle * Math.PI) / 180;
              const x = Math.cos(rad) * RADIUS;
              const y = Math.sin(rad) * RADIUS;
              const Icon = n.icon;
              const isHovered = hovered === n.label;
              return (
                <div
                  key={n.label}
                  className="absolute left-1/2 top-1/2"
                  style={{ transform: `translate(${x}px, ${y}px)` }}
                >
                  {/* Counter-rotate so capsule stays upright */}
                  <motion.div
                    className="-translate-x-1/2 -translate-y-1/2"
                    animate={{ rotate: -360 }}
                    transition={{ duration: orbitDuration, repeat: Infinity, ease: "linear" }}
                  >
                    {/* Gentle independent float so it doesn't feel mechanical */}
                    <motion.div
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 4 + (n.angle % 3), repeat: Infinity, ease: "easeInOut" }}
                      onHoverStart={() => setHovered(n.label)}
                      onHoverEnd={() => setHovered(null)}
                      className="relative"
                    >
                      <motion.div
                        whileHover={{ scale: 1.07, y: -6 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="group relative flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-full px-3.5 py-2.5 text-[11px] font-semibold backdrop-blur-xl sm:px-4 sm:py-2.5 sm:text-xs"
                        style={{
                          background: "linear-gradient(135deg, rgba(255,255,255,0.85), rgba(255,255,255,0.55))",
                          border: "1px solid rgba(255,255,255,0.6)",
                          color: COLORS.navy,
                          boxShadow: isHovered
                            ? `0 0 0 1px rgba(28,137,244,0.5), 0 14px 36px -10px rgba(28,137,244,0.45), 0 0 24px rgba(94,231,255,0.35)`
                            : `0 8px 22px -10px rgba(4,31,62,0.3), inset 0 1px 0 rgba(255,255,255,0.6)`,
                        }}
                      >
                        {/* Animated rotating gradient border ring */}
                        <span
                          aria-hidden
                          className="absolute -inset-px -z-10 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                          style={{
                            background: `conic-gradient(from 0deg, ${COLORS.cyan}, ${COLORS.azure}, ${COLORS.royal}, ${COLORS.cyan})`,
                            padding: 1,
                            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                            WebkitMaskComposite: "xor",
                            maskComposite: "exclude",
                          }}
                        />

                        <span
                          className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full sm:h-6 sm:w-6"
                          style={{
                            background: `linear-gradient(135deg, ${COLORS.azure}, ${COLORS.royal})`,
                            boxShadow: `0 2px 8px -2px rgba(28,137,244,0.6)`,
                          }}
                        >
                          <Icon className="h-3 w-3 text-white sm:h-3.5 sm:w-3.5" strokeWidth={2} />
                        </span>
                        {n.label}

                        <AnimatePresence>
                          {isHovered && (
                            <motion.div
                              initial={{ opacity: 0, y: -4, scale: 0.96 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: -4, scale: 0.96 }}
                              transition={{ duration: 0.15 }}
                              className="absolute left-1/2 top-full z-20 mt-2.5 w-48 -translate-x-1/2 rounded-xl px-3.5 py-2.5 text-[11px] font-normal text-white shadow-2xl"
                              style={{
                                background: `linear-gradient(135deg, ${COLORS.navy}, ${COLORS.royal})`,
                                border: `1px solid rgba(94,231,255,0.25)`,
                              }}
                            >
                              <span
                                className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45"
                                style={{ background: COLORS.navy }}
                              />
                              {n.sub}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>

          {/* ───────── FIXED CENTRAL NEURAL CORE ───────── */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
            {/* Outer breathing aura */}
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                width: 160,
                height: 160,
                background: `radial-gradient(circle, ${COLORS.cyan}40, transparent 70%)`,
              }}
              animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Rotating gradient ring */}
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                width: 110,
                height: 110,
                background: `conic-gradient(from 0deg, ${COLORS.cyan}, ${COLORS.azure}, ${COLORS.royal}, transparent, ${COLORS.cyan})`,
                padding: 2,
                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />

            {/* Glass core frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              className="relative flex items-center justify-center rounded-full"
              style={{
                width: 92,
                height: 92,
                background: "linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.6))",
                border: "1px solid rgba(255,255,255,0.7)",
                boxShadow: `0 10px 32px -8px rgba(4,31,62,0.4), inset 0 1px 0 rgba(255,255,255,0.8), 0 0 28px rgba(28,137,244,0.25)`,
                backdropFilter: "blur(10px)",
              }}
            >
              {/* Pulsating inner glow */}
              <motion.div
                className="absolute inset-2 rounded-full"
                style={{ background: `radial-gradient(circle, ${COLORS.azure}25, transparent 75%)` }}
                animate={{ opacity: [0.4, 0.9, 0.4] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.img
                src={logoUrl}
                alt="Lanos"
                className="relative h-12 w-12 rounded-full object-cover md:h-14 md:w-14"
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
                style={{ filter: `drop-shadow(0 0 10px rgba(28,137,244,0.5))` }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default NeuralOrb;