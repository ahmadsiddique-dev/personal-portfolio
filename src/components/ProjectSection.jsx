import ProjectCard from "./Projectcard";
import pediclickImg from "/image.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Projects = () => {
  const projectData = [
    {
      title: "English Access Website",
      subtitle: "Frontend & Google Script App",
      description:
        "This is a showcase website of English Access Scholarship Program Students. It shows their learning, events, activities and also gives their updates.",
      image: "/access.png",
      techs: ["TailwindCSS", "HTML", "JavaScript"],
      links: { live: "https://access-g1.vercel.app" },
    },
    {
      title: "Digital Marketer Website",
      subtitle: "Frontend & Script App",
      description:
        "This is a portfolio website of a digital marketer. It showcases his services, achievements, and helps visitors contact him.",
      image: "/yasir-project.png",
      techs: ["TypeScript", "React", "TailwindCSS"],
      links: { live: "https://yasirmunir.vercel.app/" },
    },
    {
      title: "Weather Forecasting App",
      subtitle: "Frontend & API",
      description:
        "This app asks the user for a city name and displays the current weather. It uses the OpenWeather API to fetch data.",
      image: "/weather-forecast.png",
      techs: ["OpenWeatherAPI", "React", "TailwindCSS"],
      links: { live: "https://mosam-app.vercel.app/" },
    },
  ];

  return (
    <center>
    <div id="project-section" className="mt-12 relative">
      <h1 className="md:text-4xl mb-20 shadow-lg my-4 rounded-lg text-xl font-bold sm:my-12 sm:max-w-[300px] text-center px-2 py-2 text-white bg-amber-500">
        C MY Projects
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 container max-w-[85vw] gap-6 md:p-6">
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      <Link to="/project">
        <div className="group flex justify-center items-center gap-3 my-7 px-6 py-3 rounded-full font-bold text-xl text-amber-500 bg-white shadow-lg cursor-pointer transition-transform duration-300 hover:shadow-2xl hover:-translate-y-1 hover:text-amber-600">
          <span>More</span>
          <FaArrowRightLong className="transition-transform duration-300 group-hover:translate-x-2" />
        </div>
      </Link>
    </div>
    </center>
  );
};

export default Projects;
