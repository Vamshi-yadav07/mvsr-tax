"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { 
  ArrowUpRight, 
  Check, 
  Phone, 
  FileCheck,
  DollarSign,
  TrendingUp,
  Building2,
  Briefcase,
  Shield,
  FileText,
  ChevronRight,
  Plus,
  Minus,
  Send,
  Users,
  Calculator,
  Scale,
  FileSpreadsheet,
  ClipboardCheck,
  Headphones
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Footer } from "@/components/footer"
import { useRouter } from "next/navigation"
const keyFeatures = [
  {
    // number: "01",
    icon: FileCheck,
    title: "Accurate, On-Time Filing",
    description: "Missing a deadline or making an error on your tax return can lead to costly penalties. We ensure your business tax returns are filed accurately and punctually, giving you peace of mind.",
    highlight: "On time, every time—no stress, no worries",
  },
  {
    // number: "02",
    icon: DollarSign,
    title: "Maximizing Deductions and Credits",
    description: "Taxes are complicated, but we make them work for you! Our expert team identifies all available deductions and credits specific to your business, ensuring you pay the least amount legally possible.",
    highlight: "Maximize your savings while staying compliant",
  },
  {
    // number: "03",
    icon: TrendingUp,
    title: "Tax Planning That Pays Off",
    description: "We don't just file your taxes; we provide year-round tax planning to help you optimize your tax strategy. Whether you're a small business or a growing enterprise, we align filings with your goals.",
    highlight: "Smart planning = bigger savings",
  },
  {
    // number: "04",
    icon: Building2,
    title: "Comprehensive Business Tax Services",
    description: "From corporate income tax to sales tax and payroll taxes, we handle all the intricacies of business tax filings. Federal, state, and local—we've got your business covered across all tax categories.",
    highlight: "One stop for all your tax needs",
  },
  {
    // number: "05",
    icon: Briefcase,
    title: "Industry-Specific Expertise",
    description: "No two businesses are alike, and neither are their tax needs. We tailor our services to meet the unique requirements of your industry—whether you're in retail, real estate, tech, or manufacturing.",
    highlight: "Industry experts with tax expertise",
  },
  {
    // number: "06",
    icon: Shield,
    title: "Audit Protection & Support",
    description: "If your business is ever audited, we stand by you. Our team provides comprehensive support throughout the audit process, ensuring you're fully prepared and protected.",
    highlight: "In your corner—every step of the way",
  },
  {
    // number: "07",
    icon: FileText,
    title: "Simplified Reporting and Communication",
    description: "Get the information you need without the confusion. We provide clear, concise financial reports that keep you informed and in control of your business's tax situation.",
    highlight: "Tax filing made simple, always in the loop",
  },
]

const corporationServices = [
  "Taxation of S-Corporations and C-Corporations (Form 1120S and Form 1120)",
  "Multi-State Business Tax Returns",
  "Income Deductions and Special Provisions",
  "Shareholder and Nonshareholder Compensation Optimization",
  "Earnings and Profits (E&P) Calculations",
  "Distribution and Recognition Requirements",
  "Special Deductions Identification",
]

const partnershipServices = [
  "Taxation of Partnership Returns (Form 1065)",
  "Multi-State Partnership/LLC Tax Returns",
  "Limitations and Losses, Deductions and Credits",
  "Unrealized Receivables and Inventory Handling",
  "Shareholder and Nonshareholder Compensation",
  "Partnership Distributions to Partners",
  "Transactions between Partnership and Partners",
  "Basis in Partnership Calculations",
  "Disposition of Partner's Interest Guidance",
]

const whatYouGet = [
  {
    icon: FileSpreadsheet,
    title: "Business Tax Filing",
    description: "We prepare and file your federal, state, and local tax returns, ensuring compliance with all regulatory requirements.",
  },
  {
    icon: Calculator,
    title: "Partnership & LLC-Specific Deductions",
    description: "We identify tax-saving opportunities specific to partnerships and LLCs, including deductions, credits, and special tax provisions.",
  },
  {
    icon: Users,
    title: "Multi-Member LLC Returns",
    description: "We handle complex multi-member LLC returns, ensuring proper allocation of profits, losses, and deductions to each partner.",
  },
  {
    icon: FileText,
    title: "K-1 Preparation",
    description: "We prepare and distribute Schedule K-1 forms to your partners or LLC members, ensuring accurate reporting.",
  },
  {
    icon: Scale,
    title: "Compliance with Changing Tax Laws",
    description: "We stay up-to-date on federal and California tax regulations to ensure your business remains in compliance.",
  },
  {
    icon: Headphones,
    title: "Ongoing Tax Support",
    description: "Beyond just tax season, we offer ongoing support to help you make tax-efficient decisions year-round.",
  },
]

