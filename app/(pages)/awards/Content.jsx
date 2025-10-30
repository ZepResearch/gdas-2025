import { Award, Trophy, Star, Medal, Users, ArrowRight, GraduationCap, Shield, Plane } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AwardsPage() {
  const awards = [
    {
      title: "BEST PAPER PRESENTATION AWARD",
      description: "Recognizing outstanding research presentation and communication skills in defence and aviation education",
      icon: <Trophy className="h-8 w-8 text-blue-600" />,
    },
    {
      title: "BEST PAPER AWARD",
      description: "Honoring the most impactful presentation in each summit session",
      icon: <Star className="h-8 w-8 text-blue-600" />,
    },
    {
      title: "Best International Student Presentation Award",
      description: "Celebrating exceptional presentations by student researchers in TVET and higher education",
      icon: <Users className="h-8 w-8 text-blue-600" />,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(30,64,175,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(30,64,175,0.1) 1px, transparent 1px)
          `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

    

      {/* Scholarship Section */}
      <section className="relative z-10 py-20 bg-gradient-to-r from-blue-500 to-blue-700">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <GraduationCap className="h-12 w-12 text-white" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Zep Research & DSAK Grants and Scholarships
            </h2>
            <p className="text-lg text-white/90 max-w-4xl mx-auto leading-relaxed">
              Zep Research and DSAK are dedicated to helping young scholars achieve their research and academic goals
              in defence and aviation education, while encouraging the application of interdisciplinary study to their
              work.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Main Content Card */}
            <Card className="p-8 bg-white/95 backdrop-blur-sm border-0 shadow-xl">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Scholarship Coverage</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Zep Research and DSAK offer full or partial scholarships covering summit registration fees to
                    select postgraduate students and early career academics who might not otherwise have the financial
                    resources to attend our executive summit.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                    <p className="text-green-800 font-medium">
                      <strong>Special Benefit:</strong> A 50% fee would be refunded to the best paper and best paper
                      presenters.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Who can receive Zep Research & DSAK's grant or scholarship?
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Awards are based on the appropriateness of the educational opportunity in relation to the
                    applicant's field of study in defence, aviation, or TVET education, financial need, and
                    contributions to their community and to our mission of advancing military and aviation expertise.
                    Scholarships will be awarded based on the availability of funds and will vary with the summit.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">How are recipients selected?</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The Summit Program Committee will award scholarships to eligible applicants who have submitted
                    exceptional abstracts that have passed the blind peer review process and been accepted for
                    presentation at GDAS 2025. Another chance to receive the scholarship is for those who present their
                    research work exceptionally at the summit.
                  </p>
                </div>
              </div>
            </Card>

            {/* Call to Action */}
            <div className="text-center">
              <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20 border text-white">
                <h3 className="text-2xl font-bold mb-4">Apply for Scholarship Today</h3>
                <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                  Don't let financial constraints hold you back from presenting your groundbreaking research in defence
                  and aviation education.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/submission">
                    <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8">
                      Submit Your Paper
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Summit Awards Section */}
      <div className="min-h-full py-16 px-4 sm:px-6 lg:px-8 bg-white relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-semibold mb-4 font-serif">Summit Awards</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Recognizing excellence in defence and aviation education research and presentation at GDAS 2025
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
            {awards.map((award, index) => (
              <Card
                key={index}
                className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-blue-600"
              >
                <CardHeader className="flex flex-col items-center pb-2">
                  <div className="rounded-full p-3 mb-4 bg-blue-50">{award.icon}</div>
                  <CardTitle className="text-xl font-bold text-center drop-shadow-sm uppercase text-gray-900">
                    {award.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">{award.description}</CardDescription>
                </CardContent>
                <div className="px-6 pb-4 flex justify-center">
                  <Badge className="bg-blue-100 text-blue-900 hover:bg-blue-200">Prestigious Award</Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Awards Call to Action Section */}
      <section className="relative z-10 py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <Card className="p-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center border-0 shadow-2xl">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Don't Miss Your Chance to Win!</h2>
              <p className="text-lg mb-8 opacity-90">
                Submit your groundbreaking research in defence and aviation education and join the ranks of
                distinguished GDAS 2025 award winners. Recognition at our summit can be a career-defining moment and
                open doors to new opportunities in military and aviation sectors.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card className="p-6 bg-white/10 backdrop-blur-sm border-0">
                  <div className="text-center text-white">
                    <Trophy className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Prestigious Recognition</h3>
                    <p className="text-sm opacity-90">
                      Join an elite group of researchers recognized for excellence in TVET and higher education
                    </p>
                  </div>
                </Card>
                <Card className="p-6 bg-white/10 backdrop-blur-sm border-0">
                  <div className="text-center text-white">
                    <Award className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Career Advancement</h3>
                    <p className="text-sm opacity-90">
                      Enhance your CV with internationally recognized awards in defence and aviation education
                    </p>
                  </div>
                </Card>
                <Card className="p-6 bg-white/10 backdrop-blur-sm border-0">
                  <div className="text-center text-white">
                    <Star className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Publication Opportunities</h3>
                    <p className="text-sm opacity-90">Publication support for your research journey</p>
                  </div>
                </Card>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={"/submission"}>
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8">
                    Submit Your Paper
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href={"/papers-format"}>
                  <Button
                    size="lg"
                    className="border-white border-1 text-white hover:bg-white/10 font-semibold px-8"
                  >
                    View Submission Guidelines
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}