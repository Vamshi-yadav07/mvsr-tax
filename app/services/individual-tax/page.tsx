"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Phone,
  FileText,
  Shield,
  Clock,
  Globe,
  GraduationCap,
  Building2,
  Users,
  ChevronRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"

const expertiseAreas = [
  "Federal and Multi-State Tax Returns",
  "Federal and State Tax Amendments",
  "Comprehensive State Tax Filing Services",
  "Reporting for ESPP, RSU, and ISO Plans",
  "Alternative Minimum Tax (AMT) and Credit Calculations",
  "Tax Reporting for Self-Employed Businesses",
  "Partnership and S Corporation Income Reporting",
  "Rental Real Estate Income and Expense Reporting",
  "Married Filing Separately Returns in Community Property States",
  "Foreign Income Reporting and Foreign Tax Credit Assistance",
  "ITIN Processing for Spouses and Dependents",
  "Specialized ITIN Processing for Foreign Individuals",
  "Dual-Status Tax Filing for Eligible Taxpayers",
  "Non-Resident Tax Filing for F1/J1 Visa Holders",
  "Education Tax Credits for Qualified Taxpayers",
  "Unemployment Compensation Reporting",
]

const individualServices = [
  {
    title: "Individual Tax Returns",
    items: [
      "Federal and Multi-State Tax Returns for all 50 states",
      "Federal and State Tax Amendments",
      "ESPP/RSU/ISO Reporting",
      "Alternative Minimum Tax (AMT) and Credit Calculations",
      "Self-Employed Business Reporting (Schedule C)",
      "Partnership and S Corporation Income Reporting (K-1 forms)",
      "Rental Real Estate Reporting (Schedule E)",
      "Unemployment Compensation Reporting",
      "Married Filing Separate Returns in Community Property States",
    ]
  },
  {
    title: "International Tax Services",
    items: [
      "Foreign Income Reporting and Foreign Tax Credit",
      "ITIN Processing for you, spouse, and dependents",
      "Dual Status Tax Filing for qualified taxpayers",
      "Non-Resident Tax Filing for F1 and J1 visa holders",
      "Education Credits for qualified taxpayers",
    ]
  },
]

const processSteps = [
  {
    icon: Users,
    title: "Personalized Consultation",
    description: "We schedule a convenient time to meet with you and gather the necessary information to prepare your return.",
  },
  {
    icon: FileText,
    title: "Thorough Review",
    description: "Our team carefully reviews your financial documents to identify all eligible deductions and credits.",
  },
  {
    icon: Check,
    title: "Accurate Filing",
    description: "We prepare and file your tax return accurately and on time, ensuring compliance.",
  },
  {
    icon: Shield,
    title: "Ongoing Support",
    description: "Even after your return is filed, we're here to answer any questions you may have.",
  },
]

const whyChooseUs = [
  {
    icon: GraduationCap,
    title: "Expertise",
    description: "Our tax professionals have years of experience and stay up-to-date on the latest tax laws.",
  },
  {
    icon: Users,
    title: "Personalized Service",
    description: "We treat each client with personalized attention and care tailored to their unique situation.",
  },
  {
    icon: Shield,
    title: "Accuracy",
    description: "We're committed to ensuring your tax return is prepared accurately to avoid errors and penalties.",
  },
  {
    icon: Clock,
    title: "Timely Filing",
    description: "We'll file your return by the deadline to avoid late fees and maximize your refund.",
  },
]

