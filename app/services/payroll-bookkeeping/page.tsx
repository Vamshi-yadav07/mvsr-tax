"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { 
  ArrowUpRight, 
  Check, 
  Phone, 
  Wallet,
  FileText,
  Scale,
  Settings,
  BarChart3,
  Headphones,
  ChevronRight,
  Plus,
  Minus,
  Send,
  Calculator,
  Users,
  CreditCard,
  BookOpen,
  PieChart,
  FileSpreadsheet,
  Building2,
  Clock,
  Zap
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Footer } from "@/components/footer"

const keyFeatures = [
  {
    // number: "01",
    icon: Wallet,
    title: "Effortless Payroll Management",
    description: "Say goodbye to payroll headaches! We ensure that your employees are paid accurately and on time, every time. We handle all aspects of payroll, from calculating wages to withholding taxes and filing necessary reports.",
    highlight: "Accurate, on-time payments—every time",
  },
  {
    // number: "02",
    icon: Scale,
    title: "Tax Compliance Made Simple",
    description: "With changing tax regulations, staying compliant can be a challenge. We take care of all your payroll tax filings, ensuring that everything from federal and state withholdings to Social Security and Medicare taxes is reported and paid on time.",
    highlight: "Saving you from penalties and interest",
  },
  {
    // number: "03",
    icon: Settings,
    title: "Custom Solutions for Your Business",
    description: "No two businesses are the same, and neither are their payroll needs. We tailor our services to fit your specific requirements, whether you have hourly employees, salaried staff, or contractors.",
    highlight: "Flexible solutions that evolve with your business",
  },
  {
    // number: "04",
    icon: BookOpen,
    title: "Precise Bookkeeping & Financial Tracking",
    description: "Keep your financials in check with our accurate bookkeeping services. We manage all aspects of your business's financial records, from income and expenses to balance sheets and profit-and-loss statements.",
    highlight: "Books always up-to-date",
  },
  {
    // number: "05",
    icon: Zap,
    title: "Maximize Efficiency with Automation",
    description: "Save time and reduce human error with our advanced payroll and bookkeeping software. We integrate modern technology to automate routine tasks, giving you more time to focus on growing your business.",
    highlight: "Complete financial transparency",
  },
  {
    // number: "06",
    icon: Headphones,
    title: "Expert Guidance, Year-Round Support",
    description: "We don't just handle your payroll and bookkeeping—we partner with you to provide ongoing support. Our experts offer valuable financial insights, strategic advice, and ensure your records are ready for tax season.",
    highlight: "Ready for audits or any challenges",
  },
  {
    number: "07",
    icon: FileText,
    title: "Stress-Free Reporting",
    description: "From payroll reports to financial statements, we provide the detailed reports you need, exactly when you need them. Stay ahead of your business's financial health with easily accessible, accurate, and timely reports.",
    highlight: "Keep you in control",
  },
]

const payrollServices = [
  "Payroll for All Types of Business Entities for All States",
  "Preparing Federal Form 940 (Annual Unemployment Tax)",
  "Preparing Federal Form 941 (Quarterly Employment Tax)",
  "Preparing State Quarterly and Annual Forms",
  "Generating Employee W-2 Forms",
  "Payroll and Company Setup for Businesses",
  "Direct Deposit Setup for Employee Salaries",
  "Direct Deposit Setup for Contractors",
]

const bookkeepingServices = [
  "Assets, Liabilities, and Owner's Equity Management",
  "Business Transactions and Bookkeeping Equation Tracking",
  "Chart of Accounts Maintenance",
  "Debits and Credits Tracking",
  "Trial Balance and Work Sheets Preparation",
  "Financial Statements (Income, Balance Sheet, Cash Flow)",
  "Financial Accounting and Regulatory Compliance",
  "Adjusting Entries for Accruals and Deferrals",
  "Bank Reconciliation",
  "Accounts Receivable and Bad Debts Management",
]

const processSteps = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "We assess your business's needs and design a custom payroll and bookkeeping solution tailored to your size and industry.",
  },
  {
    number: "02",
    title: "System Setup & Integration",
    description: "We set up your payroll system, integrating it with your existing processes or creating a new one from scratch.",
  },
  {
    number: "03",
    title: "Ongoing Payroll Management",
    description: "We process payroll on your chosen schedule, ensuring timely payments and accurate tax withholdings.",
  },
  {
    number: "04",
    title: "Efficient Bookkeeping",
    description: "Our team maintains accurate and timely financial records, giving you real-time insights into your business's performance.",
  },
  {
    number: "05",
    title: "Regular Reporting & Compliance",
    description: "We provide regular reports on payroll and financials, keeping you informed and ensuring full compliance.",
  },
]

