function WhyLearnWithUs() {
  const features = [
    { icon: "📖", iconBg: "#dbeafe", title: "Bite-sized Lessons", description: "Short, focused lessons designed for quick learning and maximum comprehension." },
    { icon: "🎯", iconBg: "#fef3c7", title: "Adaptive Quizzes", description: "Fun tests that adapt dynamically to your child's learning pace to boost confidence." },
    { icon: "🎮", iconBg: "#d1fae5", title: "Fun Activities", description: "Interactive educational games that make speaking and writing English feel like playtime." },
  ];

  return (
    <section className="bg-blue-50 px-10 py-16 text-center">
      <h2 className="text-3xl font-extrabold text-gray-900">Why Learn With Us?</h2>
      <p className="text-gray-500 mt-2 max-w-xl mx-auto">
        Everything your child needs to achieve native-level fluency through
        structured, gamified learning.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-10 max-w-5xl mx-auto text-left">
        {features.map((f) => (
          <div key={f.title} className="bg-white rounded-2xl p-6 shadow-sm">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-xl mb-4"
              style={{ backgroundColor: f.iconBg }}
            >
              {f.icon}
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
            <p className="text-sm text-gray-500">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyLearnWithUs;