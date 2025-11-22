
import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
import "./projects.css";

export default function Projects() {
  const [filter] = React.useState("All");

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
              <ProjectCard key={project.id} p={project} />
            ))
          ) : (
            <p className="no-projects">No projects found for "{filter}".</p>
          )}
        </div>
      </div>
    </section>
  );
}
