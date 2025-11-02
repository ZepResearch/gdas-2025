// components/faq-section.jsx
"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const FaqSectionWithCategories = React.forwardRef(
  ({ className, title, description, items, contactInfo, ...props }, ref) => {
    return (
      <section ref={ref} className={cn("py-4 w-full mb-4", className)} {...props}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center space-y-4 mb-4">
              <h2 className="text-5xl font-medium text-foreground">{title}</h2>
              {description && <p className="text-muted-foreground">{description}</p>}
            </div>

            {/* FAQ Items */}
            <Accordion type="single" collapsible className="space-y-4">
              {items.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className={cn(
                    "mb-4 rounded-xl",
                    "bg-card text-card-foreground",
                    "border border-border/60",
                    "shadow-sm dark:shadow-black/10",
                  )}
                >
                  <AccordionTrigger
                    className={cn(
                      "px-6 py-4 text-left hover:no-underline",
                      "data-[state=open]:border-b data-[state=open]:border-border/60",
                    )}
                  >
                    <div className="flex flex-col gap-2">
                      {item.category && (
                        <Badge variant="secondary" className="w-fit text-xs font-normal">
                          {item.category}
                        </Badge>
                      )}
                      <h3 className="text-lg font-medium text-foreground group-hover:text-primary">{item.question}</h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pt-4 pb-6">
                    <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* Contact Section */}
            {contactInfo && (
              <div className="mt-12 text-center">
                <p className="text-muted-foreground mb-4">{contactInfo.title}</p>
                {contactInfo.description && (
                  <p className="text-sm text-muted-foreground mb-4">{contactInfo.description}</p>
                )}
                <Link href={contactInfo.onContact}>
                <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold">
                {contactInfo.buttonText}
                <ArrowRight className="ml-2 w-5 h-5" />

                </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    )
  },
)
FaqSectionWithCategories.displayName = "FaqSectionWithCategories"

export { FaqSectionWithCategories }