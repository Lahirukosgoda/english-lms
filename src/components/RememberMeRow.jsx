function RememberMeRow({ checked, onChange }) {
  return (
    <div className="flex items-center justify-between mb-5">
      {/* Left side: checkbox + text */}
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="w-4 h-4 rounded accent-indigo-500 cursor-pointer"
        />
        <span className="text-sm text-gray-600">Remember me</span>
      </label>

      {/* Right side: link */}
      <a href="#" className="text-sm text-indigo-500 hover:underline">
        Forgot password?
      </a>
    </div>
  );
}

export default RememberMeRow;