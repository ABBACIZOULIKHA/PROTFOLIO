import React, { useEffect, useRef, useState } from "react";

// ✅ Import your certificate images
import efset from "../images/certificates/efset.png";
import devops from "../images/certificates/devops.png";
import cnn from "../images/certificates/cnn.png";
import nlp from "../images/certificates/nlp.png";
import ml from "../images/certificates/ml.png";
import sql from "../images/certificates/sql.png";
import methodology from "../images/certificates/methodology.png";
import r from "../images/certificates/r.png";
import visualization from "../images/certificates/visualization.png";
import clean from "../images/certificates/clean.png";
import onramp from "../images/certificates/onramp.png";
import aiBusiness from "../images/certificates/ai_business.png";
import advSql from "../images/certificates/adv_sql.png";
import langchain from "../images/certificates/langchain.png";
import pandas from "../images/certificates/pandas.png";
import numpy from "../images/certificates/numpy.png";
import vizAll from "../images/certificates/viz_all.png";
import tf2 from "../images/certificates/tf2.png";
import chatgpt from "../images/certificates/chatgpt.png";
import dataEng from "../images/certificates/dataeng.png";
import llm from "../images/certificates/llm.png";
import spring from "../images/certificates/spring.png";
import scraping from "../images/certificates/scraping.png";
import files from "../images/certificates/files.png";

