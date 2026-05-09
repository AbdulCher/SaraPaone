import NavLinks from './NavLinks'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'

export default function Footer() {
  return (
<footer className="bg-black text-white w-screen min-h-[67vh] py-12 flex flex-col items-center justify-center gap-10">
      <nav>
        <NavLinks className="gap-6 text-lg flex-wrap justify-center" />
      </nav>

      <div className="flex items-center gap-6">
  <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:opacity-80 transition-opacity">
    <FaFacebook className="text-blue-600 text-4xl" />
  </a>
  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:opacity-80 transition-opacity">
    <FaInstagram className="text-pink-500 text-4xl" />
  </a>
  <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:opacity-80 transition-opacity">
    <FaYoutube className="text-red-600 text-4xl" />
  </a>
</div>

      <p className="text-gray-400 text-sm">© 2026 Sara Paone</p>

    </footer>
  )
}