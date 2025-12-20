import React from "react";
import hero from "../images/Hero.jpg";
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
  className="relative min-h-screen flex items-center justify-center pt-24 md:pt-5 overflow-hidden dark:bg-gray-900 dark:text-white"
>
  {/* BACKGROUND GLOW */}
  <div className="absolute w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[160px] top-[-150px] left-[-150px]" />
  <div className="absolute w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[160px] bottom-[-150px] right-[-150px]" />

  {/* CONTAINER */}
  <div className="relative z-10 w-full max-w-6xl px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

    {/* TEXT CONTENT */}
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="text-center md:text-left"
    >
      <h1 className="text-3xl md:text-5xl font-bold leading-tight">
        <span className="text-cyan-500 block mb-2">
          <Typewriter
            words={["Hello"]}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={90}
          />
        </span>

        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
          <Typewriter
            words={["I'm Abbaci Zoulikha"]}
            loop={1}
            cursor
            typeSpeed={80}
            startDelay={1200}
          />
        </span>
      </h1>

      <h2 className="mt-6 text-lg md:text-xl font-semibold text-gray-600 dark:text-gray-300">
        <Typewriter
          words={[
            "Software Engineer",
            "Full Stack Developer",
            "AI & Data Science",
          ]}
          loop
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1200}
        />
      </h2>

      <p className="mt-6 max-w-md mx-auto md:mx-0 text-gray-700 dark:text-gray-400 leading-relaxed">
        I build intelligent systems, modern web applications and data-driven
        solutions that combine engineering, creativity and performance.
      </p>

      {/* CTA + SOCIALS */}
      <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6 justify-center md:justify-start">
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 text-lg rounded-full bg-cyan-600 text-white shadow-lg hover:bg-cyan-500 transition"
        >
          Contact Me
        </motion.a>

        <div className="flex gap-6 text-3xl justify-center md:justify-start">
          {social_media.map((icon) => (
            <motion.a
              key={icon.name}
              href={icon.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.15 }}
              className="text-gray-600 dark:text-gray-300 hover:text-cyan-500 transition"
            >
              <ion-icon name={icon.name}></ion-icon>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>

    {/* IMAGE (desktop only) */}
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="hidden md:flex justify-center"
    >
      <img
        src={hero}
        alt="Abbaci Zoulikha"
        className="w-[320px] lg:w-[320px] rounded-3xl object-cover shadow-2xl shadow-cyan-500/20 border border-white/10"
      />
    </motion.div>
  </div>

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
