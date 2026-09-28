// import ProgressBar from "./ProgressBar.jsx";
import { BookOpen, BarChart3, HelpCircle, SpellCheck, BookText, PenLine } from "lucide-react";
import Sidebar from "./Sidebar.jsx";
import TopBar from "./TopBar.jsx";
import StatCard from "./StatCard.jsx";
import SectionHeader from "./SectionHeader.jsx";
import ContinueLearningCard from "./ContinueLearningCard.jsx";
import SubjectCard from "./SubjectCard.jsx";
import UpcomingRecent from "./UpcomingRecent.jsx";

function DashboardPage() {
  const userName = "Lahiru";

  const stats = [
    { label: "Lessons", value: "12", note: "3 active this week", icon: BookOpen, iconBg: "bg-blue-50", iconColor: "text-blue-600" },
    { label: "Progress", value: "75%", note: "+8% this month", icon: BarChart3, iconBg: "bg-emerald-50", iconColor: "text-emerald-600" },
    { label: "Quizzes", value: "4", note: "1 due tomorrow", icon: HelpCircle, iconBg: "bg-violet-50", iconColor: "text-violet-500" },
  ];

  const subjects = [
    { icon: SpellCheck, iconBg: "bg-blue-50", iconColor: "text-blue-600", title: "Grammar", done: 8, total: 12, barColor: "bg-blue-600" },
    { icon: BookText, iconBg: "bg-emerald-50", iconColor: "text-emerald-600", title: "Reading", done: 6, total: 10, barColor: "bg-emerald-500" },
    { icon: PenLine, iconBg: "bg-amber-50", iconColor: "text-amber-500", title: "Writing", done: 5, total: 8, barColor: "bg-amber-500" },
  ];

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />

      <div className="flex-1 min-w-0">
        <TopBar />

        <main className="p-8">
          {/* Greeting */}
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">
                Good morning, {userName}! 👋
              </h1>
              <p className="text-sm text-slate-500 mt-1">Ready to continue learning?</p>
            </div>
            <span className="flex items-center gap-2 bg-emerald-50 text-emerald-600 text-xs font-medium px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Weekly goal: 4 of 5 days
            </span>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-5 mt-6">
            {stats.map((s) => (
              <StatCard key={s.label} {...s} />
            ))}
          </div>

          {/* Continue Learning */}
          <div className="mt-8">
            <SectionHeader title="Continue Learning" linkText="View all lessons" />
            <ContinueLearningCard
              tag="ENGLISH"
              title="English Grammar"
              lesson="Lesson 5"
              percent={65}
              onContinue={() => console.log("Continue clicked")}
            />
          </div>

          {/* Subjects + Upcoming */}
          <div className="grid lg:grid-cols-[minmax(0,1.8fr)_minmax(0,1fr)] gap-6 mt-8">
            <div>
              <SectionHeader title="My Subjects" linkText="Browse subjects" />
              <div className="grid sm:grid-cols-3 gap-4">
                {subjects.map((s) => (
                  <SubjectCard key={s.title} {...s} />
                ))}
              </div>
            </div>

            <UpcomingRecent />
          </div>
        </main>
      </div>
    </div>
  );
}

export default DashboardPage;