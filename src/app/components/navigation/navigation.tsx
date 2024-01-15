import React from "react";
import Link from "next/link";
import ThemeSwitch from "../themeswitch/themeswitch";
import { LuHome } from "react-icons/lu";
import { FaGithub } from "react-icons/fa6";

export default function Navigation() {
  return (
    <div className="flex flex-wrap">
      <Link href={"/"}>
        <LuHome />
      </Link>
      <Link href={"/about"}>About</Link>
      <Link href={"/blog"}>Blog</Link>
      <Link href="https://github.com/Jasper19901029">
        <FaGithub />
      </Link>
      <ThemeSwitch />
    </div>
  );
}
