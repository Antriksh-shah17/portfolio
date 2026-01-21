import { FaGithub, FaLinkedin, FaCode, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="px-4 py-20 text-center">
      <h2 className="text-3xl font-bold text-blue-500 mb-6">Contact</h2>

      <p className="mb-8 text-gray-600 dark:text-gray-400">
        Feel free to connect with me 👇
      </p>

      <div className="flex justify-center gap-6 flex-wrap">
        {/* EMAIL */}
        <a
          href="mailto:shahantriksh22@gmail.com"
          className="flex items-center gap-2 px-6 py-3 border rounded-lg hover:bg-blue-500 hover:text-white transition"
        >
          <FaEnvelope size={22} />
          Email
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Antriksh-shah17"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 border rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition"
        >
          <FaGithub size={22} />
          GitHub
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/antriksh-shah17/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 border rounded-lg hover:bg-blue-500 hover:text-white transition"
        >
          <FaLinkedin size={22} />
          LinkedIn
        </a>

        {/* LeetCode */}
        <a
          href="https://leetcode.com/u/Antriksh_shah17/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 border rounded-lg hover:bg-yellow-400 hover:text-black transition"
        >
          <FaCode size={22} />
          LeetCode
        </a>
      </div>

      <p className="mt-10 text-sm text-gray-500">
        © {new Date().getFullYear()} Antriksh Shah
      </p>
    </section>
  );
}
