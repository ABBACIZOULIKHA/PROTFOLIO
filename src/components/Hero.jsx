import React from "react";
// import hero from "../images/MyPhoto2.jpg";
import hero from "../images/Photo.png";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const social_media = [
    { name: "logo-linkedin", url: "https://www.linkedin.com/in/zoulikha-abbaci-297673269/" },
    { name: "logo-github", url: "https://github.com/ABBACIZOULIKHA/" },
    { name: "mail-outline", url: "mailto:kz_abbaci@esi.dz" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center py-10 overflow-hidden dark:bg-gray-900 dark:text-white"
    >
      

      {/* BACKGROUND GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[160px] top-[-150px] left-[-150px]" />
      <div className="absolute w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[160px] bottom-[-150px] right-[-150px]" />

      {/* IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.05, rotateY: 10 }}
        className="flex-1 flex justify-center perspective-1000 z-10"
      >
        <motion.img
          src={hero}
          alt="Abbaci Zoulikha"
          className="md:w-[340px] w-[220px] rounded-3xl object-cover shadow-2xl shadow-cyan-500/20 border border-white/10"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* TEXT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 z-10"
      >
        <div className="md:text-left text-center px-6">

          {/* TYPEWRITER HELLO + NAME */}
          <h1 className="md:text-5xl text-3xl font-bold leading-tight">
            <span className="text-cyan-600 block">
              <Typewriter
                words={["Hello"]}
                loop={1}
                cursor
                cursorStyle="_"
                typeSpeed={90}
              />
            </span>

            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-purple-500">
              <Typewriter
                words={["I'm Abbaci Zoulikha"]}
                loop={1}
                cursor
                typeSpeed={80}
                startDelay={1200}
              />
            </span>
          </h1>

          {/* ROLES LOOP */}
          <h2 className="md:text-xl text-lg font-semibold mt-5 text-gray-600 dark:text-gray-300">
            <Typewriter
              words={[
                "Software Engineer",
                "Full Stack Developer",
                "AI & Data Science",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1200}
            />
          </h2>

          <p className="mt-4 text-gray-700 dark:text-gray-400 max-w-md">
            I build intelligent systems, modern web applications and data-driven solutions that combine
            engineering, creativity and performance.
          </p>

          {/* BUTTON */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.08, boxShadow: "0px 0px 30px rgba(34,211,238,0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-8 px-8 py-3 text-lg rounded-full bg-cyan-600 text-white shadow-lg hover:bg-cyan-500 transition"
          >
            Contact Me
          </motion.a>

          {/* SOCIAL ICONS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-6"
          >
            {social_media.map((icon) => (
              <motion.a
                key={icon.name}
                href={icon.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.2 }}
                className="text-gray-600 dark:text-gray-300 hover:text-cyan-500"
              >
                <ion-icon name={icon.name}></ion-icon>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* SCROLL */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 text-gray-500 dark:text-gray-400"
      >
        ↓ Scroll
      </motion.div>

    </section>
  );
};

export default Hero;
