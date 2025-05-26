export function VideoSection() {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Notre Vidéo Présentation</h2>
        <div className="relative w-full max-w-5xl mx-auto">
          <div className="relative pb-[56.25%] h-0">
            <div className="absolute top-0 left-0 w-full h-full rounded-xl overflow-hidden shadow-2xl">
              <video 
                className="w-full h-full object-cover"
                controls
                poster="/images/video-thumbnail.jpg"
                preload="metadata"
              >
                <source src="/videos/presentation.mp4" type="video/mp4" />
                Votre navigateur ne supporte pas la lecture de vidéos.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 