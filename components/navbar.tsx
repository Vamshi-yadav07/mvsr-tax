"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const services = [
  { label: "Individual Tax", href: "/services/individual-tax", description: "Personal tax preparation & filing" },
  { label: "ITIN Processing", href: "/services/itin-processing", description: "Taxpayer ID number applications" },
  { label: "FBAR", href: "/services/fbar", description: "Foreign bank account reporting" },
  { label: "Tax Planning", href: "/services/tax-planning", description: "Strategic tax optimization" },
  { label: "Business Tax", href: "/services/business-tax", description: "Corporate & business filings" },
  { label: "Business Formation", href: "/services/business-formation", description: "LLC, S-Corp & entity setup" },
  { label: "Payroll & Bookkeeping", href: "/services/payroll-bookkeeping", description: "Financial record management" },
  { label: "Foreign Investments", href: "/services/foreign-investments", description: "International tax guidance" },
]

const navItems = [
  // { label: "About", href: "/#about" },
  { label: "Blogs", href: "/blogs" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact-us" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [servicesOpen, setServicesOpen] = React.useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = React.useState(false)
  const servicesRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full">
      <nav
        className={cn(
          "border-b transition-all duration-300",
          isScrolled
            ? "border-border/60 bg-background/95 backdrop-blur-md"
            : "border-transparent bg-background"
        )}
      >
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="group flex items-baseline gap-0.5">
            <span className="font-serif text-2xl tracking-tight text-foreground">
              MVSR
            </span>
            <span className="text-lg font-medium tracking-tight text-primary">
              tax
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {/* Services Dropdown */}
            <div ref={servicesRef} className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Services
                <ChevronDown className={cn(
                  "size-4 transition-transform duration-200",
                  servicesOpen && "rotate-180"
                )} />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                    className="absolute left-1/2 top-full z-50 mt-4 w-[480px] -translate-x-1/2 rounded-xl border border-border bg-card p-4 shadow-xl"
                  >
                    {/* Arrow */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                      <div className="size-4 rotate-45 border-l border-t border-border bg-card" />
                    </div>

                    <div className="grid grid-cols-2 gap-1">
                      {services.map((service, index) => (
                        <motion.div
                          key={service.href}
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.03 }}
                        >
                          <Link
                            href={service.href}
                            onClick={() => setServicesOpen(false)}
                            className="group block rounded-lg p-3 transition-colors hover:bg-muted"
                          >
                            <p className="text-sm font-medium text-foreground group-hover:text-primary">
                              {service.label}
                            </p>
                            <p className="mt-0.5 text-xs text-muted-foreground">
                              {service.description}
                            </p>
                          </Link>
                        </motion.div>
                      ))}
                    </div>

                    {/* View All */}
                    <div className="mt-3 border-t border-border pt-3">
                      <Link
                        href="/services"
                        onClick={() => setServicesOpen(false)}
                        className="flex items-center justify-center gap-2 rounded-lg py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                      >
                        View All Services
                        <ArrowUpRight className="size-3.5" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Button className="group gap-2 px-6 py-5 text-sm font-medium">
              Get Started
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-foreground/5 backdrop-blur-sm md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              className="fixed left-4 right-4 top-24 z-50 max-h-[calc(100vh-120px)] overflow-y-auto rounded-2xl border border-border bg-card p-6 shadow-2xl md:hidden"
            >
              <div className="space-y-1">
                {/* Mobile Services Accordion */}
                <div>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
                  >
                    Services
                    <ChevronDown className={cn(
                      "size-4 transition-transform duration-200",
                      mobileServicesOpen && "rotate-180"
                    )} />
                  </button>

                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-1 pl-4 pt-1">
                          {services.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              className="block rounded-lg px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                              onClick={() => setIsOpen(false)}
                            >
                              {service.label}
                            </Link>
                          ))}
                          <Link
                            href="/services"
                            className="block rounded-lg px-4 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-muted"
                            onClick={() => setIsOpen(false)}
                          >
                            View All Services
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className="block rounded-lg px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 border-t border-border pt-6">
                <Button className="w-full gap-2 py-6" onClick={() => setIsOpen(false)}>
                  Get Started
                  <ArrowUpRight className="size-4" />
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
