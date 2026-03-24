function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-800">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent mb-12">
          Let's Connect
        </h2>
        <div className="bg-linear-to-br from-indigo-950/30 to-purple-950/30 rounded-2xl p-8 border border-purple-500/20 backdrop-blur-sm">
          <p className="text-gray-200 text-lg mb-8">
            I'm actively seeking opportunities in software engineering and AI/ML. Whether you have a role, a project, or just want to chat — let's connect!
          </p>
          <div className="flex justify-center gap-8 mb-8 text-3xl">
            <a
              href="https://github.com/zakira-abdurahman"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-transform hover:scale-110"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/zakira-abdurahman-63283b28a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-transform hover:scale-110"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="mailto:zakira.abdurahman146@gmail.com"
              className="text-gray-300 hover:text-white transition-transform hover:scale-110"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
          <a
            href="mailto:zakira.abdurahman146@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-linear-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
          >
            <i className="fas fa-paper-plane"></i> Send Email
          </a>
          <p className="mt-8 text-sm text-gray-400">
            📍 Addis Ababa, Ethiopia | ✉️ zakira.abdurahman146@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;