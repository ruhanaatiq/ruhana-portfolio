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

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "React", icon: <FaReact className="text-blue-400" /> },
{ name: "Next.js", icon: <SiNextdotjs className="text-white" /> },  { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
  { name: "Vite", icon: <SiVite className="text-purple-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
  { name: "JWT", icon: <SiJsonwebtokens className="text-pink-400" /> },
  { name: "Vercel", icon: <SiVercel className="text-white" /> },
  { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
];

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <section id="skills" className="py-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white">
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-fuchsia-500">
            Skills
          </span>
        </h2>
        <p className="text-gray-400 mt-2">
          Technologies I use to build amazing web apps
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto px-4"
      >
        {skills.map((skill, index) => (
          <motion.div
            variants={item}
            key={index}
            className="flex flex-col items-center justify-center gap-3 bg-[#3e3737] hover:bg-[#1a1a1a] p-5 rounded-xl shadow hover:shadow-pink-500/30 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
          >
            <div className="text-4xl">{skill.icon}</div>
            <p className="text-sm text-gray-300">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
