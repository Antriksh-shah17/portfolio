import { useState } from "react";

// ✅ EXACT PATHS (as in your screenshot)
import hv1 from "../assets/projects/The_Healthy_vision/1.png";
import hv2 from "../assets/projects/The_Healthy_vision/2.png";
import hv3 from "../assets/projects/The_Healthy_vision/3.png";

import t1 from "../assets/projects/Travalaya/1.jpeg";
import t2 from "../assets/projects/Travalaya/2.jpeg";

const projects = [
  {
    title: "The Healthy Vision",
    images: [hv1, hv2, hv3],
    description:
      "Personal dietician website with blogs and appointment scheduling.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/antriksh",
  },
  {
    title: "Travalaya",
    images: [t1, t2],
    description:
      "Smart tourism app with AI-based itinerary generation and local guide matching.",
    tech: ["Flutter", "Python", "AI"],
    github: "https://github.com/antriksh",
  },
];

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

/* ---------- PROJECT CARD WITH SLIDER ---------- */

function ProjectCard({ project }) {
  const [current, setCurrent] = useState(0);
  const total = project.images.length;

  const next = () => setCurrent((current + 1) % total);
  const prev = () =>
    setCurrent((current - 1 + total) % total);

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
          </>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-6">
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
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-500 hover:underline"
        >
          GitHub Repository
        </a>
      </div>
    </div>
  );
}
