import { HeroSlider } from "@/components/hero-slider"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { ContactSection } from "@/components/contact-section"

export default function HomePage() {
  return (
    <main>
      <HeroSlider />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </main>
  )
}
