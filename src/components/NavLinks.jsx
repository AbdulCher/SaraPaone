import { Link, useLocation } from 'react-router-dom'

export default function NavLinks({ className = "", linkClassName = "" }) {
  const location = useLocation()

  const links = [
    { href: "/", label: "ACCUEIL" },
    { href: "/bio", label: "BIO" },
    { href: "/galerie", label: "GALERIE" },
    { href: "/repertoire", label: "RÉPERTOIRE" },
    { href: "/mecanique", label: "LA MÉCANIQUE DE CIRCÉ" },
    { href: "/contact", label: "CONTACT" },
  ]
  return (
    <ul className={`flex items-center list-none m-0 p-0 ${className}`}>
      {links.map((link) => {
        const isActive = location.pathname === link.href
        return (
          <li key={link.href}>
            <Link
              to={link.href}
              style={{ fontFamily: 'EB Garamond, cursive' }}
              className={`transition-colors duration-200 ${linkClassName} ${
                isActive
                  ? 'text-[#bea0a4] border-1 border-[#bea0a4] p-2'
                  : 'hover:text-gray-300'
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