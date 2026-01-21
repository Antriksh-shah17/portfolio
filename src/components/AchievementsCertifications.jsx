import rubicon from "../assets/certificates/rubicon.jpeg";
import sih from "../assets/certificates/sih.jpeg";
import ey from "../assets/certificates/edunet.jpeg";
import dipex from "../assets/certificates/dipex.jpeg";

const items = [
  {
    title: "DIPEX Winner – Cybersecurity Domain",
    type: "Achievement",
    description:
      "Winner at DIPEX for a cybersecurity-based project, recognized for innovation and problem-solving in the cybersecurity domain.",
    image: dipex,
  },
  {
    title: "Smart India Hackathon 2025",
    type: "Achievement",
    description:
      "Participated in the SIH 2025 internal hackathon conducted at Zeal College of Engineering & Research, Pune.",
    image: sih,
  },
  {
    title: "Future Skills for Youth – Rubicon Foundation",
    type: "Certification",
    description:
      "Successfully completed industry-oriented training under the CSR initiative of Deutsche Bank in collaboration with Rubicon Foundation.",
    image: rubicon,
  },
  {
    title: "MERN Stack Internship – EY & AICTE",
    type: "Certification",
    description:
      "Completed a 6-week internship on Building Modern Web Applications with MERN Stack under the Next Gen Employability Program.",
    image: ey,
  },
];

export default function AchievementsCertifications() {
  return (
    <section
      id="achievements"
      className="px-4 py-20 max-w-7xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-blue-500 mb-10 text-center">
        Achievements & Certifications
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
          >
            {/* CERTIFICATE IMAGE */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />

            {/* CONTENT */}
            <div className="p-6">
              <span className="text-xs uppercase tracking-wide text-blue-500 font-semibold">
                {item.type}
              </span>

              <h3 className="text-lg font-semibold mt-2 mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
