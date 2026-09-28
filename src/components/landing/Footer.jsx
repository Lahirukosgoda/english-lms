function Footer() {
  const links = ["Home", "Courses", "About Us", "Contact"];
  const socials = ["📷", "📘", "🐦", "▶️"];

  return (
    <footer className="bg-gray-900 text-gray-300 px-10 pt-14 pb-6">
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              E
            </div>
            <span className="font-semibold text-white">
              Edu <span className="text-blue-400">English</span>
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-4 max-w-xs">
            Making English education interactive, playful, and completely aligned with school standards for Grades 1–11.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {links.map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-white transition-colors">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Follow Us</h4>
          <div className="flex gap-3 text-lg">
            {socials.map((icon, i) => (
              <span key={i} className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors">
                {icon}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-2 max-w-6xl mx-auto mt-10 pt-6 border-t border-gray-800 text-xs text-gray-500">
        <p>© 2026 EduEnglish Platform. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;