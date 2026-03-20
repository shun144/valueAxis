import Link from "next/link";
import React from "react";

export default function TopHero() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-14 pb-12">
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
            Frontend Engineer · Tokyo 🗼
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3">
        <div className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
          Shun Kano is a{" "}
          <span className="font-bold text-indigo-500">Frontend Engineer</span>{" "}
          <span>Next.js / React を軸にしたWebアプリ開発が得意です。</span>
        </div>

        <div>
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 bg-white hover:bg-indigo-50 border border-indigo-200 hover:border-indigo-400 text-indigo-500 hover:text-indigo-600 text-sm font-bold px-4 py-2.5 rounded-xl shadow-sm hover:shadow transition-all duration-200"
          >
            <svg
              className="w-4 h-4 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
            自己紹介はこちら
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {[
            { label: "経験年数", value: "2年+" },
            { label: "プロジェクト", value: "3件" },
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
      </div>
    </div>
  );
}