const payrollFaqs = [
  {
    question: "Do you offer direct deposit for employees?",
    answer: "Yes, we offer direct deposit services for both employees and contractors. We set up secure direct deposit to ensure your team gets paid on time, every time. This eliminates the hassle of paper checks and provides a convenient payment method for everyone.",
  },
  {
    question: "Can you handle payroll for both hourly and salaried employees?",
    answer: "Absolutely! We manage payroll for all types of employees including hourly workers, salaried staff, part-time employees, and independent contractors. We calculate wages, overtime, bonuses, and commissions accurately according to your specific pay structures.",
  },
  {
    question: "What payroll services does MVSR Tax offer?",
    answer: "We offer comprehensive payroll services including wage calculation, tax withholding, direct deposit setup, quarterly and annual tax filings (Forms 940, 941), W-2 preparation, state payroll tax compliance, and new hire reporting. We handle payroll for businesses of all sizes across all 50 states.",
  },
  {
    question: "How do you ensure compliance with tax regulations?",
    answer: "We stay current with federal, state, and local tax laws and regulations. Our team handles all payroll tax calculations, filings, and payments on time to avoid penalties. We prepare and file Forms 940, 941, and all required state forms, ensuring your business remains fully compliant.",
  },
  {
    question: "Do you provide year-end reporting and W-2s?",
    answer: "Yes, we handle all year-end payroll reporting. We prepare and distribute W-2 forms to all employees, file W-3 transmittal forms with the SSA, provide 1099s for contractors, and ensure all annual reconciliation forms are submitted accurately and on time.",
  },
]

const bookkeepingFaqs = [
  {
    question: "Do you handle bank reconciliations?",
    answer: "Yes, we perform regular bank reconciliations to ensure your financial records match your bank statements. This process helps identify discrepancies, detect errors or fraud, and maintain accurate cash flow tracking. We recommend monthly reconciliations for optimal financial management.",
  },
  {
    question: "How often will I receive financial reports?",
    answer: "We provide financial reports on a schedule that works for your business—monthly, quarterly, or as needed. Standard reports include profit and loss statements, balance sheets, cash flow statements, and accounts receivable/payable aging reports. You'll also have access to real-time reports through our client portal.",
  },
  {
    question: "What type of bookkeeping services does MVSR Tax provide?",
    answer: "We provide full-service bookkeeping including transaction recording, accounts payable/receivable management, bank reconciliation, financial statement preparation, chart of accounts maintenance, adjusting entries, and monthly/quarterly financial reporting. We customize our services to fit your specific business needs.",
  },
  {
    question: "Do you prepare financial reports like profit and loss statements or balance sheets?",
    answer: "Yes, we prepare comprehensive financial statements including Profit & Loss (Income) Statements, Balance Sheets, Cash Flow Statements, and custom reports as needed. These reports give you a clear picture of your business's financial health and help you make informed decisions.",
  },
  {
    question: "Do you assist with tax preparation and filing?",
    answer: "Yes, our bookkeeping services seamlessly integrate with tax preparation. We ensure your books are organized and accurate throughout the year, making tax season smooth and stress-free. Our detailed records and financial statements are tax-ready, and we work closely with our tax team to maximize your deductions.",
  },
]

function FAQItem({ faq, index, isOpen, onToggle }: { 
  faq: { question: string; answer: string }
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
    serviceType: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", phone: "", serviceType: "", message: "" })
    }, 3000)
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
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="h-12"
            />
            <Input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="h-12"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="h-12"
            />
            <Input
              placeholder="Service Needed (Payroll/Bookkeeping)"
              value={formData.serviceType}
              onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
              className="h-12"
            />
          </div>
          <Textarea
            placeholder="Tell us about your payroll or bookkeeping needs..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={4}
            className="resize-none"
          />
          <Button type="submit" className="w-full gap-2 py-6" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <span className="size-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                Sending...
              </>
            ) : (
              <>
                <Send className="size-4" />
                Get Started
              </>
            )}
          </Button>
        </>
      )}
    </form>
  )
}

