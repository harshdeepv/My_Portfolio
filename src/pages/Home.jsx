// src/pages/Home.jsx
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Experience from "../components/Experience/Experience";
import Projects from "../components/Projects/Projects";
import Education from "../components/Education/Education";
import Contact from "../components/Contact/Contact";

export default function Home() {
  return (
    <div className="snap-container">
      <section id="about" className="snap-section"><About /></section>
      <section id="skills" className="snap-section"><Skills /></section>
      <section id="experience" className="snap-section"><Experience /></section>
      <section id="projects" className="snap-section"><Projects /></section>
      <section id="education" className="snap-section"><Education /></section>
      <section id="contact" className="snap-section"><Contact /></section>
    </div>
  );
}
