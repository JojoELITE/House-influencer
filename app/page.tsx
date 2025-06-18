import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Video,
  Newspaper,
  GraduationCap,
  Megaphone,
  CreditCard,
  Play,
  ArrowRight,
  CheckCircle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-black via-gray-900 to-black py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                L'influence devient une
                <span className="text-yellow-400"> carrière</span>
              </h1>
              <p className="text-xl mb-8 text-gray-300">
                Un incubateur d'influenceurs gabonais, une agence de publicité, un média, un laboratoire d'égéries et
                une mutuelle d'investissement pour les talents de demain.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/inscription">
                  <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black">
                    <Users className="mr-2 h-5 w-5" />
                    Devenir membre
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-black"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Nos services
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-yellow-400/20 rounded-2xl p-8 backdrop-blur-sm">
                <Image
                  src="/images/hero-studio.jpg"
                  alt="Studio d'influenceurs à Libreville"
                  width={500}
                  height={400}
                  className="rounded-lg object-cover"
                />
                <div className="absolute -top-4 -right-4 bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold">
                  🎬 Studio Libreville
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Nos Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une gamme complète de services pour transformer votre influence en succès professionnel au Gabon
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Gestion d'influenceurs */}
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-yellow-400">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <Users className="h-6 w-6 text-yellow-600" />
                  </div>
                  <CardTitle className="text-xl">Gestion d'influenceurs</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Création de contenu & monétisation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Gestion des réseaux sociaux
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Contrats d'égérie publicitaire
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Production */}
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-yellow-400">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <Video className="h-6 w-6 text-yellow-600" />
                  </div>
                  <CardTitle className="text-xl">Pôle Cinéma & Production</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Studio vidéo & shooting photo pro
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Production de films pub
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Capsules influence
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Médias */}
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-yellow-400">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <Newspaper className="h-6 w-6 text-yellow-600" />
                  </div>
                  <CardTitle className="text-xl">Médias & Magazines</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Magazines digitaux
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Presse événementielle
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Newsletters influence
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Formations */}
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-yellow-400">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-yellow-600" />
                  </div>
                  <CardTitle className="text-xl">Formations professionnelles</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Influence & entrepreneuriat
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Branding & placements
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Accompagnement personnalisé
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Agence publicitaire */}
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-yellow-400">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <Megaphone className="h-6 w-6 text-yellow-600" />
                  </div>
                  <CardTitle className="text-xl">Agence publicitaire</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Placement d'influenceurs
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Branding de célébrités
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Publicité terrain + digitale
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Mutuelle & Investissement */}
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-yellow-400">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <CreditCard className="h-6 w-6 text-yellow-600" />
                  </div>
                  <CardTitle className="text-xl">Mutuelle & Investissement</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Financement de projets
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Cartes VIP Influenceur
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Boutique de services
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black">
                <ArrowRight className="mr-2 h-5 w-5" />
                Découvrir tous nos services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Influencers Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Nos Influenceurs Gabonais</h2>
            <p className="text-xl text-gray-600">Découvrez notre communauté de talents du Gabon</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "Amina M.",
                followers: "250K",
                niche: "Mode & Lifestyle",
                image: "/images/influencer-1.jpg",
                location: "Libreville",
              },
              {
                name: "David O.",
                followers: "180K",
                niche: "Tech & Innovation",
                image: "/images/influencer-2.jpg",
                location: "Port-Gentil",
              },
              {
                name: "Sarah N.",
                followers: "320K",
                niche: "Food & Travel",
                image: "/images/influencer-3.jpg",
                location: "Franceville",
              },
            ].map((influencer, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4">
                    <Image
                      src={influencer.image || "/placeholder.svg"}
                      alt={influencer.name}
                      width={80}
                      height={80}
                      className="rounded-full mx-auto object-cover"
                    />
                  </div>
                  <CardTitle className="text-lg">{influencer.name}</CardTitle>
                  <CardDescription>
                    <Badge variant="secondary" className="mb-2">
                      {influencer.followers}
                    </Badge>
                    <div className="text-sm text-gray-600">{influencer.niche}</div>
                    <div className="text-xs text-gray-500">{influencer.location}</div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button variant="outline" size="sm" className="w-full">
                    Voir le profil
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/influenceurs">
              <Button size="lg" variant="outline" className="border-yellow-400 text-yellow-600 hover:bg-yellow-50">
                Voir tous nos influenceurs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-400">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-black mb-4">Prêt à transformer votre influence en carrière ?</h2>
          <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
            Rejoignez la première communauté d'influenceurs professionnels du Gabon et développez votre potentiel avec
            nos experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/inscription">
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white">
                <Users className="mr-2 h-5 w-5" />
                Devenir membre
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-white">
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
