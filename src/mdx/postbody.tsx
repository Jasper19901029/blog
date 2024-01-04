import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";
// @ts-expect-error no types
import remarkA11yEmoji from "@fec/remark-a11y-emoji";
import { mdxComponents } from "./markdown-components";

export default function PostBody({ children }: { children: string }) {
  return (
    <MDXRemote
      source={children}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkFrontmatter],
          rehypePlugins: [
            rehypeSlug,
            rehypeAutolinkHeadings,
            [
              rehypePrism,
              { ignoreMissing: true, showLineNumbers: false },
            ] as any,
          ],
        },
      }}
      components={mdxComponents}
    />
  );
}
