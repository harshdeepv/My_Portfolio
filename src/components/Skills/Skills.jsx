// src/components/Skills/Skills.jsx
import "hover.css/css/hover-min.css";
import "./Skills.css";

const skills = [
  { name: "Java", desc: "Strong OOP concepts, collections, multithreading, and backend development." },
  { name: "Spring Boot", desc: "Built REST APIs, microservices, and integrated security & data layers." },
  { name: "Hibernate", desc: "ORM expertise with JPA, query optimization, and entity mapping." },
  { name: "ReactJS", desc: "Developed responsive UIs with hooks, router, and state management." },
  { name: "PostgreSQL", desc: "Designed relational schemas, queries, and transactions." },
  { name: "MongoDB", desc: "Used NoSQL for high-performance and flexible schema applications." },
  { name: "Apache Kafka", desc: "Implemented event-driven systems with message streaming." },
  { name: "Docker", desc: "Containerized applications for deployment and CI/CD pipelines." },
  { name: "Jenkins", desc: "Setup CI/CD pipelines with automated builds and deployments." },
  { name: "CI/CD", desc: "End-to-end DevOps practices for faster and reliable delivery." }
];

export default function Skills() {
  return (
    <section id="skills" className="skills hvr-grow">
      <h2>Technical Skills</h2>
      <div className="skill-row">
        {skills.map((s, i) => (
          <div key={i} className="skill">
            <span className="skill-name">{s.name}</span>
            <div className="skill-desc">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
