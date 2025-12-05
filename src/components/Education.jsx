import React, { useEffect, useRef } from "react";

export default function Education() {

  const education = [
    {
      degree: "Bachelor’s Degree in Computer Science",
      school: "École Supérieure en Informatique (ESI) - Algiers",
      period: "2020 - 2023",
      note: ""
    },
    {
      degree: "Master’s Degree in Computer Science",
      school: "École Supérieure en Informatique (ESI) - Algiers",
      period: "2023 - 2025",
      note: "High Honors"
    }
  ];

  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.3 }
    );

    itemsRef.current.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="education"
      className="min-h-screen w-full py-12 px-5 bg-gradient-to-br from-slate-100 to-white dark:from-gray-900 dark:to-gray-950 text-gray-900 dark:text-white overflow-hidden"
    >
      <div className="max-w-5xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-4xl font-bold">
          Education <span className="text-cyan-600">Journey</span>
        </h2>
        <p className="mt-3 text-gray-600 dark:text-gray-400">
          Academic background & achievements
        </p>

        <div className="mt-12 relative">

          {/* vertical line */}
          <div className="absolute left-1/2 top-0 w-[2px] h-full bg-cyan-500/50 transform -translate-x-1/2"></div>

          {education.map((item, index) => (
            <div
              key={index}
              ref={el => (itemsRef.current[index] = el)}
              className={`timeline-card relative mb-14 flex ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              } w-full`}
            >

              {/* Card */}
              <div className="w-[90%] sm:w-[45%] bg-white dark:bg-gray-800 shadow-lg rounded-xl p-5 border-l-4 border-cyan-500 hover:scale-105 transition-transform duration-300">

                <h3 className="text-lg font-semibold text-cyan-600">
                  {item.degree}
                </h3>

                <p className="mt-2 font-medium text-gray-800 dark:text-gray-200">
                  {item.school}
                </p>

                <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
                  {item.period}
                </p>

                {item.note && (
                  <span className="inline-block mt-3 px-3 py-1 text-sm rounded-full bg-cyan-600 text-white">
                    {item.note}
                  </span>
                )}
              </div>

              {/* Dot */}
              <div className="absolute top-5 left-1/2 w-4 h-4 bg-cyan-600 rounded-full transform -translate-x-1/2"></div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS ANIMATIONS */}
      <style jsx>{`
        .timeline-card {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s ease;
        }

        .timeline-card.show {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}
