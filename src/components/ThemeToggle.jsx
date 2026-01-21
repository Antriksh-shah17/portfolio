import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-3 py-1 rounded-md border border-gray-300 dark:border-gray-600 text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition"
    >
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
