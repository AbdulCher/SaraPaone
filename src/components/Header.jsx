
import NavLinks from './NavLinks'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-screen bg-[#0b0f0d] text-2xl text-gray-300 z-50">
      <div className="grid items-center py-3" style={{ 
        gridTemplateColumns: 'auto 1fr auto',
        paddingLeft: '2rem', 
        paddingRight: '2rem' 
      }}>
  
<img src="/bale.JPG" alt="Logo" className="h-14 w-auto object-contain" />
        <nav className="flex justify-center px-4">
            <NavLinks className="gap-3" linkClassName="text-2xl px-2" />
        </nav>

        <div className="flex items-center gap-4">
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
    </header>
  )
}