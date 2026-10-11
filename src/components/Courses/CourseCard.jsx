import { BookOpen, Timer, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import CourseImage from "./CourseImage.jsx";
import CourseProgress from "./CourseProgress.jsx";

function CourseCard({ grade, topic, title, description, lessons, minutes, progress, image }) {
  return (
    <article className="group h-full flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-600/10">
      <div className="relative h-52 overflow-hidden">
        <CourseImage
          src={image}
          alt={title}
          className="transition-transform duration-500 group-hover:scale-110"
        />
        <span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-blue-600 text-[11px] font-semibold tracking-wide px-3 py-1.5 rounded-full">
          GRADE {grade} • {topic.toUpperCase()}
        </span>
      </div>

      <div className="flex flex-col flex-1 p-4">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <p className="text-sm text-slate-500 mt-2 leading-relaxed">{description}</p>

        <div className="flex items-center gap-2 text-sm text-slate-400 mt-3">
          <BookOpen size={14} />
          <span>{lessons} Lessons</span>
          <span className="w-1 h-1 rounded-full bg-slate-400" />
          <Timer size={14} />
          <span>{minutes} min</span>
        </div>

        <div className="mt-auto pt-5">
          <CourseProgress value={progress} />

          <Link to="/login" className="mt-3 w-full h-10 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-all active:scale-95">
            {progress > 0 ? "Continue Learning" : "Start Learning"}
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default CourseCard;