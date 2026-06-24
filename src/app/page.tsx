import Link from "next/link";
import { days } from "@/data/content";
import ProgressOverview from "@/components/ProgressOverview";

const accentMap: Record<string, { bg: string; text: string; border: string; badge: string }> = {
  emerald: { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200", badge: "bg-emerald-100 text-emerald-700" },
  blue:    { bg: "bg-blue-50",    text: "text-blue-700",    border: "border-blue-200",    badge: "bg-blue-100 text-blue-700" },
  violet:  { bg: "bg-violet-50",  text: "text-violet-700",  border: "border-violet-200",  badge: "bg-violet-100 text-violet-700" },
  amber:   { bg: "bg-amber-50",   text: "text-amber-700",   border: "border-amber-200",   badge: "bg-amber-100 text-amber-700" },
  rose:    { bg: "bg-rose-50",    text: "text-rose-700",    border: "border-rose-200",    badge: "bg-rose-100 text-rose-700" },
};

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <div className="mb-8 p-8 bg-white rounded-2xl border border-gray-100 shadow-sm">
        <div className="flex items-start gap-4">
          <span className="text-5xl">👋</span>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome, Walid!
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              This is your personalised 5-day onboarding plan as{" "}
              <strong>Value Engineer Procurement</strong> at Ecoplanet. Work
              through each day in order, mark them complete, and finish with
              the certification test.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">
                📅 5 days
              </span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">
                ⏱ ~9 hours total
              </span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">
                🎓 Certification test at the end
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Progress (client component — only renders if progress exists) */}
      <ProgressOverview />

      {/* Day cards */}
      <div className="space-y-4">
        {days.map((day) => {
          const a = accentMap[day.accent] ?? accentMap.emerald;
          const hours = Math.round(day.estimatedMinutes / 60 * 10) / 10;
          return (
            <Link
              key={day.id}
              href={`/day/${day.id}`}
              className={`block p-6 bg-white rounded-2xl border ${a.border} hover:shadow-md transition-all group`}
            >
              <div className="flex items-start gap-5">
                <div className={`w-14 h-14 flex items-center justify-center rounded-xl text-2xl shrink-0 ${a.bg}`}>
                  {day.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1 flex-wrap">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${a.badge}`}>
                      Day {day.id}
                    </span>
                    <span className="text-xs text-gray-400">{hours}h</span>
                  </div>
                  <h2 className="text-lg font-bold text-gray-900 group-hover:text-gray-700">
                    {day.title}
                  </h2>
                  <p className={`text-sm font-medium mb-3 ${a.text}`}>{day.subtitle}</p>
                  <ul className="space-y-1">
                    {day.objectives.slice(0, 3).map((obj, i) => (
                      <li key={i} className="text-sm text-gray-500 flex gap-2">
                        <span className="shrink-0 mt-0.5 text-gray-300">→</span>
                        <span>{obj}</span>
                      </li>
                    ))}
                    {day.objectives.length > 3 && (
                      <li className="text-sm text-gray-400">
                        +{day.objectives.length - 3} more objectives
                      </li>
                    )}
                  </ul>
                </div>
                <span className="text-gray-300 group-hover:text-gray-500 transition-colors text-xl shrink-0 self-center">
                  →
                </span>
              </div>
            </Link>
          );
        })}

        {/* Test card */}
        <Link
          href="/test"
          className="block p-6 bg-white rounded-2xl border border-rose-200 hover:shadow-md transition-all group"
        >
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 flex items-center justify-center rounded-xl text-2xl shrink-0 bg-rose-50">
              📝
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-rose-100 text-rose-700">
                  Final Test
                </span>
                <span className="text-xs text-gray-400">~60 min</span>
              </div>
              <h2 className="text-lg font-bold text-gray-900 group-hover:text-gray-700">
                Certification Test
              </h2>
              <p className="text-sm font-medium text-rose-600 mb-2">
                32 questions · Pass with 75% (24/32 correct)
              </p>
              <p className="text-sm text-gray-500">
                Complete all 5 days before taking this test. Pass to receive your
                Ecoplanet onboarding certificate.
              </p>
            </div>
            <span className="text-gray-300 group-hover:text-gray-500 transition-colors text-xl shrink-0 self-center">
              →
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
