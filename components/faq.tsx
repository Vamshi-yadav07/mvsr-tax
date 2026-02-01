"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

interface FAQCategory {
  id: string
  title: string
  description: string
  faqs: FAQItem[]
}

const faqData: FAQCategory[] = [
  {
    id: "general",
    title: "General Questions",
    description: "Common questions about our services and how we work",
    faqs: [
      {
        question: "What is the role of a CPA in bookkeeping?",
        answer: "A CPA ensures your financial records are accurate, compliant with tax laws, and organized for better decision-making. While bookkeepers handle daily financial entries, a CPA provides oversight, reviews, and financial strategy based on that data."
      },
      {
        question: "What's the difference between tax preparation and tax planning?",
        answer: "Tax preparation involves compiling and filing your tax returns based on the previous year's financial data. Tax planning is a proactive strategy to minimize your tax liability throughout the year by making strategic decisions about investments, deductions, and income timing."
      },
      {
        question: "Can you help me with both personal and business tax needs?",
        answer: "Yes, we provide comprehensive tax services for both individuals and businesses. Our team has expertise in personal tax returns, business tax filings, payroll taxes, and specialized tax situations for various entity types including sole proprietorships, partnerships, LLCs, and corporations."
      },
      {
        question: "What is the cost of CPA services?",
        answer: "Our service costs vary depending on the complexity of your tax situation and the services required. We offer competitive pricing and provide detailed quotes after an initial consultation. Contact us for a free assessment and customized pricing."
      },
      {
        question: "How can professional bookkeeping services benefit my business?",
        answer: "Professional bookkeeping ensures accurate financial records, helps you make informed business decisions, maintains compliance with tax regulations, identifies potential tax deductions, provides insights into cash flow, and saves you valuable time to focus on growing your business."
      },
      {
        question: "How often should I update my financial records?",
        answer: "We recommend updating your financial records at least monthly for small businesses and weekly for larger operations. Regular updates help you stay on top of your finances, make timely business decisions, and ensure smoother tax preparation."
      },
      {
        question: "What documents should I provide to my CPA for tax?",
        answer: "Essential documents include W-2s, 1099 forms, receipts for deductible expenses, investment statements, mortgage interest statements, property tax records, business income and expense records, retirement account contributions, and previous year tax returns."
      },
      {
        question: "What are common tax deductions businesses overlook?",
        answer: "Commonly overlooked deductions include home office expenses, vehicle mileage for business use, professional development costs, business meals, software subscriptions, office supplies, insurance premiums, depreciation on equipment, and startup costs."
      }
    ]
  },
  {
    id: "tax",
    title: "Tax Filing Questions",
    description: "Everything you need to know about filing your taxes",
    faqs: [
      {
        question: "I am an existing client. How do I file my taxes?",
        answer: "Simply upload your documents to your existing portal account, and we will get back to you within 24 to 48 hours."
      },
      {
        question: "What documents do I need for tax filing?",
        answer: "You'll need income documents (W-2s, 1099s), expense receipts, prior year tax returns, investment statements, mortgage interest statements, property tax records, and documentation for any credits or deductions you're claiming."
      },
      {
        question: "What is the deadline to file my taxes?",
        answer: "The federal tax filing deadline is typically April 15th for most individual taxpayers. Business tax deadlines vary by entity structure. We'll notify you of all relevant deadlines for your situation."
      },
      {
        question: "How do I track my refund?",
        answer: "Once your return is accepted by the IRS, you can track your refund using the IRS 'Where's My Refund?' tool. You'll need your Social Security number, filing status, and exact refund amount."
      },
      {
        question: "What if I missed the tax filing deadline?",
        answer: "File as soon as possible to minimize penalties and interest. We can help you file your return, assess any penalties, potentially request penalty abatement if you qualify, and set up a payment plan if needed."
      },
      {
        question: "How can I securely upload my tax documents?",
        answer: "We provide a secure, encrypted client portal with bank-level security and multi-factor authentication. You'll receive login credentials and detailed instructions on how to organize and upload your documents."
      },
      {
        question: "What should I do if I receive an IRS notice?",
        answer: "Contact us immediately. Most IRS notices are routine requests for additional information. We'll review the notice, advise you on the appropriate response, and handle all communication with the IRS on your behalf."
      },
      {
        question: "I'm a new client. How do I get started?",
        answer: "Contact us via phone, email, or our website to schedule an initial consultation. We'll discuss your tax situation, explain our services, and create your secure client portal account."
      },
      {
        question: "What are your charges for filing taxes?",
        answer: "Our tax preparation fees are based on the complexity of your return. Simple individual returns start at competitive rates, while business returns are quoted individually. We provide transparent pricing with no hidden fees."
      },
      {
        question: "When can I expect to receive my refund?",
        answer: "Most e-filed returns are processed within 21 days of IRS acceptance. Direct deposit is the fastest option, typically arriving 1-3 weeks after acceptance. Paper-filed returns take 6-8 weeks or longer."
      },
      {
        question: "Do you offer tax planning services?",
        answer: "Absolutely! We work with you throughout the year to develop strategies that minimize your tax liability, maximize deductions, optimize retirement contributions, and plan major financial decisions."
      },
      {
        question: "What if I need an extension to file?",
        answer: "We can file an extension giving you until October 15th. However, an extension to file is not an extension to pay – you must estimate and pay any taxes owed by the original deadline."
      },
      {
        question: "Do you assist with IRS audits?",
        answer: "Yes, we provide comprehensive audit support and representation. We'll represent you before the IRS, gather documentation, respond to inquiries, and guide you through the entire process."
      }
    ]
  }
]

