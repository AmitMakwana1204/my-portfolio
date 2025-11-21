import React from "react";
import "./navbar.css";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav id="navbar">
      <div className="nav-container">

        {/* Logo */}
        <div className="nav-logo">
          <span className="logo-glow">Amit</span> Makwana
        </div>

        {/* Links */}
        <div className="nav-links">
          <a href="#projects" className="nav-item">Projects</a>
          <a href="#about" className="nav-item">About</a>
          <a href="#contact" className="nav-item">Contact</a>

          <ThemeToggle />
        </div>

      </div>
    </nav>
  );
}
