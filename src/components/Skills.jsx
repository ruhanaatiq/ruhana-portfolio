import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaJs,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiVercel,
  SiMongodb,
  SiFirebase,
  SiVite,
  SiJsonwebtokens,
} from "react-icons/si";

// Animation variants
const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.12,
      duration: 0.5,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

const skillGroups = [
  {
    title: "Frontend & UI",
    subtitle: "Building responsive, user-focused interfaces.",
    items: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "React", icon: <FaReact className="text-blue-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "Vite", icon: <SiVite className="text-purple-400" /> },
    ],
  },
  {
    title: "Backend & Data",
    subtitle: "APIs, auth & data handling for full-stack projects.",
    items: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
      { name: "JWT Auth", icon: <SiJsonwebtokens className="text-pink-400" /> },
    ],
  },
  {
    title: "Tools, Design & Deploy",
    subtitle: "Design systems, deployment & workflow essentials.",
    items: [
      { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
      { name: "Vercel", icon: <SiVercel className="text-white" /> },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative bg-black text-white py-24 px-4 md:px-20 overflow-hidden"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-10
          [background-image:linear-gradient(to_right,#27272a_1px,transparent_1px),
          linear-gradient(to_bottom,#27272a_1px,transparent_1px)]
          [background-size:40px_40px]"
        />
        <div className="absolute -right-20 top-10 w-72 h-72 bg-pink-500/20 blur-3xl" />
        <div className="absolute -left-24 bottom-0 w-72 h-72 bg-fuchsia-500/20 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur">
            <span className="h-2 w-2 bg-pink-400 rounded-full animate-pulse" />
            <span className="text-xs uppercase tracking-[0.25em] text-gray-300">
              Tech Stack
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-fuchsia-500">
              Skills
            </span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
            Technologies and tools I use to design, build, and ship modern web
            applications.
          </p>
        </div>

        {/* Skill groups */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 md:grid-cols-3"
        >
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              variants={item}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 flex flex-col h-full shadow-[0_0_30px_rgba(236,72,153,0.15)]"
            >
              <div className="flex items-start justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-lg font-semibold mb-1">{group.title}</h3>
                  <p className="text-xs text-gray-400">{group.subtitle}</p>
                </div>
                <span className="text-[0.65rem] uppercase tracking-[0.2em] text-pink-300/80">
                  {i === 0 ? "Core" : i === 1 ? "Backend" : "Tools"}
                </span>
              </div>

              <div className="mt-2 grid grid-cols-2 gap-4">
                {group.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 rounded-xl bg-black/40 border border-white/5 px-3 py-2.5 hover:border-pink-500/60 hover:bg-pink-500/5 transition-all duration-200"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5">
                      <span className="text-xl">{skill.icon}</span>
                    </div>
                    <p className="text-xs md:text-sm text-gray-200">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
