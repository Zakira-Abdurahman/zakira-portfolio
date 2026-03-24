function Projects() {
  const projects = [
    {
      title: 'SmartFace Attendance',
      role: 'Full-Stack Developer',
      tech: ['React', 'FastAPI', 'PostgreSQL', 'OpenCV', 'FaceNet'],
      desc: 'Facial recognition attendance system with role-based dashboards (admin/teacher) and offline kiosk mode. Achieved 96% accuracy.',
      gradient: 'from-indigo-600 to-purple-700',
      icon: 'fas fa-user-check',
      github: '#',
      demo: '#',
    },
    {
      title: 'Digital Meal Card System',
      role: 'Intern @ Ethiopian Airlines',
      tech: ['React', 'C#', 'MySQL', 'REST API'],
      desc: 'Production system for meal balance tracking, real-time deduction and reporting. Served 500+ employees daily.',
      gradient: 'from-emerald-600 to-teal-600',
      icon: 'fas fa-utensils',
      github: '#',
      demo: '#',
    },
    {
      title: 'ML Price Predictor',
      role: 'Personal Project',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'Flask'],
      desc: 'Housing price prediction model with 88% R², deployed as a lightweight API for demo.',
      gradient: 'from-rose-600 to-pink-600',
      icon: 'fas fa-chart-line',
      github: '#',
      demo: '#',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center bg-linear-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent mb-12">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="group bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className={`bg-linear-to-r ${proj.gradient} h-40 flex items-center justify-center`}>
                <i className={`${proj.icon} text-6xl text-white drop-shadow-lg`}></i>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white">{proj.title}</h3>
                <p className="text-indigo-300 text-sm mt-1">{proj.role}</p>
                <div className="flex flex-wrap gap-2 my-4">
                  {proj.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-indigo-900/30 text-indigo-300 rounded-full text-xs border border-indigo-500/30">
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-5">{proj.desc}</p>
                <div className="flex gap-4">
                  <a href={proj.github} className="text-sm flex items-center gap-1 text-gray-300 hover:text-purple-300 transition">
                    <i className="fab fa-github"></i> Code
                  </a>
                  <a href={proj.demo} className="text-sm flex items-center gap-1 text-gray-300 hover:text-purple-300 transition">
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;