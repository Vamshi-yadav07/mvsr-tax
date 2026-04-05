"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { 
  ArrowUpRight, 
  Check, 
  Phone, 
  Globe,
  TrendingUp,
  PieChart,
  Scale,
  Home,
  ChevronRight,
  Plus,
  Minus,
  Send,
  Building2,
  FileText,
  Shield,
  Users,
  Landmark,
  MapPin,
  Briefcase,
  BadgeCheck
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Footer } from "@/components/footer"
import { useRouter } from "next/navigation"

const services = [
  {
    icon: TrendingUp,
    title: "Guidance on Investment Opportunities",
    description: "We provide tailored advice on investment options in India, including real estate, stocks, mutual funds, bonds, and more.",
  },
  {
    icon: PieChart,
    title: "Portfolio Diversification",
    description: "We help you diversify your portfolio by strategically incorporating Indian investments, balancing risk and reward based on your financial goals.",
  },
  {
    icon: Scale,
    title: "Tax Planning and Compliance",
    description: "Navigating the tax implications of cross-border investments can be complex. We ensure you are compliant with both U.S. and Indian tax laws, avoiding potential penalties while optimizing your tax savings.",
  },
  {
    icon: FileText,
    title: "Regulatory Guidance",
    description: "We provide insights into regulations like the Foreign Exchange Management Act (FEMA) and Reserve Bank of India (RBI) rules, ensuring your investments in India are fully compliant.",
  },
  {
    icon: Home,
    title: "Real Estate Investments",
    description: "For those interested in purchasing property in India, we assist with the entire process, from identifying opportunities to managing legal and tax implications.",
  },
]

const processSteps = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "We begin by understanding your investment goals, risk tolerance, and financial situation to recommend the best investment options in India.",
  },
  {
    number: "02",
    title: "Investment Strategy Development",
    description: "Based on your objectives, we create a customized investment strategy, incorporating a mix of real estate, financial markets, or other asset classes.",
  },
  {
    number: "03",
    title: "Tax Planning & Compliance",
    description: "We navigate the tax implications of cross-border investments, ensuring compliance with both U.S. and Indian tax regulations.",
  },
  {
    number: "04",
    title: "Execution & Ongoing Support",
    description: "Once the strategy is finalized, we assist with executing your investments in India and provide ongoing support for managing your portfolio.",
  },
  {
    number: "05",
    title: "Regulatory Assistance",
    description: "We keep you informed about any changes in Indian or U.S. investment regulations, making adjustments to your portfolio as needed.",
  },
]

const whyChooseUs = [
  {
    icon: Globe,
    title: "Expertise in Cross-Border Investments",
    description: "We specialize in helping U.S. residents invest in India, with a deep understanding of both U.S. and Indian tax laws and regulations.",
  },
  {
    icon: TrendingUp,
    title: "Personalized Investment Strategies",
    description: "We develop customized investment strategies that align with your financial goals, helping you maximize returns while mitigating risks.",
  },
  {
    icon: Shield,
    title: "Seamless Compliance",
    description: "Our team handles all aspects of regulatory compliance, including adhering to U.S. and Indian tax laws, ensuring you avoid any legal or financial pitfalls.",
  },
  {
    icon: MapPin,
    title: "Local & Global Experience",
    description: "We have extensive experience serving clients in the Bay Area, Fremont, Dublin, and beyond, providing you with a trusted partner who understands cross-border investing.",
  },
]

const faqs = [
  {
    question: "Can U.S. residents legally invest in India?",
    answer: "Yes, U.S. residents can legally invest in India through various channels including the Portfolio Investment Scheme (PIS), Foreign Direct Investment (FDI), and real estate purchases. However, there are specific regulations under FEMA and RBI guidelines that must be followed. We help you navigate these requirements to ensure full compliance.",
  },
  {
    question: "What types of investments in India are available to U.S. residents?",
    answer: "U.S. residents can invest in Indian stocks and mutual funds through the PIS route, purchase real estate (with some restrictions), invest in government and corporate bonds, and participate in certain private equity opportunities. We help you identify the best options based on your goals and risk tolerance.",
  },
  {
    question: "How are my Indian investments taxed in the U.S.?",
    answer: "Income from Indian investments (dividends, interest, capital gains) is generally taxable in the U.S. However, the India-U.S. Tax Treaty helps prevent double taxation. You may be able to claim foreign tax credits for taxes paid in India. We ensure proper reporting on your U.S. tax return and help you maximize tax efficiency.",
  },
  {
    question: "Do I need to report my Indian investments on FBAR?",
    answer: "Yes, if your Indian financial accounts (including investment accounts) exceed $10,000 in aggregate at any time during the year, you must file an FBAR. Additionally, you may need to file Form 8938 for FATCA compliance. We handle all required reporting to keep you compliant.",
  },
  {
    question: "Can I buy property in India as a U.S. resident?",
    answer: "Yes, NRIs (Non-Resident Indians) and PIOs (Persons of Indian Origin) can purchase residential and commercial property in India. However, agricultural land, plantation property, and farmhouses have restrictions. We guide you through the entire process including legal, tax, and repatriation considerations.",
  },
  {
    question: "What is FEMA and how does it affect my investments?",
    answer: "FEMA (Foreign Exchange Management Act) is the Indian law that regulates foreign exchange transactions and overseas investments. It governs how U.S. residents can invest in India, repatriate funds, and maintain accounts. We ensure all your investments comply with FEMA regulations to avoid penalties.",
  },
]

