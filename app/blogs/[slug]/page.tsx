import { blogs } from "@/lib/blog-data"
import BlogDetailClient from "./blog-detail-client"
import { notFound } from "next/navigation"

type Params = Promise<{ slug: string }>

export async function generateStaticParams() {
    return blogs.map((blog) => ({
        slug: blog.slug,
    }))
}

export async function generateMetadata({ params }: { params: Params }) {
    const { slug } = await params
    const blog = blogs.find((b) => b.slug === slug)
    if (!blog) return { title: "Blog Not Found" }

    return {
        title: `${blog.title} | MVSR Tax Blog`,
        description: blog.excerpt,
    }
}

export default async function BlogDetailPage({ params }: { params: Params }) {
    const { slug } = await params
    const blog = blogs.find((b) => b.slug === slug)

    if (!blog) {
        notFound()
    }

    let MdxContent
    try {
        const mdxModule = await import(`@/content/${slug}.mdx`)
        MdxContent = mdxModule.default
    } catch {
        notFound()
    }

    return <BlogDetailClient blog={blog} mdxContent={<MdxContent />} />
}
