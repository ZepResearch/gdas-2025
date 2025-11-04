"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function PhotoGallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Gallery images from Unsplash - professional event/conference photography
  const galleryImages = [
    {
      id: 1,
      src: "/gallery/g1.jpg",
      alt: "Event planning documents",
    },
    {
      id: 2,
      src: "/gallery/g2.jpg",
      alt: "Hands holding event materials",
    },
    {
      id: 3,
      src: "/gallery/g3.jpg",
      alt: "Business professionals at event",
    },
    {
      id: 4,
      src: "/gallery/g4.jpg",
      alt: "Conference room overview",
    },
    {
      id: 5,
      src: "/gallery/g5.jpg",
      alt: "Modern event venue",
    },
    {
      id: 6,
      src: "/gallery/g6.jpg",
      alt: "Crowd at event",
      hasOverlay: true,
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <section className="w-full px-6 py-20 lg:px-12">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Content Section */}
          <div className="flex-shrink-0 w-full lg:w-auto">
            <div className="rounded-3xl p-8 lg:p-12 max-w-sm shadow-lg backdrop-blur-sm">
              {/* Main heading */}
              <h2 className="text-4xl md:text-6xl font-medium text-black">Conference Highlights</h2>
            </div>
          </div>

          {/* Right Slideshow Section */}
          <div className="flex-1 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video lg:aspect-[16/10]">
              {/* Slideshow Images */}
              {galleryImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />

                  {/* Instagram overlay on last image */}
                  {image.hasOverlay && index === currentIndex && (
                    <div className="absolute inset-0 bg-black/30 flex flex-col items-end justify-end p-4">
                      <div className="text-right">
                        <div className="text-red-500 font-semibold text-xs tracking-wide mb-1"># Instagram</div>
                        <div className="text-white font-bold text-sm lg:text-base">@Gdas</div>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 lg:p-3 shadow-lg transition-all duration-200 hover:scale-110 z-10"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 lg:p-3 shadow-lg transition-all duration-200 hover:scale-110 z-10"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
              </button>

              {/* Dot Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "bg-white w-8" : "bg-white/50 hover:bg-white/75"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}