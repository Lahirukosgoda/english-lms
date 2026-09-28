function InputField({ icon, type, placeholder, value, onChange }) {
  return (
    <div className="mb-4">
      <label className="block text-sm text-gray-700 mb-1.5">Email</label>
      <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2.5 gap-2 focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-100">
        <span className="text-gray-400 flex items-center">{icon}</span>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="border-none outline-none flex-1 text-sm"
        />
      </div>
    </div>
  );
}

export default InputField;