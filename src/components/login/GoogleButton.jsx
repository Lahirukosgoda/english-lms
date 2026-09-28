function GoogleButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors"
    >
      <span className="text-indigo-500 font-bold">G</span>
      Continue with Google
    </button>
  );
}

export default GoogleButton;