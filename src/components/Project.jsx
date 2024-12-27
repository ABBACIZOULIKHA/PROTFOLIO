import React, { useState } from 'react';
import project1 from "../images/EasyLaw/EasyLaw.png";
import project2 from "../images/Ecommerce/Ecommerce.png";
import project3 from "../images/ParkingManaging/Parking.png";
import project4 from "../images/VehicleWebSite/VehiculeComparator.png";
import project5 from "../images/Etourisme/Etorisme.png";
import project6 from "../images/RealState/RealState.png";
import project7 from "../images/BookStore/BookStore.png";

export default function Project() {
  const projects = [
    {
      img: project1,
      name: "Intelligent Legal Monitoring Platform",
      techs: ["React.js", "Tailwind CSS", "Flask", "Selenium", "PostgreSQL"],
      github_link: [
        "https://github.com/ABBACIZOULIKHA/IntelligentLegalMonitoringPlatform_Backend",
        "https://github.com/ABBACIZOULIKHA/IntelligentLegalMonitoringPlatform_FrontEnd",
      ],
    },
    {
      img: project2,
      name: "Ecommerce Application",
      techs: ["React.js", "Tailwind CSS", "Node.js", "OracleDB"],
      github_link: [
        "https://github.com/ABBACIZOULIKHA/EcomerceAPP_OracleDB",
        "https://github.com/ABBACIZOULIKHA/EcomerceContainerisationDB",
      ],
    },
    {
      img: project3,
      name: "Parking Managing Mobile Application",
      techs: ["Kotlin", "Node.js", "MySQL"],
      github_link: [
        "https://github.com/ABBACIZOULIKHA/ParkingMobileApplication",
        "https://github.com/ABBACIZOULIKHA/ParkingManaging-",
      ],
    },
    {
      img: project4,
      name: "Vehicle Comparison Website",
      techs: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      github_link: ["https://github.com/ABBACIZOULIKHA/VehicleComparisonWebsite"],
    },
    {
      img: project5,
      name: "E-Tourism Management",
      techs: ["React.js", "Tailwind CSS", "Firebase"],
      github_link: ["https://github.com/ABBACIZOULIKHA/dzayergoApp"],
    },
    {
      img: project6,
      name: "Real Estate Listings Management Platform",
      techs: ["React.js", "Tailwind CSS", "Django", "MySQL"],
      github_link: ["https://github.com/ABBACIZOULIKHA/TP_IGL/tree/main"],
    },
    {
      img: project7,
      name: "DevOps Engineer Portfolio",
      techs: ["Html", "CSS"],
      github_link: ["https://github.com/ABBACIZOULIKHA/DevopsEngPortflio"],
      Live:"https://abbacizoulikha.github.io/DevopsEngPortflio/"
    },
    {
      img: project8,
      name: "E_learning_management-",
      techs: ["Html", "CSS"],
      github_link: ["https://github.com/ABBACIZOULIKHA/E_learning_management-"],
    },
  ];

  const [visibleCount, setVisibleCount] = useState(3); // Number of projects initially visible

  const handleSeeMore = () => {
    setVisibleCount((prevCount) => prevCount + 3); // Increase by 3 or any number of projects you prefer
  };

  return (
    <section id="projects" className="py-5 bg-white dark:bg-gray-900">
      <div className="text-center">
        <h3 className="text-4xl font-semibold text-gray-900 dark:text-white">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.slice(0, visibleCount).map((project, i) => (
            <div key={i} className="bg-slate-200 dark:bg-slate-700 rounded-xl overflow-hidden">
              <img src={project.img} alt={project.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{project.name}</h3>
                <div className="text-gray-600 dark:text-gray-300 text-sm mt-2 mb-4">
                  {project.techs.join(", ")}
                </div>
                <div className="flex flex-col gap-3 justify-center">
                  {Array.isArray(project.github_link) ? (
                    project.github_link.map((link, idx) => (
                      <a
                        key={idx}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-600 bg-gray-300 dark:text-cyan-600 dark:bg-gray-800 px-4 py-2 rounded"
                      >
                        GitHub Link {idx + 1}
                      </a>
                    ))
                  ) : (
                    <a
                      href={project.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-600 bg-gray-300 dark:text-cyan-600 dark:bg-gray-800 px-4 py-2 rounded"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {visibleCount < projects.length && (
          <div className="text-center mt-8">
            <button
              onClick={handleSeeMore}
              className="text-cyan-600 bg-gray-300 dark:text-cyan-600 dark:bg-gray-800 px-4 py-2 rounded"
            >
              See More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
