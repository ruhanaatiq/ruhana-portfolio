import React, { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Ruhana_CV.pdf"; 
    link.download = "ruhana-atiq-resume.pdf";
    link.click();
  };

  return (
    <div className="navbar bg-base-100 sticky top-0 z-50 shadow px-4 md:px-10">
      {/* Left: Logo */}
      <div className="flex-1">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
        </a>
      </div>

      {/* Middle: Menu links (hidden on mobile) */}
      <div className="hidden md:flex gap-4">
        <a href="#about" className="btn btn-ghost text-sm">About</a>
        <a href="#projects" className="btn btn-ghost text-sm">Projects</a>
        <a href="#skills" className="btn btn-ghost text-sm">Skills</a>
      </div>

      {/* Right: Resume button & hamburger */}
      <div className="flex-none gap-2">
        <button onClick={handleDownload} className="btn btn-outline btn-sm hidden md:block">
          Download Resume
        </button>

        {/* Hamburger for small screens */}
        <div className="dropdown dropdown-end md:hidden">
          <button
            tabIndex={0}
            className="btn btn-ghost btn-circle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {menuOpen && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded-box w-52 space-y-2"
            >
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><button onClick={handleDownload}>Download Resume</button></li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
