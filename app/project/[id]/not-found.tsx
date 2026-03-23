import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="inline-flex items-center gap-1.5">
          <span className="text-xl font-bold text-indigo-500 bg-indigo-50 px-2.5 py-0.5 rounded-full">
            404 エラー
          </span>
        </div>

        {/* Illustration */}
        <svg
          viewBox="0 0 320 160"
          className="mx-auto w-64"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Document */}
          <rect
            x="100"
            y="20"
            width="120"
            height="100"
            rx="10"
            className="fill-indigo-50 stroke-indigo-200"
            strokeWidth="1"
          />
          <path
            d="M196 20 L220 44 L196 44 Z"
            className="fill-indigo-200"
            opacity={0.6}
          />
          <path
            d="M196 20 L220 44"
            fill="none"
            className="stroke-indigo-200"
            strokeWidth="1"
          />
          <rect
            x="118"
            y="56"
            width="60"
            height="6"
            rx="3"
            className="fill-indigo-200"
            opacity={0.5}
          />
          <rect
            x="118"
            y="70"
            width="84"
            height="6"
            rx="3"
            className="fill-indigo-200"
            opacity={0.4}
          />
          <rect
            x="118"
            y="84"
            width="48"
            height="6"
            rx="3"
            className="fill-indigo-200"
            opacity={0.3}
          />
          <text
            x="160"
            y="118"
            textAnchor="middle"
            className="fill-indigo-400"
            fontSize={22}
            fontWeight={700}
          >
            ?
          </text>
          {/* Search glass */}
          <circle
            cx="56"
            cy="68"
            r="22"
            fill="none"
            className="stroke-indigo-200"
            strokeWidth="2"
          />
          <line
            x1="72"
            y1="84"
            x2="92"
            y2="100"
            className="stroke-indigo-200"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <line
            x1="49"
            y1="61"
            x2="63"
            y2="75"
            className="stroke-indigo-400"
            strokeWidth="2"
            strokeLinecap="round"
            opacity={0.6}
          />
          <line
            x1="63"
            y1="61"
            x2="49"
            y2="75"
            className="stroke-indigo-400"
            strokeWidth="2"
            strokeLinecap="round"
            opacity={0.6}
          />
        </svg>

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-snug">
          プロジェクトが見つかりません
        </h1>

        {/* Description */}
        <p className="text-sm text-gray-500 leading-relaxed">
          指定されたIDは存在しないか、削除された可能性があります。
          <br />
          URLをご確認のうえ、もう一度お試しください。
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="text-sm font-bold text-white bg-indigo-500 hover:bg-indigo-600 transition-colors px-5 py-2 rounded-full"
          >
            ← トップへ戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
