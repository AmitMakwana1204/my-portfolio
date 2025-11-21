import React from "react";
import { motion } from "framer-motion";
import "./hero.css";

export default function Hero() {
  return (
    <header id="hero">
      
      {/* Floating neon shapes */}
      <div className="h-dot one"></div>
      <div className="h-dot two"></div>
      <div className="h-dot three"></div>

      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
        >
          Hi, I'm <span className="glow">Amit</span>  
          <br />
          <span className="role">Frontend Engineer</span>
        </motion.h1>

        <motion.p
          className="hero-text"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
        >
          I build beautiful, fast and interactive web experiences.  
          <br />
          Specialised in React, Vite, Tailwind & UI/UX engineering.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
        >
          <a href="/resume.pdf" download className="btn outline">
            Download Resume
          </a>

          <a href="#contact" className="btn fill">
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </header>
  );
}
