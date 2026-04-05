interface Project {
  id: number;
  title: string;
  category: string;
  techs: string[];
  thumbnail: string;
  year: string;
}

export interface ProjectDetail {
  id: number;
  appName: string;
  appCategory: string;
  thumbnail: string;
  tagline: string;
  period: string;
  client: string;
  role: string;
  team: string;
  outline: string;
  objectives: { background: string; target: string };
  keyFeatures: { title: string; desc: string; gif?: string }[];
  stack: string[];
  architectureImage?: string;
  folderStructure?: string;
  devPoints: { title: string; desc: string; link?: string }[];
  nextSteps?: string[];
  externalLink?: { title: string; url: string }[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "【個人開発】オフライン待ち合わせアプリ",
    category: "個人開発",
    techs: ["React", "TypeScript", "Service Worker", "Supabase"],
    thumbnail:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80",
    year: "2026",
  },
  {
    id: 2,
    title: "不動産向け用地情報管理サービスの保守・開発",
    category: "Frontend",
    techs: ["React", "TypeScript", "PostgreSQL"],
    thumbnail:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
    year: "2024",
  },

  {
    id: 3,
    title: "月次地図データ処理の自動化・効率化",
    category: "Development",
    techs: ["Python", "C#", "Excel VBA"],
    thumbnail:
      "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&q=80",
    year: "2020",
  },
  {
    id: 4,
    title: "航空会社向け基幹システム導入 PM補佐",
    category: "PM補佐",
    techs: ["C#", "PL/SQL", "Oracle"],
    thumbnail:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80",
    year: "2016",
  },
  // {
  //   id: 4,
  //   title: "基幹パッケージへの新規画面追加・不具合改修",
  //   category: "Development",
  //   techs: ["C#", "PL/SQL", "Oracle"],
  //   thumbnail:
  //     "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
  //   year: "2017",
  // },
] as const;

