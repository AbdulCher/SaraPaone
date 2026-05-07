// ============================================================
// HEADER — typographie unifiée Bebas Neue + DM Sans
// ============================================================

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { label: "HOME",    to: "/",       color: "#e15408", text: "#ffffff" },
  { label: "ABOUT",  to: "/about",  color: "#e15408", text: "#ffffff" },
  { label: "MUSIC",  to: "/music",  color: "#e15408", text: "#ffffff" },
  { label: "PHOTOS", to: "/photos", color: "#e15408", text: "#ffffff" },
  { label: "VIDEOS", to: "/videos", color: "#e15408", text: "#ffffff" },
  { label: "BOOK ME",to: "/bookme", color: "#e15408", text: "#ffffff" },
  { label: "SHOP",   to: "/shop",   color: "#e15408", text: "#ffffff" },
];

export default function Header() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (to) =>
    to === "/" ? pathname === "/" : pathname.startsWith(to);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header
      className="w-full fixed top-0 left-0 z-50"
      style={{
        borderBottom: "3px solid transparent",
        borderImage: "linear-gradient(to right, transparent, #e00303 30%, #e00303 70%, transparent) 1",
      }}
    >

      {/* Fond flouté */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

      <nav className="relative max-w-6xl mx-auto flex items-center justify-between py-3 px-6">

        {/* Logo — Bebas Neue */}
        <Link
          to="/"
          className="font-bebas text-[1.8rem] tracking-[0.2em] text-white/90 uppercase
                     hover:text-[#ddb183] transition-colors duration-200"
        >
          BARHAN
        </Link>

        {/* Navigation desktop — DM Sans */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.to);
            return (
              <li key={link.to} className="relative">
                <Link
                  to={link.to}
                  className="font-dm rounded-xl relative flex flex-col items-center px-3 py-1.5
                             text-[1rem] font-bold tracking-[0.15em] uppercase
                             transition-all duration-200 select-none"
                  style={{
                    color: active ? link.text : "rgba(255,255,255,0.55)",
                    backgroundColor: active ? link.color : "transparent",
                  }}
                  onMouseEnter={(e) => {
                    if (!active) {
                      e.currentTarget.style.color = link.text;
                      e.currentTarget.style.backgroundColor = link.color + "99";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!active) {
                      e.currentTarget.style.color = "rgba(255,255,255,0.55)";
                      e.currentTarget.style.backgroundColor = "transparent";
                    }
                  }}
                >
                  {link.label}
                  {active && (
                    <span
                      className="absolute -bottom-1.5 left-1/2 -translate-x-1/2
                                 w-1.5 h-1.5 rounded-full animate-pulse"
                      style={{ backgroundColor: link.color }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Hamburger mobile */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 z-10"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          <span className={`block h-px w-6 bg-white transition-all duration-300 origin-center
            ${menuOpen ? "rotate-45 translate-y-[8px]" : ""}`} />
          <span className={`block h-px w-6 bg-white transition-all duration-300
            ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`block h-px w-6 bg-white transition-all duration-300 origin-center
            ${menuOpen ? "-rotate-45 -translate-y-[8px]" : ""}`} />
        </button>

      </nav>

      {/* Menu mobile overlay */}
      <div
        className={`md:hidden fixed inset-0 top-[53px] bg-black/97 backdrop-blur-md
                    transition-all duration-400 ease-in-out flex flex-col
                    ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        {/* Border top dégradé rouge sur le menu mobile */}
        <div
          className="absolute top-0 left-0 right-0 h-[3px] z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, transparent, #e00303 30%, #e00303 70%, transparent)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 30%, rgba(221,177,131,0.06) 0%, transparent 70%)",
          }}
        />

        <ul className="relative z-10 flex flex-col items-stretch px-6 pt-8 gap-2">
          {NAV_LINKS.map((link, i) => {
            const active = isActive(link.to);
            return (
              <li
                key={link.to}
                className="transition-all duration-300"
                style={{
                  transitionDelay: menuOpen ? `${i * 60}ms` : "0ms",
                  transform: menuOpen ? "translateY(0)" : "translateY(16px)",
                  opacity: menuOpen ? 1 : 0,
                }}
              >
                <Link
                  to={link.to}
                  className="font-dm flex items-center justify-between px-5 py-4 rounded-xl
                             text-sm font-bold tracking-widest uppercase
                             transition-all duration-200"
                  style={{
                    backgroundColor: active ? link.color : "rgba(255,255,255,0.04)",
                    color: active ? link.text : "rgba(255,255,255,0.6)",
                    borderLeft: active ? `3px solid ${link.color}` : "3px solid transparent",
                  }}
                >
                  {link.label}
                  {active && (
                    <span
                      className="w-2 h-2 rounded-full animate-pulse"
                      style={{ backgroundColor: link.text }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Bas menu mobile */}
        <div className="relative z-10 mt-auto px-6 pb-10 flex flex-col items-center gap-3">
          <div className="w-full h-px bg-white/8 mb-4" />
          <p className="font-dm text-xs tracking-widest uppercase text-white/20">
            © {new Date().getFullYear()} Barhan
          </p>
        </div>
      </div>

    </header>
  );
}