export default function Certifications() {

  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6); // ✅ show first 6 only

  const certificates = [
    { title: "EF SET English Certificate C1", org: "EF SET", image: efset, category: "Language", link: "https://cert.efset.org/nxvvJx" },
    { title: "Spring Boot for Beginners", org: "Amigoscode", image: spring, category: "Software Engineering", link: "#" },
    { title: "Cloud Computing & DevOps", org: "RDSI", image: devops, category: "DevOps", link: "https://drive.google.com/file/d/1yCLiJIOMaBJHgA4dXDPls9IXEEHwuMZN/view?usp=sharing" },

    { title: "CNN with TensorFlow", org: "365 Data Science", image: cnn, category: "AI", link: "https://learn.365datascience.com/certificates/CC-9E316485A3/" },
    { title: "NLP for AI", org: "365 Data Science", image: nlp, category: "AI", link: "https://learn.365datascience.com/certificates/CC-931EA90CBE/" },
    { title: "Machine Learning with Python", org: "Coursera", image: ml, category: "AI", link: "https://www.coursera.org/account/accomplishments/verify/FVBX6RXUZDKG?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course" },
    { title: "Deep Learning Onramp", org: "MathWorks", image: onramp, category: "AI", link: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=e66dc152-5838-4ecb-86b5-a92000c21911&" },
    { title: "Deep Learning with TensorFlow 2", org: "365 Data Science", image: tf2, category: "AI", link: "https://learn.365datascience.com/certificates/CC-AAD5915DED/" },
    { title: "Intro to LLMs", org: "365 Data Science", image: llm, category: "AI", link: "https://learn.365datascience.com/certificates/CC-46661AC743/" },
    { title: "ChatGPT & Generative AI", org: "365 Data Science", image: chatgpt, category: "AI", link: "https://learn.365datascience.com/certificates/CC-E2508BF69E/" },
    { title: "AI for Business Success", org: "365 Data Science", image: aiBusiness, category: "AI", link: "https://learn.365datascience.com/certificates/CC-2791A79F99/" },

    { title: "Databases & SQL for Data Science", org: "IBM", image: sql, category: "Data", link: "https://www.coursera.org/account/accomplishments/verify/WYABARYVA3RQ?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course" },
    { title: "Advanced SQL for Data Engineering", org: "365 Data Science", image: advSql, category: "Data", link: "https://learn.365datascience.com/certificates/CC-AC1FCDB5BF/" },
    { title: "Intro to Data Engineering", org: "365 Data Science", image: dataEng, category: "Data", link: "https://learn.365datascience.com/certificates/CC-0084D30B89/" },
    { title: "Data Science Methodology", org: "Coursera", image: methodology, category: "Data", link: "https://www.coursera.org/account/accomplishments/certificate/Z3NEC42ERWWX" },
    { title: "Data Cleaning and Preprocessing with pandas", org: "365 Data Science", image: pandas, category: "Data", link: "https://learn.365datascience.com/certificates/CC-372592C8FA/" },
    { title: "Data Preprocessing with NumPy", org: "365 Data Science", image: numpy, category: "Data", link: "https://learn.365datascience.com/certificates/CC-5BB60A41BC/" },
    { title: "Data Visualization Course with Python, R, Tableau, and Excel", org: "365 Data Science", image: vizAll, category: "Data", link: "https://learn.365datascience.com/certificates/CC-83C0A3BF88/" },
    { title: "Data Analysis with R", org: "Coursera", image: r, category: "Data", link: "https://www.coursera.org/account/accomplishments/verify/63822SB2KYAB?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course" },
    { title: "Process Data from Dirty to Clean", org: "Coursera", image: clean, category: "Data", link: "https://www.coursera.org/account/accomplishments/certificate/BG6DU225ZKWJ" },
    // { title: "Art of Visualization", org: "Coursera", image: visualization, category: "Data", link: "#" },

    { title: "Web Scraping and API Fundamentals in Python", org: "365 Data Science", image: scraping, category: "Software Engineering", link: "https://learn.365datascience.com/certificates/CC-9B16E09E44/" },
    { title: "Working with Text Files in Python", org: "365 Data Science", image: files, category: "Software Engineering", link: "https://learn.365datascience.com/certificates/CC-F3BCD23770/" },
  ];

  const categories = ["All", "AI", "Data", "Software Engineering", "DevOps", "Language"];

  // ✅ Handle filtering
  const filtered =
    activeCategory === "All"
      ? certificates
      : certificates.filter(c => c.category === activeCategory);

  // ✅ Apply "Load More" only to All
  const displayed =
    activeCategory === "All"
      ? filtered.slice(0, visibleCount)
      : filtered;

  // ✅ Reset on category change
  useEffect(() => {
    setVisibleCount(6);
  }, [activeCategory]);

  const cardsRef = useRef([]);

  // ✅ Animations
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("show-cert");
      });
    });

    cardsRef.current.forEach(card => card && observer.observe(card));
    return () => observer.disconnect();
  }, [displayed]);

  return (
    <section
      id="certifications"
      className="py-12 px-6 bg-gradient-to-br from-slate-100 to-white dark:from-gray-900 dark:to-gray-950"
    >
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold dark:text-white">
            Certifications & <span className="text-cyan-600">Credentials</span>
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Continuous learning journey
          </p>
        </div>

        {/* CATEGORIES */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all 
                ${activeCategory === cat
                  ? "bg-cyan-600 text-white scale-105 shadow-lg"
                  : "bg-gray-200 dark:bg-gray-800 hover:bg-cyan-500/20"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* CERTIFICATES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {displayed.map((cert, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="cert-item bg-white dark:bg-gray-800/80 rounded-xl shadow-lg border dark:border-gray-700"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="h-44 w-full object-cover hover:scale-105 transition"
              />

              <div className="p-5">
                <h3 className="text-sm font-semibold">{cert.title}</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {cert.title} • <span className="text-cyan-600">{cert.org}</span>
                </p>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-4 bg-cyan-600 text-white text-xs px-4 py-2 rounded hover:bg-cyan-700"
                >
                  View Certificate
                </a>
              </div>
            </div>
          ))}

        </div>

        {/* ✅ LOAD MORE BUTTON (ONLY FOR ALL) */}
        {activeCategory === "All" && visibleCount < filtered.length && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisibleCount(prev => prev + 6)}
              className="bg-cyan-600 text-white px-6 py-2 rounded-full shadow hover:scale-105 transition"
            >
              Load More
            </button>
          </div>
        )}
      </div>

      {/* ✅ ANIMATION */}
      <style jsx>{`
        .cert-item {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.6s ease;
        }
        .cert-item.show-cert {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

    </section>
  );
}
