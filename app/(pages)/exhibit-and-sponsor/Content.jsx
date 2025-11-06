"use client"
import { Building, Star, Trophy, Users, Zap, Globe, ArrowRight, CheckCircle, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

import { useState } from "react"
import {  Award, Sparkles  } from "lucide-react"
import { SponsorshipPackage } from "./components/sponsorship-package"
import { CCavenuePaymentForm } from "./components/payment-form"
import Link from "next/link"

export default function ExhibitSponsorPage() {
    const [selectedPackage, setSelectedPackage] = useState(null)
    const [isPaymentFormOpen, setIsPaymentFormOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
  
    const handlePackageSelect = (packageData) => {
      setSelectedPackage(packageData)
      setIsPaymentFormOpen(true)
    }
  
    const handlePaymentFormClose = () => {
      setIsPaymentFormOpen(false)
    }
  
    const handlePaymentFormSubmit = async (formData) => {
      setIsLoading(true)
      try {
        // Combine package data with form data
        const paymentData = {
          ...formData,
          order_id: `SPONSOR-${Date.now()}`,
          currency: "USD",
          amount: selectedPackage.price,
          redirect_url: `${window.location.origin}/api/ccavenue/handle`,
          cancel_url: `${window.location.origin}/api/ccavenue/handle`,
          language: "EN",
          package_name: selectedPackage.title,
          package_type: "Sponsorship",
        }
  
        // Send notification email
        await fetch("/api/payment-notification", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(paymentData),
        })
  
        // Get encrypted order data
        const encResponse = await fetch("/api/ccavenue/encrypt", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(paymentData),
        })
  
        const { encRequest } = await encResponse.json()
  
        // Create and submit form to CCAvenue
        const form = document.createElement("form")
        form.method = "post"
        // Use the exact CCAvenue URL with the command parameter
        form.action = "https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction"
        form.style.display = "none"
  
        const encRequestInput = document.createElement("input")
        encRequestInput.name = "encRequest"
        encRequestInput.value = encRequest
        form.appendChild(encRequestInput)
  
        const accessCodeInput = document.createElement("input")
        accessCodeInput.name = "access_code"
        accessCodeInput.value = process.env.NEXT_PUBLIC_CCAVENUE_ACCESS_CODE
        form.appendChild(accessCodeInput)
  
        // Add merchant_id as well
        const merchantIdInput = document.createElement("input")
        merchantIdInput.name = "merchant_id"
        merchantIdInput.value = process.env.NEXT_PUBLIC_CCAVENUE_MERCHANT_ID
        form.appendChild(merchantIdInput)
  
        document.body.appendChild(form)
        form.submit()
      } catch (error) {
        console.error("Payment processing error:", error)
        setIsLoading(false)
        alert("There was an error processing your payment. Please try again.")
      }
    }
  
    // Sponsorship packages data
    const sponsorshipPackages = [
      {
        title: "Platinum",
        price: 15000,
        color: "from-[#4d724d] to-[#3c5c3c]",
        icon: <Award className="h-8 w-8 text-black" />,
        benefits: [
          "1 VIP participating in the conference",
          "Complementary registration for 12 Students and 5 Faculties",
          "Stage honor to the Sponsor Party",
          "Full Page add on the conference proceeding book",
          "Brand carried in all website and promotional activities",
          "Event called by title sponsor",
          "Networking opportunities with different delegates",
          "Media Coverage",
          "2 Feedback video bites featured on YouTube channel",
        ],
      },
      {
        title: "Diamond",
        price: 12000,
        color: "from-[#5d8a5d] to-[#4d724d]",
        icon: <Sparkles className="h-8 w-8 text-[black]" />,
        benefits: [
          "1 Session Chair participating from the sponsor side",
          "Complementary registration for 10 Students and 3 Faculties",
          "Full Page add on the conference proceeding book",
          "Brand carried in all website and promotional activities",
          "Public announcement recognizing the Sponsor",
          "Networking opportunities with different delegates",
          "Logo used on all website activities and campaigns",
          "5 minutes slot for media Coverage",
          "1 Feedback video featured on the YouTube channel",
        ],
      },
      {
        title: "Gold",
        price: 10000,
        color: "from-[#b9d4a3] to-[#8fb573]",
        icon: <Star className="h-8 w-8 text-[black]" />,
        benefits: [
          "Complementary registration for 8 Students and 2 Faculties",
          "Full page add on conference proceedings",
          "Announcement recognition of the sponsor during valedictory",
          "Logos used in all promotional materials",
          "One anchor can join from the sponsor side",
          "Networking opportunities with different delegates",
          "A standee of the sponsor side on the registration desk",
        ],
      },
      {
        title: "Silver",
        price: 7500,
        color: "from-[#d3e4c5] to-[#b9d4a3]",
        icon: <Zap className="h-8 w-8 text-[black]" />,
        benefits: [
          "Complementary registration for 5 Students and 1 Faculty",
          "2 volunteers at the registration desk from the sponsor side",
          "Half page add on Conference proceeding book",
          "Brand carried out in few promotional activities",
          "Networking opportunities with different delegates",
          "Print media coverage",
        ],
      },
    ]
  
  return (
    <div className="min-h-full bg-gray-100 relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
          `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>


      {/* Exhibition Opportunities Section */}
      <section className="py-16 bg-white z-10 relative shadow-2xl">
        <div className="container mx-auto px-4">
         
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sponsorshipPackages.map((pkg, index) => (
              <SponsorshipPackage
                key={index}
                title={pkg.title}
                price={pkg.price}
                color={pkg.color}
                icon={pkg.icon}
                benefits={pkg.benefits}
                onSelect={() => handlePackageSelect(pkg)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact and CTA Section */}
      <section className="relative z-10 py-20 bg-white">
        <div className="container mx-auto px-4">
          <Card className="p-12 bg-gradient-to-r from-blue-800 to-blue-600 text-white text-center border-0 shadow-2xl">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 ">Ready to Partner With Us?</h2>
              <p className="text-xl mb-8 opacity-90 drop-shadow-2xl text-white">
                Don't miss this opportunity to showcase your innovations and connect with the global 
                community. Limited exhibition spaces and sponsorship opportunities available.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 ">
                <Card className="p-6 bg-white/20 backdrop-blur-sm border-0">
                  <div className="text-center text-white">
                    <Mail className="w-8 h-8 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2 drop-shadow-2xl">Email Us</h3>
                    <p className="text-sm  mb-3 drop-shadow-2xl">Get detailed sponsorship and exhibition information</p>
                    <p className="font-semibold">info@gdasconference.com</p>
                  </div>
                </Card>
                <Card className="p-6 bg-white/20 backdrop-blur-sm border-0">
                  <div className="text-center text-white">
                    <Phone className="w-8 h-8 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                    <p className="text-sm  mb-3 drop-shadow-2xl">Speak directly with our partnerships team</p>
                    <p className="font-semibold">+91 92373 88328</p>
                  </div>
                </Card>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={'/contact'}>
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8">
                  Contact us for Exlucsive Discount 
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                </Link>
                 <Link href={'/submission'}>
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8">
                  Submit Paper
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                </Link>
              </div>

              
            </div>
          </Card>
        </div>
      </section>

      {/* Background decorative elements */}
      <CCavenuePaymentForm
        isOpen={isPaymentFormOpen}
        onClose={handlePaymentFormClose}
        packageName={selectedPackage?.title}
        amount={selectedPackage?.price || 0}
        onSubmit={handlePaymentFormSubmit}
        isLoading={isLoading}
      />
    </div>
  )
}
