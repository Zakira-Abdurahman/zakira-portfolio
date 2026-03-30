import { useInView } from "framer-motion";
import { useRef } from "react";
import Tilt from "react-parallax-tilt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPython,
  faReact,
  faCss3Alt,
  faGitAlt,
  faDocker,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBolt,
  faDatabase,
  faEye,
  faCode,
  faBrain,
} from "@fortawesome/free-solid-svg-icons";

function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skills = [
    { name: "Python", level: 90, icon: faPython },
    { name: "React", level: 85, icon: faReact },
    { name: "FastAPI", level: 75, icon: faBolt },
    { name: "PostgreSQL", level: 85, icon: faDatabase },
    { name: "OpenCV", level: 70, icon: faEye },
    { name: "C# / .NET", level: 70, icon: faCode },
    { name: "Tailwind CSS", level: 90, icon: faCss3Alt },
    { name: "Git/GitHub", level: 90, icon: faGitAlt },
    { name: "Machine Learning", level: 75, icon: faBrain },
    { name: "Docker", level: 50, icon: faDocker },
  ];

  return (
    <section id="skills" className="py-24 bg-gray-900/50 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl -translate-x-1/2 animate-pulse"></div>
      
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold bg-linear-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent mb-16">
          Technical Skills
        </h2>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {skills.map((skill, idx) => (
            <Tilt
              key={skill.name}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              scale={1.05}
              transitionSpeed={2000}
              glareEnable={true}
              glareMaxOpacity={0.3}
              glareColor="#a855f7"
              className="h-full"
            >
              <div
                className="bg-linear-to-br from-indigo-950/40 to-purple-950/40 p-6 rounded-2xl border border-purple-500/20 backdrop-blur-lg shadow-lg transition-all duration-300 group h-full flex flex-col"
              >
                {/* Icon with animated glow */}
                <div className="relative mb-4 flex justify-center">
                  <div className="absolute inset-0 bg-purple-500 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                  <FontAwesomeIcon
                    icon={skill.icon}
                    className="text-5xl text-indigo-400 group-hover:text-purple-400 transition-all duration-300 transform group-hover:scale-110"
                  />
                </div>

                {/* Skill name */}
                <h4 className="text-white font-bold text-xl mb-4 tracking-tight">
                  {skill.name}
                </h4>

                {/* Progress bar container */}
                <div className="mt-auto">
                  <div className="w-full bg-gray-700/50 rounded-full h-2.5 mb-2 overflow-hidden">
                    <div
                      className="bg-linear-to-r from-indigo-500 to-purple-500 h-2.5 rounded-full transition-all duration-1000 ease-out relative"
                      style={{ width: isInView ? `${skill.level}%` : "0%" }}
                    >
                      {/* Animated shine effect on progress bar */}
                      <div className="absolute inset-0 bg-white/20 w-full h-full animate-pulse"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400">Proficiency</span>
                    <span className="text-sm font-mono text-indigo-300">
                      {skill.level}%
                    </span>
                  </div>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;