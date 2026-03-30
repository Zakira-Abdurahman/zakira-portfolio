import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

function Projects() {
  const projects = [
    {
      title: "SmartFace Attendance",
      role: "Final Year Project",
      tech: ["React", "FastAPI", "PostgreSQL", "OpenCV", "FaceNet"],
      desc: "An AI-powered facial recognition attendance system featuring role‑based dashboards (admin/teacher), offline kiosk mode, and real‑time reporting. Achieved 96% accuracy and reduced manual effort by 80%. Developed as my final year computer science project.",
      gradient: "from-indigo-600 to-purple-700",
      icon: "fas fa-user-check",
      github: "https://github.com/yourusername/smartface",
      demo: "https://yourdemo.com/smartface",
    },
    {
      title: "Digital Meal Card System",
      role: "Inspired by Internship @ Ethiopian Airlines",
      tech: ["React", "C#", "MySQL", "REST API"],
      desc: "A digital meal card system built for university students to manage meal balances with real‑time tracking, automated deductions, and reporting. Inspired by the meal management system observed during my internship at Ethiopian Airlines, and tailored for academic use.",
      gradient: "from-emerald-600 to-teal-600",
      icon: "fas fa-utensils",
      github: "https://github.com/yourusername/mealcard",
      demo: "https://yourdemo.com/mealcard",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gray-900/50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-purple-900/5 to-transparent pointer-events-none"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-linear-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-indigo-400 to-purple-500 mx-auto rounded-full mt-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((proj, idx) => (
            <Tilt
              key={idx}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              scale={1.02}
              transitionSpeed={2000}
              glareEnable={true}
              glareMaxOpacity={0.3}
              glareColor="#a855f7"
              className="h-full"
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group bg-gray-800/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 h-full flex flex-col"
              >
                {/* Project Media */}
                <div className={`bg-linear-to-r ${proj.gradient} h-48 flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                  <div className="relative z-10 text-center">
                    <i className={`${proj.icon} text-7xl text-white drop-shadow-2xl`}></i>
                    <div className="absolute -inset-10 bg-white/20 rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-white">{proj.title}</h3>
                    <span className="text-xs text-indigo-300 bg-indigo-500/20 px-2 py-1 rounded-full">
                      {proj.role}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 my-4">
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-indigo-900/40 text-indigo-200 rounded-full text-xs border border-indigo-500/30 hover:border-indigo-400/60 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed mb-6">{proj.desc}</p>

                  <div className="flex gap-4 mt-auto pt-4 border-t border-gray-700/50">
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-700/50 text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-300"
                    >
                      <i className="fab fa-github text-lg"></i>
                      <span className="text-sm font-medium">Code</span>
                    </a>
                    <a
                      href={proj.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-linear-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg transition-all duration-300"
                    >
                      <i className="fas fa-external-link-alt text-sm"></i>
                      <span className="text-sm font-medium">Live Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;