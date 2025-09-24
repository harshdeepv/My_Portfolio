// src/components/Navbar/Navbar.jsx
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <aside className="sidebar">
      <div className="brand">HD</div>
      <nav className="menu">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/education">Education</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </aside>
  );
}
