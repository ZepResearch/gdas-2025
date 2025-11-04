import { Calendar, CreditCard, AlertCircle, RefreshCw, Mail } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function CancellationPolicyPage() {
  return (
    <div className="min-h-screen bg-blue-50 relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(29,78,216,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(29,78,216,0.1) 1px, transparent 1px)
          `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block p-3 bg-blue-100 rounded-full mb-6">
              <RefreshCw className="w-12 h-12 text-blue-600" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Cancellation Policy</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our cancellation and refund policy for GDAS2025 registration, exhibition, and sponsorship.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative z-10 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Conference Registration Cancellation */}
            <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Conference Registration Cancellation</h2>
                </div>
              </div>
              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Refund Schedule</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-green-500 pl-4 bg-green-50 p-3 rounded-r">
                      <h4 className="font-semibold text-green-800">30+ days before conference</h4>
                      <p className="text-green-700">Full refund</p>
                    </div>
                    <div className="border-l-4 border-red-500 pl-4 bg-red-50 p-3 rounded-r">
                      <h4 className="font-semibold text-red-800">Less than 20 days before conference</h4>
                      <p className="text-red-700">No refund available</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Important Notes</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>All cancellation requests must be submitted in writing via email</li>
                    <li>Refunds will be processed within 30 business days of approval</li>
                    <li>Refunds will be issued to the original payment method</li>
                    <li>No-shows are not eligible for refunds</li>
                    <li>Conference dates: December 8-9, 2025</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Registration Transfers */}
            <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <RefreshCw className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Registration Transfers</h2>
                </div>
              </div>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Transfer Policy</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Registration transfers to another person are permitted up to 30 days before the conference</li>
                    <li>Transfer requests must be submitted in writing with complete details of the new attendee</li>
                    <li>A $100 administrative fee applies to all registration transfers</li>
                    <li>The new attendee must meet all conference eligibility requirements</li>
                    <li>No transfers are permitted within 30 days of the conference</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Transfer Process</h3>
                  <ol className="list-decimal list-inside space-y-1 ml-4">
                    <li>Submit transfer request via email with original and new attendee information</li>
                    <li>Pay the $100 administrative fee</li>
                    <li>Receive confirmation of transfer approval</li>
                    <li>New attendee receives updated registration confirmation</li>
                  </ol>
                </div>
              </div>
            </Card>

            {/* Exhibition and Sponsorship Cancellation */}
            <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CreditCard className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Exhibition and Sponsorship Cancellation</h2>
                </div>
              </div>
              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Exhibition Booth Cancellation</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-green-500 pl-4 bg-green-50 p-3 rounded-r">
                      <h4 className="font-semibold text-green-800">30+ days before conference</h4>
                      <p className="text-green-700">Full refund</p>
                    </div>
                    <div className="border-l-4 border-red-500 pl-4 bg-red-50 p-3 rounded-r">
                      <h4 className="font-semibold text-red-800">Less than 20 days before conference</h4>
                      <p className="text-red-700">No refund available</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Sponsorship Cancellation</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-green-500 pl-4 bg-green-50 p-3 rounded-r">
                      <h4 className="font-semibold text-green-800">30+ days before conference</h4>
                      <p className="text-green-700">100% refund of sponsorship fee</p>
                    </div>
                    <div className="border-l-4 border-red-500 pl-4 bg-red-50 p-3 rounded-r">
                      <h4 className="font-semibold text-red-800">Less than 20 days before conference</h4>
                      <p className="text-red-700">No refund available</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* How to Cancel */}
            <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Cancel or Request Refund</h2>
                </div>
              </div>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Cancellation Process</h3>
                  <ol className="list-decimal list-inside space-y-1 ml-4">
                    <li>Send cancellation request via email to info@gdasummit.org</li>
                    <li>Include your full name, registration number, and reason for cancellation</li>
                    <li>Receive confirmation email within 2 business days</li>
                    <li>Refund processed according to the applicable schedule above</li>
                  </ol>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Required Information</h3>
                  <p className="mb-2">Please include the following in your cancellation request:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Full name as registered</li>
                    <li>Registration confirmation number</li>
                    <li>Email address used for registration</li>
                    <li>Type of registration (attendee, exhibitor, sponsor)</li>
                    <li>Reason for cancellation</li>
                    <li>Preferred refund method (if different from original payment)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Contact Information</h3>
                  <div className="space-y-2">
                    <p>
                      <strong>Email:</strong> info@gdasconference.com
                    </p>
                    <p>
                      <strong>Phone:</strong> +91 92373 88328
                    </p>
                    <p>
                      <strong>Business Hours:</strong> Monday-Saturday, 9:00 AM - 6:00 PM MYT
                    </p>
                  </div>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                  <p className="text-red-800">
                    <strong>Important:</strong> All cancellation requests must be received in writing. Phone requests
                    will not be processed. Please allow 2-3 business days for confirmation of your cancellation request.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}