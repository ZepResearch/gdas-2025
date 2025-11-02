"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUp,
  Calendar,
  MapPin,
  Youtube,
  Mail,
  Contact,
  Plane,
  Shield,
  Target,
  Radio
} from "lucide-react"

export default function ConferenceFooter() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Navigation links grouped for footer
  const footerLinks = [
    {
      title: "About",
      links: [
        { href: "/about-conference", label: "About Conference" },
        { href: "/about-organizers", label: "About Organizers" },
      ],
    },
    {
      title: "Program",
      links: [
        { href: "/theme-and-topics", label: "Themes and Topics" },
        { href: "/papers-format", label: "Paper Formats" },
        { href: "/mode-of-presentation", label: "Mode of Presentation" },
        { href: "/schedule", label: "Conference Schedule" },
      ],
    },
    {
      title: "Participate",
      links: [
        { href: "/committee", label: "Committee" },
        { href: "/submission", label: "Submission" },
        { href: "/venue", label: "Venue" },
        { href: "/awards", label: "Awards" },
      ],
    },
    {
      title: "Connect",
      links: [
        { href: "/contact", label: "Contact" },
        { href: "/exhibit-and-sponsor", label: "Exhibit & Sponsor" },
        { href: "/registration", label: "Registration" },
      ],
    },
  ]

  // Conference information cards
  const conferenceCards = [
    {
      title: "Wfcces 2025",
      logo: "/conf/wfcces.png?height=40&width=40",
      location: "Kuala Lumpur, Malaysia",
      date: "May 22nd - 23rd, 2025",
      href: "https://www.wfcces.com/",
    },
    {
      title: "ICEMSS 2025",
      logo: "/conf/icemss.ico?height=40&width=40",
      location: "Goa, India",
      date: "December 22-23, 2025",
      href: "https://www.icemss.in",
    },
  ]

  // Handle scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white overflow-hidden">
      {/* Military/Aviation Themed Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Radar sweep effect */}
        <div
          className="absolute top-10 right-10 w-64 h-64 rounded-full border-2 border-blue-500/20"
          style={{ 
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
          }}
        >
          <div className="absolute inset-0 rounded-full border-2 border-blue-400/30 animate-ping" style={{ animationDuration: "3s" }}></div>
        </div>
        
        {/* Hexagonal grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hexagons" x="0" y="0" width="50" height="43.4" patternUnits="userSpaceOnUse">
                <polygon points="24.8,22 37.3,29.2 37.3,43.7 24.8,50.9 12.3,43.7 12.3,29.2" fill="none" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons)" />
          </svg>
        </div>

        {/* Floating aircraft silhouettes */}
        <div className="absolute left-1/4 top-1/4 opacity-10">
          <Plane className="w-16 h-16 text-blue-400 animate-pulse" style={{ animationDuration: "4s" }} />
        </div>
        <div className="absolute right-1/3 top-1/2 opacity-10">
          <Plane className="w-12 h-12 text-blue-500 animate-pulse" style={{ animationDuration: "5s", transform: "rotate(45deg)" }} />
        </div>
        
        {/* Shield emblems */}
        <div className="absolute left-10 bottom-20 opacity-5">
          <Shield className="w-32 h-32 text-blue-400" />
        </div>
        <div className="absolute right-20 top-20 opacity-5">
          <Shield className="w-24 h-24 text-blue-500" />
        </div>

        {/* Target reticle */}
        <div className="absolute left-1/2 bottom-1/4 opacity-10">
          <Target className="w-20 h-20 text-blue-400 animate-spin" style={{ animationDuration: "20s" }} />
        </div>

        {/* Scanning lines */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-400 to-transparent absolute top-1/4 animate-pulse"></div>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-400 to-transparent absolute top-2/4" style={{ animationDelay: "1s" }}></div>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-400 to-transparent absolute top-3/4" style={{ animationDelay: "2s" }}></div>
        </div>

        {/* Digital camouflage pattern overlay */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute top-0 left-0 w-20 h-20 bg-blue-900/20 transform rotate-12"></div>
          <div className="absolute top-10 left-40 w-16 h-16 bg-slate-800/20 transform -rotate-6"></div>
          <div className="absolute top-5 right-60 w-24 h-24 bg-blue-800/20 transform rotate-45"></div>
          <div className="absolute bottom-20 left-1/3 w-18 h-18 bg-slate-900/20 transform -rotate-12"></div>
        </div>

        {/* Glowing accent lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative">
        {/* Top Section with Logo/Description on left and Conference Cards on right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Side - Logo, Name, Description, Social Links */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Link href={"/"}>
                <div className="flex items-center space-x-2">
                  <Image 
                    src={"/logoX.jpg"} 
                    alt='logo' 
                    height={300} 
                    width={200} 
                    className="w text-white object-contain bg-white rounded-full p-2 shadow-lg shadow-blue-500/50" 
                  />
                </div>
              </Link>
            </div>
            <p className="text-blue-100/90 mb-6 max-w-xl leading-relaxed">
              The Global Defence and Aviation Skills Conference 2025 (GDAS 2025) positions Malaysia as the strategic hub for technical, vocational, and higher education excellence in the fields of aviation, aerospace, and defence technologies.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61561809783777"
                className="w-10 h-10 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 flex items-center justify-center hover:bg-blue-500/40 hover:border-blue-300/50 transition-all hover:scale-110"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/zepresearch/"
                className="w-10 h-10 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 flex items-center justify-center hover:bg-blue-500/40 hover:border-blue-300/50 transition-all hover:scale-110"
              >
                <Instagram size={18} />
              </a>
              {/* <a
                href="https://x.com/Zepresearch"
                className="w-10 h-10 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 flex items-center justify-center hover:bg-blue-500/40 hover:border-blue-300/50 transition-all hover:scale-110"
              >
                <Twitter size={18} />
              </a> */}
              <a
                href="https://www.linkedin.com/company/zep-research/"
                className="w-10 h-10 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 flex items-center justify-center hover:bg-blue-500/40 hover:border-blue-300/50 transition-all hover:scale-110"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://www.youtube.com/@Zepresearch"
                className="w-10 h-10 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 flex items-center justify-center hover:bg-blue-500/40 hover:border-blue-300/50 transition-all hover:scale-110"
              >
                <Youtube size={18} />
              </a>
            </div>
            <div className="mt-8">
              <h4 className="font-bold text-lg mb-4 text-blue-300 flex items-center gap-2">
                <Radio className="w-5 h-5" />
                Contact Us
              </h4>
              <ul className="space-y-4">
                <li>
                  <div className="space-y-1">
                    <a
                      href="mail:info@gdasconference.com"
                      className="inline-flex gap-4 text-blue-200/80 hover:text-blue-100 transition-colors hover:underline"
                    >
                      <Mail className="flex-shrink-0" /> info@gdasconference.com
                    </a>
                  </div>
                </li>
                <li>
                  <div className="space-y-1">
                    <a
                      href="tel:+919237388328"
                      className="inline-flex gap-2 text-blue-200/80 hover:text-blue-100 transition-colors hover:underline"
                    >
                      <Contact className="flex-shrink-0" />+91 92373 88328
                    </a>
                  </div>
                </li>
                <li>
                  <div className="space-y-1">
                    <p className="text-blue-200/80 inline-flex gap-2">
                      <MapPin className="flex-shrink-0" /> Selangor/ Kuala Lumpur, Malaysia
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {footerLinks.map((group, index) => (
              <div key={index} className="backdrop-blur-sm bg-blue-900/10 p-6 rounded-lg border border-blue-500/20 hover:border-blue-400/40 transition-all">
                <h4 className="font-bold text-lg mb-4 text-blue-300">{group.title}</h4>
                <ul className="space-y-2">
                  {group.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={link.href} 
                        className="text-blue-200/70 hover:text-blue-100 transition-colors hover:underline hover:translate-x-1 inline-block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-blue-500/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-200/60 text-sm mb-4 md:mb-0">
            © 2025 GDAS Conference. All rights reserved. Advancing Defence & Aviation Excellence.
          </p>
          <div className="grid md:grid-cols-4 grid-cols-2 gap-8 text-center">
            <Link href="/terms-and-conditions" className="text-blue-200/60 text-sm hover:text-blue-100 transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy-policy" className="text-blue-200/60 text-sm hover:text-blue-100 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/cancellation-policy" className="text-blue-200/60 text-sm hover:text-blue-100 transition-colors">
              Cancellation Policy
            </Link>
            <Link href="/complaints-policy" className="text-blue-200/60 text-sm hover:text-blue-100 transition-colors">
              Complaints Policy
            </Link>
            <Link href="/disability-discrimination-policy" className="text-blue-200/60 text-sm hover:text-blue-100 transition-colors">
              Disability Discrimination Policy
            </Link>
            <Link href="/health-and-safety-policy" className="text-blue-200/60 text-sm hover:text-blue-100 transition-colors">
              Health and Safety Policy
            </Link>
            <Link href="/equal-treatment-policy" className="text-blue-200/60 text-sm hover:text-blue-100 transition-colors">
              Equal Treatment Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed right-8 bottom-6 w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 text-white flex items-center justify-center shadow-lg shadow-blue-500/50 transition-all duration-300 z-50 border border-blue-400/30 hover:shadow-blue-400/70 hover:scale-110 ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  )
}