"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-foreground">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          {/* Headline */}
          <h2 className="font-serif text-3xl leading-tight tracking-tight text-background sm:text-4xl lg:text-5xl">
            Ready to take control of your finances?
          </h2>

          {/* Subtext */}
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-background/70">
            Let our experts guide you through every step. Simple, accurate, 
            and stress-free tax solutions tailored to your needs.
          </p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              className="gap-2 bg-background px-8 py-6 text-sm font-medium text-foreground hover:bg-background/90"
            >
              Get Started Today
              <ArrowRight className="size-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-background/20 bg-transparent px-8 py-6 text-sm font-medium text-background hover:bg-background/10"
            >
              Schedule a Call
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
