"use client"

import { motion } from "framer-motion"
import { useState, useRef } from "react"

interface Review {
  id: number
  name: string
  role: string
  testimonial: string
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Small Business Owner",
    testimonial: "MVSR Tax transformed how I approach my business finances. Their expertise and personal attention made the entire process seamless.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Tech Entrepreneur",
    testimonial: "I was overwhelmed with tax complexities until I found MVSR. They saved me both time and significant money with their strategic approach.",
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "Healthcare Professional",
    testimonial: "The ITIN processing was incredibly smooth. What could have been a stressful experience became effortless with their guidance.",
  },
  {
    id: 4,
    name: "David Williams",
    role: "Real Estate Investor",
    testimonial: "Professional, knowledgeable, and always available. They understand the unique needs of real estate investments perfectly.",
  },
  {
    id: 5,
    name: "Emily Rodriguez",
    role: "Freelance Consultant",
    testimonial: "They found deductions I didn't know existed. My refund exceeded expectations, and I now have a trusted partner for years to come.",
  },
  {
    id: 6,
    name: "James Thompson",
    role: "Restaurant Owner",
    testimonial: "Running a restaurant is demanding enough. MVSR handles all my tax needs with precision, letting me focus on my customers.",
  },
]

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="shrink-0 w-[340px] border border-border bg-card p-8 lg:w-[400px]">
      <p className="text-base leading-relaxed text-foreground">
        "{review.testimonial}"
      </p>
      <div className="mt-6 border-t border-border pt-6">
        <p className="font-medium text-foreground">{review.name}</p>
        <p className="mt-0.5 text-sm text-muted-foreground">{review.role}</p>
      </div>
    </div>
  )
}

export function Reviews() {
  const [isPaused, setIsPaused] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section className="relative overflow-hidden border-t border-border py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Testimonials
            </p>
            <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground sm:text-4xl">
              What our clients say
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Real stories from the individuals and businesses we've had the 
            privilege to serve.
          </p>
        </motion.div>
      </div>

      {/* Scrolling Reviews */}
      <div
        ref={containerRef}
        className="overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="flex gap-6 pl-6"
          style={{
            animation: "marquee 50s linear infinite",
            animationPlayState: isPaused ? "paused" : "running",
            width: "fit-content",
          }}
        >
          {reviews.map((review) => (
            <ReviewCard key={`first-${review.id}`} review={review} />
          ))}
          {reviews.map((review) => (
            <ReviewCard key={`second-${review.id}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  )
}
