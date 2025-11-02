"use client"

import { motion } from "framer-motion"
import { Check, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SponsorshipPackage({ title, price, color, icon, benefits, onSelect }) {
  const getGradientClasses = () => {
    return `bg-gradient-to-r from-blue-500 to-blue-600`
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gray-100/20 to-gray-200/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-70 transition-opacity"></div>

      <div className="relative bg-white rounded-3xl border border-gray-200 overflow-hidden h-full transition-all group-hover:bg-gray-50">
        {/* Popular Tag for Gold Package */}
        {title === "Gold" && (
          <div className="absolute -right-12 top-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs font-bold py-1 px-12 transform rotate-45 z-10 shadow-md">
            Most Popular
          </div>
        )}
        
        <div className={`absolute top-0 left-0 right-0 h-2 ${getGradientClasses()}`}></div>

        <div className="p-6 flex flex-col h-full">
          <div className="mb-4 flex justify-between items-center">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-white/80 text-gray-900 border border-gray-200">
              Sponsorship
            </span>
            <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 p-0.5`}>
              <div className="flex h-full w-full items-center justify-center rounded-full bg-white textora">{icon}</div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-black mb-2">{title}</h3>

          <div className="mb-4">
            <span className="text-3xl font-bold text-gray-900">${price.toLocaleString()}</span>
          </div>

          <div className="space-y-3 mb-6 flex-grow">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-2">
                <Check className="h-5 w-5 text-gray-900 shrink-0 mt-0.5" />
                <span className="text-gray-800 text-sm">{benefit}</span>
              </div>
            ))}
          </div>

          <Button
            onClick={onSelect}
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:brightness-110 text-white rounded-full border-0"
          >
            <CreditCard className="mr-2 h-4 w-4" />
            Choose {title}
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
