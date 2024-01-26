import React from "react";
import Link from "next/link";
import ThemeSwitch from "../themeswitch/themeswitch";
import { LuHome } from "react-icons/lu";
import { FaGithub } from "react-icons/fa6";

export default function Navigation() {
  return (
    <div className="w-full h-[80px] flex flex-row justify-around items-center border-b-2 border-slate-300 backdrop-blur-lg bg-opacity-0 sticky top-0 z-10">
      <h1 className="text-2xl">Jasper&apos;s Blog</h1>
      <div className="flex flex-row space-x-6 text-xl items-center">
        <Link href={"/"}>
          <LuHome />
        </Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/blog"}>Blog</Link>
        <Link href="https://github.com/Jasper19901029" target="_blank">
          <FaGithub />
        </Link>
        <ThemeSwitch />
      </div>
    </div>
  );
}
//
