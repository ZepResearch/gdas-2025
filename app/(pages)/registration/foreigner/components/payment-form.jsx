"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2, CreditCard } from "lucide-react"

export function PaymentForm({ isOpen, onClose, ticketName, amount, taxRate, currency, onSubmit, isLoading }) {
  const [formData, setFormData] = useState({
    billing_email: "",
    billing_name: "",
    billing_address: "",
    billing_city: "",
    billing_state: "",
    billing_zip: "",
    billing_country: "",
    billing_tel: "",
    billing_organization: "",
    billing_designation: "",
  })

  // Calculate tax amount and total - ensure proper calculation and decimal precision
  const taxAmount = Number((amount * taxRate).toFixed(2))
  const totalAmount = Number((amount + taxAmount).toFixed(2))

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  const currencySymbol = currency === "USD" ? "$" : currency === "INR" ? "₹" : "€";

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[80vw] max-w-[500px] md:max-h-[90vh] max-h-[80vh]  overflow-y-auto bg-white border border-[#d3e4c5] text-[#1a2e1a] mx-auto justify-center ">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-[#1a2e1a]">Payment Details</DialogTitle>
        </DialogHeader>

        {/* Decorative elements - hidden on very small screens */}
        <div className="hidden sm:block absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="hidden sm:block absolute bottom-0 left-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <Label htmlFor="billing_name" className="text-black mb-1 text-sm sm:text-base">
                Full Name
              </Label>
              <Input
                id="billing_name"
                name="billing_name"
                required
                onChange={handleChange}
                className="bg-gray-50 border-[1px] border-gray-200 text-black placeholder:text-gray-500 h-10 sm:h-auto text-sm sm:text-base"
              />
            </div>
            <div>
              <Label htmlFor="billing_email" className="text-black mb-1 text-sm sm:text-base">
                Email
              </Label>
              <Input
                id="billing_email"
                name="billing_email"
                type="email"
                required
                onChange={handleChange}
                className="bg-gray-50 border-[1px] border-gray-200 text-black placeholder:text-gray-500 h-10 sm:h-auto text-sm sm:text-base"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <Label htmlFor="billing_organization" className="text-black mb-1 text-sm sm:text-base">
                Organization
              </Label>
              <Input
                id="billing_organization"
                name="billing_organization"
                required
                onChange={handleChange}
                className="bg-gray-50 border-[1px] border-gray-200 text-black placeholder:text-gray-500 h-10 sm:h-auto text-sm sm:text-base"
              />
            </div>
            <div>
              <Label htmlFor="billing_designation" className="text-black mb-1 text-sm sm:text-base">
                Designation
              </Label>
              <Input
                id="billing_designation"
                name="billing_designation"
                required
                onChange={handleChange}
                className="bg-gray-50 border-[1px] border-gray-200 text-black placeholder:text-gray-500 h-10 sm:h-auto text-sm sm:text-base"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="billing_address" className="text-black mb-1 text-sm sm:text-base">
              Address
            </Label>
            <Input
              id="billing_address"
              name="billing_address"
              required
              onChange={handleChange}
              className="bg-gray-50 border-[1px] border-gray-200 text-black placeholder:text-gray-500 h-10 sm:h-auto text-sm sm:text-base"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <Label htmlFor="billing_city" className="text-black mb-1 text-sm sm:text-base">
                City
              </Label>
              <Input
                id="billing_city"
                name="billing_city"
                required
                onChange={handleChange}
                className="bg-gray-50 border-[1px] border-gray-200 text-black placeholder:text-gray-500 h-10 sm:h-auto text-sm sm:text-base"
              />
            </div>
            <div>
              <Label htmlFor="billing_state" className="text-black mb-1 text-sm sm:text-base">
                State
              </Label>
              <Input
                id="billing_state"
                name="billing_state"
                required
                onChange={handleChange}
                className="bg-gray-50 border-[1px] border-gray-200 text-black placeholder:text-gray-500 h-10 sm:h-auto text-sm sm:text-base"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <Label htmlFor="billing_zip" className="text-black mb-1 text-sm sm:text-base">
                ZIP Code
              </Label>
              <Input
                id="billing_zip"
                name="billing_zip"
                required
                onChange={handleChange}
                className="bg-gray-50 border-[1px] border-gray-200 text-black placeholder:text-gray-500 h-10 sm:h-auto text-sm sm:text-base"
              />
            </div>
            <div>
              <Label htmlFor="billing_country" className="text-black mb-1 text-sm sm:text-base">
                Country
              </Label>
              <Input
                id="billing_country"
                name="billing_country"
                required
                onChange={handleChange}
                className="bg-gray-50 border-[1px] border-gray-200 text-black placeholder:text-gray-500 h-10 sm:h-auto text-sm sm:text-base"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="billing_tel" className="text-black mb-1 text-sm sm:text-base">
              Phone Number
            </Label>
            <Input
              id="billing_tel"
              name="billing_tel"
              type="tel"
              required
              onChange={handleChange}
              className="bg-gray-50 border-[1px] border-gray-200 text-black placeholder:text-gray-500 h-10 sm:h-auto text-sm sm:text-base"
            />
          </div>

          <div className="mt-4 sm:mt-6 space-y-2 p-3 sm:p-4 bg-gray-50 rounded-xl border border-gray-200">
            <div className="flex justify-between items-center">
              <Label className="text-black mb-1 text-sm sm:text-base">Ticket Type:</Label>
              <div className="font-medium text-black text-sm sm:text-base text-right max-w-[60%] break-words">{ticketName}</div>
            </div>
            <div className="flex justify-between items-center">
              <Label className="text-black mb-1 text-sm sm:text-base">Subtotal:</Label>
              <div className="font-medium text-black text-sm sm:text-base">
                {currencySymbol}
                {amount.toFixed(2)}
              </div>
            </div>
            <div className="flex justify-between items-center">
              <Label className="text-black mb-1 text-sm sm:text-base">Tax ({(taxRate * 100).toFixed(0)}%):</Label>
              <div className="font-medium text-black text-sm sm:text-base">
                {currencySymbol}
                {taxAmount.toFixed(2)}
              </div>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-gray-200">
              <Label className="text-black mb-1 text-sm sm:text-base font-semibold">Total Amount:</Label>
              <div className="text-lg sm:text-xl font-bold text-black">
                {currencySymbol}
                {totalAmount.toFixed(2)}
              </div>
            </div>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full mt-4 sm:mt-6bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full h-10 sm:h-12 text-sm sm:text-base"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-3 w-3 sm:h-4 sm:w-4 animate-spin" /> 
                <span className="hidden xs:inline">Processing...</span>
                <span className="xs:hidden">Processing</span>
              </>
            ) : (
              <>
                <CreditCard className="mr-2 h-3 w-3 sm:h-4 sm:w-4" /> 
                <span className="hidden xs:inline">Proceed to Payment</span>
                <span className="xs:hidden">Pay Now</span>
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}