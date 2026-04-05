"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"

const stats = [
  { value: "6+", label: "Years Experience" },
  { value: "100+", label: "Clients Served" },
  { value: "99%", label: "Client Satisfaction" },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col"
          >
            {/* Eyebrow */}
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Tax & Accounting Services
            </p>

            {/* Title */}
            <h1 className="font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Financial clarity,{" "}
              <span className="text-primary">expertly delivered.</span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              We partner with individuals and businesses to navigate complex tax
              landscapes with precision and care. Your financial success is our
              singular focus.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button size="lg" className="group gap-2 px-8 py-6 text-sm font-medium">
                Start Your Journey
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="group gap-2 px-6 py-6 text-sm font-medium text-muted-foreground hover:text-foreground border border-border"
              >
                Book a Call
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-16 flex gap-12 border-t border-border pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                >
                  <p className="font-serif text-3xl font-semibold tracking-tight text-foreground">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
            className="relative"
          >
            <div className="relative aspect-4/5 overflow-hidden rounded-2xl bg-muted">
              <Image
                src="/image-5.jpg"
                alt="Professional tax consultation meeting"
                fill
                className="object-cover"
                priority
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-foreground/10 via-transparent to-transparent" />
            </div>

            {/* Floating accent card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -left-8 bottom-12 hidden rounded-xl border border-border bg-card p-6 shadow-lg lg:block"
            >
              <p className="font-serif text-3xl tracking-tight text-foreground">IRS</p>
              <p className="mt-1 text-sm text-muted-foreground">Enrolled Agent Certified</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
