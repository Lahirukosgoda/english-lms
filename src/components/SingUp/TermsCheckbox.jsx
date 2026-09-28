import { Check } from "lucide-react";

function TermsCheckbox({ checked, onChange }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />

      <span
        className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 border-2 transition-colors ${
          checked
            ? "bg-blue-600 border-blue-600 text-white"
            : "bg-white border-slate-300"
        }`}
      >
        {checked && <Check size={12} strokeWidth={3} />}
      </span>

      <span className="text-sm text-slate-500">
        I agree to the{" "}
        <a href="#" className="font-semibold text-blue-600 hover:underline">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#" className="font-semibold text-blue-600 hover:underline">
          Privacy Policy
        </a>
        .
      </span>
    </label>
  );
}

export default TermsCheckbox;