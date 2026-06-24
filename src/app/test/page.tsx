"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { questions, PASS_SCORE, TOTAL_QUESTIONS } from "@/data/quiz";
import type { Category } from "@/data/quiz";

const CATEGORY_LABELS: Record<Category, string> = {
  company: "Ecoplanet",
  gtm: "GTM & Product",
  procurement: "Procurement",
};

type Phase = "intro" | "quiz" | "results";

export default function TestPage() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [score, setScore] = useState(0);
  const [previousResult, setPreviousResult] = useState<{ score: number; passed: boolean } | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("testResult");
    if (stored) setPreviousResult(JSON.parse(stored));
  }, []);

  const answeredCount = Object.keys(answers).length;
  const allAnswered = answeredCount === TOTAL_QUESTIONS;

  const selectAnswer = (questionId: number, optionIndex: number) => {
    if (phase === "results") return;
    setAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const submitTest = () => {
    const correct = questions.filter(
      (q) => answers[q.id] === q.correctIndex
    ).length;
    setScore(correct);
    const result = { score: correct, passed: correct >= PASS_SCORE };
    localStorage.setItem("testResult", JSON.stringify(result));
    setPhase("results");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const retake = () => {
    setAnswers({});
    setScore(0);
    setPhase("intro");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const passed = score >= PASS_SCORE;

  // ── INTRO ──────────────────────────────────────────────────────────────────
  if (phase === "intro") {
    return (
      <div>
        <nav className="text-sm text-gray-400 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-gray-600 transition-colors">Overview</Link>
          <span>›</span>
          <span className="text-rose-600">Certification Test</span>
        </nav>

        <div className="p-8 bg-white rounded-2xl border border-rose-200 shadow-sm mb-6">
          <div className="flex items-start gap-4 mb-6">
            <span className="text-5xl">📝</span>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Onboarding Certification Test
              </h1>
              <p className="text-gray-600 text-lg">
                Walid, this is your final step to complete the Ecoplanet onboarding.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            {[
              { icon: "❓", label: "12 questions", sub: "Multiple choice" },
              { icon: "✅", label: "75% to pass", sub: "9 out of 12 correct" },
              { icon: "⏱", label: "~30 minutes", sub: "No time limit" },
            ].map((item) => (
              <div key={item.label} className="p-4 bg-rose-50 rounded-xl text-center">
                <div className="text-2xl mb-1">{item.icon}</div>
                <div className="font-bold text-gray-900 text-sm">{item.label}</div>
                <div className="text-xs text-gray-500">{item.sub}</div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-gray-50 rounded-xl text-sm text-gray-600 mb-6">
            <p className="font-semibold text-gray-800 mb-2">What to expect:</p>
            <ul className="space-y-1">
              <li>→ Questions cover all 4 topics: Ecoplanet, Value Engineering, Procurement, and Stakeholders</li>
              <li>→ After submission you&apos;ll see your score and the correct answer for each question</li>
              <li>→ If you don&apos;t pass, review the relevant day&apos;s content and retake</li>
            </ul>
          </div>

          {previousResult && (
            <div className={`p-4 rounded-xl border mb-6 ${previousResult.passed ? "bg-emerald-50 border-emerald-200" : "bg-amber-50 border-amber-200"}`}>
              <p className={`text-sm font-semibold ${previousResult.passed ? "text-emerald-700" : "text-amber-700"}`}>
                Previous attempt: {previousResult.score}/{TOTAL_QUESTIONS} — {previousResult.passed ? "Passed ✓" : "Not passed yet"}
              </p>
            </div>
          )}

          <button
            onClick={() => setPhase("quiz")}
            className="w-full sm:w-auto px-10 py-3 bg-rose-600 text-white font-bold rounded-xl hover:bg-rose-700 transition-colors text-lg"
          >
            Start Test →
          </button>
        </div>
      </div>
    );
  }

  // ── RESULTS ────────────────────────────────────────────────────────────────
  if (phase === "results") {
    const pct = Math.round((score / TOTAL_QUESTIONS) * 100);
    return (
      <div>
        {/* Result banner */}
        <div className={`p-8 rounded-2xl border mb-8 ${passed ? "bg-emerald-50 border-emerald-200" : "bg-amber-50 border-amber-200"}`}>
          <div className="text-center">
            <div className="text-6xl mb-4">{passed ? "🎓" : "📚"}</div>
            <h1 className={`text-3xl font-bold mb-2 ${passed ? "text-emerald-800" : "text-amber-800"}`}>
              {passed ? "You passed! Congratulations!" : "Not quite there yet"}
            </h1>
            <p className={`text-xl font-bold mb-1 ${passed ? "text-emerald-700" : "text-amber-700"}`}>
              {score}/{TOTAL_QUESTIONS} correct — {pct}%
            </p>
            <p className={`text-sm ${passed ? "text-emerald-600" : "text-amber-600"}`}>
              {passed
                ? "You've completed your Ecoplanet onboarding. Welcome aboard!"
                : `You need ${PASS_SCORE} correct to pass (you got ${score}). Review the sections below and try again.`}
            </p>
          </div>

          {passed && (
            <div className="mt-6 p-5 bg-white/70 rounded-xl text-center border border-emerald-200">
              <p className="text-sm text-emerald-700 font-medium mb-1">
                🏆 Onboarding Certificate
              </p>
              <p className="text-lg font-bold text-gray-900">Walid</p>
              <p className="text-sm text-gray-500">
                Successfully completed the Ecoplanet Value Engineer Procurement onboarding
              </p>
            </div>
          )}

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            {!passed && (
              <button
                onClick={retake}
                className="px-8 py-3 bg-amber-600 text-white font-bold rounded-xl hover:bg-amber-700 transition-colors"
              >
                Retake Test
              </button>
            )}
            <Link
              href="/"
              className="px-8 py-3 bg-white border border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors text-center"
            >
              Back to Overview
            </Link>
          </div>
        </div>

        {/* Question breakdown */}
        <h2 className="text-lg font-bold text-gray-900 mb-4">Question Breakdown</h2>
        <div className="space-y-4">
          {questions.map((q) => {
            const chosen = answers[q.id];
            const isCorrect = chosen === q.correctIndex;
            return (
              <div
                key={q.id}
                className={`p-5 rounded-2xl border ${isCorrect ? "bg-emerald-50 border-emerald-200" : "bg-red-50 border-red-200"}`}
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className={`text-lg shrink-0 ${isCorrect ? "text-emerald-600" : "text-red-500"}`}>
                    {isCorrect ? "✓" : "✗"}
                  </span>
                  <div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">
                      Q{q.id} · {CATEGORY_LABELS[q.category]}
                    </span>
                    <p className="text-sm font-semibold text-gray-800 mt-0.5">{q.question}</p>
                  </div>
                </div>

                <div className="ml-7 space-y-1.5">
                  {q.options.map((opt, i) => {
                    const isChosen = chosen === i;
                    const isRight = i === q.correctIndex;
                    return (
                      <div
                        key={i}
                        className={`text-sm px-3 py-2 rounded-lg ${
                          isRight
                            ? "bg-emerald-100 text-emerald-800 font-semibold"
                            : isChosen && !isRight
                            ? "bg-red-100 text-red-700 line-through"
                            : "text-gray-500"
                        }`}
                      >
                        {isRight && "✓ "}
                        {isChosen && !isRight && "✗ "}
                        {opt}
                      </div>
                    );
                  })}
                </div>

                <div className={`ml-7 mt-3 p-3 rounded-lg text-xs ${isCorrect ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"}`}>
                  <strong>Explanation:</strong> {q.explanation}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          {!passed && (
            <button
              onClick={retake}
              className="px-8 py-3 bg-amber-600 text-white font-bold rounded-xl hover:bg-amber-700 transition-colors"
            >
              Retake Test
            </button>
          )}
          <Link
            href="/"
            className="px-8 py-3 bg-white border border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors text-center"
          >
            Back to Overview
          </Link>
        </div>
      </div>
    );
  }

  // ── QUIZ ───────────────────────────────────────────────────────────────────
  return (
    <div>
      {/* Progress bar */}
      <div className="sticky top-14 z-10 bg-gray-50 pt-2 pb-3 -mx-4 sm:-mx-6 px-4 sm:px-6 border-b border-gray-100 mb-6">
        <div className="flex items-center justify-between text-sm mb-1.5">
          <span className="font-semibold text-gray-700">Certification Test</span>
          <span className="text-gray-500">{answeredCount}/{TOTAL_QUESTIONS} answered</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1.5">
          <div
            className="bg-rose-500 h-1.5 rounded-full transition-all duration-300"
            style={{ width: `${(answeredCount / TOTAL_QUESTIONS) * 100}%` }}
          />
        </div>
      </div>

      {/* Questions */}
      <div className="space-y-6 mb-8">
        {questions.map((q) => {
          const chosen = answers[q.id];
          return (
            <div
              key={q.id}
              id={`q-${q.id}`}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
            >
              <div className="px-6 py-4 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
                <span className="text-sm font-bold text-gray-700">
                  Question {q.id}
                </span>
                <span className="text-xs px-2.5 py-1 bg-white border border-gray-200 rounded-full text-gray-500 font-medium">
                  {CATEGORY_LABELS[q.category]}
                </span>
              </div>
              <div className="px-6 py-5">
                <p className="text-base font-semibold text-gray-900 mb-4 leading-relaxed">
                  {q.question}
                </p>
                <div className="space-y-2.5">
                  {q.options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => selectAnswer(q.id, i)}
                      className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition-all ${
                        chosen === i
                          ? "border-rose-400 bg-rose-50 text-rose-800 font-semibold"
                          : "border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      <span className="font-bold mr-2 text-gray-400">
                        {["A", "B", "C", "D"][i]}.
                      </span>
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Submit */}
      <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
        {!allAnswered && (
          <p className="text-sm text-amber-600 font-medium mb-4">
            ⚠ Please answer all {TOTAL_QUESTIONS} questions before submitting ({TOTAL_QUESTIONS - answeredCount} remaining)
          </p>
        )}
        <button
          onClick={submitTest}
          disabled={!allAnswered}
          className={`w-full sm:w-auto px-10 py-3 font-bold rounded-xl transition-colors text-lg ${
            allAnswered
              ? "bg-rose-600 text-white hover:bg-rose-700"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          Submit Test →
        </button>
      </div>
    </div>
  );
}
