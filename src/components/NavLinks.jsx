import { Link } from 'react-router-dom'

export default function NavLinks({ className = "", linkClassName = "" }) {
  const links = [
    { href: "/", label: "Accueil" },
    { href: "/biographie", label: "Biographie" },
    { href: "/photos", label: "Photos" },
    { href: "/videos", label: "Vidéos" },
    { href: "/repertoire", label: "Répertoire" },
    { href: "/projets", label: "Projets" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <ul className={`flex items-center list-none m-0 p-0 ${className}`}>
      {links.map((link) => (
        <li key={link.href}>
          <Link
            to={link.href}
            className={`hover:text-gray-300 text-2xl transition-colors duration-200 ${linkClassName}`}
            style={{ fontFamily: 'Aref ruqaa, sans serif' }}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}