const requiredDocuments = {
  taxDocuments: [
    "Income Statements (W2 Forms)",
    "Interest Statements (1099-INT)",
    "Dividend Statements (1099-DIV)",
    "Taxable refunds, credits (1099-G)",
    "Copies of Schedule K1 for Partnerships and S-Corporations",
    "Self Employed business Income (1099-Misc/1099-NEC)",
    "Brokerage Transactions (1099-B and relevant documents)",
  ],
  supportingDocuments: [
    "Educator classroom expenses",
    "Employee business expenses",
    "Contributions to a Health Savings Account",
    "Expenses related to work relocation",
    "Alimony",
    "Student loan interest",
    "Tuition and fees for higher education",
    "Expenses related to child or dependent care",
    "Contributions to a Retirement Savings Account",
    "Medical and dental expenses",
    "Real estate taxes",
    "Other state and local taxes",
    "Mortgage interest",
    "Investment interest",
    "Cash Contributions",
    "Noncash Contributions",
    "Unreimbursed employee expenses",
    "Investment expenses",
    "Gambling losses",
  ],
}

const taxBrackets2025 = [
  { rate: "10%", single: "$0 to $11,925", joint: "$0 to $23,850", hoh: "$0 to $17,000" },
  { rate: "12%", single: "$11,925 to $48,475", joint: "$23,850 to $96,950", hoh: "$17,000 to $64,850" },
  { rate: "22%", single: "$48,475 to $103,350", joint: "$96,950 to $206,700", hoh: "$64,850 to $103,350" },
  { rate: "24%", single: "$103,350 to $197,300", joint: "$206,700 to $394,600", hoh: "$103,350 to $197,300" },
  { rate: "32%", single: "$197,300 to $250,525", joint: "$394,600 to $501,050", hoh: "$197,300 to $250,500" },
  { rate: "35%", single: "$250,525 to $626,350", joint: "$501,050 to $751,600", hoh: "$250,500 to $626,350" },
  { rate: "37%", single: "$626,350 or more", joint: "$751,600 or more", hoh: "$626,350 or more" },
]

