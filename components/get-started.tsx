"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Check, Mail, Phone, MapPin, Clock } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface FormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  service?: string
  message?: string
}

const services = [
  "Individual Tax Filing",
  "Business Tax Filing",
  "ITIN Processing",
  "Tax Planning",
  "Bookkeeping",
  "IRS Representation",
  "Audit Support",
  "Other",
]

const contactDetails = [
  { 
    icon: Mail, 
    label: "Email", 
    value: "info@mvsrtax.com", 
    href: "mailto:info@mvsrtax.com" 
  },
  { 
    icon: Phone, 
    label: "Phone", 
    value: "(555) 123-4567", 
    href: "tel:+15551234567" 
  },
  { 
    icon: Clock, 
    label: "Hours", 
    value: "Mon - Fri: 9AM - 6PM", 
    href: null 
  },
  { 
    icon: MapPin, 
    label: "Location", 
    value: "United States", 
    href: null 
  },
]

export default function GetStarted() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required"
    }

    if (!formData.service) {
      newErrors.service = "Please select a service"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)

    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      })
    }, 4000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Contact Us
            </p>
            <h1 className="font-serif text-4xl leading-tight tracking-tight text-foreground sm:text-5xl">
              Let's get started
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Ready to take control of your finances? Reach out using the form 
              and we'll get back to you right away.
            </p>

            {/* Contact Details */}
            <div className="mt-12 space-y-6">
              {contactDetails.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="flex items-start gap-4">
                    <span className="rounded-full border border-border bg-card p-3">
                      <Icon className="size-5 text-primary" />
                    </span>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="mt-0.5 text-foreground transition-colors hover:text-primary"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-0.5 text-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Additional Links */}
            <div className="mt-12 border-t border-border pt-8">
              <p className="text-sm text-muted-foreground">
                Looking for answers?{" "}
                <Link href="/faq" className="text-foreground hover:text-primary">
                  Check our FAQ
                </Link>
              </p>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-card p-8 lg:p-10"
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <span className="flex size-16 items-center justify-center rounded-full bg-primary/10">
                    <Check className="size-8 text-primary" />
                  </span>
                  <h3 className="mt-6 font-serif text-2xl text-foreground">
                    Thank you!
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Your message has been sent. We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <>
                  <div className="mb-8">
                    <h2 className="font-serif text-xl text-foreground">
                      Send us a message
                    </h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Fill out the form below and we'll respond promptly.
                    </p>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    {/* Name */}
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-foreground"
                      >
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        className={`h-12 ${errors.name ? "border-destructive" : ""}`}
                      />
                      {errors.name && (
                        <p className="text-xs text-destructive">{errors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-foreground"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className={`h-12 ${errors.email ? "border-destructive" : ""}`}
                      />
                      {errors.email && (
                        <p className="text-xs text-destructive">{errors.email}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="text-sm font-medium text-foreground"
                      >
                        Phone
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`h-12 ${errors.phone ? "border-destructive" : ""}`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-destructive">{errors.phone}</p>
                      )}
                    </div>

                    {/* Service */}
                    <div className="space-y-2">
                      <label
                        htmlFor="service"
                        className="text-sm font-medium text-foreground"
                      >
                        Service Needed
                      </label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) => {
                          setFormData((prev) => ({ ...prev, service: value }))
                          if (errors.service) {
                            setErrors((prev) => ({ ...prev, service: undefined }))
                          }
                        }}
                      >
                        <SelectTrigger
                          className={`h-12 ${errors.service ? "border-destructive" : ""}`}
                        >
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.service && (
                        <p className="text-xs text-destructive">{errors.service}</p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mt-6 space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-foreground"
                    >
                      Message <span className="text-muted-foreground">(optional)</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your needs..."
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <div className="mt-8">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full gap-2 py-6 sm:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="size-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Submit Now
                          <ArrowRight className="size-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
