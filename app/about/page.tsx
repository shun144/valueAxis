"use client";

const photos = [
  "/images/photo1.jpg",
  "/images/photo6.jpg",
  "/images/photo11.jpg",
  "/images/photo13.jpg",
];

const career = [
  {
    period: "2024.04 — 現在",
    company: "株式会社パスコ",
    role: "フロントエンドエンジニア",
    desc: "不動産業界向け土地情報管理サービスの保守・開発を担当。React / TypeScript による既存不具合の修正をメインに、新機能の仕様検討・設計も並行して実施。",
  },
  {
    period: "2020.12 — 2024.03",
    company: "株式会社パスコ",
    role: "データ処理エンジニア",
    desc: "各顧客向けの空間情報データ作成業務に従事。C# / Python ライブラリを組み合わせた社内ツール開発により、処理時間を約10時間から2.5時間に短縮する効率化を実現。",
  },
  {
    period: "2016.05 — 2020.11",
    company: "株式会社ネクストヴィジョン",
    role: "システムエンジニア",
    desc: "ANAセールス向け基幹システムの導入・保守や旅行代理店向けWebサービスの顧客対応に従事。PM補佐としてリリース予算工数の5%削減を達成。",
  },
  {
    period: "2015.05 — 2016.04",
    company: "株式会社岩井パック",
    role: "営業",
    desc: "製菓メーカーの専門商社として既存・新規顧客へのセールスに従事。10万〜100万規模の製品について顧客先へ訪問し、利益の創出に貢献。",
  },
];

export default function Profile() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-16">
      {/* ── PHOTO GRID ── */}
      <section>
        <div className="flex gap-2">
          {photos.map((src, i) => (
            <div
              key={i}
              className="flex-1 rounded-2xl overflow-hidden aspect-square"
            >
              <img
                src={src}
                alt={`photo ${i + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-10">
        <h2 className="text-2xl font-extrabold text-gray-900 flex items-center gap-3">
          <span className="w-1 h-6 bg-indigo-400 rounded-full inline-block"></span>
          About me
        </h2>

        <div className="space-y-3">
          <h3 className="text-base font-extrabold text-indigo-500">
            👋 名前と簡単な自己紹介
          </h3>
          <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm space-y-2 text-sm text-gray-600 leading-relaxed">
            <p className="text-lg font-extrabold text-gray-900">Shun Kano</p>
            <p>
              千葉在住のフロントエンドエンジニアです。人と話しながらものを作るのが好きで、「作る人・使う人に寄り添った設計」を意識しています。オフはバレーボールで体を動かしたり、ディズニー作品に浸ったりしてリフレッシュしています。
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-base font-extrabold text-indigo-500">
            💻 どんなエンジニアか
          </h3>
          <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm text-sm text-gray-600 leading-relaxed space-y-2">
            <div className="space-y-3 sm:space-y-4">
              <p>
                Next.js / React / TypeScript
                をメインに使うフロントエンドエンジニアです。「使う人が迷わない
                UI」と「関わる人が迷わないコード」の両方を追いかけています。
              </p>
              <p>
                DDD・TDDを意識した設計で長く育てられるプロダクト作りを目指しながら、インフラやセキュリティにも視野を広げています。
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {["Next.js", "React", "TypeScript", "Tailwind CSS"].map((t) => (
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
          <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm text-sm text-gray-600 leading-relaxed space-y-3 sm:space-y-4">
            <p>
              チームの生産性を上げる「仕組み」を作ることに関心があります。コンポーネント設計やドキュメント整備など、個人の頑張りに依存しない開発体制を目指しています。
            </p>
            <p>
              認識のズレを防ぐため、口頭で終わらせず仕様書・図など目に見える形で残すことを意識しています。作成した資料はなるべく早い段階で共有し、フィードバックをもらうことで認識合わせと手戻りの削減につなげています。
            </p>
          </div>
        </div>

        {/* 個人として目指すこと */}
        <div className="space-y-3">
          <h3 className="text-base font-extrabold text-indigo-500">
            🌱 個人として目指すこと
          </h3>
          <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm text-sm text-gray-600 leading-relaxed space-y-3 sm:space-y-4">
            <p>
              技術の幅を広げながら、最終的には「プロダクト全体を設計・推進できるエンジニア」になりたいと思っています。フロントエンドを起点に、UX
              設計やビジネス要件の理解も深めていきたいです。
            </p>

            <p>
              「聞きやすい・話しかけやすい」雰囲気を大切にしており、小さな疑問や違和感もチーム内で拾い上げられる環境づくりを自然と担うことが多いです。
            </p>
          </div>
        </div>

        {/* 他人から見た自分 */}
        <div className="space-y-3">
          <h3 className="text-base font-extrabold text-indigo-500">
            🪞 他人から見た自分
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                emoji: "💬",
                label: "情報共有を大切にする",
                desc: "曖昧なことはそのままにせず、きちんと理解した上で周囲にも伝わるよう共有することを大切にしています。",
              },
              {
                emoji: "🤝",
                label: "話しやすい",
                desc: "壁を作らず相談しやすい雰囲気と言ってもらえることが多いです",
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

      {/* ── 発信 ── */}
      <section className="space-y-6 pb-12">
        <h2 className="text-2xl font-extrabold text-gray-900 flex items-center gap-3">
          <span className="w-1 h-6 bg-indigo-400 rounded-full inline-block"></span>
          発信
        </h2>

        <ul className="space-y-3">
          {[
            {
              title:
                "【個人開発】オフラインでも地図と現在地をすぐ確認できる、待ち合わせアプリを作りました",
              url: "https://qiita.com/shun123/items/91a65bfbe41aea8dbbda",
              platform: "Qiita",
            },
          ].map((post) => (
            <li key={post.url}>
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-gray-700 hover:text-indigo-500 transition-colors duration-200"
              >
                <span className="text-xs font-bold text-green-500 shrink-0">
                  {post.platform}
                </span>
                <span className="flex-1 font-semibold  underline underline-offset-2">
                  {post.title}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <iframe
          src="https://www.youtube.com/embed/_-XvNqfgDZ4"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full aspect-video"
        />
      </section>
    </main>
  );
}
