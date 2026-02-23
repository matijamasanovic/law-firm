"use client"

import Link from "next/link"
import { Search } from "lucide-react"
import { useState } from "react"

const navItems = [
  { label: "Naslovna", href: "/" },
  { label: "O Nama", href: "/o-nama" },
  { label: "Firma", href: "/firma" },
  { label: "Tim", href: "/tim" },
  { label: "Oblasti Prava", href: "/oblasti-prava" },
]

const rightNavItems = [
  { label: "Kontakt", href: "/kontakt" },
  { label: "Karijera", href: "/karijera" },
  { label: "Vijesti", href: "/vijesti" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="font-serif text-xl md:text-2xl text-foreground font-medium">
            Advokatska kancelarija
          </Link>

          {/* Desktop Navigation - Left */}
          <nav className="hidden lg:flex items-center gap-8 ml-12">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Navigation - Right */}
          <div className="hidden lg:flex items-center gap-6 ml-auto">
            {rightNavItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="bg-[#1a2332] text-white px-5 py-2.5 text-sm font-medium hover:bg-[#2a3342] transition-colors"
            >
              Besplatna Konsultacija
            </Link>
            <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`h-0.5 w-full bg-current transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`h-0.5 w-full bg-current transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 w-full bg-current transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="border-t border-border pt-4 mt-2">
                {rightNavItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <Link
                href="/kontakt"
                className="bg-[#1a2332] text-white px-5 py-3 text-sm font-medium text-center hover:bg-[#2a3342] transition-colors mt-2"
              >
                Besplatna Konsultacija
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
