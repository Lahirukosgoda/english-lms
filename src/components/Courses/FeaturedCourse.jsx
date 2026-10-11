import { ArrowRight } from "lucide-react";
import CourseImage from "./CourseImage.jsx";
import CourseProgress from "./CourseProgress.jsx";

function FeaturedCourse({ grade, topic, title, description, lessons, minutes, progress, image }) {
  return (
    <div className="group bg-white rounded-3xl border border-slate-100 shadow-sm p-5 grid md:grid-cols-[minmax(0,440px)_1fr] gap-8 items-center transition-shadow duration-300 hover:shadow-xl hover:shadow-blue-600/10">
      <div className="h-60 rounded-3xl overflow-hidden">
        <CourseImage
          src={image}
          alt={title}
          className="transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div>
        <p className="text-xs text-slate-500">
          {topic} • Grade {grade}
        </p>
        <h3 className="text-2xl font-semibold text-slate-900 mt-2">{title}</h3>
        <p className="text-sm text-slate-500 mt-2">{description}</p>
        <p className="text-sm text-slate-800 mt-3">
          {lessons} Lessons • {minutes} min each
        </p>

        <div className="max-w-md mt-4">
          <CourseProgress value={progress} large />
        </div>

        <button className="mt-5 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-md shadow-blue-600/25 transition-all active:scale-95">
          Continue Learning
          <ArrowRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>
      </div>
    </div>
  );
}

export default FeaturedCourse;