function FAQItem({ faq, index, isOpen, onToggle }: { 
  faq: typeof faqs[0]
  index: number
  isOpen: boolean
  onToggle: () => void 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="border-b border-border"
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-6 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-base font-medium text-foreground">{faq.question}</span>
        <span className="shrink-0 rounded-full border border-border p-1.5">
          {isOpen ? (
            <Minus className="size-3.5 text-foreground" />
          ) : (
            <Plus className="size-3.5 text-muted-foreground" />
          )}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="pb-5 pr-12 text-sm leading-relaxed text-muted-foreground">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    investmentType: "",
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

    const messageParts = [
      formData.investmentType.trim() &&
        `Investment interest: ${formData.investmentType.trim()}`,
      formData.message.trim(),
    ].filter(Boolean)
    const composedMessage = messageParts.length > 0 ? messageParts.join("\n\n") : "—"

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: composedMessage,
          service: "Foreign Investments",
        }),
      })

      const data = await res.json().catch(() => ({}))

      if (!res.ok) {
        throw new Error(
          typeof data.error === "string" ? data.error : "Failed to send message"
        )
      }

      setIsSubmitted(true)
      setFormData({ name: "", email: "", phone: "", investmentType: "", message: "" })
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
          <p className="mt-1 text-sm text-muted-foreground">We'll get back to you soon.</p>
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
          <div className="grid gap-4 sm:grid-cols-2">
            <Input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => updateForm("phone", e.target.value)}
              className="h-12"
            />
            <Input
              placeholder="Investment Interest (Real Estate, Stocks, etc.)"
              value={formData.investmentType}
              onChange={(e) => updateForm("investmentType", e.target.value)}
              className="h-12"
            />
          </div>
          <Textarea
            placeholder="Tell us about your investment goals in India..."
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
                Start Your Investment Journey
              </>
            )}
          </Button>
        </>
      )}
    </form>
  )
}

export default function ForeignInvestmentPage() {
  const router = useRouter()
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)

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
              <span className="text-foreground">Foreign Investment</span>
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
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">
                Foreign Investment Services
              </p>
              
              <h1 className="font-serif text-4xl leading-tight tracking-tight text-foreground sm:text-5xl">
                Investment Services in India{" "}
                <span className="text-primary">for U.S. Residents</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                At MVSR Tax, we provide specialized Investment Services for U.S. 
                residents interested in investing in India. Whether you're looking 
                to diversify your portfolio, explore real estate opportunities, or 
                invest in Indian financial markets, our expert team is here to guide you.
              </p>
              <p className="mt-4 text-muted-foreground">
                Serving individuals in the Bay Area, Fremont, Dublin, and across the U.S., 
                we ensure you maximize your investment potential while staying compliant 
                with both U.S. and Indian regulations.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button
                  size="lg"
                  className="gap-2 px-8 py-6"
                  onClick={() => router.push("/contact-us")}
                >
                  Explore Opportunities
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

            {/* Investment Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-5"
            >
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8">
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-primary/10">
                  <Globe className="size-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg text-foreground">
                  Invest with Confidence
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  Navigate the complexities of cross-border investing with ease. 
                  Our team of experts provides the guidance and support you need 
                  to grow your wealth through Indian investments.
                </p>
                
                <div className="mt-6 space-y-3">
                  {[
                    "Real estate opportunities",
                    "Stocks & mutual funds",
                    "Tax-optimized strategies",
                    "Full regulatory compliance",
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
          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="mb-12 max-w-2xl">
              <h2 className="font-serif text-3xl tracking-tight text-foreground">
                How We Can Help You
              </h2>
              <p className="mt-4 text-muted-foreground">
                Our investment services in India for U.S. residents include:
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/30"
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
                A comprehensive and personalized approach to helping U.S. residents invest in India.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-5">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative text-center"
                >
                  <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full border-2 border-primary bg-primary/10">
                    <span className="font-serif text-xl text-primary">{step.number}</span>
                  </div>
                  <h3 className="font-medium text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
                </motion.div>
              ))}
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
                Bay Area, Fremont, and Dublin, CA
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {whyChooseUs.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex gap-4 rounded-2xl border border-border bg-card p-6"
                  >
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">{item.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-4">
                <h2 className="font-serif text-3xl tracking-tight text-foreground">
                  Frequently Asked Questions
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Common questions about investing in India as a U.S. resident.
                </p>
              </div>

              <div className="lg:col-span-8">
                <div className="border-t border-border">
                  {faqs.map((faq, index) => (
                    <FAQItem
                      key={index}
                      faq={faq}
                      index={index}
                      isOpen={openFaqIndex === index}
                      onToggle={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    />
                  ))}
                </div>
              </div>
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
                  Ready to Invest in India?
                </h2>
                <p className="mt-4 text-muted-foreground">
                  MVSR Tax is here to help you navigate the complexities of cross-border 
                  investing with ease. Whether you're located in Fremont, Dublin, or 
                  anywhere in the Bay Area, our team of experts is ready to provide 
                  the guidance you need.
                </p>

                <div className="mt-8 rounded-xl bg-muted/50 p-6">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Invest with Confidence:</strong> Our 
                    specialized team understands both U.S. and Indian tax laws, ensuring 
                    your investments are compliant, optimized, and positioned for growth.
                  </p>
                </div>

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
                <h3 className="mb-6 font-serif text-lg text-foreground">Start Your Investment Journey</h3>
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
              <Globe className="size-8 text-background" />
            </div>
            <h2 className="font-serif text-3xl tracking-tight text-background">
              Invest in India with Confidence
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-background/70">
              Ready to explore investment opportunities in India? MVSR Tax is here 
              to help you navigate the complexities of cross-border investing with ease. 
              Our team of experts is ready to help you grow your wealth through Indian investments.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="gap-2 bg-background px-8 py-6 text-foreground hover:bg-background/90"
                onClick={() =>
                  window.open("https://cal.com/sripathi-vamshi-yadav-cvquju/30min", "_blank")
                }
              >
                Schedule Consultation
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
