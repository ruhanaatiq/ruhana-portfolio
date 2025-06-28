import React from "react";
import { useParams } from "react-router-dom";

const projectData = {
  "1": {
    title: "Recipe Book App",
    stack: ["React", "Tailwind", "Firebase", "Express", "MongoDB"],
    description: "This app lets users manage recipes, with auth and likes.",
    github: "https://github.com/ruhanaatiq/b11a10-client-side-ruhanaatiq",
    challenges: "Setting up secure authentication and managing nested routes.",
    improvements: "Add image upload, user comments, and role-based dashboard.",
  },
  "2": {
    title: "Car Rental App",
    stack: ["React", "Tailwind", "Firebase", "Express", "MongoDB"],
    description: "A complete platform to browse, rent, and manage cars with admin features.",
    github: "https://github.com/ruhanaatiq/b11a11-client-side-ruhanaatiq",
    challenges: "Managing booking conflicts and integrating secure JWT auth.",
    improvements: "Implement mobile app version and payment gateway integration.",
  }
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectData[id];

  if (!project)
    return (
      <div className="text-center text-white py-10">Project not found</div>
    );

  return (
    <section className="min-h-screen px-4 py-20 text-white max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
      <p className="mb-4 text-gray-300">{project.description}</p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Stack Used</h3>
      <div className="flex gap-2 flex-wrap">
        {project.stack.map((tech, i) => (
          <span
            key={i}
            className="px-3 py-1 text-sm border border-pink-500 rounded"
          >
            {tech}
          </span>
        ))}
      </div>

      <h3 className="text-xl font-semibold mt-6 mb-2">Challenges Faced</h3>
      <p className="text-gray-400">{project.challenges}</p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Future Plans</h3>
      <p className="text-gray-400">{project.improvements}</p>

      <div className="mt-6">
        <a
          href={project.github}
          className="btn btn-outline text-white border-pink-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          View GitHub Repository
        </a>
      </div>
    </section>
  );
};

export default ProjectDetails;
