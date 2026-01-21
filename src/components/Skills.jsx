const skills = [
  "React",
  "Flutter",
  "Java",
  "Node.js",
  "MongoDB",
  "MySQL",
  "HTML",
  "CSS",
];

const tools = [
  "Git",
  "GitHub",
  "GitLab",
  "Postman",
  "VS Code",
  "Firebase",
];

export default function Skills() {
  return (
    <section id="skills" className="px-4 py-20 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-500 mb-10">Skills & Tools</h2>

      {/* SKILLS */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          Technical Skills
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center hover:scale-105 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* TOOLS */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          Tools & Platforms
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {tools.map((tool) => (
            <div
              key={tool}
              className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center hover:scale-105 transition"
            >
              {tool}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
