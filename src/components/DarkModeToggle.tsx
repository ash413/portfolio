'use client'

import { useTheme } from "@/context/ThemeContext"
import { FaSun, FaMoon } from "react-icons/fa";


export default function DarkModeToggle() {
    const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 z-50 p-2 rounded-full bg-white dark:bg-darkAccent shadow-lg transition-colors"
        aria-label="toggle dark mode"
    >
        {isDarkMode ? (
            <FaSun className="w-5 h-5 text-orange-400"/>
        ) : (
            <FaMoon className="w-5 h-5 text-blue-900"/>
        )}
    </button>
  )
}
