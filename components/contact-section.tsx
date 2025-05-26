import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-20 bg-red-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-6">Contactez-nous</h2>
            <p className="text-xl mb-8 text-red-100">
              Pour toute demande de devis ou d'information, notre équipe est à votre disposition.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-red-200" />
                <div>
                  <p className="font-semibold">Relais Industries Maroc</p>
                  <p className="text-red-100">4 Rue Al Bouhtouri</p>
                  <p className="text-red-100">20 500 Casablanca</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-red-200" />
                <div>
                  <p className="font-semibold">Téléphone</p>
                  <p className="text-red-100">+33 6 11 11 92 52</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-red-200" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-red-100">pnicotera@fri-services.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Clock className="h-6 w-6 text-red-200" />
                <div>
                  <p className="font-semibold">Horaires</p>
                  <p className="text-red-100">Lun - Ven: 8h00 - 18h00</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Demande de devis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                <input
                  type="tel"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Votre numéro"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Décrivez votre projet..."
                ></textarea>
              </div>

              <Button className="w-full bg-red-700 hover:bg-red-800 text-white">Envoyer la demande</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
