import { Link } from 'react-router-dom'

export default function NavLinks({ className = "", linkClassName = "" }) {
  const links = [
    { href: "/", label: "Accueil" },
    { href: "/biographie", label: "Biographie" },
    { href: "/photo", label: "Photo" },
    { href: "/video", label: "Vidéo" },
    { href: "/repertoire", label: "Répertoire" },
    { href: "/mecanique", label: "La Mécanique de Ciré" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <ul className={`flex items-center list-none m-0 p-0 ${className}`}>
      {links.map((link) => (
        <li key={link.href}>
          <Link to={link.href} className={`hover:text-gray-300 transition-colors duration-200 ${linkClassName}`}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}