import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  GraduationCap,
  Users,
  Clock,
  Award,
  CheckCircle,
  Star,
  TrendingUp,
  Briefcase,
  Camera,
  DollarSign,
} from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"

export default function FormationsPage() {
  const formations = [
    {
      title: "Influence Marketing Débutant",
      description: "Apprenez les bases de l'influence marketing et créez votre première stratégie de contenu",
      duration: "4 semaines",
      level: "Débutant",
      price: "75 000 FCFA",
      modules: [
        "Introduction à l'influence marketing",
        "Création de contenu engageant",
        "Comprendre les algorithmes",
        "Premiers partenariats",
      ],
      color: "bg-blue-100 text-blue-800",
    },
    {
      title: "Monétisation & Partenariats",
      description: "Transformez votre audience en revenus durables grâce aux partenariats stratégiques",
      duration: "6 semaines",
      level: "Intermédiaire",
      price: "125 000 FCFA",
      modules: [
        "Stratégies de monétisation",
        "Négociation de contrats",
        "Diversification des revenus",
        "Gestion financière",
      ],
      color: "bg-green-100 text-green-800",
    },
    {
      title: "Personal Branding Avancé",
      description: "Développez une marque personnelle forte et différenciante sur le marché gabonais",
      duration: "8 semaines",
      level: "Avancé",
      price: "200 000 FCFA",
      modules: [
        "Stratégie de marque personnelle",
        "Positionnement unique",
        "Communication de crise",
        "Expansion internationale",
      ],
      color: "bg-purple-100 text-purple-800",
    },
    {
      title: "Entrepreneuriat Digital",
      description: "Lancez votre entreprise digitale et développez vos compétences entrepreneuriales",
      duration: "10 semaines",
      level: "Expert",
      price: "300 000 FCFA",
      modules: ["Business model digital", "Levée de fonds", "Équipe et leadership", "Scaling international"],
      color: "bg-orange-100 text-orange-800",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-black mb-6">Formations Professionnelles</h1>
          <p className="text-xl text-black/80 max-w-3xl mx-auto">
            Développez vos compétences en influence marketing et entrepreneuriat avec nos programmes certifiants
          </p>
        </div>
      </section>

      {/* Statistiques */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-yellow-600 mb-2">500+</div>
              <div className="text-gray-600">Étudiants formés</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-600 mb-2">95%</div>
              <div className="text-gray-600">Taux de satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-600 mb-2">12</div>
              <div className="text-gray-600">Formations disponibles</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-600 mb-2">24/7</div>
              <div className="text-gray-600">Support étudiant</div>
            </div>
          </div>
        </div>
      </section>

      {/* Formations principales */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Nos Formations</h2>
            <p className="text-xl text-gray-600">
              Choisissez le programme qui correspond à votre niveau et vos objectifs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {formations.map((formation, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <Badge className={formation.color}>{formation.level}</Badge>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-yellow-600">{formation.price}</div>
                      <div className="text-sm text-gray-500">Prix total</div>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{formation.title}</CardTitle>
                  <CardDescription className="text-base">{formation.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>Durée : {formation.duration}</span>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Modules inclus :</h4>
                      <ul className="space-y-1">
                        {formation.modules.map((module, moduleIndex) => (
                          <li key={moduleIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {module}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-2 pt-4">
                      <Button className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black">S'inscrire</Button>
                      <Button variant="outline" className="flex-1">
                        Plus d'infos
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Pourquoi choisir nos formations ?</h2>
            <p className="text-xl text-gray-600">Une approche complète et pratique adaptée au marché gabonais</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="p-3 bg-yellow-100 rounded-lg mx-auto w-fit">
                  <Users className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle>Accompagnement personnalisé</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Chaque étudiant bénéficie d'un suivi individuel avec un mentor expérimenté
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="p-3 bg-yellow-100 rounded-lg mx-auto w-fit">
                  <Briefcase className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle>Cas pratiques réels</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Travaillez sur de vrais projets avec des entreprises gabonaises partenaires
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="p-3 bg-yellow-100 rounded-lg mx-auto w-fit">
                  <Award className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle>Certification reconnue</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Obtenez une certification valorisée par les entreprises du secteur</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="p-3 bg-yellow-100 rounded-lg mx-auto w-fit">
                  <Camera className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle>Accès au studio</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Utilisez notre studio professionnel pour vos projets de formation</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="p-3 bg-yellow-100 rounded-lg mx-auto w-fit">
                  <TrendingUp className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle>Réseau professionnel</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Intégrez notre réseau d'influenceurs et d'entrepreneurs gabonais</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="p-3 bg-yellow-100 rounded-lg mx-auto w-fit">
                  <DollarSign className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle>Opportunités de revenus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Accédez à des missions rémunérées dès la fin de votre formation</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Témoignages</h2>
            <p className="text-xl text-gray-600">Ce que disent nos anciens étudiants</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="font-bold text-black">AM</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Amina M.</CardTitle>
                    <CardDescription>Influenceuse Mode, 250K followers</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600">
                  "Grâce à la formation, j'ai multiplié mes revenus par 5 en 6 mois. L'accompagnement est exceptionnel
                  !"
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="font-bold text-black">DO</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">David O.</CardTitle>
                    <CardDescription>Entrepreneur Tech, 180K followers</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600">
                  "J'ai lancé ma startup grâce aux compétences acquises. Le réseau professionnel est un vrai plus !"
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="font-bold text-black">SN</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Sarah N.</CardTitle>
                    <CardDescription>Food Blogger, 320K followers</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600">
                  "Formation très complète et pratique. J'ai appris à professionnaliser mon approche du contenu."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à commencer votre formation ?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Rejoignez notre prochaine session et transformez votre passion en carrière professionnelle
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black">
              <GraduationCap className="mr-2 h-5 w-5" />
              S'inscrire maintenant
            </Button>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                Demander des informations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
