import "hover.css/css/hover-min.css";
import "./Projects.css";

const projects = [
  {
    title: "Farmer Management Portal",
    org: "ICAR Lucknow",
    period: "Aug 2025 – Sep 2025",
    summary: "Full-stack portal for farmer onboarding, crop workflows, and compliance checks.",
    bullets: [
      "Built Spring Boot services with Hibernate, PostgreSQL, and ReactJS interfaces.",
      "Implemented JWT authentication, role-based access, and OTP mobile verification.",
      "Designed relational mappings for crops, irrigation, livestock, and program data.",
      "Containerized for Docker deployment with audit logging and validations.",
    ],
    stack: ["Spring Boot", "ReactJS", "PostgreSQL", "Docker"],
  },
  {
    title: "Deonar Abattoir",
    org: "Maharashtra Government Project",
    period: "Nov 2024 – Aug 2025",
    summary: "Backend microservices integrated with the UPYOG/DIGIT platform.",
    bullets: [
      "Built service modules using Spring Boot for scalable integrations.",
      "Automated workflows and REST APIs for operational processes.",
    ],
    stack: ["Spring Boot", "Microservices", "REST APIs"],
  },
  {
    title: "E-Binder",
    org: "Government Workflow Application",
    period: "Nov 2024 – Aug 2025",
    summary: "Workflow persistence services for state transitions and document routing.",
    bullets: [
      "Designed backend services with PostgreSQL and MongoDB persistence.",
      "Enabled standardized CRUD operations with egov-persister and querybuilder.",
    ],
    stack: ["PostgreSQL", "MongoDB", "Workflow Engine"],
  },
];

export default function Projects() {
  return (
    <section className="projects section-card hvr-grow">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <div className="project-header">
              <div>
                <h3>{project.title}</h3>
                <p className="project-org">{project.org}</p>
              </div>
              <span className="project-period">{project.period}</span>
            </div>
            <p className="project-summary">{project.summary}</p>
            <ul>
              {project.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="project-tags">
              {project.stack.map((tag) => (
                <span key={tag} className="project-tag">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
