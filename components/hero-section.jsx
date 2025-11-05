"use client"

import React from "react"
import { motion } from "framer-motion"
import { Calendar, MapPin, Star, Ticket, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ReserveButton } from "./reserve-button"

export default function EventLanding() {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0)

  const backgroundImages = [
    "https://images.unsplash.com/photo-1508530786855-dfea35260b8d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740",
    "https://images.unsplash.com/photo-1481542290883-70166d3f0b57?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1849",
    "https://images.unsplash.com/flagged/photo-1564773898290-8a11af34585a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2032",
    "https://images.unsplash.com/photo-1504074922582-1dba5b9679b3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2064"
  ]

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [backgroundImages.length])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const floatingVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: 1,
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  const scaleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const rotateVariants = {
    hidden: { opacity: 0, rotate: -10 },
    visible: {
      opacity: 1,
      rotate: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  }

  return (
   <div className="relative overflow-hidden bg-gradient-to-r from-blue-500/80 to-blue-700/90 py-12">
      {/* Background images with slideshow effect */}
      {backgroundImages.map((image, index) => (
        <motion.div
          key={image}
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('${image}')`,
            backgroundBlendMode: "overlay"
          }}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: index === currentImageIndex ? 0.15 : 0 
          }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      ))}
      
      {/* Background decorative elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full "
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
      />

      {/* Decorative shapes */}
      <motion.div
        className="absolute top-32 right-20 w-3 h-3 bg-white rounded-full hidden md:block"
        variants={floatingVariants}
        initial="hidden"
        animate="visible"
      />

      <motion.div
        className="absolute bottom-32 left-20 w-2 h-2 bg-white rounded-full hidden md:block"
        variants={floatingVariants}
        initial="hidden"
        animate="visible"
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Wavy lines */}
      <motion.svg
        className="absolute top-1/3 right-32 w-12 h-12 text-white opacity-40 hidden lg:block"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1 }}
      >
        <path d="M6 9c0 0 2-2 4-2s4 2 4 2" />
        <path d="M14 9c0 0 2-2 4-2s4 2 4 2" />
      </motion.svg>

      {/* Main content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between min-h-full px-4 sm:px-8 md:px-16 lg:px-24 max-w-screen-2xl mx-auto  pt-12">
        {/* Left content */}
        <motion.div className="flex-1  w-full" variants={containerVariants} initial="hidden" animate="visible">
          {/* Event tag */}
         

          {/* Main heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-medium text-white mb-2 sm:mb-4 text-balance"
          >
            Global Defence and Aviation Skills Conference 2025 
          </motion.h1>

          {/* Event details */}
        
          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col mt-4 sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center w-full sm:w-auto">
          <Link href="/registration" >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-6 sm:px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-gray-900 transition-colors text-sm sm:text-base"
            >
              <Ticket size={20} />
             Register Now
            </motion.button>
            
            </Link>
              <ReserveButton/>
            <Link href="/about-conference" >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 border border-white hover:bg-white hover:text-blue-600 transition-colors text-sm sm:text-base"
            >
              
             Learn More
            </motion.button>
            </Link>
          
          </motion.div>
 <div className="flex lg:flex-row flex-col-reverse items-start sm:items-center justify-center gap-3 px-3 max-w-3xl backdrop-blur-sm bg-gray-50/50 py-4 rounded-3xl mt-8 ">
                  <img
                src="assets/dsak-logo.jpg"
                alt=""
                className="h-24 drop-shadow-lg"
              />
               <img
                src="assets/zepresearch.png"
                alt=""
                className="h-10 drop-shadow-lg"
              />
              <img
                src="/assets/scopus.png"
                alt=""
                className="h-10 drop-shadow-lg"
              />
              <img
                src="/assets/clarivate.png"
                alt=""
                className="h-10 drop-shadow-lg"
              />
              {/* <img
                src="assets/cpd.png"
                alt=""
                className="h-32 drop-shadow-lg"
              />  */}
             
         
            </div>


        </motion.div>

        {/* Right content - Microphone */}
   <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:w-[450px] w-full"
          >
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Conference Details</h3>

                <div className="space-y-6 mb-8">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mr-4">
                      <Calendar className="w-6 h-6 text-blue-800" />
                    </div>
                    <div>
                      <p className="text-slate-100 text-sm">Date</p>
                      <p className="text-white text-lg font-medium">
                        December  8<sup>th</sup> - 9<sup>th</sup>, 2025
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mr-4">
                      <MapPin className="w-6 h-6 text-blue-800" />
                    </div>
                    <div>
                      <p className="text-slate-100 text-sm">Location</p>
                      <p className="text-white text-lg font-medium">Selangor, Malaysia</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mr-4">
                      <Users className="w-6 h-6 text-blue-800" />
                    </div>
                    <div>
                      <p className="text-slate-100 text-sm">Format</p>
                      <p className="text-white text-lg font-medium">In-person</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex">
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-500 xt-blue-800" />
                        ))}
                      </div>
                      <span className="ml-2 text-white">4.8 rating</span>
                    </div>
                    <span className="text-slate-100 text-sm">500+ attendees</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
      </div>
    </div>
  )
}

// Helper component for Plus icon
function Plus({ size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  )
}