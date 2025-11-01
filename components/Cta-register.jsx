"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Ticket } from "lucide-react"

export default function SpeakerAnnouncement() {
  return (
    <section className="relative w-full overflow-hidden max-w-screen-2xl mx-auto rounded-2xl md:rounded-3xl lg:rounded-4xl my-6 md:my-8 lg:my-12 px-4 md:px-0">
      {/* Background blur effect */}
      <div className="absolute inset-0 opacity-90">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-800" />
      </div>

      <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-center pt-8 md:pt-12 lg:pt-10">
        {/* Left side - Image with overlay text */}
        <div className="relative w-full lg:w-1/2 flex items-start justify-center  ">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
            {/* Professional portrait image */}
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] w-full">
              <Image
                src="/assets/cta-person.png"
                alt="Professional speaker"
                fill
                className="object-contain object-start select-none pointer-events-none"
                priority
              />
            </div>

            {/* "HURRY UP!" overlay text with striped effect - centered and blue */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none mt-40 sm:mt-48 md:mt-60">
              <div className="relative text-center">
                <h2
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-transparent bg-clip-text drop-shadow-2xl"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(90deg, #ffffff 0px, #ffffff 8px, #ffffff 8px, #ffffff 16px)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    letterSpacing: "-0.02em",
                    textShadow: "0 4px 20px rgba(59, 130, 246, 0.3)",
                    filter: "drop-shadow(2px 2px 4px rgba(59, 130, 246, 0.4))",
                  }}
                >
                  HURRY UP!
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center lg:pl-8 xl:pl-12 px-4 md:px-6 lg:px-0">
          <div className="space-y-4 md:space-y-6 text-center lg:text-left">
            {/* Main heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-50 leading-tight tracking-tight">
              NEVER MISS ANOTHER SPEAKER ANNOUNCEMENT
            </h1>

            {/* Subheading */}
            <p className="text-base md:text-lg font-semibold text-gray-100">Countdown is finished!</p>

            {/* Body text */}
            <p className="text-sm md:text-base text-gray-100 leading-relaxed max-w-2xl mx-auto lg:mx-0">
             Global Defence and Aviation Skills Conference 2025  (GDAS 2025) positions Malaysia as the strategic hub for technical, vocational, and higher education excellence in the fields of aviation, aerospace, and defence technologies.

            </p>

            {/* CTA Button */}
            <div className="pt-2 md:pt-4 flex justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 md:px-8 py-4 md:py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 text-sm md:text-base"
              >
                <Ticket className="w-4 h-4 md:w-5 md:h-5" />
                Purchase Ticket
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}