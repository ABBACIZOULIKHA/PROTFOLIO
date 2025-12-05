import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import project1 from "../images/EasyLaw/EasyLaw.png";
import project2 from "../images/Ecommerce/Ecommerce.png";
import project3 from "../images/ParkingManaging/Parking.png";
import project4 from "../images/VehicleWebSite/VehiculeComparator.png";
import project5 from "../images/Etourisme/Etorisme.png";
import project6 from "../images/RealState/RealState.png";
import project7 from "../images/project7.png";
import project8 from "../images/project8.png";
import project9 from "../images/BookStore/BookStore.png";
import project10 from "../images/Project10.png";
import project11 from "../images/Project11.png";
import project12 from "../images/Project12.png";
import project13 from "../images/Project13.png";
import project14 from "../images/Project14.png";

export default function Projects() {

  const projects = [
    {
      img: project14,
      name: "Phone Usage Detection",
      techs: ["Deep learning", "Computer vision", "YoloV8", "PyTorch", "OpenCV"],
      github: [
        "https://github.com/ABBACIZOULIKHA/Phone_Usage_Detection"]
    },
    {
      img: project13,
      name: "Wheat Gard Platform: AI System for Wheat Disease & Pest Management",
      techs: ["Deep learning", "machine learning", "Computer vision", "Flask"," React","convolutional neural networks"],
      github: [
        "https://github.com/ABBACIZOULIKHA/PFE_Project"]
    },
    {
      img: project1,
      name: "Intelligent Legal Monitoring Platform",
      techs: ["React", "Flask", "Selenium", "PostgreSQL"],
      github: [
        "https://github.com/ABBACIZOULIKHA/IntelligentLegalMonitoringPlatform_Backend",
        "https://github.com/ABBACIZOULIKHA/IntelligentLegalMonitoringPlatform_FrontEnd"
      ]
    },
    {
      img: project2,
      name: "E-Commerce Application",
      techs: ["React", "Node.js", "Oracle DB"],
      github: [
        "https://github.com/ABBACIZOULIKHA/EcomerceAPP_OracleDB",
        "https://github.com/ABBACIZOULIKHA/EcomerceContainerisationDB"
      ]
    },
    {
      img: project3,
      name: "Parking Mobile App",
      techs: ["Kotlin", "Node", "MySQL"],
      github: [
        "https://github.com/ABBACIZOULIKHA/ParkingMobileApplication",
        "https://github.com/ABBACIZOULIKHA/ParkingManaging-"
      ]
    },
    {
      img: project4,
      name: "Vehicle Comparator",
      techs: ["PHP", "JavaScript", "MySQL"],
      github: ["https://github.com/ABBACIZOULIKHA/VehicleComparisonWebsite"]
    },
    {
      img: project5,
      name: "E-Tourism Platform",
      techs: ["React", "Firebase"],
      github: ["https://github.com/ABBACIZOULIKHA/dzayergoApp"]
    },
    {
      img: project6,
      name: "Real Estate System",
      techs: ["React", "Django", "MySQL"],
      github: ["https://github.com/ABBACIZOULIKHA/TP_IGL"]
    },
    // {
    //   img: project7,
    //   name: "DevOps Portfolio",
    //   techs: ["HTML", "CSS"],
    //   github: ["https://github.com/ABBACIZOULIKHA/DevopsEngPortflio"],
    //   live: "https://abbacizoulikha.github.io/DevopsEngPortflio/"
    // },
    {
      img: project8,
      name: "E-Learning Platform",
      techs: ["Next.js", "DynamoDB"],
      github: ["https://github.com/ABBACIZOULIKHA/E_learning_management-"]
    },
    {
      img: project9,
      name: "Library Backend",
      techs: ["Spring Boot", "PostgreSQL"],
      github: ["https://github.com/ABBACIZOULIKHA/library-management-system-springboot"]
    },
    {
      img: project10,
      name: "Healthcare Analytics",
      techs: ["Snowflake", "dbt", "Power BI"],
      github: ["https://github.com/ABBACIZOULIKHA/dbt-healthcare-analytics"]
    },
    {
      img: project11,
      name: "Traffic Speed Predictor",
      techs: ["Python", "PyTorch", "Streamlit"],
      github: ["https://github.com/ABBACIZOULIKHA/Traffic-Speed-Predictor"]
    },
    {
      img: project12,
      name: "Customer Churn ML",
      techs: ["Python", "sklearn", "pandas"],
      github: ["https://github.com/ABBACIZOULIKHA/Customer-Churn-Prediction"]
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-12 overflow-hidden bg-white/60 dark:bg-gray-900 text-gray-900 dark:text-white"
    >

      {/* GLOW BACKGROUND */}
      <div className="absolute w-[450px] h-[450px] bg-cyan-600/20 rounded-full blur-[160px] top-[-140px] left-[-100px]" />
      <div className="absolute w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[160px] bottom-[-140px] right-[-100px]" />

      <div className="relative z-10 text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold"
        >
          Project <span className="text-cyan-500">Showcase</span>
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Software • AI • Data Engineering • Research Systems
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex gap-10 px-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
        style={{ scrollBehavior: "smooth" }}
      >
        {projects.map((project, i) => (
          <motion.div
            key={i}
            whileHover={{ rotateY: 8, rotateX: -8, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="min-w-[340px] md:min-w-[420px] bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl overflow-hidden snap-center"
          >
            <img src={project.img} className="h-56 w-full object-cover" />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-cyan-500 mb-2">
                {project.name}
              </h3>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.techs.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs bg-cyan-500/10 text-cyan-500 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 flex-wrap">
                {project.github.map((link, idx) => (
                  <a
                    key={idx}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm bg-gray-900 text-white dark:bg-cyan-600 px-3 py-2 rounded hover:scale-105 transition"
                  >
                    <FaGithub /> Code {idx + 1}
                  </a>
                ))}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm bg-cyan-600 text-white px-3 py-2 rounded hover:scale-105 transition"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
