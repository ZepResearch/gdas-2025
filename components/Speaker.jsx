"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, MapPin, GraduationCap, Loader2 } from "lucide-react"
import pb from "@/lib/pocketbase"

// PocketBase setup

pb.autoCancellation(false)

// Speaker categories
const speakerCategories = [
  { id: "Guest Speaker", title: "Guest Speaker" },
  { id: "Organizing Secretary", title: "Organizing Secretary" },
  { id: "Conference Chair", title: "Conference Chair" },
  { id: "Conference Co-Chair", title: "Conference Co-Chair" },
  { id: "Keynote Speaker", title: "Keynote Speaker" },
  { id: "Session Chair", title: "Session Chair" },
]

// Speaker card component
const SpeakerCard = ({ speaker, onMoreInfo }) => {
  // Get image URL from PocketBase
  const getImageUrl = () => {
    if (speaker.image && speaker.collectionId && speaker.id) {
      return pb.files.getUrl(speaker, speaker.image)
    }
    return "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
  }

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-blue-200/50 hover:border-transparent hover:shadow-2xl hover:shadow-blue-200/30 transition-all duration-500"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
      <div className="absolute inset-[1px] bg-white rounded-[15px] group-hover:bg-white/95 transition-colors duration-500"></div>

      <div className="relative p-6">
        <div className="relative h-[280px] w-full rounded-xl overflow-hidden mb-6 bg-gradient-to-br from-blue-100 to-blue-200">
          <img 
            src={getImageUrl()}
            alt={speaker.name} 
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-gray-900 leading-tight">{speaker.name}</h3>
          <p className="text-blue-700 font-medium text-sm">{speaker.role}</p>
          <div className="flex items-center gap-3 text-gray-600 text-sm bg-blue-50/80 rounded-lg p-3">
            <GraduationCap className="h-4 w-4 text-blue-600" />
            <span>{speaker.college}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <MapPin className="h-4 w-4 text-blue-600" />
            <span>{speaker.country}</span>
          </div>

          <button
            onClick={() => onMoreInfo(speaker)}
            className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium border-0 rounded-xl py-3 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View Profile
          </button>
        </div>
      </div>
    </motion.div>
  )
}

// Speaker detail drawer component
const SpeakerDrawer = ({ isOpen, onClose, speaker }) => {
  const getImageUrl = () => {
    if (speaker?.image && speaker?.collectionId && speaker?.id) {
      return pb.files.getUrl(speaker, speaker.image)
    }
    return "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
  }

  return (
    <AnimatePresence>
      {isOpen && speaker && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-blue-950/60 backdrop-blur-md z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 120 }}
            className="fixed right-0 top-0 h-full w-full sm:w-[480px] bg-white/95 backdrop-blur-xl shadow-2xl z-[50] overflow-y-auto border-l border-blue-200/50"
          >
            <div className="p-8 flex flex-col h-full relative">
              <button
                onClick={onClose}
                className="absolute top-6 right-6 h-10 w-10 rounded-full bg-blue-100/80 backdrop-blur-sm flex items-center justify-center text-blue-700 hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-400 hover:text-white transition-all duration-300"
                aria-label="Close drawer"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative h-[320px] w-full rounded-2xl  bg-gradient-to-br from-blue-100 to-blue-200 mt-8 mb-8 shadow-lg">
                <img 
                  src={getImageUrl()}
                  alt={speaker.name} 
                  className="w-full h-full object-contain" 
                />
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-light text-gray-900">{speaker.name}</h2>
                <h3 className="text-lg text-blue-700 font-medium">{speaker.role}</h3>

                <div className="flex items-center gap-3 text-gray-600 text-sm bg-blue-50/80 rounded-lg p-3">
                  <GraduationCap className="h-4 w-4 text-blue-600" />
                  <span>{speaker.college}</span>
                </div>

                <div className="flex items-center gap-3 text-gray-600 text-sm bg-blue-50/80 rounded-lg p-3">
                  <MapPin className="h-4 w-4 text-blue-600" />
                  <span>{speaker.country}</span>
                </div>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-200 to-transparent my-8"></div>

                <h4 className="text-xl font-medium text-gray-900 mb-4">Biography</h4>
                <div className="bg-blue-50/50 rounded-xl p-6">
                  <p className="text-gray-600 leading-relaxed">{speaker.bio}</p>
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={onClose}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium border-0 rounded-xl py-4 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default function SpeakerSection() {
  const [activeCategory, setActiveCategory] = useState("Guest Speaker")
  const [selectedSpeaker, setSelectedSpeaker] = useState(null)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [speakers, setSpeakers] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Fetch speakers from PocketBase
  useEffect(() => {
    async function fetchSpeakers() {
      try {
        setLoading(true)
        setError(null)
        
        // Fetch all speakers from the collection
        const records = await pb.collection("GDAS_speakers").getFullList({
          sort: "created",
        })

        // Group speakers by category
        const groupedSpeakers = records.reduce((acc, speaker) => {
          const category = speaker.category || "Guest Speaker"
          if (!acc[category]) {
            acc[category] = []
          }
          acc[category].push(speaker)
          return acc
        }, {})

        setSpeakers(groupedSpeakers)
      } catch (err) {
        console.error("Error fetching speakers:", err)
        setError("Failed to load speakers. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    fetchSpeakers()
  }, [])

  const handleMoreInfo = (speaker) => {
    setSelectedSpeaker(speaker)
    setIsDrawerOpen(true)
  }

  const closeDrawer = () => {
    setIsDrawerOpen(false)
  }

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="text-center mb-20">

          <h2 className="text-4xl md:text-6xl font-medium text-gray-900 mb-6 leading-tight">
            Distinguished Speakers
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Join us to learn from distinguished experts and thought leaders in gender equality, women's empowerment, and entrepreneurship
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {speakerCategories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className={`relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "text-white shadow-lg"
                  : "bg-white/80 backdrop-blur-sm text-gray-700 border border-blue-200/50 hover:bg-white hover:shadow-md"
              }`}
            >
              {activeCategory === category.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full"></div>
              )}
              <span className="relative z-10">{category.title}</span>
            </motion.button>
          ))}
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
          </div>
        ) : error ? (
          <div className="col-span-3 py-16 text-center">
            <div className="relative bg-red-50/80 backdrop-blur-sm rounded-2xl border border-red-200/50 p-8 max-w-md mx-auto">
              <p className="text-red-600 font-medium">{error}</p>
            </div>
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {speakers[activeCategory]?.length > 0 ? (
                speakers[activeCategory].map((speaker, index) => (
                  <motion.div
                    key={speaker.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <SpeakerCard speaker={speaker} onMoreInfo={handleMoreInfo} />
                  </motion.div>
                ))
              ) : (
                <div className="col-span-3 py-16 text-center">
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl border border-blue-200/50 p-8 max-w-md mx-auto">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white text-sm">📋</span>
                    </div>
                    <p className="text-gray-600 font-medium">No speakers declared in this category</p>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        )}

        <SpeakerDrawer isOpen={isDrawerOpen} onClose={closeDrawer} speaker={selectedSpeaker} />
      </div>
    </section>
  )
}