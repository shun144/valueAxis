"use client";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "ブランドサイトのリニューアル",
    category: "Web Design",
    techs: ["React", "TypeScript", "Figma"],
    thumb:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
    year: "2024",
  },
  {
    id: 2,
    title: "ECサイト開発",
    category: "Frontend",
    techs: ["Next.js", "Tailwind CSS", "Prisma"],
    thumb:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
    year: "2024",
  },
  {
    id: 3,
    title: "管理画面ダッシュボード",
    category: "Development",
    techs: ["React", "D3.js", "GraphQL"],
    thumb:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    year: "2023",
  },
  {
    id: 4,
    title: "デザインシステムの構築",
    category: "Design",
    techs: ["Figma", "Storybook", "CSS"],
    thumb:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    year: "2023",
  },
  {
    id: 5,
    title: "スマホアプリのUI改善",
    category: "UI/UX",
    techs: ["Figma", "React Native", "Expo"],
    thumb:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80",
    year: "2023",
  },
  {
    id: 6,
    title: "AIを使った記事生成ツール",
    category: "Development",
    techs: ["Next.js", "OpenAI API", "Supabase"],
    thumb:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80",
    year: "2024",
  },
];

const techColors: Record<string, string> = {
  React: "bg-sky-100 text-sky-700",
  TypeScript: "bg-blue-100 text-blue-700",
  "Next.js": "bg-gray-100 text-gray-700",
  "Tailwind CSS": "bg-cyan-100 text-cyan-700",
  Figma: "bg-purple-100 text-purple-700",
  Prisma: "bg-indigo-100 text-indigo-700",
  "D3.js": "bg-orange-100 text-orange-700",
  GraphQL: "bg-pink-100 text-pink-700",
  Storybook: "bg-rose-100 text-rose-700",
  CSS: "bg-blue-100 text-blue-600",
  "React Native": "bg-sky-100 text-sky-600",
  Expo: "bg-slate-100 text-slate-600",
  "OpenAI API": "bg-green-100 text-green-700",
  Supabase: "bg-emerald-100 text-emerald-700",
};

function getTechColor(tech: string) {
  return techColors[tech] ?? "bg-gray-100 text-gray-600";
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="min-h-screen bg-gray-50 text-gray-800"
      style={{ fontFamily: "'Nunito', sans-serif" }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap');`}</style>

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <span className="font-extrabold text-lg tracking-tight text-gray-900">
            shun<span className="text-indigo-500">.dev</span>
          </span>

          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-6 text-sm font-semibold text-gray-500">
            <a
              href="#works"
              className="hover:text-indigo-500 transition-colors"
            >
              Works
            </a>
            <a
              href="#about"
              className="hover:text-indigo-500 transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-1.5 rounded-full text-sm font-bold transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="sm:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="sm:hidden bg-white border-t border-gray-100 px-4 py-3 flex flex-col gap-3 text-sm font-semibold text-gray-600">
            <a href="#works" onClick={() => setMenuOpen(false)}>
              Works
            </a>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="text-indigo-500"
            >
              Contact
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-14 pb-12">
        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-indigo-100 flex items-center justify-center text-4xl flex-shrink-0 shadow-sm">
            👩‍💻
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="inline-block w-2 h-2 rounded-full bg-green-400"></span>
              <span className="text-xs text-gray-500 font-semibold">
                転職活動中
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-snug">
              Shun Kano
            </h1>
            <p className="text-gray-500 text-sm mt-1 font-semibold">
              Designer & Developer · Tokyo 🗼
            </p>
          </div>
        </div>

        <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl">
          Shun Kano is a{" "}
          <span className="font-bold text-indigo-500">
            designer and developer
          </span>{" "}
          based in Tokyo.
          UIデザインからフロントエンド実装まで一気通貫で対応できます。
          ユーザーが「使いやすい」と感じるプロダクト作りが得意です 🙌
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {[
            { label: "経験年数", value: "5年+" },
            { label: "プロジェクト", value: "12件" },
            { label: "得意分野", value: "UI/Dev" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 shadow-sm"
            >
              <div className="text-xs text-gray-400 font-semibold">
                {s.label}
              </div>
              <div className="text-base font-extrabold text-gray-800">
                {s.value}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WORKS */}
      <section id="works" className="max-w-5xl mx-auto px-4 sm:px-6 pb-16">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-extrabold text-gray-900">🗂 制作実績</h2>
          <span className="text-xs text-gray-400 font-semibold bg-gray-100 px-3 py-1 rounded-full">
            {projects.length} projects
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group"
            >
              <div className="overflow-hidden">
                <img
                  src={p.thumb}
                  alt={p.title}
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-indigo-400 bg-indigo-50 px-2 py-0.5 rounded-full">
                    {p.category}
                  </span>
                  <span className="text-xs text-gray-400">{p.year}</span>
                </div>
                <h3 className="font-bold text-gray-900 text-sm leading-snug mb-3">
                  {p.title}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {p.techs.map((t) => (
                    <span
                      key={t}
                      className={`text-xs font-semibold px-2 py-0.5 rounded-full ${getTechColor(t)}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-white border-y border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
          <h2 className="text-lg font-extrabold text-gray-900 mb-6">
            👩 About me
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 text-sm text-gray-600 leading-relaxed">
            <p>
              フロントエンドエンジニア2年の経験があります。
              シンプルな設計を目指します
            </p>
            <p>
              現在は新しいチームでの挑戦を探しています。 React / Next.js /
              Typescript をメインに開発をしています
              ユーザー視点を大切にしながら、チームと一緒に良いものを作りたいです
              🌱
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        id="contact"
        className="max-w-5xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <p className="text-xs text-gray-400">© Shun Kano — Portfolio</p>
        <div className="flex items-center gap-4">
          {[
            {
              href: "https://x.com",
              label: "X",
              icon: (
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.733-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
                </svg>
              ),
            },
            {
              href: "https://github.com",
              label: "GitHub",
              icon: (
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              ),
            },
            {
              href: "https://qiita.com",
              label: "Qiita",
              icon: (
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.317 16.516c-1.265.043-2.295-.29-3.09-1-.794-.71-1.19-1.744-1.19-3.1 0-1.346.395-2.42 1.184-3.22.79-.8 1.828-1.2 3.118-1.2.67 0 1.27.1 1.8.3v-1.5h1.6v9.3c-.71.28-1.734.42-3.07.42h-.352zm2.283-6.89c-.43-.17-.9-.26-1.41-.26-.83 0-1.49.27-1.97.82-.48.55-.72 1.29-.72 2.22 0 .94.22 1.66.67 2.16.45.5 1.09.75 1.92.75.37 0 .74-.04 1.11-.11l.4-.09v-5.49z" />
                </svg>
              ),
            },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-indigo-500 transition-colors"
            >
              {link.icon}
              {link.label}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
