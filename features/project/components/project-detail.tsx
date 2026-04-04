"use client";
import Link from "next/link";
import SectionLabel from "@/features/project/components/section-label";
import { type ProjectDetail } from "@/features/project/constants/projects";
import Image from "next/image";

interface Props {
  projectDetail: ProjectDetail;
}

export default function ProjectDetailPage({ projectDetail }: Props) {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-16">
      {/* ── ヘッダー ── */}
      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-indigo-500 bg-indigo-50 px-2.5 py-0.5 rounded-full">
            {projectDetail.appCategory}
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-snug">
          {projectDetail.appName}
        </h1>
        <p className="text-base text-gray-500">{projectDetail.tagline}</p>
      </section>

      {/* ── サムネイル ── */}
      <section className="rounded-2xl overflow-hidden aspect-[16/9]">
        <img
          src={projectDetail.thumbnail}
          alt={projectDetail.appName}
          className="w-full h-full object-cover"
        />
      </section>

      {/* ── 第一セクション：プロジェクト概要 ── */}
      <section>
        <SectionLabel en="Overview" ja="プロジェクト情報" />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "開発期間", value: projectDetail.period },
            { label: "クライアント", value: projectDetail.client },
            { label: "役割", value: projectDetail.role },
            { label: "チーム構成", value: projectDetail.team },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm space-y-1 col-span-2 sm:col-span-2"
            >
              <p className="text-xs font-bold text-indigo-400">{item.label}</p>
              <p className="text-sm text-gray-700 font-semibold">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 第二セクション：概要 ── */}
      <section>
        <SectionLabel en="Outline" ja="概要" />
        <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6">
          <p className="text-sm text-gray-700 leading-relaxed">
            {projectDetail.outline}
          </p>
        </div>
      </section>

      {/* ── 第三セクション：目的 ── */}
      <section>
        <SectionLabel en="Objectives" ja="目的・背景" />
        <div className="space-y-4">
          <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm space-y-2">
            <p className="text-xs font-bold text-indigo-400">開発背景</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              {projectDetail.objectives.background}
            </p>
          </div>
          <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm space-y-2">
            <p className="text-xs font-bold text-indigo-400">
              届けたいユーザー
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              {projectDetail.objectives.target}
            </p>
          </div>
        </div>
      </section>

      {/* ── 第四セクション：主な特長 ── */}
      <section>
        <SectionLabel en="Key Features" ja="主な特長" />
        <div className="space-y-4">
          {projectDetail.keyFeatures.map((f, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm space-y-2"
            >
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-indigo-400 text-white text-xs font-bold flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <p className="text-sm font-extrabold text-gray-900">
                  {f.title}
                </p>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed pl-7">
                {f.desc}
              </p>
              {f.gif && (
                <img
                  src={f.gif}
                  alt={f.title}
                  className="rounded-xl mt-2 w-full"
                />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── 第五セクション：技術・工夫 ── */}
      <section className="space-y-8">
        <div>
          <SectionLabel en="Tech Stack" ja="技術スタック" />
          <div className="flex flex-wrap gap-2">
            {projectDetail.stack.map((t) => (
              <span
                key={t}
                className="bg-indigo-50 text-indigo-600 text-xs font-bold px-3 py-1 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {projectDetail.architectureImage && (
          <div>
            <p className="text-xs font-bold text-indigo-400 mb-3">
              アーキテクチャ図
            </p>

            <Image
              src={projectDetail.architectureImage}
              alt="architecture"
              width={1200}
              height={800}
              className="rounded-2xl w-full h-auto border border-gray-100"
            />
          </div>
        )}

        {/* ── フォルダ構成 ── */}
        {projectDetail.folderStructure && (
          <div>
            <p className="text-xs font-bold text-indigo-400 mb-3">
              フォルダ構成
            </p>
            <details
              className="border border-gray-100 rounded-2xl overflow-hidden"
              onToggle={(e) => {
                if (!(e.currentTarget as HTMLDetailsElement).open) return;
                e.currentTarget.scrollIntoView({
                  behavior: "smooth",
                  block: "nearest",
                });
              }}
            >
              <summary className="px-5 py-3 text-sm font-semibold text-gray-600 cursor-pointer select-none list-none flex items-center gap-2 [&::-webkit-details-marker]:hidden bg-gray-50">
                <span
                  className="text-gray-400 transition-transform duration-200"
                  style={{ display: "inline-block" }}
                  ref={(el) => {
                    const details = el?.closest("details");
                    if (!details || !el) return;
                    const update = () =>
                      (el.style.transform = details.open
                        ? "rotate(180deg)"
                        : "rotate(0deg)");
                    details.addEventListener("toggle", update);
                  }}
                >
                  ▼
                </span>
                ディレクトリ構成を見る
              </summary>
              <pre
                className="px-5 py-4 text-xs leading-relaxed overflow-auto text-gray-300 bg-gray-900"
                style={{
                  height: "300px",
                  fontFamily: "'Courier New', Courier, monospace",
                }}
              >
                {projectDetail.folderStructure}
              </pre>
            </details>
          </div>
        )}

        <div>
          <p className="text-xs font-bold text-indigo-400 mb-3">工夫したこと</p>
          <div className="space-y-4">
            {projectDetail.devPoints.map((p, i) => (
              <div
                key={i}
                className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm space-y-1"
              >
                <p className="text-sm font-extrabold text-gray-900">
                  {p.title}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {p.desc}
                </p>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-indigo-500 underline underline-offset-2"
                  >
                    関連記事 →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 第六セクション：今後の展望 ── */}
      {/* <section>
        <SectionLabel en="Next Step" ja="今後の展望" />
        <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
          <ul className="space-y-2">
            {projectDetail.nextSteps.map((s, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-gray-600"
              >
                <span className="text-indigo-300 mt-0.5">▸</span>
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section> */}

      {/* ── フッター：他の案件 ── */}
      {/* <section className="pb-12">
        <SectionLabel en="Other Works" ja="他の制作実績" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projectDetail.relatedWorks.map((w) => (
            <Link
              key={w.id}
              href={`/work/${w.id}`}
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={w.thumbnail}
                  alt={w.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 space-y-2">
                <span className="text-xs font-bold text-indigo-500 bg-indigo-50 px-2 py-0.5 rounded-full">
                  {w.category}
                </span>
                <p className="text-sm font-extrabold text-gray-900">
                  {w.title}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {w.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs text-gray-400 bg-gray-50 border border-gray-100 px-2 py-0.5 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section> */}
    </div>
  );
}
