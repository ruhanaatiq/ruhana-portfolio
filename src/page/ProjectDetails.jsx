import React from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowLeft, Copy, Check } from "lucide-react";

const projectData = {
   "1": {
    title: "Pet Adoption App",
    stack: ["Next.js","React", "Tailwind", "Firebase", "Express", "MongoDB"],
    description:
    "A full-stack AI-driven pet adoption platform that connects adopters, shelters, and vets in one trusted space. Features include an AI Pet-Human Personality Matchmaker, verified vet profiles, donation & sponsorship modules, and multi-role dashboards.",
  github: "https://github.com/ruhanaatiq/pawfect-match",
  live: "https://pawfect-adoption.vercel.app/",
  year: "2025",
  challenges:
    "Building the AI personality matching algorithm, implementing secure authentication with NextAuth, and handling multi-role authorization for admin, shelter, vet, and user dashboards.",
  improvements:
    "Add AI lifestyle simulation, real-time chat, mobile app version, and advanced analytics dashboard for shelters and vets.",
    thumbnail: "", 
  },
  "2": {
    title: "Recipe Book App",
    stack: ["React", "Tailwind", "Firebase", "Express", "MongoDB"],
    description: "This app lets users manage recipes, with auth and likes.",
    github: "https://github.com/ruhanaatiq/b11a10-client-side-ruhanaatiq",
    live: "", 
    year: "2025",
    challenges: "Setting up secure authentication and managing nested routes.",
    improvements: "Add image upload, user comments, and role-based dashboard.",
    thumbnail: "", 
  },
  "3": {
    title: "Car Rental App",
    stack: ["React", "Tailwind", "Firebase", "Express", "MongoDB"],
    description:
      "A complete platform to browse, rent, and manage cars with admin features.",
    github: "https://github.com/ruhanaatiq/b11a11-client-side-ruhanaatiq",
    live: "",
    year: "2025",
    challenges: "Managing booking conflicts and integrating secure JWT auth.",
    improvements: "Implement mobile app version and payment gateway integration.",
    thumbnail: "",
  },
  "4": {
    title: "HealthCare App",
    stack: ["React", "Tailwind", "Firebase", "Express", "MongoDB"],
    description:
      "A platform to browse, purchase, and manage medicines with admin & seller features.",
    github:
      "https://github.com/Programming-Hero-Web-Course4/b11a12-client-side-ruhanaatiq",
    live: "",
    year: "2025",
    challenges: "Inventory sync & secure JWT auth across roles.",
    improvements: "Mobile app + payment gateway integration.",
    thumbnail: "",
  },
  "5": {
  title: "FOODGo App",
  stack: ["Figma"],
  description: "A food delivery app with real-time tracking and payments.",
  github: "",
  live: "https://www.figma.com/design/Y1ekFOhLknkhFqSGOebMHn/FoodGo?node-id=0-1&t=RsR4UOWxL58HUzP2-1",
  year: "2025",
  challenges: "Handling real-time delivery tracking.",
  improvements: "Add AI-based recommendations and route optimization.",
  thumbnail: "",
},

  "6": {
  title: "Grocery App",
  stack: ["Figma"],
  description: "A food delivery app with real-time tracking and payments.",
  github: "",
  live: "https://www.figma.com/design/1gRAVnWO9XW0ot1C0gYWTr/Grocery?node-id=0-1&t=ro7IiwHR1GoxDeiq-1",
  year: "2025",
  challenges: "Handling real-time delivery tracking.",
  improvements: "Add AI-based recommendations and route optimization.",
  thumbnail: "",
}


  
};


const fadeIn = { hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } };

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectData[id];
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    if (!project?.github) return;
    await navigator.clipboard.writeText(project.github);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  if (!project) {
    return (
      <section className="relative min-h-[70vh] overflow-hidden">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,0,128,0.25),rgba(0,0,0,0)_60%)]" />
          <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:28px_28px]" />
        </div>

        <div className="max-w-2xl mx-auto px-4 py-24 text-center">
          <h2 className="text-3xl font-bold text-white">Project not found</h2>
          <p className="mt-2 text-gray-300">
            The project you’re looking for doesn’t exist or the ID is wrong.
          </p>
          <Link
            to="/#projects"
            className="mt-6 inline-flex items-center gap-2 rounded-xl border border-pink-500/50 px-4 py-2 text-pink-200 hover:bg-pink-500/10 transition"
          >
            <ArrowLeft size={18} />
            Back to Projects
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Animated background: soft gradient + subtle grid */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full blur-3xl opacity-30 animate-pulse"
             style={{ background: "radial-gradient(circle at 50% 50%, #ec4899, rgba(0,0,0,0) 60%)" }} />
        <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:28px_28px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 py-20">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-gray-300">
          <Link to="/" className="hover:text-white/90">Home</Link>
          <span className="mx-2 text-gray-500">/</span>
          <Link to="/projects" className="hover:text-white/90">Projects</Link>
          <span className="mx-2 text-gray-500">/</span>
          <span className="text-white/90">{project.title}</span>
        </nav>

        {/* Header card */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.4 }}
          className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-lg"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-white">{project.title}</h1>
              {(project.year || project.live) && (
                <p className="mt-1 text-gray-300">
                  {project.year && <span>{project.year}</span>}
                  {project.year && project.live ? <span className="mx-2">•</span> : null}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-dotted underline-offset-4 hover:text-pink-200"
                    >
                      Live Demo
                    </a>
                  )}
                </p>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-pink-500/60 px-4 py-2 text-pink-100 hover:bg-pink-500/10 transition focus:outline-none focus:ring-2 focus:ring-pink-400/60"
                >
                  <Github size={18} />
                  GitHub
                </a>
              )}
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-3 py-2 text-gray-200 hover:bg-white/10 transition focus:outline-none focus:ring-2 focus:ring-white/40"
                aria-label="Copy repository URL"
              >
                {copied ? <Check size={18} /> : <Copy size={18} />}
                {copied ? "Copied" : "Copy link"}
              </button>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 py-2 text-gray-200 hover:bg-white/10 transition focus:outline-none focus:ring-2 focus:ring-white/40"
                >
                  <ExternalLink size={18} />
                  Open
                </a>
              )}
            </div>
          </div>

          {/* Thumb (optional) */}
          {project.thumbnail ? (
            <div className="mt-6 overflow-hidden rounded-xl border border-white/10">
              <img
                src={project.thumbnail}
                alt={`${project.title} preview`}
                className="w-full object-cover"
              />
            </div>
          ) : null}

          {/* Description */}
          <p className="mt-6 text-gray-200 leading-relaxed">{project.description}</p>

          {/* Stack */}
          <h3 className="mt-8 text-xl font-semibold text-white">Stack Used</h3>
          <motion.div
            className="mt-3 flex flex-wrap gap-2"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.06 } },
            }}
          >
            {project.stack.map((tech, i) => (
              <motion.span
                key={i}
                variants={fadeIn}
                className="rounded-full border border-pink-400/50 bg-pink-500/10 px-3 py-1 text-sm text-pink-100 shadow-sm"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* Two-column details */}
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h4 className="text-lg font-semibold text-white mb-2">Challenges Faced</h4>
              <p className="text-gray-300">{project.challenges}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h4 className="text-lg font-semibold text-white mb-2">Future Plans</h4>
              <p className="text-gray-300">{project.improvements}</p>
            </div>
          </div>

          {/* Back link */}
          <div className="mt-8">
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 text-pink-200 hover:text-pink-100"
            >
              <ArrowLeft size={18} />
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectDetails;
