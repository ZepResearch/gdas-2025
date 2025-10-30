"use client"

import { X, Facebook, Twitter, MessageCircle, Linkedin, Youtube } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 hidden md:block"
          onClick={onClose}
          style={{
            animation: "fadeIn 0.3s ease-in-out",
          }}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed right-0 top-0 h-screen w-full sm:w-80 md:w-72 lg:w-80 bg-white shadow-2xl z-50 hidden md:flex flex-col p-4 sm:p-6 lg:p-8 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
        </button>

        {/* Logo */}
        <div className="flex items-center gap-2 mb-6 sm:mb-8 mt-2 sm:mt-4">
          <Link href="/" className="flex items-center gap-1 sm:gap-2">
                <Image
                  src="/logo.jpg"
                  alt="Evenex Logo"
                  width={320}
                  height={320}
                  className="w-60 h-60 sm:w-32 sm:h-32"
                />
               
              </Link>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto pr-2">
          <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
            We must explain to you how all seds this mistakens idea off denouncing pleasures and praising pain was born.
          </p>

          <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8">
            I will give you a completed accounts we must explain to you how all seds this mistakes idea off denouncing
            pleasures and praising pain was born and I will give you a completed accounts.
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 pt-4 sm:pt-6 border-t border-gray-200 flex-wrap">
          <Link
            href="#"
            className="p-2 sm:p-3 bg-gray-100 hover:bg-red-500 text-gray-700 hover:text-white rounded-lg transition-all duration-300 transform hover:scale-110"
          >
            <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
          <Link
            href="#"
            className="p-2 sm:p-3 bg-gray-100 hover:bg-red-500 text-gray-700 hover:text-white rounded-lg transition-all duration-300 transform hover:scale-110"
          >
            <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
          <Link
            href="#"
            className="p-2 sm:p-3 bg-gray-100 hover:bg-red-500 text-gray-700 hover:text-white rounded-lg transition-all duration-300 transform hover:scale-110"
          >
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
          <Link
            href="#"
            className="p-2 sm:p-3 bg-gray-100 hover:bg-red-500 text-gray-700 hover:text-white rounded-lg transition-all duration-300 transform hover:scale-110"
          >
            <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
          <Link
            href="#"
            className="p-2 sm:p-3 bg-gray-100 hover:bg-red-500 text-gray-700 hover:text-white rounded-lg transition-all duration-300 transform hover:scale-110"
          >
            <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </>
  )
}
