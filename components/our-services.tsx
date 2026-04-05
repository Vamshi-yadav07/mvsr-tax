"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  {
    number: "01",
    href: "/services/individual-tax",
    title: "Individual Tax Filing",
    description: "Personalized tax preparation with precision. We navigate the nuances of individual filings to optimize your outcomes.",
  },
  {
    number: "02",
    href: "/services/itin-processing",
    title: "ITIN Processing",
    description: "As Certified Acceptance Agents, we streamline ITIN applications and renewals, saving you time and hassle.",
  },
  {
    number: "03",
    href: "/services/fbar",
    title: "FBAR",
    description: "We assist with Foreign Bank Account Reporting (FBAR) compliance, ensuring your international financial interests are properly disclosed and compliant with U.S. regulations.",
  },
  {
    number: "04",
    href: "/services/tax-planning",
    title: "Tax Planning",
    description: "Strategic planning to minimize liabilities and maximize growth. We help you think ahead for long-term success.",
  },
  {
    number: "05",
    href: "/services/business-tax",
    title: "Business Tax Services",
    description: "Comprehensive solutions for businesses of all sizes. From startups to established enterprises, we handle the complexity.",
  },
  {
    number: "06",
    href: "/services/business-formation",
    title: "Business Formation",
    description: "From selecting the ideal entity structure to handling registrations and paperwork, we make starting your business easy and compliant.",
  },
  {
    number: "07",
    href: "/services/payroll-bookkeeping",
    title: "Payroll & Bookkeeping",
    description: "Accurate, efficient financial record-keeping. Focus on your business while we manage the numbers.",
  },
  {
    number: "08",
    href: "/services/foreign-investments",
    title: "Foreign Investments",
    description: "Comprehensive tax guidance for U.S. taxpayers with foreign investments. We help navigate reporting requirements and optimize your international returns.",
  },
]

function ServiceCard({
  service,
  index,
}: {
  service: typeof services[0]
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link
        href={service.href}
        className={cn(
          "group relative block border-b border-border py-8 lg:py-10",
          index === 0 && "border-t border-border"
        )}
      >
        <div className="flex items-start justify-between gap-8">
          <div className="flex flex-1 flex-col gap-4 sm:flex-row sm:items-start sm:gap-8">
            <span className="shrink-0 font-serif text-sm text-muted-foreground">
              {service.number}
            </span>

            <div className="flex-1">
              <h3 className="font-serif text-xl tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-2xl">
                {service.title}
              </h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          </div>

          <motion.div
            className="shrink-0 rounded-full border border-border p-3 transition-all group-hover:border-primary group-hover:bg-primary"
            whileHover={{ scale: 1.05 }}
            aria-hidden
          >
            <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-primary-foreground" />
          </motion.div>
        </div>
      </Link>
    </motion.div>
  )
}

export function OurServices() {
  return (
    <section id="services" className="relative overflow-hidden bg-muted/30">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Our Services
          </p>
          <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Comprehensive solutions for{" "}
            <span className="text-primary">every need</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            From individual tax returns to complex business structures, we provide 
            expert guidance at every step of your financial journey.
          </p>
        </motion.div>

        {/* Services List */}
        <div>
          {services.map((service, index) => (
            <ServiceCard key={service.number} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
