import nextMdx from '@next/mdx';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';

const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx'],
};

const withMdx = nextMdx({
  options: {
    remarkPlugins: [],
    rehypePlugins: [rehypeHighlight, rehypeSlug],
  },
});


export default withMdx(nextConfig)