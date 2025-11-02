import DirectionSection from "@/components/venue"
import EventSection from "@/components/event-section"
import HeroSection from "@/components/hero-section"
import PhotoGallerySection from "@/components/photo-gallery-section"
import PricingSection from "@/components/pricing-section"
import SpeakerAnnouncement from "@/components/Cta-register"
import SponsorsSection from "@/components/Co-organizer"
import TimelineSection from "@/components/Timeline"
import SpeakerSection from "@/components/Speaker"
import { ConferenceFAQ } from "@/components/FAQ"
import WhyGDAS from "@/components/Why"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <EventSection/>
    <WhyGDAS/>
      {/* <SponsorsSection/> */}
      <TimelineSection/>
    <SpeakerSection/>
      <SpeakerAnnouncement/>
      <PricingSection/>
      <PhotoGallerySection/>
      <DirectionSection/>
      <ConferenceFAQ/>
    </main>
  )
}
