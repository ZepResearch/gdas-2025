'use client'
import { CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

export default function EventSection() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const slideInFromRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  }

  return (
    <section className="relative w-full bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden">
      {/* Background Image with Overlay */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        {/* <img
          src="/assets/events.jpg"
          alt="Event background"
          className="w-full h-full object-cover opacity-30"
        /> */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent"></div>
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            {/* White Box with Content */}
            <motion.div 
              className="bg-white/90 backdrop-blur-sm p-8 lg:p-10 rounded-lg shadow-lg border border-white/50"
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
              transition={{ duration: 0.3 }}
            >
              {/* Blue Accent Text */}
          

              {/* Main Heading */}
              <motion.h1 
                className="text-4xl md:text-6xl font-medium text-gray-900 mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Get the latest info about GDAS 2025
              </motion.h1>

              {/* Decorative Checkmark */}
              <motion.div 
                className="flex items-start gap-4"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.4, type: "spring", stiffness: 200 }}
              >
                <CheckCircle2 className="w-8 h-8 text-gray-300 flex-shrink-0 mt-1" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div 
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            {/* Description Text Blocks */}
            <div className="space-y-4">
              <motion.p 
                className="text-gray-700 text-base leading-relaxed"
                variants={fadeInUp}
              >
Stay informed with the latest updates, insights, and announcements from the Global Defence & Aviation Skills Leadership Summit (GDAS 2025)              </motion.p>
              <motion.p 
                className="text-gray-700 text-base leading-relaxed"
                variants={fadeInUp}
              >
               the leading global forum advancing collaboration between defence, aviation, and education sectors. From keynote highlights to new partnership opportunities, GDAS 2025 keeps you connected to what’s shaping the future of global security and aerospace innovation.
              </motion.p>
            </div>

            {/* Statistics Card */}
            <motion.div 
              className="relative"
              variants={slideInFromRight}
            >
              {/* Dotted Pattern Background */}
              <motion.div 
                className="absolute -left-8 top-1/2 -translate-y-1/2 w-32 h-32 opacity-20"
                animate={{ 
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="grid grid-cols-6 gap-2">
                  {Array.from({ length: 36 }).map((_, i) => (
                    <motion.div 
                      key={i} 
                      className="w-1 h-1 bg-gray-400 rounded-full"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.01, duration: 0.3 }}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Stats Container */}
              <motion.div 
                className="bg-white rounded-lg shadow-xl p-8 lg:p-10 flex items-center justify-between relative z-10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Stat Item 1 */}
                <motion.div 
                  className="text-center flex-1"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <motion.div 
                    className="text-4xl md:text-6xl font-medium   leading-tight text-blue-500 mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, type: "spring", stiffness: 150 }}
                  >
                    250<span className="text-3xl">+</span>
                  </motion.div>
                  <p className="text-gray-700 font-medium text-sm lg:text-base">Journalists</p>
                </motion.div>

                {/* Divider */}
                <div className="hidden sm:block w-px h-16 bg-gray-200 mx-4"></div>

                {/* Stat Item 2 */}
                <motion.div 
                  className="text-center flex-1"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <motion.div 
                    className="text-4xl md:text-6xl font-medium   leading-tight text-blue-500 mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7, type: "spring", stiffness: 150 }}
                  >
                    37<span className="text-3xl">+</span>
                  </motion.div>
                  <p className="text-gray-700 font-medium text-sm lg:text-base">Speakers</p>
                </motion.div>

                {/* Divider */}
                <div className="hidden sm:block w-px h-16 bg-gray-200 mx-4"></div>

                {/* Stat Item 3 */}
                <motion.div 
                  className="text-center flex-1"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <motion.div 
                    className="text-4xl md:text-6xl font-medium   leading-tight text-blue-500 mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, type: "spring", stiffness: 150 }}
                  >
                    4,300<span className="text-3xl">+</span>
                  </motion.div>
                  <p className="text-gray-700 font-medium text-sm lg:text-base">Attendees</p>
                </motion.div>

                {/* Decorative SVG */}
                <motion.div 
                  className="absolute -right-12 -top-8 w-40 h-40 opacity-80"
                  initial={{ opacity: 0, rotate: -45, scale: 0.5 }}
                  whileInView={{ opacity: 0.8, rotate: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                  animate={{ 
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  style={{
                    transition: { 
                      rotate: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }
                  }}
                >
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <g>
                      <path
                        d="M 100 20 Q 140 40 140 80 Q 140 120 100 140 Q 60 120 60 80 Q 60 40 100 20"
                        fill="#F9EA07"
                        opacity="0.95"
                      />
                      <path
                        d="M 110 30 Q 145 48 145 85 Q 145 118 110 135 Q 75 118 75 85 Q 75 48 110 30"
                        fill="#F6C725"
                        opacity="0.9"
                      />
                      <circle cx="100" cy="80" r="8" fill="#FFEF00" opacity="0.95" />
                    </g>
                  </svg>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background Text */}
      <motion.div 
        className="absolute bottom-0 right-0 text-8xl font-black text-blue-500 opacity-20 pointer-events-none overflow-hidden"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 0.2, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        GDAS 2025
      </motion.div>
    </section>
  )
}