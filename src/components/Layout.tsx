import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
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
  black: "#000000",
};

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/process", label: "Process" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Floating navbar wrapper — centered, not full-width */}
      <div
        className="fixed left-1/2 z-50 -translate-x-1/2 transition-all duration-500"
        style={{
          top: "clamp(8px, 1.5vw, 16px)",
          width: "clamp(320px, 96%, 1280px)",
          paddingTop: "env(safe-area-inset-top)",
        }}
      >
        <header
          className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)]"
          style={{
            background: scrolled
              ? `linear-gradient(135deg, rgba(4,31,62,0.98) 0%, rgba(6,38,76,0.98) 100%)`
              : `linear-gradient(135deg, rgba(4,31,62,0.85) 0%, rgba(6,38,76,0.85) 100%)`,
            backdropFilter: "blur(22px)",
            WebkitBackdropFilter: "blur(22px)",
            borderRadius: "22px",
            border: scrolled
              ? "1px solid rgba(28,137,244,0.30)"
              : "1px solid rgba(255,255,255,0.08)",
            boxShadow: scrolled
              ? "0 18px 45px rgba(0,0,0,.32), 0 0 0 1px rgba(28,137,244,0.08)"
              : "0 10px 35px rgba(0,0,0,.18)",
          }}
        >
          {/* Top accent line */}
          <div
            className="h-[2px] w-full"
            style={{
              background: `linear-gradient(90deg, ${COLORS.azure}, ${COLORS.royal}, ${COLORS.steel}, ${COLORS.royal}, ${COLORS.azure})`,
              opacity: 0.9,
            }}
          />

          <nav
            className="flex items-center justify-between px-4 sm:px-6 lg:px-8"
            style={{ height: "clamp(60px, 6vw, 76px)" }}
          >
            {/* Logo */}
            <Link to="/" onClick={closeMenu} className="flex shrink-0 items-center gap-2.5 sm:gap-3">
              <div
                className="flex shrink-0 items-center justify-center rounded-full p-[2px]"
                style={{
                  width: "clamp(40px, 4vw, 48px)",
                  height: "clamp(40px, 4vw, 48px)",
                  background:
                    "linear-gradient(135deg,#5ecbff,#3b82f6,#1e40af,#5ecbff)",
                  boxShadow: "0 0 18px rgba(59,130,246,.35)",
                }}
              >
                <img
                  src={logoUrl}
                  alt="Lanos Innovation"
                  className="h-full w-full rounded-full bg-white object-cover"
                />
              </div>
              <span className="flex items-baseline gap-1.5">
                <span
                  className="font-extrabold tracking-wide text-white"
                  style={{ fontSize: "clamp(14px, 1.6vw, 18px)" }}
                >
                  LANOS
                </span>
                <span
                  className="hidden text-xs font-medium sm:inline lg:text-sm"
                  style={{ color: COLORS.steel, letterSpacing: "0.18em" }}
                >
                  Innovation
                </span>
              </span>
            </Link>

            {/* Desktop links */}
            <ul className="hidden items-center gap-5 md:flex lg:gap-8 xl:gap-10">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="group relative text-[14px] font-medium transition-all duration-300 hover:-translate-y-[2px] lg:text-[15px]"
                    style={{ color: "rgba(222,248,253,0.75)" }}
                    activeProps={{ style: { color: "#ffffff", fontWeight: 600 } }}
                    activeOptions={{ exact: true }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.azure)}
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(222,248,253,0.75)")
                    }
                  >
                    {l.label}
                    {/* Animated underline */}
                    <span
                      className="absolute -bottom-1.5 left-0 h-[2px] w-0 rounded-full transition-all duration-300 group-hover:w-full"
                      style={{ background: COLORS.azure }}
                    />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <Link
              to="/contact"
              className="hidden rounded-2xl px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 md:inline-block lg:px-6 lg:py-3"
              style={{
                background: `linear-gradient(135deg, ${COLORS.azure}, ${COLORS.royal})`,
                boxShadow: "0 12px 30px rgba(59,130,246,.45)",
                transform: "translateZ(0)",
              }}
            >
              Book a Call
            </Link>

            {/* Mobile menu toggle */}
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="flex h-11 w-11 items-center justify-center rounded-xl md:hidden"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <span className="relative block h-3.5 w-4">
                <span
                  className="absolute left-0 right-0 h-[1.5px] rounded-full transition-all duration-300"
                  style={{
                    background: COLORS.ice,
                    top: menuOpen ? "50%" : "0",
                    transform: menuOpen ? "translateY(-50%) rotate(45deg)" : "none",
                  }}
                />
                <span
                  className="absolute left-0 right-0 top-1/2 h-[1.5px] -translate-y-1/2 rounded-full transition-opacity duration-200"
                  style={{ background: COLORS.ice, opacity: menuOpen ? 0 : 1 }}
                />
                <span
                  className="absolute left-0 right-0 h-[1.5px] rounded-full transition-all duration-300"
                  style={{
                    background: COLORS.ice,
                    bottom: menuOpen ? "50%" : "0",
                    transform: menuOpen ? "translateY(50%) rotate(-45deg)" : "none",
                  }}
                />
              </span>
            </button>
          </nav>

          {/* Mobile menu panel */}
          <div
            className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] md:hidden"
            style={{
              maxHeight: menuOpen ? "100vh" : "0px",
              opacity: menuOpen ? 1 : 0,
            }}
          >
            <div
              className="mx-3 sm:mx-4 mb-4 mt-2 rounded-3xl px-5 py-6"
              style={{
                background: `linear-gradient(160deg, #06264C 0%, ${COLORS.navy} 100%)`,
                border: `1px solid rgba(28,137,244,0.25)`,
                boxShadow: "0 16px 40px -16px rgba(28,137,244,0.35)",
              }}
            >
              <ul className="flex flex-col gap-1">
                {links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      onClick={closeMenu}
                      className="block rounded-xl px-4 py-3.5 text-[16px] font-semibold transition-colors"
                      style={{ color: "rgba(222,248,253,0.9)" }}
                      activeProps={{
                        style: {
                          color: "#ffffff",
                          background: "rgba(28,137,244,0.18)",
                        },
                      }}
                      activeOptions={{ exact: true }}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                onClick={closeMenu}
                className="mt-4 block rounded-2xl px-5 py-3.5 text-center text-sm font-semibold text-white"
                style={{
                  background: `linear-gradient(135deg, ${COLORS.azure}, ${COLORS.royal})`,
                  boxShadow: "0 12px 30px rgba(59,130,246,.45)",
                }}
              >
                Book a Call
              </Link>
            </div>
          </div>
        </header>
      </div>

      {/* Spacer so page content doesn't hide under the floating navbar */}
      <div style={{ height: "clamp(76px, 8vw, 108px)" }} aria-hidden />
    </>
  );
}

