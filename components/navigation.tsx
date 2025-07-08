"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useAuth } from '@/context/AuthContext';
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"

export function Navigation() {
  const { user, logout } = useAuth();
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
    <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className=" hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <div className="relative w-12 h-12">
              <Image
                src="/images/logo.jpg"
                alt="House Influencer Logo"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
            <span className="hidden font-bold sm:inline-block">House Influencer</span>
          </Link>
          <nav className="flex items-center space-x-6 px-20 text-sm font-medium">
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
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Barre de recherche */}
          </div>
          <nav className="flex items-center">
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm">Bonjour, {user.name}</span>
                <Button 
                  variant="outline" 
                  onClick={logout}
                  className="border-yellow-400 text-yellow-600 hover:bg-yellow-50"
                >
                  Déconnexion
                </Button>
              </div>
            ) : (
              <div className="flex space-x-2">
                <Link href="/connexion">
                  <Button variant="outline" className="border-yellow-400 text-yellow-600 hover:bg-yellow-50">
                    Connexion
                  </Button>
                </Link>
                <Link href="/inscription">
                  <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">
                    Devenir membre
                  </Button>
                </Link>
              </div>
            )}
          </nav>
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
                  {user ? (
                    <div className="flex items-center space-x-4">
                      <span className="text-sm">Bonjour, {user.name}</span>
                      <Button 
                        variant="outline" 
                        onClick={logout}
                        className="w-full border-yellow-400 text-yellow-600 hover:bg-yellow-50"
                      >
                        Déconnexion
                      </Button>
                    </div>
                  ) : (
                    <div className="flex space-x-2">
                      <Link href="/connexion" onClick={() => setIsOpen(false)}>
                        <Button variant="outline" className="w-full border-yellow-400 text-yellow-600 hover:bg-yellow-50">
                          Connexion
                        </Button>
                      </Link>
                      <Link href="/inscription" onClick={() => setIsOpen(false)}>
                        <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black">
                          Devenir membre
                        </Button>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
