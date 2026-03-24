import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center text-center px-6 relative overflow-hidden bg-linear-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="relative inline-block">
          <div className="absolute inset-0 rounded-full bg-linear-to-tr from-indigo-500 to-purple-600 blur-xl opacity-70 animate-pulse"></div>
          <img
            src="/zakira-photo.jpg.jpg"
            alt="Zakira Abdurahman"
            className="w-44 h-44 md:w-56 md:h-56 mx-auto rounded-full border-4 border-indigo-400 shadow-2xl object-cover relative z-10 animate-float"
            onError={(e) => (e.target.src = 'https://via.placeholder.com/200?text=Zakira')}
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mt-8 bg-linear-to-r from-white via-indigo-200 to-purple-300 bg-clip-text text-transparent">
          Zakira Abdurahman
        </h1>
        <p className="text-xl md:text-2xl text-indigo-200 font-medium mt-3">
          Software Engineer & ML Enthusiast
        </p>
        <p className="text-gray-300 max-w-2xl mx-auto mt-6 text-base md:text-lg leading-relaxed">
          Building intelligent systems with Python, React, AI, and modern full‑stack tools. Passionate about real-world impact.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center mt-10">
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-linear-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
          >
            Explore Work
          </a>
          <a
            href="/zakira-cv.pdf.pdf"
            download
            className="px-8 py-3 rounded-full border border-indigo-400 text-indigo-300 font-semibold hover:bg-indigo-900/30 transition transform hover:-translate-y-1"
          >
            Download CV
          </a>
        </div>
        <div className="flex justify-center gap-7 mt-10 text-2xl">
          <a
            href="https://github.com/zakira-abdurahman"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-transform hover:scale-110"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/zakira-abdurahman-63283b28a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-transform hover:scale-110"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="mailto:zakira.abdurahman146@gmail.com"
            className="text-gray-300 hover:text-white transition-transform hover:scale-110"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-400 hover:text-purple-300 text-xl">
          <i className="fas fa-chevron-down"></i>
        </a>
      </div>
    </section>
  );
}

export default Hero;