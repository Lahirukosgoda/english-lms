import { ChevronRight } from "lucide-react";

function ActivityItem({ icon: Icon, iconBg, iconColor, type, typeColor, tag, title, meta }) {
  return (
    <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-100 last:border-b-0 hover:bg-slate-50 cursor-pointer">
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${iconBg} ${iconColor}`}>
        <Icon size={18} />
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-[11px] font-bold tracking-wide">
          <span className={typeColor}>{type}</span>
          <span className="text-slate-400 font-normal ml-2">{tag}</span>
        </p>
        <p className="text-sm font-semibold text-slate-900 truncate">{title}</p>
        <p className="text-xs text-slate-400">{meta}</p>
      </div>

      <ChevronRight size={16} className="text-slate-400" />
    </div>
  );
}

export default ActivityItem;