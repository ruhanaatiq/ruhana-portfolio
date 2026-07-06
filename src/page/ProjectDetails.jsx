import React from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowLeft, Copy, Check } from "lucide-react";


const projectData = {
  "1": {
    title: "Pet Adoption App",
    stack: ["Next.js", "React", "Tailwind", "Firebase", "Express", "MongoDB"],
    description:
      "A full-stack AI-driven pet adoption platform that connects adopters, shelters, and vets in one trusted space.",
    github: "https://github.com/ruhanaatiq/pawfect-match",
    live: "https://pawfect-adoption.vercel.app/",
    year: "2025",
    challenges:
      "Building the AI personality matching algorithm, secure authentication, and multi-role dashboards.",
    improvements:
      "Add real-time chat, mobile app version, and advanced analytics dashboard.",
    thumbnail: "",
  },

  "2": {
    title: "Recipe Book App",
    stack: ["React", "Tailwind", "Firebase", "Express", "MongoDB"],
    description:
      "A recipe management app where users can add, like, and manage recipes with authentication.",
    github: "https://github.com/ruhanaatiq/b11a10-client-side-ruhanaatiq",
    live: "",
    year: "2025",
    challenges:
      "Setting up secure authentication and managing nested routes.",
    improvements:
      "Add image upload, user comments, and role-based dashboard.",
    thumbnail: "",
  },

  "3": {
    title: "CourseMaster – Online Learning Platform",
    stack: ["Next.js", "React", "Tailwind CSS", "Firebase", "Express.js", "MongoDB"],
    description:
      "A full-stack Learning Management System where students can enroll in courses, track progress, and submit assignments.",
    github: "https://github.com/ruhanaatiq/coursemaster",
    live: "https://coursemaster-frontend.vercel.app",
    year: "2025",
    challenges:
      "Implementing JWT authentication, role-based access control, and protected routes.",
    improvements:
      "Add Stripe payments, instructor roles, analytics dashboards, and certificate generation.",
    thumbnail: "",
  },

  "4": {
    title: "Car Rental App",
    stack: ["React", "Tailwind", "Firebase", "Express", "MongoDB"],
    description:
      "A car rental platform to browse, book, and manage rental cars with secure dashboards.",
    github: "https://github.com/ruhanaatiq/b11a11-client-side-ruhanaatiq",
    live: "",
    year: "2025",
    challenges:
      "Managing booking conflicts and integrating secure JWT authentication.",
    improvements:
      "Add payment gateway integration and mobile app version.",
    thumbnail: "",
  },

  "5": {
    title: "HealthCare App",
    stack: ["React", "Tailwind", "Firebase", "Express", "MongoDB"],
    description:
      "A medicine e-commerce platform with admin, seller, and user dashboard features.",
    github:
      "https://github.com/Programming-Hero-Web-Course4/b11a12-client-side-ruhanaatiq",
    live: "",
    year: "2025",
    challenges:
      "Handling inventory synchronization and secure authentication across roles.",
    improvements:
      "Add mobile app version and advanced payment features.",
    thumbnail: "",
  },

  "6": {
    title: "FOODGo App",
    stack: ["Figma"],
    description:
      "A food delivery mobile UI concept with ordering, tracking, and payment screens.",
    github: "",
    live: "https://www.figma.com/design/Y1ekFOhLknkhFqSGOebMHn/FoodGo?node-id=0-1&t=RsR4UOWxL58HUzP2-1",
    year: "2025",
    challenges:
      "Designing a smooth delivery flow and clean mobile user experience.",
    improvements:
      "Add AI-based food recommendations and route optimization.",
    thumbnail: "",
  },

  "7": {
    title: "Grocery App",
    stack: ["Figma"],
    description:
      "A grocery delivery mobile UI design with reusable components and clean product browsing screens.",
    github: "",
    live: "https://www.figma.com/design/1gRAVnWO9XW0ot1C0gYWTr/Grocery?node-id=0-1&t=ro7IiwHR1GoxDeiq-1",
    year: "2025",
    challenges:
      "Creating reusable UI components and maintaining design consistency.",
    improvements:
      "Add delivery tracking, wishlist, and personalized recommendations.",
    thumbnail: "",
  },

"8": {
  title: "ChemForge AI",
  stack: ["WordPress", "Elementor", "HTML", "CSS", "JavaScript", "Responsive Design"],
  description:
    "Designed and developed the ChemForge AI corporate website using WordPress and Elementor. Created responsive landing pages, custom navigation menus, reusable UI sections, optimized layouts for desktop, tablet, and mobile devices, and maintained consistent branding across the website.",
  github: "",
  live: "https://chemforgeai.com/",
  year: "2026",
  challenges:
    "Developing a fully responsive navigation system, maintaining consistent layouts across multiple pages, optimizing performance, and ensuring compatibility across desktop, tablet, and mobile devices.",
  improvements:
    "Continue improving SEO, enhance accessibility, expand AI solution pages, and add more interactive visual sections.",
  thumbnail: "",
},
};

