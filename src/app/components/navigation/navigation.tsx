import React from "react";
import Link from "next/link";
import ThemeSwitch from "../themeswitch/themeswitch";
import { LuHome } from "react-icons/lu";
import { FaGithub } from "react-icons/fa6";
import { BsFillEmojiSmileUpsideDownFill } from "react-icons/bs";
import Tooltip from "@mui/material/Tooltip";

export default function Navigation() {
  return (
    <div className=" sm:flex-row w-full h-[80px] flex flex-col justify-around items-center border-b-2 border-slate-300 backdrop-blur-lg bg-opacity-0 sticky top-0 z-10  ">
      <div className="flex flex-row items-center space-x-2">
        <h1 className="text-2xl ">Jasper&apos;s Blog</h1>
        <BsFillEmojiSmileUpsideDownFill
          className="dark:text-yellow-100 text-black"
          size="1.35em"
        />
      </div>
      <div className="flex space-x-4 flex-row text-xl items-center">
        <Tooltip
          title="home"
          placement="bottom"
          slotProps={{
            popper: {
              modifiers: [
                {
                  name: "offset",
                  options: {
                    offset: [0, -10],
                  },
                },
              ],
            },
          }}>
          <Link
            href={"/"}
            className="dark:hover:text-slate-100 hover:bg-slate-200/40 dark:hover:bg-slate-200/10 p-2">
            <LuHome />
          </Link>
        </Tooltip>
        <Tooltip
          title="about"
          placement="bottom"
          slotProps={{
            popper: {
              modifiers: [
                {
                  name: "offset",
                  options: {
                    offset: [0, -10],
                  },
                },
              ],
            },
          }}>
          <Link
            href={"/about"}
            className="dark:hover:text-slate-100 hover:bg-slate-200/40 dark:hover:bg-slate-200/10 p-2">
            About
          </Link>
        </Tooltip>
        <Tooltip
          title="blog"
          placement="bottom"
          slotProps={{
            popper: {
              modifiers: [
                {
                  name: "offset",
                  options: {
                    offset: [0, -12],
                  },
                },
              ],
            },
          }}>
          <Link
            href={"/blog"}
            className="dark:hover:text-slate-100 hover:bg-slate-200/40 dark:hover:bg-slate-200/10 p-2">
            Blog
          </Link>
        </Tooltip>
        <Tooltip
          title="github"
          placement="bottom"
          slotProps={{
            popper: {
              modifiers: [
                {
                  name: "offset",
                  options: {
                    offset: [0, -12],
                  },
                },
              ],
            },
          }}>
          <Link
            href="https://github.com/Jasper19901029"
            target="_blank"
            className="dark:hover:text-slate-100 hover:bg-slate-200/40 dark:hover:bg-slate-200/10 p-2">
            <FaGithub />
          </Link>
        </Tooltip>
        <ThemeSwitch />
      </div>
    </div>
  );
}
