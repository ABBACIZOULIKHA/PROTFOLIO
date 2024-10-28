import React from 'react'

const About = () => {
  const info = [
    { text: "Years experience", count: "03" },
    { text: "Completed Projects", count: "8" },
    //{ text: "Companies Work", count: "06" },
  ];
  return (
    <section id="about" className="pb-10 bg-white/60 text-gray-900 dark:text-white dark:bg-gray-900">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-700 dark:text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
              Hello! I'm a last year student at the École Nationale Supérieure d'Informatique (ESI), with three years of experience in full-stack development. My passion for coding and problem-solving has driven me to explore various technologies and frameworks, allowing me to build dynamic and responsive web applications.
              </p>
              <div className="flex mt-10 items-center gap-7 justify-center">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-gray-900 dark:text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              {/* <a href="./src/assets/Code_a_program.pdf" download> */}
                <button className="btn-primary bg-cyan-600 rounded-md px-2 py-1 ">Download CV</button>
              {/* </a> */}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
export default About;