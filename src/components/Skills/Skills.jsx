// src/components/Skills/Skills.jsx
import "hover.css/css/hover-min.css";
import "./Skills.css";

const skillGroups = [
  {
    title: "Backend & APIs",
    desc: "Designing REST services and scalable microservices with clean architecture.",
    skills: ["Java", "Spring Boot", "Hibernate", "REST APIs"],
  },
  {
    title: "Data & Storage",
    desc: "Relational and NoSQL modeling with performance-focused queries.",
    skills: ["PostgreSQL", "MongoDB", "Schema Design", "Query Optimization"],
  },
  {
    title: "Frontend",
    desc: "Building responsive interfaces and smooth UX flows.",
    skills: ["ReactJS", "Hooks", "Routing", "State Management"],
  },
  {
    title: "Event Systems",
    desc: "Streaming and async messaging for resilient workflows.",
    skills: ["Apache Kafka", "Async Processing", "Event-Driven"],
  },
  {
    title: "Delivery & DevOps",
    desc: "Automated releases with containers and CI/CD pipelines.",
    skills: ["Docker", "Jenkins", "CI/CD", "Automation"],
  },
];

export default function Skills() {
  return (
    <section className="skills section-card hvr-grow">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article key={group.title} className="skill-group">
            <h3>{group.title}</h3>
            <p>{group.desc}</p>
            <div className="skill-chips">
              {group.skills.map((skill) => (
                <span key={skill} className="skill-chip">
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
