import React from "react";

const Navbar = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // Place resume in public folder
    link.download = "ruhana-atiq-resume.pdf";
    link.click();
  };

  return (
    <div className="navbar bg-base-100 sticky top-0 z-50 shadow">
      <div className="flex-1">
        <a href="#" className="text-xl font-bold">Ruhana Atiq</a>
      </div>

      <div className="hidden md:flex gap-4">
        <a href="#about" className="btn btn-ghost text-sm">About</a>
        <a href="#projects" className="btn btn-ghost text-sm">Projects</a>
        <a href="#skills" className="btn btn-ghost text-sm">Skills</a>
      </div>

      <div className="flex-none">
        <button onClick={handleDownload} className="btn btn-outline btn-sm">
          Download Resume
        </button>
      </div>
    </div>
  );
};

export default Navbar;
