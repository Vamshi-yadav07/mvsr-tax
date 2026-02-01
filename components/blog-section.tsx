"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

interface BlogPost {
  id: number
  title: string
  description: string
  image: string
  slug: string
  category: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "5 Common Tax Mistakes to Avoid This Season",
    description: "Learn about the most frequent errors taxpayers make and how to steer clear of them for a smooth filing experience.",
    image: "/business-meeting-office.jpg",
    slug: "common-tax-mistakes",
    category: "Tax Tips",
  },
  {
    id: 2,
    title: "Maximizing Deductions for Small Business Owners",
    description: "Discover key deductions that can significantly reduce your tax liability and boost your business's bottom line.",
    image: "/people-working-late-their-office.jpg",
    slug: "small-business-deductions",
    category: "Business",
  },
  {
    id: 3,
    title: "Understanding New Tax Law Changes",
    description: "Stay informed about the latest tax legislation updates and how they might impact your financial planning.",
    image: "/business-meeting-office.jpg",
    slug: "tax-law-changes",
    category: "Updates",
  },
]

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  const isFeature = index === 0

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group ${isFeature ? "md:col-span-2 md:row-span-2" : ""}`}
    >
      <Link href={`/blog/${post.slug}`} className="block">
        {/* Image */}
        <div className="relative aspect-16/10 overflow-hidden bg-muted">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="mt-6">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.15em] text-primary">
            {post.category}
          </p>
          <h3 className={`font-serif tracking-tight text-foreground transition-colors group-hover:text-primary ${isFeature ? "text-2xl lg:text-3xl" : "text-xl"}`}>
            {post.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-2">
            {post.description}
          </p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
            Read Article
            <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>
      </Link>
    </motion.article>
  )
}

export function BlogSection() {
  return (
    <section id="insights" className="relative overflow-hidden border-t border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Insights
            </p>
            <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground sm:text-4xl">
              Latest from our blog
            </h2>
          </div>
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            View All Articles
            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
