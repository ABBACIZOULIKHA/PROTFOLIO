import React, { useEffect, useState } from 'react';
import { MdOutlineLightMode, MdLightMode } from "react-icons/md";

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
    window.addEventListener("scroll", () => {
      setSticky(window.scrollY > 0);
    });
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <nav className={`fixed w-full left-0 top-0 z-[999] ${sticky ? "bg-white/60 text-gray-900" : "text-white"} dark:bg-gray-900 dark:text-white`}>
      <div className="flex items-center justify-between">
        <div className="mx-7">
          <h4 className="text-gray-900 dark:text-white text-4xl uppercase font-bold">
            AB<span className="text-cyan-600">BA</span>CI
          </h4>
        </div>
       <div className='flex flex-row gap-2'>
       <button onClick={toggleDarkMode} className="ml-4 text-2xl">
            {darkMode ? <MdOutlineLightMode /> : <MdLightMode className='text-gray-900'/>}
        </button>
        <div className={`flex items-center ${sticky ? "md:bg-white/0 bg-white" : "bg-white"} dark:bg-gray-900 dark:text-white text-gray-900 md:block hidden px-7 py-2 font-medium rounded-bl-full`}>
          <ul className="flex items-center gap-1 py-2 text-lg">
            {menuLinks.map((menu, i) => (
              <li key={i} className="px-6 hover:text-cyan-600">
                <a href={menu.link}>{menu.name}</a>
              </li>
            ))}
          </ul>
          
        </div>
        <div onClick={() => setOpen(!open)} className={`z-[999] ${open ? "text-gray-900" : "text-gray-100"} text-gray-900 dark:text-white text-3xl md:hidden m-5`}>
          <ion-icon name="menu" className="text-gray-900 dark:text-gray-100"></ion-icon>
        </div>
       </div>
        <div className={`md:hidden text-gray-900 absolute w-2/3 h-screen px-7 py-2 font-medium bg-white dark:bg-gray-900 dark:text-white top-0 duration-300 ${open ? "right-0" : "right-[-100%]"}`}>
          <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
            {menuLinks.map((menu, i) => (
              <li onClick={() => setOpen(false)} key={i} className="px-6 hover:text-cyan-600">
                <a href={menu.link}>{menu.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
