import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaUniversity } from "react-icons/fa";

const experiences = [
  {
    title: "Project Manager",
    organization: "Invicta Technical College, Australia",
    period: "Jan 2022 – Apr 2024",
    icon: <FaBriefcase />,
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
    icon: <FaUniversity />,
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

      <div className="relative max-w-4xl mx-auto before:absolute before:top-0 before:bottom-0 before:left-4 md:before:left-6 before:w-1 before:bg-gradient-to-b before:from-pink-500 before:to-fuchsia-500">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="relative pl-12 md:pl-16 mb-12"
          >
            {/* Dot with icon */}
            <div className="absolute left-0 top-1 w-8 h-8 bg-black border-2 border-pink-500 rounded-full flex items-center justify-center text-pink-500 shadow-md">
              {exp.icon}
            </div>

            <div className="bg-[#1a1a1a] rounded-xl p-6 border border-pink-500/20 shadow hover:shadow-pink-500/10 transition">
              <div className="mb-2">
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-pink-400">{exp.organization}</p>
                <p className="text-sm text-gray-400">{exp.period}</p>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {exp.responsibilities.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
