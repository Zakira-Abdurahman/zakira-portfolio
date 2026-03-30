import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  const educationItems = [
    {
      title: "BSc in Computer Science",
      institution: "Ambo University",
      period: "2022 – 2026",
      details: "Graduated with distinction • Senior project: AI-based attendance system",
      icon: "fas fa-graduation-cap"
    },
    {
      title: "Full Stack Web Development",
      institution: "Self-paced / Online (Meta, freeCodeCamp)",
      period: "",
      details: "Comprehensive full-stack training with modern frameworks",
      icon: "fas fa-code"
    },
    {
      title: "Machine Learning Specialization",
      institution: "DeepLearning.AI",
      period: "2026",
      details: "Advanced ML concepts, neural networks, and practical applications",
      icon: "fas fa-brain"
    }
  ];

  return (
    <section id="about" className="py-28 px-6 bg-gray-900/40 backdrop-blur-sm relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl -translate-x-1/2 -z-10"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-indigo-400 to-purple-400 mx-auto rounded-full mt-4"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Personal details */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-5"
          >
            {/* Education highlight card */}
            <motion.div
              variants={itemVariants}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-indigo-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10"
            >
              <div className="absolute -inset-0.5 bg-linear-to-r from-indigo-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 transition duration-300 blur-sm"></div>
              <div className="flex items-start gap-4">
                <i className="fas fa-graduation-cap text-3xl text-indigo-400 mt-1"></i>
                <div>
                  <p className="text-gray-200 text-lg leading-relaxed">
                    Computer Science graduate from <strong className="text-white font-semibold">Ambo University</strong> with a strong foundation in algorithms and software architecture.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-indigo-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10"
            >
              <div className="absolute -inset-0.5 bg-linear-to-r from-indigo-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 transition duration-300 blur-sm"></div>
              <div className="flex items-start gap-4">
                <i className="fas fa-code text-3xl text-indigo-400 mt-1"></i>
                <div>
                  <p className="text-gray-200 text-lg leading-relaxed">
                    Built projects including a <strong className="text-purple-400">facial recognition attendance system</strong> as a final year project and a <strong className="text-purple-400">digital meal card system</strong> inspired by experience gained during my internship at Ethiopian Airlines, developed for university use.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-indigo-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10"
            >
              <div className="absolute -inset-0.5 bg-linear-to-r from-indigo-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 transition duration-300 blur-sm"></div>
              <div className="flex items-start gap-4">
                <i className="fas fa-brain text-3xl text-indigo-400 mt-1"></i>
                <div>
                  <p className="text-gray-200 text-lg leading-relaxed">
                    Self-taught, results-driven developer proficient in full-stack (React, FastAPI, C#) and AI/ML (OpenCV, Scikit-learn). I thrive on solving complex problems with elegant code.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Modern Tag Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              {[
                { icon: "fa-lightbulb", label: "Problem Solver", color: "from-amber-500 to-orange-500", textColor: "text-amber-400" },
                { icon: "fa-laptop-code", label: "Full-Stack Development", color: "from-emerald-500 to-teal-500", textColor: "text-emerald-400" },
                { icon: "fa-brain", label: "Machine Learning Enthusiast", color: "from-indigo-500 to-purple-500", textColor: "text-indigo-400" }
              ].map((tag, idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-2xl bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 p-4 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
                >
                  <div className={`absolute inset-0 bg-linear-to-r ${tag.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  <i className={`fas ${tag.icon} text-3xl ${tag.textColor} mb-3 block`}></i>
                  <p className="text-gray-200 font-semibold text-sm md:text-base">{tag.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Education & Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="bg-linear-to-br from-indigo-950/30 to-purple-950/30 rounded-2xl p-6 border border-purple-500/20 backdrop-blur-sm shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <i className="fas fa-graduation-cap text-purple-400"></i>
                Education & Certifications
              </h3>
              <div className="relative pl-6 space-y-8 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-linear-to-b before:from-indigo-400 before:via-purple-400 before:to-indigo-400 before:rounded-full">
                {educationItems.map((item, idx) => (
                  <div key={idx} className="relative group">
                    <div className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-indigo-400 ring-2 ring-purple-500/50 group-hover:scale-125 transition-transform duration-200"></div>
                    <div className="bg-white/5 rounded-xl p-5 border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                      <div className="flex items-start gap-3">
                        <i className={`${item.icon} text-xl text-purple-400 mt-1`}></i>
                        <div className="flex-1">
                          <h4 className="text-white font-bold text-xl">{item.title}</h4>
                          <p className="text-gray-300 text-sm mt-1">{item.institution}</p>
                          {item.period && <p className="text-gray-400 text-xs mt-1">{item.period}</p>}
                          <p className="text-gray-400 text-sm mt-2">{item.details}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;