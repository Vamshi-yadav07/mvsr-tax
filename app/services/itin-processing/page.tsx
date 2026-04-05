"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { 
  ArrowUpRight, 
  Check, 
  Phone, 
  FileCheck, 
  Shield, 
  Clock,
  Users,
  Globe,
  BadgeCheck,
  Zap,
  MessageCircle,
  ChevronRight,
  IdCard,
  Send
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Footer } from "@/components/footer"

const services = [
  {
    icon: IdCard,
    title: "New ITIN Applications",
    description: "We help non-U.S. citizens and individuals who are not eligible for a Social Security Number (SSN) obtain an ITIN for tax filing purposes.",
  },
  {
    icon: FileCheck,
    title: "ITIN Renewals",
    description: "We assist in renewing your expired ITIN to ensure uninterrupted tax filing and compliance with IRS regulations.",
  },
  {
    icon: Shield,
    title: "Document Preparation & Submission",
    description: "Our experts help you gather and prepare all the necessary documentation, ensuring a smooth application process.",
  },
  {
    icon: MessageCircle,
    title: "Ongoing Support",
    description: "We provide continuous support throughout the process, answering any questions you may have and assisting with any complications.",
  },
]

const processSteps = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "We discuss your needs and determine your eligibility for ITIN processing.",
  },
  {
    number: "02",
    title: "Document Review",
    description: "We review your identification documents and help you gather the required paperwork, ensuring everything meets IRS requirements.",
  },
  {
    number: "03",
    title: "Form Completion",
    description: "We meticulously prepare and file your IRS Form W-7 and ensure all details are accurate to avoid delays.",
  },
  {
    number: "04",
    title: "Submission & Follow-Up",
    description: "Once your application is submitted, we track its progress and provide updates until your ITIN is processed successfully.",
  },
]

const whyChooseUs = [
  {
    icon: BadgeCheck,
    title: "Expert Knowledge",
    description: "Our team of tax professionals has years of experience handling ITIN applications, making us well-versed in IRS rules and regulations.",
  },
  {
    icon: Users,
    title: "Personalized Service",
    description: "We cater our services to fit your individual needs, ensuring you receive the attention and guidance necessary for a successful ITIN application.",
  },
  {
    icon: Globe,
    title: "Local and National Presence",
    description: "Whether you're in Fremont, Dublin, or any part of the U.S., we are here to assist you through both virtual and in-person consultations.",
  },
  {
    icon: Shield,
    title: "Hassle-Free Process",
    description: "We simplify the complex ITIN application process so you can focus on what matters most.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description: "Our expertise allows us to expedite your application, minimizing delays and ensuring timely submission.",
  },
  {
    icon: Clock,
    title: "Timely Updates",
    description: "We keep you informed at every stage, providing regular updates on your application status.",
  },
]

const itinBenefits = [
  "File federal tax returns legally in the United States",
  "Claim tax credits and benefits you're entitled to",
  "Add dependents to your tax return",
  "Open interest-bearing bank accounts",
  "Obtain a driver's license in certain states",
  "Provide proof of residency for various purposes",
]

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const updateForm = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    setSubmitError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError("")
    setIsSubmitting(true)

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message.trim() || "—",
          service: "ITIN Processing",
        }),
      })

      const data = await res.json().catch(() => ({}))

      if (!res.ok) {
        throw new Error(
          typeof data.error === "string" ? data.error : "Failed to send message"
        )
      }

      setIsSubmitted(true)
      setFormData({ name: "", email: "", phone: "", message: "" })
      setTimeout(() => setIsSubmitted(false), 3000)
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center py-8 text-center"
        >
          <span className="flex size-12 items-center justify-center rounded-full bg-primary/10">
            <Check className="size-6 text-primary" />
          </span>
          <p className="mt-4 font-medium text-foreground">Message Sent!</p>
          <p className="mt-1 text-sm text-muted-foreground">We&apos;ll get back to you soon.</p>
        </motion.div>
      ) : (
        <>
          <div className="grid gap-4 sm:grid-cols-2">
            <Input
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => updateForm("name", e.target.value)}
              required
              className="h-12"
            />
            <Input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => updateForm("email", e.target.value)}
              required
              className="h-12"
            />
          </div>
          <Input
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => updateForm("phone", e.target.value)}
            className="h-12"
          />
          <Textarea
            placeholder="Tell us about your ITIN needs..."
            value={formData.message}
            onChange={(e) => updateForm("message", e.target.value)}
            rows={4}
            className="resize-none"
          />
          {submitError && (
            <p className="text-sm text-destructive" role="alert">
              {submitError}
            </p>
          )}
          <Button type="submit" className="w-full gap-2 py-6" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <span className="size-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                Sending...
              </>
            ) : (
              <>
                <Send className="size-4" />
                Send Message
              </>
            )}
          </Button>
        </>
      )}
    </form>
  )
}

