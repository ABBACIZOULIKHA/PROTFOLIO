import React, { useEffect, useState } from "react";
import { MdOutlineLightMode, MdLightMode } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const menuLinks = [
    { name: "HOME", link: "#home" },
    { name: "ABOUT", link: "#about" },
    { name: "SKILLS", link: "#skills" },
    { name: "PROJECTS", link: "#projects" },
    { name: "CONTACT", link: "#contact" },
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => setSticky(window.scrollY > 0));
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed w-full top-0 left-0 z-[999]
      ${sticky
        ? "backdrop-blur-xl bg-white/60 dark:bg-gray-900/80 shadow-xl shadow-cyan-500/10"
        : "bg-transparent"
      }
      transition-all duration-500`}
    >
      <div className="flex items-center justify-between">

        {/* LOGO */}
        <div className="mx-7">
          <motion.h4
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{
              rotateX: 15,
              rotateY: -15,
              scale: 1.05,
            }}
            transition={{ type: "spring", stiffness: 200 }}
            className="text-gray-900 dark:text-white text-4xl uppercase font-bold cursor-pointer"
          >
            AB<span className="text-cyan-600 drop-shadow-lg">BA</span>CI
          </motion.h4>
        </div>

        <div className="flex flex-row gap-2 items-center">

          {/* DARK MODE BUTTON */}
          <motion.button
            whileHover={{ rotate: 15, scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 200 }}
            onClick={toggleDarkMode}
            className="ml-4 text-2xl text-gray-800 dark:text-white hover:text-cyan-500 dark:hover:text-cyan-400"
          >
            {darkMode ? <MdOutlineLightMode /> : <MdLightMode />}
          </motion.button>

          {/* DESKTOP MENU */}
          <div className="hidden md:block px-7 py-2 rounded-bl-full">
            <ul className="flex items-center gap-1 py-2 text-lg font-medium text-gray-900 dark:text-white">
              {menuLinks.map((menu, i) => (
                <motion.li
                  key={i}
                  whileHover={{
                    y: -3,
                    scale: 1.1,
                    rotateX: 5,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="px-6 hover:text-cyan-500 dark:hover:text-cyan-400 hover:drop-shadow-[0_0_10px_rgba(6,182,212,0.6)]"
                >
                  <a href={menu.link}>{menu.name}</a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* MOBILE ICON */}
          <div
            onClick={() => setOpen(!open)}
            className="md:hidden z-[999] text-3xl cursor-pointer m-5 text-gray-900 dark:text-white"
          >
            <ion-icon name="menu"></ion-icon>
          </div>

        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ x: "100%", rotate: 6 }}
              animate={{ x: 0, rotate: 0 }}
              exit={{ x: "100%", rotate: 6 }}
              transition={{ duration: 0.5 }}
              className="md:hidden fixed top-0 right-0 h-screen w-2/3 backdrop-blur-xl bg-white/70 dark:bg-gray-900 shadow-xl"
            >
              <ul className="flex flex-col justify-center h-full gap-10 text-lg font-medium text-gray-900 dark:text-white">
                {menuLinks.map((menu, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ scale: 1.2, x: 10 }}
                    onClick={() => setOpen(false)}
                    className="px-8 hover:text-cyan-500 dark:hover:text-cyan-400"
                  >
                    <a href={menu.link}>{menu.name}</a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* GLOW LINE */}
      <div className="h-[1px] bg-gradient-to-r from-cyan-500 via-transparent to-cyan-500 opacity-40" />
    </motion.nav>
  );
}
