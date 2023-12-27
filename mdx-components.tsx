import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="text-2xl mb-6">{children}</h1>,
    p: ({ children }) => <p className="mb-4">{children}</p>,
    ...components,
  }
}