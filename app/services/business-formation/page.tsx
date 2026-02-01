"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { 
  ArrowUpRight, 
  Check, 
  Phone, 
  Building,
  FileText,
  Scale,
  FileCheck,
  TrendingUp,
  Headphones,
  ChevronRight,
  Plus,
  Minus,
  Send,
  Rocket,
  Users,
  Shield,
  ClipboardList,
  Briefcase,
  BadgeCheck
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Footer } from "@/components/footer"

const keyFeatures = [
  {
    number: "01",
    icon: Building,
    title: "Choose the Right Structure for Success",
    description: "LLC, Corporation, Partnership, or Sole Proprietorship? The right structure can make all the difference in your taxes, liabilities, and long-term growth. We help you select the best entity for your business goals.",
    highlight: "Set your foundation strong with the right structure",
  },
  {
    number: "02",
    icon: FileText,
    title: "Quick and Hassle-Free Registration",
    description: "Let us handle the paperwork while you focus on your passion. We take care of all registrations, filings, and documentation with state and federal agencies—from obtaining your EIN to filing articles of incorporation.",
    highlight: "Done right—right from the start",
  },
  {
    number: "03",
    icon: Scale,
    title: "Comprehensive Compliance Guidance",
    description: "Starting a business means meeting a lot of legal requirements. We ensure you stay on top of licenses, permits, and tax obligations, making compliance simple and stress-free.",
    highlight: "Start strong with the right compliance in place",
  },
  {
    number: "04",
    icon: FileCheck,
    title: "Tailored Operating Agreements & Bylaws",
    description: "For LLCs and corporations, having clear operating agreements and bylaws is essential. We draft these key documents to set out the responsibilities of owners and managers, ensuring smooth operations.",
    highlight: "Structure your business, protect your interests",
  },
  {
    number: "05",
    icon: TrendingUp,
    title: "Strategic Tax Planning from the Start",
    description: "Your choice of business structure affects how you'll be taxed. We make sure your business formation aligns with your long-term tax strategy, helping you optimize taxes from day one.",
    highlight: "Build your business, maximize your tax benefits",
  },
  {
    number: "06",
    icon: Headphones,
    title: "Ongoing Support for Growth",
    description: "Your business doesn't stop at formation, and neither do we! We offer continued support for future filings, compliance, and even business restructuring as you grow.",
    highlight: "Your business, our ongoing commitment",
  },
]

const entityTypes = [
  {
    icon: Users,
    title: "Sole Proprietorship",
    description: "Simplest structure for individual business owners with personal liability.",
    features: ["Easy to set up", "Minimal paperwork", "Direct tax reporting"],
  },
  {
    icon: Building,
    title: "Limited Liability Company (LLC)",
    description: "Flexible structure combining liability protection with tax benefits.",
    features: ["Personal asset protection", "Pass-through taxation", "Flexible management"],
  },
  {
    icon: Briefcase,
    title: "Corporation (S-Corp/C-Corp)",
    description: "Formal structure ideal for growth, investments, and going public.",
    features: ["Strong liability protection", "Potential tax savings", "Easier to raise capital"],
  },
  {
    icon: Users,
    title: "Partnership",
    description: "Structure for two or more individuals sharing business ownership.",
    features: ["Shared responsibility", "Pass-through taxation", "Flexible profit sharing"],
  },
]

const processSteps = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "We start by learning about your business vision, goals, and structure to offer the best advice for your formation.",
  },
  {
    number: "02",
    title: "Business Formation & Registration",
    description: "Once we determine the right entity for your business, we handle all registration paperwork and filings, ensuring legal compliance.",
  },
  {
    number: "03",
    title: "Documentation Setup",
    description: "We prepare operating agreements, bylaws, and all necessary legal documents tailored to your business structure.",
  },
  {
    number: "04",
    title: "Tax & Compliance Setup",
    description: "We register for required tax IDs, obtain necessary licenses and permits, and set up your compliance calendar.",
  },
  {
    number: "05",
    title: "Year-Round Support",
    description: "We provide ongoing support for any questions or issues that may arise, making sure your business remains compliant.",
  },
]

const faqs = [
  {
    question: "What type of business entity is best for my situation?",
    answer: "The best entity depends on your specific circumstances including liability concerns, tax situation, number of owners, and growth plans. LLCs are popular for small businesses due to liability protection and tax flexibility. S-Corps can offer tax savings for higher-income businesses. C-Corps are ideal for those seeking investors. We'll analyze your situation and recommend the optimal structure.",
  },
  {
    question: "How long does it take to form a business?",
    answer: "Timeline varies by state and entity type. Sole proprietorships can be set up in a few days. LLCs typically take 1-2 weeks, though some states offer expedited processing. Corporations may take 2-4 weeks. We handle all paperwork efficiently and can advise on expedited options if you need faster processing.",
  },
  {
    question: "What documents do I need to start the formation process?",
    answer: "You'll need identification for all owners, a business name (we'll verify availability), business address, description of business activities, and ownership percentages if multiple owners. For corporations, you'll also need director information. We provide a comprehensive checklist and guide you through gathering everything.",
  },
  {
    question: "Do I need an EIN, and will you help me get one?",
    answer: "An EIN (Employer Identification Number) is required if you have employees, operate as a corporation or partnership, or file certain tax returns. Even sole proprietors often get one to separate personal and business finances. Yes, we handle the EIN application as part of our formation services.",
  },
  {
    question: "What ongoing compliance requirements will my business have?",
    answer: "Requirements vary by entity type and state but typically include annual reports, franchise taxes, maintaining registered agent, keeping records, and holding meetings (for corporations). We help you understand all requirements and can provide ongoing compliance support to ensure you never miss a deadline.",
  },
  {
    question: "Can I change my business structure later if needed?",
    answer: "Yes, business structures can be changed, though the process and tax implications vary. For example, you can convert an LLC to a corporation or elect S-Corp status for tax purposes. We help clients restructure as their businesses grow and needs change, ensuring tax-efficient transitions.",
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", phone: "", businessType: "", message: "" })
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
              placeholder="Business Type (e.g., LLC, Corp)"
              value={formData.businessType}
              onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
              className="h-12"
            />
          </div>
          <Textarea
            placeholder="Tell us about your business idea and formation needs..."
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
                Start Your Business Journey
              </>
            )}
          </Button>
        </>
      )}
    </form>
  )
}

