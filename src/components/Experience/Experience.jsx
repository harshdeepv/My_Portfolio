import "hover.css/css/hover-min.css";
import "./Experience.css";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Tattva Foundation",
    location: "Lucknow",
    period: "Nov 2024 – Aug 2025",
    highlights: [
      "Developed REST APIs and microservices using Spring Boot.",
      "Optimized PostgreSQL schemas and integrated MongoDB workflows.",
      "Integrated Kafka for event-driven communication across services.",
      "Containerized apps with Docker and built CI/CD pipelines in Jenkins.",
    ],
  },
  {
    role: "Backend Intern",
    company: "Riziliant Technologies",
    location: "Noida",
    period: "Feb 2021 – Aug 2021",
    highlights: [
      "Assisted backend module development using Spring Boot and SQL.",
      "Collaborated with senior engineers to ship reliable backend features.",
    ],
  },
];

export default function Experience() {
  return (
    <section className="experience section-card hvr-grow">
      <h2 className="section-title">Work Experience</h2>
      <div className="experience-list">
        {experiences.map((item) => (
          <article key={item.company} className="experience-card">
            <div className="experience-header">
              <div>
                <h3>{item.role}</h3>
                <p className="experience-company">{item.company}</p>
              </div>
              <div className="experience-meta">
                <span>{item.location}</span>
                <span>{item.period}</span>
              </div>
            </div>
            <ul>
              {item.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
