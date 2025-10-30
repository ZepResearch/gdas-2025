import React from 'react'
import VenuePage from './Content'
// import { venueMetadata } from '@/components/metadata'

// export const metadata = venueMetadata
function page() {
  return (
    
    <div>
          <div className="relative h-96  overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center grayscale-100"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1566914447826-bf04e54bf1be?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2062)",
            backgroundPosition: "center",
          }}
        >
        </div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-blue-500/50"></div>
        {/* Hero Content */}
        <div className="relative h-full flex flex-col justify-center items-start px-4 max-w-screen-2xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-medium   leading-tight text-white mb-2"> Venue</h1>
          <p className="text-xl text-white/90">Learn more about our GDAS 2025</p>
        </div>

      </div>
    <VenuePage/></div>
  )
}

export default page