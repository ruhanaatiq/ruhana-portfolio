import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-black text-white py-20 px-4 md:px-20">
      {/* Gradient glow effect */}
      <div className="relative max-w-5xl mx-auto text-center space-y-8 z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-fuchsia-500">Me</span>
        </h2>

        <p className="text-lg text-gray-300 leading-relaxed">
          Ever since I was young, I’ve been fascinated by how modern websites and apps work —
          the seamless animations, responsive layouts, and polished user experiences sparked my curiosity.
          That passion led me to explore the world of <span className="text-white font-semibold">web development</span>,
          and I’ve been hooked ever since.
        </p>

        <p className="text-lg text-gray-300 leading-relaxed">
          I specialize in building user-centric, aesthetically pleasing front-end applications using
          <span className="text-white font-semibold"> React, Tailwind CSS, and JavaScript</span>.
          I’m also deeply interested in <span className="text-white font-semibold">UI/UX design</span> —
          turning ideas into beautiful, usable interfaces is what I truly enjoy.
        </p>

        <p className="text-lg text-gray-300 leading-relaxed">
          Outside of tech, I love engaging in <span className="text-white font-semibold">volunteer work</span> and making a difference in my community.
          I’m also a huge <span className="text-white font-semibold">pet lover</span> — animals bring joy and calm to my life.
        </p>

        <p className="text-lg text-gray-300 leading-relaxed">
          Whether it’s coding a sleek web app or helping out at a local shelter, I bring creativity, empathy, and dedication to everything I do.
        </p>
      </div>
    </section>
  );
};

export default About;
