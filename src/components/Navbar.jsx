import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Ruhana_Atiq_Resume_Modern.pdf-1.pdf";
    link.download = "ruhana-atiq-resume.pdf";
    link.click();
  };

  // Close menu on scroll or resize (optional UX improvement)
  useEffect(() => {
    const handleResizeOrScroll = () => setMenuOpen(false);
    window.addEventListener("scroll", handleResizeOrScroll);
    window.addEventListener("resize", handleResizeOrScroll);
    return () => {
      window.removeEventListener("scroll", handleResizeOrScroll);
      window.removeEventListener("resize", handleResizeOrScroll);
    };
  }, []);

  return (
    <div className="navbar bg-base-100 sticky top-0 z-50 shadow px-4 md:px-10">
      {/* Left: Logo */}
      <div className="flex-1">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
        </a>
      </div>

      {/* Middle: Desktop Menu */}
      <div className="hidden md:flex gap-4">
        <a href="#about" className="btn btn-ghost text-sm">About</a>
        <a href="#projects" className="btn btn-ghost text-sm">Projects</a>
        <a href="#skills" className="btn btn-ghost text-sm">Skills</a>
          <a href="#experience" className="btn btn-ghost text-sm">Experience</a>
      </div>

      {/* Right: Resume & Hamburger */}
      <div className="flex items-center gap-2 relative">
        <button
          onClick={handleDownload}
          className="btn btn-outline border-pink-500 hover:bg-pink-400 btn-sm hidden md:block"
        >
          Download Resume
        </button>

        {/* Hamburger Icon */}
        <button
          className="btn btn-ghost btn-circle md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <ul className="absolute top-14 right-0 bg-base-100 w-48 p-4 rounded-lg shadow-md z-50 flex flex-col gap-3 text-sm">
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
            <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
            <li><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a></li>
            <li><button onClick={() => { setMenuOpen(false); handleDownload(); }}>Download Resume</button></li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
