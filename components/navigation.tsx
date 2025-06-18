"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Accueil" },
    { href: "/services", label: "Services" },
    { href: "/influenceurs", label: "Influenceurs" },
    { href: "/entreprise", label: "Entreprise" },
    { href: "/formations", label: "Formations" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-xl">HI</span>
            </div>
            <span className="text-2xl font-bold text-black">House Influencer</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors ${
                  pathname === item.href ? "text-yellow-600 font-semibold" : "text-gray-700 hover:text-yellow-500"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex space-x-2">
            <Link href="/connexion">
              <Button variant="outline" className="border-yellow-400 text-yellow-600 hover:bg-yellow-50">
                Connexion
              </Button>
            </Link>
            <Link href="/inscription">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">Devenir membre</Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg transition-colors ${
                      pathname === item.href ? "text-yellow-600 font-semibold" : "text-gray-700 hover:text-yellow-500"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="flex flex-col space-y-2 pt-4">
                  <Link href="/connexion" onClick={() => setIsOpen(false)}>
                    <Button variant="outline" className="w-full border-yellow-400 text-yellow-600 hover:bg-yellow-50">
                      Connexion
                    </Button>
                  </Link>
                  <Link href="/inscription" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black">Devenir membre</Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
