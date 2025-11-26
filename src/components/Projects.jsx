import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import projectImg from "../assets/recipe-app.png";
import carRentalImg from "../assets/car-rental.png";
import healthcare from "../assets/healthcare-app.png";
import pet from "../assets/pet-adoption.png";
import burger from "../assets/burger.png";
import grocery from "../assets/grocery.png";

import { FaGithub, FaExternalLinkAlt, FaHtml5 } from "react-icons/fa";
import {
  SiReact,
  SiTailwindcss,
  SiFirebase,
  SiExpress,
  SiMongodb,
  SiVite,
  SiJavascript,
  SiJsonwebtokens,
  SiNextdotjs,
  SiFigma,
  SiReactquery,
} from "react-icons/si";

const techIcons = {
  React: <SiReact className="text-cyan-400" />,
  "Next.js": <SiNextdotjs className="text-white" />,
  Tailwind: <SiTailwindcss className="text-sky-400" />,
  Firebase: <SiFirebase className="text-yellow-400" />,
  Express: <SiExpress className="text-gray-300" />,
  MongoDB: <SiMongodb className="text-green-500" />,
  Vite: <SiVite className="text-purple-400" />,
  Html: <FaHtml5 className="text-orange-500" />,
  Javascript: <SiJavascript className="text-yellow-300" />,
  JWT: <SiJsonwebtokens className="text-pink-400" />,
  Figma: <SiFigma className="text-pink-400" />,
  tanStackQuery: <SiReactquery className="text-red-400" />,
};

const filters = [
  { id: "all", label: "All" },
  { id: "fullstack", label: "Full-Stack Apps" },
  { id: "ui", label: "UI & UX" },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projectList = [
    {
      id: "1",
      category: "fullstack",
      title: "Pawfect Match – Pet Adoption App",
      description:
        "Smart pet adoption portal with AI personality matchmaker, multi-role dashboards, and Stripe-powered donations.",
      tech: [
        "Next.js",
        "React",
        "Tailwind",
        "Firebase",
        "Express",
        "MongoDB",
        "Javascript",
        "JWT",
      ],
      live: "https://pawfect-adoption.vercel.app/",
      github: "https://github.com/ruhanaatiq/pawfect-match",
      image: pet,
    },
    {
      id: "2",
      category: "fullstack",
      title: "Recipe Book App",
      description:
        "Full-stack recipe manager with authentication, favorites, and dynamic top recipes.",
      tech: [
        "React",
        "Tailwind",
        "Firebase",
        "Express",
        "MongoDB",
        "Javascript",
        "JWT",
      ],
      live: "https://recipe-book-e0545.web.app/",
      github: "https://github.com/ruhanaatiq/b11a10-client-side-ruhanaatiq",
      image: projectImg,
    },
    {
      id: "3",
      category: "fullstack",
      title: "Car Rental App",
      description:
        "Car rental platform with JWT auth, protected routes, booking management and dashboard.",
      tech: [
        "React",
        "Tailwind",
        "Firebase",
        "Express",
        "MongoDB",
        "Javascript",
        "JWT",
      ],
      live: "https://car-rental-169b3.web.app/",
      github: "https://github.com/ruhanaatiq/b11a11-client-side-ruhanaatiq",
      image: carRentalImg,
    },
    {
      id: "4",
      category: "fullstack",
      title: "Healthcare Corner",
      description:
        "Multi-vendor medicine e-commerce with role-based dashboards, Firebase Admin auth and Stripe.",
      tech: ["React", "Tailwind", "Firebase", "Javascript", "tanStackQuery"],
      live: "https://healthcare-corner.web.app/",
      github:
        "https://github.com/Programming-Hero-Web-Course4/b11a12-client-side-ruhanaatiq",
      image: healthcare,
    },
    {
      id: "5",
      category: "ui",
      title: "FOODGO – Food Delivery UI",
      description:
        "High-fidelity Figma UI for a modern food delivery app with onboarding, cart and tracking flows.",
      tech: ["Figma"],
      live: "https://www.figma.com/design/Y1ekFOhLknkhFqSGOebMHn/FoodGo?node-id=0-1&t=RsR4UOWxL58HUzP2-1",
      image: burger,
    },
    {
      id: "6",
      category: "ui",
      title: "Grocery App UI",
      description:
        "Grocery delivery mobile UI kit with reusable components and a simple design system.",
      tech: ["Figma"],
      live: "https://www.figma.com/design/1gRAVnWO9XW0ot1C0gYWTr/Grocery?node-id=0-1&t=ro7IiwHR1GoxDeiq-1",
      image: grocery,
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projectList
      : projectList.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="py-20 px-4 bg-gradient-to-b from-black via-[#050308] to-black"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
         
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500">
              Projects
            </span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
            A mix of full-stack applications and UI design work, focused on
            clean UX, performance and real-world use cases.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#111018] px-2 py-2 border border-pink-500/20">
            {filters.map((f) => {
              const isActive = activeFilter === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => setActiveFilter(f.id)}
                  className={`relative rounded-full px-4 py-1.5 text-xs md:text-sm font-medium transition ${
                    isActive
                      ? "text-white"
                      : "text-gray-400 hover:text-pink-200"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="project-filter-pill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-600 shadow-[0_0_20px_rgba(236,72,153,0.5)]"
                      transition={{ type: "spring", bounce: 0.3, duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10">{f.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {filteredProjects.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="group relative rounded-2xl border border-pink-500/15 bg-gradient-to-br from-[#141016] via-[#0b060c] to-black shadow-[0_18px_50px_rgba(0,0,0,0.7)] overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:border-pink-400/40"
            >
              {/* Image */}
              <div className="relative h-52 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
                <span className="absolute bottom-3 left-3 inline-flex items-center rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-pink-300 backdrop-blur group-hover:bg-pink-600/80 group-hover:text-white transition-colors">
                  <span className="mr-1 h-2 w-2 rounded-full bg-pink-400 animate-pulse" />
                  {project.category === "ui" ? "UI Case Study" : "Full-Stack App"}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 md:p-7 space-y-4">
                <header>
                  <h3 className="text-xl md:text-2xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-400">
                    {project.description}
                  </p>
                </header>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 rounded-full border border-pink-500/40 bg-pink-500/10 px-3 py-1 text-xs font-medium text-pink-200"
                    >
                      {techIcons[tech] || (
                        <span className="h-2 w-2 rounded-full bg-pink-400" />
                      )}
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3 pt-3">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-pink-600 px-4 py-2 text-xs font-semibold text-white hover:bg-pink-500 transition"
                    >
                      <FaExternalLinkAlt className="text-xs" />
                      Live
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-gray-600 px-4 py-2 text-xs font-semibold text-gray-200 hover:border-pink-500 hover:text-pink-300 transition"
                    >
                      <FaGithub className="text-sm" />
                      GitHub
                    </a>
                  )}

                  <Link
                    to={`/project/${project.id}`}
                    className="inline-flex items-center gap-2 rounded-full border border-fuchsia-500/70 px-4 py-2 text-xs font-semibold text-fuchsia-300 hover:bg-fuchsia-600 hover:text-white transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
