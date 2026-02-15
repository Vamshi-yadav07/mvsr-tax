import type { MDXComponents } from "mdx/types"

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        h1: ({ children }) => (
            <h1 className="mt-10 mb-4 text-3xl font-semibold tracking-tight text-foreground">
                {children}
            </h1>
        ),
        h2: ({ children }) => (
            <h2 className="mt-10 mb-4 text-2xl font-semibold tracking-tight text-foreground">
                {children}
            </h2>
        ),
        h3: ({ children }) => (
            <h3 className="mt-8 mb-3 text-xl font-semibold tracking-tight text-foreground">
                {children}
            </h3>
        ),
        p: ({ children }) => (
            <p className="mb-4 leading-relaxed text-muted-foreground">{children}</p>
        ),
        ul: ({ children }) => (
            <ul className="mb-6 ml-6 list-disc space-y-2 text-muted-foreground">
                {children}
            </ul>
        ),
        ol: ({ children }) => (
            <ol className="mb-6 ml-6 list-decimal space-y-2 text-muted-foreground">
                {children}
            </ol>
        ),
        li: ({ children }) => <li className="leading-relaxed">{children}</li>,
        strong: ({ children }) => (
            <strong className="font-semibold text-foreground">{children}</strong>
        ),
        hr: () => <hr className="my-10 border-border" />,
        blockquote: ({ children }) => (
            <blockquote className="my-6 border-l-4 border-primary/30 pl-4 italic text-muted-foreground">
                {children}
            </blockquote>
        ),
        table: ({ children }) => (
            <div className="my-6 overflow-x-auto">
                <table className="w-full border-collapse text-sm">{children}</table>
            </div>
        ),
        th: ({ children }) => (
            <th className="border border-border bg-muted px-4 py-2 text-left font-semibold text-foreground">
                {children}
            </th>
        ),
        td: ({ children }) => (
            <td className="border border-border px-4 py-2 text-muted-foreground">
                {children}
            </td>
        ),
        a: ({ children, href }) => (
            <a
                href={href}
                className="text-primary underline decoration-primary/30 underline-offset-2 transition-colors hover:decoration-primary"
            >
                {children}
            </a>
        ),
        ...components,
    }
}
