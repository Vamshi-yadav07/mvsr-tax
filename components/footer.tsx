"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const quickLinks = [
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Insights", href: "#insights" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact-us" },
]

const services = [
  { name: "Individual Tax", href: "/services/individual-tax" },
  { name: "Business Tax", href: "/services/business-tax" },
  { name: "Tax Planning", href: "/services/tax-planning" },
  { name: "ITIN Processing", href: "/services/itin" },
  { name: "Bookkeeping", href: "/services/bookkeeping" },
]

const legal = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      {/* Main Footer */}
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4"
          >
            <Link href="/" className="group inline-flex items-baseline gap-0.5">
              <span className="font-serif text-2xl tracking-tight text-foreground">
                MVSR
              </span>
              <span className="text-lg font-medium tracking-tight text-primary">
                tax
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Your trusted partner for comprehensive tax and accounting 
              services. We help individuals and businesses navigate complex 
              tax laws with confidence.
            </p>

            {/* Newsletter or CTA */}
            <div className="mt-8">
              <Link
                href="/contact-us"
                className="group inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                Get in Touch
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </motion.div>

          {/* Links Columns */}
          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-8 lg:justify-items-end">
            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                Navigation
              </h4>
              <ul className="mt-4 space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground transition-colors hover:text-primary"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <h4 className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                Services
              </h4>
              <ul className="mt-4 space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="text-sm text-foreground transition-colors hover:text-primary"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                Contact
              </h4>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href="mailto:info@mvsrtax.com"
                    className="text-sm text-foreground transition-colors hover:text-primary"
                  >
                    info@mvsrtax.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+15551234567"
                    className="text-sm text-foreground transition-colors hover:text-primary"
                  >
                    (555) 123-4567
                  </a>
                </li>
                <li className="text-sm text-muted-foreground">
                  Mon - Fri: 9AM - 6PM
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row lg:px-8">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} MVSR Tax. All rights reserved.
          </p>
          <div className="flex gap-6">
            {legal.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
