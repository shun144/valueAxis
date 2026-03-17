import React from "react";
import { getTechColor } from "@/lib/tag";
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

export default function TopWork() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-16">
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
    </div>
  );
}
