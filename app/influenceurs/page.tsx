import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, MapPin, TrendingUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Footer } from "@/components/footer"

export default function InfluenceursPage() {
  const influencers = [
    {
      name: "Amina Mbadinga",
      followers: "250K",
      niche: "Mode & Lifestyle",
      image: "/images/influencer-1.jpg",
      location: "Libreville",
      engagement: "4.2%",
      verified: true,
      tier: "Micro",
    },
    {
      name: "David Obiang",
      followers: "180K",
      niche: "Tech & Innovation",
      image: "/images/influencer-2.jpg",
      location: "Port-Gentil",
      engagement: "5.1%",
      verified: true,
      tier: "Micro",
    },
    {
      name: "Sarah Ndong",
      followers: "320K",
      niche: "Food & Travel",
      image: "/images/influencer-3.jpg",
      location: "Franceville",
      engagement: "3.8%",
      verified: true,
      tier: "Micro",
    },
    {
      name: "Omar Bongo Jr",
      followers: "450K",
      niche: "Fitness & Wellness",
      image: "/images/influencer-4.jpg",
      location: "Libreville",
      engagement: "6.2%",
      verified: true,
      tier: "Macro",
    },
    {
      name: "Fatou Diallo",
      followers: "190K",
      niche: "Beauty & Skincare",
      image: "/images/influencer-5.jpg",
      location: "Oyem",
      engagement: "4.7%",
      verified: true,
      tier: "Micro",
    },
    {
      name: "Kwame Assoumou",
      followers: "380K",
      niche: "Business & Finance",
      image: "/images/influencer-6.jpg",
      location: "Libreville",
      engagement: "3.5%",
      verified: true,
      tier: "Micro",
    },
  ]

  const tiers = [
    { category: "Créateurs", range: "1K - 10K", color: "bg-blue-100 text-blue-800", count: 45 },
    { category: "Nano", range: "10K - 100K", color: "bg-green-100 text-green-800", count: 28 },
    { category: "Micro", range: "100K - 500K", color: "bg-yellow-100 text-yellow-800", count: 15 },
    { category: "Macro", range: "500K - 1M", color: "bg-orange-100 text-orange-800", count: 8 },
    { category: "Célébrités", range: "1M - 5M", color: "bg-purple-100 text-purple-800", count: 3 },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-black mb-6">Nos Influenceurs Gabonais</h1>
          <p className="text-xl text-black/80 max-w-3xl mx-auto">
            Découvrez notre communauté de talents créatifs du Gabon, classés par catégories et spécialisations
          </p>
        </div>
      </section>

      {/* Statistiques */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-6">
            {tiers.map((tier, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <Badge className={`${tier.color} mx-auto w-fit text-xs`}>{tier.category}</Badge>
                  <CardTitle className="text-lg">{tier.range}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-yellow-600">{tier.count}</div>
                  <div className="text-sm text-gray-500">influenceurs</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Filtres et recherche */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder="Rechercher un influenceur..." className="pl-10" />
            </div>
            <Select>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Catégorie" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes catégories</SelectItem>
                <SelectItem value="mode">Mode & Lifestyle</SelectItem>
                <SelectItem value="tech">Tech & Innovation</SelectItem>
                <SelectItem value="food">Food & Travel</SelectItem>
                <SelectItem value="fitness">Fitness & Wellness</SelectItem>
                <SelectItem value="beauty">Beauty & Skincare</SelectItem>
                <SelectItem value="business">Business & Finance</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Localisation" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tout le Gabon</SelectItem>
                <SelectItem value="libreville">Libreville</SelectItem>
                <SelectItem value="port-gentil">Port-Gentil</SelectItem>
                <SelectItem value="franceville">Franceville</SelectItem>
                <SelectItem value="oyem">Oyem</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="w-full md:w-auto">
              <Filter className="mr-2 h-4 w-4" />
              Filtrer
            </Button>
          </div>
        </div>
      </section>

      {/* Liste des influenceurs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {influencers.map((influencer, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow group">
                <CardHeader className="text-center relative">
                  <div className="mx-auto mb-4 relative">
                    <Image
                      src={influencer.image || "/placeholder.svg"}
                      alt={influencer.name}
                      width={100}
                      height={100}
                      className="rounded-full mx-auto object-cover"
                    />
                    {influencer.verified && (
                      <div className="absolute -top-1 -right-1 bg-blue-500 text-white rounded-full p-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                  <CardTitle className="text-xl">{influencer.name}</CardTitle>
                  <CardDescription>
                    <div className="space-y-2">
                      <Badge variant="secondary" className="mb-2">
                        {influencer.followers}
                      </Badge>
                      <div className="text-sm text-gray-600">{influencer.niche}</div>
                      <div className="flex items-center justify-center text-xs text-gray-500">
                        <MapPin className="h-3 w-3 mr-1" />
                        {influencer.location}
                      </div>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">Engagement</span>
                      <div className="flex items-center">
                        <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                        <span className="font-semibold text-green-600">{influencer.engagement}</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">Catégorie</span>
                      <Badge className="bg-yellow-100 text-yellow-800 text-xs">{influencer.tier}</Badge>
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        Voir profil
                      </Button>
                      <Button size="sm" className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black">
                        Contacter
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              <Button variant="outline" disabled>
                Précédent
              </Button>
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">1</Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">Suivant</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-black mb-6">Vous êtes influenceur ?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Rejoignez notre communauté d'influenceurs gabonais et développez votre carrière avec notre accompagnement
            professionnel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/inscription">
              <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black">
                Rejoindre la communauté
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-yellow-400 text-yellow-600 hover:bg-yellow-50">
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
