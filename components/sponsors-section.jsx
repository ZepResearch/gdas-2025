"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const sponsors = [
  {
    id: 1,
    name: "MEDUSIS",
    logo: "/assets/dummylogo.png",
  },
  {
    id: 2,
    name: "HealthyHabits",
    logo: "/assets/dummylogo.png",
  },
  {
    id: 3,
    name: "SLEEP IN GENOA",
    logo: "/assets/dummylogo.png",
  },
  {
    id: 4,
    name: "KORUM",
    logo: "/assets/dummylogo.png",
  },
  {
    id: 5,
    name: "Maison Rasini",
    logo: "/assets/dummylogo.png",
  },
  {
    id: 6,
    name: "MELROSE",
    logo: "/assets/dummylogo.png",
  },
//   {
//     id: 7,
//     name: "MELROSE 2",
//     logo: "/assets/dummylogo.png",
//   },
//   {
//     id: 8,
//     name: "MELROSE 3",
//     logo: "/assets/dummylogo.png",
//   },
//   {
//     id: 9,
//     name: "MELROSE 4",
//     logo: "/assets/dummylogo.png",
//   },
]

// Function to chunk sponsors into rows of 4 and offset rows of 2
const organizeSponsors = (sponsors) => {
  const rows = []
  let i = 0
  
  while (i < sponsors.length) {
    // Add a full row of 4
    if (i < sponsors.length) {
      rows.push({ type: 'full', sponsors: sponsors.slice(i, i + 4) })
      i += 4
    }
    
    // Add an offset row of 2
    if (i < sponsors.length) {
      rows.push({ type: 'offset', sponsors: sponsors.slice(i, i + 2) })
      i += 2
    }
  }
  
  return rows
}

const sponsorRows = organizeSponsors(sponsors)

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const hoverVariants = {
  hover: {
    scale: 1.05,
    transition: { duration: 0.3 },
  },
}

export default function SponsorsSection() {
  return (
    <section className="relative w-full py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1730343884210-e1ebda4ea0dd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-white/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-blue-500 font-bold text-sm">#Who helps us to create</p>
          <h2 className="text-4xl md:text-6xl font-medium   leading-tight text-gray-900 text-balance">Our Co-Organizer</h2>
        </motion.div>

        <motion.div
          className="mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {sponsorRows.map((row, rowIndex) => (
            <div key={rowIndex}>
              {row.type === 'full' ? (
                // Full row - 4 sponsors
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
                  {row.sponsors.map((sponsor, index) => (
                    <motion.div
                      key={sponsor.id}
                      className={`border-r border-b border-gray-300 p-8 flex items-center justify-center bg-white/80 backdrop-blur-sm ${
                        index === row.sponsors.length - 1 && row.sponsors.length === 4 ? 'lg:border-r-0' : ''
                      }`}
                      variants={itemVariants}
                      whileHover="hover"
                    >
                      <motion.div className="relative w-full h-24 flex items-center justify-center" variants={hoverVariants}>
                        <Image
                          src={sponsor.logo || "/placeholder.svg"}
                          alt={sponsor.name}
                          width={150}
                          height={80}
                          className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                        />
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                // Offset row - 2 sponsors centeblue
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
                  {/* Empty column for offset on desktop */}
                  <div className="hidden lg:block border-r border-b border-gray-300"></div>

                  {/* Centeblue sponsors */}
                  {row.sponsors.map((sponsor, index) => (
                    <motion.div
                      key={sponsor.id}
                      className="border-r border-b border-gray-300 p-8 flex items-center justify-center bg-white/80 backdrop-blur-sm"
                      variants={itemVariants}
                      whileHover="hover"
                    >
                      <motion.div className="relative w-full h-24 flex items-center justify-center" variants={hoverVariants}>
                        <Image
                          src={sponsor.logo || "/placeholder.svg"}
                          alt={sponsor.name}
                          width={150}
                          height={80}
                          className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                        />
                      </motion.div>
                    </motion.div>
                  ))}

                  {/* Empty column for offset on desktop */}
                  <div className="hidden lg:block border-b border-gray-300"></div>
                </div>
              )}
            </div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-md font-semibold flex items-center gap-2 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Purchase Ticket
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}