import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#0b0f0d] text-white w-screen py-8 px-6 md:px-12">

      {/* Desktop et tablette — row */}
      <div className="hidden md:grid md:grid-cols-3 items-center gap-4">

        {/* Colonne gauche — Email */}
        <div className="flex flex-col">
          <h2 style={{ fontFamily: 'EB Garamond, serif', fontSize: 'clamp(16px, 2vw, 30px)', color: '#bea0a4' }}>
            E-mail
          </h2>
          <a href="mailto:sara.paone@example.com" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base lg:text-2xl">
            sara.paone@example.com
          </a>
        </div>

        {/* Colonne centre */}
        <div className="flex items-center justify-center gap-2">
          <span className="text-[#bea0a4] text-sm md:text-base">←</span>
          <Link
            to="/contact"
            style={{ fontFamily: 'EB Garamond, serif', fontSize: 'clamp(20px, 2.5vw, 60px)' }}
            className="text-white/70 hover:text-[#bea0a4] transition-colors tracking-wide text-center"
          >
            Contacter Sara Paone
          </Link>
          <span className="text-[#bea0a4] text-sm md:text-base">→</span>
        </div>

        {/* Colonne droite — icônes + copyright */}
        <div className="flex flex-col items-end gap-3">
          <div className="flex items-center gap-4 md:gap-6">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:opacity-80 transition-opacity">
              <FaFacebook className="text-blue-600 text-lg md:text-2xl" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:opacity-80 transition-opacity">
              <FaInstagram className="text-pink-500 text-lg md:text-2xl" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:opacity-80 transition-opacity">
              <FaYoutube className="text-red-600 text-lg md:text-2xl" />
            </a>
          </div>
          <p className="text-gray-400 text-sm md:text-base">© 2026 Sara Paone</p>
        </div>

      </div>

      {/* Mobile — column */}
      <div className="flex md:hidden flex-col items-center gap-6 text-center">

        <div className="flex items-center gap-2">
          <span className="text-[#bea0a4]">←</span>
          <Link
            to="/contact"
            style={{ fontFamily: 'EB Garamond, serif', fontSize: '20px' }}
            className="text-white hover:text-[#bea0a4] transition-colors tracking-wide"
          >
            Contacter Sara Paone
          </Link>
          <span className="text-[#bea0a4]">→</span>
        </div>

        <div className="flex flex-col items-center gap-1">
          <h2 style={{ fontFamily: 'EB Garamond, serif', fontSize: '18px', color: '#bea0a4' }}>
            E-mail
          </h2>
          <a href="mailto:sara.paone@example.com" className="text-gray-400 hover:text-white transition-colors text-sm">
            sara.paone@example.com
          </a>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:opacity-80 transition-opacity">
            <FaFacebook className="text-blue-600 text-2xl" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:opacity-80 transition-opacity">
            <FaInstagram className="text-pink-500 text-2xl" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:opacity-80 transition-opacity">
            <FaYoutube className="text-red-600 text-2xl" />
          </a>
        </div>

        <p className="text-gray-400 text-sm">© 2026 Sara Paone</p>

      </div>

    </footer>
  )
}