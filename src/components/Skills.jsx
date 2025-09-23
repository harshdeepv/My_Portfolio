const skills = [
  "Java", "Spring Boot", "Hibernate", "ReactJS", "PostgreSQL",
  "MongoDB", "Apache Kafka", "Docker", "Jenkins", "CI/CD"
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Technical Skills</h2>
      <div className="skill-grid">
        {skills.map((s, i) => <div key={i} className="skill">{s}</div>)}
      </div>
    </section>
  );
}
