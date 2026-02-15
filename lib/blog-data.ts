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
    featured: boolean
}

export const blogs: Blog[] = [
    {
        id: 1,
        slug: "top-10-tax-deductions-2025",
        title: "Top 10 Tax Deductions You Might Be Missing in 2025",
        excerpt:
            "Many taxpayers leave money on the table by overlooking common deductions. From home office expenses to charitable contributions, here are the top deductions you should know about.",
        category: "Tax Tips",
        date: "Feb 10, 2025",
        readTime: "5 min read",
        image: "/business-meeting-office.jpg",
        featured: true,
    },
    {
        id: 2,
        slug: "tax-season-preparation-checklist",
        title: "How to Prepare for Tax Season: A Complete Checklist",
        excerpt:
            "Tax season can be overwhelming, but with the right preparation, you can breeze through it. Our comprehensive checklist helps you organize your documents and maximize your return.",
        category: "Tax Planning",
        date: "Jan 28, 2025",
        readTime: "7 min read",
        image: "/people-working-late-their-office.jpg",
        featured: true,
    },
    {
        id: 3,
        slug: "understanding-itin",
        title: "Understanding ITIN: What It Is and Why You Need One",
        excerpt:
            "An Individual Taxpayer Identification Number (ITIN) is essential for individuals who need to file taxes but aren't eligible for a Social Security Number. Learn everything about the ITIN process.",
        category: "ITIN",
        date: "Jan 15, 2025",
        readTime: "6 min read",
        image: null,
        gradient: "from-emerald-800 to-emerald-950",
        featured: false,
    },
    {
        id: 4,
        slug: "llc-vs-s-corp",
        title: "LLC vs S-Corp: Which Business Structure Is Right for You?",
        excerpt:
            "Choosing the right business structure can save you thousands in taxes. We break down the key differences between LLCs and S-Corps to help you make an informed decision.",
        category: "Business",
        date: "Jan 5, 2025",
        readTime: "8 min read",
        image: null,
        gradient: "from-slate-700 to-slate-900",
        featured: false,
    },
    {
        id: 5,
        slug: "common-tax-filing-mistakes",
        title: "5 Common Tax Filing Mistakes and How to Avoid Them",
        excerpt:
            "Even small errors on your tax return can lead to delays, penalties, or missed refunds. Here are the most common mistakes we see and expert tips on how to avoid them.",
        category: "Tax Tips",
        date: "Dec 20, 2024",
        readTime: "4 min read",
        image: null,
        gradient: "from-green-800 to-green-950",
        featured: false,
    },
    {
        id: 6,
        slug: "bookkeeping-guide-small-businesses",
        title: "The Complete Guide to Bookkeeping for Small Businesses",
        excerpt:
            "Good bookkeeping is the backbone of any successful business. Learn best practices for tracking income, expenses, and staying organized throughout the year.",
        category: "Bookkeeping",
        date: "Dec 12, 2024",
        readTime: "10 min read",
        image: null,
        gradient: "from-teal-700 to-teal-950",
        featured: false,
    },
]

export const categoryColors: Record<string, string> = {
    "Tax Tips": "bg-emerald-100 text-emerald-800",
    "Tax Planning": "bg-blue-100 text-blue-800",
    ITIN: "bg-amber-100 text-amber-800",
    Business: "bg-purple-100 text-purple-800",
    Bookkeeping: "bg-rose-100 text-rose-800",
}
