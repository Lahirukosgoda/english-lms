import { Flame } from "lucide-react";

function StreakCard({ days = 7 }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center">
          <Flame size={18} />
        </div>
        <p className="text-sm font-semibold text-white">{days} day streak</p>
      </div>
      <p className="text-xs text-slate-300 mt-3 leading-relaxed">
        Keep going! One lesson today keeps your streak alive.
      </p>
    </div>
  );
}

export default StreakCard;