import React from "react";
import "./projectcard.css";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({ p }) {
  return (
    <article className="p-card">
      
      {/* Image */}
      <div className="p-img-wrap">
        <img src={p.image} alt={p.title} className="p-img" />
      </div>

      {/* Title */}
      <h3 className="p-title">{p.title}</h3>

      {/* Description */}
      <p className="p-desc">{p.desc}</p>

      {/* Tags */}
      <div className="p-tags">
        {p.tags?.map((t) => (
          <span key={t} className="p-tag">{t}</span>
        ))}
      </div>

      {/* Links */}
      <div className="p-links">
        {p.live && (
          <a href={p.live} className="p-btn" target="_blank">
            <ExternalLink size={16} /> Live
          </a>
        )}
        {p.repo && (
          <a href={p.repo} className="p-btn" target="_blank">
            <Github size={16} /> Code
          </a>
        )}
      </div>
    </article>
  );
}
