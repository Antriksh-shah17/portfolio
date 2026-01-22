import {
  FaJava,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaReact,
} from "react-icons/fa";
import {
  SiFlutter,
  SiBootstrap,
  SiDart,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiFirebase,
  SiMysql,
  SiPostman,
} from "react-icons/si";

export default function Skills() {
  return (
    <section id="skills" className="px-4 py-20 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-500 mb-10 text-center">
        Skills & Tools
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {/* TECHNICAL SKILLS */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8 shadow-lg">
          <h3 className="text-xl font-semibold mb-6 text-center">
            Technical Skills
          </h3>

          <Group title="Languages">
            <Skill icon={<FaJava />} name="Java" />
            <Skill icon={<FaJs />} name="JavaScript" />
            <Skill icon={<SiDart />} name="Dart" />
            <Skill icon={<SiHtml5 />} name="HTML" />
            <Skill icon={<SiCss3 />} name="CSS" />
          </Group>

          <Group title="Frameworks">
            <Skill icon={<FaReact />} name="React" />
            <Skill icon={<SiFlutter />} name="Flutter" />
            <Skill icon={<SiBootstrap />} name="Bootstrap" />
          </Group>

          <Group title="Databases">
            <Skill icon={<SiMysql />} name="MySQL" />
            <Skill icon={<SiMongodb />} name="MongoDB" />
            <Skill icon={<SiFirebase />} name="Firebase" />
          </Group>
        </div>

        {/* TOOLS */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8 shadow-lg">
          <h3 className="text-xl font-semibold mb-6 text-center">
            Tools & Platforms
          </h3>

          <div className="flex gap-4 flex-wrap justify-center">
            <Tool icon={<FaGitAlt />} name="Git" />
            <Tool icon={<FaGithub />} name="GitHub" />
            <Tool icon={<SiPostman />} name="Postman" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- SMALL COMPONENTS ---------- */

function Group({ title, children }) {
  return (
    <div className="mb-6">
      <p className="font-semibold mb-3">{title}</p>
      <div className="flex gap-4 flex-wrap">{children}</div>
    </div>
  );
}

function Skill({ icon, name }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-lg text-sm shadow">
      <span className="text-blue-500 text-lg">{icon}</span>
      <span>{name}</span>
    </div>
  );
}

function Tool({ icon, name }) {
  return (
    <div className="flex items-center gap-2 px-5 py-3 bg-white dark:bg-gray-900 rounded-lg text-sm shadow">
      <span className="text-blue-500 text-xl">{icon}</span>
      <span>{name}</span>
    </div>
  );
}