export default function IndividualTaxPage() {
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
              <span className="text-foreground">Individual Tax</span>
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
                Individual Tax Services
              </p>
              <h1 className="font-serif text-4xl leading-tight tracking-tight text-foreground sm:text-5xl">
                Individual Tax Preparation Services
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Tackle Tax Season with Confidence – Let MVSR Tax Simplify the Process!
                Keeping up with today's ever-changing tax laws can make even a simple
                tax return feel like a daunting task.
              </p>
              <p className="mt-4 text-muted-foreground">
                According to a leading accounting survey, 71% of individuals prefer working
                with a tax professional over navigating online tax software. Why? Because
                expert guidance ensures no deduction or credit goes unnoticed.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button size="lg" className="gap-2 px-8 py-6">
                  Schedule Consultation
                </Button>
                <Button size="lg" variant="outline" className="gap-2 px-8 py-6">
                  Call 510-742-1419
                </Button>
              </div>
            </motion.div>

            {/* Quick Links Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-5"
            >
              <div className="rounded-2xl border border-border bg-card p-8">
                <h3 className="font-serif text-lg text-foreground">Quick Links</h3>
                <div className="mt-6 space-y-3">
                  {[
                    { label: "Documents Required", href: "#documents" },
                    { label: "ITIN Processing", href: "/services/itin-processing" },
                    { label: "Federal Refund Status", href: "https://www.irs.gov/refunds", external: true },
                    { label: "State Refund Status", href: "#state-refunds" },
                    { label: "Tax Bill Payment Options", href: "#payment" },
                    { label: "Federal Income Tax Brackets", href: "#tax-brackets" },
                  ].map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="group flex items-center justify-between rounded-lg border border-border bg-muted/30 p-4 transition-colors hover:border-primary/30 hover:bg-muted"
                      target={link.external ? "_blank" : undefined}
                    >
                      <span className="text-sm font-medium text-foreground">{link.label}</span>
                      <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                    </Link>
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
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="max-w-3xl">
              <h2 className="font-serif text-3xl tracking-tight text-foreground">
                Our Areas of Expertise
              </h2>
              <p className="mt-4 text-muted-foreground">
                At MVSR Tax, we specialize in personalized, precise, and efficient tax
                solutions tailored to your unique financial situation. Our experienced
                professionals stay ahead of the latest tax laws.
              </p>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {expertiseAreas.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03, duration: 0.4 }}
                  className="flex items-start gap-3 rounded-lg border border-border bg-card p-4"
                >
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Check className="size-3 text-primary" />
                  </span>
                  <span className="text-sm text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Services Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="font-serif text-3xl tracking-tight text-foreground">
              What We Offer
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Individual Tax Preparation Services in Bay Area, Fremont, and Dublin
            </p>

            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              {individualServices.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
                  className="rounded-2xl border border-border bg-card p-8"
                >
                  <div className="mb-6 flex items-center gap-3">
                    {categoryIndex === 0 ? (
                      <FileText className="size-6 text-primary" />
                    ) : (
                      <Globe className="size-6 text-primary" />
                    )}
                    <h3 className="font-serif text-xl text-foreground">{category.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
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
            <h2 className="font-serif text-3xl tracking-tight text-foreground">
              How We Do It
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Our streamlined process ensures accurate, timely, and stress-free tax preparation.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step, index) => {
                const Icon = step.icon
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="relative"
                  >
                    <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <span className="absolute right-0 top-0 font-serif text-4xl text-muted/50">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-medium text-foreground">{step.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
                  </motion.div>
                )
              })}
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
            <h2 className="font-serif text-3xl tracking-tight text-foreground">
              Why Choose MVSR Tax
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              With thousands of satisfied clients across the USA, MVSR Tax is your
              trusted partner for reliable, personalized tax preparation services.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {whyChooseUs.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
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

          {/* Documents Required */}
          <motion.div
            id="documents"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20 scroll-mt-24"
          >
            <h2 className="font-serif text-3xl tracking-tight text-foreground">
              Documents Required
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              To ensure accurate and efficient tax preparation, please gather the following documents.
            </p>

            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-8">
                <h3 className="font-serif text-lg text-foreground">Tax Documents</h3>
                <ul className="mt-6 space-y-3">
                  {requiredDocuments.taxDocuments.map((doc) => (
                    <li key={doc} className="flex items-start gap-3">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                      <span className="text-sm text-muted-foreground">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-card p-8">
                <h3 className="font-serif text-lg text-foreground">Supporting Documents</h3>
                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {requiredDocuments.supportingDocuments.map((doc) => (
                    <li key={doc} className="flex items-start gap-2">
                      <span className="mt-1.5 size-1 shrink-0 rounded-full bg-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 rounded-xl bg-muted/50 p-6">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Note:</strong> Every client will be granted access
                to our secured client portal. Please call our office at <strong>510-742-1419</strong> for
                the initial account setup. Your copy of tax return will be made available in the portal.
              </p>
            </div>
          </motion.div>

          {/* Tax Brackets */}
          <motion.div
            id="tax-brackets"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20 scroll-mt-24"
          >
            <h2 className="font-serif text-3xl tracking-tight text-foreground">
              2025 Federal Income Tax Brackets
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Understanding your tax bracket helps with better financial planning.
            </p>

            <div className="mt-10 overflow-hidden rounded-xl border border-border">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-muted/50">
                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Tax Rate
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Single Filers
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Married Filing Jointly
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Head of Household
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border bg-card">
                    {taxBrackets2025.map((bracket, index) => (
                      <tr key={bracket.rate} className={index % 2 === 0 ? "bg-card" : "bg-muted/20"}>
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-primary">
                          {bracket.rate}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-foreground">
                          {bracket.single}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-foreground">
                          {bracket.joint}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-foreground">
                          {bracket.hoh}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
            <h2 className="font-serif text-3xl tracking-tight text-background">
              Ready to take the stress out of tax season?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-background/70">
              Trust MVSR Tax to provide accurate and efficient tax preparation services.
              We've helped thousands of clients across the country minimize their tax
              liabilities and optimize their financial strategies.
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
