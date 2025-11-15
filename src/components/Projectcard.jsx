import React from "react";

const ProjectCard = ({
  title,
  subtitle,
  description,
  image,
  techs = [],
  links = {}, 
}) => {
  return (
    <div className="element relative rounded-xl shadow-lg overflow-hidden max-w-md mx-auto transition hover:shadow-2xl">
     
      <div className="relative">
        <img src={image} alt={title} className="w-full h-56 object-cover" />
        {links.live && (
          <a
            href={links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-md text-sm font-medium hover:bg-amber-600 transition"
          >
            Visit
          </a>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold">{title}</h3>
        {subtitle && <p className="text-gray-500 text-sm mb-2">{subtitle}</p>}
        <p className="text-gray-700 text-sm mb-4">{description}</p>

        <div className="flex flex-wrap gap-2">
          {techs.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-100 neumorphic-capsol text-gray-800 px-2 py-1 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
