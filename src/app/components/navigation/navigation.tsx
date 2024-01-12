import React from "react";
import Link from "next/link";
import ThemeSwitch from "../themeswitch/themeswitch";

export default function Navigation() {
  return (
    <div>
      <Link href={"/"}>Home</Link>
      <Link href={"/about"}>About</Link>
      <Link href={"/blog"}>Blog</Link>
      <ThemeSwitch />
    </div>
  );
}
