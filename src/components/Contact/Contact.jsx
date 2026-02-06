// src/components/Contact/Contact.jsx
import "hover.css/css/hover-min.css";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact section-card hvr-grow" aria-label="Contact">
      <div className="contact-header">
        <h2 className="section-title">Let's Connect</h2>
        <p>
          I'm always happy to discuss new projects, system design challenges, and collaboration
          opportunities.
        </p>
      </div>

      <div className="contact-grid">
        <a className="contact-card" href="tel:+917078163748">
          <span className="contact-label">Phone</span>
          <span className="contact-value">+91-7078163748</span>
        </a>
        <a className="contact-card" href="mailto:harshdeepverma3@gmail.com">
          <span className="contact-label">Email</span>
          <span className="contact-value">harshdeepverma3@gmail.com</span>
        </a>
        <a
          className="contact-card"
          href="https://www.linkedin.com/in/harsh-deep-verma-a75966188"
          target="_blank"
          rel="noreferrer"
        >
          <span className="contact-label">LinkedIn</span>
          <span className="contact-value">linkedin.com/in/harsh-deep-verma-a75966188</span>
        </a>
        <a
          className="contact-card"
          href="https://github.com/harshdeepv"
          target="_blank"
          rel="noreferrer"
        >
          <span className="contact-label">GitHub</span>
          <span className="contact-value">github.com/harshdeepv</span>
        </a>
      </div>

      <div className="contact-footer">
        © {new Date().getFullYear()} Harsh Deep Verma. All Rights Reserved.
      </div>
    </section>
  );
}
