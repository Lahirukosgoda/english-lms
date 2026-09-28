function Testimonials() {
  const testimonials = [
    { bg: "#eef2ff", quote: "My daughter in Grade 3 used to dread English lessons. With this platform, she asks to practice phonics games every afternoon! Highly recommended.", avatar: "/assets/avatar-sarah.jpg", name: "Sarah Henderson", role: "Parent of Grade 3 Student" },
    { bg: "#fefce8", quote: "The grammar and quiz systems helped me leap from a C grade to an A in my school tests. Doing short lessons every day makes studying really easy.", avatar: "/assets/avatar-ryan.jpg", name: "Ryan K.", role: "Grade 8 Student" },
    { bg: "#ecfdf5", quote: "As a working mother, finding structured academic materials is tough. The grade-by-grade lessons align perfectly with what my kids learn at school.", avatar: "/assets/avatar-michelle.jpg", name: "Michelle Tan", role: "Parent of Grade 6 & 11 Students" },
  ];

  return (
    <section className="px-10 py-16 text-center">
      <h2 className="text-3xl font-extrabold text-gray-900">What Parents & Students Say</h2>
      <p className="text-gray-500 mt-2 max-w-xl mx-auto">
        Real stories from our warm learning community. Discover how we help students speak English with confidence.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-10 max-w-5xl mx-auto text-left">
        {testimonials.map((t) => (
          <div key={t.name} className="rounded-2xl p-6" style={{ backgroundColor: t.bg }}>
            <p className="text-sm text-gray-700 italic">"{t.quote}"</p>
            <div className="flex items-center gap-3 mt-5">
              <img src={t.avatar} alt={t.name} className="w-9 h-9 rounded-full object-cover" />
              <div>
                <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                <p className="text-xs text-gray-500">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;