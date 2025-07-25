// components/layout/Header.tsx
import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()

  const navItems = [
    { href: '/home', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/posts', label: 'Posts' },
  ]

  return (
    <header className="bg-white shadow-md p-4 mb-6">
      <nav className="flex gap-6">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`text-lg font-medium ${
              router.pathname === item.href
                ? 'text-blue-600 underline'
                : 'text-gray-700 hover:text-blue-500'
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}

export default Header
