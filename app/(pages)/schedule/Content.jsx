"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

const scheduleData = [
  {
    date: "December 8 | Day 1",
    items: [
      { time: "7:30AM - 8:30AM", title: "Registration & Welcome Coffee" },
      { time: "8:30AM - 9:00AM", title: "Opening Ceremony & National Anthems" },
      { time: "9:00AM - 9:45AM", title: "Ministerial Opening Address: Future of Defence & Aviation Education" },
      { time: "9:45AM - 10:30AM", title: "Keynote: Building World-Class Military & Aviation Experts Through TVET" },
      { time: "10:30AM - 11:00AM", title: "Networking Break" },
      { time: "11:00AM - 01:00PM", title: "Session 1: Higher Education & TVET Integration for Defence Technologies" },
      { time: "01:00PM - 02:15PM", title: "Executive Luncheon" },
      { time: "02:15PM - 03:00PM", title: "Keynote: Advanced Aerospace Training Systems & Digital Transformation" },
      { time: "03:00PM - 05:00PM", title: "Session 2: Cross-Border Cooperation in Aviation Skills Development" },
      { time: "05:00PM - 05:30PM", title: "Day 1 Closing Remarks" },
      { time: "06:30PM - 09:00PM", title: "Gala Dinner & Networking Reception" },
    ],
  },
  {
    date: "December 9 | Day 2",
    items: [
      { time: "8:00AM - 8:30AM", title: "Registration & Morning Coffee" },
      { time: "8:30AM - 9:00AM", title: "Day 2 Welcome & Recap" },
      { time: "9:00AM - 9:45AM", title: "Keynote: Industry 4.0 & Security Transformations in Defence Education" },
      { time: "9:45AM - 10:15AM", title: "Coffee Break & Networking" },
      { time: "10:15AM - 12:30PM", title: "Session 3: Policy Frameworks for Advanced Skills Training in Aviation & Defence" },
      { time: "12:30PM - 01:45PM", title: "Leadership Luncheon" },
      { time: "01:45PM - 03:30PM", title: "High-Level Panel: Government-Academia-Industry Ecosystem for Defence Excellence" },
      { time: "03:30PM - 04:00PM", title: "Refreshment Break" },
      { time: "04:00PM - 05:00PM", title: "Summit Declaration & Closing Ceremony" },
      { time: "05:00PM - 06:30PM", title: "Farewell Reception & Strategic Networking" },
    ],
  },
]

export default function ConferenceSchedule() {
  const startDate = new Date(2025, 11, 8) // December 8, 2025
  const day2Date = new Date(2025, 11, 9) // December 9, 2025
  const [selectedDates, setSelectedDates] = useState([startDate, day2Date])

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="space-y-8">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl md:text-5xl font-medium text-gray-900 leading-tight">
              Global Defence & Aviation Skills Leadership Summit
             
              2025
            </h1>
            <p className="text-blue-600 text-xl font-semibold max-w-3xl mx-auto mt-4">
              Empowering the Future: Advancing Higher Education TVET for World-Class Military and Aviation Experts
            </p>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto mt-4">
              Join Ministers, Defence Leaders, University Chancellors, and Aviation Industry Executives for two days of strategic dialogue • December 8th - 9th, 2025 • Kuala Lumpur, Malaysia
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-[300px_1fr]">
            <Card className="border-blue-500 rounded-3xl shadow-sm overflow-hidden">
              <CardHeader className="bg-blue-600 text-white p-3 ">
                <CardTitle>December 2025</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <Calendar
                  mode="multiple"
                  selected={selectedDates}
                  onSelect={setSelectedDates}
                  month={startDate}
                  className="w-full"
                  classNames={{
                    day_selected: "bg-blue-600 text-white hover:bg-blue-600 focus:bg-blue-600 ",
                    day_today: "bg-blue-100 text-gray-900",
                  }}
                />
              </CardContent>
            </Card>

            <ScrollArea className="h-[600px]">
              <div className="space-y-8">
                {scheduleData.map((day, index) => (
                  <Card key={index} className="border-blue-200 rounded-3xl shadow-sm overflow-hidden">
                    <CardHeader className="bg-blue-600 p-3">
                      <CardTitle className="text-white">{day.date}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4">
                      <div className="space-y-2">
                        {day.items.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className={cn(
                              "grid grid-cols-[160px_1fr] gap-4 p-3 rounded-lg",
                              "bg-blue-50 hover:bg-blue-100 transition-colors",
                            )}
                          >
                            <div className="text-sm font-medium text-blue-700">{item.time}</div>
                            <div className="text-sm text-gray-900 font-medium">{item.title}</div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </div>

          {/* Additional Information */}
          <div className="mt-12 bg-gradient-to-br from-blue-50 to-gray-50 rounded-3xl p-8 shadow-xl border border-blue-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Summit Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Venue</h3>
                <p className="text-blue-700 font-medium mb-2"> Dorsett Grand Subang, Jalan SS12/1, 47500 Subang Jaya, Selangor, Malaysia</p>
                <p className="text-gray-700 text-sm">
                  Venue details will be confirmed upon registration. Located in the heart of Malaysia's capital city.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Registration</h3>
                {/* <p className="text-blue-700 mb-2">Day 1: Registration opens at 7:30 AM</p>
                <p className="text-blue-700 mb-2">Day 2: Registration opens at 8:00 AM</p> */}
                <p className="text-gray-700 text-sm">
                  Please bring your confirmation credentials and official identification for executive check-in.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Summit Focus</h3>
              <p className="text-gray-700">
                This executive-level international summit addresses the critical mission of building world-class defence and aviation experts through enhanced higher education and TVET systems. The summit fosters cross-border cooperation, establishes policy frameworks for advanced skills training, and creates a unified ecosystem linking government, academia, and industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}