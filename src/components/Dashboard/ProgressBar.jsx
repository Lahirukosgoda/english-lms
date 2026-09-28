function ProgressBar({ value, color = "bg-blue-600", showLabel = false }) {
  return (
    <div className="flex items-center gap-3 w-full">
      <div className="flex-1 h-1.5 bg-slate-200 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full ${color}`}
          style={{ width: `${value}%` }}
        />
      </div>
      {showLabel && (
        <span className="text-xs text-slate-500 font-medium">{value}%</span>
      )}
    </div>
  );
}

export default ProgressBar;