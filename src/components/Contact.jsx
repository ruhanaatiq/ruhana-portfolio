import React, { useRef } from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const formRef = useRef();

  const sendMessage = async (e) => {
    e.preventDefault();
    const formData = {
      from_name: formRef.current.from_name.value,
      from_email: formRef.current.from_email.value,
      message: formRef.current.message.value,
    };

    try {
     const res = await fetch("https://ruhana-portfolio-server.vercel.app/api", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),
});

      const data = await res.json();
      if (data.success) {
        toast.success("Message sent successfully!");
        formRef.current.reset();
      } else {
        toast.error("Failed to send message.");
      }
    } catch (err) {
      toast.error("Server error. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-20 px-4">
      <Toaster position="top-center" />

      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-fuchsia-500">
            Get in Touch
          </span>
        </h2>
        <p className="text-gray-400 mt-2">Feel free to reach out — let's connect!</p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 bg-[#111] p-8 rounded-xl border border-pink-500/20 shadow-lg shadow-pink-500/10">
        {/* Left: Info */}
        <div className="space-y-6 text-center md:text-left">
          <h3 className="text-2xl font-semibold text-white">Do you have a project to discuss?</h3>
          <p className="text-gray-400">
            I'm always open to discussing new projects or collaboration opportunities.
          </p>

          {/* Location */}
          <div className="flex items-center justify-center md:justify-start gap-2 text-pink-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M12 2C8.13401 2 5 5.13401 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13401 15.866 2 12 2ZM7 9C7 6.23858 9.23858 4 12 4C14.7614 4 17 6.23858 17 9C17 11.866 13.702 16.053 12 18.126C10.298 16.053 7 11.866 7 9Z" />
              <circle cx="12" cy="9" r="2.5" fill="currentColor" />
            </svg>
            <span className="text-gray-300">Dhaka, Bangladesh</span>
          </div>

          {/* Email */}
          <div className="flex items-center justify-center md:justify-start gap-2 text-pink-400">
            <FaEnvelope />
            <a href="mailto:ruhana.atiq@gmail.com" className="hover:underline">
              ruhana.atiq@gmail.com
            </a>
          </div>

          {/* Socials */}
          <div className="flex justify-center md:justify-start gap-4 text-2xl text-white mt-4">
            <a href="https://github.com/ruhanaatiq" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/ruhanaatiq" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">
              <FaLinkedin />
            </a>
            <a href="https://facebook.com/ruhanaatiq" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">
              <FaFacebook />
            </a>
          </div>
        </div>

        {/* Right: Form */}
        <form ref={formRef} onSubmit={sendMessage} className="space-y-6">
          <div>
            <label className="block text-sm text-gray-300 mb-1" htmlFor="from_name">
              Your Name
            </label>
            <input
              type="text"
              name="from_name"
              className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1" htmlFor="from_email">
              Email Address
            </label>
            <input
              type="email"
              name="from_email"
              className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Type your message..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white border-none w-full md:w-auto px-6 py-3"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
