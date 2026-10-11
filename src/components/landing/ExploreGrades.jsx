import { Link } from "react-router-dom";

function ExploreGrades() {
  const grades = Array.from({ length: 11 }, (_, i) => `Grade ${i + 1}`);

  return (
    <section className="px-10 py-16 text-center">
      <h2 className="text-3xl font-extrabold text-gray-900">Explore Grades</h2>
      <p className="text-gray-500 mt-2 max-w-xl mx-auto">
        Choose your grade level to access personalized English curriculum
        tailored for your school year.
      </p>

      <div className="flex flex-wrap justify-center gap-3 mt-8 max-w-4xl mx-auto">
        {grades.map((grade) => (
          <Link
            key={grade}
            to={`/courses?grade=${grade.replace("Grade ", "")}`}
            className="px-5 py-2 rounded-full text-sm font-medium transition-colors bg-blue-50 text-gray-600 hover:bg-blue-100"
          >
            {grade}
          </Link>
        ))}
      </div>
    </section>
  );
}

export default ExploreGrades;