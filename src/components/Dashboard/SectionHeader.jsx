import { ArrowRight } from "lucide-react";

function SectionHeader({ title, linkText, onLinkClick }) {
  return (
    <div className="flex items-center justify-between mb-3">
      <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
      {linkText && (
        <button
          onClick={onLinkClick}
          className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700"
        >
          {linkText} <ArrowRight size={14} />
        </button>
      )}
    </div>
  );
}

export default SectionHeader;