"use client"


import { motion } from "framer-motion"
import {  useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"



export function TimelineContent({
  as: Component = "div",
  children,
  animationNum,
  timelineRef,
  customVariants,
  className,
}) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const defaultVariants = {
    visible: (i) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: 20,
      opacity: 0,
    },
  }

  const variants = customVariants || defaultVariants

  return (
    <motion.div
      ref={elementRef}
      as={Component }
      custom={animationNum}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={variants}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
