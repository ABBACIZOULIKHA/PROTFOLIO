import React, { useState } from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaPhp, FaGithub, FaFigma } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandDjango, TbBrandKotlin } from "react-icons/tb";
import { SiFlask, SiRedux } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiSelenium } from "react-icons/si";

export default function Skills() {
  const [showAll, setShowAll] = useState(false);

  const skills = [
    { img: <FaHtml5 />, name: "HTML" },
    { img: <FaCss3Alt />, name: "CSS" },
    { img: <FaJsSquare />, name: "JavaScript" },
    { img: <FaReact />, name: "React.js" },
    { img: <RiTailwindCssFill />, name: "Tailwind CSS" },
    { img: <FaNodeJs />, name: "Node.js" },
    { img: <TbBrandDjango />, name: "Django" },
    { img: <SiFlask />, name: "Flask" },
    { img: <SiRedux />, name: "Redux" },
    { img: <FaPhp />, name: "PHP" },
    { img: <GrMysql />, name: "MySQL" },
    { img: <BiLogoPostgresql />, name: "PostgreSQL" },
    { img: <FaGithub />, name: "GitHub" },
    { img: <FaFigma />, name: "Figma" },
    { img: <TbBrandKotlin />, name: "Kotlin" },
    { img: <SiSelenium />, name: "Selenium" },

];

  const initialSkills = skills.slice(0, 6); // Show only the first 6 skills initially

  return (
    <section id="skills" className="py-5 bg-white/60 text-gray-900 dark:text-white dark:bg-gray-900">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Technologies I work with</p>
      </div>
      <br />
      <div className="mx-10 flex items-center justify-center gap-10 flex-wrap">
        {(showAll ? skills : initialSkills).map((skill, i) => (
          <div key={i} className="relative flex flex-col items-center justify-center h-32 w-32 bg-slate-200 dark:bg-slate-700 rounded-lg p-4 group">
            <div className="text-5xl">{skill.img}</div>
            <div className="absolute bottom-0 left-0 right-0 text-center bg-slate-800 text-cyan-600 rounded-b-lg p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {skill.name}
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <button 
          onClick={() => setShowAll(!showAll)} 
          className="text-gray-800 bg-cyan-600 dark:text-cyan-600  dark:bg-gray-800 px-4 py-2 rounded-md"
        >
          {showAll ? 'Show Less' : 'See More'}
        </button>
      </div>
    </section>
  );
}
