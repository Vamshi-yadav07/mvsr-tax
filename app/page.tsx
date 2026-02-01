import { Hero } from "@/components/hero"
import { WhoWeAre } from "@/components/who-we-are"
import { OurServices } from "@/components/our-services"
import { Reviews } from "@/components/reviews"
import { BlogSection } from "@/components/blog-section"
import { FAQSection } from "@/components/faq-section"
import { ContactForm } from "@/components/contact-form"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhoWeAre />
      <OurServices />
      <Reviews />
      <BlogSection />
      <FAQSection />
      <ContactForm />
      <CTASection />
      <Footer />
    </div>
  )
}