import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8 text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Copyright */}
        <p className="mb-3">
          © {new Date().getFullYear()} Zakira Abdurahman — Built with React & Tailwind CSS.
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-4 text-lg">
          <a
            href="https://github.com/Zakira-Abdurahman"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition transform hover:scale-110"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>

          <a
            href="https://linkedin.com/in/YOUR-LINKEDIN"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition transform hover:scale-110"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>

        {/* Back to Top */}
        <div>
          <a
            href="#hero"
            className="hover:text-purple-300 transition"
          >
            Back to top ↑
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;