export default function BusinessFormationPage() {
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
              <span className="text-foreground">Business Formation</span>
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
                Business Formation Services
              </p>
              
              <h1 className="font-serif text-4xl leading-tight tracking-tight text-foreground sm:text-5xl">
                Building Your Dream,{" "}
                <span className="text-primary">One Step at a Time</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Starting a business is an exciting journey, but navigating the legal 
                and financial complexities can be overwhelming. That's where MVSR Tax 
                steps in! Our expert Business Formation Services are designed to get 
                your business up and running with ease.
              </p>
              <p className="mt-4 text-muted-foreground">
                Ensuring you start on the right foot—compliant, structured, and ready for success.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button size="lg" className="gap-2 px-8 py-6">
                  Start Your Business
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
                  <Rocket className="size-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg text-foreground">
                  Your Trusted Partner
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  Whether you're starting a sole proprietorship, LLC, partnership, or 
                  corporation, our expert team guides you through each step of the 
                  formation process.
                </p>
                
                <div className="mt-6 space-y-3">
                  {[
                    "Expert advice on entity selection",
                    "Seamless paperwork handling",
                    "Strategic tax guidance",
                    "Ongoing compliance support",
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
                Key Features of Our Business Formation Services
              </h2>
              <p className="mt-4 text-muted-foreground">
                Comprehensive support to launch your business with confidence.
              </p>
            </div>

            <div className="space-y-6">
              {keyFeatures.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={feature.number}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.5 }}
                    className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/30 lg:p-8"
                  >
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
                      <div className="flex shrink-0 items-center gap-4">
                        <span className="font-serif text-3xl text-primary/30">{feature.number}</span>
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

          {/* Entity Types */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="mb-12 max-w-2xl">
              <h2 className="font-serif text-3xl tracking-tight text-foreground">
                Choose the Right Business Structure
              </h2>
              <p className="mt-4 text-muted-foreground">
                We help you understand and select the best entity type for your goals.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {entityTypes.map((entity, index) => {
                const Icon = entity.icon
                return (
                  <motion.div
                    key={entity.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="rounded-2xl border border-border bg-card p-6 lg:p-8"
                  >
                    <div className="mb-4 flex items-center gap-4">
                      <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <h3 className="font-serif text-xl text-foreground">{entity.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{entity.description}</p>
                    <ul className="mt-4 space-y-2">
                      {entity.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm">
                          <Check className="size-4 text-primary" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
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
                A thorough, efficient, and customized approach to business formation.
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
            <div className="rounded-2xl bg-muted/50 p-8 lg:p-12">
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                <div>
                  <h2 className="font-serif text-3xl tracking-tight text-foreground">
                    Why Choose MVSR Tax for Business Formation?
                  </h2>
                  <p className="mt-4 text-muted-foreground">
                    Starting your business should be an exciting step forward, not a 
                    daunting task. With MVSR Tax, you get expert advice, seamless 
                    paperwork handling, and strategic guidance—all designed to set 
                    you up for success.
                  </p>
                  <p className="mt-4 text-muted-foreground">
                    From the first idea to the first transaction, we've got you covered.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { icon: BadgeCheck, label: "Expert Guidance" },
                    { icon: Shield, label: "Legal Compliance" },
                    { icon: TrendingUp, label: "Tax Optimization" },
                    { icon: ClipboardList, label: "Complete Documentation" },
                  ].map((item) => {
                    const Icon = item.icon
                    return (
                      <div key={item.label} className="flex items-center gap-3 rounded-xl bg-background p-4">
                        <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                          <Icon className="size-5 text-primary" />
                        </div>
                        <span className="font-medium text-foreground">{item.label}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
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
                  Common questions about business formation and entity types.
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
                  Ready to Start Your Business?
                </h2>
                <p className="mt-4 text-muted-foreground">
                  The first step to hassle-free business formation starts by reaching 
                  out to one of our representatives. Let MVSR Tax turn your vision 
                  into reality—efficiently, compliantly, and confidently.
                </p>

                <div className="mt-8 rounded-xl bg-muted/50 p-6">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Get started today:</strong> Whether 
                    you need help filing annual reports or expanding your business, we're 
                    here for the journey. Your business, our ongoing commitment.
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
              <Rocket className="size-8 text-background" />
            </div>
            <h2 className="font-serif text-3xl tracking-tight text-background">
              Turn Your Vision Into Reality
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-background/70">
              Starting your business should be an exciting step forward. With MVSR Tax, 
              you get expert advice, seamless paperwork handling, and strategic guidance—all 
              designed to set you up for success. Contact us today!
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="gap-2 bg-background px-8 py-6 text-foreground hover:bg-background/90"
              >
                Start Your Business
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