export const projectDetails: ProjectDetail[] = [
  {
    id: 2,
    appName: "用地情報管理サービス",
    appCategory: "Web アプリ",
    thumbnail:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
    tagline: "不動産業界向け用地情報の保守・改修",
    period: "2024.04 — 現在",
    client: "不動産会社（社内プロジェクト）",
    role: "フロントエンドエンジニア",
    team: "11名（FE 3名・BE 4名・インフラ 3名・PO 1名）",
    outline:
      "不動産業界の用地情報を一元管理する Web アプリケーションの保守・改修プロジェクト。既存機能の不具合調査・修正、外部 API 連携の設計と実装、UI 改善、テスト仕様書の作成、ユーザードキュメントの整備を担当。長期的に保守しやすいコード品質を意識しながら開発に取り組んだ。",
    objectives: {
      background:
        "参画時点で稼働中のシステムに複数の不具合が蓄積しており、外部データの取り込みもさらなる効率化の余地があった。信頼性と使いやすさを向上させるため、段階的な改修プロジェクトのメンバーとしてアサインされた。",
      target:
        "不動産会社の現場担当者。現場の業務フローに合わせた柔軟な使い勝手を重視しつつ、IT リテラシーに関わらず直感的に操作できる UI を目指した。",
    },
    keyFeatures: [
      {
        title: "外部 API 連携への切り替え",
        desc: "社内保管していた外部の地図データをAPI経由取得に移行。外部API利用への差し替えとともに、any だった既存の型定義を整備し、変更箇所の影響範囲を把握しやすいコードベースに改善した。",
      },
      {
        title: "外部ライブラリのバージョンアップ対応・画面統合",
        desc: "フォームライブラリのバージョンアップに伴い、バリデーションのタイミングずれや入力値が反映されない不具合を調査。grep でコンポーネントを特定し、状態管理関数を使わずオブジェクトを直接更新していた実装が原因と突き止めた。正規の API に置き換えつつ関連画面を統合し、不具合を根本解消した。",
      },
      {
        title: "検索画面の UI 改善",
        desc: "任意項目が必須項目より上に並ぶなど直感に反するレイアウトを再設計。項目の並び順・余白・入力導線を見直し、マニュアルなしで操作できる画面に改善した。",
      },
    ],
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Formik",
      "PostgreSQL",
      "C#",
      "AWS",
    ],
    architectureImage: undefined,
    devPoints: [
      {
        title: "既存コードの型安全性の向上",
        desc: "any で定義されていた API レスポンスの型を仕様に沿って整備。型エラーによる早期検知ができる状態にし、後続の改修コストを下げた。",
      },
      {
        title: "原因調査の進め方",
        desc: "テストコードが存在しない環境で、grep による依存関係のトレースとコンポーネント単位の目視確認を組み合わせて問題箇所を特定。次回以降はリグレッションテストを先に整備する重要性を実感した。",
      },
    ],
    // nextSteps: ["リグレッションテストの整備", "Reactのバージョンアップ"],
  },
  {
    id: 3,
    appName: "空間情報データ作成ツール",
    appCategory: "業務ツール",
    thumbnail:
      "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&q=80",
    tagline: "月次手動作業のツール化による工数削減・品質向上",
    period: "2020.12 — 2024.04",
    client: "（社内プロジェクト）",
    role: "データエンジニア",
    team: "5名",
    outline:
      "測量された地図データの変換・加工において、月次で発生していた手動作業をツール化。作業工数を約半分に削減しヒューマンエラーを低減するとともに、メモ書きのみだった業務手順をドキュメントとして整備した。",
    objectives: {
      background:
        "月次の地図データ処理が手作業に依存しており、工数・ミスのリスクが課題だった。ツール化による自動化と、属人化していたナレッジの文書化が求められた。",
      target:
        "社内の地図データ担当者。担当者が変わっても同じ品質で作業を継続できる体制を目指した。",
    },
    keyFeatures: [
      {
        title: "月次手動作業のツール化",
        desc: "Excel VBA・C#・Python を組み合わせ、毎月発生していた地図データの変換・加工処理をツール化。月次作業の工数を約半分に削減し、ヒューマンエラーも大幅に低減した。",
      },
      {
        title: "潜在的バグの検知・対応",
        desc: "ツール化の過程でベースデータが古いまま更新されていない潜在的なバグを発見。原因を調査・修正し、以降の処理が正しいデータをもとに動作するよう対応した。",
      },
      {
        title: "業務ドキュメントの整備",
        desc: "メモ書きのみで属人化していた作業手順を、誰でも再現できるドキュメントとして整備。引き継ぎコストの削減と業務継続性の向上に貢献した。",
      },
    ],
    stack: ["Python", "C#", "Excel VBA"],
    architectureImage: undefined,
    devPoints: [
      {
        title: "ツール化による定量的な改善",
        desc: "手動作業をプログラムに置き換えることで月次工数を約半分に削減。単なる自動化にとどまらず、潜在バグの発見・修正まで踏み込み、データ品質の向上にもつなげた。",
      },
      {
        title: "属人化の解消",
        desc: "担当者のメモにしか残っていなかった業務手順をドキュメント化。ツールとセットで整備することで、担当者交代時のリスクを最小化した。",
      },
    ],
    // nextSteps: ["処理のさらなる自動化・省力化", "対応データ形式の拡充"],
  },
  {
    id: 4,
    appName: "航空会社向け基幹システム導入",
    appCategory: "PM 補佐",
    thumbnail:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80",
    tagline: "1億円規模の基幹システム導入をPM補佐として推進",
    period: "2016.05 — 2017.04",
    client: "航空会社（社外プロジェクト）",
    role: "PM 補佐",
    team: "20名",
    outline:
      "1億円規模の基幹システム導入プロジェクトに PM 補佐として参画。ユーザとの仕様調整、テストスケジュールの進捗管理、結合テストのケース作成、導入作業手順書の精査、リリース立ち合い、導入後の問合せ対応を担当した。",
    objectives: {
      background:
        "大規模な基幹システムの新規導入にあたり、複数ステークホルダーを巻き込んだスケジュール管理と品質担保が求められた。過去のリリースで発生した問題点を事前に洗い出し、リスクを最小化することが重要な課題だった。",
      target:
        "顧客企業の現場ユーザ。導入後も安心して業務に使えるよう、問合せ対応を含めたスムーズな定着を目指した。",
    },
    keyFeatures: [
      {
        title: "テストスケジュール管理・作業割振り",
        desc: "仕様調整後のテストスケジュールを策定し、進捗管理と作業割振りを担当。結合テストのケース作成も行い、品質担保に貢献した。",
      },
      {
        title: "リリースリスクの低減",
        desc: "社内外の関係者を巻き込み、過去のリリースで発生した問題点を洗い出して対策を実施。リリースに関する予算工数を5%削減した。",
      },
      {
        title: "導入後の問合せ対応",
        desc: "システム稼働後、現場ユーザからの操作方法・不具合に関する問合せを受け付け、社内で共有・調査する窓口を担当した。",
      },
    ],
    stack: ["C#", "PL/SQL", "Oracle", "Object Browser"],
    architectureImage: undefined,
    devPoints: [
      {
        title: "過去実績を活かしたリスク管理",
        desc: "過去リリースの問題点を体系的に洗い出し、同様のトラブルを未然に防ぐ対策を講じた。結果としてリリース工数を5%削減し、スムーズな本番稼働を実現した。",
      },
      {
        title: "ステークホルダーとの調整",
        desc: "顧客・社内双方との仕様調整や問合せ対応を通じ、技術的な内容を非エンジニアにも伝わるよう言語化する力を養った。",
      },
    ],
  },
  {
    id: 1,
    appName: "オフライン待ち合わせアプリ",
    appCategory: "個人開発 / Web アプリ",
    thumbnail:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80",
    tagline: "オンラインのうちに準備して、オフラインでも迷わない待ち合わせを",
    period: "2026.03",
    client: "個人開発",
    role: "設計・開発（フルスタック）",
    team: "1名",
    outline:
      "「迷ったらここに集合しよう」をシンプルに伝えるための待ち合わせ Web アプリ。事前に地図と目的地をダウンロードしておくことで、電波のない環境でも地図とピンをそのまま確認できる。スマホ操作に不慣れな友人や家族でも直感的に使えるシンプルな UI を目指して設計・開発した。",
    objectives: {
      background:
        "待ち合わせの際、電話や文字より地図上のピン一つで伝えるほうがシンプルで確実だと感じていた。一方で、電波環境が不安定な場所での利用や、デジタルに不慣れな相手への配慮も必要だと考え、オフライン対応のシンプルな待ち合わせアプリとして開発した。",
      target:
        "スマホ操作に慣れていない友人・家族も含む幅広いユーザー。難しい操作なしに、地図と目的地をすぐ確認できることを最優先にした。",
    },
    keyFeatures: [
      {
        title: "地図・目的地のオフライン対応",
        desc: "オンライン時に地図タイルと目的地情報を IndexedDB にキャッシュ。電波のない環境でもダウンロード済みの地図とピンをそのまま閲覧できる。",
        gif: "/images/projects/offline-map/app.gif",
      },
      {
        title: "ワンタップで地図をダウンロード",
        desc: "用意された地図をタップするだけで端末に保存できる。複雑な操作を排除し、誰でも迷わず準備できる導線を設計した。",
      },
      {
        title: "目的地のマーキング・共有",
        desc: "事前に目的地をピンで登録し、URLで共有できる。受け取った側もタップするだけで同じ地図・目的地を確認・保存できる。",
      },
    ],

    stack: [
      "React",
      "TypeScript",
      "Service Worker",
      "IndexedDB",
      "Supabase",
      "Firebase Hosting",
      "GitHub Actions",
    ],
    architectureImage:
      "/images/projects/offline-map/offline-map-architecture.png",
    folderStructure: `.
├── assets
│   └── icon
│       ├── attraction.svg
│       ├── cafe.svg
│       ├── fastfood.svg
│       ├── index.ts
│       ├── restaurant.svg
│       ├── shop.svg
│       └── toilet.svg
├── components
│   └── ui
│       ├── Header.tsx
│       └── Layout.tsx
├── config
│   └── mapStyle
│       ├── constants.ts
│       ├── disneylandMapStyle.ts
│       ├── index.ts
│       ├── mabashiMapStyle.ts
│       └── types.ts
├── features
│   ├── home
│   │   ├── components
│   │   │   ├── __tests__
│   │   │   │   └── Home.spec.tsx
│   │   │   ├── CacheClearSection.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Cards.tsx
│   │   │   ├── Home.tsx
│   │   │   ├── HomeHeader.tsx
│   │   │   ├── HomeLoading.tsx
│   │   │   └── NoData.tsx
│   │   └── hooks
│   │       ├── __tests__
│   │       │   └── useHome.test.ts
│   │       └── useHome.ts
│   └── map
│       ├── application
│       │   ├── DestinationMarkerService.ts
│       │   ├── IDestinationMarker.ts
│       │   ├── IDestinationMarkerFactory.ts
│       │   ├── IMap.ts
│       │   └── MarkerStoreActions.ts
│       ├── components
│       │   ├── Map.tsx
│       │   ├── MapLoading.tsx
│       │   └── MapNotFound.tsx
│       ├── domains
│       │   ├── entities
│       │   │   ├── __tests__
│       │   │   │   ├── Destination.test.ts
│       │   │   │   └── Map.test.ts
│       │   │   ├── Destination.ts
│       │   │   ├── DestinationMarker.ts
│       │   │   └── Map.ts
│       │   ├── repositories
│       │   │   ├── DestinationRepository.ts
│       │   │   └── MapRepository.ts
│       │   └── valueObjects
│       │       ├── __tests__
│       │       │   └── LngLat.test.ts
│       │       └── LngLat.ts
│       ├── hooks
│       │   ├── __tests__
│       │   │   └── useMapEvent.test.tsx
│       │   └── useMapEvent.ts
│       ├── infrastructure
│       │   ├── __tests__
│       │   │   └── SupabaseMapRepository.test.ts
│       │   ├── maplibre
│       │   │   ├── DestinationMarkerFactory.ts
│       │   │   ├── MapFactory.ts
│       │   │   ├── MaplibreDestinationMarker.ts
│       │   │   ├── MaplibreMap.ts
│       │   │   └── marker.module.css
│       │   └── supabase
│       │       ├── destinationMapper.ts
│       │       ├── mapMapper.ts
│       │       ├── SupabaseDestinationRepository.ts
│       │       └── SupabaseMapRepository.ts
│       ├── loader
│       │   ├── __tests__
│       │   │   └── mapLoader.spec.tsx
│       │   └── mapLoader.ts
│       ├── utils
│       │   ├── marker.ts
│       │   └── userMarker.ts
│       └── constants.ts
├── lib
│   ├── indexedDB
│   │   ├── constants.ts
│   │   ├── database.ts
│   │   └── types.ts
│   └── supabase
│       ├── schema.ts
│       └── supabaseClient.ts
├── router
│   ├── __tests__
│   │   └── NotFound.spec.tsx
│   ├── AppRouteProvider.tsx
│   └── NotFound.tsx
├── store
│   └── useMapStore.ts
├── styles
│   └── index.css
├── main.tsx
└── serviceWorker.ts`,
    devPoints: [
      {
        title: "Service Worker によるオフラインキャッシュ設計",
        desc: "fetch インターセプトを活用し、地図タイルと目的地データをオンライン時に IndexedDB へ保存。ネットワーク状態に関わらず一貫した体験を提供できるよう設計した。",
      },

      {
        title: "TDD とクリーンアーキテクチャを意識した設計",
        desc: "ドメインロジックを TDD で実装し、テストコードが設計ドキュメントとして機能するよう意識した。レイヤードアーキテクチャとフィーチャーアーキテクチャを組み合わせることで、責務の分離を保ちながらファイル構成の見通しを高めた。",
      },
    ],
    nextSteps: [
      "地図のスタイルやUIなどがまだまだ機能的とは言えないため今後も修正する",
      "対応地図を増やす",
      "認証認可による機能拡張",
    ],
    externalLink: [
      {
        title:
          "【Qiita記事】オフラインでも地図と現在地をすぐ確認できる、待ち合わせアプリを作りました",
        url: "https://qiita.com/shun123/items/91a65bfbe41aea8dbbda",
      },
      {
        title: "【GitHubリポジトリ】オフラインマップアプリ",
        url: "https://github.com/shun144/meeting-map",
      },
    ],
  },
];
