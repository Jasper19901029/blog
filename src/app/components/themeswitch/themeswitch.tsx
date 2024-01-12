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

  if (!mounted) return null;
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
        <button onClick={handleTheme}>
          <MdOutlineLightMode className="text-yellow-100" />
        </button>
      ) : (
        <button onClick={handleTheme}>
          <FaMoon value={theme} />
        </button>
      )}
    </>
  );
};

export default ThemeSwitch;
