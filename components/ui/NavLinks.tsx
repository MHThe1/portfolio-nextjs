import Link from "next/link"

interface NavItem {
  name: string
  link: string
}

interface NavLinksProps {
  navItems: NavItem[]
  activeSection: string
  isDarkMode: boolean
}

export default function NavLinks({ navItems, activeSection, isDarkMode }: NavLinksProps) {
  return (
    <div className="hidden md:flex items-baseline space-x-4">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.link}
          className={`px-3 py-2 rounded-xl text-sm font-medium transition-colors duration-300 ${
            activeSection === item.link.slice(1)
              ? "text-gray-100 bg-purple-600"
              : `${
                  isDarkMode ? "text-gray-100" : "text-gray-800"
                } hover:bg-purple-600 hover:text-gray-100`
          }`}
        >
          {item.name}
        </Link>
      ))}
    </div>
  )
}