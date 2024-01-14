import { MDXComponents } from "mdx/types";
import Link from "next/link";
import { AnchorHTMLAttributes } from "react";

export const mdxComponents: MDXComponents = {
  a: ({
    children,
    href,
  }: React.DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >) => {
    if (!href) return <>{children}</>;
    return (
      <Link href={href} target="_blank" className="text-blue-500">
        {children}
      </Link>
    );
  },
};
