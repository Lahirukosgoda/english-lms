import { useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../landing/Header.jsx";
import Reveal from "./Reveal.jsx";
import SearchBar from "./SearchBar.jsx";
import GradeFilter from "./GradeFilter.jsx";
import FeaturedCourse from "./FeaturedCourse.jsx";
import CourseCard from "./CourseCard.jsx";
import Pagination from "./Pagination.jsx";
import CoursesFooter from "./CoursesFooter.jsx";
import { courses, recommended } from "./coursesData.js";

const PAGE_SIZE = 6;
const SORTS = ["Popular", "A–Z", "Progress"];

function CoursesPage() {
  const [query, setQuery] = useState("");
  const [searchParams] = useSearchParams();
  const gradeParam = Number(searchParams.get("grade"));
  const initialGrade = gradeParam >= 1 && gradeParam <= 11 ? gradeParam : 1;
  const [grade, setGrade] = useState(initialGrade);
  const [sortIndex, setSortIndex] = useState(0);
  const [page, setPage] = useState(1);
  const listRef = useRef(null);
  const gradeFilterRef = useRef(null);

  const sort = SORTS[sortIndex];

  // 1. filter
  const filtered = courses.filter((c) => {
    const matchesGrade = grade === null || c.grade === grade;
    const text = `${c.title} ${c.topic} ${c.description}`.toLowerCase();
    return matchesGrade && text.includes(query.toLowerCase());
  });

  // 2. sort
  const sorted = [...filtered].sort((a, b) => {
    if (sort === "A–Z") return a.title.localeCompare(b.title);
    if (sort === "Progress") return b.progress - a.progress;
    return a.id - b.id; // Popular
  });

  // 3. paginate
  const totalPages = Math.max(1, Math.ceil(sorted.length / PAGE_SIZE));
  const start = (page - 1) * PAGE_SIZE;
  const visible = sorted.slice(start, start + PAGE_SIZE);

  const handleSearch = (text) => {
    setQuery(text);
    setPage(1);
  };

  const handleGrade = (g) => {
    setGrade(g);
    setPage(1);
  };

  const handleSort = () => {
    setSortIndex((sortIndex + 1) % SORTS.length);
    setPage(1);
  };

  const handlePageChange = (p) => {
    setPage(p);
    listRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <main className="max-w-[1280px] mx-auto px-10 pt-10">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-slate-900 animate-fade-up">
          Find the right English course for your grade
        </h1>
        <p
          className="text-slate-600 mt-3 animate-fade-up"
          style={{ animationDelay: "100ms" }}
        >
          Browse lessons, quizzes, and speaking practice aligned to school
          standards. Start with a quick search, filter by grade, or sort by what
          works best for your learning style.
        </p>

        {/* Search + grade filter */}
        <Reveal delay={150} className="mt-6">
          <SearchBar
            onSearch={handleSearch}
            sortLabel={sort}
            onSortClick={handleSort}
            onFilterClick={() => gradeFilterRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })}
          />
        </Reveal>

        <div ref={gradeFilterRef} className="mt-6 scroll-mt-6">
          <Reveal delay={250}>
            <GradeFilter selected={grade} onSelect={handleGrade} />
          </Reveal>
        </div>

        {/* Recommended */}
        <Reveal className="mt-12">
          <h2 className="text-3xl font-bold text-slate-900">Recommended for you</h2>
          <p className="text-sm text-slate-600 mt-1 mb-4">
            Based on your Grade 5 learning path
          </p>
          <FeaturedCourse {...recommended} />
        </Reveal>

        {/* All courses */}
        <div ref={listRef} className="mt-14 scroll-mt-6">
          <Reveal>
            <h2 className="text-2xl font-bold text-slate-900">All Courses</h2>
            <p className="text-sm text-slate-500 mt-1 mb-5">
              Explore courses designed for your grade and learning level.
            </p>
          </Reveal>

          {visible.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-100 py-16 text-center animate-fade-up">
              <p className="font-semibold text-slate-900">No courses found</p>
              <p className="text-sm text-slate-500 mt-1">
                Try a different search or choose another grade.
              </p>
            </div>
          ) : (
            <div
              key={`${grade}-${query}-${sort}-${page}`}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {visible.map((course, i) => (
                <Reveal key={course.id} delay={i * 80}>
                  <CourseCard {...course} />
                </Reveal>
              ))}
            </div>
          )}

          {sorted.length > 0 && (
            <Pagination
              page={page}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              from={start + 1}
              to={start + visible.length}
              total={sorted.length}
            />
          )}
        </div>
      </main>

      <CoursesFooter />
    </div>
  );
}

export default CoursesPage;