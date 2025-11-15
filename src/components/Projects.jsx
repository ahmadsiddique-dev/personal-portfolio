import React from "react";
import ProjectCard from "./Projectcard";
import pediclickImg from "/image.png";
import { FaArrowRightLong } from "react-icons/fa6";

const Projects = () => {
  return (
    <div className="mt-12 relative">
      <h1 className="md:text-2xl shadow-lg my-4 rounded-lg text-xl font-bold sm:my-12 sm:max-w-3xs text-center px-2 py-2 text-white bg-amber-500">
        C MY Projects
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:p-6">
        <ProjectCard
          title="Pediclick Website"
          subtitle="Frontend & Backend"
          description="Simplifica la gestión de tus pedidos con Pediclick. Integrando tus funciones comerciales de forma sencilla y efectiva."
          image={pediclickImg}
          techs={["Docker", "Node.js", "Python"]}
          links={{
            live: "#",
          }}
        />
        <ProjectCard
          title="Pediclick Website"
          subtitle="Frontend & Backend"
          description="Simplifica la gestión de tus pedidos con Pediclick. Integrando tus funciones comerciales de forma sencilla y efectiva."
          image={pediclickImg}
          techs={["Docker", "Node.js", "Python"]}
          links={{
            live: "#",
          }}
        />
        <ProjectCard
          title="Pediclick Website"
          subtitle="Frontend & Backend"
          description="Simplifica la gestión de tus pedidos con Pediclick. Integrando tus funciones comerciales de forma sencilla y efectiva."
          image={pediclickImg}
          techs={["Docker", "Node.js", "Python"]}
          links={{
            live: "#",
          }}
        />
      </div>
      <a href="#">
        <div className="text-xl font-bold text-center my-7 flex justify-center items-center gap-3 text-amber-500">
          <span>More</span> <FaArrowRightLong />
        </div>
      </a>
    </div>
  );
};

export default Projects;
