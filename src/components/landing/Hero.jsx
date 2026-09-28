function Hero() {
  return (
    <section className="bg-blue-50 px-10 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
            Learn English.
            <br />
            Build Your <span className="text-blue-600">Future.</span>
          </h1>
          <p className="text-gray-600 mt-4 max-w-md">
            Interactive lessons, fun quizzes, and tailored curricula designed
            especially for Grades 1 through 11.
          </p>
          <div className="flex gap-4 mt-6">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-full transition-colors">
              Start Learning
            </button>
            <button className="border border-blue-500 text-blue-600 font-medium px-6 py-2.5 rounded-full hover:bg-blue-100 transition-colors">
              View Courses
            </button>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <img
            src="/assets/hero-illustration.png"
            alt="Kids learning English illustration"
            className="w-full h-auto rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;