const processSteps = [
  {
    number: "01",
    title: "Business Consultation",
    description: "We start by understanding your business structure, financials, and goals to tailor our services to your specific needs.",
  },
  {
    number: "02",
    title: "Document Collection & Review",
    description: "We gather all relevant financial statements, expense reports, and documentation to ensure we capture every deduction and credit.",
  },
  {
    number: "03",
    title: "Tax Preparation & Analysis",
    description: "Our tax experts prepare your tax return, identifying opportunities to minimize your tax burden while ensuring full compliance.",
  },
  {
    number: "04",
    title: "Final Review & Filing",
    description: "Before filing, we review your return thoroughly to ensure accuracy. We then file your taxes electronically for quick and secure submission.",
  },
  {
    number: "05",
    title: "Post-Filing Support",
    description: "We remain available for any questions or follow-up after your return is filed, offering audit support and guidance on any IRS inquiries.",
  },
]

const faqs = [
  {
    question: "What types of business structures do you handle?",
    answer: "We handle all types of business structures including Sole Proprietorships, Partnerships, LLCs (single-member and multi-member), S-Corporations, and C-Corporations. Each structure has unique tax implications, and we tailor our services accordingly.",
  },
  {
    question: "When are business tax returns due?",
    answer: "For calendar year businesses: Partnerships and S-Corps are due March 15th, while C-Corporations are due April 15th. Extensions are available—Partnerships and S-Corps can extend to September 15th, and C-Corps to October 15th. We help ensure you never miss a deadline.",
  },
  {
    question: "What documents do I need for business tax preparation?",
    answer: "You'll need financial statements (income statement, balance sheet), bank statements, receipts for business expenses, payroll records, previous tax returns, depreciation schedules, and any 1099s or W-2s issued. We'll provide a detailed checklist tailored to your business.",
  },
  {
    question: "Can you help if I have businesses in multiple states?",
    answer: "Absolutely! We specialize in multi-state tax filings. We'll ensure proper allocation of income across states, file returns in each required state, and help you navigate different state tax laws and requirements.",
  },
  {
    question: "How can I reduce my business tax liability?",
    answer: "There are many strategies including maximizing deductions, choosing the right entity structure, timing income and expenses, taking advantage of tax credits, retirement plan contributions, and proper depreciation of assets. We'll develop a customized strategy for your situation.",
  },
  {
    question: "What happens if my business gets audited?",
    answer: "Don't worry—we've got you covered. We provide full audit representation and support. We'll review the audit notice, gather required documentation, communicate with the IRS on your behalf, and guide you through the entire process.",
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
    businessType: "",
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
      formData.businessType.trim() && `Business type: ${formData.businessType.trim()}`,
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
          service: "Business Tax",
        }),
      })

      const data = await res.json().catch(() => ({}))

      if (!res.ok) {
        throw new Error(
          typeof data.error === "string" ? data.error : "Failed to send message"
        )
      }

      setIsSubmitted(true)
      setFormData({ name: "", email: "", phone: "", businessType: "", message: "" })
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
              placeholder="Business Type (e.g., LLC, S-Corp)"
              value={formData.businessType}
              onChange={(e) => updateForm("businessType", e.target.value)}
              className="h-12"
            />
          </div>
          <Textarea
            placeholder="Tell us about your business tax needs..."
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
                Get Business Tax Help
              </>
            )}
          </Button>
        </>
      )}
    </form>
  )
}

