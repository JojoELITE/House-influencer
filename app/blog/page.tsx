"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, CalendarDays, Clock, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Données des articles de blog (à remplacer par un appel API dans une vraie application)
const blogPosts = [
  {
    id: 1,
    title: "Comment devenir influenceur au Gabon en 2025",
    excerpt: "Découvrez les étapes clés pour lancer votre carrière d'influenceur et vous démarquer sur les réseaux sociaux.",
    category: "Conseils",
    date: "15 Juin 2025",
    readTime: "5 min",
    image: "/images/photo_1_2025-07-08_09-25-08.jpg"
  },
  {
    id: 2,
    title: "Les tendances du marketing d'influence en Afrique",
    excerpt: "Analyse des nouvelles tendances qui façonnent le paysage du marketing d'influence sur le continent africain.",
    category: "Tendances",
    date: "2 Juin 2025",
    readTime: "7 min",
    image: "/images/photo_2_2025-07-08_09-25-08.jpg"
  },
  {
    id: 3,
    title: "Interview : Le parcours d'une influenceuse gabonaise",
    excerpt: "Rencontre avec Sarah, influenceuse lifestyle qui a réussi à bâtir une communauté engagée de plus de 100k abonnés.",
    category: "Portrait",
    date: "20 Mai 2025",
    readTime: "8 min",
    image: "/images/photo_3_2025-07-08_09-25-08.jpg"
  },
  {
    id: 4,
    title: "Les meilleurs outils pour créer du contenu de qualité",
    excerpt: "Notre sélection des applications et logiciels essentiels pour produire des visuels et vidéos professionnels.",
    category: "Outils",
    date: "5 Mai 2025",
    readTime: "6 min",
    image: "/images/photo_1_2025-07-08_09-25-08.jpg"
  },
  {
    id: 5,
    title: "Comment monétiser sa communauté en 2025",
    excerpt: "Stratégies éprouvées pour transformer votre audience en revenus durables grâce au marketing d'influence.",
    category: "Monétisation",
    date: "22 Avril 2025",
    readTime: "10 min",
    image: "/images/photo_1_2025-07-08_09-25-08.jpg"
  },
  {
    id: 6,
    title: "Le guide complet des algorithmes des réseaux sociaux",
    excerpt: "Comprenez comment fonctionnent les algorithmes pour optimiser votre visibilité et votre engagement.",
    category: "Stratégie",
    date: "10 Avril 2025",
    readTime: "12 min",
    image: "/images/photo_2_2025-07-08_09-25-08.jpg"
  }
]

const categories = [
  { name: 'Tous', count: 12 },
  { name: 'Conseils', count: 4 },
  { name: 'Tendances', count: 3 },
  { name: 'Portrait', count: 2 },
  { name: 'Outils', count: 5 },
  { name: 'Monétisation', count: 3 },
  { name: 'Stratégie', count: 4 },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-black via-gray-900 to-black py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Le <span className="text-yellow-400">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Conseils, actualités et ressources pour les créateurs de contenu et influenceurs au Gabon
            </p>
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Rechercher des articles..."
                className="pl-12 pr-4 py-6 rounded-full border-0 focus-visible:ring-2 focus-visible:ring-yellow-400 bg-white/10 text-white placeholder-gray-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-gray-50 rounded-xl p-6 sticky top-24">
                <h3 className="font-semibold text-lg mb-4">Catégories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      className="flex items-center justify-between w-full text-left p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <span className={category.name === 'Tous' ? 'font-medium text-yellow-600' : 'text-gray-700'}>
                        {category.name}
                      </span>
                      <span className="text-sm bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>

                <div className="mt-8">
                  <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Recevez nos derniers articles directement dans votre boîte mail.
                  </p>
                  <div className="space-y-3">
                    <Input 
                      type="email" 
                      placeholder="Votre email" 
                      className="rounded-lg bg-white" 
                    />
                    <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black">
                      S'abonner
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Articles */}
            <div className="lg:w-3/4">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Derniers articles</h2>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">Trier par :</span>
                  <select className="bg-white border border-gray-200 rounded-lg px-3 py-1 text-sm">
                    <option>Plus récents</option>
                    <option>Plus populaires</option>
                    <option>Plus lus</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                    <div className="relative h-56 w-full">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                      <Badge className="absolute top-3 left-3 bg-yellow-400 hover:bg-yellow-500 text-black border-0">
                        {post.category}
                      </Badge>
                    </div>
                    <CardHeader>
                      <div className="flex items-center text-sm text-gray-500 space-x-4 mb-2">
                        <span className="flex items-center">
                          <CalendarDays className="h-4 w-4 mr-1" />
                          {post.date}
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime} de lecture
                        </span>
                      </div>
                      <CardTitle className="text-xl font-bold hover:text-yellow-500 transition-colors">
                        <Link href={`/blog/${post.id}`}>
                          {post.title}
                        </Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-gray-600">{post.excerpt}</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="link" className="p-0 h-auto text-yellow-600 hover:text-yellow-700">
                        Lire l'article <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              <div className="mt-12 flex justify-center">
                <Button variant="outline" className="border-yellow-400 text-yellow-600 hover:bg-yellow-50">
                  Voir plus d'articles
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-yellow-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Prêt à passer au niveau supérieur ?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Rejoignez notre communauté d'influenceurs et accédez à des formations exclusives, 
            des opportunités de collaboration et bien plus encore.
          </p>
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">
            Découvrir nos formations
          </Button>
        </div>
      </section>
    </div>
  )
}
