import React from "react";

const Preloader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050816]">
      {/* Circle / laptop style card */}
      <div className="relative flex flex-col items-center">
        {/* glowing circle */}
        <div className="w-32 h-32 rounded-full bg-purple-500/20 blur-2xl absolute" />

        {/* laptop-ish card */}
        <div className="relative w-32 h-20 rounded-2xl bg-[#151030] border border-purple-400/40 flex items-center justify-center shadow-[0_0_40px_rgba(168,85,247,0.6)]">
          <span className="text-sm text-purple-100 font-semibold tracking-wide">
            PORTFOLIO
          </span>
        </div>

        {/* little loading dots */}
        <div className="mt-6 flex gap-2">
          <span className="w-2 h-2 rounded-full bg-purple-300 animate-bounce" />
          <span className="w-2 h-2 rounded-full bg-pink-300 animate-bounce [animation-delay:0.15s]" />
          <span className="w-2 h-2 rounded-full bg-orange-300 animate-bounce [animation-delay:0.3s]" />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
