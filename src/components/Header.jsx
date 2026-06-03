import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import NavLinks from './NavLinks'
import i18n from '../i18n'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [lang, setLang] = useState('FR')
  const languages = ['FR', 'EN', 'IT']

  const changeLanguage = (l) => {
    setLang(l)
    i18n.changeLanguage(l.toLowerCase())
  }
  const menuRef = useRef()
  
  // Fermer en cliquant dehors
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [menuOpen])

  return (
    <header className="fixed top-0 left-0 w-screen bg-[#0b0f0d] text-gray-300 z-50" ref={menuRef}>
      
      <div className="flex items-center justify-between py-3 px-8">

        {/* Logo */}
        <Link to="/" onClick={() => setMenuOpen(false)} className="relative group h-10 md:h-14 w-auto">
          <img src="/logo.jpg" alt="Logo" className="h-10 md:h-14 w-auto object-contain transition-opacity duration-300 group-hover:opacity-0" />
          <div className="absolute inset-0 bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 md:w-6 h-4 md:h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 12l7-7M3 12l7 7" />
            </svg>
          </div>
        </Link>

        {/* Nav desktop */}
        <nav className="hidden xl:flex justify-center px-2">
          <NavLinks className="gap-16" linkClassName="text-3xl font-medium px-1 whitespace-nowrap" />
        </nav>
        <div className="flex items-center gap-6">

          {/* Langues desktop */}
          <div className="hidden xl:flex items-center gap-2">
            {languages.map((l, index) => (
              <span key={l} className="flex items-center gap-2">
                <button
                  onClick={() => changeLanguage(l)}
                  className={`text-lg tracking-wide transition-colors duration-200 ${
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

          {/* Burger */}
          <button
            className="xl:hidden flex flex-col gap-1.5 md:gap-2 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`block w-6 md:w-8 h-0.5 bg-gray-300 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 md:w-8 h-0.5 bg-gray-300 transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-6 md:w-8 h-0.5 bg-gray-300 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>

        </div>
      </div>

      {/* Menu déroulant */}
     <div
          className={`xl:hidden fixed left-0 right-0 overflow-hidden transition-all duration-500 ease-in-out ${
            menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
          style={{
            top: '56px',
            backdropFilter: 'blur(20px)',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            zIndex: 40,
          }}
        >
        <div className="flex flex-col items-center gap-2 py-8">
          
          <NavLinks
            className="flex-col items-center gap-0 w-full"
            linkClassName="text-xl md:text-2xl py-1 text-center block w-full hover:text-[#bea0a4] transition-all duration-200"
            onLinkClick={() => setMenuOpen(false)}
          />

          {/* Langues */}
          <div className="flex gap-4 pt-6 mt-2">
            {languages.map((l, index) => (
              <span key={l} className="flex items-center gap-2">
                <button
                  onClick={() => setLang(l)}
                  className={`text-sm md:text-base tracking-wide transition-colors duration-200 ${
                    lang === l ? 'text-[#bea0a4]' : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  {l}
                </button>
                {index < languages.length - 1 && <span className="text-gray-600">|</span>}
              </span>
            ))}
          </div>

        </div>
      </div>

    </header>
  )
}