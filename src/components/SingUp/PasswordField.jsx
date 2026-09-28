import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

function PasswordField({ label, value, onChange, placeholder }) {
  const [show, setShow] = useState(false);

  return (
    <div>
      <label className="block text-sm font-semibold text-slate-900 mb-2">
        {label}
      </label>

      <div className="flex items-center h-[52px] px-4 rounded-xl border border-slate-200 bg-white focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
        <input
          type={show ? "text" : "password"}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="flex-1 bg-transparent outline-none text-slate-900 placeholder:text-slate-400"
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          className="text-slate-500 hover:text-slate-700"
        >
          {show ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
    </div>
  );
}

export default PasswordField;