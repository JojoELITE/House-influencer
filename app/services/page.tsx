import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Users,
  Video,
  Newspaper,
  GraduationCap,
  Megaphone,
  CreditCard,
  CheckCircle,
  ArrowRight,
  Camera,
  Edit,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-black mb-6">Nos Services</h1>
          <p className="text-xl text-black/80 max-w-3xl mx-auto">
            Découvrez notre gamme complète de services pour transformer votre influence en succès professionnel au Gabon
          </p>
        </div>
      </section>

      {/* Services détaillés */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Gestion d'influenceurs */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-yellow-100 rounded-lg">
                    <Users className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h2 className="text-3xl font-bold">Gestion d'influenceurs</h2>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  Nous accompagnons les influenceurs gabonais dans le développement de leur carrière, de la création de
                  contenu à la monétisation de leur audience.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center space-x-2">
                        <Edit className="h-5 w-5 text-yellow-600" />
                        <CardTitle className="text-lg">Création de contenu</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">
                        Stratégie éditoriale, planning de publication, optimisation des formats
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="h-5 w-5 text-yellow-600" />
                        <CardTitle className="text-lg">Monétisation</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">
                        Partenariats, sponsoring, vente de produits, diversification des revenus
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className="bg-gray-100 p-8 rounded-2xl">
                <h3 className="text-xl font-bold mb-4">Tarifs Gestion d'influenceurs</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Pack Débutant (1K-10K)</span>
                    <span className="font-semibold">50 000 FCFA/mois</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pack Croissance (10K-100K)</span>
                    <span className="font-semibold">150 000 FCFA/mois</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pack Pro (100K+)</span>
                    <span className="font-semibold">Sur devis</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-yellow-400 hover:bg-yellow-500 text-black">Demander un devis</Button>
              </div>
            </div>
          </div>

          {/* Production */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gray-100 p-8 rounded-2xl order-2 lg:order-1">
                <h3 className="text-xl font-bold mb-4">Nos équipements</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Studio 4K professionnel à Libreville
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Équipement photo haute résolution
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Éclairage professionnel
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Post-production complète
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-yellow-400 hover:bg-yellow-500 text-black">Réserver le studio</Button>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-yellow-100 rounded-lg">
                    <Video className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h2 className="text-3xl font-bold">Pôle Cinéma & Production</h2>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  Notre studio professionnel à Libreville offre tous les services de production vidéo et photo pour
                  créer du contenu de qualité cinématographique.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Camera className="h-5 w-5 text-yellow-600" />
                    <span>Shooting photo professionnel</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Video className="h-5 w-5 text-yellow-600" />
                    <span>Production vidéo 4K</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Edit className="h-5 w-5 text-yellow-600" />
                    <span>Montage et post-production</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Autres services */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="p-3 bg-yellow-100 rounded-lg mx-auto w-fit">
                  <Newspaper className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle>Médias & Magazines</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Publications digitales, newsletters et couverture événementielle</p>
                <Link href="/contact">
                  <Button variant="outline" size="sm">
                    En savoir plus
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="p-3 bg-yellow-100 rounded-lg mx-auto w-fit">
                  <GraduationCap className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle>Formations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Programmes de formation en influence marketing et entrepreneuriat</p>
                <Link href="/formations">
                  <Button variant="outline" size="sm">
                    Voir les formations
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="p-3 bg-yellow-100 rounded-lg mx-auto w-fit">
                  <Megaphone className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle>Agence Publicitaire</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Campagnes publicitaires et placement d'influenceurs pour les marques
                </p>
                <Link href="/entreprise">
                  <Button variant="outline" size="sm">
                    Espace entreprise
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="p-3 bg-yellow-100 rounded-lg mx-auto w-fit">
                  <CreditCard className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle>Mutuelle & Investissement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Financement de projets et cartes VIP pour nos membres</p>
                <Link href="/contact">
                  <Button variant="outline" size="sm">
                    Nous contacter
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à commencer ?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de vos besoins et découvrir comment nous pouvons vous aider à développer votre
            influence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black">
                <ArrowRight className="mr-2 h-5 w-5" />
                Demander un devis
              </Button>
            </Link>
            <Link href="/inscription">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                Devenir membre
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
