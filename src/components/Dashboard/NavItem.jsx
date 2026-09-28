function NavItem({ icon: Icon, label, active = false, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
        active
          ? "bg-blue-800/70 text-white"
          : "text-slate-300 hover:bg-white/5 hover:text-white"
      }`}
    >
      <Icon size={18} />
      <span>{label}</span>
      {active && <span className="w-1.5 h-1.5 rounded-full bg-white ml-1" />}
    </button>
  );
}

export default NavItem;