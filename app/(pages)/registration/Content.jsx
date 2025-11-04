"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Users, CreditCard, DollarSign, Check } from "lucide-react"
import { PaymentForm } from "./components/payment-form"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ExtraContentBelowTabs from "./components/ExtraContentBelowTabs"

export default function RegistrationPage() {
  const router = useRouter()
  const [selectedTicket, setSelectedTicket] = useState(null)
  const [isPaymentFormOpen, setIsPaymentFormOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [customAmount, setCustomAmount] = useState("")
  const [activeTab, setActiveTab] = useState("standard")

  const pricingData = [
    {
      category: "Students",
      price: 199,
      currency: "USD",
      features: [
        "Full conference access",
        "Student networking sessions",
        "Workshop materials",
        "Lunch and refreshments",
        "Certificate of participation",
        "Career guidance sessions",
      ],
    },
    {
      category: "Academicians",
      price: 299,
      currency: "USD",
      features: [
        "Full conference access",
        "VIP networking dinner",
        "Priority seating",
        "Exclusive roundtable sessions",
        "Workshop materials",
        "Certificate of participation",
      ],
    },
    {
      category: "Industrialist",
      price: 399,
      currency: "USD",
      features: [
        "Full conference access",
        "VIP networking dinner",
        "Priority seating",
        "Exclusive roundtable sessions",
        "Premium workshop materials",
        "Certificate of participation",
        "One-on-one consultation slot",
      ],
    },
  ]

  const handleTicketSelect = (ticket) => {
    // Recalculate tax and total to ensure consistency
    const taxAmount = Number((ticket.price * 0.06).toFixed(2))
    const totalAmount = Number((ticket.price + taxAmount).toFixed(2))

    // Set selectedTicket with properly calculated values
    setSelectedTicket({
      ...ticket,
      taxRate: 0.06,
      taxAmount: taxAmount,
      totalAmount: totalAmount,
    })
    setIsPaymentFormOpen(true)
  }

  const handleCustomPayment = () => {
    if (!customAmount || isNaN(customAmount) || Number.parseFloat(customAmount) <= 0) {
      alert("Please enter a valid amount")
      return
    }

    const price = Number.parseFloat(customAmount)
    const taxAmount = Number((price * 0.06).toFixed(2))
    const totalAmount = Number((price + taxAmount).toFixed(2))

    const ticket = {
      name: "Custom Payment",
      price: price,
      type: "Custom",
      category: "Custom",
      taxRate: 0.06,
      taxAmount: taxAmount,
      totalAmount: totalAmount,
      currency: "USD",
      features: ["Custom amount payment", "6% tax included"],
    }

    setSelectedTicket(ticket)
    setIsPaymentFormOpen(true)
  }

  const handlePaymentFormClose = () => {
    setIsPaymentFormOpen(false)
  }

  const handlePaymentFormSubmit = async (formData) => {
    setIsLoading(true)
    try {
      // Combine ticket data with form data
      const paymentData = {
        ...formData,
        order_id: `ORDER-${Date.now()}`,
        currency: selectedTicket.currency,
        amount: selectedTicket.totalAmount,
        redirect_url: `${window.location.origin}/api/ccavenue/handle`,
        cancel_url: `${window.location.origin}/api/ccavenue/handle`,
        language: "EN",
        ticket_type: selectedTicket.type,
        ticket_category: selectedTicket.category,
        ticket_name: selectedTicket.name,
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

  const renderPricingCard = (categoryData) => {
    const getCurrencySymbol = (currency) => (currency === "USD" ? "$" : "₹")

    return (
      <div
        key={categoryData.category}
        className="group bg-white rounded-2xl border border-blue-100 overflow-hidden shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex flex-col min-h-[600px]"
      >
        <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 p-8 h-64 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent"></div>
          <div className="relative z-10">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-2">
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-white text-blue-700 shadow-md">
                  {categoryData.category}
                </span>
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm p-0.5 shadow-lg">
                <div className="flex h-full w-full items-center justify-center rounded-xl bg-white">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </div>

            <div className="space-y-3 mt-8">
              <div className="flex flex-col space-y-1">
                <span className="text-sm text-blue-100 font-medium">Registration Price</span>
                <span className="text-5xl font-bold text-white">
                  {getCurrencySymbol(categoryData.currency)}
                  {categoryData.price}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 flex flex-col flex-1 bg-gradient-to-b from-blue-50/50 to-white">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-blue-900 mb-6 uppercase tracking-wide">What's Included</h3>
            <ul className="space-y-4 mb-8">
              {categoryData.features.map((feature, i) => (
                <li key={i} className="flex items-start group/item">
                  <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0 shadow-md group-hover/item:scale-110 transition-transform">
                    <Check className="h-4 w-4 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <Button
            onClick={() =>
              handleTicketSelect({
                name: `${categoryData.category} Registration`,
                price: categoryData.price,
                currency: categoryData.currency,
                type: categoryData.category,
                category: categoryData.category,
              })
            }
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl py-6 font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <CreditCard className="mr-2 h-5 w-5 text-white" />
            Register Now - ${categoryData.price}
          </Button>
        </div>
      </div>
    )
  }

  return (
    <main className="bg-gradient-to-b from-blue-50 to-white min-h-full">
      {/* Registration Cards */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-medium  mb-4">
              Registration Options
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Choose the perfect plan for your conference experience</p>
          </div>

          <Tabs defaultValue="standard" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-12">
              <TabsList className="bg-white border border-blue-100 p-1.5 rounded-2xl shadow-lg">
                <TabsTrigger
                  value="standard"
                  className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-blue-700 data-[state=active]:text-white data-[state=active]:shadow-md px-8 py-3 font-medium transition-all duration-300"
                >
                  <Users className="mr-2 h-5 w-5" />
                  Standard Registration
                </TabsTrigger>
                <TabsTrigger
                  value="custom"
                  className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-blue-700 data-[state=active]:text-white data-[state=active]:shadow-md px-8 py-3 font-medium transition-all duration-300"
                >
                  <DollarSign className="mr-2 h-5 w-5" />
                  Custom Payment
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="standard" className="mt-0">
          
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {pricingData.map((categoryData) => renderPricingCard(categoryData))}
              </div>
            </TabsContent>

            <TabsContent value="custom" className="mt-0">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-blue-900 mb-3">Custom Payment</h3>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                  Enter a custom amount for your registration or additional services
                </p>
              </div>

              <div className="max-w-lg mx-auto">
                <div className="bg-white rounded-2xl border border-blue-100 overflow-hidden shadow-xl">
                  <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 p-8 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent"></div>
                    <div className="relative z-10 flex justify-between items-center">
                      <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-white text-blue-700 shadow-md">
                        Custom Payment
                      </span>
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm p-0.5 shadow-lg">
                        <div className="flex h-full w-full items-center justify-center rounded-xl bg-white">
                          <DollarSign className="h-6 w-6 text-blue-600" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 bg-gradient-to-b from-blue-50/50 to-white">
                    <div className="mb-8">
                      <label htmlFor="customAmount" className="block text-blue-900 font-semibold mb-3 text-lg">
                        Enter Amount (USD)
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-600 font-bold text-lg">$</span>
                        <input
                          id="customAmount"
                          type="number"
                          min="1"
                          step="0.01"
                          value={customAmount}
                          onChange={(e) => setCustomAmount(e.target.value)}
                          className="w-full pl-10 pr-4 py-4 rounded-xl border-2 border-blue-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-lg font-semibold text-gray-800"
                          placeholder="0.00"
                        />
                      </div>
                      <p className="text-sm text-blue-600 mt-3 font-medium">A 6% tax will be added to this amount</p>
                    </div>

                    {customAmount && !isNaN(Number.parseFloat(customAmount)) && Number.parseFloat(customAmount) > 0 && (
                      <div className="space-y-3 mb-8 p-6 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl border border-blue-200 shadow-inner">
                        <div className="flex justify-between text-base">
                          <span className="text-blue-900 font-medium">Base Amount:</span>
                          <span className="text-blue-900 font-bold">
                            ${Number.parseFloat(customAmount).toFixed(2)}
                          </span>
                        </div>
                        <div className="flex justify-between text-base">
                          <span className="text-blue-800 font-medium">Tax (6%):</span>
                          <span className="text-blue-800 font-bold">
                            ${(Number.parseFloat(customAmount) * 0.06).toFixed(2)}
                          </span>
                        </div>
                        <div className="flex justify-between text-lg font-bold pt-3 border-t-2 border-blue-300">
                          <span className="text-blue-900">Total:</span>
                          <span className="text-blue-700 text-xl">
                            ${(Number.parseFloat(customAmount) * 1.06).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    )}

                    <Button
                      onClick={handleCustomPayment}
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl py-6 font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                    >
                      <CreditCard className="mr-2 h-5 w-5 text-white" />
                      Proceed to Payment
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <ExtraContentBelowTabs />

      {/* Payment Form Dialog */}
      <PaymentForm
        isOpen={isPaymentFormOpen}
        onClose={handlePaymentFormClose}
        ticketName={selectedTicket?.name}
        amount={selectedTicket?.price || 0}
        taxRate={selectedTicket?.taxRate || 0}
        currency={selectedTicket?.currency || "USD"}
        onSubmit={handlePaymentFormSubmit}
        isLoading={isLoading}
      />
    </main>
  )
}