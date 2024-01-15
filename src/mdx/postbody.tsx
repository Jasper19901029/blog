import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";
import rehypeCodeTitles from "rehype-code-titles";

import { mdxComponents } from "./markdown-components";

export default function PostBody({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <MDXRemote
      source={children}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkFrontmatter],
          rehypePlugins: [
            rehypeSlug,
            rehypeAutolinkHeadings,
            rehypeCodeTitles,
            [rehypePrism, { ignoreMissing: true }] as any,
          ],
        },
      }}
      components={mdxComponents}
    />
  );
}
