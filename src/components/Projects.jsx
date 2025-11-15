import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import projectsData from "./projectsData";

const Projects = () => {
  const handleHistory = () => window.history.back();

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      {/* Back Button */}
      <button
        onClick={handleHistory}
        className="bg-red-500 text-white p-3 rounded-full shadow-md hover:bg-red-600 transition absolute top-4 left-4"
      >
        <IoMdArrowRoundBack size={22} />
      </button>

      {/* Page Heading */}
      <h1 className="text-center text-4xl md:text-5xl font-bold text-amber-500 mb-12">
        Project Center
      </h1>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projectsData.map((e) => (
          <div
            key={e.name}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-5 flex flex-col"
          >
            {/* Image */}
            <div className="w-full h-56 bg-amber-200 rounded-lg overflow-hidden">
              <img
                src={e.picture}
                alt={e.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title */}
            <h3 className="mt-5 text-2xl font-bold text-gray-800">{e.name}</h3>

            {/* Tech Stack */}
            <div className="mt-3">
              <h4 className="text-lg font-semibold text-gray-700">Tech Stack</h4>
              <p className="text-gray-600">{e.stackPara}</p>
            </div>

            {/* Summary */}
            <div className="mt-3">
              <h4 className="text-lg font-semibold text-gray-700">Summary</h4>
              <p className="text-gray-600 leading-relaxed">{e.summary}</p>
            </div>

            {/* Live/Code Button */}
            <a
              href={e.slug}
              target="_blank"
              className="mt-4 bg-amber-500 text-white py-2 px-4 rounded-lg text-center font-semibold hover:bg-amber-600 transition"
            >
              {e.cL === "live" ? "View Live" : "View Code"}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
