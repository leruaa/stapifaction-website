import nextMdx from '@next/mdx';
import rehypeHighlight from 'rehype-highlight';

const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx'],
};

const withMdx = nextMdx({
  options: {
    remarkPlugins: [],
    rehypePlugins: [rehypeHighlight],
  },
});


export default withMdx(nextConfig)