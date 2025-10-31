"use client"

import { useEffect, useState } from "react"
import { Users, Globe, Award, Loader2, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

import pb from "@/lib/pocketbase"
import Link from "next/link"

// Committee member type based on the Pocketbase response

export default function CommitteePage() {
  const [committeeMembers, setCommitteeMembers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCommitteeMembers = async () => {
      try {
      
        const records = await pb.collection("GDAS_committee").getFullList({
          sort: "name",
        })
        setCommitteeMembers(records)
        setLoading(false)
      } catch (err) {
        console.error("Error fetching committee members:", err)
        setError("Failed to load committee members. Please try again later.")
        setLoading(false)
      }
    }

    fetchCommitteeMembers()
  }, [])

  return (
    <div className="min-h-full bg-gray-100 relative overflow-hidden">

      {/* Committee Members Section */}
      <section className=" py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            
            <h2 className="text-4xl md:text-6xl font-medium text-gray-900 mb-6 ">Our Committee Members</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
         Bringing together Ministers, Defence Leaders, University Chancellors, TVET Council Heads, and Aviation Industry Executives from across Europe and Asia, our committee embodies the spirit of collaboration and innovation that defines this summit.
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="w-12 h-12 text-purple-500 animate-spin" />
              <span className="ml-3 text-lg text-gray-600">Loading committee members...</span>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <Card className="p-8 bg-gray-50 backdrop-blur-sm border-0 shadow-lg max-w-lg mx-auto">
                <div className="text-red-500 mb-4 text-4xl">⚠️</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Error Loading Committee</h3>
                <p className="text-gray-600 mb-6">{error}</p>
                <Button
                  onClick={() => window.location.reload()}
                  className="bg-purple-500 hover:bg-purple-600 text-white"
                >
                  Try Again
                </Button>
              </Card>
            </div>
          ) : committeeMembers.length === 0 ? (
            <div className="text-center py-12">
              <Card className="p-8 bg-gray-50 backdrop-blur-sm border-0 shadow-lg max-w-lg mx-auto">
                <div className="text-gray-400 mb-4 text-4xl">👥</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No Committee Members Found</h3>
                <p className="text-gray-600">Committee information will be available soon.</p>
              </Card>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {committeeMembers.map((member) => (
                  <CommitteeMemberCard key={member.id} member={member} />
                ))}
              </div>

              {/* Committee Stats */}
              <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="p-6 bg-gray-50 backdrop-blur-sm border-0 shadow-lg text-center">
                  <div className="text-5xl font-medium text-blue-500 ">{committeeMembers.length}</div>
                  <h3 className="font-semibold text-gray-900">Expert Members</h3>
                  <p className="text-gray-600 text-sm">Distinguished professionals from around the world</p>
                </Card>
                <Card className="p-6 bg-gray-50 backdrop-blur-sm border-0 shadow-lg text-center">
                  <div className="text-5xl font-medium text-blue-500 ">
                    {new Set(committeeMembers.map((m) => m.country)).size}
                  </div>
                  <h3 className="font-semibold text-gray-900 ">Countries</h3>
                  <p className="text-gray-600 text-sm">Global representation and diverse perspectives</p>
                </Card>
                <Card className="p-6 bg-gray-50 backdrop-blur-sm border-0 shadow-lg text-center">
                  <div className="text-5xl font-medium text-blue-500 ">100%</div>
                  <h3 className="font-semibold text-gray-900">Excellence</h3>
                  <p className="text-gray-600 text-sm">Committed to delivering outstanding conference experience</p>
                </Card>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Join Committee CTA Section */}
      <section className=" py-20 bg-white">
        <div className="container mx-auto px-4">
          <Card className="p-12 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-center border-0 shadow-2xl">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Interested in Joining Our Committee?</h2>
              <p className="text-xl mb-8 opacity-90">
              We’re inviting visionary leaders and distinguished experts to join us in shaping the success of the Global Defence & Aviation Skills Leadership Summit 2025 (GDAS 2025).
If you are passionate about advancing higher education, TVET, and workforce development in defence, aviation, and aerospace — and wish to contribute to building a world-class ecosystem of future-ready professionals — we would be honored to hear from you.
              </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
  <Card className="p-6 bg-white/10 backdrop-blur-sm border-0">
    <div className="text-center text-white">
      <Users className="w-12 h-12 mx-auto mb-4" />
      <h3 className="text-lg font-semibold mb-2">Collaboration</h3>
      <p className="text-sm opacity-90">
        Connect with ministers, defence leaders, and global aviation experts
      </p>
    </div>
  </Card>
  
  <Card className="p-6 bg-white/10 backdrop-blur-sm border-0">
    <div className="text-center text-white">
      <Award className="w-12 h-12 mx-auto mb-4" />
      <h3 className="text-lg font-semibold mb-2">Leadership</h3>
      <p className="text-sm opacity-90">
        Showcase your expertise and play a key role in shaping the future of defence and aviation education
      </p>
    </div>
  </Card>
  
  <Card className="p-6 bg-white/10 backdrop-blur-sm border-0">
    <div className="text-center text-white">
      <Globe className="w-12 h-12 mx-auto mb-4" />
      <h3 className="text-lg font-semibold mb-2">Global Impact</h3>
      <p className="text-sm opacity-90">
        Contribute to international collaboration and the advancement of world-class military and aviation training
      </p>
    </div>
  </Card>
</div>

 <Link href={'/registration'}>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8">
                Apply to Join Committee
              </Button>

              </Link>
            </div>
          </Card>
        </div>
      </section>


    </div>
  )
}



function CommitteeMemberCard({ member }) {
  // Default image if member.img is not available
  const imageUrl = member.img
    ? `https://test.zepresearch.com/api/files/GDAS_committee/${member.id}/${member.img}`
    : "/placeholder.svg?height=300&width=300"

  return (
    <Card className="p-6 bg-gray-50 backdrop-blur-sm border-0 shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col items-center text-center">
        <div className="w-56 h-56 rounded-full overflow-hidden mb-4 border-4 border-gray-200 shadow-lg">
          <img src={imageUrl || "/placeholder.svg"} alt={member.name} className="w-full h-full object-contain" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
        <p className="text-sm font-medium px-4 py-2 rounded-lg mb-3 bg-gray-50 border text-blue-500">
          {member.designation}
        </p>
        <div className="flex items-center space-x-1 mb-3 text-gray-800 text-sm">
          <MapPin className="w-4 h-4" />
          <span>{member.country}</span>
        </div>
        <p className="text-gray-800 text-sm leading-relaxed">{member.details}</p>
      </div>
    </Card>
  )
}
