import { Check } from "lucide-react";

function FormField({ label, type = "text", value, onChange, placeholder, valid = false }) {
  return (
    <div className="mb-5">
      <label className="block text-sm font-semibold text-slate-900 mb-2">
        {label}
      </label>

      <div className="flex items-center h-[52px] px-4 rounded-xl border border-slate-200 bg-white focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="flex-1 bg-transparent outline-none text-slate-900 placeholder:text-slate-400"
        />

        {valid && (
          <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <Check size={12} strokeWidth={3} />
          </span>
        )}
      </div>
    </div>
  );
}

export default FormField;