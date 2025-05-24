import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cog, Lightbulb, Settings, Truck } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Lightbulb,
      title: "Conception & Prototypage",
      description: "Développement de vos idées avec notre bureau d'études et atelier de prototypage",
      features: ["Étude de faisabilité", "Conception 3D", "Prototypage rapide", "Tests et validation"],
    },
    {
      icon: Cog,
      title: "Thermoformage",
      description: "Production de pièces plastiques par thermoformage avec nos équipements modernes",
      features: ["Thermoformage sous vide", "Formage par pression", "Découpe et finition", "Contrôle qualité"],
    },
    {
      icon: Settings,
      title: "Usinage & Finition",
      description: "Services complémentaires pour finaliser vos pièces selon vos spécifications",
      features: ["Découpe précise", "Perçage", "Assemblage", "Finitions spéciales"],
    },
    {
      icon: Truck,
      title: "Logistique",
      description: "Gestion complète de la chaîne logistique pour vos commandes",
      features: ["Stockage sécurisé", "Livraison rapide", "Suivi des commandes", "Service après-vente"],
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            De la conception à la livraison, nous vous accompagnons dans tous vos projets de thermoformage
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <service.icon className="h-8 w-8 text-red-700" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-red-700 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
