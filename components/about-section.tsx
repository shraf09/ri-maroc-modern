import { Card, CardContent } from "@/components/ui/card"
import { Factory, Users, Award, Zap } from "lucide-react"

export function AboutSection() {
  const features = [
    {
      icon: Factory,
      title: "Expertise Technique",
      description: "Spécialisés dans la conception et réalisation de pièces plastiques par thermoformage",
    },
    {
      icon: Users,
      title: "Équipe Qualifiée",
      description: "Opérateurs et techniciens expérimentés pour un service de qualité",
    },
    {
      icon: Award,
      title: "Qualité Garantie",
      description: "Processus rigoureux et contrôle qualité à chaque étape",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Solutions personnalisées et technologies de pointe",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Relais Industries Maroc : votre partenaire thermoformage
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            <strong>Relais Industries Maroc</strong>, à Casablanca, est spécialisée dans la conception et la réalisation
            technique de
            <strong> pièces plastiques</strong>, selon les procédés du thermoformage.{" "}
            <strong>Relais Industries Maroc</strong> répond aux cahiers des charges de tous les secteurs industriels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <feature.icon className="h-12 w-12 text-red-700 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Un interlocuteur unique pour le suivi attentif de vos projets
          </h3>
          <p className="text-gray-600 mb-6">
            <strong>Relais Industries Maroc</strong> apporte ses compétences à chaque phase de votre projet de la
            conception et l'atelier de prototypage jusqu'au <strong>thermoformage</strong>.
          </p>

          <h4 className="text-xl font-semibold text-gray-900 mb-4">Une prise en charge individualisée</h4>
          <p className="text-gray-600 mb-4">
            Nos opérateurs et techniciens qualifiés accordent une importance particulière à la qualité de service et
            veillent à satisfaire les commandes avec rigueur et réactivité.
          </p>

          <ul className="space-y-2 text-gray-600">
            <li>• Conseil et ingénierie sur-mesure</li>
            <li>
              • Orientation sur le choix des <strong>plastiques</strong> et des procédés
            </li>
            <li>• Prototypage et aide au développement du projet</li>
            <li>• Production rapide, personnalisée, durable et esthétique</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
