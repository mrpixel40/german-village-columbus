'use client'

import { useState } from 'react'
import Link from 'next/link'

const navLinks = [
  { href: '/articles', label: 'Articles' },
  { href: '/condos', label: 'Condos' },
  { href: '/neighborhoods', label: 'Neighborhoods' },
  { href: '/favorites', label: "Local Favorites" },
  { href: '/parks', label: 'Parks' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="bg-brick-900 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-village-500 rounded-sm flex items-center justify-center text-white font-serif font-bold text-lg group-hover:bg-village-400 transition-colors">
              GV
            </div>
            <div className="hidden sm:block">
              <span className="font-serif text-lg font-semibold tracking-tight">German Village</span>
              <span className="text-brick-300 text-sm ml-2 font-sans">Columbus, Ohio</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-sans text-brick-100 hover:text-white hover:bg-brick-800 rounded-md transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-brick-200 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="md:hidden pb-4 border-t border-brick-800 mt-2 pt-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 text-sm font-sans text-brick-100 hover:text-white hover:bg-brick-800 rounded-md"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
