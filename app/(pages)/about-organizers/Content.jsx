import { Mic, MessageCircle } from "lucide-react"
import AboutSection from "./components/about"


export default function AboutOrganizerPage() {
  return (
    <div className="min-h-screen bg-white">
  
    <div className="relative h-96 overflow-hidden">
      <img
        src="/assets/about-organizer.webp"
        alt="About organizer"
        className="absolute inset-0 w-full h-full object-cover filter grayscale"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-blue-500/50"></div>
      {/* Hero Content */}
        <div className="relative h-full flex flex-col justify-center items-center px-4 max-w-screen-2xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-medium   leading-tight text-white mb-2">About Organizer</h1>
          <p className="text-xl text-white/90 max-w-4xl">GDAS 2025 is a collaborative initiative powered by Zep Research and DSAK Group of Companies, bringing together academic excellence, industrial expertise, and global innovation.</p>
        </div>

      </div>
<AboutSection/>
        {/* Main Content */}
       
    </div>
  )
}
