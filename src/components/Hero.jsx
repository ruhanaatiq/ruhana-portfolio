import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/RUHANA photo.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-black text-white px-4 md:px-20 py-16 flex items-center overflow-hidden"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(244,114,182,0.18),transparent_60%)]" />
        {/* pink blobs */}
        <div className="absolute -right-32 -top-24 h-72 w-72 bg-pink-500/30 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-72 w-72 bg-fuchsia-500/25 blur-3xl" />
        {/* faint grid */}
        <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <motion.div
        className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 relative z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* TEXT SIDE */}
        <motion.div
          className="w-full md:w-1/2 space-y-6 text-center md:text-left"
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {/* Small badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-pink-500/40 bg-white/5 px-4 py-1 text-xs md:text-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-pink-400 animate-pulse" />
            <span className="uppercase tracking-[0.2em] text-[0.65rem] md:text-[0.7rem] text-pink-200">
              Frontend Developer · UI/UX Designer
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-semibold leading-tight md:leading-[1.1]">
            Crafting
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400">
              {" "}
              clean & user-focused{" "}
            </span>
            web experiences.
          </h1>

          <p className="text-sm md:text-base text-gray-200 max-w-xl mx-auto md:mx-0">
            I’m Ruhana, a frontend developer and aspiring UI/UX designer
            building responsive, accessible interfaces with React, Next.js and
            modern CSS. I love turning ideas into smooth, interactive experiences
            that feel effortless to use.
          </p>

          {/* Tech pills */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 text-xs md:text-sm">
            <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">
              React & Next.js
            </span>
            <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">
              Tailwind / DaisyUI
            </span>
            <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">
              UI / UX & Prototyping
            </span>
            <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">
              MERN Stack Projects
            </span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start pt-2">
            <motion.a
              href="#projects"
              className="btn bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white border-none shadow-lg shadow-pink-500/30"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
            >
              View Projects
            </motion.a>

            <motion.a
              href="#contact"
              className="btn btn-outline border-pink-500/70 text-pink-200 hover:bg-pink-500/20"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
            >
              Let&apos;s Collaborate
            </motion.a>
          </div>

          {/* Small status line */}
          <p className="text-xs md:text-sm text-gray-400 pt-1">
            Currently open to{" "}
            <span className="text-pink-300">
              frontend & UI-focused roles / projects.
            </span>
          </p>
        </motion.div>

        {/* IMAGE SIDE */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* glow ring */}
            <motion.div
              className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-pink-500 via-fuchsia-500 to-purple-500 opacity-70 blur-2xl"
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* image card */}
            <div className="relative h-full rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-zinc-900/90 via-zinc-950 to-zinc-900/90 p-1 shadow-[0_0_40px_rgba(236,72,153,0.25)]">
              <div className="h-full w-full overflow-hidden rounded-[2.25rem] bg-black/60">
                <img
                  src={heroImage}
                  alt="Ruhana Atiq"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

         
            
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
