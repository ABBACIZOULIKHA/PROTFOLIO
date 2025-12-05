import React from "react";
import { motion } from "framer-motion";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDocker,
  FaPython, FaJava, FaGithub, FaFigma 
} from "react-icons/fa";
import { 
  SiTailwindcss, SiRedux, SiSpringboot, SiMysql, SiPostgresql, 
  SiDjango, SiFlask, SiPowerbi, SiSnowflake, SiDbt, SiSupabase
} from "react-icons/si";

const skillCategories = [

  {
    title: "Software Engineering",
    skills: [
      { name: "Java", icon: <FaJava />, level: 85 },
      { name: "Spring Boot", icon: <SiSpringboot />, level: 80 },
      { name: "Python", icon: <FaPython />, level: 90 },
      { name: "Docker", icon: <FaDocker />, level: 78 },
      { name: "GitHub", icon: <FaGithub />, level: 92 }
    ]
  },

  {
    title: "Web Development",
    skills: [
      { name: "React", icon: <FaReact />, level: 92 },
      { name: "Node.js", icon: <FaNodeJs />, level: 85 },
      { name: "HTML", icon: <FaHtml5 />, level: 95 },
      { name: "CSS", icon: <FaCss3Alt />, level: 90 },
      { name: "JavaScript", icon: <FaJs />, level: 88 },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 92 },
      { name: "Redux", icon: <SiRedux />, level: 75 }
    ]
  },

  {
    title: "AI, Data & Analytics",
    skills: [
      { name: "Django", icon: <SiDjango />, level: 80 },
      { name: "Flask", icon: <SiFlask />, level: 85 },
      { name: "dbt", icon: <SiDbt />, level: 70 },
      { name: "Snowflake", icon: <SiSnowflake />, level: 73 },
      { name: "Power BI", icon: <SiPowerbi />, level: 78 }
    ]
  },

  {
    title: "Databases & Cloud",
    skills: [
      { name: "MySQL", icon: <SiMysql />, level: 85 },
      { name: "PostgreSQL", icon: <SiPostgresql />, level: 82 },
      { name: "Supabase", icon: <SiSupabase />, level: 76 },
      { name: "Figma", icon: <FaFigma />, level: 70 }
    ]
  },

];

// Animation variants
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  }
};

const card = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const bar = {
  hidden: { width: 0 },
  visible: (level) => ({
    width: `${level}%`,
    transition: { duration: 1.2, ease: "easeOut" }
  })
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-12 overflow-hidden bg-white/60 dark:bg-gray-900 text-gray-900 dark:text-white backdrop-blur-md"
    >

      {/* GLOW BACKGROUND */}
      <div className="absolute w-[400px] h-[400px] bg-cyan-600/20 rounded-full blur-[160px] top-[-140px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[160px] bottom-[-140px] right-[-100px]" />

      <div className="relative z-10 text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-semibold"
        >
          Technical <span className="text-cyan-500">Expertise</span>
        </motion.h2>
        <p className="mt-3 text-gray-600 dark:text-gray-400">
          Research, Engineering & Development Capabilities
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6"
      >
        {skillCategories.map((category, i) => (
          <motion.div
            key={i}
            variants={card}
            whileHover={{ scale: 1.03, rotateX: 3 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl hover:shadow-cyan-500/20 transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-6 text-cyan-500">
              {category.title}
            </h3>

            {category.skills.map((skill, index) => (
              <div key={index} className="mb-5">
                <div className="flex justify-between items-center mb-1">
                  <span className="flex items-center gap-2 text-sm font-medium">
                    <span className="text-cyan-500 text-lg">{skill.icon}</span>
                    {skill.name}
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {skill.level}%
                  </span>
                </div>

                <div className="w-full h-2 bg-gray-300 dark:bg-gray-700 rounded overflow-hidden">
                  <motion.div
                    custom={skill.level}
                    variants={bar}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded"
                  />
                </div>
              </div>
            ))}

          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
