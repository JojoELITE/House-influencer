import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, Award, BarChart3, Lightbulb } from "lucide-react"

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">House Influencer</h3>
          <p className="text-gray-400"> {new Date().getFullYear()} Tous droits réservés</p>
        </div>
      </div>
    </footer>
  );
}

export default function EntreprisePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-black via-gray-900 to-black py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Notre <span className="text-yellow-400">Entreprise</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Découvrez notre histoire, notre vision et notre engagement pour façonner l'avenir de l'influence au Gabon.
            </p>
          </div>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4 bg-yellow-50 text-yellow-700 border-yellow-200">
                Notre Histoire
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Une success story gabonaise
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Fondée en 2023, House Influencer est née d'une vision audacieuse : révolutionner le paysage médiatique gabonais 
                en créant un écosystème complet autour de l'influence digitale.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                De nos modestes débuts à Libreville, nous avons grandi pour devenir la référence en matière de création de contenu, 
                de formation et de gestion d'influenceurs au Gabon.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-yellow-500 mb-2">50+</div>
                  <div className="text-gray-600">Influenceurs formés</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-yellow-500 mb-2">100+</div>
                  <div className="text-gray-600">Projets réalisés</div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="/images/photo_2_2025-07-08_09-25-08.jpg"
                alt="Notre équipe"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 bg-yellow-50 text-yellow-700 border-yellow-200">
              Nos Valeurs
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ce qui nous guide au quotidien
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des principes forts qui façonnent notre identité et notre manière de travailler
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="h-8 w-8 text-yellow-500" />,
                title: "Collaboration",
                description: "Nous croyons en la force du collectif et du partage des compétences."
              },
              {
                icon: <Award className="h-8 w-8 text-yellow-500" />,
                title: "Excellence",
                description: "Nous visons l'excellence dans chacun de nos projets et formations."
              },
              {
                icon: <BarChart3 className="h-8 w-8 text-yellow-500" />,
                title: "Innovation",
                description: "Nous repoussons les limites de la création de contenu digital."
              },
              {
                icon: <Lightbulb className="h-8 w-8 text-yellow-500" />,
                title: "Créativité",
                description: "Nous encourageons la pensée créative et les idées audacieuses."
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-yellow-50 rounded-full flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4 bg-yellow-50 text-yellow-700 border-yellow-200">
              Notre Vision
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Façonner l'avenir de l'influence au Gabon
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Notre ambition est de positionner le Gabon comme un pôle d'excellence en matière de création de contenu 
              et d'influence digitale en Afrique centrale. Nous visons à former la prochaine génération de créateurs 
              de contenu et à offrir des opportunités professionnelles dans le secteur du numérique.
            </p>
            <Button asChild className="bg-yellow-400 hover:bg-yellow-500 text-black">
              <Link href="/contact">
                Rejoignez-nous
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
