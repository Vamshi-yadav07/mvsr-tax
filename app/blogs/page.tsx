"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock, Calendar } from "lucide-react"
import { Footer } from "@/components/footer"
import { blogs, categoryColors } from "@/lib/blog-data"

export default function BlogsPage() {
    const featuredBlogs = blogs.filter((b) => b.featured)
    const otherBlogs = blogs.filter((b) => !b.featured)

    return (
        <>
            <main className="min-h-screen bg-background">
                {/* Hero */}
                <section className="border-b border-border bg-muted/30 pt-32 pb-16">
                    <div className="mx-auto max-w-6xl px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                                Insights & Resources
                            </p>
                            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
                                Our Blog
                            </h1>
                            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                                Expert insights on tax planning, business formation, and
                                financial strategies to help you make smarter decisions.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Featured Posts */}
                <section className="py-16">
                    <div className="mx-auto max-w-6xl px-6 lg:px-8">
                        <div className="grid gap-8 md:grid-cols-2">
                            {featuredBlogs.map((blog, index) => (
                                <motion.div
                                    key={blog.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Link
                                        href={`/blogs/${blog.slug}`}
                                        className="group block overflow-hidden rounded-2xl border border-border bg-card transition-all hover:shadow-lg"
                                    >
                                        <div className="relative h-64 overflow-hidden">
                                            {blog.image ? (
                                                <Image
                                                    src={blog.image}
                                                    alt={blog.title}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                            ) : (
                                                <div
                                                    className={`h-full w-full bg-gradient-to-br ${blog.gradient}`}
                                                />
                                            )}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                            <span
                                                className={`absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-medium ${categoryColors[blog.category] || "bg-gray-100 text-gray-800"}`}
                                            >
                                                {blog.category}
                                            </span>
                                        </div>
                                        <div className="p-6">
                                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                                <span className="flex items-center gap-1.5">
                                                    <Calendar className="size-3.5" />
                                                    {blog.date}
                                                </span>
                                                <span className="flex items-center gap-1.5">
                                                    <Clock className="size-3.5" />
                                                    {blog.readTime}
                                                </span>
                                            </div>
                                            <h2 className="mt-3 text-xl font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
                                                {blog.title}
                                            </h2>
                                            <p className="mt-2 line-clamp-2 text-muted-foreground">
                                                {blog.excerpt}
                                            </p>
                                            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-all group-hover:gap-2.5">
                                                Read more
                                                <ArrowRight className="size-4" />
                                            </span>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Other Posts */}
                <section className="border-t border-border bg-muted/20 py-16">
                    <div className="mx-auto max-w-6xl px-6 lg:px-8">
                        <h2 className="mb-10 text-2xl font-semibold tracking-tight text-foreground">
                            More Articles
                        </h2>
                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {otherBlogs.map((blog, index) => (
                                <motion.div
                                    key={blog.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Link
                                        href={`/blogs/${blog.slug}`}
                                        className="group block overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-md"
                                    >
                                        <div className="relative h-44 overflow-hidden">
                                            {blog.image ? (
                                                <Image
                                                    src={blog.image}
                                                    alt={blog.title}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                            ) : (
                                                <div
                                                    className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${blog.gradient}`}
                                                >
                                                    <span className="text-4xl font-bold text-white/20">
                                                        MVSR
                                                    </span>
                                                </div>
                                            )}
                                            <span
                                                className={`absolute top-3 left-3 rounded-full px-2.5 py-0.5 text-xs font-medium ${categoryColors[blog.category] || "bg-gray-100 text-gray-800"}`}
                                            >
                                                {blog.category}
                                            </span>
                                        </div>
                                        <div className="p-5">
                                            <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="size-3" />
                                                    {blog.date}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Clock className="size-3" />
                                                    {blog.readTime}
                                                </span>
                                            </div>
                                            <h3 className="mt-2.5 text-base font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
                                                {blog.title}
                                            </h3>
                                            <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                                                {blog.excerpt}
                                            </p>
                                            <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-all group-hover:gap-2.5">
                                                Read more
                                                <ArrowRight className="size-3.5" />
                                            </span>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Newsletter CTA */}
                <section className="py-20">
                    <div className="mx-auto max-w-6xl px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="rounded-2xl bg-primary px-8 py-16 text-center text-primary-foreground"
                        >
                            <h2 className="text-3xl font-semibold tracking-tight">
                                Stay Informed
                            </h2>
                            <p className="mx-auto mt-4 max-w-lg text-primary-foreground/70">
                                Get the latest tax tips, financial insights, and MVSR Tax updates
                                delivered right to your inbox.
                            </p>
                            <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-foreground/30"
                                />
                                <button className="rounded-lg bg-primary-foreground px-6 py-3 font-medium text-primary transition-opacity hover:opacity-90">
                                    Subscribe
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
