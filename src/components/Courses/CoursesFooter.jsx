function CoursesFooter() {
  const curriculum = [
    "Elementary (Grades 1–5)",
    "Middle School (Grades 6–8)",
    "High School (Grades 9–11)",
    "Grammar & Composition",
  ];
  const quickLinks = [
    "Home Overview",
    "About the Academy",
    "Parent Help Desk",
    "Student Portal",
  ];

  const LinkList = ({ title, items }) => (
    <div>
      <h4 className="font-semibold text-slate-900 mb-4">{title}</h4>
      <ul className="space-y-3 text-sm text-slate-600">
        {items.map((item) => (
          <li key={item}>
            <a
              href="#"
              className="inline-block transition-all duration-200 hover:text-blue-600 hover:translate-x-1"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="bg-indigo-50/70 mt-20">
      <div className="max-w-[1280px] mx-auto px-10 pt-12 pb-8">
        <div className="grid md:grid-cols-[1.6fr_1fr_1fr] gap-10">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                S
              </div>
              <span className="text-xl font-medium text-slate-900">Success English</span>
            </div>
            <p className="text-slate-600 mt-4 max-w-md leading-relaxed">
              Empowering K-12 students with structured, confidence-building
              English language curriculum from foundational phonics to advanced
              literature analysis.
            </p>
          </div>

          <LinkList title="Curriculum" items={curriculum} />
          <LinkList title="Quick Links" items={quickLinks} />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-3 mt-10 pt-6 border-t border-indigo-100 text-sm text-slate-600">
          <p>© 2025 Success English Learning Systems. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Academic Standards</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default CoursesFooter;