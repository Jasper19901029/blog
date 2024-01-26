import { MDXComponents } from "mdx/types";
import Link from "next/link";
import { AnchorHTMLAttributes } from "react";
import {
  CustomH1,
  CustomH2,
  CustomH3,
  CustomH4,
  CustomH5,
  CustomH6,
} from "./components/customheading";
import CustomAnchor from "./components/customanchor";

export const mdxComponents: MDXComponents = {
  a: CustomAnchor,
  h1: CustomH1,
  h2: CustomH2,
  h3: CustomH3,
  h4: CustomH4,
  h5: CustomH5,
  h6: CustomH6,
};
