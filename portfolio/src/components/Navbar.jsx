import React, { useState, useEffect } from "react";
import "./navbar.css";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  /* Scroll Glow Effect */
  useEffect(() => {
    const navbar = document.getElementById("navbar");

    const handleScroll = () => {
      if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav id="navbar">
      <div className="nav-container">

        {/* Logo */}
        <div className="nav-logo">
          <span className="logo-glow">Amit</span> Makwana
        </div>

        {/* Desktop Links */}
        <div className="nav-links desktop-only">
          <a href="#projects" className="nav-item">Projects</a>
          <a href="#about" className="nav-item">About</a>
          <a href="#contact" className="nav-item">Contact</a>

        </div>

        {/* Mobile Menu Button */}
        <div className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <X size={28} className="menu-icon" />
          ) : (
            <Menu size={28} className="menu-icon" />
          )}
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="#projects" className="mobile-item" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#about" className="mobile-item" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#contact" className="mobile-item" onClick={() => setMenuOpen(false)}>Contact</a>
        

      </div>
    </nav>
  );
}
