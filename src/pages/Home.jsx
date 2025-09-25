// src/pages/Home.jsx
import "./Home.css";
import { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Experience from "../components/Experience/Experience";
import Projects from "../components/Projects/Projects";
import Education from "../components/Education/Education";
import Contact from "../components/Contact/Contact";

export default function Home() {
  const location = useLocation();
  const hash = location.hash;

  const [menuOpen, setMenuOpen] = useState(false);
  const [a11yOpen, setA11yOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const a11yBtnRef = useRef(null);
  const searchInputRef = useRef(null);

  useEffect(() => setMenuOpen(false), [location]);

  useEffect(() => {
    const sections = document.querySelectorAll(".snap-section, .footer");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.2 }
    );
    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", menuOpen);
  }, [menuOpen]);

  const toggleHighContrast = () => document.body.classList.toggle("high-contrast");
  const toggleLargeText = () => document.body.classList.toggle("large-text");
  const toggleReduceMotion = () => document.body.classList.toggle("reduce-motion");

  useEffect(() => {
    if (!a11yOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setA11yOpen(false);
        a11yBtnRef.current?.focus();
      }
    };
    const onClick = (e) => {
      const panel = document.getElementById("a11y-panel");
      if (panel && !panel.contains(e.target) && e.target !== a11yBtnRef.current) {
        setA11yOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onClick);
    };
  }, [a11yOpen]);

  // Smooth-scroll to the section when the URL hash changes
useEffect(() => {
  if (!location.hash) return;
  const id = location.hash.slice(1);
  const el = document.getElementById(id);
  if (!el) return;

  // slight delay lets sidebar/topbar transitions finish
  const t = setTimeout(() => {
    el.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
  }, 50);

  return () => clearTimeout(t);
}, [location.hash]);


  const toggleSearch = () => {
    setSearchOpen((v) => !v);
    requestAnimationFrame(() => searchInputRef.current?.focus());
  };

  const onSearchSubmit = (e) => {
    e.preventDefault();
    const q = searchInputRef.current?.value?.trim().toLowerCase();
    if (!q) return;
    const target =
      Array.from(document.querySelectorAll(".snap-section"))
        .find(sec => (sec.id || "").toLowerCase().includes(q)) ||
      Array.from(document.querySelectorAll(".snap-section h2, .snap-section h3"))
        .find(h => h.textContent.toLowerCase().includes(q))?.closest(".snap-section");
    if (target) target.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className="page-wrapper">
      <a href="#main-content" className="skip-link">Skip to main content</a>

      {/* Topbar hides when nav-open */}
      <header className={`topbar ${menuOpen ? "hidden" : ""}`} role="banner">
        <button
          className="hamburger"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-controls="sidebar"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="bar" /><span className="bar" /><span className="bar" />
        </button>

        {/* Collapsible Search: only icon + expanding input; no visible submit */}
        <form
          role="search"
          aria-label="Sitewide"
          className={`site-search expandable ${searchOpen ? "open" : ""}`}
          onSubmit={onSearchSubmit}
        >
          <label htmlFor="q" className="visually-hidden">Search</label>
          <input
            ref={searchInputRef}
            id="q"
            name="q"
            type="search"
            placeholder="Search sections or projects..."
            autoComplete="off"
            aria-autocomplete="list"
            aria-controls="search-results"
            aria-expanded="false"
            inputMode="search"
          />
          <button
            type="button"
            className="icon-btn search-toggle"
            aria-label={searchOpen ? "Close search" : "Open search"}
            onClick={toggleSearch}
          >
            <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24">
              <path fill="currentColor" d="M15.5 14h-.79l-.28-.27a6.471 6.471 0 0 0 1.57-4.23C15.99 6.01 13.48 3.5 10.49 3.5S5 6.01 5 9s2.51 5.5 5.5 5.5c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0s.41-1.08 0-1.49L15.5 14Zm-5 0C8.01 14 6 11.99 6 9.5S8.01 5 10.5 5 15 7.01 15 9.5 12.99 14 10.5 14Z" />
            </svg>
          </button>
          <ul id="search-results" role="listbox" hidden />
        </form>

        <div className="a11y">
          <button
            ref={a11yBtnRef}
            className="icon-btn a11y-btn"
            aria-haspopup="menu"
            aria-expanded={a11yOpen}
            aria-controls="a11y-panel"
            onClick={() => setA11yOpen((v) => !v)}
          >
            <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 2a2 2 0 1 1-.001 4.001A2 2 0 0 1 12 2Zm7 6a1 1 0 0 1 .117 1.993L19 10h-3v10a1 1 0 0 1-1.993.117L14 20v-6h-4v6a1 1 0 0 1-1.993.117L8 20V10H5a1 1 0 0 1-.117-1.993L5 8h14Z" />
            </svg>
            <span className="btn-label">Accessibility</span>
          </button>
          <div id="a11y-panel" className={`a11y-panel ${a11yOpen ? "open" : ""}`} role="menu" aria-label="Accessibility options">
            <button role="menuitem" onClick={toggleHighContrast}>
              <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 1 0 0 20V2Z" /></svg>
              <span>High contrast</span>
            </button>
            <button role="menuitem" onClick={toggleLargeText}>
              <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M5 20V17H10V7H13V17H18V20H5Z" /></svg>
              <span>Larger text</span>
            </button>
            <button role="menuitem" onClick={toggleReduceMotion}>
              <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M2 12a10 10 0 1 0 20 0H2Zm2 0a8 8 0 0 1 16 0H4Z" /></svg>
              <span>Reduce motion</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hide topbar via CSS when nav-open; overlay closes menu */}
      {menuOpen && <div className="nav-overlay" onClick={() => setMenuOpen(false)} />}

      {/* Sidebar / Navbar */}
      <aside id="sidebar" className={`sidebar ${menuOpen ? "open" : ""}`} role="navigation" aria-label="Main">
        <div className="sidebar-top">
          <div className="brand">HD</div>
          <button
            className="sidebar-close"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            {/* Close (X) icon */}
            <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24">
              <path fill="currentColor" d="M18.3 5.71 12 12l6.3 6.29-1.41 1.41L10.59 13.4 4.3 19.7 2.89 18.29 9.17 12 2.89 5.71 4.3 4.29l6.29 6.29 6.29-6.29 1.42 1.42Z" />
            </svg>
          </button>
        </div>

        <nav className="menu" onClick={() => setMenuOpen(false)}>
          <Link to="/#about" className={hash === "#about" ? "active" : ""}>About</Link>
          <Link to="/#skills" className={hash === "#skills" ? "active" : ""}>Skills</Link>
          <Link to="/#experience" className={hash === "#experience" ? "active" : ""}>Experience</Link>
          <Link to="/#projects" className={hash === "#projects" ? "active" : ""}>Projects</Link>
          <Link to="/#education" className={hash === "#education" ? "active" : ""}>Education</Link>
          <Link to="/#contact" className={hash === "#contact" ? "active" : ""}>Contact</Link>
        </nav>
      </aside>


      <main id="main-content" className="snap-container" tabIndex="-1">
        <section id="about" className="snap-section"><About /></section>
        <section id="skills" className="snap-section"><Skills /></section>
        <section id="experience" className="snap-section"><Experience /></section>
        <section id="projects" className="snap-section"><Projects /></section>
        <section id="education" className="snap-section"><Education /></section>

        <footer className="footer">
          <div className="footer-content">
            <div className="contact-section">
              <Contact />
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
