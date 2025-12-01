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
         <a href="https://github.com/AmitMakwana1204"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"><Github /></a>
         <a href="https://www.linkedin.com/in/amit-makwana-ab397b397/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon">
              <Linkedin /></a>

         <a href="https://www.instagram.com/makwana__amit__1204/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon">
            <Instagram /></a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Amit Makwana • Built with ❤️ using Vite + React
        </p>
      </div>

    </footer>
  );
}
