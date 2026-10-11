import { useState } from "react";
import { Search, SlidersHorizontal, ArrowUpDown } from "lucide-react";

function SearchBar({ onSearch, sortLabel, onSortClick, onFilterClick }) {
  const [draft, setDraft] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(draft.trim());
  };

  const handleChange = (e) => {
    setDraft(e.target.value);
    if (e.target.value === "") onSearch(""); // clearing the box resets results
  };

  return (
    <div className="flex items-center gap-3">
      <form
        onSubmit={handleSubmit}
        className="flex-1 flex items-center gap-3 h-[52px] pl-4 pr-2 bg-white border border-slate-200 rounded-xl transition-all focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100"
      >
        <Search size={18} className="text-slate-400 shrink-0" />
        <input
          type="text"
          value={draft}
          onChange={handleChange}
          placeholder="Search courses, skills, or topics"
          className="flex-1 bg-transparent outline-none text-sm text-slate-800 placeholder:text-slate-400"
        />
        <button
          type="submit"
          className="px-4 py-1.5 rounded-lg bg-blue-50 text-blue-600 text-xs font-semibold hover:bg-blue-600 hover:text-white transition-colors active:scale-95"
        >
          Search
        </button>
      </form>

      <button
        onClick={onFilterClick}
        className="h-[52px] px-5 flex items-center gap-2 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 hover:border-blue-300 hover:shadow-md transition-all active:scale-95"
      >
        <SlidersHorizontal size={16} className="text-blue-600" />
        Filters
      </button>

      <button
        onClick={onSortClick}
        className="h-[52px] px-5 flex items-center gap-2 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 hover:border-blue-300 hover:shadow-md transition-all active:scale-95"
      >
        <ArrowUpDown size={16} className="text-blue-600" />
        Sort: {sortLabel}
      </button>
    </div>
  );
}

export default SearchBar;