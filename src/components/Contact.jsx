import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gray-900 relative overflow-hidden"
    >
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 w-125 h-125 bg-purple-700/20 blur-[120px] rounded-full -translate-x-1/2"></div>

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent mb-12">
          Let's Connect
        </h2>

        {/* Card */}
        <div className="bg-linear-to-br from-indigo-950/40 to-purple-950/40 rounded-2xl p-10 border border-purple-500/20 backdrop-blur-lg shadow-xl hover:shadow-purple-500/20 transition duration-500">

          {/* Description */}
          <p className="text-gray-200 text-lg mb-10 leading-relaxed">
            I'm actively seeking opportunities in <span className="text-purple-400 font-semibold">Software Engineering</span> and <span className="text-indigo-400 font-semibold">AI/ML</span>.  
            Whether you have a role, a project, or just want to connect — I’d love to hear from you!
          </p>

          {/* Social Icons */}
          <div className="flex justify-center gap-8 mb-10 text-3xl">
            <a
              href="https://github.com/Zakira-Abdurahman"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-purple-400 transition transform hover:scale-125 hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.7)]"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>

            <a
              href="https://www.linkedin.com/in/zakira-abdurahman-63283b28a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition transform hover:scale-125 hover:drop-shadow-[0_0_10px_rgba(96,165,250,0.7)]"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>

            <a
              href="mailto:zakira.abdurahman146@gmail.com"
              className="text-gray-300 hover:text-pink-400 transition transform hover:scale-125 hover:drop-shadow-[0_0_10px_rgba(244,114,182,0.7)]"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>

          {/* CTA Button */}
          <a
            href="mailto:zakira.abdurahman146@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-linear-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-purple-500/40 transition transform hover:-translate-y-1 hover:scale-105"
          >
            <FontAwesomeIcon icon={faPaperPlane} />
            Send Email
          </a>

          {/* Location */}
          <p className="mt-10 text-sm text-gray-400">
            📍 Addis Ababa, Ethiopia | ✉️ zakira.abdurahman146@gmail.com
          </p>

        </div>
      </div>
    </section>
  );
}

export default Contact;