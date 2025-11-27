'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, Award, Brain, Globe, Lightbulb, RocketIcon, Users } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function About_aboutsection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
  
      <main>
        <div className="relative isolate">
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-blue-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" width="100%" height="100%" strokeWidth={0} />
          </svg>
          <div
            aria-hidden="true"
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
          >
          
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-screen-2xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                 <h1 className="text-4xl md:text-5xl font-medium leading-tight tracking-tight text-gray-900 sm:text-6xl">
  Empowering the Future of Defence and Aviation Leadership
</h1>

<p className="mt-6 text-base leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
  The <strong>Global Defence and Aviation Skills Conference 2025  (GDAS 2025)</strong> is an international platform dedicated to shaping the future of defence, aviation, and aerospace education. 
  Bringing together government leaders, defence institutions, university chancellors, TVET councils, and industry pioneers from across Europe and Asia, GDAS 2025 aims to redefine how knowledge and skills are transferred in the rapidly evolving global security and aviation landscape.
</p>

<p className="mt-6 text-base leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
  Through strategic collaboration, policy innovation, and technological exchange, the summit creates opportunities to advance <strong>Higher Education and Technical & Vocational Education and Training (TVET)</strong> systems — ensuring they meet the demands of next-generation military and aerospace excellence. 
  GDAS 2025 fosters meaningful dialogue that bridges the gap between academia, government, and industry, creating pathways for sustainable talent development and global partnerships.
</p>

<p className="mt-6 text-base leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
  With the theme <strong>“Empowering the Future: Advancing Higher Education TVET for World-Class Military and Aviation Experts,”</strong> GDAS 2025 reaffirms Malaysia’s position as a strategic hub for advanced education and skill development in the defence and aviation sectors. 
  Together, we’re building the leaders, innovators, and experts who will define the future of global security and aviation technology.
</p>
                  {/* <div className="mt-10 flex items-center gap-x-6">
                    <a
                      href="#"
                      className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >
                      Get started
                    </a>
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                      Live demo <span aria-hidden="true">→</span>
                    </a>
                  </div> */}
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <img
                        alt=""
                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        alt=""
                        src="https://images.unsplash.com/photo-1600320844678-43cebba1cdfe?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        alt=""
                        src="https://images.unsplash.com/photo-1573339886518-264aa6f194b2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                        alt=""
                        src="https://plus.unsplash.com/premium_photo-1679547202440-356042e564a3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        alt=""
                        src="https://plus.unsplash.com/premium_photo-1679547202595-5b38d8fde3a7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

        {/* Our Mission Section */}
   <section className="relative z-10 pt-12  bg-blue-50">
  <div className="absolute inset-0 z-0">
    <img 
      src="https://images.unsplash.com/photo-1697350197880-c925bb7a19ed?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740" 
      alt="" 
      className="w-full h-full object-cover grayscale-100"
    />
    <div className="absolute inset-0 bg-blue-800 opacity-70"></div>
  </div>

  <div className="relative z-10 max-w-screen-2xl mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="">
        <h2 className="text-4xl md:text-6xl font-medium leading-tight text-white mb-6">Our Mission</h2>
        <p className="text-md text-white mb-6 leading-relaxed">
          To accelerate the responsible development and deployment of AI and robotics technologies that benefit
          humanity. We believe in fostering collaboration between researchers, industry leaders, and policymakers
          to shape a future where intelligent machines enhance human potential.
        </p>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <span className="text-white font-semibold">Promote ethical AI development</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <span className="text-white font-semibold">Bridge academia and industry</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <span className="text-white font-semibold">Inspire the next generation</span>
          </div>
        </div>
      </div>
      
      <div className="text-center">
        <img src="/assets/plane-in-hand.png" alt="Mission" className="w-full h-auto min-h-[450px] lg:max-h-[280px] object-contain object-bottom select-none pointer-events-none opacity-80" />
      </div>
    </div>
  </div>
</section>

      {/* Conference Highlights Section */}
   {/* Key Highlights Section */}
      <section className="relative z-10 py-20 bg-white/50">
        <div className="max-w-screen-2xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-medium leading-tight text-gray-900 text-center mb-16">Key Highlights</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <div className="flex items-start gap-4">
               
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">First in Malaysia</h3>
                  <p className="text-sm text-gray-600">The first Public and Defence Aviation Skills Conference in Malaysia</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <div className="flex items-start gap-4">
               
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Supporting TVET</h3>
                  <p className="text-sm text-gray-600">Supporting Malaysia's TVET policy through the aviation sector</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <div className="flex items-start gap-4">
               
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">UN Recognition</h3>
                  <p className="text-sm text-gray-600">In conjunction with the United Nations International Civil Aviation Day, celebrated annually on December 7</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <div className="flex items-start gap-4">
               
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Three Tracks</h3>
                  <p className="text-sm text-gray-600">Featuring three tracks: Defence, Industry, and Training</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <div className="flex items-start gap-4">
               
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Expert Speakers</h3>
                  <p className="text-sm text-gray-600">Guest speakers from the defence and aviation sectors</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <div className="flex items-start gap-4">
               
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Networking & Exhibition</h3>
                  <p className="text-sm text-gray-600">Exhibition booths from aviation industries and institutes with business networking sessions</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
      {/* Why Attend Section */}
     
