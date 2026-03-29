import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPython,
  faReact,
  faCss3Alt,
  faGitAlt,
  faDocker,
} from '@fortawesome/free-brands-svg-icons';
import {
  faBolt,
  faDatabase,
  faEye,
  faCode,
  faBrain,
} from '@fortawesome/free-solid-svg-icons';

function Skills() {
  const skills = [
    { name: 'Python', level: 90, icon: faPython },
    { name: 'React', level: 85, icon: faReact },
    { name: 'FastAPI', level: 75, icon: faBolt },
    { name: 'PostgreSQL', level: 85, icon: faDatabase },
    { name: 'OpenCV', level: 70, icon: faEye },
    { name: 'C# / .NET', level: 70, icon: faCode },
    { name: 'Tailwind CSS', level: 90, icon: faCss3Alt },
    { name: 'Git/GitHub', level: 90, icon: faGitAlt },
    { name: 'Machine Learning', level: 75, icon: faBrain },
    { name: 'Docker', level: 50, icon: faDocker },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-gray-900 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 w-125 h-125 bg-indigo-600/20 blur-[120px] rounded-full -translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent mb-16">
          Technical Skills
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-linear-to-br from-indigo-950/40 to-purple-950/40 p-6 rounded-2xl border border-purple-500/20 backdrop-blur-lg shadow-lg hover:shadow-purple-500/30 transition duration-500 hover:scale-105 group"
            >
              {/* Icon */}
              <div className="text-4xl text-indigo-400 mb-4 group-hover:text-purple-400 transition">
                <FontAwesomeIcon icon={skill.icon} />
              </div>

              {/* Name */}
              <h4 className="text-white font-semibold text-lg mb-3">
                {skill.name}
              </h4>

              {/* Progress Bar */}
              <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                <div
                  className="bg-linear-to-r from-indigo-500 to-purple-500 h-2 rounded-full transition-all duration-700"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>

              {/* Percentage */}
              <p className="text-sm text-gray-400">{skill.level}%</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;