"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { 
  ArrowUpRight, 
  Check, 
  Phone, 
  FileText, 
  Shield, 
  Clock,
  Users,
  Globe,
  AlertTriangle,
  Building2,
  ChevronRight,
  Plus,
  Minus,
  Send
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Footer } from "@/components/footer"

const services = [
  {
    icon: FileText,
    title: "FBAR Filing",
    description: "We assist U.S. citizens, residents, and entities with foreign financial interests in reporting their foreign bank accounts using FinCEN Form 114.",
  },
  {
    icon: Shield,
    title: "Compliance Review",
    description: "Our team conducts a comprehensive review of your financial accounts to determine if FBAR filing is required.",
  },
  {
    icon: Building2,
    title: "Record Keeping",
    description: "We help you organize and maintain the necessary records required by the IRS to ensure full compliance.",
  },
  {
    icon: AlertTriangle,
    title: "Late Filings & Penalty Mitigation",
    description: "If you're behind on your FBAR filings, we assist in rectifying the situation and minimizing potential penalties.",
  },
  {
    icon: Users,
    title: "Ongoing Support",
    description: "Our team is available year-round to provide expert guidance on FBAR regulations and to assist with any questions.",
  },
]

const processSteps = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "We assess your situation to determine whether FBAR filing is required and clarify the details of your foreign financial accounts.",
  },
  {
    number: "02",
    title: "Data Collection & Documentation",
    description: "We gather the necessary account information, including account numbers, names of financial institutions, and maximum account values.",
  },
  {
    number: "03",
    title: "Form Preparation & Review",
    description: "We meticulously prepare your FBAR filing (FinCEN Form 114) and review every detail to avoid any errors or omissions.",
  },
  {
    number: "04",
    title: "Filing & Submission",
    description: "Once everything is reviewed and approved by you, we submit the FBAR electronically to the IRS on your behalf.",
  },
  {
    number: "05",
    title: "Follow-Up & Record Retention",
    description: "After filing, we provide confirmation and assist with retaining records for your future compliance needs.",
  },
]

const whyChooseUs = [
  {
    icon: Shield,
    title: "Expert Knowledge",
    description: "Our tax professionals specialize in FBAR filing and international tax compliance, ensuring your filings are handled with precision.",
  },
  {
    icon: Globe,
    title: "Local Expertise, Global Reach",
    description: "We offer in-person consultations while also providing virtual services for clients with international financial accounts.",
  },
  {
    icon: Users,
    title: "Tailored Solutions",
    description: "We understand that every client's financial situation is unique, and we offer customized solutions aligned with your needs.",
  },
  {
    icon: AlertTriangle,
    title: "Penalty Avoidance",
    description: "We help you stay ahead of deadlines and ensure compliance to avoid severe penalties associated with non-filing.",
  },
  {
    icon: Clock,
    title: "Ongoing Support",
    description: "Our team is always available for any questions or guidance you may need throughout the year.",
  },
]

const whoMustFile = [
  "You are a U.S. citizen, U.S. resident, or entity (including corporations, partnerships, or LLCs)",
  "You have a financial interest in, or signature authority over, at least one foreign financial account",
  "The aggregate value of all foreign financial accounts exceeds $10,000 at any time during the calendar year",
]

const faqs = [
  {
    question: "What is the deadline for filing FBAR?",
    answer: "The FBAR must be filed by April 15th each year for the previous calendar year. However, there's an automatic extension to October 15th if you miss the April deadline. No separate extension request is needed.",
  },
  {
    question: "What are the penalties for not filing FBAR?",
    answer: "Penalties for non-willful violations can be up to $10,000 per violation. Willful violations can result in penalties up to $100,000 or 50% of the account balance, whichever is greater. Criminal penalties may also apply in severe cases.",
  },
  {
    question: "What accounts need to be reported on FBAR?",
    answer: "You must report all foreign financial accounts including bank accounts, brokerage accounts, mutual funds, trusts, and other types of foreign financial accounts where you have a financial interest or signature authority.",
  },
  {
    question: "What is the difference between FBAR and FATCA?",
    answer: "FBAR is filed with FinCEN (Treasury) and has a $10,000 threshold. FATCA (Form 8938) is filed with your tax return to the IRS and has higher thresholds ($50,000-$200,000 depending on your filing status and residence).",
  },
  {
    question: "Can I file FBAR myself or do I need professional help?",
    answer: "While you can file FBAR yourself through the BSA E-Filing System, professional help is recommended due to the complexity of determining which accounts to report, calculating maximum values, and ensuring full compliance to avoid penalties.",
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
          message: formData.message,
          service: "FBAR",
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
            placeholder="Tell us about your FBAR needs..."
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
                Get FBAR Help
              </>
            )}
          </Button>
        </>
      )}
    </form>
  )
}

