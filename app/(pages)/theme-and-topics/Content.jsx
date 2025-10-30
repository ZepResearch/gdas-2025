"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, Bot, Cpu, Zap, Globe, Shield } from "lucide-react"

export default function ThemeAndTopicsPage() {
  const researchAreas = [
    {
      icon: <Cpu className="h-8 w-8 text-blue-600" />,
      title: "Future Platform & Capability Development",
      description: "New aircraft, rotor-wing and fixed-wing platforms, unmanned systems and their integration into defence/aviation operations. Topics such as manned-unmanned teaming (MUM-T), autonomous systems and next-generation sensors will feature strongly.",
    },
    {
      icon: <Brain className="h-8 w-8 text-blue-600" />,
      title: "Workforce, Skills & Leadership",
      description: "How defence and aviation sectors must develop, attract and retain talent; adapt training, build leadership for complex domains; cross-discipline skills (technology, data, cyber, human factors).",
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Operational Resilience & Multi-Domain Operations",
      description: "In contested or degraded environments, how aviation and defence assets must adapt: digital transformation, resilient supply chains, maintenance-life-extension programmes.",
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: "Digital Transformation & Data-Driven Operations",
      description: "Including AI/ML for mission support, predictive maintenance, data fusion, communications, cockpit and mission systems innovation.",
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: "International & Industry Collaboration",
      description: "Enabling interoperability across nations and organisations, partnerships between government, military, industry and academia; export, procurement, regulation and capability-sharing.",
    },
    {
      icon: <Bot className="h-8 w-8 text-blue-600" />,
      title: "Training, Simulation & Human Factors",
      description: "The future of training for pilots, maintainers, air-crew and systems operators; how simulation, immersive technologies and new pedagogy will underpin skills development.",
    },
  ]

  const submissionSteps = [
    {
      number: "1",
      title: "Prepare Your Abstract",
      description:
        "Submit a 300-word abstract outlining your research question, methodology, findings, and relevance to defence & aviation skills development.",
    },
    {
      number: "2",
      title: "Abstract Review",
      description:
        "Abstracts will be reviewed by our expert committee of defence and aviation leaders. If accepted, you'll be invited to submit a full paper.",
    },
    {
      number: "3",
      title: "Full Paper Submission",
      description:
        "Submit your full paper (6-10 pages) following conference formatting guidelines. All papers undergo peer review by domain experts.",
    },
    {
      number: "4",
      title: "Presentation",
      description:
        "Accepted papers will be presented as keynote sessions, panel discussions, or workshops, based on your preference and committee recommendations.",
    },
  ]

  return (
    <main className="bg-gray-50">
      {/* Conference Theme Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block border border-gray-900 rounded-full px-4 py-1 text-sm mb-6">
                Conference Mission
              </div>
              <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6">
                Building World-Class Experts for Defence & Aviation Industries of the Future
              </h2>
              <p className="text-gray-600 mb-4">
                The GLOBAL DEFENCE & AVIATION SKILLS LEADERSHIP SUMMIT 2025 (GDAS 2025) is the strategic hub for 
                technical, vocational, and higher education excellence in aviation, aerospace, and defence technologies.
              </p>
              <p className="text-gray-600 mb-4">
                This executive-level international summit convenes Ministers, Defence Leaders, University Chancellors, 
                TVET Council Heads, and Aviation Industry Executives from Europe and Asia to address one critical mission: 
                How can higher education and TVET jointly build world-class experts who will power the defence and aviation 
                industries of the future?
              </p>
              <p className="text-gray-600">
                The summit fosters cross-border cooperation, establishes policy frameworks for advanced skills training, 
                and creates a unified ecosystem linking government, academia, and industry — ensuring training systems 
                keep pace with rapid technological, digital, and security transformations.
              </p>
            </div>
            <div className="relative rounded-3xl overflow-hidden h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2070&auto=format&fit=crop"
                alt="Defence and Aviation Excellence"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-full py-3 px-6 inline-flex items-center">
                  <span className="text-gray-900 font-medium">Aligning People, Platforms, Processes & Purpose</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6">Key Summit Themes</h2>
            <p className="text-gray-600">Strategic focus areas addressing the evolving landscape of defence and aviation capabilities</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-sm h-full hover:shadow-lg transition-shadow">
                <div className="bg-blue-50 rounded-2xl p-4 inline-block mb-4">{area.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{area.title}</h3>
                <p className="text-gray-600 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Submit Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6">How to Participate</h2>
            <p className="text-gray-600">
              We welcome submissions from senior leaders, practitioners, and researchers across defence, aviation, 
              training and education sectors. The submission process involves the following steps:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {submissionSteps.map((step, index) => (
              <div key={index} className="bg-gray-50 rounded-3xl p-6 shadow-sm relative overflow-hidden">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-200/30 rounded-full"></div>
                <div className="relative z-10">
                  <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link href={"/registration"}>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8">Register Now</Button>
            </Link>
            <Link href={"/submission"}>
              <Button
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 rounded-full px-8"
              >
                Submit Paper <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 shadow-lg text-white">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-6">
                <h3 className="text-2xl font-bold mb-2">Become Our Sponsor</h3>
                <p className="max-w-xl opacity-90">
                  Partner with us to showcase your organization to global leaders in defence and aviation. Gain exclusive 
                  access to Ministers, Defence Leaders, and Industry Executives, enhance your visibility, and demonstrate 
                  your commitment to building the future workforce at GDAS 2025.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href={"/exhibit-and-sponsor"}>
                  <Button
                    className="bg-white text-blue-600 hover:bg-gray-100 rounded-full whitespace-nowrap px-8"
                  >
                    View Sponsor Plans
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}