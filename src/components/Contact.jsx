import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPaperPlane, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  const email = "zakiraabdurahman146@gmail.com";

  return (
    <section id="contact" className="py-24 bg-gray-900/50 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-purple-700/20 rounded-full blur-3xl -translate-x-1/2"></div>

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold bg-linear-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent mb-12"
        >
          Let's Connect
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-md rounded-2xl p-8 md:p-10 border border-white/10 shadow-xl hover:shadow-purple-500/20 transition-all duration-500"
        >
          <p className="text-gray-200 text-lg leading-relaxed mb-10">
            I'm actively seeking opportunities in{" "}
            <span className="text-purple-400 font-semibold">Software Engineering</span> and{" "}
            <span className="text-indigo-400 font-semibold">AI/ML</span>.<br />
            Whether you have a role, a project, or just want to connect — I'd love to hear from you!
          </p>

          <div className="flex justify-center gap-8 mb-10 text-3xl">
            <a
              href="https://github.com/Zakira-Abdurahman"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-purple-400 transition-all duration-300 transform hover:scale-110"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/zakira-abdurahman-63283b28a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href={`mailto:${email}`}
              className="text-gray-300 hover:text-pink-400 transition-all duration-300 transform hover:scale-110"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>

          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-linear-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <FontAwesomeIcon icon={faPaperPlane} />
            Send Email
          </a>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-2 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span>Addis Ababa, Ethiopia</span>
            </div>
            <span className="hidden sm:inline">|</span>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>{email}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;