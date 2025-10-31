"use client"

import { Check } from "lucide-react"
import { motion } from "framer-motion"

export default function ConferenceTicketPage() {
  const tickets = [
    {
      name: "Early Bird",
      price: "$299",
      description: "Limited availability",
      features: ["2-day summit access", "Welcome kit", " All meals included", "Networking sessions", "Certificate of attendance"],
      highlighted: true,
    },
    {
      name: "Basic",
      price: "$499",
      description: "Most popular",
      features: [
        "2-day summit access",
        "Welcome kit",
        "All meals included",
        "Networking sessions",
        "Digital materials",
        "Certificate of attendance",
      ],
      highlighted:false ,
    },
    {
      name: "Premium",
      price: "$799",
      description: "VIP experience",
      features: [
        "2-day summit access",
        "Welcome kit",
        "All meals included",
        "VIP networking lounge",
        "Digital materials",
        "Certificate of attendance",
        "1-on-1 mentoring session",
        "Exclusive gala dinner",
      ],
      highlighted: false,
    },
  ]

  return (
    <section className="min-h-full w-full relative py-20 px-4 bg-cover bg-center bg-no-repeat " style={{ backgroundImage: "url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80')" }}>
      {/* Blue overlay */}
      <div className="absolute inset-0 bg-blue-900 opacity-50"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-medium text-slate-50 mb-4 text-balance">GDAS 2025 Tickets</h1>
          <p className="text-xl text-slate-50 max-w-2xl mx-auto">
            Choose your ticket tier and join global leaders in defence, aviation, and higher education
          </p>
        </motion.div>

        {/* Ticket Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tickets.map((ticket, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                ticket.highlighted
                  ? "ring-2 ring-blue-500 shadow-2xl md:scale-105"
                  : "border border-slate-200 shadow-lg"
              }`}
            >
              <div className={`p-8 h-full flex flex-col ${ticket.highlighted ? "bg-blue-600" : "bg-white"}`}>
                {/* Badge for popular */}
                {ticket.highlighted && (
                  <div className="absolute top-4 right-4 bg-white text-blue-600 px-3 py-1 rounded-full text-xs font-bold">
                    POPULAR
                  </div>
                )}

                {/* Ticket name and price */}
                <div className="mb-6">
                  <h3 className={`text-2xl font-bold mb-2 ${ticket.highlighted ? "text-white" : "text-slate-900"}`}>
                    {ticket.name}
                  </h3>
                  <p className={`text-sm mb-4 ${ticket.highlighted ? "text-blue-100" : "text-slate-600"}`}>
                    {ticket.description}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className={`text-4xl font-bold ${ticket.highlighted ? "text-white" : "text-slate-900"}`}>
                      {ticket.price}
                    </span>
                    <span className={`text-sm ${ticket.highlighted ? "text-blue-100" : "text-slate-600"}`}>
                      per ticket
                    </span>
                  </div>
                </div>

                {/* Features list */}
                <div className="flex-1 mb-8">
                  <ul className="space-y-3">
                    {ticket.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-start gap-3">
                        <Check
                          size={20}
                          className={`flex-shrink-0 mt-0.5 ${ticket.highlighted ? "text-white" : "text-blue-600"}`}
                        />
                        <span className={`text-sm ${ticket.highlighted ? "text-blue-50" : "text-slate-700"}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    ticket.highlighted
                      ? "bg-white text-blue-600 hover:bg-blue-50"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  Get Ticket
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Event Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-slate-50 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Global Defence & Aviation Skills Leadership Summit 2025
            </h3>
            <p className="text-slate-600 mb-6">
              Empowering the Future: Advancing Higher Education TVET for World-Class Military and Aviation Experts
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <p className="font-semibold text-slate-900">Dates</p>
                <p className="text-slate-600">December 8th - 9th, 2025</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Location</p>
                <p className="text-slate-600">Kuala Lumpur, Malaysia</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Attendees</p>
                <p className="text-slate-600">500+ Global Leaders</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
