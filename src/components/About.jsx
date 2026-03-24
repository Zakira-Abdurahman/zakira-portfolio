function About() {
  return (
    <section id="about" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center bg-linear-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent mb-12">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-5 text-gray-300 text-lg">
            <p>
              🎓 Computer Science graduate from <strong className="text-purple-300">Ambo University</strong> with a passion for turning ideas into scalable, intelligent applications.
            </p>
            <p>
              💡 Built production-ready solutions like a <strong>facial recognition attendance system</strong> and a <strong>digital meal card platform</strong> used by Ethiopian Airlines staff.
            </p>
            <p>
              🚀 Self‑taught, result‑driven developer experienced in full‑stack (React, FastAPI, C#) and AI/ML (OpenCV, Scikit-learn).
            </p>
            <p>
              🌍 I believe in tech that empowers communities — currently exploring LLMs and edge AI.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <span className="px-3 py-1 bg-indigo-900/30 text-indigo-300 rounded-full text-sm border border-indigo-500/30">
                <i className="far fa-calendar-alt mr-1"></i> 2+ years exp.
              </span>
              <span className="px-3 py-1 bg-indigo-900/30 text-indigo-300 rounded-full text-sm border border-indigo-500/30">
                <i className="fas fa-code mr-1"></i> 15+ projects
              </span>
              <span className="px-3 py-1 bg-indigo-900/30 text-indigo-300 rounded-full text-sm border border-indigo-500/30">
                <i className="fas fa-users mr-1"></i> Team player
              </span>
            </div>
          </div>
          <div className="bg-linear-to-br from-indigo-950/40 to-purple-950/30 rounded-2xl p-6 border border-purple-500/20 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              <i className="fas fa-graduation-cap text-purple-400 mr-2"></i>Education & Cert
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-purple-300 font-semibold">BSc in Computer Science</p>
                <p className="text-gray-300">Ambo University | 2020 – 2024</p>
                <p className="text-sm text-gray-400">• Graduated with distinction • Senior project: AI attendance system</p>
              </div>
              <div>
                <p className="text-purple-300 font-semibold">Full Stack Web Development</p>
                <p className="text-gray-300">Self-paced / Online (Meta, freeCodeCamp)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;