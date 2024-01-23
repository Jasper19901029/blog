import Link from "next/link";
import React, {
  AnchorHTMLAttributes,
  ComponentProps,
  ComponentPropsWithRef,
} from "react";
type CustomAnchorProps = ComponentPropsWithRef<"a"> & {
  children: React.ReactNode;
};

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
      <Link href={href} target="_blank" className="text-blue-500">
        {children}
      </Link>
    );
  }

  return <Link href={href ? href : ""}>{children}</Link>;
}
