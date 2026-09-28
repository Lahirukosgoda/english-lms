import { useState } from "react";
import { LayoutDashboard, BookOpen, Library, HelpCircle, BarChart3, User } from "lucide-react";
import NavItem from "./NavItem.jsx";
import StreakCard from "./StreakCard.jsx";

function Sidebar() {
  const [active, setActive] = useState("Dashboard");

  const items = [
    { label: "Dashboard", icon: LayoutDashboard },
    { label: "My Learning", icon: BookOpen },
    { label: "Lessons", icon: Library },
    { label: "Quizzes", icon: HelpCircle },
    { label: "Progress", icon: BarChart3 },
    { label: "Profile", icon: User },
  ];

  return (
    <aside className="w-64 shrink-0 bg-[#0b2447] min-h-screen flex flex-col p-5">
      <div className="mb-6 px-1">
        <p className="text-[10px] tracking-[0.15em] text-slate-400 font-semibold">
          LEARNING SPACE
        </p>
        <p className="text-lg font-semibold text-white">English Studies</p>
      </div>

      <nav className="flex flex-col gap-1.5">
        {items.map((item) => (
          <NavItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            active={active === item.label}
            onClick={() => setActive(item.label)}
          />
        ))}
      </nav>

      <div className="mt-auto">
        <StreakCard days={7} />
      </div>
    </aside>
  );
}

export default Sidebar;