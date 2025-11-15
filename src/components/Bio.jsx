import React, { useState, useRef, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

const Bio = () => {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef(null);

  const handleClick = () => {
    setExpanded(!expanded);

    if (!expanded && contentRef.current) {
      setTimeout(() => {
        contentRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 200);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-2 sm:p-6 shadow-lg rounded-lg">
      <h2 className="text-xl md:text-3xl ml-7 font-bold text-white bg-amber-500 inline-block px-6 py-3 rounded-lg shadow-lg">
        Know Me More!
      </h2>

      <div className="relative">
        {/* Content */}
        <div
          ref={contentRef}
          className={`overflow-hidden glass glass-card modal-backdrop relative transition-[max-height] duration-500 ease-in-out ${
            expanded ? "max-h-[2000px]" : "max-h-32"
          }`}
        >
          <p className="text-gray-700 italic text-sm md:text-lg leading-relaxed">
            I'm Ahmad Siddique — a MERN stack developer with a strong focus on
            backend development. I’ve worked with technologies like React,
            Tailwind CSS, JavaScript, Python, MongoDB, and Node.js (Express),
            and I’m constantly expanding my skill set. I’m currently learning
            modern tools such as Redux Toolkit, Appwrite, and Zustand to build
            faster, scalable, and developer-friendly applications. I’m also
            deepening my understanding of database systems and exploring
            efficient ways to enhance both development flow and user experience.
            <br />
            <br />
            Academically, I'm a second-year ICS student in Pakistan and also
            part of the English Access Microscholarship Program, where I
            continue to strengthen my communication and leadership skills.
          </p>

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
            {expanded ? (
              <FaChevronDown className="text-amber-500 text-2xl" />
            ) : (
              <FaChevronUp className="text-amber-500 text-2xl" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bio;
