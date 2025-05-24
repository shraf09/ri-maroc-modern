import { Metadata } from "next"
import { HeroSlider } from "@/components/hero-slider"

export const metadata: Metadata = {
  title: "Thermoformage | RI Maroc",
  description: "Découvrez nos services de thermoformage et nos solutions innovantes pour la transformation plastique. Spécialiste du thermoformage depuis 2011.",
}

export default function ThermoformagePage() {
  return (
    <main>
      <HeroSlider />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Thermoformage</h1>
        
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Introduction */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-red-700">Relais Industries Maroc, spécialiste du thermoformage</h2>
            <p className="text-lg text-gray-700 mb-6">
              Par le procédé du thermoformage, Relais Industries Maroc transforme toutes les matières 
              plastiques à partir de feuilles de fine ou forte épaisseur qui sont chauffées puis modelées. 
              Nos thermoformeuses permettent de réaliser, en petites ou grandes séries, des supports 
              plastiques simples ou complexes, de formes et dimensions multiples.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Thermoformage sur plaques fines</h3>
              <p className="text-lg text-gray-700 mb-4">
                Comprises entre 0,25 et 2 mm, idéal pour :
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
                <li>Plateaux de manutention et de regroupement</li>
                <li>Chevalets et présentoirs</li>
                <li>Blisters</li>
                <li>Barquettes alimentaires</li>
                <li>Calages plastiques</li>
                <li>Boîtes</li>
              </ul>
            </div>

            <p className="text-lg text-gray-700 mt-6">
              Nos thermoformeuses travaillent l'ensemble des matières amorphes : 
              <span className="font-semibold"> PVC, APET, PP, ABS, PETG, PS et PE</span>.
            </p>
          </div>

          {/* Services sur-mesure */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-red-700">Thermoformage et services sur-mesure</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Personnalisation des emballages</h3>
                <p className="text-lg text-gray-700">
                  Vous souhaitez personnaliser vos emballages plastiques ? Confiez vos références 
                  Pantone à Relais Industries Maroc. Nos thermoformeuses travaillent avec toutes 
                  couleurs à la demande et proposent une large déclinaison de textures : 
                  plaxée, grainée, expansée, complexe, avec imprimé personnalisé.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Expertise complète</h3>
                <p className="text-lg text-gray-700">
                  Conception, développement, prototypage, essais et validation : nos experts en 
                  plasturgie vous apportent toutes les préconisations utiles à vos besoins et 
                  contraintes. Notre atelier de prototypage vous accompagne dans la conception 
                  et la réalisation de vos moules et pièces thermoformées.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 