import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-black text-white py-24 px-4 md:px-20 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-10 
          [background-image:linear-gradient(to_right,#27272a_1px,transparent_1px),
          linear-gradient(to_bottom,#27272a_1px,transparent_1px)]
          [background-size:40px_40px]"
        />
        {/* Glows */}
        <div className="absolute -left-32 top-10 w-72 h-72 bg-pink-500/20 blur-3xl"></div>
        <div className="absolute right-0 bottom-10 w-72 h-72 bg-fuchsia-500/20 blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center space-y-10 relative z-10">
        {/* Section Badge */}
      

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-fuchsia-500">
            Me
          </span>
        </h2>

        {/* Paragraphs */}
        <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
          <p>
            I'm{" "}
            <span className="text-white font-semibold">Ruhana Atiq</span>, a
            passionate{" "}
            <span className="text-white font-semibold">
              Frontend Developer & UI/UX Enthusiast
            </span>{" "}
            who loves creating smooth, visually appealing user experiences.
            What started as curiosity for animations and interface design has
            grown into a full dedication to modern web development.
          </p>

          <p>
            I specialize in building clean, responsive digital experiences with{" "}
            <span className="text-white font-semibold">
              React, Next.js, Tailwind CSS, JavaScript
            </span>{" "}
            and strong UI/UX principles. My focus is not just on functionality,
            but on crafting interfaces that feel intuitive, engaging, and
            enjoyable.
          </p>

          <p>
            Over time, I’ve worked on a variety of full-stack and
            frontend-focused projects — from interactive e-commerce platforms to
            user dashboards, adoption portals, admin systems, and more. Each
            project has strengthened my skills in{" "}
            <span className="text-white font-semibold">
              problem-solving, design thinking, and user-centered development
            </span>
            .
          </p>

          <p>
            Beyond coding, I enjoy{" "}
            <span className="text-white font-semibold">volunteering</span>,
            designing creative visuals, and spending time with animals — I’m a
            true <span className="text-white font-semibold">pet lover</span> at
            heart. Whether I’m building a modern web app or helping my
            community, I bring dedication, empathy, and creativity into
            everything I do.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
