"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdOutlineLightMode } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-[41px] h-[41px]"></div>;
  const handleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  return (
    <>
      {theme === "dark" ? (
        <button
          onClick={handleTheme}
          className="dark:hover:text-slate-100 hover:bg-slate-200/40 dark:hover:bg-slate-200/10 p-2">
          <MdOutlineLightMode className="text-yellow-100" size="1.25em" />
        </button>
      ) : (
        <button
          onClick={handleTheme}
          className="dark:hover:text-slate-100 hover:bg-slate-200/40 dark:hover:bg-slate-200/10 p-2">
          <FaMoon size="1.25em" />
        </button>
      )}
    </>
  );
};

export default ThemeSwitch;
