"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Slide {
  image: string
}

const slides: Slide[] = [
  {
    image: "/images/slider/slide1.png.jpg",
  },
  {
    image: "/images/slider/slide2.png.jpg",
  },
  {
    image: "/images/slider/slide3.png.jpg",
  },
  {
    image: "/images/slider/slide4.png.jpg",
  },
  {
    image: "/images/slider/slide5.png.jpg",
  },
  {
    image: "/images/slider/slide6.png.jpg",
  },
  {
    image: "/images/slider/slide7.png.jpg",
  },
  {
    image: "/images/slider/slide8.png.jpg",
  },
  {
    image: "/images/slider/slide9.png.jpg",
  },
  {
    image: "/images/slider/slide10.png.jpg",
  },
  {
    image: "/images/slider/slide11.png.jpg",
  },
  {
    image: "/images/slider/slide12.png.jpg",
  },
  {
    image: "/images/slider/slide13.png.jpg",
  },
  {
    image: "/images/slider/slide14.png.jpg",
  },
  {
    image: "/images/slider/slide15.png.jpg",
  },
  {
    image: "/images/slider/slide16.png.jpg",
  },
  {
    image: "/images/slider/slide17.png.jpg",
  },
  {
    image: "/images/slider/slide18.png.jpg",
  },
  {
    image: "/images/slider/slide19.png.jpg",
  },
  {
    image: "/images/slider/slide20.png.jpg",
  },
  {
    image: "/images/slider/slide21.png.jpg",
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev: number) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev: number) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev: number) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-[70vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div 
            className="w-full h-full bg-cover bg-center" 
            style={{ 
              backgroundImage: `url(${slide.image})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-20" />
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white hover:bg-opacity-20"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white hover:bg-opacity-20"
        onClick={nextSlide}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  )
}
