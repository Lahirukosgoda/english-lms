import { Search, Bell, ChevronDown } from "lucide-react";

function TopBar() {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white border-b border-slate-200">
      <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 w-full max-w-md">
        <Search size={16} className="text-slate-400" />
        <input
          type="text"
          placeholder="Search lessons..."
          className="flex-1 bg-transparent outline-none text-sm text-slate-700 placeholder:text-slate-400"
        />
        <span className="text-[10px] text-slate-400">⌘ K</span>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50">
          <Bell size={18} />
          <span className="absolute top-2 right-2.5 w-1.5 h-1.5 bg-red-500 rounded-full" />
        </button>

        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center">
            LP
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-slate-900">Profile</p>
            <p className="text-xs text-slate-500">Student</p>
          </div>
          <ChevronDown size={16} className="text-slate-400" />
        </div>
      </div>
    </header>
  );
}

export default TopBar;