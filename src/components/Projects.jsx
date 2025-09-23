export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      
      <div>
        <h3>Farmer Management Portal – ICAR Lucknow</h3>
        <p><i>Aug 2025 – Sep 2025</i></p>
        <ul>
          <li>Developed full-stack portal with Spring Boot, Hibernate (JPA), PostgreSQL, and ReactJS.</li>
          <li>Implemented JWT authentication, role-based authorization, and OTP mobile verification.</li>
          <li>Designed relational DB schema with many-to-many mappings for crops, irrigation, livestock.</li>
          <li>Deployed in Docker + AWS with audit logging & compliance validations (Aadhaar, KCC, etc.).</li>
        </ul>
      </div>

      <div>
        <h3>Deonar Abattoir – Maharashtra Govt. Project</h3>
        <p><i>Nov 2024 – Aug 2025</i></p>
        <ul>
          <li>Built backend microservices with Spring Boot, integrated with UPYOG/DIGIT platform.</li>
          <li>Automated workflows & REST APIs ensuring scalable module integrations.</li>
        </ul>
      </div>

      <div>
        <h3>E-Binder – Govt. Workflow Application</h3>
        <p><i>Nov 2024 – Aug 2025</i></p>
        <ul>
          <li>Designed backend services for state transitions and workflow persistence using PostgreSQL & MongoDB.</li>
          <li>Enabled standardized CRUD operations via egov-persister and querybuilder.</li>
        </ul>
      </div>
    </section>
  );
}
