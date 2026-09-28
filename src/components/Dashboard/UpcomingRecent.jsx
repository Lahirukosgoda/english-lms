import { useState } from "react";
import { HelpCircle, Languages, FileEdit, CheckCircle2 } from "lucide-react";
import ActivityItem from "./ActivityItem.jsx";

function UpcomingRecent() {
  const [tab, setTab] = useState("Upcoming");

  const data = {
    Upcoming: [
      {
        icon: HelpCircle, iconBg: "bg-violet-50", iconColor: "text-violet-500",
        type: "QUIZ", typeColor: "text-violet-500", tag: "Due soon",
        title: "Grammar Checkpoint", meta: "Tomorrow • 10 questions",
      },
      {
        icon: Languages, iconBg: "bg-emerald-50", iconColor: "text-emerald-500",
        type: "VOCABULARY", typeColor: "text-emerald-500", tag: "New",
        title: "Everyday Expressions", meta: "Today • 15 new words",
      },
      {
        icon: FileEdit, iconBg: "bg-rose-50", iconColor: "text-rose-500",
        type: "ASSIGNMENT", typeColor: "text-rose-500", tag: "3 days",
        title: "Write a Short Story", meta: "Friday • 300 words",
      },
    ],
    Recent: [
      {
        icon: CheckCircle2, iconBg: "bg-emerald-50", iconColor: "text-emerald-500",
        type: "LESSON", typeColor: "text-emerald-500", tag: "Completed",
        title: "Present Perfect Tense", meta: "Yesterday • Score 90%",
      },
      {
        icon: CheckCircle2, iconBg: "bg-violet-50", iconColor: "text-violet-500",
        type: "QUIZ", typeColor: "text-violet-500", tag: "Completed",
        title: "Reading Basics Quiz", meta: "2 days ago • Score 8/10",
      },
    ],
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-semibold text-slate-900">Upcoming / Recent</h2>
        <div className="flex bg-slate-100 rounded-lg p-0.5 text-xs font-medium">
          {["Upcoming", "Recent"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-3 py-1 rounded-md transition-colors ${
                tab === t ? "bg-white text-slate-900 shadow-sm" : "text-slate-500"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
        {data[tab].map((item) => (
          <ActivityItem key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
}

export default UpcomingRecent;