export default function BusinessTaxPage() {
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
              <span className="text-foreground">Business Tax</span>
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
                Business Tax Services
              </p>
              
              <h1 className="font-serif text-4xl leading-tight tracking-tight text-foreground sm:text-5xl">
                Stress-Free Filings,{" "}
                <span className="text-primary">Maximum Savings</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Navigating business taxes doesn't have to be a headache. MVSR Tax's 
                Business Tax Filing Services are designed to take the stress out of 
                tax season, ensuring that your returns are filed accurately, on time, 
                and with maximum tax-saving opportunities.
              </p>
              <p className="mt-4 text-muted-foreground">
                We handle the complex paperwork, so you can focus on growing your business.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button size="lg" className="gap-2 px-8 py-6" onClick={() => router.push("/contact-us")}>
                  Get Started
                  <ArrowUpRight className="size-4" />
                </Button>
                <Button size="lg" variant="outline" className="gap-2 px-8 py-6" onClick={() => window.open("tel:5107421419", "_blank")}>
                  <Phone className="size-4" />
                  Call 510-742-1419
                </Button>
              </div>
            </motion.div>

            {/* Why Choose Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-5"
            >
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8">
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-primary/10">
                  <Building2 className="size-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg text-foreground">
                  Why Choose MVSR Tax?
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  We take the complexity out of business tax filing, offering expert 
                  guidance, precise filings, and a proactive approach to minimizing 
                  your tax liability.
                </p>
                
                <div className="mt-6 space-y-3">
                  {[
                    "Save time on complex paperwork",
                    "Reduce stress during tax season",
                    "Put more money back in your pocket",
                    "Expert team handling your taxes",
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
          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="mb-12 max-w-2xl">
              <h2 className="font-serif text-3xl tracking-tight text-foreground">
                Key Features of Our Business Tax Filing Services
              </h2>
              <p className="mt-4 text-muted-foreground">
                Comprehensive solutions designed for businesses of all sizes.
              </p>
            </div>

            <div className="space-y-6">
              {keyFeatures.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.5 }}
                    className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/30 lg:p-8"
                  >
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
                      <div className="flex shrink-0 items-center gap-4">
                        <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary">
                          <Icon className="size-6 text-primary transition-colors group-hover:text-primary-foreground" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-serif text-xl text-foreground">{feature.title}</h3>
                        <p className="mt-2 text-muted-foreground">{feature.description}</p>
                        <p className="mt-3 text-sm font-medium text-primary">{feature.highlight}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Corporation & Partnership Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Corporations */}
              <div className="rounded-2xl border border-border bg-card p-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10">
                    <Building2 className="size-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl text-foreground">
                    Business Tax Preparation for Corporations
                  </h3>
                </div>
                <ul className="space-y-3">
                  {corporationServices.map((service, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span className="text-sm text-muted-foreground">{service}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Partnerships & LLCs */}
              <div className="rounded-2xl border border-border bg-card p-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10">
                    <Users className="size-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl text-foreground">
                    Business Tax Preparation for Partnerships & LLCs
                  </h3>
                </div>
                <ul className="space-y-3">
                  {partnershipServices.map((service, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span className="text-sm text-muted-foreground">{service}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* What You Get */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="mb-12 max-w-2xl">
              <h2 className="font-serif text-3xl tracking-tight text-foreground">
                What You Get
              </h2>
              <p className="mt-4 text-muted-foreground">
                Comprehensive business tax services tailored to your needs.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {whatYouGet.map((item, index) => {
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
                A detailed and personalized approach to business tax preparation.
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
                  Common questions about business tax filing and preparation.
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
                  Need Business Tax Help?
                </h2>
                <p className="mt-4 text-muted-foreground">
                  The first step to hassle-free accounting, tax returns, and tax 
                  planning starts by reaching out to one of our representatives.
                </p>

                <div className="mt-8 rounded-xl bg-muted/50 p-6">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Make tax season a breeze:</strong> With 
                    our team handling your taxes, you can be confident your business is in 
                    good hands—saving you time, reducing stress, and putting more money 
                    back in your pocket.
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
                <h3 className="mb-6 font-serif text-lg text-foreground">Get Started Today</h3>
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
              <ClipboardCheck className="size-8 text-background" />
            </div>
            <h2 className="font-serif text-3xl tracking-tight text-background">
              Hassle-Free Filing, Maximized Savings
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-background/70">
              Let MVSR Tax handle your business taxes with expert guidance, precise 
              filings, and a proactive approach to minimizing your tax liability. 
              Contact us today and let's start optimizing your tax filings for success!
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="gap-2 bg-background px-8 py-6 text-foreground hover:bg-background/90"
                onClick={() => window.open("https://cal.com/sripathi-vamshi-yadav-cvquju/30min", "_blank")}
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
