import { Button } from "@/components/ui/button"
import { Instagram, Twitter, Linkedin, Youtube, MapPin, Mail, Phone } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold">HI</span>
              </div>
              <span className="text-xl font-bold">House Influencer</span>
            </div>
            <p className="text-gray-400 mb-4">
              L'incubateur qui transforme l'influence en carrière professionnelle au Gabon.
            </p>

            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-yellow-400" />
                <span>Libreville, Gabon</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-yellow-400" />
                <span>+241 01 23 45 67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-yellow-400" />
                <span>contact@houseinfluencer.ga</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/services" className="hover:text-yellow-400">
                  Gestion d'influenceurs
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-yellow-400">
                  Production vidéo
                </Link>
              </li>
              <li>
                <Link href="/formations" className="hover:text-yellow-400">
                  Formations
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-yellow-400">
                  Agence pub
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Communauté</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/influenceurs" className="hover:text-yellow-400">
                  Nos influenceurs
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-yellow-400">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/evenements" className="hover:text-yellow-400">
                  Événements
                </Link>
              </li>
              <li>
                <Link href="/newsletter" className="hover:text-yellow-400">
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/aide" className="hover:text-yellow-400">
                  Centre d'aide
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-yellow-400">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/conditions" className="hover:text-yellow-400">
                  Conditions
                </Link>
              </li>
              <li>
                <Link href="/confidentialite" className="hover:text-yellow-400">
                  Confidentialité
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left">
              &copy; 2024 House Influencer Gabon. Tous droits réservés.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Button size="icon" variant="ghost" className="text-gray-400 hover:text-yellow-400">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-gray-400 hover:text-yellow-400">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-gray-400 hover:text-yellow-400">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-gray-400 hover:text-yellow-400">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
