import { notFound } from "next/navigation";
import Link from "next/link";
import { days } from "@/data/content";
import DayCompleteButton from "@/components/DayCompleteButton";

export function generateStaticParams() {
  return days.map((d) => ({ id: String(d.id) }));
}

const accentMap: Record<
  string,
  { bg: string; text: string; border: string; badge: string; section: string }
> = {
  emerald: { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200", badge: "bg-emerald-100 text-emerald-700", section: "bg-emerald-50 border-emerald-100" },
  blue:    { bg: "bg-blue-50",    text: "text-blue-700",    border: "border-blue-200",    badge: "bg-blue-100 text-blue-700",    section: "bg-blue-50 border-blue-100" },
  violet:  { bg: "bg-violet-50",  text: "text-violet-700",  border: "border-violet-200",  badge: "bg-violet-100 text-violet-700",  section: "bg-violet-50 border-violet-100" },
  amber:   { bg: "bg-amber-50",   text: "text-amber-700",   border: "border-amber-200",   badge: "bg-amber-100 text-amber-700",   section: "bg-amber-50 border-amber-100" },
  rose:    { bg: "bg-rose-50",    text: "text-rose-700",    border: "border-rose-200",    badge: "bg-rose-100 text-rose-700",    section: "bg-rose-50 border-rose-100" },
};

export default async function DayPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const dayId = parseInt(id, 10);
  const day = days.find((d) => d.id === dayId);
  if (!day) notFound();

  const a = accentMap[day.accent] ?? accentMap.emerald;
  const nextDayId = dayId < 5 ? dayId + 1 : null;
  const prevDayId = dayId > 1 ? dayId - 1 : null;
  const hours = Math.round((day.estimatedMinutes / 60) * 10) / 10;

  return (
    <div>
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400 mb-6 flex items-center gap-2">
        <Link href="/" className="hover:text-gray-600 transition-colors">
          Overview
        </Link>
        <span>›</span>
        <span className={a.text}>Day {day.id}: {day.title}</span>
      </nav>

      {/* Header */}
      <div className={`p-8 rounded-2xl border ${a.border} ${a.bg} mb-8`}>
        <div className="flex items-start gap-4">
          <span className="text-5xl">{day.emoji}</span>
          <div>
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${a.badge}`}>
                Day {day.id}
              </span>
              <span className="text-xs text-gray-500">⏱ ~{hours}h</span>
              {prevDayId && (
                <Link href={`/day/${prevDayId}`} className="text-xs text-gray-400 hover:text-gray-600">
                  ← Day {prevDayId}
                </Link>
              )}
              {nextDayId && (
                <Link href={`/day/${nextDayId}`} className="text-xs text-gray-400 hover:text-gray-600">
                  Day {nextDayId} →
                </Link>
              )}
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-1">{day.title}</h1>
            <p className={`text-lg font-medium ${a.text}`}>{day.subtitle}</p>
          </div>
        </div>

        {/* Objectives */}
        <div className="mt-6 p-4 bg-white/60 rounded-xl">
          <h2 className="text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">
            Learning Objectives
          </h2>
          <ul className="space-y-2">
            {day.objectives.map((obj, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-700">
                <span className={`shrink-0 mt-0.5 font-bold ${a.text}`}>{i + 1}.</span>
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Content sections */}
      <div className="space-y-6 mb-8">
        {day.sections.map((section) => (
          <div
            key={section.id}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
          >
            <div className={`px-6 py-4 border-b ${a.section}`}>
              <h2 className="text-lg font-bold text-gray-900">{section.title}</h2>
            </div>
            <div className="px-6 py-5">
              {/* Body — render line breaks and numbered/bullet lists */}
              <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed">
                {section.body.split("\n").map((line, i) => {
                  if (line.trim() === "") return <br key={i} />;
                  if (line.startsWith("• ") || line.match(/^\d+\.\s/)) {
                    return (
                      <p key={i} className="text-sm text-gray-700 leading-relaxed ml-2">
                        {line}
                      </p>
                    );
                  }
                  if (line.startsWith("Stage ") || line.startsWith("Step ") || /^[A-Z]{2,}/.test(line)) {
                    return (
                      <p key={i} className="text-sm font-semibold text-gray-800 mt-4 first:mt-0">
                        {line}
                      </p>
                    );
                  }
                  return (
                    <p key={i} className="text-sm text-gray-700 leading-relaxed">
                      {line}
                    </p>
                  );
                })}
              </div>

              {/* Highlight callout */}
              {section.highlight && (
                <div className={`mt-4 p-4 rounded-xl border ${a.section} text-sm ${a.text} font-medium`}>
                  {section.highlight}
                </div>
              )}

              {/* Key points */}
              {section.keyPoints && section.keyPoints.length > 0 && (
                <div className="mt-5 pt-5 border-t border-gray-100">
                  <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">
                    Key Points
                  </h3>
                  <ul className="space-y-2">
                    {section.keyPoints.map((point, i) => (
                      <li key={i} className="flex gap-2 text-sm text-gray-700">
                        <span className={`shrink-0 ${a.text} font-bold`}>→</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Resources */}
      {day.resources.length > 0 && (
        <div className="mb-8 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
          <h2 className="text-base font-bold text-gray-900 mb-4">Resources & Links</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {day.resources.map((res, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50"
              >
                <span className="text-lg shrink-0">
                  {res.type === "video" ? "🎬" : res.type === "tool" ? "🔧" : res.type === "article" ? "📰" : "📄"}
                </span>
                <div className="min-w-0">
                  {res.url ? (
                    <a
                      href={res.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-blue-600 hover:underline block"
                    >
                      {res.title}
                    </a>
                  ) : (
                    <span className="text-sm font-semibold text-gray-400">{res.title}</span>
                  )}
                  <p className="text-xs text-gray-500 mt-0.5">{res.description}</p>
                  {!res.url && (
                    <span className="text-xs text-amber-600 font-medium">📌 Link to be added</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Key takeaways */}
      <div className={`mb-8 p-6 rounded-2xl border ${a.border} ${a.bg}`}>
        <h2 className="text-base font-bold text-gray-900 mb-4">
          Key Takeaways — Day {day.id}
        </h2>
        <ul className="space-y-3">
          {day.keyTakeaways.map((t, i) => (
            <li key={i} className="flex gap-3 text-sm text-gray-700">
              <span className={`shrink-0 font-bold text-lg leading-5 ${a.text}`}>✓</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Complete / nav */}
      <DayCompleteButton dayId={day.id} nextDayId={nextDayId} />
    </div>
  );
}
