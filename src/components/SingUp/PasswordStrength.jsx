import { getStrength } from "./passwordChecks.js";

function PasswordStrength({ password }) {
  if (!password) return null;

  const { score, label, bar, text } = getStrength(password);

  return (
    <div className="mt-2">
      <p className={`text-sm ${text}`}>{label}</p>

      <div className="flex gap-2 mt-2">
        {[1, 2, 3, 4].map((n) => (
          <div
            key={n}
            className={`h-1 flex-1 rounded-full ${n <= score ? bar : "bg-slate-200"}`}
          />
        ))}
      </div>
    </div>
  );
}

export default PasswordStrength;