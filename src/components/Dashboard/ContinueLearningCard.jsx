import { BookOpen, ArrowRight } from "lucide-react";
import ProgressBar from "./ProgressBar.jsx";

function ContinueLearningCard({ tag, title, lesson, percent, onContinue }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 flex items-center gap-6">
      <div className="relative w-44 h-32 rounded-2xl bg-[#0b2447] overflow-hidden shrink-0 flex items-center justify-center">
        <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-blue-800/60" />
        <div className="absolute -bottom-6 -left-4 w-16 h-16 rounded-full bg-teal-800/50" />
        <div className="relative w-16 h-16 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-slate-200">
          <BookOpen size={28} />
        </div>
      </div>

      <div className="flex-1">
        <span className="inline-block bg-blue-50 text-blue-600 text-[11px] font-bold tracking-wide px-2.5 py-1 rounded-md">
          {tag}
        </span>
        <h3 className="text-xl font-semibold text-slate-900 mt-1">{title}</h3>
        <p className="text-sm text-slate-500">
          {lesson} • {percent}% complete
        </p>
        <div className="mt-4">
          <ProgressBar value={percent} showLabel />
        </div>
      </div>

      <button
        onClick={onContinue}
        className="self-start mt-3 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-3 rounded-xl shadow-md shadow-blue-600/25 transition-colors"
      >
        Continue <ArrowRight size={16} />
      </button>
    </div>
  );
}

export default ContinueLearningCard;