export default function ITINProcessingPage() {
  const router = useRouter()

  return (
    <main>
      {/* Hero Section */}
      <section className="relative border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground">Home</Link>
              <ChevronRight className="size-3" />
              <Link href="/services" className="hover:text-foreground">Services</Link>
              <ChevronRight className="size-3" />
              <span className="text-foreground">ITIN Processing</span>
            </nav>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
                <BadgeCheck className="size-4 text-primary" />
                <span className="text-sm font-medium text-primary">IRS Certified Acceptance Agent</span>
              </div>
              
              <h1 className="font-serif text-4xl leading-tight tracking-tight text-foreground sm:text-5xl">
                ITIN Processing Services
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                An ITIN (Individual Taxpayer Identification Number) is a nine-digit IRS-issued 
                number for non-resident aliens and certain domestic taxpayers who can't get a 
                Social Security number (SSN). It's used for filing federal tax returns.
              </p>
              <p className="mt-4 text-muted-foreground">
                MVSR Tax is an IRS-Certified Acceptance Agent (CAA), authorized to accept ITIN 
                applications. As a CAA, we review your application documents and submit them 
                directly to the IRS, saving you time and the hassle of mailing originals or 
                visiting an IRS office.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button
                  size="lg"
                  className="gap-2 px-8 py-6"
                  onClick={() => router.push("/contact-us")}
                >
                  Start ITIN Application
                  <ArrowUpRight className="size-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 px-8 py-6"
                  onClick={() => window.open("tel:5107421419", "_blank")}
                >
                  <Phone className="size-4" />
                  Call 510-742-1419
                </Button>
              </div>
            </motion.div>

            {/* CAA Badge Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-5"
            >
              <div className="rounded-2xl border border-border bg-card p-8">
                <div className="mb-6 flex size-16 items-center justify-center rounded-2xl bg-primary/10">
                  <BadgeCheck className="size-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl text-foreground">
                  Certified Acceptance Agent
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  As an IRS Certified Acceptance Agent, we can verify your identity documents 
                  in person, eliminating the need to mail your original passport or other 
                  documents to the IRS.
                </p>
                
                <div className="mt-6 space-y-3">
                  {[
                    "No need to mail original documents",
                    "Faster processing times",
                    "In-person document verification",
                    "Direct IRS submission",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Check className="size-3 text-primary" />
                      </span>
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          {/* What We Offer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="mb-12 max-w-2xl">
              <h2 className="font-serif text-3xl tracking-tight text-foreground">
                What We Offer
              </h2>
              <p className="mt-4 text-muted-foreground">
                Comprehensive ITIN Processing Services in Bay Area, Fremont, and Dublin
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="rounded-2xl border border-border bg-card p-8"
                  >
                    <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <h3 className="font-serif text-lg text-foreground">{service.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Process Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="mb-12 max-w-2xl">
              <h2 className="font-serif text-3xl tracking-tight text-foreground">
                Our Process
              </h2>
              <p className="mt-4 text-muted-foreground">
                Our streamlined process ensures efficiency and accuracy at every step.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-4">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative"
                >
                  <span className="font-serif text-5xl text-primary/20">{step.number}</span>
                  <h3 className="mt-2 font-medium text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
                  
                  {/* Connector line */}
                  {index < processSteps.length - 1 && (
                    <div className="absolute right-0 top-6 hidden h-px w-full bg-border lg:block" style={{ left: "100%", width: "calc(100% - 3rem)" }} />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Why ITIN is Important */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="font-serif text-3xl tracking-tight text-foreground">
                  Why is an ITIN Important?
                </h2>
                <p className="mt-4 text-muted-foreground">
                  An Individual Taxpayer Identification Number (ITIN) is essential for 
                  individuals who are required to file taxes in the United States but are 
                  not eligible for a Social Security Number (SSN). ITINs allow non-resident 
                  aliens, foreign nationals, and dependents to comply with IRS tax laws.
                </p>
                <p className="mt-4 text-muted-foreground">
                  Whether for tax filing, claiming dependents, or applying for various tax 
                  credits, an ITIN is a vital tool for maintaining compliance with U.S. 
                  tax regulations.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-8">
                <h3 className="font-serif text-lg text-foreground">With an ITIN, you can:</h3>
                <ul className="mt-6 space-y-4">
                  {itinBenefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Check className="size-3 text-primary" />
                      </span>
                      <span className="text-sm text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="mb-12 max-w-2xl">
              <h2 className="font-serif text-3xl tracking-tight text-foreground">
                Why Choose MVSR Tax
              </h2>
              <p className="mt-4 text-muted-foreground">
                Trust our expertise to simplify your ITIN application process and ensure success.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {whyChooseUs.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.5 }}
                    className="rounded-xl border border-border bg-card p-6"
                  >
                    <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="size-5 text-primary" />
                    </div>
                    <h3 className="font-medium text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Related Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="mb-8 font-serif text-2xl tracking-tight text-foreground">
              Related Services
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { title: "Individual Tax", href: "/services/individual-tax", description: "Personal tax preparation & filing" },
                { title: "Tax Planning", href: "/services/tax-planning", description: "Strategic tax optimization" },
                { title: "FBAR", href: "/services/fbar", description: "Foreign bank account reporting" },
              ].map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/30"
                >
                  <h3 className="font-medium text-foreground group-hover:text-primary">{service.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{service.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm text-muted-foreground group-hover:text-primary">
                    Learn more
                    <ArrowUpRight className="size-3" />
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="font-serif text-3xl tracking-tight text-foreground">
                  Questions About ITIN?
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Reach out and our team will help you understand eligibility, documents, and next steps.
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex size-12 items-center justify-center rounded-full border border-border">
                    <Phone className="size-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">Call Us</p>
                    <a href="tel:+15107421419" className="text-lg font-medium text-foreground hover:text-primary">
                      510-742-1419
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-8">
                <h3 className="mb-6 font-serif text-lg text-foreground">Send us a message</h3>
                <ContactForm />
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-foreground p-8 text-center sm:p-12"
          >
            <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-2xl bg-background/10">
              <BadgeCheck className="size-8 text-background" />
            </div>
            <h2 className="font-serif text-3xl tracking-tight text-background">
              Ready to Apply for Your ITIN?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-background/70">
              As a Certified Acceptance Agent, we make the ITIN application process 
              seamless and efficient. Get started today and let us handle the complexity.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="gap-2 bg-background px-8 py-6 text-foreground hover:bg-background/90"
                onClick={() =>
                  window.open("https://cal.com/sripathi-vamshi-yadav-cvquju/30min", "_blank")
                }
              >
                Start Your Application
                <ArrowUpRight className="size-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-background/20 bg-transparent px-8 py-6 text-background hover:bg-background/80"
                onClick={() => window.open("tel:5107421419", "_blank")}
              >
                <Phone className="size-4" />
                510-742-1419
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
