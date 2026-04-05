"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { 
  ArrowUpRight, 
  Check, 
  Phone, 
  Target, 
  TrendingUp, 
  PiggyBank,
  Building2,
  BarChart3,
  Calendar,
  RefreshCw,
  Users,
  Briefcase,
  DollarSign,
  Home,
  ChevronRight,
  Plus,
  Minus,
  Send,
  Sparkles
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Footer } from "@/components/footer"
import { useRouter } from "next/navigation"

const keyFeatures = [
  {
    // number: "01",
    icon: Target,
    title: "Personalized Tax Strategies",
    description: "One size does not fit all. We create customized tax plans based on your financial goals, whether you're an individual looking to optimize deductions or a business seeking long-term tax efficiency.",
    highlight: "Tailored plans that work for you",
  },
  {
    // number: "02",
    icon: DollarSign,
    title: "Maximize Deductions & Credits",
    description: "Don't leave money on the table! Our team dives deep into your finances to identify all the available tax deductions and credits you qualify for, ensuring you're paying the lowest taxes possible.",
    highlight: "More savings, less stress",
  },
  {
    // number: "03",
    icon: PiggyBank,
    title: "Retirement & Investment Tax Optimization",
    description: "Taxes don't stop at your paycheck. Whether you're saving for retirement or growing your investment portfolio, we help you develop strategies that minimize taxes on your returns.",
    highlight: "Grow your wealth, not your tax bill",
  },
  {
    // number: "04",
    icon: Building2,
    title: "Business Tax Planning",
    description: "For businesses, effective tax planning is key to maximizing profitability. We work with business owners to structure their operations, manage expenses, and take advantage of tax-saving opportunities.",
    highlight: "Smart business decisions, optimized results",
  },
  {
    // number: "05",
    icon: BarChart3,
    title: "Tax Efficiency Across All Income Sources",
    description: "Whether you're earning income from a job, investments, a side business, or real estate, we ensure that all your income streams are taxed efficiently while minimizing exposure.",
    highlight: "Diversify income, optimize taxes",
  },
  {
    // number: "06",
    icon: Calendar,
    title: "Forward-Looking Strategies",
    description: "Tax planning isn't just about today; it's about the future. We work with you to plan for upcoming life events—such as buying a home, getting married, or starting a business.",
    highlight: "Plan today, save tomorrow",
  },
  {
    // number: "07",
    icon: RefreshCw,
    title: "Ongoing Tax Monitoring & Adjustments",
    description: "Tax laws change, and so should your tax strategy. We offer year-round support to ensure your tax plan stays updated and optimized, so you're always prepared.",
    highlight: "Proactive planning that evolves with you",
  },
]

const whoNeedsTaxPlanning = [
  {
    icon: TrendingUp,
    title: "Individuals with High Income",
    description: "If you fall into higher tax brackets, tax planning is critical to reducing your overall tax burden.",
  },
  {
    icon: Building2,
    title: "Business Owners",
    description: "Entrepreneurs and small business owners need tax strategies to manage cash flow, optimize deductions, and minimize liability.",
  },
  {
    icon: BarChart3,
    title: "Investors",
    description: "If you have investments, capital gains tax planning can significantly impact your returns.",
  },
  {
    icon: Briefcase,
    title: "Self-Employed & Freelancers",
    description: "Managing your own taxes can be complicated, making tax planning necessary to take advantage of all available deductions.",
  },
  {
    icon: Users,
    title: "Families with Complex Situations",
    description: "Families with dependents, education expenses, or significant medical costs benefit from tax planning to maximize credits.",
  },
]

const processSteps = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "We begin by understanding your financial situation and long-term goals.",
  },
  {
    number: "02",
    title: "Tax Review & Analysis",
    description: "We review your past tax returns, income sources, and investments to identify opportunities for savings.",
  },
  {
    number: "03",
    title: "Strategy Development",
    description: "We create a personalized tax strategy designed to optimize your deductions, credits, and retirement contributions.",
  },
  {
    number: "04",
    title: "Implementation",
    description: "We help you implement your tax-saving strategies throughout the year, adjusting for life changes or new tax laws.",
  },
  {
    number: "05",
    title: "Ongoing Monitoring & Support",
    description: "We keep track of your financial status and provide year-round guidance to adjust your plan as needed.",
  },
]

