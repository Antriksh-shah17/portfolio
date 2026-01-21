import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import AchievementsCertifications from "./components/AchievementsCertifications";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <AchievementsCertifications />
      <Projects />
      <Contact />
    </>
  );
}
