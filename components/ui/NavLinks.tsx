import Link from "next/link"

interface NavItem {
  name: string
  link: string
}

interface NavLinksProps {
  navItems: NavItem[]
  activeSection: string
}

export default function NavLinks({ navItems, activeSection }: NavLinksProps) {
  return (
    <div className="hidden md:flex items-baseline space-x-4">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.link}
          className={`px-2 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
            activeSection === item.link.slice(1)
              ? "text-gray-100 bg-purple-600"
              :  "hover:bg-purple-600 hover:text-gray-100"
          }`}
        >
          {item.name}
        </Link>
      ))}
    </div>
  )
}