const fadeIn = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0 },
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectData[id];
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    if (!project?.github) return;

    try {
      await navigator.clipboard.writeText(project.github);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch (error) {
      console.error("Failed to copy link:", error);
    }
  };

  if (!project) {
    return (
      <section className="relative min-h-[70vh] overflow-hidden bg-black">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,0,128,0.25),rgba(0,0,0,0)_60%)]" />
        </div>

        <div className="max-w-2xl mx-auto px-4 py-24 text-center">
          <h2 className="text-3xl font-bold text-white">Project not found</h2>
          <p className="mt-2 text-gray-300">
            The project you are looking for does not exist.
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
    <section className="relative min-h-screen overflow-hidden bg-black">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -top-24 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full blur-3xl opacity-30 animate-pulse"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, #ec4899, rgba(0,0,0,0) 60%)",
          }}
        />
        <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:28px_28px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 py-20">
        <nav className="mb-6 text-sm text-gray-300">
          <Link to="/" className="hover:text-white/90">
            Home
          </Link>
          <span className="mx-2 text-gray-500">/</span>
          <Link to="/#projects" className="hover:text-white/90">
            Projects
          </Link>
          <span className="mx-2 text-gray-500">/</span>
          <span className="text-white/90">{project.title}</span>
        </nav>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.4 }}
          className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-lg"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <span className="inline-block mb-3 rounded-full border border-pink-500/40 bg-pink-500/10 px-3 py-1 text-xs font-medium text-pink-200">
                {project.stack.includes("WordPress")
                  ? "WordPress Website"
                  : project.stack.includes("Figma")
                  ? "UI / UX Design"
                  : "Full-Stack Project"}
              </span>

              <h1 className="text-3xl md:text-4xl font-bold text-white">
                {project.title}
              </h1>

              {(project.year || project.live) && (
                <p className="mt-2 text-gray-300">
                  {project.year && <span>{project.year}</span>}
                  {project.year && project.live && <span className="mx-2">•</span>}
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
                <>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-pink-500/60 px-4 py-2 text-pink-100 hover:bg-pink-500/10 transition"
                  >
                    <Github size={18} />
                    GitHub
                  </a>

                  <button
                    onClick={handleCopy}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-3 py-2 text-gray-200 hover:bg-white/10 transition"
                    aria-label="Copy repository URL"
                  >
                    {copied ? <Check size={18} /> : <Copy size={18} />}
                    {copied ? "Copied" : "Copy link"}
                  </button>
                </>
              )}

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 py-2 text-gray-200 hover:bg-white/10 transition"
                >
                  <ExternalLink size={18} />
                  Open Website
                </a>
              )}
            </div>
          </div>

          {project.thumbnail && (
            <div className="mt-8 overflow-hidden rounded-xl border border-white/10">
              <img
                src={project.thumbnail}
                alt={`${project.title} preview`}
                className="w-full max-h-[480px] object-cover object-top"
              />
            </div>
          )}

          <p className="mt-6 text-gray-200 leading-relaxed">
            {project.description}
          </p>

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

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h4 className="text-lg font-semibold text-white mb-2">
                Challenges Faced
              </h4>
              <p className="text-gray-300">{project.challenges}</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h4 className="text-lg font-semibold text-white mb-2">
                Future Plans
              </h4>
              <p className="text-gray-300">{project.improvements}</p>
            </div>
          </div>

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