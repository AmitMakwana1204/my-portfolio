import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import "./app.css";

export default function App() {
  return (
    <div id="app-wrapper">

      {/* Global Neon Background Orbs */}
      <div className="global-orb one"></div>
      <div className="global-orb two"></div>
      <div className="global-orb three"></div>

      {/* Content Wrapper */}
      <div className="content-fx">
        <Navbar />

        <main>
          <div className="page-section fade-in">
            <Hero />
          </div>

          <div className="page-section fade-in delay-1">
            <Projects />
          </div>

          <div className="page-section fade-in delay-2">
            <About />
          </div>

          <div className="page-section fade-in delay-3">
            <ContactForm />
          </div>
        </main>

        <Footer />
      </div>

    </div>
  );
}
