import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, Instagram, Twitter, Linkedin, Youtube, Send } from "lucide-react"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-black mb-6">Contactez-nous</h1>
          <p className="text-xl text-black/80 max-w-3xl mx-auto">
            Notre équipe est là pour vous accompagner dans votre projet d'influence au Gabon
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Informations de contact */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Nos coordonnées</h2>

              <div className="space-y-6 mb-8">
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-yellow-100 rounded-lg">
                        <MapPin className="h-6 w-6 text-yellow-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Adresse principale</CardTitle>
                        <CardDescription>Siège social à Libreville</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Quartier Batterie IV
                      <br />
                      Boulevard Triomphal
                      <br />
                      BP 2048, Libreville
                      <br />
                      Gabon
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-yellow-100 rounded-lg">
                        <Phone className="h-6 w-6 text-yellow-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Téléphone</CardTitle>
                        <CardDescription>Appelez-nous directement</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-gray-600">
                        <strong>Principal :</strong> +241 01 23 45 67
                      </p>
                      <p className="text-gray-600">
                        <strong>WhatsApp Pro :</strong> +241 07 89 12 34
                      </p>
                      <p className="text-gray-600">
                        <strong>Studio :</strong> +241 01 56 78 90
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-yellow-100 rounded-lg">
                        <Mail className="h-6 w-6 text-yellow-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Email</CardTitle>
                        <CardDescription>Écrivez-nous</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-gray-600">
                        <strong>Contact général :</strong> contact@houseinfluencer.ga
                      </p>
                      <p className="text-gray-600">
                        <strong>Partenariats :</strong> partenaires@houseinfluencer.ga
                      </p>
                      <p className="text-gray-600">
                        <strong>Formations :</strong> formations@houseinfluencer.ga
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-yellow-100 rounded-lg">
                        <Clock className="h-6 w-6 text-yellow-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Horaires d'ouverture</CardTitle>
                        <CardDescription>Nos heures de service</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-gray-600">
                        <strong>Lundi - Vendredi :</strong> 8h00 - 18h00
                      </p>
                      <p className="text-gray-600">
                        <strong>Samedi :</strong> 9h00 - 15h00
                      </p>
                      <p className="text-gray-600">
                        <strong>Dimanche :</strong> Fermé
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Réseaux sociaux */}
              <div>
                <h3 className="text-xl font-bold mb-4">Suivez-nous</h3>
                <div className="flex space-x-4">
                  <Button size="icon" className="bg-yellow-400 hover:bg-yellow-500 text-black">
                    <Instagram className="h-5 w-5" />
                  </Button>
                  <Button size="icon" className="bg-yellow-400 hover:bg-yellow-500 text-black">
                    <Twitter className="h-5 w-5" />
                  </Button>
                  <Button size="icon" className="bg-yellow-400 hover:bg-yellow-500 text-black">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <Button size="icon" className="bg-yellow-400 hover:bg-yellow-500 text-black">
                    <Youtube className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Formulaire de contact */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Envoyez-nous un message</CardTitle>
                <CardDescription>
                  Remplissez ce formulaire et nous vous répondrons dans les plus brefs délais
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-2">
                        Prénom *
                      </label>
                      <Input id="prenom" placeholder="Votre prénom" required />
                    </div>
                    <div>
                      <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
                        Nom *
                      </label>
                      <Input id="nom" placeholder="Votre nom" required />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input id="email" type="email" placeholder="votre.email@exemple.com" required />
                  </div>

                  <div>
                    <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone
                    </label>
                    <Input id="telephone" placeholder="+241 XX XX XX XX" />
                  </div>

                  <div>
                    <label htmlFor="sujet" className="block text-sm font-medium text-gray-700 mb-2">
                      Sujet *
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Choisissez un sujet" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="influenceur">Devenir influenceur</SelectItem>
                        <SelectItem value="entreprise">Partenariat entreprise</SelectItem>
                        <SelectItem value="formation">Formations</SelectItem>
                        <SelectItem value="studio">Réservation studio</SelectItem>
                        <SelectItem value="media">Médias & Presse</SelectItem>
                        <SelectItem value="autre">Autre demande</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Décrivez votre projet ou votre demande en détail..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 text-black">
                    <Send className="mr-2 h-5 w-5" />
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bureaux régionaux */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Nos bureaux au Gabon</h2>
            <p className="text-xl text-gray-600">Retrouvez-nous dans les principales villes du pays</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-xl">Libreville</CardTitle>
                <CardDescription>Siège social & Studio principal</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>
                    <strong>Adresse :</strong> Quartier Batterie IV
                  </p>
                  <p>
                    <strong>Téléphone :</strong> +241 01 23 45 67
                  </p>
                  <p>
                    <strong>Services :</strong> Tous services disponibles
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-xl">Port-Gentil</CardTitle>
                <CardDescription>Bureau régional</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>
                    <strong>Adresse :</strong> Centre-ville
                  </p>
                  <p>
                    <strong>Téléphone :</strong> +241 01 34 56 78
                  </p>
                  <p>
                    <strong>Services :</strong> Conseil & Formations
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-xl">Franceville</CardTitle>
                <CardDescription>Antenne locale</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>
                    <strong>Adresse :</strong> Quartier Potos
                  </p>
                  <p>
                    <strong>Téléphone :</strong> +241 01 45 67 89
                  </p>
                  <p>
                    <strong>Services :</strong> Accompagnement local
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ rapide */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Questions fréquentes</h2>
            <p className="text-xl text-gray-600">Les réponses aux questions les plus courantes</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Comment devenir membre ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Inscrivez-vous en ligne ou contactez-nous directement. Nous évaluerons votre profil et vous
                  proposerons un accompagnement personnalisé.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quels sont vos tarifs ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Nos tarifs varient selon les services. Contactez-nous pour un devis personnalisé adapté à vos besoins
                  et votre budget.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Proposez-vous des formations ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Oui, nous proposons des formations complètes en influence marketing, entrepreneuriat et création de
                  contenu.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Travaillez-vous avec les entreprises ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Absolument ! Nous aidons les entreprises à trouver les bons influenceurs pour leurs campagnes
                  publicitaires.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
