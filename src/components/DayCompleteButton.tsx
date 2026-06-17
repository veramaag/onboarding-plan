"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Props {
  dayId: number;
  nextDayId: number | null;
}

export default function DayCompleteButton({ dayId, nextDayId }: Props) {
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("completedDays") ?? "[]") as number[];
    setCompleted(stored.includes(dayId));
  }, [dayId]);

  const markComplete = () => {
    const stored = JSON.parse(localStorage.getItem("completedDays") ?? "[]") as number[];
    if (!stored.includes(dayId)) {
      const updated = [...stored, dayId];
      localStorage.setItem("completedDays", JSON.stringify(updated));
      setCompleted(true);
    }
  };

  return (
    <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
      {!completed ? (
        <button
          onClick={markComplete}
          className="w-full sm:w-auto px-8 py-3 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition-colors text-center"
        >
          ✓ Mark Day {dayId} as Complete
        </button>
      ) : (
        <div className="flex items-center gap-2 px-6 py-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-700 font-semibold">
          <span>✓</span>
          <span>Day {dayId} completed</span>
        </div>
      )}

      {nextDayId ? (
        <Link
          href={`/day/${nextDayId}`}
          className="w-full sm:w-auto px-8 py-3 bg-white border border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-colors text-center"
        >
          Day {nextDayId} →
        </Link>
      ) : (
        <Link
          href="/test"
          className="w-full sm:w-auto px-8 py-3 bg-rose-600 text-white font-semibold rounded-xl hover:bg-rose-700 transition-colors text-center"
        >
          Take the Certification Test →
        </Link>
      )}

      <Link
        href="/"
        className="w-full sm:w-auto px-6 py-3 text-gray-500 hover:text-gray-700 font-medium text-center transition-colors"
      >
        ← Overview
      </Link>
    </div>
  );
}
