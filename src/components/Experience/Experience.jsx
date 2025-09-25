import "hover.css/css/hover-min.css";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="experience hvr-grow">
      <h2>Work Experience</h2>
      <div>
        <h3>Tattva Foundation – Full Stack Developer</h3>
        <p><i>Lucknow | Nov 2024 – Aug 2025</i></p>
        <p>
          Developed REST APIs & microservices using Spring Boot.<br />
          Optimized PostgreSQL schemas and integrated MongoDB workflows.<br />
          Integrated Kafka for event-driven communication.<br />
          Containerized apps with Docker & CI/CD pipelines (Jenkins).
        </p>
      </div>
      <div>
        <h3>Riziliant Technologies – Intern</h3>
        <p><i>Noida | Feb 2021 – Aug 2021</i></p>
        <p>Assisted backend module development using Spring Boot & SQL.</p>
      </div>
    </section>
  );
}
