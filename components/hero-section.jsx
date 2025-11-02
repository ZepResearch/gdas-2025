"use client"

import React from "react"
import { motion } from "framer-motion"
import { Ticket } from "lucide-react"
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
   <div className="relative overflow-hidden bg-gradient-to-r from-blue-500/80 to-blue-700/90 op">
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
          <p className="text-2xl text-white">• December 8th - 9th, 2025 </p>
          <p className="text-2xl text-white">• Selangor/ Kuala Lumpur, Malaysia</p>
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
 <div className="flex lg:flex-row flex-col-reverse items-start sm:items-center justify-center gap-3 px-3 max-w-7xl backdrop-blur-sm bg-gray-50/50 py-4 rounded-3xl mt-2 ">
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
              <img
                src="assets/zepresearch.png"
                alt=""
                className="h-10 drop-shadow-lg"
              />
              <img
                src="assets/dsak-logo.jpg"
                alt=""
                className="h-24 drop-shadow-lg"
              />
            </div>


        </motion.div>

        {/* Right content - Microphone */}
        <motion.div
          className="flex-1 flex items-center justify-center relative mt-8 lg:mt-0 w-full lg:w-auto"
          variants={scaleVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Microphone image */}
         <motion.div variants={rotateVariants} initial="hidden" animate="visible" className="relative z-10">
            <Image
              src="/assets/mic.png"
              alt="Microphone"
              width={500}
              height={500}
              className="md:w-[250px] w-[100px] opacity-90"
              
            />
          </motion.div>

          {/* Decorative triangle */}
          <motion.div
            className="absolute top-10 sm:top-20 right-5 sm:right-10 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-r-2 border-white opacity-60 hidden sm:block"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />

          {/* Decorative wavy line */}
          <motion.svg
            className="absolute bottom-8 sm:bottom-12 right-10 sm:right-20 w-6 h-6 sm:w-8 sm:h-8 text-white opacity-40 hidden sm:block"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            <path d="M6 9c0 0 2-2 4-2s4 2 4 2" />
            <path d="M14 9c0 0 2-2 4-2s4 2 4 2" />
          </motion.svg>
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