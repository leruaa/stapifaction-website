import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="text-2xl mb-6">{children}</h1>,
    p: ({ children }) => <p className="mb-4">{children}</p>,
    pre: ({ children }) => <pre className="p-2 text-sm bg-slate-100 rounded">{children}</pre>,
    code: ({ children }) => <code className="px-0.5 bg-slate-100 rounded-sm">{children}</code>,
    ...components,
  }
}