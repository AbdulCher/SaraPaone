import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'

export default function SocialIcons() {
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
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
  )
}