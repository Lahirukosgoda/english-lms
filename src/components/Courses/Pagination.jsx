import { ChevronLeft, ChevronRight } from "lucide-react";

function Pagination({ page, totalPages, onPageChange, from, to, total }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const base =
    "w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-200 active:scale-90";

  return (
    <div className="flex items-center justify-between mt-10">
      <p className="text-sm text-slate-500">
        Showing {from} – {to} of {total} curriculum modules
      </p>

      <div className="flex items-center gap-2">
        <button
          disabled={page === 1}
          onClick={() => onPageChange(page - 1)}
          className={`${base} bg-white text-slate-500 hover:bg-blue-50 disabled:opacity-40 disabled:cursor-not-allowed`}
        >
          <ChevronLeft size={16} />
        </button>

        {pages.map((p) => (
          <button
            key={p}
            onClick={() => onPageChange(p)}
            className={`${base} ${
              p === page
                ? "bg-blue-600 text-white shadow-md shadow-blue-600/30 scale-110"
                : "bg-white text-slate-700 hover:bg-blue-50"
            }`}
          >
            {p}
          </button>
        ))}

        <button
          disabled={page === totalPages}
          onClick={() => onPageChange(page + 1)}
          className={`${base} bg-white text-slate-500 hover:bg-blue-50 disabled:opacity-40 disabled:cursor-not-allowed`}
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}

export default Pagination;