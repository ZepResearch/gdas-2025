"use client"

import { TicketCheckIcon, ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function DirectionSection() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16">
      {/* Header Section */}
      <div className="max-w-screen-2xl mx-auto mb-12 text-center">
        <h1 className="text-4xl md:text-6xl font-medium leading-tight text-black mb-2">
          Get direction to the event hall
        </h1>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-screen-2xl mx-auto mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Left Card - Venue Info */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg h-80">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 bg-blue-500" />
            <Image
              src="https://images.unsplash.com/photo-1521334726092-b509a19597c6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1801"
              alt="Venue background"
              fill
              className="object-cover opacity-20 bg-blue-500"
            />

            {/* Content */}
            <div className="relative p-8 h-full flex flex-col justify-between text-white">
              {/* Venue */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <h3 className="text-xl font-bold">Venue</h3>
                </div>
                <p className="text-base font-medium ml-4">Auditorium of The Royal Malaysian Air Force Leisure Club</p>
              </div>

              {/* Address */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <h3 className="text-xl font-bold">Address</h3>
                </div>
                <p className="text-base font-medium ml-4 leading-relaxed">
                  Air Force Recreation Club, Jalan Tudm, Tentera Udara Diraja Malaysia Subang, 40150 Shah Alam, Selangor, Malaysia
                </p>
              </div>

              {/* Get Directions Link */}
              <div>
                <a
                  href="https://maps.app.goo.gl/x7HrSnZoo6fwbccL8"
                  className="flex items-center gap-2 text-white font-semibold hover:opacity-80 transition-opacity"
                >
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span className="underline">Get Directions...</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right - Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-80">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63742.16259184445!2d101.5369652!3d3.1250565!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4e05584bc271%3A0x4c19c2c4a4259972!2sAir%20Force%20Recreation%20Club!5e0!3m2!1sen!2sin!4v1762177205572!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale-100"
            />
          </div>
        </div>

        {/* Bottom Section - Images and CTA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
          {/* Left - Building Image with Text Overlay */}
          <div className="relative rounded-xl overflow-hidden shadow-lg h-64 md:h-72">
            <Image
              src="https://images.unsplash.com/photo-1574218732130-6b19257fd9db?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2064"
              alt="Modern building"
              fill
              className="object-cover"
            />
          </div>

          {/* Right - Interior Image */}
          <div className="relative rounded-xl overflow-hidden shadow-lg h-64 md:h-72">
            <Image
              src="https://images.unsplash.com/photo-1532442782935-dc7ee648a2a5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1624"
              alt="Venue interior"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="flex flex-col md:flex-row justify-between items-center h-full mt-4 gap-4">
          <div className="flex flex-col md:border-r-4 border-blue-500 pb-4 md:pr-4">
            <h3 className="font-black text-2xl md:text-3xl leading-tight">
              CONNECT.
              <br />
              COLLABORATE.
              <br />
              CELEBRATE!.
            </h3>
          </div>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
            where global leaders meet, ideas spark, and partnerships grow beyond the conference halls.
          </p>

          {/* Register Button with Dropdown */}
          <div className="relative inline-block w-full md:w-auto">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 w-full md:w-auto drop-shadow-lg hover:from-blue-600 hover:to-blue-700"
            >
              <TicketCheckIcon />
              Register
              <ChevronDown 
                className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-full min-w-[250px] bg-white rounded-lg shadow-xl overflow-hidden z-50 border border-gray-100">
                <Link href="/registration/foreigner">
                  <div className="px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-pointer border-b border-gray-100">
                    <div className="flex items-center gap-2">
                      <TicketCheckIcon className="w-4 h-4" />
                      <span className="font-medium text-sm">Registration for Foreigner</span>
                    </div>
                  </div>
                </Link>
                
                <Link href="/registration/malaysian">
                  <div className="px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-pointer">
                    <div className="flex items-center gap-2">
                      <TicketCheckIcon className="w-4 h-4" />
                      <span className="font-medium text-sm">Registration for Malaysian</span>
                    </div>
                  </div>
                </Link>
              </div>
            )}

            {/* Click outside to close */}
            {isDropdownOpen && (
              <div 
                className="fixed inset-0 z-40" 
                onClick={() => setIsDropdownOpen(false)}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}