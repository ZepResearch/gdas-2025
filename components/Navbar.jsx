"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Search, Menu, X } from "lucide-react"
import Sidebar from "./sidebar"
import Image from "next/image"


export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleDropdown = (title) => {
    setOpenDropdown(openDropdown === title ? null : title)
  }
 const navLinks = [
  {
    title: "ABOUT",
    href: "#",
    dropdown: [
      { href: "/about-conference", title: "About Conference" },
      { href: "/about-organizers", title: "About Organizers" },
    ],
  },
  {
    title: "PROGRAM",
    href: "#",
    dropdown: [
      { href: "/theme-and-topics", title: "Themes and Topics" },
      { href: "/papers-format", title: "Paper Formats" },
      { href: "/mode-of-presentation", title: "Mode of Presentation" },
      { href: "/schedule", title: "Conference Schedule" },
    ],
  },
  { title: "COMMITTEE", href: "/committee" },
  { title: "SUBMISSION", href: "" },
 
  { title: "VENUE", href: "/venue" },
  { title: "AWARDS", href: "/awards" },
  { title: "CONTACT", href: "" },
  { title: "EXHIBIT & SPONSOR", href: "" },
]
  return (
    <>
      <nav className="sticky top-0 z-20 bg-white border-b border-gray-100 shadow-sm">
        <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 max-w-screen-2xl mx-auto">
          <div className="flex items-center justify-between h-14 sm:h-auto ">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center gap-1 sm:gap-2">
                <Image
                  src="/logoX.jpg"
                  alt="Evenex Logo"
                  width={320}
                  height={320}
                  className="w-12 h-12   sm:w-32 sm:h-32"
                />
               
              </Link>
            </div>

            {/* Desktop Navigation - Made responsive with smaller gaps and text on medium screens */}
            <div className="hidden md:flex items-center gap-0.5 lg:gap-1 flex-1 justify-center px-2 lg:px-4">
              {navLinks.map((link) => (
                <div key={link.title} className="relative group">
                    <Link href={link.href} >
                  <button
                    onClick={() => link.dropdown && toggleDropdown(link.title)}
                    className="px-2 lg:px-3 py-2 text-xs lg:text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200 flex items-center gap-0.5 lg:gap-1 group whitespace-nowrap"
                  >
                    {link.title}
                    {link.dropdown && (
                      <ChevronDown className="w-3 h-3 lg:w-4 lg:h-4 transition-transform duration-300 group-hover:rotate-180" />
                    )}
                  </button>
                    </Link>

                  {/* Dropdown Menu */}
                  {link.dropdown && (
                    <div className="absolute left-0 mt-0 w-40 lg:w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100 py-2 z-50">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-3 lg:px-4 py-2 text-xs lg:text-sm text-gray-700 hover:bg-gray-50 hover:text-yellow-500 transition-colors duration-200"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side Actions - Made responsive with smaller gaps and icons */}
            <div className="hidden md:flex items-center gap-2 lg:gap-4 flex-shrink-0">
              
              <button className="px-3 lg:px-6 py-1.5 lg:py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium text-xs lg:text-sm rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
                Book Tickets
              </button>
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-1.5 lg:p-2 text-gray-700 hover:text-gray-900 transition-colors duration-200 hover:bg-gray-100 rounded-lg flex-shrink-0"
              >
                <div className="w-4 h-4 lg:w-5 lg:h-5 grid grid-cols-3 gap-0.5 lg:gap-1">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="w-0.5 h-0.5 lg:w-1 lg:h-1 bg-gray-700 rounded-full" />
                  ))}
                </div>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2 flex-shrink-0">
             
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 animate-in fade-in slide-in-from-top-2 duration-300">
              {navLinks.map((link) => (
                <div key={link.title}>
                  <button
                    onClick={() => link.dropdown && toggleDropdown(link.title)}
                    className="w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors duration-200 flex items-center justify-between"
                  >
                    {link.title}
                    {link.dropdown && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          openDropdown === link.title ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>

                  {/* Mobile Dropdown */}
                  {link.dropdown && openDropdown === link.title && (
                    <div className="pl-4 animate-in fade-in slide-in-from-top-1 duration-200">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-yellow-500 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <button className="w-full mt-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300">
                Book Tickets
              </button>
            </div>
          )}
        </div>
      </nav>

      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  )
}
