import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/RUHANA photo.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen bg-black text-white px-4 md:px-20 py-16 relative overflow-hidden flex items-center"
    >
      {/* Pink gradient circle background effect */}
      <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-gradient-to-br from-pink-500 to-fuchsia-600 rounded-full blur-[120px] opacity-30 z-0"></div>
      <div className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] bg-gradient-to-tr from-pink-600 to-fuchsia-400 rounded-full blur-[100px] opacity-20 z-0"></div>

      <motion.div
        className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Text */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left space-y-6"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Hi, I’m Ruhana — <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-fuchsia-500">
              Frontend Developer | UI UX Designer
            </span>
          </h1>
          
            <p className="text-white font-semibold">
with a passion for creating innovative and responsive websites/apps.            
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <motion.a
              href="#projects"
              className="btn bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white border-none"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              className="btn btn-outline text-white border-pink-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="rounded-full overflow-hidden border-4 border-pink-500 shadow-lg w-72 h-72">
            <img
              src={heroImage}
              alt="Ruhana Atiq"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
