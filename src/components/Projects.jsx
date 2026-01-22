import { useState } from "react";

/* ========= IMAGE IMPORTS ========= */

// The Healthy Vision
import hv1 from "../assets/projects/The_Healthy_vision/1.png";
import hv2 from "../assets/projects/The_Healthy_vision/2.png";
import hv3 from "../assets/projects/The_Healthy_vision/3.png";

// Travaalay
import t1 from "../assets/projects/Travalaya/1.jpeg";
import t2 from "../assets/projects/Travalaya/2.jpeg";

// SafarSathi (5 UNIQUE images)
import ss1 from "../assets/projects/Safarsathi/1.png";
import ss2 from "../assets/projects/Safarsathi/2.png";
import ss3 from "../assets/projects/Safarsathi/3.png";
import ss4 from "../assets/projects/Safarsathi/4.png";
import ss5 from "../assets/projects/Safarsathi/5.png";

/* ========= PROJECT DATA ========= */

const projects = [
  {
    title: "The Healthy Vision",
    images: [hv1, hv2, hv3],
    description:
      "A personal dietician web application with blogs, health-focused content, and appointment scheduling.",
    tech: ["React", "Node.js", "MongoDB"],
    status: "Live",
    link: "https://thehealthyvision.onrender.com",
    linkText: "Visit Live Website",
  },
  {
    title: "SafarSathi",
    images: [ss1, ss2, ss3, ss4, ss5],
    description:
      "A JavaFX-based desktop application with Firebase integration for smart tourism and guide management.",
    tech: ["JavaFX", "Firebase"],
    status: "Desktop App",
    link: "https://gitlab.com/chetankolheai-group/superx_safarsathi1",
    linkText: "View Source Code (GitLab)",
  },
  {
    title: "Travaalay",
    images: [t1, t2],
    description:
      "An AI-powered smart tourism platform with itinerary generation and local guide matching (currently under development).",
    tech: ["Flutter", "Python", "AI"],
    status: "In Progress",
    link: "",
    linkText: "",
  },
];

/* ========= MAIN COMPONENT ========= */

export default function Projects() {
  return (
    <section id="projects" className="px-4 py-20 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-500 mb-10 text-center">
        Projects
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

/* ========= PROJECT CARD ========= */

function ProjectCard({ project }) {
  const [current, setCurrent] = useState(0);
  const total = project.images.length;

  const next = () => setCurrent((current + 1) % total);
  const prev = () => setCurrent((current - 1 + total) % total);

  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
      {/* IMAGE SLIDER */}
      <div className="relative">
        <img
          src={project.images[current]}
          alt={project.title}
          className="w-full h-48 object-cover"
        />

        {total > 1 && (
          <>
            {/* ARROWS */}
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-2 py-1 rounded"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-2 py-1 rounded"
            >
              ›
            </button>

            {/* DOT INDICATORS */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
              {project.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full ${
                    i === current ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-6">
        {/* STATUS */}
        <span
          className={`inline-block mb-2 px-3 py-1 text-xs rounded-full font-semibold
            ${
              project.status === "Live"
                ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                : project.status === "Desktop App"
                ? "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
                : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300"
            }
          `}
        >
          {project.status}
        </span>

        <h3 className="text-xl font-semibold mb-2">
          {project.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
          {project.description}
        </p>

        {/* TECH STACK */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>

        {/* LINK */}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-500 hover:underline font-medium"
          >
            {project.linkText}
          </a>
        )}
      </div>
    </div>
  );
}