<section className="relative z-10 py-20 bg-white/50">
  <div className="max-w-screen-2xl mx-auto px-4">
    <h2 className="text-4xl md:text-6xl font-medium leading-tight text-gray-900 text-center mb-16 ">
      Why GDAS 2025
    </h2>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
        <div className="flex items-center gap-4">
          <Award className="w-12 h-12 text-blue-600" />
          <h3 className="text-xl font-semibold text-gray-900">
            Hear from Global Leaders
          </h3>
        </div>
        <p className="text-gray-600 text-sm">
          Learn directly from senior decision-makers, defence strategists, and
          aviation industry thought leaders who are shaping the next generation
          of global defence and aerospace capability.
        </p>
        <ul className="space-y-2 text-xs text-gray-600 mt-3">
          <li>• Keynotes from ministers and air-force commanders</li>
          <li>• Executive panels with industry and academia</li>
          <li>• Future-readiness discussions on workforce transformation</li>
        </ul>
      </Card>

      <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
        <div className="flex items-center gap-4">
          <Lightbulb className="w-12 h-12 text-blue-600" />
          <h3 className="text-xl font-semibold text-gray-900">
            Gain Strategic Insights
          </h3>
        </div>
        <p className="text-gray-600 text-sm">
          Understand the emerging technologies, training paradigms, and skill
          demands that will define success in future defence and aviation
          missions.
        </p>
        <ul className="space-y-2 text-xs text-gray-600 mt-3">
          <li>• Trends in autonomy, UAS, and simulation training</li>
          <li>• Impact of AI and cyber systems on workforce design</li>
          <li>• Strategies for sustainable human-capability growth</li>
        </ul>
      </Card>

      <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
        <div className="flex items-center gap-4">
          <Users className="w-12 h-12 text-blue-600" />
          <h3 className="text-xl font-semibold text-gray-900">
            Connect Across Borders
          </h3>
        </div>
        <p className="text-gray-600 text-sm">
          Build valuable relationships with peers from governments, industry,
          academia, and defence training institutions across Europe and Asia.
        </p>
        <ul className="space-y-2 text-xs text-gray-600 mt-3">
          <li>• Networking with global defence and aviation experts</li>
          <li>• Bilateral and multilateral collaboration sessions</li>
          <li>• Cross-sector dialogue for capability development</li>
        </ul>
      </Card>

      <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
        <div className="flex items-center gap-4">
          <Brain className="w-12 h-12 text-blue-600" />
          <h3 className="text-xl font-semibold text-gray-900">
            Lead the Skills Transformation
          </h3>
        </div>
        <p className="text-gray-600 text-sm">
          Explore how leadership in education, training, and human-capability
          development will determine operational superiority in defence and
          aviation.
        </p>
        <ul className="space-y-2 text-xs text-gray-600 mt-3">
          <li>• Workforce transformation frameworks</li>
          <li>• Next-gen education and TVET integration</li>
          <li>• Human performance and leadership innovation</li>
        </ul>
      </Card>

      <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
        <div className="flex items-center gap-4">
          <Globe className="w-12 h-12 text-blue-600" />
          <h3 className="text-xl font-semibold text-gray-900">
            Join a Truly Global Forum
          </h3>
        </div>
        <p className="text-gray-600 text-sm">
          Participate in an interactive platform that not only explores “what’s
          next” but demonstrates “how to adapt” to the evolving global defence
          and aviation environment.
        </p>
        <ul className="space-y-2 text-xs text-gray-600 mt-3">
          <li>• Interactive dialogue sessions</li>
          <li>• Case studies and live strategy discussions</li>
          <li>• Global collaboration for capability advancement</li>
        </ul>
      </Card>

      <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
        <div className="flex items-center gap-4">
          <RocketIcon className="w-12 h-12 text-blue-600" />
          <h3 className="text-xl font-semibold text-gray-900">
            Experience Innovation in Action
          </h3>
        </div>
        <p className="text-gray-600 text-sm">
          Engage in demonstrations and discussions that highlight practical
          innovation in defence training, aviation systems, and emerging
          technologies.
        </p>
        <ul className="space-y-2 text-xs text-gray-600 mt-3">
          <li>• Live technology showcases</li>
          <li>• Simulation and AI demonstrations</li>
          <li>• Applied research and pilot programs</li>
        </ul>
      </Card>
    </div>
  </div>