export default function PayrollBookkeepingPage() {
  const [openPayrollFaqIndex, setOpenPayrollFaqIndex] = useState<number | null>(0)
  const [openBookkeepingFaqIndex, setOpenBookkeepingFaqIndex] = useState<number | null>(0)

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
              <span className="text-foreground">Payroll & Bookkeeping</span>
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
                Payroll & Bookkeeping Services
              </p>
              
              <h1 className="font-serif text-4xl leading-tight tracking-tight text-foreground sm:text-5xl">
                Streamline Your Business,{" "}
                <span className="text-primary">Maximize Efficiency</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                At MVSR Tax, we take the stress out of payroll and bookkeeping, 
                offering seamless solutions that keep your business compliant, 
                organized, and ready for the future.
              </p>
              <p className="mt-4 text-muted-foreground">
                Focus on your business while we handle the numbers—simple, efficient, and hassle-free.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button size="lg" className="gap-2 px-8 py-6">
                  Get Started
                  <ArrowUpRight className="size-4" />
                </Button>
                <Button size="lg" variant="outline" className="gap-2 px-8 py-6">
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
                  <Calculator className="size-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg text-foreground">
                  Why Choose MVSR Tax?
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  With our tailored services, expert team, and cutting-edge technology, 
                  you can rest easy knowing your payroll and financial records are in good hands.
                </p>
                
                <div className="mt-6 space-y-3">
                  {[
                    "Tailored payroll solutions",
                    "Expert bookkeeping team",
                    "Cutting-edge technology",
                    "Year-round support",
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
                Key Features of Our Payroll & Bookkeeping Services
              </h2>
              <p className="mt-4 text-muted-foreground">
                Complete financial management solutions for your business.
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
                        {/* <span className="font-serif text-3xl text-primary/30">{feature.number}</span> */}
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

          {/* Services Lists */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Payroll Services */}
              <div className="rounded-2xl border border-border bg-card p-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10">
                    <Users className="size-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl text-foreground">
                    Payroll Services
                  </h3>
                </div>
                <p className="mb-6 text-sm text-muted-foreground">
                  Serving Bay Area, Fremont, Dublin, and nationwide
                </p>
                <ul className="space-y-3">
                  {payrollServices.map((service, index) => (
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

              {/* Bookkeeping Services */}
              <div className="rounded-2xl border border-border bg-card p-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10">
                    <BookOpen className="size-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl text-foreground">
                    Bookkeeping Services
                  </h3>
                </div>
                <p className="mb-6 text-sm text-muted-foreground">
                  Serving Bay Area, Fremont, Dublin, and nationwide
                </p>
                <ul className="space-y-3">
                  {bookkeepingServices.map((service, index) => (
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
                A streamlined, personalized, and fully compliant approach.
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

          {/* FAQ Sections */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="mb-12 max-w-2xl">
              <h2 className="font-serif text-3xl tracking-tight text-foreground">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-muted-foreground">
                Common questions about our payroll and bookkeeping services.
              </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-2">
              {/* Payroll FAQs */}
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                    <Wallet className="size-5 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg text-foreground">Payroll Services</h3>
                </div>
                <div className="border-t border-border">
                  {payrollFaqs.map((faq, index) => (
                    <FAQItem
                      key={index}
                      faq={faq}
                      index={index}
                      isOpen={openPayrollFaqIndex === index}
                      onToggle={() => setOpenPayrollFaqIndex(openPayrollFaqIndex === index ? null : index)}
                    />
                  ))}
                </div>
              </div>

              {/* Bookkeeping FAQs */}
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                    <BookOpen className="size-5 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg text-foreground">Bookkeeping Services</h3>
                </div>
                <div className="border-t border-border">
                  {bookkeepingFaqs.map((faq, index) => (
                    <FAQItem
                      key={index}
                      faq={faq}
                      index={index}
                      isOpen={openBookkeepingFaqIndex === index}
                      onToggle={() => setOpenBookkeepingFaqIndex(openBookkeepingFaqIndex === index ? null : index)}
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
                  Need Payroll or Bookkeeping Help?
                </h2>
                <p className="mt-4 text-muted-foreground">
                  The first step to hassle-free accounting starts by reaching out to 
                  one of our representatives. Let us help you streamline your operations 
                  and ensure your financial success.
                </p>

                <div className="mt-8 rounded-xl bg-muted/50 p-6">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Why partner with us?</strong> Focus 
                    on your business while we handle the numbers. With our tailored services, 
                    expert team, and cutting-edge technology, your payroll and financial 
                    records are in good hands.
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
              <PieChart className="size-8 text-background" />
            </div>
            <h2 className="font-serif text-3xl tracking-tight text-background">
              Simple, Efficient, Hassle-Free
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-background/70">
              We take the stress out of payroll and bookkeeping, offering seamless 
              solutions that keep your business compliant, organized, and ready for 
              the future. Contact MVSR Tax today!
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="gap-2 bg-background px-8 py-6 text-foreground hover:bg-background/90"
              >
                Schedule Consultation
                <ArrowUpRight className="size-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-background/20 bg-transparent px-8 py-6 text-background hover:bg-background/10"
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
