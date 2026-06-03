import { Link, useLocation } from 'react-router-dom'

export default function NavLinks({ className = "", linkClassName = "", onLinkClick }) {
  const location = useLocation()

  const links = [
    { href: "/", label: "Accueil" },
    { href: "/biographie", label: "Biographie" },
    { href: "/galerie", label: "Galerie" },
    { href: "/repertoire", label: "Répertoire" },
    { href: "/mecanique", label: "La mécanique de Circé" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <ul className={`flex items-center list-none m-0 p-0 ${className}`}>
      {links.map((link) => {
        const isActive = location.pathname === link.href
        return (
          <li key={link.href} className="w-full text-center">
            <Link
              to={link.href}
              onClick={onLinkClick}
              style={{ fontFamily: 'EB Garamond, cursive' }}
              className={`transition-all duration-200 ${linkClassName} ${
                isActive ? 'text-[#bea0a4]' : 'hover:text-gray-300'
              }`}
            >
              {link.label}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}