const faqs = [
  {
    question: "When is the best time to start tax planning?",
    answer: "The best time to start tax planning is at the beginning of the tax year, not when it's time to file. However, it's never too late to start. Mid-year check-ins allow for adjustments, and year-end planning can still capture valuable deductions and credits.",
  },
  {
    question: "How is tax planning different from tax preparation?",
    answer: "Tax preparation is the process of compiling and filing your tax return based on the previous year's activities. Tax planning is proactive—it involves strategizing throughout the year to minimize your tax liability before the tax year ends.",
  },
  {
    question: "Can tax planning help me if I'm self-employed?",
    answer: "Absolutely! Self-employed individuals often have more opportunities for tax savings through business deductions, retirement account contributions, estimated tax payments optimization, and entity structure decisions. Proper planning can save thousands.",
  },
  {
    question: "What tax-saving strategies are available for high-income earners?",
    answer: "High-income earners can benefit from strategies like maximizing retirement contributions (401k, IRA, SEP), tax-loss harvesting, charitable giving strategies, real estate investments, Health Savings Accounts (HSA), and timing of income and deductions.",
  },
  {
    question: "How often should I review my tax plan?",
    answer: "We recommend reviewing your tax plan at least quarterly, with major reviews at the beginning of the year and before year-end. Additionally, any major life event (marriage, new job, home purchase, business changes) should trigger a review.",
  },
  {
    question: "Do you help with estate and inheritance tax planning?",
    answer: "Yes, we offer comprehensive estate tax planning services including strategies for minimizing estate taxes, gift tax planning, trust structures, and ensuring smooth wealth transfer to beneficiaries while minimizing tax impact.",
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
          service: "Tax Planning",
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
          <Input
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => updateForm("phone", e.target.value)}
            className="h-12"
          />
          <Textarea
            placeholder="Tell us about your tax planning goals..."
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
                Start Tax Planning
              </>
            )}
          </Button>
        </>
      )}
    </form>
  )
}

export default function TaxPlanningPage() {
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
              <span className="text-foreground">Tax Planning</span>
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
                Strategic Tax Optimization
              </p>
              
              <h1 className="font-serif text-4xl leading-tight tracking-tight text-foreground sm:text-5xl">
                Smart Strategies for{" "}
                <span className="text-primary">Bigger Savings</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                At MVSR Tax, we believe that tax planning isn't just about filing your 
                returns—it's about taking control of your financial future. Our Tax 
                Planning Services are designed to help you minimize your tax liability 
                while maximizing your savings.
              </p>
              <p className="mt-4 text-muted-foreground">
                With proactive strategies tailored to your unique situation, we ensure 
                you're making the most of every opportunity to reduce taxes and grow 
                your wealth.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button
                  size="lg"
                  className="gap-2 px-8 py-6"
                  onClick={() => router.push("/contact-us")}
                >
                  Start Planning
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

            {/* Value Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-5"
            >
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8">
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-primary/10">
                  <Sparkles className="size-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg text-foreground">
                  Why Tax Planning Matters
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  Tax planning with MVSR Tax means more than just filing your taxes—it's 
                  about making smart financial decisions that save you money in the long run.
                </p>
                
                <div className="mt-6 space-y-3">
                  {[
                    "Minimize tax liabilities legally",
                    "Maximize deductions and credits",
                    "Create sustainable wealth",
                    "Achieve financial success",
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
                Key Features of Our Tax Planning Services
              </h2>
              <p className="mt-4 text-muted-foreground">
                Comprehensive strategies designed for your unique financial situation.
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

          {/* Who Needs Tax Planning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="mb-12 max-w-2xl">
              <h2 className="font-serif text-3xl tracking-tight text-foreground">
                Who Needs Tax Planning?
              </h2>
              <p className="mt-4 text-muted-foreground">
                Tax planning is essential for anyone looking to optimize their financial situation.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {whoNeedsTaxPlanning.map((item, index) => {
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
                Our tax planning process is tailored to your unique needs.
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
                  Common questions about tax planning and strategies.
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
                  Ready to Start Planning?
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Take control of your taxes and your financial future. The first step 
                  to hassle-free tax planning starts by reaching out to one of our 
                  representatives.
                </p>

                <div className="mt-8 rounded-xl bg-muted/50 p-6">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Pro Tip:</strong> The best time 
                    to start tax planning is now. Whether you're looking to reduce this 
                    year's tax bill or plan for the future, our experts can help you 
                    create a strategy that works for your unique situation.
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
              <TrendingUp className="size-8 text-background" />
            </div>
            <h2 className="font-serif text-3xl tracking-tight text-background">
              Start Planning Smarter for Tomorrow
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-background/70">
              Tax planning with MVSR Tax means more than just filing—it's about making 
              smart financial decisions that save you money. With a focus on minimizing 
              liabilities and creating sustainable wealth, we're your partner in success.
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
