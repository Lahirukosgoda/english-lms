import { Check } from "lucide-react";
import { getPasswordChecks } from "./passwordChecks.js";

function PasswordRules({ password }) {
  if (!password) return null;

  return (
    <div className="flex items-center gap-4 mt-2.5">
      {getPasswordChecks(password).map((rule) => (
        <span
          key={rule.label}
          className={`flex items-center gap-1 text-xs ${
            rule.passed ? "text-emerald-600" : "text-slate-400"
          }`}
        >
          <Check size={12} strokeWidth={3} />
          {rule.label}
        </span>
      ))}
    </div>
  );
}

export default PasswordRules;