import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const info = [
    { text: "Years Experience", count: "03" },
    { text: "Completed Projects", count: "10" },
  ];

  return (
    <section
      id="about"
      className="relative py-12 overflow-hidden bg-white/60 dark:bg-gray-900 dark:text-white"
    >

      {/* GLOW BACKGROUND */}
      <div className="absolute w-[450px] h-[450px] bg-cyan-600/20 rounded-full blur-[160px] top-[-150px] right-[-100px]" />
      <div className="absolute w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[160px] bottom-[-150px] left-[-120px]" />

      <div className="text-center relative z-10">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-semibold"
        >
          About <span className="text-cyan-600">Me</span>
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex md:flex-row flex-col items-center gap-10 px-10 max-w-6xl mx-auto mt-12"
        >

          {/* GLASS CARD */}
          <motion.div
            whileHover={{ scale: 1.03, rotateX: 3 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl shadow-xl border border-white/10 p-8 md:p-10"
          >

            <p className="text-justify leading-7 text-gray-700 dark:text-gray-300">
              Hello! I am a freshly graduated Research Engineer from the École Nationale Supérieure d'Informatique (ESI), holding an Engineering Degree and a Master 2. I have a strong background in software engineering, artificial intelligence, and data science, with over three years of hands-on experience in developing modern, scalable systems.

Throughout my academic and practical journey, I have completed more than ten real-world projects ranging from full-stack web applications to machine learning, deep learning and data engineering solutions. I enjoy working at the intersection of research and engineering, designing intelligent systems, transforming data into insights, and building digital solutions that solve real problems with efficiency and impact.

Driven by curiosity and innovation, I continuously explore new technologies and research methodologies to improve system performance, automation and decision-making processes.

            </p>

            {/* STATS */}
            <div className="flex flex-wrap justify-center gap-10 mt-10">
              {info.map((content) => (
                <motion.div
                  key={content.text}
                  whileHover={{ y: -8, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-center"
                >
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {content.count}
                    <span className="text-cyan-500">+</span>
                  </h3>
                  <p className="text-sm mt-1 text-gray-600 dark:text-gray-400">
                    {content.text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* BUTTON */}
            <div className="text-center mt-10">
              <motion.a
                href="/cv.pdf"
                download
                whileHover={{ scale: 1.1, boxShadow: "0px 0px 25px rgba(34,211,238,0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-6 py-3 rounded-lg bg-cyan-600 text-white shadow-lg hover:bg-cyan-500 transition"
              >
                Download CV
              </motion.a>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;
