import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = "" }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={`relative inline-flex items-center justify-center p-2 rounded-lg text-gray-700 dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-700/70 hover:text-brand-blue dark:hover:text-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue dark:focus-visible:ring-blue-400 transition-colors duration-200 ${className}`}
    >
      <span className="sr-only">Toggle theme</span>
      <div className="relative w-5 h-5 flex items-center justify-center">
        <Sun
          className={`h-5 w-5 absolute transition-all duration-300 transform ${
            isDark
              ? "rotate-0 scale-100 opacity-100 text-amber-400"
              : "-rotate-90 scale-0 opacity-0 text-gray-700"
          }`}
          aria-hidden="true"
        />
        <Moon
          className={`h-5 w-5 absolute transition-all duration-300 transform ${
            isDark
              ? "rotate-90 scale-0 opacity-0 text-slate-200"
              : "rotate-0 scale-100 opacity-100 text-brand-navy"
          }`}
          aria-hidden="true"
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
