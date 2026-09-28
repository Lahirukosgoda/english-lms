import { ArrowUpRight } from "lucide-react";
import ProgressBar from "./ProgressBar.jsx";

function SubjectCard({ icon: Icon, iconBg, iconColor, title, done, total, barColor }) {
  const percent = Math.round((done / total) * 100);

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-4 hover:shadow-md transition-shadow cursor-pointer">
      <div className="flex items-start justify-between">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${iconBg} ${iconColor}`}>
          <Icon size={20} />
        </div>
        <span className="w-7 h-7 rounded-md bg-slate-100 flex items-center justify-center text-slate-500">
          <ArrowUpRight size={14} />
        </span>
      </div>

      <h3 className="font-semibold text-slate-900 mt-10">{title}</h3>
      <p className="text-xs text-slate-400 mt-1 mb-3">
        {done} of {total} lessons
      </p>
      <ProgressBar value={percent} color={barColor} showLabel />
    </div>
  );
}

export default SubjectCard;