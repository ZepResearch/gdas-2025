"use client"

import React from 'react';
import { Download, FileText, Check, ArrowRight } from 'lucide-react';

const Button = ({ children, variant = 'default', className = '', ...props }) => {
  const baseStyles = "px-4 py-2 rounded-full font-medium transition-all inline-flex items-center justify-center";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
  };
  
  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const Link = ({ children, href }) => (
  <a href={href} className="inline-block">{children}</a>
);

const Image = ({ src, alt, fill, className }) => (
  <img src={src} alt={alt} className={`${fill ? 'absolute inset-0 w-full h-full' : ''} ${className}`} />
);

export default function PapersFormatPage() {
  const generalRequirements = [
    "Use IEEE conference paper format without modifying margins, font sizes, or styles",
    "Abstract submissions should not exceed 300 words",
    "Full papers should be between 6-10 pages, including figures, tables, and references",
    "Poster presentations should follow the A0 format (841 × 1189 mm) in portrait orientation",
    "All submissions must be in PDF format with embedded fonts",
  ]

  const templates = [
    {
      title: "Abstract Template",
      description: "IEEE format template for 300-word abstract submissions",
      file: "/templates/Abstract_Template.docx",
      icon: <FileText className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Full Paper Template",
      description: "IEEE format template for 6-10 page full paper submissions",
      file: "/templates/Fullpaper_Template.doc",
      icon: <FileText className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Poster Template",
      description: "A0 format template for poster presentations",
      file: "/templates/poster.jpg",
      icon: <FileText className="h-6 w-6 text-blue-600" />,
    },
  ]

  return (
    <main className="bg-gray-50">
      {/* Paper Format Guidelines Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden h-[400px]">
              <Image
                src="/assets/paper-format.jpg"
                alt="Paper Format Guidelines"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-full py-3 px-6 inline-flex items-center">
                  <span className="text-gray-900 font-medium">Ensure your research meets IEEE standards</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-medium   text-gray-900 mb-6 ">Paper Format Guidelines</h2>
              <p className="text-gray-600 mb-4">
                All submissions to GDAS 2025 must follow IEEE conference paper formatting guidelines to ensure
                consistency and professional presentation. We provide templates for different types of submissions to
                streamline this process.
              </p>
              <p className="text-gray-600 mb-6">
                Please carefully review the guidelines below and use the appropriate template for your submission type.
                Papers that do not follow these guidelines may be returned for revision before being considered for
                review.
              </p>

              <div className="bg-gray-50 rounded-3xl p-6 shadow">
                <h3 className="text-xl font-medium text-gray-900 mb-4 ">General Requirements</h3>
                <ul className="space-y-3">
                  {generalRequirements.map((requirement, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-blue-200 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                        <Check className="h-3 w-3 text-blue-600" />
                      </div>
                      <span className="text-gray-600">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Citation Style Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-medium text-gray-900 mb-6 ">Citation Style</h2>
              <p className="text-gray-600 mb-4">
                GDAS 2025 follows the IEEE citation style for all submissions. This is the standard format
                used in defence, aviation, engineering, and technology conferences. Please ensure that your references
                are formatted according to this style.
              </p>
              <p className="text-gray-600 mb-4">
                The templates provided include examples of how to format different types of references including journal
                articles, conference papers, books, and online sources.
              </p>
              <div className="bg-white rounded-2xl p-4 border-l-4 border-blue-500">
                <p className="text-sm text-gray-600">
                  <strong>Example:</strong> A. Smith, B. Johnson, and C. Lee, "Advanced TVET approaches for aerospace
                  workforce development," in Proc. Int. Conf. Defence and Aviation Education, 2024, pp. 123-130.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-medium text-gray-900 mb-6 ">Language & Quality</h2>
              <p className="text-gray-600 mb-4">
                All submissions must be in English with clear, professional writing. We recommend having your paper
                reviewed by colleagues or professional editing services before submission.
              </p>
              <p className="text-gray-600 mb-4">
                Pay particular attention to technical terminology, policy frameworks, and educational methodologies.
                Ensure that your approach is clearly explained and applicable to defence and aviation sectors.
              </p>
              <div className="bg-white rounded-2xl p-4 border-l-4 border-blue-500">
                <p className="text-sm text-gray-600">
                  <strong>Tip:</strong> Use active voice and present tense when describing your contributions and
                  findings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Templates Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6 ">Download Templates</h2>
            <p className="text-gray-600">Use our official IEEE-compliant templates for your submissions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {templates.map((template, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-3xl p-8 shadow-sm text-center hover:shadow-lg transition-shadow"
              >
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-sm">
                  {template.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{template.title}</h3>
                <p className="text-gray-600 mb-6">{template.description}</p>
                <Link href={template.file}>
                  <Button
                    variant="outline"
                    className="border-blue-500 text-blue-600 hover:bg-blue-50 rounded-full"
                  >
                    <Download className="mr-2 h-4 w-4" /> Download Template
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Requirements Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-12 text-center ">Technical Requirements</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-3xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Figures and Tables</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• All figures must be high resolution (minimum 300 DPI)</li>
                  <li>• Use vector graphics when possible</li>
                  <li>• Include captions below figures and above tables</li>
                  <li>• Reference all figures and tables in the text</li>
                  <li>• Use consistent formatting and fonts</li>
                </ul>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Data and Statistics</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Present statistical data clearly and accurately</li>
                  <li>• Include sources for all data and statistics</li>
                  <li>• Use standard notation and terminology</li>
                  <li>• Ensure data supports your conclusions</li>
                  <li>• Maintain consistency in units and measurements</li>
                </ul>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Policy Frameworks</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Clearly outline policy recommendations</li>
                  <li>• Support proposals with evidence and research</li>
                  <li>• Consider implementation feasibility</li>
                  <li>• Address stakeholder perspectives</li>
                  <li>• Include actionable strategies and timelines</li>
                </ul>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Case Studies</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Provide context and background information</li>
                  <li>• Include relevant institutional data</li>
                  <li>• Document outcomes and impact measures</li>
                  <li>• Compare with international best practices</li>
                  <li>• Ensure replicability and transferability</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Submission Tips Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-12 text-center">Submission Tips</h2>

            <div className="bg-gray-50 rounded-3xl p-8 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="bg-blue-200 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-blue-600 font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Start Early</h3>
                    <p className="text-gray-600">
                      Begin preparing your submission well before the deadline to allow time for revisions, formatting,
                      and technical checks.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-200 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-blue-600 font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Follow IEEE Standards</h3>
                    <p className="text-gray-600">
                      Strictly adhere to IEEE formatting requirements, including page limits, citation style, and
                      template usage.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-200 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-blue-600 font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Clear Contribution</h3>
                    <p className="text-gray-600">
                      Clearly state your research contribution, practical applications, and relevance to defence and aviation education in both the abstract and introduction.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-200 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-blue-600 font-bold text-xl">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Thorough Review</h3>
                    <p className="text-gray-600">
                      Have colleagues review your paper for accuracy, clarity, policy relevance, and formatting before
                      submission.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 shadow-lg text-white">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-6">
                <h3 className="text-2xl font-bold mb-2">Ready to submit your paper?</h3>
                <p className="max-w-xl opacity-90">
                  Download the appropriate template and prepare your submission for GDAS 2025. Join the global
                  defence and aviation education leadership community.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/submission">
                  <Button className="   rounded-full whitespace-nowrap">
                    Submit Paper
                  </Button>
                </Link>
                <Link href="/theme-and-topics">
                  <Button
                    variant="outline"
                    className="bg-white text-blue-600 hover:bg-gray-100 rounded-full whitespace-nowrap border-0">
                    View Research Topics <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}