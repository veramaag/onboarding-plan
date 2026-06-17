"use client";

import { useEffect, useState } from "react";

const DAY_TITLES = [
  "Ecoplanet & Mission",
  "Value Engineering",
  "Procurement",
  "Stakeholders",
  "Review & Test",
];

export default function ProgressOverview() {
  const [completed, setCompleted] = useState<number[]>([]);
  const [testPassed, setTestPassed] = useState(false);

  useEffect(() => {
    const storedDays = JSON.parse(
      localStorage.getItem("completedDays") ?? "[]"
    ) as number[];
    setCompleted(storedDays);
    const storedScore = localStorage.getItem("testResult");
    if (storedScore) {
      const result = JSON.parse(storedScore) as { passed: boolean };
      setTestPassed(result.passed);
    }
  }, []);

  const completedCount = completed.length + (testPassed ? 1 : 0);
  const totalSteps = 6; // 5 days + test
  const pct = Math.round((completedCount / totalSteps) * 100);

  if (completed.length === 0 && !testPassed) return null;

  return (
    <div className="mb-8 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-semibold text-gray-700">Your Progress</span>
        <span className="text-sm text-gray-500">{pct}% complete</span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-2 mb-4">
        <div
          className="bg-emerald-500 h-2 rounded-full transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className="flex flex-wrap gap-2">
        {DAY_TITLES.map((title, i) => {
          const dayId = i + 1;
          const isDone = completed.includes(dayId);
          return (
            <span
              key={dayId}
              className={`text-xs px-3 py-1 rounded-full font-medium ${
                isDone
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-gray-100 text-gray-400"
              }`}
            >
              {isDone ? "✓ " : ""}Day {dayId}: {title}
            </span>
          );
        })}
        <span
          className={`text-xs px-3 py-1 rounded-full font-medium ${
            testPassed
              ? "bg-rose-100 text-rose-700"
              : "bg-gray-100 text-gray-400"
          }`}
        >
          {testPassed ? "✓ " : ""}Certification Test
        </span>
      </div>
    </div>
  );
}
