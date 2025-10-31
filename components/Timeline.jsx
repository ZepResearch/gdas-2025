"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Calendar, Clock, FileText, UserCheck, Award, Users, MapPin, Presentation } from "lucide-react"
import PocketBase from "pocketbase"
import pb from "@/lib/pocketbase"

// PocketBase setup


// Utility function to fetch timeline data
async function fetchTimelineData() {
  try {
    const records = await pb.collection("GDAS_Dates").getFullList({
      sort: "created",
    })
    
    // Validate and sanitize data
    return records.filter((record) => record.title && record.date)
  } catch (error) {
    console.error("PocketBase fetch error:", error)
    throw new Error("Failed to fetch timeline data")
  }
}

// Icon mapping based on title keywords
const getIconForTitle = (title) => {
  const lowerTitle = title.toLowerCase()
  if (lowerTitle.includes("registration")) return UserCheck
  if (lowerTitle.includes("abstract") || lowerTitle.includes("submission")) return FileText
  if (lowerTitle.includes("paper") || lowerTitle.includes("deadline")) return Calendar
  if (lowerTitle.includes("conference") || lowerTitle.includes("event")) return Presentation
  if (lowerTitle.includes("award") || lowerTitle.includes("recognition")) return Award
  if (lowerTitle.includes("venue") || lowerTitle.includes("location")) return MapPin
  if (lowerTitle.includes("speaker") || lowerTitle.includes("keynote")) return Users
  return Clock
}

export default function TimelineSection() {
  const [timelineItems, setTimelineItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadTimeline() {
      try {
        setLoading(true)
        setError(null)
        const data = await fetchTimelineData()
        setTimelineItems(data)
      } catch (err) {
        setError(err.message || "Failed to load timeline data")
        console.error("Error loading timeline:", err)
      } finally {
        setLoading(false)
      }
    }

    loadTimeline()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]" id="timeline">
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-blue-400 animate-spin"></div>
          <div
            className="absolute inset-2 rounded-full border-2 border-transparent border-l-blue-600 animate-spin"
            style={{ animationDuration: "1.5s" }}
          ></div>
          <div
            className="absolute inset-4 rounded-full border-2 border-transparent border-r-blue-400 animate-spin"
            style={{ animationDuration: "2s" }}
          ></div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center text-red-500 p-4 bg-red-50 rounded-lg border border-red-200">
        <p className="font-medium">{error}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="mt-2 text-sm text-blue-600 hover:underline"
        >
          Try Again
        </button>
      </div>
    )
  }

  return (
    <div className="min-h-full relative py-16 lg:py-20 px-3 sm:px-4 md:px-6">
      {/* Background Pattern */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "opacity-10",
        )}
      />

      {/* Radial gradient overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="max-w-7xl mx-auto ">
        {/* Header Section */}
        <div className="mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
          </div>

          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-6xl font-medium text-gray-900 mb-6 leading-tight">
              Important Dates for{" "}
              GDAS 2025
            </h2>

            <p className="text-gray-900 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
              Stay updated with all the key dates and deadlines for the International Conference on Applied Science,
              Engineering & Management
            </p>
          </div>
        </div>

        {/* Timeline Cards Grid */}
        {timelineItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {timelineItems.map((item, index) => {
              const IconComponent = getIconForTitle(item.title)
              return (
                <div key={item.id} className="group">
                  {/* Card with styling */}
                  <div className="relative bg-white border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 h-80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl">
                    {/* Card Content */}
                    <div className="p-6 h-full flex flex-col">
                      {/* Icon */}
                      <div className="mb-6">
                        <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-7 h-7 text-white" />
                        </div>
                      </div>

                      {/* Decorative elements */}
                      <div className="mb-6">
                        <div className="flex gap-1">
                          {[...Array(6)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-1 h-8 ${
                                i % 2 === 0 ? "bg-blue-400" : "bg-blue-600"
                              } transform skew-x-12 opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
                            ></div>
                          ))}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-gray-950 transition-colors duration-300">
                        {item.title?.toUpperCase()}
                      </h3>

                      {/* Date */}
                      <div className="mb-4">
                        <p className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 font-bold text-lg">
                          {item.date}
                        </p>
                      </div>

                      {/* Description (if available) */}
                      {item.description && (
                        <div className="flex-grow">
                          <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                        </div>
                      )}

                      {/* Bottom accent */}
                      <div className="mt-auto pt-4">
                        <div className="h-1 w-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full opacity-20 group-hover:opacity-60 transition-opacity duration-300"></div>
                      </div>
                    </div>

                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          /* Empty state */
          <div className="text-center py-16">
            <div className="bg-white rounded-3xl border-2 border-gray-200 p-12 max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Timeline Coming Soon</h3>
              <p className="text-gray-600 text-lg mb-6">
                We're finalizing the important dates and deadlines for GDAS 2025. Check back soon for updates!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span>Registration Dates</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <FileText className="w-4 h-4 text-blue-400" />
                  <span>Submission Deadlines</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Presentation className="w-4 h-4 text-blue-400" />
                  <span>Conference Events</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}