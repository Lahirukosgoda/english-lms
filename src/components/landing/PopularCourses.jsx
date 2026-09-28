function PopularCourses() {
  const courses = [
    { image: "/assets/course-phonics.jpg", badge: "Grades 1-3", title: "Phonics & Easy Vocabulary", description: "Perfect start for young learners. Learn vowel sounds, sentence basics, and essential words." },
    { image: "/assets/course-grammar.jpg", badge: "Grades 4-6", title: "Grammar & Simple Sentences", description: "Develop intermediate skills. Mastering tenses, daily conversational skills, and storytelling." },
    { image: "/assets/course-writing.jpg", badge: "Grades 7-9", title: "Creative Writing & Speaking", description: "Advance academic expression. Learn structured essays, high-vocabulary speaking, and debate basics." },
    { image: "/assets/course-essay.jpg", badge: "Grades 10-11", title: "Advanced Essay Excellence", description: "Prepare for college and high-level exams. Perfect vocabulary, reading analytics, and composition." },
  ];

  return (
    <section className="px-10 py-16 text-center">
      <h2 className="text-3xl font-extrabold text-gray-900">Popular Courses</h2>
      <p className="text-gray-500 mt-2">
        Our trending courses loved by thousands of active students, updated regularly.
      </p>

      <div className="grid md:grid-cols-4 gap-6 mt-10 max-w-6xl mx-auto text-left">
        {courses.map((c) => (
          <div key={c.title} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <img src={c.image} alt={c.title} className="w-full h-36 object-cover" />
            <div className="p-4">
              <span className="inline-block bg-blue-50 text-blue-600 text-xs font-medium px-2.5 py-1 rounded-full">
                {c.badge}
              </span>
              <h3 className="font-semibold text-gray-900 mt-3">{c.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{c.description}</p>
              <a href="#" className="inline-flex items-center gap-1 text-sm text-blue-600 font-medium mt-3 hover:underline">
                Explore Course <span>›</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PopularCourses;