import { MapPin, Clock, Wifi, Car, Utensils, Camera, Building, ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function VenuePage() {
  return (
    <div className="min-h-screen bg-gray-100 relative overflow-hidden">
      {/* Background grid pattern */}
    

      {/* Hero Section */}
  
    {/* Conference Venue Section */}
<section className="relative z-10 py-20 bg-white/50">
  <div className="max-w-7xl mx-auto px-4">
    <div className="max-w-4xl mx-auto text-center mb-16">
      <h2 className="text-4xl lg:text-5xl font-medium text-gray-900 mb-6 ">Conference Venue</h2>
      <p className="text-lg text-gray-600 leading-relaxed">
        The <strong>Global Defence and Aviation Skills Conference 2025  (GDAS 2025)</strong> will take place at the prestigious <strong>Auditorium of The Royal Malaysian Air Force Leisure  Club</strong> in Selangor, Malaysia. 
        This elegant venue provides a sophisticated setting equipped with modern facilities, ideal for high-level discussions and international collaboration in defence, aviation, and higher education sectors.
      </p>
    </div>

    <div className="relative w-full h-[350px] mb-12 rounded-xl overflow-hidden shadow-2xl">
      <img 
        src="/assets/venue.webp" 
        alt="  Auditorium of The Royal Malaysian Air Force Leisure  Club"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-center"></div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Venue Highlights</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Main Ballroom Capacity</span>
            <span className="font-semibold text-gray-900">Up to 1,000 delegates</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Exhibition & Networking Area</span>
            <span className="font-semibold text-gray-900">4,500 sq. ft.</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Breakout & VIP Meeting Rooms</span>
            <span className="font-semibold text-gray-900">10+ rooms</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Conference Facilities</span>
            <span className="font-semibold text-gray-900">State-of-the-art AV systems</span>
          </div>
        </div>
      </Card>

      <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Accessibility Features</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <span className="text-gray-700">Wheelchair-accessible entrances and facilities</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <span className="text-gray-700">Elevators to all event floors</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <span className="text-gray-700">Designated accessibility support staff</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <span className="text-gray-700">On-site parking with accessible spaces</span>
          </div>
        </div>
      </Card>
    </div>
  </div>
</section>

{/* Location with Google Map Section */}
<section className="relative z-10 py-20 bg-blue-50">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-4xl lg:text-5xl font-medium text-gray-900 text-center mb-16 ">Location</h2>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      <div className="space-y-6">
        <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Venue</h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-yellow-500 mt-1" />
              <div>
                <p className="font-semibold text-gray-900">Address</p>
                <p className="text-gray-600">
                 Auditorium of The Royal Malaysian Air Force Leisure  Club, Jalan Tudm, Tentera Udara Diraja Malaysia Subang, 40150 Shah Alam, Selangor, Malaysia
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Clock className="w-5 h-5 text-yellow-500 mt-1" />
              <div>
                <p className="font-semibold text-gray-900">Operating Hours</p>
                <p className="text-gray-600">24 hours during the summit days</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Car className="w-5 h-5 text-yellow-500 mt-1" />
              <div>
                <p className="font-semibold text-gray-900">Transportation</p>
                <p className="text-gray-600">
                  15 minutes from Sultan Abdul Aziz Shah Airport (Subang Airport)
                </p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Getting There</h3>
          <div className="space-y-3 text-sm">
            <div>
              <p className="font-semibold text-gray-900">From Kuala Lumpur International Airport (KLIA)</p>
              <p className="text-gray-600">
                Approximately 40 minutes by taxi or ride-sharing services via ELITE Highway.
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">By Train</p>
              <p className="text-gray-600">
                Nearest station: Subang Jaya LRT/KTM — 10 minutes drive to the venue.
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">By Car</p>
              <p className="text-gray-600">
                Complimentary on-site parking and valet service available for delegates.
              </p>
            </div>
          </div>
        </Card>
      </div>
      <Card className="p-4 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Interactive Map</h3>
        <div className="w-full h-96 rounded-lg overflow-hidden">
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63742.16259184445!2d101.5369652!3d3.1250565!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4e05584bc271%3A0x4c19c2c4a4259972!2sAir%20Force%20Recreation%20Club!5e0!3m2!1sen!2sin!4v1762177205572!5m2!1sen!2sin"
              width='100%'
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="  Auditorium of The Royal Malaysian Air Force Leisure  Club"
          ></iframe>
        </div>
      </Card>
    </div>
  </div>
</section>


      {/* Nearby Attractions Section */}
     {/* Nearby Attractions Section */}
<section className="relative z-10 py-20 bg-white/50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl lg:text-5xl font-medium text-gray-900 text-center mb-4">
          Recreational & Leisure Activities in Selangor
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
          For Early-Arrived Participants: Selangor offers a range of cultural, leisure, and outdoor activities for guests who arrive early. These experiences highlight the state's natural beauty, religious landmarks, and modern attractions providing a relaxing and memorable start before the summit begins.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* KRTU Golf */}
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=3570"
              alt="Golf Course"
              className="h-[300px] w-full object-cover rounded-lg mb-4"
            />
            <div className="flex items-center space-x-2 mb-3">
              <h3 className="text-xl font-semibold text-gray-900">Golf at KRTU</h3>
            </div>
            <p className="text-gray-700 font-medium mb-2">Royal Malaysian Air Force College</p>
            <p className="text-gray-600 mb-4">
              Located at the Royal Malaysian Air Force College in Subang, the KRTU golf course provides a serene and prestigious golfing experience. Surrounded by lush greenery and well-maintained fairways, participants can enjoy a peaceful morning or afternoon while networking in a relaxed environment.
            </p>
            <div className="space-y-1 text-sm text-gray-600">
              <p>• Scenic 18-hole course</p>
              <p>• Calm military-established environment</p>
              <p>• Ideal for leisurely recreation & networking</p>
            </div>
          </Card>

          {/* Blue Mosque */}
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg rounded-lg">
            <img
              src="/nearby/SA_Blue_Mosque.jpg"
              alt="Sultan Salahuddin Abdul Aziz Shah Blue Mosque"
              className="h-[300px] w-full object-cover rounded-lg mb-4"
            />
            <div className="flex items-center space-x-2 mb-3">
              <h3 className="text-xl font-semibold text-gray-900">Sultan Salahuddin Abdul Aziz Shah Blue Mosque</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Known as the Blue Mosque, this iconic landmark in Shah Alam is one of the largest mosques in Southeast Asia. Its impressive blue dome and towering minarets are complemented by beautiful Islamic architecture and serene gardens. Visitors may explore the mosque grounds and appreciate the spiritual and cultural ambience.
            </p>
            <div className="space-y-1 text-sm text-gray-600">
              <p>• Spectacular architecture and spiritual atmosphere</p>
              <p>• Cultural learning opportunity</p>
              <p>• Photography-friendly surroundings</p>
            </div>
          </Card>

          {/* I-City */}
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg rounded-lg">
            <img
              src="/nearby/city.jpg"
              alt="I-City Shah Alam"
              className="h-[300px] w-full object-cover rounded-lg mb-4"
            />
            <div className="flex items-center space-x-2 mb-3">
              <h3 className="text-xl font-semibold text-gray-900">I-City Shah Alam</h3>
            </div>
            <p className="text-gray-600 mb-4">
              I-City is a vibrant modern leisure hub offering technological attractions, theme parks, and night-time light installations. Known as the "City of Digital Lights," it provides entertainment for all ages from museums and rides to vibrant outdoor LED displays.
            </p>
            <div className="space-y-1 text-sm text-gray-600">
              <p>• City of Digital Lights</p>
              <p>• Snowalk indoor winter park</p>
              <p>• Family-friendly entertainment & dining options</p>
            </div>
          </Card>

          {/* Flying Fox */}
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg rounded-lg">
            <img
              src="/nearby/skytrex.jpeg"
              alt="Flying Fox Adventure"
              className="h-[300px] w-full object-cover rounded-lg mb-4"
            />
            <div className="flex items-center space-x-2 mb-3">
              <h3 className="text-xl font-semibold text-gray-900">Flying Fox at Shah Alam Lake Gardens</h3>
            </div>
            <p className="text-gray-600 mb-4">
              For adventure enthusiasts, the Shah Alam Lake Gardens offers a Flying Fox (zipline) experience in a scenic nature setting. Participants can enjoy a dose of adrenaline while taking in the peaceful lake views and surrounding parkland.
            </p>
            <div className="space-y-1 text-sm text-gray-600">
              <p>• Safe and exciting outdoor activity</p>
              <p>• Beautiful lakeside scenery</p>
              <p>• Suitable for fun team-bonding moments</p>
            </div>
          </Card>
        </div>
      </div>
    </section>

      {/* Dining Options Section */}
      {/* <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-16 font-serif">Dining Options</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <Utensils className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Fine Dining</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">CÉ LA VIE</h4>
                  <p className="text-sm text-gray-600">Contemporary cuisine with stunning city views</p>
                  <div className="flex items-center space-x-1 mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Waku Ghin</h4>
                  <p className="text-sm text-gray-600">Japanese-European fusion by celebrity chef Tetsuya Wakuda</p>
                  <div className="flex items-center space-x-1 mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <Utensils className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Casual Dining</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">Food Court at The Shoppes</h4>
                  <p className="text-sm text-gray-600">Diverse international cuisine options</p>
                  <div className="flex items-center space-x-1 mt-1">
                    {[1, 2, 3, 4].map((star) => (
                      <Star key={star} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                    <Star className="w-3 h-3 text-gray-300" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Lavo Italian Restaurant</h4>
                  <p className="text-sm text-gray-600">Modern Italian cuisine in a vibrant atmosphere</p>
                  <div className="flex items-center space-x-1 mt-1">
                    {[1, 2, 3, 4].map((star) => (
                      <Star key={star} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                    <Star className="w-3 h-3 text-gray-300" />
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Local Cuisine</h3>
              <p className="text-gray-600 text-sm">
                Experience authentic Singaporean dishes at nearby hawker centers and local restaurants.
              </p>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Options</h3>
              <p className="text-gray-600 text-sm">
                Round-the-clock dining available at the hotel and nearby establishments for your convenience.
              </p>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-teal-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Special Dietary</h3>
              <p className="text-gray-600 text-sm">
                Vegetarian, vegan, halal, and other dietary requirements accommodated at most venues.
              </p>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Ready to Join Us CTA Section */}
      <section className="relative z-10 py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <Card className="p-12 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-center border-0 shadow-2xl">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Join Us?</h2>
              <p className="text-xl mb-8 opacity-90">
                Experience the future of AI and robotics in one of the world's most innovative cities. We
                offers the perfect backdrop for groundbreaking discoveries and meaningful connections.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-left">
                <div className="bg-white/30 backdrop-blur-sm rounded-lg p-4">
                  <MapPin className="w-8 h-8 mb-3" />
                  <h3 className="font-semibold mb-2">Prime Location</h3>
                  <p className="text-sm opacity-90">Heart of Singapore's business and innovation district</p>
                </div>
                <div className="bg-white/30 backdrop-blur-sm rounded-lg p-4">
                  <Building className="w-8 h-8 mb-3" />
                  <h3 className="font-semibold mb-2">World-Class Venue</h3>
                  <p className="text-sm opacity-90">State-of-the-art facilities and premium amenities</p>
                </div>
                <div className="bg-white/30 backdrop-blur-sm rounded-lg p-4">
                  <Star className="w-8 h-8 mb-3" />
                  <h3 className="font-semibold mb-2">Unforgettable Experience</h3>
                  <p className="text-sm opacity-90">Combine learning with Singapore's attractions and culture</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/registration" >
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8">
                  Register Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                </Link>
                <Link href="/schedule">
                <Button
                  size="lg"
                    className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8"                >
                  View schedule
                </Button>
                </Link>


              </div>

             
            </div>
          </Card>
        </div>
      </section>

      {/* Background decorative elements */}
    
    </div>
  )
}
