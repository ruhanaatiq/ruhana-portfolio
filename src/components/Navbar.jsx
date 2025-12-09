import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Ruhana_Atiq_Resume.pdf";
    link.download = "ruhana-atiq-resume.pdf";
    link.click();
  };

  // Shadow + blur when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on scroll or resize
  useEffect(() => {
    const handleResizeOrScroll = () => setMenuOpen(false);
    window.addEventListener("resize", handleResizeOrScroll);
    window.addEventListener("scroll", handleResizeOrScroll);

    return () => {
      window.removeEventListener("resize", handleResizeOrScroll);
      window.removeEventListener("scroll", handleResizeOrScroll);
    };
  }, []);

  return (
    <div
      className={`navbar fixed top-0 z-50 px-4 md:px-10 transition-all duration-300 ${
        scrolled
          ? "bg-black/60 backdrop-blur-md border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* Left: Logo */}
      <div className="flex-1">
        <a href="#hero" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Logo"
            className="w-10 h-10 object-contain drop-shadow"
          />
          <span className="font-semibold text-white tracking-wide text-sm hidden md:block">
            RUHANA ATIQ
          </span>
        </a>
      </div>

      {/* Middle: Desktop Menu */}
      <div className="hidden md:flex gap-6">
        <a href="#about" className="nav-link">About</a>
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#skills" className="nav-link">Skills</a>
        <a href="#experience" className="nav-link">Experience</a>
      </div>

      {/* Right: Resume & Hamburger */}
      <div className="flex items-center gap-2 relative">
        <button
          onClick={handleDownload}
          className="hidden md:block px-4 py-2 text-sm rounded-lg border border-pink-400/50 text-pink-200 hover:bg-pink-500/20 hover:border-pink-400 transition-all duration-200"
        >
          Resume
        </button>

        {/* Hamburger Icon */}
        <button
          className="btn btn-ghost btn-circle md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <ul className="absolute top-14 right-0 bg-black/80 backdrop-blur-lg w-48 p-4 rounded-xl shadow-xl border border-white/10 z-50 flex flex-col gap-3 text-sm">
            <li><a className="mobile-link" href="#about">About</a></li>
            <li><a className="mobile-link" href="#projects">Projects</a></li>
            <li><a className="mobile-link" href="#skills">Skills</a></li>
            <li><a className="mobile-link" href="#experience">Experience</a></li>
            <li>
              <button
                className="mobile-link text-left"
                onClick={() => { setMenuOpen(false); handleDownload(); }}
              >
                Download Resume
              </button>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
