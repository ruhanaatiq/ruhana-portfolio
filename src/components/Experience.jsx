import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaUniversity } from "react-icons/fa";

const experiences = [
  {
    title: "Project Manager",
    organization: "Invicta Technical College, Australia",
    period: "Jan 2022 – Apr 2024",
    icon: <FaBriefcase className="text-pink-500" />,
    responsibilities: [
      "Wrote educational articles and course-related content.",
      "Prepared questions & marking guide for teachers.",
      "Created course materials according to academic guidelines.",
    ],
  },
  {
    title: "Vice President & Treasurer",
    organization: "IT Club, Canadian University of Bangladesh",
    period: "Jan 2022 – Present",
    icon: <FaUniversity className="text-pink-500" />,
    responsibilities: [
      "Designed event banners and social media posts.",
      "Planned and organized club activities and events.",
      "Maintained documents and mentored club members.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-black text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-fuchsia-500">
            Experience
          </span>
        </h2>
        <p className="text-gray-400 mt-2">A journey of growth and leadership</p>
      </div>

      <div className="max-w-5xl mx-auto space-y-10">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-[#1a1a1a] p-6 rounded-xl border border-pink-500/20"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="text-2xl">{exp.icon}</div>
              <div>
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-gray-400">{exp.organization}</p>
                <p className="text-sm text-gray-500">{exp.period}</p>
              </div>
            </div>
            <ul className="list-disc list-inside text-gray-300 space-y-1 pl-2">
              {exp.responsibilities.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