export default function FBARPage() {
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
              <span className="text-foreground">FBAR</span>
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
                Foreign Account Reporting
              </p>
              
              <h1 className="font-serif text-4xl leading-tight tracking-tight text-foreground sm:text-5xl">
                FBAR & FATCA Filing Services
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                At MVSR Tax, we specialize in FBAR (Foreign Bank Account Reporting) and 
                FATCA (Foreign Account Tax Compliance Act) filing services, ensuring that 
                U.S. taxpayers with foreign financial accounts comply with all IRS regulations.
              </p>
              <p className="mt-4 text-muted-foreground">
                If you have financial assets or accounts outside the United States, you may 
                be required to report them to the U.S. Treasury Department and the IRS. Our 
                experienced team helps you navigate the complexities of filing requirements.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button size="lg" className="gap-2 px-8 py-6" onClick={() => window.open("https://cal.com/sripathi-vamshi-yadav-cvquju/30min", "_blank")}>
                  Get FBAR Assistance
                  <ArrowUpRight className="size-4" />
                </Button>
                <Button size="lg" variant="outline" className="gap-2 px-8 py-6" onClick={() => window.open("tel:5107421419", "_blank")}>
                  <Phone className="size-4" />
                  Call 510-742-1419
                </Button>
              </div>
            </motion.div>

            {/* Alert Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-5"
            >
              <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-8">
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-destructive/10">
                  <AlertTriangle className="size-6 text-destructive" />
                </div>
                <h3 className="font-serif text-lg text-foreground">
                  Penalties for Non-Compliance
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  Failing to file an FBAR can lead to substantial penalties. Non-willful 
                  violations can result in penalties up to $10,000 per account. Willful 
                  violations can reach $100,000 or 50% of the account balance.
                </p>
                <p className="mt-4 text-sm font-medium text-foreground">
                  Don't risk it – ensure your filings are compliant.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          {/* Who Must File */}
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
                  Who Must File an FBAR?
                </h2>
                <p className="mt-4 text-muted-foreground">
                  You are required to file an FBAR if all of the following conditions apply to you:
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-8">
                <ul className="space-y-4">
                  {whoMustFile.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                        {index + 1}
                      </span>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

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
                Comprehensive FBAR Filing Services in Bay Area, Fremont, and Dublin
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
                    transition={{ delay: index * 0.08, duration: 0.5 }}
                    className="rounded-xl border border-border bg-card p-6"
                  >
                    <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="size-5 text-primary" />
                    </div>
                    <h3 className="font-medium text-foreground">{service.title}</h3>
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
                Our step-by-step process for FBAR filing is designed to ensure accuracy and compliance.
              </p>
            </div>

            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex gap-6 rounded-xl border border-border bg-card p-6"
                >
                  <span className="shrink-0 font-serif text-3xl text-primary/30">{step.number}</span>
                  <div>
                    <h3 className="font-medium text-foreground">{step.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
                  </div>
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
                Why Choose MVSR Tax for FBAR
              </h2>
              <p className="mt-4 text-muted-foreground">
                Expert guidance for your international tax compliance needs.
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
                    className="flex gap-4"
                  >
                    <div className="shrink-0">
                      <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="size-5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">{item.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
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
                  Common questions about FBAR filing and compliance.
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
                  Need FBAR Filing Help?
                </h2>
                <p className="mt-4 text-muted-foreground">
                  The first step to hassle-free FBAR compliance starts by reaching out to 
                  one of our representatives. We'll assess your situation and provide 
                  expert guidance.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-full border border-border">
                      <Phone className="size-5 text-primary" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">Phone</p>
                      <a href="tel:+15107421419" className="font-medium text-foreground hover:text-primary">
                        510-742-1419
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-full border border-border">
                      <Clock className="size-5 text-primary" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">Hours</p>
                      <p className="font-medium text-foreground">Mon - Fri: 9AM - 6PM</p>
                    </div>
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
              <Globe className="size-8 text-background" />
            </div>
            <h2 className="font-serif text-3xl tracking-tight text-background">
              Stay Compliant with Your Foreign Accounts
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-background/70">
              With MVSR Tax, you can have peace of mind knowing your international 
              financial matters are in expert hands. We provide tailored solutions 
              to keep you compliant while minimizing risks.
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
