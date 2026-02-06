import "hover.css/css/hover-min.css";
import "./About.css";
import profileImage from "../../assets/images/harshdeep.png";

export default function About() {
  return (
    <section className="about section-card hvr-grow">
      <div className="about-hero">
        <div className="about-profile">
          <div className="profile-card">
            <img src={profileImage} alt="Harsh Deep Verma" />
          </div>
          <div className="profile-name">
            <p className="eyebrow">Hello, I'm</p>
            <h2 className="section-title">Harsh Deep Verma</h2>
            <p className="about-role">Full Stack Developer</p>
          </div>
        </div>

        <div className="about-intro">
          <p className="about-role">
            Full Stack Developer building reliable backend systems, modern web interfaces, and
            event-driven architectures.
          </p>
          <div className="about-actions">
            <a className="btn primary" href="#projects">View Projects</a>
            <a className="btn ghost" href="#contact">Get in touch</a>
          </div>
          <div className="about-highlights">
            <div className="highlight-card">
              <h3>Backend & Microservices</h3>
              <p>Spring Boot APIs, Kafka pipelines, and clean domain-driven services.</p>
            </div>
            <div className="highlight-card">
              <h3>Data Systems</h3>
              <p>PostgreSQL schemas, MongoDB workflows, and performance-minded queries.</p>
            </div>
            <div className="highlight-card">
              <h3>Delivery & DevOps</h3>
              <p>Dockerized deployments with CI/CD pipelines and quality gates.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="about-body">
        <p>
          I'm a Full Stack Developer with hands-on experience in backend development,
          microservices, and database management. I focus on building scalable, secure, and
          maintainable applications using Java, Spring Boot, PostgreSQL, MongoDB, Kafka,
          and ReactJS.
        </p>
        <p>
          I've delivered solutions across REST API development, CI/CD pipelines, containerization
          with Docker & Jenkins, and event-driven systems that keep data in sync across services.
        </p>
        <p>
          When I'm not coding, I enjoy learning new tools, experimenting with side projects, and
          collaborating with teams to deliver impactful software solutions.
        </p>
      </div>

      <div className="about-focus">
        <h3>Focus Areas</h3>
        <ul>
          <li>API design, microservices, and clean architecture</li>
          <li>Event-driven workflows using Kafka and async messaging</li>
          <li>Data modeling in PostgreSQL and MongoDB</li>
          <li>Automated delivery with Docker and Jenkins</li>
        </ul>
      </div>
    </section>
  );
}
