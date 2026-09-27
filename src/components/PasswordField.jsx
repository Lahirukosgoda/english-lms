import { useState } from "react";

function PasswordField({ value, onChange }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mb-4">
      <label className="block text-sm text-gray-700 mb-1.5">Password</label>
      <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2.5 gap-2 focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-100">
        <span className="text-gray-400">🔒</span>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          value={value}
          onChange={onChange}
          className="border-none outline-none flex-1 text-sm w-full bg-transparent"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="text-gray-400"
        >
          {showPassword ? "🙈" : "👁"}
        </button>
      </div>
    </div>
  );
}

export default PasswordField;