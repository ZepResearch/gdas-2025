"use client"

import { ArrowRight, Presentation, Image, Monitor, Check, Users } from "lucide-react"
import Link from "next/link"

export default function ModeOfPresentationPage() {
  const presentationGuidelines = [
    "Be strategic and impactful. Clearly communicate your policy recommendations, training frameworks, technological innovations, and their implications for defence and aviation workforce development.",
    "Use compelling visuals effectively. Incorporate strategic frameworks, training models, case studies, and success metrics that demonstrate excellence in TVET and higher education.",
    "Practice your presentation thoroughly. Rehearse to ensure confident delivery, especially when presenting to Ministers, Defence Leaders, and senior executives.",
    "Prepare for strategic dialogue. Anticipate questions about implementation, scalability, cross-border collaboration, and alignment with industry needs.",
    "Foster international cooperation. Encourage discussions about partnerships, policy frameworks, and joint initiatives in defence and aviation skills development.",
  ]

  return (
    <main className="bg-gray-50">
      {/* Oral Presentation Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden h-[400px]">
              <img
                src="https://plus.unsplash.com/premium_photo-1705267935935-53ee91453a52?q=80&w=2071&auto=format&fit=crop"
                alt="Oral Presentation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-full py-3 px-6 inline-flex items-center">
                  <span className="text-gray-900 font-medium">Share strategic insights and policy frameworks</span>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 rounded-full p-3 mr-4">
                  <Presentation className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-3xl md:text-5xl font-medium text-gray-900">Keynote Presentation</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Deliver a 25-minute keynote presentation followed by a 15-minute strategic dialogue session. This format is ideal for Ministers, Defence Leaders, and senior executives to share policy insights, training excellence frameworks, and transformative initiatives in defence and aviation education.
              </p>

              <div className="bg-gray-50 rounded-3xl p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What to Prepare:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-blue-600" />
                    </div>
                    <span className="text-gray-600">PowerPoint or PDF presentation (16:9 format, max 30 slides)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-blue-600" />
                    </div>
                    <span className="text-gray-600">Strategic frameworks, policy recommendations, and implementation roadmaps</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-blue-600" />
                    </div>
                    <span className="text-gray-600">
                      Case studies and success stories from training institutions (optional)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-blue-600" />
                    </div>
                    <span className="text-gray-600">Executive biography and institutional background</span>
                  </li>
                </ul>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Panel Discussion Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 rounded-full p-3 mr-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-3xl md:text-5xl font-medium text-gray-900">Panel Discussion</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Participate in moderated panel discussions with fellow Ministers, University Chancellors, and Industry Leaders. This collaborative format enables deep dialogue on critical challenges and opportunities in defence and aviation workforce development.
              </p>

              <div className="bg-white rounded-3xl p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What to Prepare:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-blue-600" />
                    </div>
                    <span className="text-gray-600">Key talking points and institutional perspectives (2-3 pages)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-blue-600" />
                    </div>
                    <span className="text-gray-600">
                      Policy challenges and proposed solutions for workforce excellence
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-blue-600" />
                    </div>
                    <span className="text-gray-600">Examples of successful cross-border collaborations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-blue-600" />
                    </div>
                    <span className="text-gray-600">
                      Questions for fellow panelists to stimulate dialogue
                    </span>
                  </li>
                </ul>
              </div>
             
            </div>
            <div className="relative rounded-3xl overflow-hidden h-[400px] order-1 lg:order-2">
              <img
                src="https://plus.unsplash.com/premium_photo-1661587798846-2b2bdbe5abc0?q=80&w=1932&auto=format&fit=crop"
                alt="Panel Discussion"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-full py-3 px-6 inline-flex items-center">
                  <span className="text-gray-900 font-medium">Engage in high-level strategic dialogue</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exhibition Showcase Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden h-[400px]">
              <img
                src="https://plus.unsplash.com/premium_photo-1661483130874-527d2f9e5746?q=80&w=2135&auto=format&fit=crop"
                alt="Exhibition Showcase"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-full py-3 px-6 inline-flex items-center">
                  <span className="text-gray-900 font-medium">Showcase institutional excellence</span>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 rounded-full p-3 mr-4">
                  <Image className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-3xl md:text-5xl font-medium text-gray-900">Exhibition Showcase</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Display your institution's training programs, technological capabilities, and success stories in our dedicated exhibition area. This format enables networking and detailed discussions with international delegates about collaboration opportunities.
              </p>

              <div className="bg-gray-50 rounded-3xl p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What to Prepare:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-blue-600" />
                    </div>
                    <span className="text-gray-600">A0 size poster (841 × 1189 mm) in portrait or landscape orientation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-blue-600" />
                    </div>
                    <span className="text-gray-600">
                      Visual representation of training programs, facilities, and graduate outcomes
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-blue-600" />
                    </div>
                    <span className="text-gray-600">QR codes linking to institutional websites and partnership opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-blue-600" />
                    </div>
                    <span className="text-gray-600">
                      Brochures, program catalogs, and partnership proposals for delegates
                    </span>
                  </li>
                </ul>
              </div>
            
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Participation Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 rounded-full p-3 mr-4">
                  <Monitor className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-3xl md:text-5xl font-medium text-gray-900">Virtual Participation</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Unable to travel to Malaysia? Participate virtually through our state-of-the-art digital platform. This option provides global accessibility while enabling full engagement with Ministers, University Leaders, and Industry Executives from Europe and Asia.
              </p>

              <div className="bg-white rounded-3xl p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What to Prepare:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-blue-600" />
                    </div>
                    <span className="text-gray-600">PowerPoint or PDF presentation (16:9 format)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-blue-600" />
                    </div>
                    <span className="text-gray-600">High-speed internet connection (minimum 15 Mbps upload)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-blue-600" />
                    </div>
                    <span className="text-gray-600">Professional HD webcam and conference-grade audio equipment</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-blue-600" />
                    </div>
                    <span className="text-gray-600">Pre-recorded backup presentation and supporting materials</span>
                  </li>
                </ul>
              </div>
              
            </div>
            <div className="relative rounded-3xl overflow-hidden h-[400px] order-1 lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1599584933236-b93d637a8630?q=80&w=2070&auto=format&fit=crop"
                alt="Virtual Participation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-full py-3 px-6 inline-flex items-center">
                  <span className="text-gray-900 font-medium">Connect globally from your location</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Presentation Guidelines Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-12 text-center">Participation Guidelines</h2>
            <p className="text-gray-600 text-center mb-8">
              Regardless of your participation mode, please adhere to the following guidelines to ensure impactful engagement and productive dialogue at GDAS 2025:
            </p>

            <div className="bg-gray-50 rounded-3xl p-8 shadow-sm">
              <div className="grid grid-cols-1 gap-6">
                {presentationGuidelines.map((guideline, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-blue-600 font-bold text-xl">{index + 1}</span>
                    </div>
                    <div className="pt-2">
                      <p className="text-gray-600">{guideline}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 shadow-lg text-white">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-6">
                <h3 className="text-2xl font-bold mb-2">Ready to participate in GDAS 2025?</h3>
                <p className="max-w-xl opacity-90">
                  Choose your preferred participation mode and submit your proposal. Join Ministers, Defence Leaders, University Chancellors, and Aviation Executives in shaping the future of defence and aviation workforce excellence.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/submit-paper">
                <button className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-6 py-3 font-medium whitespace-nowrap transition-colors">
                  Submit Your Proposal
                </button>
                </Link>
                <Link href="/papers-format">
                <button className="border-2 border-white text-white hover:bg-white/10 rounded-full px-6 py-3 font-medium whitespace-nowrap transition-colors flex items-center">
                  View Summit Guidelines <ArrowRight className="ml-2 h-4 w-4" />
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}