import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export function ModeToggle() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.theme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    }
    return "light"
  })

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
    localStorage.theme = theme
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"))
  }

  return (
    <button
      onClick={toggleTheme}
      className={`w-10 h-10 p-2 rounded-full flex items-center justify-center transition-colors duration-500 ${
        theme === "dark" ? "!bg-gray-500 text-white" : "bg-white text-black"
      }`}
    >
      <span
        key={theme}
        className="animate-fade-rotate transition-transform duration-500 ease-in-out"
      >
        {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </span>
    </button>
  )
}
