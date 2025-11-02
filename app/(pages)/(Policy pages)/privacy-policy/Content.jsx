import { Shield, Eye, Lock, Database, Users, Mail } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-100 relative overflow-hidden">
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
      <section className="relative z-10 pt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block p-3 bg-blue-100 rounded-full mb-6">
              <Shield className="w-12 h-12 text-blue-700" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Your privacy is important to us. This policy explains how GDAS2025 collects, uses, and protects
              your personal information.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative z-10 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Information We Collect */}
            <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Database className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
                </div>
              </div>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Personal Information</h3>
                  <p className="mb-2">When you register for GDAS2025, we collect:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Name and contact information (email, phone number, address)</li>
                    <li>Professional information (job title, organization, military rank, industry sector)</li>
                    <li>Dietary restrictions and accessibility requirements</li>
                    <li>Payment information for registration and services</li>
                    <li>Security clearance information (if applicable for restricted sessions)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Automatically Collected Information</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>IP address and browser information</li>
                    <li>Website usage data and analytics</li>
                    <li>Cookies and similar tracking technologies</li>
                    <li>Conference app usage and interaction data</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* How We Use Information */}
            <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
                </div>
              </div>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Conference Services</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Process registration and payment</li>
                    <li>Provide conference materials and access to sessions</li>
                    <li>Facilitate networking and communication among defence and aviation professionals</li>
                    <li>Accommodate special requirements</li>
                    <li>Manage access to restricted technical demonstrations</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Communication</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Send conference updates and important information</li>
                    <li>Provide customer support and assistance</li>
                    <li>Share relevant defence, aviation, and TVET news and future events</li>
                    <li>Conduct surveys and gather feedback</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Improvement and Analytics</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Analyze website and app usage patterns</li>
                    <li>Improve our services and user experience</li>
                    <li>Conduct research and statistical analysis</li>
                    <li>Ensure security and prevent fraud</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Information Sharing */}
            <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information Sharing</h2>
                </div>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  We do not sell, trade, or rent your personal information to third parties. We may share information in
                  the following circumstances:
                </p>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Service Providers</h3>
                  <p>We work with trusted third-party service providers who assist us in:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                    <li>Payment processing and financial services</li>
                    <li>Website hosting and technical support</li>
                    <li>Email marketing and communication services</li>
                    <li>Event management and logistics</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Legal Requirements</h3>
                  <p>We may disclose information when required by law or to:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                    <li>Comply with legal processes or government requests</li>
                    <li>Protect our rights, property, or safety</li>
                    <li>Prevent fraud or security threats</li>
                    <li>Enforce our terms of service</li>
                    <li>Comply with Malaysian data protection laws (PDPA)</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Data Security */}
            <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6 text-blue-700" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
                </div>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>We implement appropriate security measures to protect your personal information, particularly given the sensitive nature of defence and aviation data:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>SSL encryption for data transmission</li>
                  <li>Secure servers and database protection with military-grade encryption</li>
                  <li>Regular security audits and updates</li>
                  <li>Limited access to personal information on a need-to-know basis</li>
                  <li>Employee training on data protection and security protocols</li>
                  <li>Compliance with Malaysian Personal Data Protection Act (PDPA)</li>
                </ul>
                <p className="mt-4">
                  While we strive to protect your information using industry-leading security measures, no method of transmission over the internet is 100%
                  secure. We cannot guarantee absolute security but are committed to protecting your data with the highest standards.
                </p>
              </div>
            </Card>

            {/* Your Rights */}
            <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
                </div>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>Under Malaysian data protection laws and international standards, you have the following rights regarding your personal information:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>
                    <strong>Access:</strong> Request a copy of the personal information we hold about you
                  </li>
                  <li>
                    <strong>Correction:</strong> Request correction of inaccurate or incomplete information
                  </li>
                  <li>
                    <strong>Deletion:</strong> Request deletion of your personal information
                  </li>
                  <li>
                    <strong>Portability:</strong> Request transfer of your data to another service
                  </li>
                  <li>
                    <strong>Objection:</strong> Object to processing of your personal information
                  </li>
                  <li>
                    <strong>Withdrawal:</strong> Withdraw consent for data processing
                  </li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, please contact us at{" "}
                  <a href="mailto:info@gdasconference.com" className="text-blue-700 hover:underline">
                    info@gdasconference.com
                  </a>
                </p>
              </div>
            </Card>

            {/* Contact Information */}
            <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
                </div>
              </div>
              <div className="text-gray-700">
                <p className="mb-4">
                  If you have questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-2">
                  <p>
                    <strong>Email:</strong> info@gdasconference.com
                  </p>
                  <p>
                    <strong>Phone:</strong> +91 92373 88328
                  </p>
                  <p>
                    <strong>Address:</strong> Selangor/Kuala Lumpur, Malaysia
                  </p>
                </div>
                <p className="mt-4 text-sm text-gray-600">
                  This Privacy Policy may be updated from time to time to reflect changes in our practices or applicable laws. We will notify you of any significant changes by
                  email or through our website. Last updated: December 2024.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 blur-xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-300 rounded-full opacity-20 blur-xl" />
    </div>
  )
}