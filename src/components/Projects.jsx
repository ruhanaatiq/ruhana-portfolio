import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {
  SiReact,
  SiTailwindcss,
  SiFirebase,
  SiExpress,
  SiMongodb,
  SiVite,
  SiJsonwebtokens,
} from "react-icons/si";
import projectImg from "../assets/recipe-app.png";
import carRentalImg from "../assets/car-rental.png";
const techIcons = {
  React: <SiReact className="text-cyan-400" />,
  Tailwind: <SiTailwindcss className="text-sky-400" />,
  Firebase: <SiFirebase className="text-yellow-400" />,
  Express: <SiExpress className="text-gray-300" />,
  MongoDB: <SiMongodb className="text-green-500" />,
  Vite: <SiVite className="text-purple-400" />,

};

const Projects = () => {
  const projectList = [
    {
      id: "1",
      title: "Recipe Book App",
      description: "A full-stack recipe manager app with authentication and favorites.",
      tech: ["React", "Tailwind", "Firebase", "Express", "MongoDB"],
      live: "https://recipe-book-e0545.web.app/",
      github: "https://github.com/ruhanaatiq/b11a10-client-side-ruhanaatiq",
       image: projectImg,
    },
     {
      id: "2",
      title: "Car Rental App",
      description: "A full-stack recipe manager app with authentication and favorites.",
      tech: ["React", "Tailwind", "Firebase", "Express", "MongoDB","Javascript","JWT"],
      live: "https://car-rental-169b3.web.app/",
      github: "https://github.com/ruhanaatiq/b11a11-client-side-ruhanaatiq",
      image: carRentalImg,
      techIcons:  { name: "JWT", icon: <SiJsonwebtokens className="text-pink-400" /> },
      
    },
    // Add more projects similarly...
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <h2 className="text-4xl font-bold text-white text-center mb-10">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-fuchsia-500">
          Projects
        </span>
      </h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projectList.map((project) => (
          <div
            key={project.id}
            className="bg-[#1a1a1a] rounded-xl p-6 shadow hover:shadow-pink-400/20 transition duration-300"
          >
            <img src={project.image} alt={project.title} className="w-full h-52 object-cover rounded-lg mb-4" />

            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <p className="text-gray-400 my-2">{project.description}</p>

            <div className="flex flex-wrap gap-2 my-2 items-center">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="flex items-center gap-1 text-sm bg-pink-500/10 border border-pink-500 text-pink-400 px-2 py-1 rounded"
                >
                  {techIcons[tech]} {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-3 mt-4">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm bg-pink-600 text-white"
              >
                <FaExternalLinkAlt className="mr-1" /> Live
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-outline text-white"
              >
                <FaGithub className="mr-1" /> GitHub
              </a>
              <Link
                to={`/project/${project.id}`}
                className="btn btn-sm btn-outline border-fuchsia-500 text-fuchsia-500"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
