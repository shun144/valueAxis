"use client";

// 画像は実際のものに差し替えてください
const photos = [
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&q=80",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&q=80",
];

const career = [
  {
    period: "2022.04 — 現在",
    company: "株式会社〇〇",
    role: "フロントエンドエンジニア",
    desc: "Next.js / React を中心に Web アプリの設計・開発を担当。デザインシステム構築やパフォーマンス改善にも携わる。",
  },
  {
    period: "2021.04 — 2022.03",
    company: "株式会社△△",
    role: "Web デザイナー",
    desc: "コーポレートサイトや LP のデザイン・コーディングを担当。Figma でのプロトタイプ制作から実装まで一貫して対応。",
  },
  {
    period: "2017.04 — 2021.03",
    company: "〇〇大学 情報学部",
    role: "学生",
    desc: "情報科学を専攻。卒業研究ではユーザーインターフェースの認知負荷に関するテーマに取り組む。",
  },
];

export default function Profile() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-16">
      {/* ── PHOTO GRID ── */}
      <section>
        {/* 大1枚 + 縦3枚 */}
        <div className="grid grid-cols-3 grid-rows-2 gap-2 h-72 sm:h-96">
          {/* 左：大きい1枚（2行分） */}
          <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden">
            <img
              src={photos[0]}
              alt="photo 1"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          {/* 右上 */}
          <div className="rounded-2xl overflow-hidden">
            <img
              src={photos[1]}
              alt="photo 2"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          {/* 右中 */}
          <div className="rounded-2xl overflow-hidden">
            <img
              src={photos[2]}
              alt="photo 3"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
        {/* 下段：横長1枚 */}
        <div className="mt-2 rounded-2xl overflow-hidden h-36 sm:h-44">
          <img
            src={photos[3]}
            alt="photo 4"
            className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
          />
        </div>
      </section>

      {/* ── ABOUT ME ── */}
      <section className="space-y-10">
        <h2 className="text-2xl font-extrabold text-gray-900 flex items-center gap-3">
          <span className="w-1 h-6 bg-indigo-400 rounded-full inline-block"></span>
          About me
        </h2>

        {/* 名前と簡単な自己紹介 */}
        <div className="space-y-3">
          <h3 className="text-base font-extrabold text-indigo-500">
            👋 名前と簡単な自己紹介
          </h3>
          <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm space-y-2 text-sm text-gray-600 leading-relaxed">
            <p className="text-lg font-extrabold text-gray-900">Shun Kano</p>
            <p>
              東京在住のフロントエンドエンジニアです。デザインと実装の両方に関わることが好きで、見た目の美しさと使い勝手の良さを両立したプロダクト作りを目指しています。コーヒーと散歩が好きで、よく街を歩きながらアイデアを練っています。
            </p>
          </div>
        </div>

        {/* どんなエンジニアなの */}
        <div className="space-y-3">
          <h3 className="text-base font-extrabold text-indigo-500">
            💻 どんなエンジニアなの
          </h3>
          <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm text-sm text-gray-600 leading-relaxed space-y-2">
            <p>
              Next.js / React / TypeScript
              をメインに使うフロントエンドエンジニアです。UI
              の細部にこだわりつつ、パフォーマンスや保守性も意識した実装を心がけています。
            </p>
            <p>
              デザイナーとの協業経験が多く、Figma
              を読み解いて実装に落とし込むことが得意です。「デザインの意図を壊さないコード」を書くことを大切にしています。
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {[
                "Next.js",
                "React",
                "TypeScript",
                "Tailwind CSS",
                "Figma",
                "GraphQL",
              ].map((t) => (
                <span
                  key={t}
                  className="bg-indigo-50 text-indigo-600 text-xs font-bold px-2.5 py-0.5 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 組織で目指すこと */}
        <div className="space-y-3">
          <h3 className="text-base font-extrabold text-indigo-500">
            🏢 組織で目指すこと・やっていること
          </h3>
          <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm text-sm text-gray-600 leading-relaxed space-y-2">
            <p>
              チームの生産性を上げる「仕組み」を作ることに関心があります。コンポーネント設計やドキュメント整備など、個人の頑張りに依存しない開発体制を目指しています。
            </p>
            <p>
              また、デザイナー・バックエンドエンジニア・PO
              の間に立って、認識のズレを早期に解消する役割を自然と担うことが多いです。言葉と図でそれぞれに伝わるよう翻訳するのが得意です。
            </p>
          </div>
        </div>

        {/* 個人として目指すこと */}
        <div className="space-y-3">
          <h3 className="text-base font-extrabold text-indigo-500">
            🌱 個人として目指すこと
          </h3>
          <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm text-sm text-gray-600 leading-relaxed space-y-2">
            <p>
              技術の幅を広げながら、最終的には「プロダクト全体を設計・推進できるエンジニア」になりたいと思っています。フロントエンドを起点に、UX
              設計やビジネス要件の理解も深めていきたいです。
            </p>
            <p>
              個人開発でも定期的に手を動かし、新しいツールやフレームワークを試すことを習慣にしています。
            </p>
          </div>
        </div>

        {/* 他人から見た自分 */}
        <div className="space-y-3">
          <h3 className="text-base font-extrabold text-indigo-500">
            🪞 他人から見た自分
          </h3>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              {
                emoji: "🔍",
                label: "細部までこだわる",
                desc: "ピクセル単位のズレやコピーの言葉選びまで気にすると言われます",
              },
              {
                emoji: "🤝",
                label: "話しやすい",
                desc: "壁を作らず相談しやすい雰囲気と言ってもらえることが多いです",
              },
              {
                emoji: "📐",
                label: "整理整頓が得意",
                desc: "複雑な情報をシンプルに整理してくれると言われます",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm text-center space-y-1.5"
              >
                <div className="text-2xl">{item.emoji}</div>
                <div className="text-sm font-extrabold text-gray-800">
                  {item.label}
                </div>
                <div className="text-xs text-gray-500 leading-relaxed">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAREER ── */}
      <section className="space-y-6 pb-12">
        <h2 className="text-2xl font-extrabold text-gray-900 flex items-center gap-3">
          <span className="w-1 h-6 bg-indigo-400 rounded-full inline-block"></span>
          経歴
        </h2>

        <div className="relative space-y-4">
          {/* 縦線 */}
          <div className="absolute left-3.5 top-2 bottom-2 w-px bg-indigo-100"></div>

          {career.map((c, i) => (
            <div key={i} className="flex gap-5">
              {/* ドット */}
              <div className="relative flex-shrink-0 w-7 flex justify-center">
                <div className="mt-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-indigo-300 z-10"></div>
              </div>

              {/* カード */}
              <div className="flex-1 bg-white border border-gray-100 rounded-2xl p-4 shadow-sm mb-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5 mb-2">
                  <span className="text-sm font-extrabold text-gray-900">
                    {c.company}
                  </span>
                  <span className="text-xs text-gray-400 font-semibold">
                    {c.period}
                  </span>
                </div>
                <div className="text-xs font-bold text-indigo-400 bg-indigo-50 inline-block px-2 py-0.5 rounded-full mb-2">
                  {c.role}
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
