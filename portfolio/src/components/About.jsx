import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Code2, Rocket, Star } from "lucide-react";
import './about.css';
import me from "../assets/me.jpg";

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-slate-900 to-black text-white">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="mt-3 text-slate-300 text-lg">
            Who I am, what I do, and what I love.
          </p>
        </motion.div>

        {/* Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left — Image + Glow Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-3xl"></div>

            <div className="relative bg-white/10 backdrop-blur-xl p-1 rounded-3xl border border-white/10">
              <img
                src={me}
                alt="Profile"
                className="rounded-2xl object-cover"
              />
            </div>
          </motion.div>

          {/* Right — Text + Icons */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-3xl font-bold mb-4 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-cyan-400" />
              Hi, I'm Amit 👋
            </h3>

            <p className="text-slate-300 leading-relaxed text-lg">
              I'm a{" "}
              <span className="text-cyan-400 font-medium">
                Frontend Developer
                </span>{" "}
              focused on building modern, beautiful & high-performance web
              experiences.
              I love clean UI, smooth animations, and pixel-perfect design.
            </p>

            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-3">
                <Rocket className="w-5 h-5 text-blue-400" />
                <span>2+ years experience building frontend projects</span>
              </li>

              <li className="flex items-center gap-3">
                <Code2 className="w-5 h-5 text-cyan-400" />
                <span>Skilled in React, Vite, TailwindCSS, JavaScript</span>
              </li>

              <li className="flex items-center gap-3">
                <Star className="w-5 h-5 text-yellow-300" />
                <span>Passionate about animations & UI engineering</span>
              </li>
            </ul>

            {/* Skills Meter */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-3">Skills</h4>

              {[
                { name: "React / Vite", value: "90%" },
                { name: "Tailwind CSS", value: "85%" },
                { name: "JavaScript", value: "80%" },
                { name: "UI/UX & Animations", value: "88%" },
              ].map((skill, i) => (
                <div key={i} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span>{skill.name}</span>
                    <span className="text-cyan-400">{skill.value}</span>
                  </div>
                  <div className="w-full h-2 bg-slate-700 rounded-full">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.value }}
                      transition={{ duration: 0.8 }}
                      className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
