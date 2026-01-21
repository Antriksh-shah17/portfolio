import { motion } from "framer-motion";
import profileImg from "../assets/profile.png";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 pt-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
      >
        {/* LEFT: TEXT */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Hi, I’m <span className="text-blue-500">Antriksh Shah</span>
          </h1>

          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg mb-6">
            Full Stack & Flutter Developer building modern web and mobile
            applications.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition"
            >
              Download Resume
            </a>
          </div>

          {/* EMAIL */}
          <p className="mt-6 text-sm text-gray-600 dark:text-gray-400">
            📧 Email:{" "}
            <a
              href="mailto:antrikshshah@example.com"
              className="text-blue-500 hover:underline"
            >
              shahantriksh22@gmail.com
            </a>
          </p>
        </div>

{/* RIGHT: IMAGE */}
<div className="flex justify-center md:justify-end">
  <img
    src={profileImg}
    alt="Antriksh Shah"
    className="
      w-56
      sm:w-64
      md:w-72
      lg:w-80
      xl:w-96
      object-contain
    "
  />
</div>



      </motion.div>
    </section>
  );
}
