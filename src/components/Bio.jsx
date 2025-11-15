import React, { useState, useRef, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

const Bio = () => {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef(null);

  const handleClick = () => {
    setExpanded(!expanded);

    // Optional: scroll content into view when expanded
    if (!expanded && contentRef.current) {
      setTimeout(() => {
        contentRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 200);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-2 sm:p-6 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Know Me More!</h2>

      <div className="relative">
        {/* Content */}
        <div
          ref={contentRef}
          className={`overflow-hidden glass glass-card modal-backdrop relative transition-[max-height] duration-500 ease-in-out ${
            expanded ? "max-h-[2000px]" : "max-h-32"
          }`}
        >
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis labore id rerum
            delectus dolore perspiciatis voluptatibus dolorem omnis sapiente, laborum vero fugit
            quo illum temporibus rem. Deleniti eos, a magnam voluptatum saepe eaque provident
            necessitatibus dignissimos quisquam corrupti est, nihil officia architecto ab!
            Deleniti molestias reprehenderit in quam suscipit necessitatibus aperiam possimus quos
            impedit maiores nam distinctio commodi earum id, rem atque? Natus qui facere, sequi
            dolorum dignissimos voluptas quia.
          </p>

          {/* Gradient fade at bottom */}
          <div
            className={`absolute bottom-0 left-0 w-full h-16 bg-linear-to-t from-white to-transparent pointer-events-none transition-opacity duration-300 ${
              expanded ? "opacity-0" : "opacity-100"
            }`}
          ></div>
        </div>

        {/* Read More / Show Less Button */}
        <div className="flex justify-center items-center">
            <button
          onClick={handleClick}
          className="mt-4 px-4 py-2 rounded-lg shadow  transition"
        >  
          {expanded ? <FaChevronDown className="text-amber-500 text-2xl"/> : <FaChevronUp className="text-amber-500 text-2xl"/>}
        </button>
        </div>
        
      </div>
    </div>
  );
};

export default Bio;
