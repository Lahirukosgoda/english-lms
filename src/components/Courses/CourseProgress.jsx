import useInView from "./useInView.js";

function CourseProgress({ value, large = false }) {
  const [ref, inView] = useInView();

  return (
    <div ref={ref}>
      <div
        className={`flex items-center justify-between mb-1.5 ${
          large ? "text-base" : "text-xs"
        }`}
      >
        <span className="text-slate-700">Progress</span>
        <span className="font-semibold text-blue-600">{value}% Complete</span>
      </div>

      <div
        className={`bg-slate-200 rounded-full overflow-hidden ${
          large ? "h-2" : "h-1.5"
        }`}
      >
        <div
          className="h-full bg-blue-600 rounded-full transition-[width] duration-1000 ease-out"
          style={{ width: inView ? `${value}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export default CourseProgress;