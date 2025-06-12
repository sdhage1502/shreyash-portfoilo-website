"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiSun } from "react-icons/fi";
import { HiMoon } from "react-icons/hi";

const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const current = theme === "system" ? resolvedTheme : theme;

  return (
    <button
      onClick={() => setTheme(current === "dark" ? "light" : "dark")}
      className="p-2 rounded-full border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-800/60 backdrop-blur-md shadow-md transition duration-300 hover:scale-110"
      aria-label="Toggle Theme"
    >
      {current === "dark" ? (
        <FiSun className="h-5 w-5 text-yellow-400" />
      ) : (
        <HiMoon className="h-5 w-5 text-gray-900" />
      )}
    </button>
  );
};

export default ThemeToggle;
