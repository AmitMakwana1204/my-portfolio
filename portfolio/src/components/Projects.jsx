
import React from "react";
import ProjectCard from "./ProjectCard";
import pro1 from "../assets/project1.jpg";
import pro2 from "../assets/project2.jpg";
import "./projects.css";

export default function Projects() {
  const [filter] = React.useState("All");

  // ✅ Move your projects array here
  const projects = [
    {
      id: "p1",
      title: "Fashion Hub — E-Commerce Platform",
      short: "Complete E-Commerce UI with cart, filters, product view & checkout.",
      desc:
        "A modern E-commerce store built using React + Vite. Includes product filters, dynamic cart system, login/signup flow, wishlist, and Stripe mock checkout UI. Optimized for performance with lazy-loading and smooth page transitions.",
      tags: ["React", "Vite", "Stripe API", "Tailwind", "Redux Toolkit"],
      category: "E-commerce",
      difficulty: "Advanced",
      image: pro1,
      techIcons: ["react", "vite", "tailwind"],
      live: "https://men-fashion-hub-h5p9.vercel.app/",
      repo: "https://github.com/AmitMakwana1204/men-fashion-hub",
      featured: true,
      year: 2024,
      color: "#00E1FF",
    },
        {
      id: "p2",
      title: "Online Code Editor Platform",
      short: "Complete Online-code-editor .",
      desc:
        "A modern Online-code-editor built using React + Vite. Includes HTML,CSS And Javascript LIVE Code And Live Output",
      tags: ["React", "Vite", "HTML", "Javascript","CSS"],
      category: "code-editor",
      difficulty: "Advanced",
      image: pro2,
      techIcons: ["react", "vite", "tailwind"],
      live: "https://amitmakwana1204.github.io/online-code-editor/",
      repo: "https://github.com/AmitMakwana1204/online-code-editor",
      featured: true,
      year: 2024,
      color: "#00E1FF",
    },
    // ✅ Add more projects here if needed
  ];

  // Filter projects (currently always "All")
  const filteredProjects = React.useMemo(() => {
    return filter === "All"
      ? projects
      : projects.filter((p) => (p.tags || []).includes(filter));
  }, [filter]);

  return (
    <section id="projects">
      {/* Floating neon dots */}
      <div className="pr-dot one"></div>
      <div className="pr-dot two"></div>

      <div className="projects-container">
        <h2 className="pr-title">My Project</h2>

        {/* Projects Grid */}
        <div
          className={`pr-grid ${filteredProjects.length === 1 ? "single" : ""}`}
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard key={project.id} p={project}  />
              
            ))
          ) : (
            <p className="no-projects">No projects found for "{filter}".</p>
          )}
        </div>
      </div>
    </section>
  );
}
