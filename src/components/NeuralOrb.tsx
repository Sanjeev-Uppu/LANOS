import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import logoUrl from "@/assets/lanos-logo.png";

// ─────────────────────────────────────────────
// Premium Brand Palette
// ─────────────────────────────────────────────
const COLORS = {
  navy: "#041F3E",      // Deep Navy Blue
  royal: "#224CA6",     // Royal Blue
  azure: "#1C89F4",     // Bright Azure Blue
  steel: "#87AAD6",     // Soft Steel Blue
  ice: "#DEF8FD",       // Ice Blue Background
  black: "#000000",
};

export function NeuralOrb() {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  // Three equally connected pillars
  const nodes = [
    { label: "Software", sub: "Web · Apps · Platforms", angle: -90, micro: null as string | null },
    { label: "AI Systems", sub: "Agents · Automation · Workflows", angle: 30, micro: "Less manual work" },
    { label: "AI Ads & Growth", sub: "Funnels · Acquisition · Analytics", angle: 150, micro: null as string | null },
  ];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) / r.width;
      const y = (e.clientY - r.top - r.height / 2) / r.height;
      el.style.setProperty("--rx", `${(-y * 8).toFixed(2)}deg`);
      el.style.setProperty("--ry", `${(x * 12).toFixed(2)}deg`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      className="relative flex w-full items-center justify-center overflow-hidden rounded-[32px] p-4 sm:p-10"
      style={{
        // Navy → Royal → Azure diagonal wash. White only shows up on the pills/text.
        background: `linear-gradient(150deg, ${COLORS.navy} 0%, ${COLORS.royal} 48%, ${COLORS.azure} 100%)`,
      }}
    >
      {/* Ambient colour pools for depth — sky-blue + navy, no flat white anywhere */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full blur-[110px]"
        style={{ background: COLORS.ice, opacity: 0.25 }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full blur-[120px]"
        style={{ background: COLORS.navy, opacity: 0.55 }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-1/3 top-0 h-56 w-56 rounded-full blur-[100px]"
        style={{ background: COLORS.steel, opacity: 0.3 }}
      />

      {/* Faint grid texture so the gradient doesn't read flat */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(#DEF8FD 1px, transparent 1px), linear-gradient(90deg, #DEF8FD 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      <div
        ref={ref}
        className="relative z-10 aspect-square w-[90vw] max-w-[600px] sm:w-full"
        style={{ perspective: "1200px" }}
      >
        <div
          className="relative h-full w-full"
          style={{
            transform: "rotateX(var(--rx,0)) rotateY(var(--ry,0))",
            transformStyle: "preserve-3d",
            transition: "transform 0.2s ease-out",
          }}
        >
          {/* Core glow — brighter azure/ice against the dark backdrop */}
          <div
            className="absolute inset-6 rounded-full opacity-80 blur-[90px]"
            style={{
              background: `radial-gradient(circle, ${COLORS.ice} 0%, ${COLORS.azure} 35%, transparent 70%)`,
            }}
          />

          {/* Glass orb behind logo */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background: `radial-gradient(circle, ${COLORS.ice} 0%, ${COLORS.azure} 60%, transparent 100%)`,
              filter: "blur(25px)",
            }}
          />

          {/* SVG network */}
          <svg viewBox="0 0 500 500" className="absolute inset-0 h-full w-full overflow-visible">
            <defs>
              <radialGradient id="core">
                <stop offset="0%" stopColor={COLORS.ice} />
                <stop offset="45%" stopColor={COLORS.azure} />
                <stop offset="100%" stopColor={COLORS.navy} />
              </radialGradient>
              <filter id="soft-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="1.2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Rotating hex — slow, premium, non-distracting */}
            <motion.g
              style={{ transformOrigin: "250px 250px" }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 180, ease: "linear" }}
            >
              <polygon
                points="250,90 390,170 390,330 250,410 110,330 110,170"
                fill="none"
                stroke={COLORS.ice}
                strokeOpacity="0.22"
                strokeWidth="1.3"
              />
              <polygon
                points="250,130 355,190 355,310 250,370 145,310 145,190"
                fill="none"
                stroke={COLORS.steel}
                strokeOpacity="0.35"
                strokeWidth="1.3"
              />
            </motion.g>

            <motion.g
              style={{ transformOrigin: "250px 250px" }}
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 240, ease: "linear" }}
            >
              <circle
                cx="250" cy="250" r="180"
                fill="none"
                stroke={COLORS.ice}
                strokeOpacity="0.2"
                strokeWidth="1.3"
                strokeDasharray="2 6"
              />
            </motion.g>

            {/* Connection lines — premium AI infrastructure */}
            {nodes.map((n, i) => {
              const rad = (n.angle * Math.PI) / 180;
              const x = 250 + Math.cos(rad) * 200;
              const y = 250 + Math.sin(rad) * 200;
              const gradId = `energy-line-${i}`;
              return (
                <g key={n.label} filter="url(#soft-glow)">
                  <defs>
                    <linearGradient id={gradId} gradientUnits="userSpaceOnUse" x1="250" y1="250" x2={x} y2={y}>
                      <stop offset="0%" stopColor={COLORS.ice} stopOpacity="0" />
                      <stop offset="35%" stopColor={COLORS.ice} stopOpacity="0.65" />
                      <stop offset="65%" stopColor={COLORS.azure} stopOpacity="0.75" />
                      <stop offset="100%" stopColor={COLORS.azure} stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {/* Thin elegant base line */}
                  <line
                    x1="250" y1="250" x2={x} y2={y}
                    stroke={`url(#${gradId})`}
                    strokeWidth="1.3"
                    strokeOpacity="0.85"
                    strokeLinecap="round"
                  />
                  {/* Synchronized soft pulse — energy flow */}
                  <motion.circle
                    r="3"
                    fill={COLORS.ice}
                    initial={{ opacity: 0 }}
                    animate={{
                      cx: [250, x],
                      cy: [250, y],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 3.2,
                      repeat: Infinity,
                      delay: i * 1.06,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    style={{ filter: `drop-shadow(0 0 12px ${COLORS.ice})` }}
                  />
                </g>
              );
            })}

            {/* Core */}
            <circle cx="250" cy="250" r="32" fill="url(#core)" />
            <motion.circle
              cx="250" cy="250" r="38"
              fill="none"
              stroke={COLORS.ice}
              strokeWidth="1"
              animate={{ r: [38, 64, 38], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 3.6, repeat: Infinity, ease: "easeOut" }}
            />
          </svg>

          {/* Logo embedded in core */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
            <motion.img
              src={logoUrl}
              alt="Lanos"
              className="h-16 w-16 object-contain md:h-20 md:w-20"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
              style={{ filter: `drop-shadow(0 0 25px ${COLORS.ice})` }}
            />
          </div>

          {/* Node pills — white used here, deliberately, as the contrast pop */}
          {nodes.map((n) => {
            const rad = (n.angle * Math.PI) / 180;
            const x = 50 + Math.cos(rad) * 42;
            const y = 50 + Math.sin(rad) * 42;
            return (
              <motion.div
                key={n.label}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${x}%`, top: `${y}%` }}
                onHoverStart={() => setHovered(n.label)}
                onHoverEnd={() => setHovered(null)}
                whileHover={{ scale: 1.08, y: -6 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <div
                  className="group relative cursor-pointer whitespace-nowrap rounded-full px-3 py-2 text-[11px] font-semibold transition-shadow duration-200 sm:px-4 sm:text-xs"
                  style={{
                    background: "rgba(255,255,255,0.96)",
                    border: `1px solid rgba(222,248,253,0.6)`,
                    color: COLORS.navy,
                    boxShadow:
                      hovered === n.label
                        ? `0 10px 30px -8px rgba(28,137,244,0.9), 0 0 0 3px rgba(222,248,253,0.5)`
                        : `0 8px 20px -10px rgba(4,31,62,0.55)`,
                  }}
                >
                  {n.label}
                  {hovered === n.label && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-1/2 top-full z-20 mt-2 w-44 -translate-x-1/2 rounded-md px-3 py-2 text-[11px] font-normal text-white shadow-xl"
                      style={{
                        background: `linear-gradient(135deg, ${COLORS.navy}, ${COLORS.azure})`,
                        border: `1px solid rgba(222,248,253,0.25)`,
                      }}
                    >
                      {n.sub}
                    </motion.div>
                  )}
                </div>

                {/* Discovered micro text — supporting label */}
                {n.micro && (
                  <motion.div
                    className="pointer-events-none absolute left-full top-0 ml-2 hidden -translate-y-1 whitespace-nowrap sm:block"
                    initial={{ opacity: 0, x: -4 }}
                    animate={{
                      opacity: [0, 0.85, 0.85],
                      x: [-4, 0, 0],
                      y: [-2, -6, -2],
                    }}
                    transition={{
                      opacity: { duration: 1.6, delay: 1.8, times: [0, 0.4, 1] },
                      x: { duration: 1.6, delay: 1.8, times: [0, 0.4, 1] },
                      y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 },
                    }}
                  >
                    <span
                      className="text-[9px] font-medium italic tracking-wide"
                      style={{ color: COLORS.ice }}
                    >
                      {n.micro}
                    </span>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}