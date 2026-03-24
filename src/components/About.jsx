function About() {
  return (
    <section id="about" className="py-32 px-6 bg-linear-to-b from-slate-900/50 to-gray-900/80">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-black bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-indigo-400 to-purple-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <div className="flex items-start gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <i className="fas fa-graduation-cap text-2xl text-indigo-400 mt-1 shrink-0"></i>
              <div>
                <p>Computer Science graduate from <strong className="text-white font-semibold">Ambo University</strong> with a strong foundation in algorithms and software architecture.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <i className="fas fa-code text-2xl text-indigo-400 mt-1 shrink-0"></i>
              <div>
                <p>Built production-ready solutions including a <strong className="text-purple-400">facial recognition attendance system</strong> and a <strong className="text-purple-400">digital meal card platform</strong> used by Ethiopian Airlines staff.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <i className="fas fa-brain text-2xl text-indigo-400 mt-1 shrink-0"></i>
              <div>
                <p>Self-taught, results-driven developer proficient in full-stack (React, FastAPI, C#) and AI/ML (OpenCV, Scikit-learn). I thrive on solving complex problems with elegant code.</p>
              </div>
            </div>
            
            <div className="flex gap-4 pt-6 flex-wrap">
              <span className="px-4 py-2 bg-indigo-600/30 text-indigo-300 rounded-full text-sm border border-indigo-500/50 font-semibold">
                <i className="far fa-calendar-alt mr-1"></i> 2+ years exp.
              </span>
              <span className="px-4 py-2 bg-indigo-600/30 text-indigo-300 rounded-full text-sm border border-indigo-500/50 font-semibold">
                <i className="fas fa-code mr-1"></i> 15+ projects
              </span>
              <span className="px-4 py-2 bg-indigo-600/30 text-indigo-300 rounded-full text-sm border border-indigo-500/50 font-semibold">
                <i className="fas fa-users mr-1"></i> Team player
              </span>
            </div>
          </div>
          
          {/* Right Education */}
          <div className="bg-linear-to-br from-indigo-950/40 to-purple-950/30 rounded-3xl p-8 border border-purple-500/30 backdrop-blur-sm shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <i className="fas fa-graduation-cap text-purple-400"></i>
              Education & Certifications
            </h3>
            <div className="space-y-6">
              <div className="p-6 bg-white/10 rounded-2xl border border-white/20">
                <p className="text-purple-300 font-bold text-xl mb-2">BSc in Computer Science</p>
                <p className="text-gray-300 mb-2">Ambo University | 2020 – 2024</p>
                <p className="text-sm text-gray-400">
                  - Graduated with distinction • Senior project: AI-based attendance system
                </p>
              </div>
              <div className="p-6 bg-white/10 rounded-2xl border border-white/20">
                <p className="text-purple-300 font-bold text-xl mb-2">Full Stack Web Development</p>
                <p className="text-gray-300">Self-paced / Online (Meta, freeCodeCamp)</p>
              </div>
              <div className="p-6 bg-white/10 rounded-2xl border border-white/20">
                <p className="text-purple-300 font-bold text-xl mb-2">Machine Learning Specialization</p>
                <p className="text-gray-300">DeepLearning.AI | 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;