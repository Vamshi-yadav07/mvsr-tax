"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import { useState } from "react"

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "What documents do I need for tax filing?",
    answer: "You'll typically need W-2 forms, 1099 forms for freelance income, Social Security statements, previous year's tax return, receipts for deductible expenses, and mortgage interest statements. We provide a comprehensive checklist tailored to your specific situation.",
  },
  {
    question: "How long does the tax filing process take?",
    answer: "Simple individual returns are typically completed within 3-5 business days. More complex returns involving businesses or investments may take 1-2 weeks. We prioritize accuracy while ensuring timely filing before deadlines.",
  },
  {
    question: "Is my financial data secure?",
    answer: "Absolutely. We use bank-level encryption, secure client portals with multi-factor authentication, and follow strict confidentiality protocols. All team members are trained in data protection and we comply with IRS security guidelines.",
  },
  {
    question: "Do you support business tax filing?",
    answer: "Yes, we provide comprehensive services for all entity types including sole proprietorships, LLCs, S-Corps, and C-Corps. Our services include tax preparation, quarterly estimates, payroll tax, and strategic planning.",
  },
  {
    question: "Can you help with IRS notices?",
    answer: "Yes, we offer full IRS and state tax notice representation. If you receive a notice, contact us immediately. We'll review it, explain what it means, and handle all communications with tax authorities on your behalf.",
  },
]

function FAQAccordionItem({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: FAQItem
  index: number
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="border-b border-border"
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-serif text-lg text-foreground sm:text-xl">
          {item.question}
        </span>
        <span className="shrink-0 rounded-full border border-border p-2 transition-colors">
          {isOpen ? (
            <Minus className="size-4 text-foreground" />
          ) : (
            <Plus className="size-4 text-muted-foreground" />
          )}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-muted-foreground leading-relaxed pr-12">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="relative overflow-hidden border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              FAQ
            </p>
            <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground sm:text-4xl">
              Common questions
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Find answers to frequently asked questions. Need more help? 
              Don't hesitate to reach out directly.
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <div className="lg:col-span-8">
            <div className="border-t border-border">
              {faqs.map((faq, index) => (
                <FAQAccordionItem
                  key={index}
                  item={faq}
                  index={index}
                  isOpen={openIndex === index}
                  onToggle={() => handleToggle(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
