"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure toggle works after mounting to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2 rounded bg-gray-200 dark:bg-gray-800"
    >
      {/* Toggle {theme === "light" ? "Dark" : "Light"} Mode */}
      {theme === "light" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
