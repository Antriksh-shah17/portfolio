import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 dark:bg-black/50 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="font-bold text-blue-500"></h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#skills" className="hover:text-blue-500">Skills</a>
          <a href="#projects" className="hover:text-blue-500">Projects</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
          <ThemeToggle />
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 py-4 space-y-4">
          <a href="#about" className="block">About</a>
          <a href="#skills" className="block">Skills</a>
          <a href="#projects" className="block">Projects</a>
          <a href="#contact" className="block">Contact</a>
          <ThemeToggle />
        </div>
      )}
    </nav>
  );
}
