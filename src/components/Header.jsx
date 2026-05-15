import { useState } from 'react'
import NavLinks from './NavLinks'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-screen bg-[#0b0f0d] text-gray-300 z-50">
      
      {/* Barre principale */}
      <div className="flex items-center justify-between py-3 px-8">
  
        <img src="/bale.JPG" alt="Logo" className="h-14 w-auto object-contain" />

        {/* Nav desktop */}
        <nav className="hidden md:flex justify-center px-4">
          <NavLinks className="gap-3" linkClassName="text-2xl px-2" />
        </nav>

        {/* Icônes desktop + burger mobile */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook className="text-blue-600 text-2xl hover:opacity-80 transition-opacity" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram className="text-pink-500 text-2xl hover:opacity-80 transition-opacity" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <FaYoutube className="text-red-600 text-2xl hover:opacity-80 transition-opacity" />
            </a>
          </div>

          {/* Burger */}
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

      {/* Menu mobile déroulant */}
      {menuOpen && (
        <div className="md:hidden bg-[#0b0f0d] px-8 pb-6 flex flex-col gap-4">
          <NavLinks className="flex-col gap-4" linkClassName="text-xl py-2 border-b border-gray-800" />
          <div className="flex gap-4 pt-2">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook className="text-blue-600 text-2xl hover:opacity-80 transition-opacity" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram className="text-pink-500 text-2xl hover:opacity-80 transition-opacity" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <FaYoutube className="text-red-600 text-2xl hover:opacity-80 transition-opacity" />
            </a>
          </div>
        </div>
      )}

    </header>
  )
}