function GradeFilter({ selected, onSelect }) {
  const grades = Array.from({ length: 11 }, (_, i) => i + 1);

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
      <h2 className="font-bold text-slate-900">Explore by grade</h2>
      <p className="text-xs text-slate-500 mt-1">
        Choose your grade level to see lessons, quizzes, and speaking practice
        aligned to school standards.
      </p>

      <div className="flex flex-wrap gap-3 mt-4">
        {grades.map((g) => (
          <button
            key={g}
            onClick={() => onSelect(selected === g ? null : g)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 active:scale-95 ${
              selected === g
                ? "bg-blue-600 text-white shadow-md shadow-blue-600/30 scale-105"
                : "bg-blue-50 text-blue-600 hover:bg-blue-100 hover:-translate-y-0.5"
            }`}
          >
            Grade {g}
          </button>
        ))}
      </div>
    </div>
  );
}

export default GradeFilter;