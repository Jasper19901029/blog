import { MDXComponents } from "mdx/types";
import { Code } from "bright";
import Input from "@/app/components/input";
export const mdxComponents: MDXComponents = {
  pre: Code,
  Input: Input,
};
