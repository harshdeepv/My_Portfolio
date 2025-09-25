// src/routes/ScrollToAnchor.jsx
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToAnchor() {
  const { hash } = useLocation();
  const pending = useRef("");

  useEffect(() => {
    if (hash) pending.current = hash.slice(1);
    if (!pending.current) return;

    const scrollToId = (id) => {
      const el = document.getElementById(id);
      if (!el) return false;
      el.scrollIntoView({
        behavior: "smooth",   // smooth easing
        block: "center",      // stop around the middle, not pinned to top
        inline: "nearest",
      });
      pending.current = "";
      return true;
    };

    if (!scrollToId(pending.current)) {
      const t = setTimeout(() => scrollToId(pending.current), 100);
      return () => clearTimeout(t);
    }
  }, [hash]);

  return null;
}
