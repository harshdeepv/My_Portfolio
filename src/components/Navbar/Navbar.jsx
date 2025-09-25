import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();
  const hash = location.hash; // e.g. "#skills"

  useEffect(() => {
    const sidebar = document.querySelector(".sidebar");

    if (!sidebar) return;

    const handleMouseEnter = () => {
      document.body.classList.add("sidebar-expanded");
    };

    const handleMouseLeave = () => {
      document.body.classList.remove("sidebar-expanded");
    };

    sidebar.addEventListener("mouseenter", handleMouseEnter);
    sidebar.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup
    return () => {
      sidebar.removeEventListener("mouseenter", handleMouseEnter);
      sidebar.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <aside className="sidebar">
      <div className="brand">HD</div>
      <nav className="menu">
        <Link to="/#about" className={hash === "#about" ? "active" : ""}>About</Link>
        <Link to="/#skills" className={hash === "#skills" ? "active" : ""}>Skills</Link>
        <Link to="/#experience" className={hash === "#experience" ? "active" : ""}>Experience</Link>
        <Link to="/#projects" className={hash === "#projects" ? "active" : ""}>Projects</Link>
        <Link to="/#education" className={hash === "#education" ? "active" : ""}>Education</Link>
        <Link to="/#contact" className={hash === "#contact" ? "active" : ""}>Contact</Link>
      </nav>
    </aside>
  );
}
