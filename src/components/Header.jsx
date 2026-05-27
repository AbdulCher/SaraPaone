import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import NavLinks from './NavLinks'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [lang, setLang] = useState('FR')
  const languages = ['FR', 'EN', 'IT']

  return (
    <header className="fixed top-0 left-0 w-screen bg-[#0b0f0d] text-gray-300 z-50">
      
      <div className="flex items-center justify-between py-3 px-8">

        {/* Logo avec hover flèche */}
        <Link to="/" className="relative group h-10 w-auto">
          <img src="/logo.jpg" alt="Logo" className="h-10 w-auto object-contain transition-opacity duration-300 group-hover:opacity-0" />
          <div className="absolute inset-0 bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 12l7-7M3 12l7 7" />
            </svg>
          </div>
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:flex justify-center px-4">
          <NavLinks className="gap-3" linkClassName="text-lg font-medium px-2" />
        </nav>

        <div className="flex items-center gap-6">

          {/* Langues */}
          <div className="hidden md:flex items-center gap-2">
            {languages.map((l, index) => (
              <span key={l} className="flex items-center gap-2">
                <button
                  onClick={() => setLang(l)}
                  className={`text-sm tracking-wide transition-colors duration-200 ${
                    lang === l ? 'text-[#bea0a4]' : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  {l}
                </button>
                {index < languages.length - 1 && (
                  <span className="text-gray-600">|</span>
                )}
              </span>
            ))}
          </div>

          {/* Burger mobile */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`block w-6 h-0.5 bg-gray-300 transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-gray-300 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-gray-300 transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>

        </div>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden bg-[#000000]/80 px-8 pb-6 flex flex-col gap-4">
          <NavLinks className="flex-col gap-4" linkClassName="text-xl py-2 border-b border-gray-800" />
          <div className="flex gap-2 pt-2">
            {languages.map((l, index) => (
              <span key={l} className="flex items-center gap-2">
                <button
                  onClick={() => setLang(l)}
                  className={`text-sm tracking-wide ${lang === l ? 'text-[#bea0a4]' : 'text-gray-400'}`}
                >
                  {l}
                </button>
                {index < languages.length - 1 && <span className="text-gray-600">|</span>}
              </span>
            ))}
          </div>
        </div>
      )}

    </header>
  )
}