</section>

  {/* CTA Section */}
  <section className="relative z-10 bg-white py-20">
    <div className="mx-auto">
      <Card className="p-12 bg-gradient-to-br from-blue-600 to-blue-800 text-white text-center border-0 shadow-2xl rounded-none">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Shape Global Defence and Aviation Excellence?</h2>
          <p className="text-xl mb-8 opacity-90">
            Don't miss this opportunity to connect with defence leaders, aviation innovators, and education experts. 
            Join GDAS 2025 and be part of building the next generation of military and aerospace professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={'/submission'}>
              <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 font-semibold px-8">
                Submit Paper
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href={'/register'}>
              <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 font-semibold px-8">
                Register Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  </section>
<section className="relative z-10 py-20 bg-white">
  <div className="max-w-screen-2xl mx-auto px-4 text-center">
    <h2 className="text-4xl md:text-5xl font-medium leading-tight text-gray-900 mb-12 ">
      Target Audience
    </h2>
    <p className="max-w-3xl mx-auto text-gray-600 mb-10 text-lg">
      GDAS 2025 is designed for decision-makers, innovators, and professionals
      driving transformation across the global defence, aviation, and education
      sectors.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
      <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          Defence & Air Force Leadership
        </h3>
        <p className="text-gray-600 text-sm">
          Senior defence officials, air-force commanders, procurement managers,
          and capability development leaders shaping future strategies.
        </p>
      </Card>

      <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          Aviation Industry Executives
        </h3>
        <p className="text-gray-600 text-sm">
          CEOs, system integrators, and manufacturers from aerospace, UAS,
          avionics, and autonomous technology companies.
        </p>
      </Card>

      <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          Training & Simulation Institutions
        </h3>
        <p className="text-gray-600 text-sm">
          Academic institutions, training providers, and research centers
          specializing in defence and aviation education.
        </p>
      </Card>

      <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          Human Capital & Leadership Experts
        </h3>
        <p className="text-gray-600 text-sm">
          Professionals in HR, skills development, and leadership programs
          focused on defence and aviation workforce excellence.
        </p>
      </Card>

      <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          Government & Policy Makers
        </h3>
        <p className="text-gray-600 text-sm">
          Officials from ministries, procurement agencies, and national TVET
          councils engaged in education, industry, and defence collaboration.
        </p>
      </Card>

      <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          International Delegations
        </h3>
        <p className="text-gray-600 text-sm">
          Representatives from global organizations seeking partnerships,
          innovation exchange, and capacity-building cooperation.
        </p>
      </Card>
    </div>
  </div>
</section>

      {/* Who Can Attend Section */}
   <section className="relative z-10 py-20 bg-white/50 overflow-hidden">
  
        <div className="absolute left-20 top-1/3 w-16 h-16 border-2 border-blue-300/30 rounded-lg rotate-45" style={{animation: 'float 5s ease-in-out infinite'}}></div>
        <div className="absolute right-24 top-1/2 w-12 h-12 border-2 border-blue-300/30 rounded-full" style={{animation: 'float 6s ease-in-out infinite reverse'}}></div>
        
        <div className="max-w-screen-2xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl lg:text-5xl font-medium text-gray-900 text-center mb-16">Who Can Attend</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Academics & Researchers</h3>
              <p className="text-gray-600">Present your research, exchange knowledge, and collaborate with peers to advance AI and robotics technologies.</p>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Industry Professionals</h3>
              <p className="text-gray-600">Explore innovative solutions and technologies that can drive intelligent automation and growth in your industry.</p>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Policymakers & Government Officials</h3>
              <p className="text-gray-600">Gain insights to develop and implement policies supporting AI ethics, robotics integration, and technological innovation.</p>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Entrepreneurs & Startups</h3>
              <p className="text-gray-600">Discover new trends, technologies, and collaboration opportunities to fuel AI and robotics business growth.</p>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Students & Emerging Scholars</h3>
              <p className="text-gray-600">Learn from experts, showcase your research, and build networks to kickstart your career in AI and robotics innovation.</p>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Tech Advocates & Thought Leaders</h3>
              <p className="text-gray-600">Connect with innovators and explore strategies for driving responsible AI development and positive technological change.</p>
            </Card>
          </div>
        </div>
        
        {/* Add this style tag at the end of your component or in your global CSS */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
        `}</style>
      </section>
    
    </div>
  )
}
