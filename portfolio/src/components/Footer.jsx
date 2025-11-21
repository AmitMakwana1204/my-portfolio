import React from "react";
import "./footer.css";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer">

      {/* floating glow dots */}
      <div className="f-dot one"></div>
      <div className="f-dot two"></div>
      <div className="f-dot three"></div>

      <div className="footer-container">

        <h3 className="footer-title">Amit Makwana</h3>
        <p className="footer-sub">
          Frontend Developer • Crafting Beautiful Web Experiences
        </p>

        {/* Social Icons */}
        <div className="footer-social">
          <a href="#" className="icon"><Github /></a>
          <a href="#" className="icon"><Linkedin /></a>
          <a href="#" className="icon"><Instagram /></a>
          <a href="#" className="icon"><Mail /></a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Amit Makwana • Built with ❤️ using Vite + React
        </p>
      </div>

    </footer>
  );
}
