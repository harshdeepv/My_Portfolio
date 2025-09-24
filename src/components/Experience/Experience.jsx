import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <h2>Work Experience</h2>
      <div>
        <h3>Tattva Foundation – Full Stack Developer</h3>
        <p><i>Lucknow | Nov 2024 – Aug 2025</i></p>
        <ul>
          <li>Developed REST APIs & microservices using Spring Boot.</li>
          <li>Optimized PostgreSQL schemas and integrated MongoDB workflows.</li>
          <li>Integrated Kafka for event-driven communication.</li>
          <li>Containerized apps with Docker & CI/CD pipelines (Jenkins).</li>
        </ul>
      </div>
      <div>
        <h3>Riziliant Technologies – Intern</h3>
        <p><i>Noida | Feb 2021 – Aug 2021</i></p>
        <p>Assisted backend module development using Spring Boot & SQL.</p>
      </div>
    </section>
  );
}
