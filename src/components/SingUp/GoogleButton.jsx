function GoogleButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full h-[52px] flex items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white font-semibold text-slate-900 hover:bg-slate-50 transition-colors"
    >
      <span className="text-blue-600 font-bold text-lg">G</span>
      Continue with Google
    </button>
  );
}

export default GoogleButton;