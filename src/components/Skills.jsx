function Skills() {
  const skills = [
    { name: 'Python', level: 'Advanced', icon: 'fab fa-python' },
    { name: 'React', level: 'Advanced', icon: 'fab fa-react' },
    { name: 'FastAPI', level: 'Intermediate', icon: 'fas fa-bolt' },
    { name: 'PostgreSQL', level: 'Advanced', icon: 'fas fa-database' },
    { name: 'OpenCV', level: 'Intermediate', icon: 'fas fa-eye' },
    { name: 'C# / .NET', level: 'Intermediate', icon: 'fas fa-code' },
    { name: 'Tailwind CSS', level: 'Advanced', icon: 'fab fa-css3-alt' },
    { name: 'Git/GitHub', level: 'Advanced', icon: 'fab fa-git-alt' },
    { name: 'Machine Learning', level: 'Intermediate', icon: 'fas fa-brain' },
    { name: 'Docker', level: 'Basic', icon: 'fab fa-docker' },
  ];

  return (
    <section id="skills" className="py-24 bg-gray-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent mb-12">
          Technical Arsenal
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-gray-700/50 border border-indigo-800/40 rounded-xl p-5 text-center transition-all duration-300 hover:scale-105 hover:border-purple-500 hover:shadow-xl group"
            >
              <i className={`${skill.icon} text-3xl text-indigo-400 group-hover:text-purple-400 transition`}></i>
              <h4 className="text-white font-bold mt-3">{skill.name}</h4>
              <span className="text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded-full inline-block mt-2">
                {skill.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;