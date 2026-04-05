"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"

const capabilities = [
  "Individual & Business Tax Filing",
  "Strategic Tax Planning",
  "IRS Representation",
  "Business Formation & Advisory",
  "Payroll & Bookkeeping",
  "Foreign Investment Guidance",
]

export function WhoWeAre() {
  return (
    <section id="about" className="relative overflow-hidden border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative lg:col-span-5"
          >
            <div className="relative aspect-3/4 overflow-hidden rounded-2xl bg-muted">
              <Image
                src="/image4.jpg"
                alt="Team working together in office"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Experience badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 rounded-xl border border-border bg-card p-6 shadow-lg"
            >
              <p className="font-serif text-4xl tracking-tight text-foreground">6+</p>
              <p className="mt-1 text-sm text-muted-foreground">Years of Excellence</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
            className="lg:col-span-7"
          >
            {/* Eyebrow */}
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              About Us
            </p>

            {/* Title */}
            <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Your trusted partner in{" "}
              <span className="text-primary">financial success</span>
            </h2>

            {/* Description */}
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              MVSR Tax Services is a certified IRS Enrolled Agent practice, 
              delivering expert financial solutions with a personal touch. 
              We believe in building lasting relationships founded on trust, 
              transparency, and results.
            </p>

            {/* Capabilities Grid */}
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={capability}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.05, duration: 0.4 }}
                  className="flex items-center gap-3"
                >
                  <span className="size-1.5 rounded-full bg-primary" />
                  <span className="text-sm text-foreground">{capability}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            
          </motion.div>
        </div>
      </div>
    </section>
  )
}
