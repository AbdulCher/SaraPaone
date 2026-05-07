// ============================================================
// FOOTER — centré en responsive
// ============================================================

import { Link } from "react-router-dom";
import Icons from "./Icons";

const NAV_LINKS = [
  { label: "HOME",    to: "/" },
  { label: "ABOUT",   to: "/about" },
  { label: "MUSIC",   to: "/music" },
  { label: "PHOTOS",  to: "/photos" },
  { label: "VIDEOS",  to: "/videos" },
  { label: "BOOK ME", to: "/bookme" },
];

const LEGAL_LINKS = [
  { label: "Mentions légales",             to: "/mentions-legales" },
  { label: "Politique de confidentialité", to: "/confidentialite" },
];

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="relative w-full bg-black text-white overflow-hidden">

      {/* Séparateur rouge */}
      <div className="w-full h-[6px] bg-gradient-to-r from-transparent via-[#e00303] to-transparent" />

      {/* Halo rouge haut */}
      <div
        className="absolute top-0 left-0 right-0 h-48 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 100% at 50% 0%, rgba(140,2,2,0.18) 0%, transparent 80%)",
        }}
      />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 pt-16 pb-10 flex flex-col gap-12">

        {/* Ligne haute */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Colonne 1 — Identité */}
          <div className="flex flex-col gap-5 items-center md:items-start text-center md:text-left">
            <div>
              <h2 className="font-bebas text-[22px] tracking-[0.2em] text-white/90 leading-none">
                BARHAN
              </h2>
              <p className="font-dm text-xs tracking-[0.22em] text-[#e15408] uppercase mt-1">
                Kennen Music
              </p>
            </div>
            <p className="font-dm text-sm text-white/60 leading-relaxed max-w-[240px]">
              Artiste aux sonorités métissées, entre Afrique de l'Ouest, soul et hip-hop. Basé à Paris.
            </p>
            <Icons />
          </div>

          {/* Colonne 2 — Navigation */}
          <div className="flex flex-col gap-4 items-center md:items-start">
            <p className="font-dm text-xs tracking-[0.22em] text-[#e15408] uppercase">
              Navigation
            </p>
            <nav className="flex flex-col gap-3 items-center md:items-start">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="font-dm text-sm text-white/50 hover:text-white
                             transition-all duration-200
                             hover:translate-x-1 inline-flex items-center gap-2 group"
                >
                  <span className="w-3 h-3 bg-[#e15408] opacity-0 group-hover:opacity-100 transition-all duration-200" />
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Colonne 3 — Contact */}
          <div className="flex flex-col gap-4 items-center md:items-start">
            <p className="font-dm text-xs tracking-[0.22em] text-[#e15408] uppercase">
              Contact
            </p>
            <div className="flex flex-col gap-3 items-center md:items-start">
              <a href="mailto:contact@barhan.com"
                 className="font-dm text-sm text-white/60 hover:text-[#e15408] transition-colors duration-200">
                contact@barhan.com
              </a>
              <a href="tel:+33612345678"
                 className="font-dm text-sm text-white/60 hover:text-[#e15408] transition-colors duration-200">
                +33 6 12 34 56 78
              </a>
              <p className="font-dm text-sm text-white/40">Paris, France</p>
            </div>

            {/* CTA Book */}
            <Link
              to="/bookme"
              className="mt-3 flex items-center gap-2
                         font-dm text-xs tracking-widest uppercase font-bold
                         text-black hover:text-white bg-[#2b3e82] hover:bg-[#e15408]
                         px-5 py-2.5 rounded-full transition-all duration-200
                         shadow-[0_4px_16px_rgba(221,177,131,0.25)]"
            >
              Réserver
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5">
                <path d="M2 8h12M9 3l5 5-5 5"/>
              </svg>
            </Link>
          </div>

        </div>

        {/* Séparateur */}
        <div className="w-full h-px bg-white/8" />

        {/* Ligne basse */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <p className="font-dm text-xs text-white/30 tracking-wide">
            © {YEAR} Barhan — Tous droits réservés
          </p>
          <div className="flex items-center gap-6">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="font-dm text-xs text-white/30 hover:text-white/60 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
