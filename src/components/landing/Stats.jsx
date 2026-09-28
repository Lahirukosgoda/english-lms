import { useState, useRef } from "react";

function StatCard({ value, label }) {
  const [displayValue, setDisplayValue] = useState(value);
  const [isAnimating, setIsAnimating] = useState(false);
  const frameRef = useRef(null);

  // Pulls out the number part (e.g. "10,000+" -> 10000, "+" and "," ignored)
  const numericTarget = parseInt(value.replace(/[^0-9]/g, ""), 10);
  const suffix = value.replace(/[0-9,]/g, ""); // keeps "+" if present

  const handleMouseEnter = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const duration = 800; // ms
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const current = Math.floor(progress * numericTarget);
      setDisplayValue(current.toLocaleString() + suffix);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      } else {
        setDisplayValue(value); // snap to exact original text at the end
        setIsAnimating(false);
      }
    };

    frameRef.current = requestAnimationFrame(tick);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      className="bg-white rounded-2xl py-8 text-center shadow-sm cursor-pointer hover:shadow-md transition-shadow"
    >
      <p className="text-3xl font-extrabold text-gray-900">{displayValue}</p>
      <p className="text-sm text-gray-500 mt-1">{label}</p>
    </div>
  );
}

function Stats() {
  const stats = [
    { value: "10,000+", label: "Active Students" },
    { value: "500+", label: "Bite-Sized Lessons" },
    { value: "50+", label: "Adaptive Quizzes" },
    { value: "11", label: "Grade Levels Covered" },
  ];

  return (
    <section className="bg-blue-50 px-10 py-14">
      <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {stats.map((s) => (
          <StatCard key={s.label} value={s.value} label={s.label} />
        ))}
      </div>
    </section>
  );
}

export default Stats;