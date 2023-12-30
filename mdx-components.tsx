import type { MDXComponents } from 'mdx/types'
import { Link } from "@phosphor-icons/react/dist/ssr"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="text-2xl mb-6">{children}</h1>,
    h2: ({ id, children }) => <h2 className="text-xl mb-6 group relative">
      <a id={id} className="hidden group-hover:inline absolute -left-6 top-1 p-0.5" href={`#${id}`}><Link /></a>
      {children}
    </h2>,
    p: ({ children }) => <p className="mb-4">{children}</p>,
    ...components,
  }
}