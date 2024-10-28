import React from 'react'
import About from "../components/about";
import Bot from "../components/Bot";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Hireme from "../components/Hireme";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import Skills from "../components/Skills";

export default function HomePage() {
  return (
    <div className='bg-white/60 dark:bg-gray-900'>
   <Navbar/>
   <Bot/>
   <Hero/>
   <About/>
   <Skills/>
   <Project/>
   {/* <Hireme/> */}
   <Contact/>
   <Footer/>
    </div>
  )
}
