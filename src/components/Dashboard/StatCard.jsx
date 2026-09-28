function StatCard({ label, value, note, icon: Icon, iconBg, iconColor }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 flex items-center justify-between">
      <div>
        <p className="text-sm text-slate-600">{label}</p>
        <div className="flex items-baseline gap-2 mt-1">
          <span className="text-3xl font-bold text-slate-900">{value}</span>
          <span className="text-xs text-slate-400">{note}</span>
        </div>
      </div>
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${iconBg} ${iconColor}`}>
        <Icon size={22} />
      </div>
    </div>
  );
}

export default StatCard;