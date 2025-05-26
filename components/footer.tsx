import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-white p-2 rounded">
                <span className="text-xl font-bold">
                  <span className="text-gray-700">R</span><span className="text-red-700">I</span>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-sm">Relais Industries</span>
                <span className="text-red-400 font-semibold text-sm">Maroc</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Votre partenaire de confiance pour le thermoformage de pièces plastiques au Maroc.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/qui-sommes-nous" className="text-gray-400 hover:text-white transition-colors">
                  Qui sommes-nous ?
                </Link>
              </li>
              <li>
                <Link href="/thermoformage" className="text-gray-400 hover:text-white transition-colors">
                  Thermoformage
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Conception & Prototypage</li>
              <li>Thermoformage</li>
              <li>Usinage & Finition</li>
              <li>Logistique</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>4 Rue Al Bouhtouri</p>
              <p>20 500 Casablanca</p>
              <p>+33 6 11 11 92 52</p>
              <p>contact@ri-maroc.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Relais Industries Maroc - Tous droits réservés</p>
        </div>
      </div>
    </footer>
  )
}
