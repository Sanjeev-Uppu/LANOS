import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import logoUrl from "../assets/lanos-logo.png";

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

  // Close menu on route change (link click)
  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? `linear-gradient(135deg, ${COLORS.navy} 0%, #06264C 100%)`
          : `linear-gradient(135deg, rgba(4,31,62,0.95) 0%, rgba(6,38,76,0.95) 100%)`,
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: scrolled
          ? `1px solid rgba(28,137,244,0.35)`
          : "1px solid rgba(135,170,214,0.15)",
        boxShadow: scrolled ? "0 8px 30px -12px rgba(28,137,244,0.35)" : "none",
      }}
    >
      {/* Top accent line — subtle signature touch */}
      <div
        className="h-[2px] w-full"
        style={{
          background: `linear-gradient(90deg, ${COLORS.azure}, ${COLORS.royal}, ${COLORS.steel}, ${COLORS.royal}, ${COLORS.azure})`,
          opacity: 0.9,
        }}
      />

      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:h-20">
        <Link to="/" onClick={closeMenu} className="flex items-center gap-2.5 sm:gap-3">
          <div
            className="rounded-lg p-[2px]"
            style={{ background: `linear-gradient(135deg, ${COLORS.azure}, ${COLORS.steel})` }}
          >
            <img
              src={logoUrl}
              alt="Lanos Innovation"
              className="h-7 w-7 rounded-[6px] bg-white object-contain sm:h-8 sm:w-8"
            />
          </div>
          <span className="flex items-baseline gap-1.5">
            <span className="text-sm font-bold tracking-tight text-white sm:text-base">
              LANOS
            </span>
            <span className="hidden text-sm font-light sm:inline" style={{ color: COLORS.steel }}>
              Innovation
            </span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="relative text-sm font-medium transition-colors duration-200"
                style={{ color: "rgba(222,248,253,0.75)" }}
                activeProps={{
                  style: { color: "#ffffff", fontWeight: 600 },
                }}
                activeOptions={{ exact: true }}
                onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.azure)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(222,248,253,0.75)")}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          to="/contact"
          className="hidden rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg md:inline-block"
          style={{
            background: `linear-gradient(135deg, ${COLORS.azure}, ${COLORS.royal})`,
            boxShadow: `0 4px 18px -4px rgba(28,137,244,0.55)`,
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
          className="relative flex h-10 w-10 items-center justify-center rounded-full md:hidden"
          style={{
            background: "rgba(28,137,244,0.15)",
            border: `1px solid rgba(28,137,244,0.35)`,
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
        className="overflow-hidden transition-all duration-300 ease-out md:hidden"
        style={{
          maxHeight: menuOpen ? "440px" : "0px",
          opacity: menuOpen ? 1 : 0,
        }}
      >
        <div
          className="mx-4 mb-4 rounded-2xl px-5 py-5"
          style={{
            background: `linear-gradient(160deg, #06264C 0%, ${COLORS.navy} 100%)`,
            border: `1px solid rgba(28,137,244,0.3)`,
            boxShadow: "0 16px 40px -16px rgba(28,137,244,0.35)",
          }}
        >
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={closeMenu}
                  className="block rounded-lg px-3 py-2.5 text-[15px] font-medium transition-colors"
                  style={{ color: "rgba(222,248,253,0.9)" }}
                  activeProps={{
                    style: { color: "#ffffff", background: "rgba(28,137,244,0.18)" },
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
            className="mt-3 block rounded-full px-5 py-3 text-center text-sm font-semibold text-white shadow-md"
            style={{
              background: `linear-gradient(135deg, ${COLORS.azure}, ${COLORS.royal})`,
              boxShadow: `0 4px 18px -4px rgba(28,137,244,0.55)`,
            }}
          >
            Book a Call
          </Link>
        </div>
      </div>
    </header>
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

      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:py-16 md:grid-cols-4 md:gap-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <div
              className="rounded-lg p-[2px]"
              style={{ background: `linear-gradient(135deg, ${COLORS.azure}, ${COLORS.steel})` }}
            >
              <img
                src={logoUrl}
                alt="Lanos Innovation"
                className="h-9 w-9 rounded-[6px] bg-white object-contain"
              />
            </div>
            <span className="text-base font-bold tracking-tight text-white">
              LANOS Innovation
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed" style={{ color: COLORS.steel }}>
            Software, AI, and growth systems engineered for businesses building their next phase.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest" style={{ color: COLORS.azure }}>
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
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(222,248,253,0.7)")}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest" style={{ color: COLORS.azure }}>
            Contact
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a
                href="mailto:hello@lanos.io"
                className="transition-colors duration-200"
                style={{ color: "rgba(222,248,253,0.7)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(222,248,253,0.7)")}
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
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(222,248,253,0.7)")}
              >
                Start a project
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative" style={{ borderTop: "1px solid rgba(135,170,214,0.2)" }}>
        <div
          className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-6 py-6 text-xs md:flex-row md:items-center"
          style={{ color: "rgba(135,170,214,0.8)" }}
        >
          <p>© {new Date().getFullYear()} Lanos Innovation. All rights reserved.</p>
          <p>Engineered for the AI era.</p>
        </div>
      </div>
    </footer>
  );
}