import nextMdx from '@next/mdx';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx'],
};

const withMdx = nextMdx({
  options: {
    remarkPlugins: [],
    rehypePlugins: [rehypeHighlight, rehypeSlug, rehypeAutolinkHeadings],
  },
});


export default withMdx(nextConfig)