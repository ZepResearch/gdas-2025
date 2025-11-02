import React from 'react'
import ExhibitSponsorPage from './Content'
import { exhibitSponsorMetadata } from '@/components/metadata'

export const metadata = exhibitSponsorMetadata
function page() {
  return (
    <div>
      <div className="relative h-96  overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center grayscale-100"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1672917187338-7f81ecac3d3f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2062)",
            backgroundPosition: "center",
          }}
        >
        </div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/60 to-blue-500/50"></div>
        {/* Hero Content */}
        <div className="relative h-full flex flex-col justify-center items-start px-4 max-w-screen-2xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-medium   leading-tight text-white mb-2">Exhibition & Sponsor</h1>
          <p className="text-xl text-white/90 w-4xl">  Select the sponsorship package that best suits your organization's goals and budget</p>
        </div>

      </div>
      <ExhibitSponsorPage/></div>
  )
}

export default page