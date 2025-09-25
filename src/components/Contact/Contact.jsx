// src/components/Contact/Contact.jsx
import "hover.css/css/hover-min.css";
import "./Contact.css";

export default function Contact() {
  return (
    <footer id="contact" className="contact" role="contentinfo" aria-label="Footer contact">
      <div className="content-wrap">
        <h2>Contact</h2>
        <p>📞 +91-7078163748</p>
        <p>📧 harshdeepverma3@gmail.com</p>
        <p>
          <a
            href="https://www.linkedin.com/in/harsh-deep-verma-a75966188"
            target="_blank"
            rel="noreferrer"
            className="hvr-grow"
          >
            LinkedIn
          </a>{" "}
          |{" "}
          <a
            href="https://github.com/harshdeepv"
            target="_blank"
            rel="noreferrer"
            className="hvr-grow"
          >
            GitHub
          </a>
        </p>
        <div className="footer-bottom">
          © {new Date().getFullYear()} Harsh Deep Verma. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
