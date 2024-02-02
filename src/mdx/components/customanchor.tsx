import Link from "next/link";
import React, {
  AnchorHTMLAttributes,
  ComponentProps,
  ComponentPropsWithRef,
} from "react";

export default function CustomAnchor({
  href,
  children,
  ...props
}: React.DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>) {
  const isInternalLink = href && href.startsWith("https");
  if (isInternalLink) {
    return (
      <Link
        href={href}
        target="_blank"
        className="text-blue-500 hover:underline hover:underline-offset-2">
        {children}
      </Link>
    );
  }

  return <Link href={href ? href : ""}>{children}</Link>;
}
