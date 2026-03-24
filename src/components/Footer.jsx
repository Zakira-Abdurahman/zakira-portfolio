function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-indigo-900/40 py-8 text-center text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto px-6">
        <p>© {new Date().getFullYear()} Zakira Abdurahman — Built with React & Tailwind CSS. All insights, passion, code.</p>
        <div className="flex justify-center gap-5 mt-3">
          <a href="#hero" className="hover:text-purple-300 transition">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;