import { Metadata } from "next"
import { HeroSlider } from "@/components/hero-slider"

export const metadata: Metadata = {
  title: "Qui sommes-nous | RI Maroc",
  description: "Découvrez RI Maroc, votre partenaire de confiance dans le domaine du thermoformage et de la transformation plastique depuis 2011.",
}

export default function QuiSommesNousPage() {
  return (
    <main>
      <HeroSlider />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Qui sommes-nous</h1>
        
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Introduction */}
          <div className="text-center mb-12">
            <p className="text-xl text-gray-700">
              Depuis 2011, Relais Industries Maroc a forgé son expertise autour de trois axes :
            </p>
          </div>

          {/* Mettre en valeur */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-red-700">Mettre en valeur</h2>
            <p className="text-lg text-gray-700">
              Nos emballages plastiques ont l'avantage de concilier praticité et esthétisme. 
              Relais Industries Maroc vous propose des solutions d'emballage personnalisables 
              aux couleurs de votre entreprise.
            </p>
          </div>

          {/* Protéger */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-red-700">Protéger</h2>
            <p className="text-lg text-gray-700">
              Prémunissez-vous contre les risques de chocs et les poussières susceptibles de 
              dégrader la qualité de vos produits. Solides et durables, nos emballages plastiques 
              préservent la qualité de vos produits à chaque étape de leur cycle de vie : 
              conditionnement, transport, commercialisation…
            </p>
          </div>

          {/* L'ingénierie française */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-red-700">L'ingénierie française</h2>
            <p className="text-lg text-gray-700">
              Nous conçevons et modélisons vos plans, préconisons les meilleurs emballages pour 
              votre application. Nos experts en plasturgie veillent à vous orienter vers la 
              matière plastique adaptée à l'usage de votre produit, optimisent la géométrie et 
              le dimensionnement de vos pièces et procèdent à l'ensemble des phases de test 
              préalables à l'industrialisation en série.
            </p>
          </div>

          {/* La force de production marocaine */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-red-700">La force de production marocaine</h2>
            <p className="text-lg text-gray-700">
              Nos sites de production marocains, à proximité immédiate de Casablanca, prennent 
              en charge la réalisation technique de toutes vos pièces plastiques industrielles, 
              selon les procédés du thermoformage. Nos techniciens mettent en œuvre, avec rigueur 
              et réactivité, la production de vos séries et s'appliquent à satisfaire les cahiers 
              des charges les plus exigeants.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
} 