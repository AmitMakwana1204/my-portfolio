import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
import "./projects.css";

export default function Projects() {
  const [filter, setFilter] = React.useState("All");
  const tags = ["All", ...new Set(projects.flatMap((p) => p.tags || []))];
  const filtered = projects.filter((p) =>
    filter === "All" ? true : (p.tags || []).includes(filter)
  );

  return (
    <section id="projects">
      {/* floating neon */}
      <div className="pr-dot one"></div>
      <div className="pr-dot two"></div>

      <div className="projects-container">
        <h2 className="pr-title">Selected Projects</h2>

        {/* Filter buttons */}
        <div className="pr-filters">
          {tags.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`pr-filter-btn ${filter === t ? "active" : ""}`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="pr-grid">
          {filtered.map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
