"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight, User, IdCard, FileText, Calculator, Building2, Briefcase, Receipt, Globe } from "lucide-react"
import { Footer } from "@/components/footer"

const services = [
  {
    icon: User,
    title: "Individual Tax",
    description: "Personalized tax preparation with precision. We handle federal, multi-state returns, amendments, and specialized situations for individuals.",
    href: "/services/individual-tax",
    features: ["Federal & State Returns", "Tax Amendments", "ESPP/RSU/ISO Reporting"],
  },
  {
    icon: IdCard,
    title: "ITIN Processing",
    description: "As Certified Acceptance Agents, we streamline ITIN applications and renewals for you, your spouse, and dependents.",
    href: "/services/itin-processing",
    features: ["New ITIN Applications", "ITIN Renewals", "CAA Certified"],
  },
  {
    icon: FileText,
    title: "FBAR",
    description: "Expert guidance on Foreign Bank Account Reporting requirements to ensure compliance and avoid penalties.",
    href: "/services/fbar",
    features: ["FinCEN Form 114", "Compliance Review", "Penalty Avoidance"],
  },
  {
    icon: Calculator,
    title: "Tax Planning",
    description: "Strategic planning to minimize liabilities and maximize growth. We help you think ahead for long-term financial success.",
    href: "/services/tax-planning",
    features: ["Year-Round Strategy", "Deduction Optimization", "Retirement Planning"],
  },
  {
    icon: Building2,
    title: "Business Tax",
    description: "Comprehensive solutions for businesses of all sizes. From startups to established enterprises, we handle the complexity.",
    href: "/services/business-tax",
    features: ["Corporate Returns", "Partnership Filings", "S-Corp Tax"],
  },
  {
    icon: Briefcase,
    title: "Business Formation",
    description: "Expert guidance on entity selection and formation. We help you establish the right structure for your business.",
    href: "/services/business-formation",
    features: ["LLC Formation", "S-Corp Election", "Entity Structuring"],
  },
  {
    icon: Receipt,
    title: "Payroll & Bookkeeping",
    description: "Accurate, efficient financial record-keeping. Focus on your business while we manage the numbers.",
    href: "/services/payroll-bookkeeping",
    features: ["Payroll Processing", "Financial Statements", "Monthly Reconciliation"],
  },
  {
    icon: Globe,
    title: "Foreign Investments",
    description: "Specialized guidance for international tax matters, foreign income reporting, and cross-border investments.",
    href: "/services/foreign-investments",
    features: ["Foreign Income", "Tax Treaties", "FATCA Compliance"],
  },
]

function ServiceCard({ 
  service, 
  index 
}: { 
  service: typeof services[0]
  index: number 
}) {
  const Icon = service.icon

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link
        href={service.href}
        className="group flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
      >
        {/* Icon */}
        <div className="mb-6 flex size-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary">
          <Icon className="size-7 text-primary transition-colors group-hover:text-primary-foreground" strokeWidth={1.5} />
        </div>

        {/* Title */}
        <h3 className="font-serif text-xl tracking-tight text-foreground group-hover:text-primary">
          {service.title}
        </h3>

        {/* Description */}
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {service.description}
        </p>

        {/* Features */}
        <div className="mt-6 flex flex-wrap gap-2">
          {service.features.map((feature) => (
            <span
              key={feature}
              className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Link */}
        <div className="mt-6 flex items-center gap-2 text-sm font-medium text-foreground transition-colors group-hover:text-primary">
          Learn More
          <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>
      </Link>
    </motion.article>
  )
}

export default function ServicesPage() {
  return (
    <main>
      <section className="relative">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 max-w-2xl"
          >
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Our Services
            </p>
            <h1 className="font-serif text-4xl leading-tight tracking-tight text-foreground sm:text-5xl">
              Comprehensive tax & accounting solutions
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              From individual tax returns to complex business structures, we provide 
              expert guidance at every step of your financial journey.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.href} service={service} index={index} />
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-20 rounded-2xl border border-border bg-muted/30 p-8 text-center sm:p-12"
          >
            <h3 className="font-serif text-2xl tracking-tight text-foreground">
              Not sure which service you need?
            </h3>
            <p className="mt-3 text-muted-foreground">
              Schedule a free consultation and we'll help you find the right solution.
            </p>
            <Link
              href="/contact-us"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Schedule Consultation
              <ArrowUpRight className="size-4" />
            </Link>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
