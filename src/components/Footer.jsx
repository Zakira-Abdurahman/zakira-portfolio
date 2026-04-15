import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative bg-gray-900/80 backdrop-blur-sm border-t border-white/10 pt-12 pb-8 text-gray-400 text-sm"
    >
      {/* Subtle gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-purple-500/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Copyright and description */}
        <p className="mb-4 leading-relaxed">
          © {new Date().getFullYear()} Zakira Abdurahman. All rights reserved.
          <br />
          Crafted with precision using{" "}
          <span className="text-indigo-300">React</span> and modern web technologies.
          <br />
          <span className="text-gray-500">
            Passionate about AI & Machine Learning
          </span>
        </p>

        {/* Social links */}
        <div className="flex justify-center gap-8 mb-6 text-xl">
          <a
            href="https://github.com/Zakira-Abdurahman"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-110"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>

          <a
            href="https://linkedin.com/in/zakira-abdurahman-63283b28a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="group inline-flex items-center gap-2 text-gray-400 hover:text-purple-300 transition-all duration-300"
        >
          <span className="text-sm">Back to top</span>
          <svg
            className="w-4 h-4 transition-transform group-hover:-translate-y-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </div>
    </motion.footer>
  );
}

export default Footer;