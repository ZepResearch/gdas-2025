"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2, CreditCard } from "lucide-react"

export function CCavenuePaymentForm({
  isOpen,
  onClose,
  ticketName,
  amount,
  taxRate = 0.05,
  currency = "USD",
  onSubmit,
  isLoading,
}) {
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

  // Ensure amount is a number and has a default value
  const numericAmount = typeof amount === "number" ? amount : 0

  // Calculate tax amount and total - ensure proper calculation and decimal precision
  const taxAmount = Number((numericAmount * (taxRate || 0)).toFixed(2))
  const totalAmount = Number((numericAmount + taxAmount).toFixed(2))

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  const currencySymbol = currency === "USD" ? "$" : "€"

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-white border border-gray-300 text-[#1a2e1a]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-4 text-[#1a2e1a]">Payment Details</DialogTitle>
        </DialogHeader>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gray-300/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#b9d4a3]/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <form onSubmit={handleSubmit} className="space-y-4 relative">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="billing_name" className="text-black mb-2">
                Full Name
              </Label>
              <Input
                id="billing_name"
                name="billing_name"
                required
                onChange={handleChange}
                className="bg-gray-50 border-gray-300 text-[#1a2e1a] placeholder:text-black/50"
              />
            </div>
            <div>
              <Label htmlFor="billing_email" className="text-black mb-2">
                Email
              </Label>
              <Input
                id="billing_email"
                name="billing_email"
                type="email"
                required
                onChange={handleChange}
                className="bg-gray-50 border-gray-300 text-[#1a2e1a] placeholder:text-black/50"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="billing_organization" className="text-black mb-2">
                Organization
              </Label>
              <Input
                id="billing_organization"
                name="billing_organization"
                required
                onChange={handleChange}
                className="bg-gray-50 border-gray-300 text-[#1a2e1a] placeholder:text-black/50"
              />
            </div>
            <div>
              <Label htmlFor="billing_designation" className="text-black mb-2">
                Designation
              </Label>
              <Input
                id="billing_designation"
                name="billing_designation"
                required
                onChange={handleChange}
                className="bg-gray-50 border-gray-300 text-[#1a2e1a] placeholder:text-black/50"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="billing_address" className="text-black mb-2">
              Address
            </Label>
            <Input
              id="billing_address"
              name="billing_address"
              required
              onChange={handleChange}
              className="bg-gray-50 border-gray-300 text-[#1a2e1a] placeholder:text-black/50"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="billing_city" className="text-black mb-2">
                City
              </Label>
              <Input
                id="billing_city"
                name="billing_city"
                required
                onChange={handleChange}
                className="bg-gray-50 border-gray-300 text-[#1a2e1a] placeholder:text-black/50"
              />
            </div>
            <div>
              <Label htmlFor="billing_state" className="text-black mb-2">
                State
              </Label>
              <Input
                id="billing_state"
                name="billing_state"
                required
                onChange={handleChange}
                className="bg-gray-50 border-gray-300 text-[#1a2e1a] placeholder:text-black/50"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="billing_zip" className="text-black mb-2 ">
                ZIP Code
              </Label>
              <Input
                id="billing_zip"
                name="billing_zip"
                required
                onChange={handleChange}
                className="bg-gray-50 border-gray-300 text-[#1a2e1a] placeholder:text-black/50"
              />
            </div>
            <div>
              <Label htmlFor="billing_country" className="text-black mb-2">
                Country
              </Label>
              <Input
                id="billing_country"
                name="billing_country"
                required
                onChange={handleChange}
                className="bg-gray-50 border-gray-300 text-[#1a2e1a] placeholder:text-black/50"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="billing_tel" className="text-black mb-2">
              Phone Number
            </Label>
            <Input
              id="billing_tel"
              name="billing_tel"
              type="tel"
              required
              onChange={handleChange}
              className="bg-gray-50 border-gray-300 text-[#1a2e1a] placeholder:text-black/50"
            />
          </div>

          <div className="mt-6 space-y-2 p-4  rounded-xl border border-gray-300 drop-shadow-2xl bg-white">
            <div className="flex justify-between">
              <Label className="text-black">Ticket Type:</Label>
              <div className="font-medium text-[#1a2e1a]">{ticketName || "Registration"}</div>
            </div>
            <div className="flex justify-between">
              <Label className="text-black">Subtotal:</Label>
              <div className="font-medium text-[#1a2e1a]">
                {currencySymbol}
                {numericAmount.toFixed(2)}
              </div>
            </div>
            <div className="flex justify-between">
              <Label className="text-black">Tax ({((taxRate || 0) * 100).toFixed(0)}%):</Label>
              <div className="font-medium text-[#1a2e1a]">
                {currencySymbol}
                {taxAmount.toFixed(2)}
              </div>
            </div>
            <div className="flex justify-between pt-2 border-t border-gray-300">
              <Label className="text-black">Total Amount:</Label>
              <div className="text-xl font-bold text-[#1a2e1a]">
                {currencySymbol}
                {totalAmount.toFixed(2)}
              </div>
            </div>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full mt-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full h-12"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing...
              </>
            ) : (
              <>
                <CreditCard className="mr-2 h-4 w-4" /> Proceed to Payment
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
