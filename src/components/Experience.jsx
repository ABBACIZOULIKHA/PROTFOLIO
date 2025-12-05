import React, { useEffect, useRef } from "react";

export default function Experience() {

  const experiences = [
    {
      role: "Full Stack Developer",
      company: "ESI Network Service",
      period: "January 2022 – May 2022",
      skills: ["Java", "REST API", "HTML", "CSS", "JavaScript", "Figma", "MVC", "MySQL", "Postman"]
    },
    {
      role: "Software Engineer Intern",
      company: "Algerie Telecom",
      period: "August 2023 – October 2023",
      skills: ["GitHub", "Node.js", "React.js", "MySQL", "Docker"]
    },
    {
      role: "Research Engineer",
      company: "ESI - LCSI (Laboratoire de la Communication dans les Systèmes Informatiques)",
      period: "October 2024 – June 2025",
      skills: [
        "Deep Learning",
        "CNN",
        "Computer Vision",
        "Remote Sensing",
        "Research Methodology",
        "Scientific Writing (LaTeX)",
        "Image Preprocessing",
        "Flask"
      ]
    }
  ];

  const cardsRef = useRef([]);

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

    cardsRef.current.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      className="min-h-screen w-full py-12 px-5 bg-gradient-to-br from-white to-slate-100 dark:from-gray-900 dark:to-gray-950 text-gray-900 dark:text-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-4xl font-bold">
          Professional <span className="text-cyan-600">Experience</span>
        </h2>
        <p className="mt-3 text-gray-600 dark:text-gray-400">
          Engineering, Research & Industry Exposure
        </p>

        <div className="mt-14 relative">

          {/* timeline line */}
          <div className="absolute left-1/2 top-0 w-[2px] h-full bg-cyan-500/40 transform -translate-x-1/2"></div>

          {experiences.map((job, index) => (
            <div
              key={index}
              ref={el => (cardsRef.current[index] = el)}
              className={`experience-card mb-14 flex w-full ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >

              {/* Card */}
              <div className="w-[92%] sm:w-[45%] bg-white dark:bg-gray-800/80 backdrop-blur-md p-6 rounded-xl shadow-xl border-l-4 border-cyan-500 hover:scale-105 transition-transform duration-300">

                <h3 className="text-xl font-semibold text-cyan-600">
                  {job.role}
                </h3>

                <p className="mt-1 font-medium text-gray-800 dark:text-gray-200">
                  {job.company}
                </p>

                <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {job.period}
                </span>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {job.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-cyan-600/10 text-cyan-600 dark:bg-cyan-600/20 dark:text-cyan-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Timeline dot */}
              <div className="absolute left-1/2 top-8 w-4 h-4 bg-cyan-600 rounded-full transform -translate-x-1/2"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Appear Animation */}
      <style jsx>{`
        .experience-card {
          opacity: 0;
          transform: translateY(60px);
          transition: all 0.9s ease;
        }

        .experience-card.show {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}