export function Footer() {
  return (
    <footer
      className="relative mt-24 overflow-hidden sm:mt-32"
      style={{
        background: `linear-gradient(165deg, ${COLORS.navy} 0%, #06264C 55%, ${COLORS.royal} 180%)`,
      }}
    >
      {/* Ambient glow accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full blur-[100px]"
        style={{ background: COLORS.azure, opacity: 0.18 }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full blur-[100px]"
        style={{ background: COLORS.steel, opacity: 0.15 }}
      />

      {/* Top accent line */}
      <div
        className="relative h-[2px] w-full"
        style={{
          background: `linear-gradient(90deg, ${COLORS.azure}, ${COLORS.steel}, ${COLORS.royal})`,
          opacity: 0.8,
        }}
      />

      <div className="relative mx-auto grid max-w-[1280px] gap-10 px-5 py-14 sm:grid-cols-2 sm:px-6 sm:py-16 lg:grid-cols-4 lg:gap-12 lg:px-8">
        <div className="sm:col-span-2">
          <div className="flex items-center gap-3">
            <div
              className="flex shrink-0 items-center justify-center rounded-full p-[2px]"
              style={{
                width: 48,
                height: 48,
                background:
                  "linear-gradient(135deg,#5ecbff,#3b82f6,#1e40af,#5ecbff)",
                boxShadow: "0 0 18px rgba(59,130,246,.30)",
              }}
            >
              <img
                src={logoUrl}
                alt="Lanos Innovation"
                className="h-full w-full rounded-full bg-white object-cover"
              />
            </div>
            <span className="text-base font-extrabold tracking-wide text-white">
              LANOS Innovation
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed" style={{ color: COLORS.steel }}>
            Software, AI, and growth systems engineered for businesses building their next phase.
          </p>
        </div>

        <div>
          <h4
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: COLORS.azure }}
          >
            Company
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[
              { to: "/services", label: "Services" },
              { to: "/process", label: "Process" },
              { to: "/case-studies", label: "Case Studies" },
              { to: "/about", label: "About" },
            ].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="transition-colors duration-200"
                  style={{ color: "rgba(222,248,253,0.7)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(222,248,253,0.7)")
                  }
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: COLORS.azure }}
          >
            Contact
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a
                href="mailto:hello@lanos.io"
                className="transition-colors duration-200"
                style={{ color: "rgba(222,248,253,0.7)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(222,248,253,0.7)")
                }
              >
                hello@lanos.io
              </a>
            </li>
            <li>
              <Link
                to="/contact"
                className="transition-colors duration-200"
                style={{ color: "rgba(222,248,253,0.7)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(222,248,253,0.7)")
                }
              >
                Start a project
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative" style={{ borderTop: "1px solid rgba(135,170,214,0.2)" }}>
        <div
          className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-2 px-5 py-6 text-xs sm:flex-row sm:items-center sm:px-6 lg:px-8"
          style={{ color: "rgba(135,170,214,0.8)" }}
        >
          <p>© {new Date().getFullYear()} Lanos Innovation. All rights reserved.</p>
          <p>Engineered for the AI era.</p>
        </div>
      </div>
    </footer>
  );
}