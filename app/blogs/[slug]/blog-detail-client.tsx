"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Clock, Calendar } from "lucide-react"
import { Footer } from "@/components/footer"
import { Blog, categoryColors, blogs } from "@/lib/blog-data"
import { ReactNode } from "react"

export default function BlogDetailClient({
    blog,
    mdxContent,
}: {
    blog: Blog
    mdxContent: ReactNode
}) {
    const relatedBlogs = blogs.filter((b) => b.id !== blog.id).slice(0, 3)

    return (
        <>
            <main className="min-h-screen bg-background">
                {/* Hero / Header */}
                <section className="border-b border-border bg-muted/30 pt-28 pb-12">
                    <div className="mx-auto max-w-3xl px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Link
                                href="/blogs"
                                className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                            >
                                <ArrowLeft className="size-4" />
                                Back to Blog
                            </Link>

                            <div className="flex items-center gap-3">
                                <span
                                    className={`rounded-full px-3 py-1 text-xs font-medium ${categoryColors[blog.category] || "bg-gray-100 text-gray-800"}`}
                                >
                                    {blog.category}
                                </span>
                                <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                                    <Calendar className="size-3.5" />
                                    {blog.date}
                                </span>
                                <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                                    <Clock className="size-3.5" />
                                    {blog.readTime}
                                </span>
                            </div>

                            <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
                                {blog.title}
                            </h1>
                            <p className="mt-4 text-lg text-muted-foreground">
                                {blog.excerpt}
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Cover Image */}
                {blog.image && (
                    <div className="mx-auto max-w-4xl px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="relative -mt-1 h-64 overflow-hidden rounded-b-2xl sm:h-80 md:h-96"
                        >
                            <Image
                                src={blog.image}
                                alt={blog.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </motion.div>
                    </div>
                )}

                {/* MDX Content */}
                <section className="py-12">
                    <div className="mx-auto max-w-3xl px-6 lg:px-8">
                        <motion.article
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            {mdxContent}
                        </motion.article>
                    </div>
                </section>

                {/* CTA */}
                <section className="border-t border-border bg-muted/30 py-16">
                    <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
                        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                            Need Expert Tax Guidance?
                        </h2>
                        <p className="mt-3 text-muted-foreground">
                            Our team of professionals is ready to help you with personalized
                            tax solutions.
                        </p>
                        <div className="mt-6 flex justify-center gap-4">
                            <Link
                                href="/contact-us"
                                className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                            >
                                Schedule Consultation
                            </Link>
                            <Link
                                href="/services"
                                className="rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                            >
                                View Services
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Related Articles */}
                <section className="border-t border-border py-16">
                    <div className="mx-auto max-w-6xl px-6 lg:px-8">
                        <h2 className="mb-8 text-2xl font-semibold tracking-tight text-foreground">
                            Related Articles
                        </h2>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {relatedBlogs.map((related) => (
                                <Link
                                    key={related.id}
                                    href={`/blogs/${related.slug}`}
                                    className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-md"
                                >
                                    <div className="relative h-36 overflow-hidden">
                                        {related.image ? (
                                            <Image
                                                src={related.image}
                                                alt={related.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        ) : (
                                            <div
                                                className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${related.gradient}`}
                                            >
                                                <span className="text-3xl font-bold text-white/20">
                                                    MVSR
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-4">
                                        <span
                                            className={`rounded-full px-2 py-0.5 text-xs font-medium ${categoryColors[related.category] || "bg-gray-100 text-gray-800"}`}
                                        >
                                            {related.category}
                                        </span>
                                        <h3 className="mt-2 text-sm font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
                                            {related.title}
                                        </h3>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
