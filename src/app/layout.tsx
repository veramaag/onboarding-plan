import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ecoplanet Onboarding — Walid",
  description: "Your personalised 5-day onboarding plan at Ecoplanet",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 antialiased">
        <header className="bg-white border-b border-gray-100 sticky top-0 z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2 font-bold text-emerald-700 text-lg">
              <span>🌍</span>
              <span>Ecoplanet Onboarding</span>
            </a>
            <a
              href="/test"
              className="text-sm font-medium text-gray-500 hover:text-rose-600 transition-colors"
            >
              Certification Test →
            </a>
          </div>
        </header>
        <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
          {children}
        </main>
        <footer className="text-center py-8 text-xs text-gray-400">
          Ecoplanet · Onboarding Plan for Walid
        </footer>
      </body>
    </html>
  );
}
