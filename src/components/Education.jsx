import React from "react";
import cubLogo from "../assets/cub logo.png";

const Education = () => {
  return (
    <section id="education" className="py-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-fuchsia-500">
            Education
          </span>
        </h2>
        <p className="text-gray-400 mt-2">My academic background</p>
      </div>

      <div className="max-w-3xl mx-auto bg-[#1a1a1a] p-6 md:p-8 rounded-xl shadow-md border border-pink-500/20 space-y-4">
        <h3 className="text-xl md:text-2xl font-semibold text-white">
          Bachelor of Science in Computer Science & Engineering
        </h3>

        {/* Logo + University Name */}
        <div className="flex items-center gap-4 text-pink-400 font-medium">
          <img src={cubLogo} alt="CUB Logo" className="w-14 h-14 object-contain" />
          <span>Canadian University of Bangladesh</span>
        </div>

        <p className="text-gray-300">
          I successfully completed my graduation in early 2025. During my studies, I built a strong foundation in software development, data structures, databases, and web technologies — all of which have shaped my journey as a frontend-focused developer with full stack capabilities.
        </p>
      </div>
    </section>
  );
};

export default Education;
