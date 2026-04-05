export interface Blog {
    id: number
    slug: string
    title: string
    excerpt: string
    category: string
    date: string
    readTime: string
    image: string | null
    gradient?: string
}

export const blogs: Blog[] = [
    {
        id: 1,
        slug: "common-tax-mistakes",
        title: "5 Common Tax Mistakes to Avoid This Season",
        excerpt:
            "Learn about the most frequent errors taxpayers make and how to steer clear of them for a smooth filing experience.",
        category: "Tax Tips",
        date: "Apr 1, 2026",
        readTime: "5 min read",
        image: "/image1.jpg",
    },
    {
        id: 2,
        slug: "small-business-deductions",
        title: "Maximizing Deductions for Small Business Owners",
        excerpt:
            "Discover key deductions that can significantly reduce your tax liability and boost your business's bottom line.",
        category: "Business",
        date: "Mar 22, 2026",
        readTime: "7 min read",
        image: "/image2.jpg",
    },
    {
        id: 3,
        slug: "tax-law-changes",
        title: "Understanding New Tax Law Changes",
        excerpt:
            "Stay informed about the latest tax legislation updates and how they might impact your financial planning.",
        category: "Updates",
        date: "Mar 10, 2026",
        readTime: "6 min read",
        image: "/image3.jpg",
    },
]

export const categoryColors: Record<string, string> = {
    "Tax Tips": "bg-emerald-100 text-emerald-800",
    Business: "bg-purple-100 text-purple-800",
    Updates: "bg-sky-100 text-sky-800",
}