function FAQAccordion({ 
  item, 
  index,
  isOpen,
  onToggle
}: { 
  item: FAQItem
  index: number
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      className="border-b border-border"
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-6 py-5 text-left transition-colors"
        aria-expanded={isOpen}
      >
        <span className="text-base font-medium text-foreground">
          {item.question}
        </span>
        <span className="shrink-0 rounded-full border border-border p-1.5 transition-colors">
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
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 pr-12 text-sm leading-relaxed text-muted-foreground">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function FAQCategorySection({ 
  category, 
  categoryIndex 
}: { 
  category: FAQCategory
  categoryIndex: number 
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
      className="mb-20 last:mb-0"
    >
      {/* Category Header */}
      <div className="mb-8 flex items-start justify-between gap-8">
        <div>
          <h2 className="font-serif text-2xl tracking-tight text-foreground sm:text-3xl">
            {category.title}
          </h2>
          <p className="mt-2 text-muted-foreground">
            {category.description}
          </p>
        </div>
        <span className="shrink-0 font-serif text-sm text-muted-foreground">
          {category.faqs.length} questions
        </span>
      </div>

      {/* FAQ Items */}
      <div className="border-t border-border">
        {category.faqs.map((faq, index) => (
          <FAQAccordion 
            key={index} 
            item={faq} 
            index={index}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </motion.div>
  )
}

export function FAQ() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8 lg:py-28">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            FAQ
          </p>
          <h1 className="font-serif text-4xl leading-tight tracking-tight text-foreground sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Find answers to common questions about our tax and accounting services. 
            Can't find what you're looking for?{" "}
            <Link href="/contact-us" className="text-primary hover:underline">
              Contact us directly
            </Link>
            .
          </p>
        </motion.div>

        {/* FAQ Categories */}
        <div>
          {faqData.map((category, index) => (
            <FAQCategorySection 
              key={category.id} 
              category={category} 
              categoryIndex={index} 
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 rounded-2xl border border-border bg-muted/30 p-8 text-center sm:p-12"
        >
          <h3 className="font-serif text-2xl tracking-tight text-foreground">
            Still have questions?
          </h3>
          <p className="mt-3 text-muted-foreground">
            Our team is here to help. Get in touch and we'll respond within 24 hours.
          </p>
          <Link
            href="/contact-us"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Contact Us
            <ArrowUpRight className="size-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
