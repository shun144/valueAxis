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
  {
    id: 5,
    title: " 商圏分析Webアプリの機能改修と不具合対応",
    category: "Development",
    techs: ["TypeScript", "AWS", "React", "Next.js"],
    thumbnail:
      "https://images.unsplash.com/photo-1619468129361-605ebea04b44?w=600&q=80",
    year: "2026",
  },
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
    team: "12名（FE 3名・BE 4名・インフラ 3名・PM 1名・PO 1名）",
    outline:
      "地図上に物件情報・用途地域・防災情報などをレイヤー表示し、対象区画の情報を検索・照会する BtoB 業務システムの保守・改修プロジェクト。不動産業界15社が業務で利用している。既存機能の不具合調査・修正、外部 API 連携の設計と実装、UI 改善、テスト仕様書の作成・実施、テスト自動化基盤の構築、ユーザードキュメントの整備を担当。長期的に保守しやすいコード品質を意識しながら開発に取り組んだ。",
    objectives: {
      background:
        "参画時点で稼働中のシステムに複数の不具合が蓄積しており、外部データの取り込みもさらなる効率化の余地があった。信頼性と使いやすさを向上させるため、段階的な改修プロジェクトのメンバーとしてアサインされた。",
      target:
        "不動産会社の現場担当者。用地の取得判断に必要な情報を地図上で照会する業務を支えるため、現場の業務フローに合わせた柔軟な使い勝手を重視しつつ、IT リテラシーに関わらず直感的に操作できる UI を目指した。",
    },
    keyFeatures: [
      {
        title: "外部 API 連携への切り替え",
        desc: "社内保管していた外部の地図データを API 経由取得に移行。取り込み作業を介さず提供元のデータを参照できる構成にした。あわせて any だった既存の型定義を仕様に沿って整備し、変更箇所の影響範囲を把握しやすいコードベースに改善した。",
      },
      {
        title: "外部ライブラリのバージョンアップ対応・画面統合",
        desc: "フォームライブラリのバージョンアップに伴い、入力項目30個を持つ画面でバリデーションのタイミングずれや入力値が反映されない不具合を調査。grep でコンポーネントを特定し、状態管理関数を使わず values オブジェクトを直接更新していた実装が原因と突き止めた。正規の API に置き換えつつ関連画面を統合し、再描画を強制する回避実装ごと不具合を根本解消した。",
      },
      {
        title: "フォーム全体の再描画の抑制",
        desc: "React DevTools の Profiler で再描画の影響範囲を計測し、1項目の変更ごとに全項目分のオブジェクトを再生成して Context の参照を変えていることを特定。変更対象のみを更新する形に修正し、再描画を必要な範囲に限定した。",
      },
      {
        title: "検索画面の機能分割と UI 改善",
        desc: "建物名検索と企業名検索という性質の異なる2機能が1画面に混在し、どちらを操作しているか分かりにくいという不満が上がっていた。機能単位で2画面に分割し、表示責務とロジック責務を分離して再構成。任意項目が必須項目より上に並ぶなど直感に反するレイアウトも、項目の並び順・余白・入力導線を見直してマニュアルなしで操作できる画面に改善した。参照 API 4本の差し替えも型定義の整備により実行時エラーなく完了した。",
      },
      {
        title: "表示崩れの修正と優先度基準の設計",
        desc: "限られた工数のなか、優先度の判断基準を「その不具合で操作が完了できるか」に統一。押下範囲が狭くクリックできない、テーブル列が見切れて情報が読めないといった操作を止める不具合を高、フォントサイズの不統一などを低として整理し、起票済み3件を解消した。修正後の再起票は発生していない。",
      },
      {
        title: "テスト仕様の設計・実施",
        desc: "新規画面・新規機能向けにテスト仕様書7件（200〜300ケース）を作成し、既存3件（約50ケース）を更新。「正しく検索されること」のような曖昧な記述を、入力条件・期待件数・表示項目・表示順といった判定可能な粒度に分解し、実施者が変わっても同じ判定になる状態にした。計10件・約500ケースを実施。",
      },
      {
        title: "手動テストの Playwright 自動化（進行中）",
        desc: "リリースごとに約500ケース・数時間〜数十時間規模の手動確認が発生していた。ID がビルドごとに採番される、MUI のクラス名が変動する、アクセシビリティ属性が不足しているという事情でロケータ指定が困難だったため、Claude Code + Playwright MCP で POM を先に確定させ、テストコードは POM 経由のみで要素にアクセスする2段階構成を設計。20ケースの自動化に成功し、残り約480ケースへ横展開できる構造を整備した。",
      },
      {
        title: "ユーザードキュメントの整備",
        desc: "画面の追加・変更内容を利用者が参照できるドキュメントとして整備。現場担当者が操作方法を自力で確認できる状態にした。",
      },
    ],
    stack: [
      "React",
      "TypeScript",
      "Redux",
      "Redux-Saga",
      "Formik",
      "MUI",
      "Tailwind CSS",
      "OpenLayers",
      "MapLibre GL JS",
      "Playwright",
      "Claude Code",
      "PostgreSQL",
      "C#",
      "AWS",
    ],
    architectureImage: undefined,
    devPoints: [
      {
        title: "原因調査の進め方",
        desc: "テストコードが存在しない環境で、grep による依存関係のトレースとコンポーネント単位の目視確認で発生箇所を絞り、Profiler で再描画の影響範囲を可視化。推測ではなく計測から根本原因を特定したため、対症療法的なメモ化の追加で終わらせずに済んだ。",
      },
      {
        title: "回避実装を暫定対応のまま残さない",
        desc: "再描画を強制する手動トリガーは動作してはいたが、以後の改修のたびに同種の不整合を生む構造だった。ライブラリが想定する公式 API に統一し、構造ごと解消した。",
      },
      {
        title: "既存コードの型安全性の向上",
        desc: "any で定義されていた API レスポンスの型を仕様に沿って整備。型エラーによる早期検知ができる状態にし、後続の改修コストを下げた。",
      },
      {
        title: "不具合対応の優先度の線引き",
        desc: "見た目の違和感ではなく「操作が完了できるか」を基準に整理。初見ユーザーの目線で全画面を通しで操作して詰まる箇所を洗い出し、限られた工数を業務影響が大きい順に配分した。この基準は以降の起票時にも適用できる形で残した。",
      },
      {
        title: "LLM への丸投げから制約設計への切り替え",
        desc: "当初「仕様書を読んでテストを実装して」と指示する方式ではトークンを消費し切り、動作しないコードが生成された。モデルの能力ではなく与えるコンテキストの構造が成否を分けると判断し、仕様書の Markdown 化・POM の事前確定・POM 経由アクセスの強制という3段の制約を設計。判断が最も揺れるロケータ選定を人が確定させた POM に集約し、生成結果の再現性を確保した。",
      },
      {
        title: "テスト観点の言語化が自動化の前提として機能した",
        desc: "曖昧な確認内容は、人が実施する場合も自動生成する場合も判定不能である点は同じ。手動テストの品質改善と自動化の下準備を同じ作業で兼ねる形にした。リグレッションテストを先に整備する重要性を実感した経験が、テスト仕様の言語化と自動化に取り組む判断につながった。",
      },
    ],
    nextSteps: [
      "全画面のテスト自動化と CI への組み込み（現状はローカル実行のみ）",
      "地図描画などの視覚的な確認をビジュアルリグレッションテストで機械判定できるようにする",
      "React のバージョンアップ",
    ],
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
    tagline: "電波が届かない場所でも、「ここに集合」が伝わる",
    period: "2026.03",
    client: "個人開発",
    role: "設計・開発（フルスタック）",
    team: "1名",
    outline:
      "「迷ったらここに集合しよう」を地図上のピン一つで伝えるための待ち合わせ Web アプリ。待ち合わせ場所は電波が不安定なことも多く、既存の地図アプリは一番必要なタイミングで開けなくなる。本アプリはオンラインのうちに地図タイルと目的地を端末へ保存し、通信できない状況でも全員が同じ地図とピンを確認できる状態を担保する。企画から設計・実装・デプロイまでを一人で担当した。",
    objectives: {
      background:
        "待ち合わせは、電話や文字で場所を説明するより地図上のピン一つで伝えるほうが確実だと感じていた。一方で、現地が圏外や電波の弱い環境だと地図そのものが開けず、結局は口頭案内に逆戻りしてしまう。「現地では通信できない」を例外ではなく前提条件として設計に組み込み、事前ダウンロード方式のシンプルな待ち合わせアプリとして開発した。",
      target:
        "スマホ操作に慣れていない友人・家族も含む幅広いユーザー。オフライン対応は事前準備を伴うため、その準備自体でつまずくと機能そのものが届かない。難しい操作なしに地図と目的地へ到達できることを最優先に設計した。",
    },
    keyFeatures: [
      {
        title: "地図・目的地のオフライン対応",
        desc: "Service Worker で fetch をインターセプトし、オンライン時に地図タイルと目的地情報を IndexedDB へ保存。電波のない環境でもダウンロード済みの地図とピンをそのまま閲覧できる。オンライン／オフラインで描画経路を分岐させず、通信状態に関わらず一貫した表示になるよう設計した。",
        gif: "/images/projects/offline-map/app.gif",
      },
      {
        title: "ワンタップで地図をダウンロード",
        desc: "用意された地図をタップするだけで端末に保存できる。範囲選択やズーム調整といった判断をユーザーに求めず、操作に不慣れな人でも準備を最後まで完了できる導線にした。",
      },
      {
        title: "目的地のマーキング・URL 共有",
        desc: "事前に目的地をピンで登録し、URL で共有できる。受け取った側はリンクをタップするだけで同じ地図・目的地を確認・保存でき、アプリのインストールや会員登録を挟まない。カテゴリはアイコンで表現し、文字を読まずに識別できるようにした。",
      },
    ],

    stack: [
      "React",
      "TypeScript",
      "MapLibre GL JS",
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
        desc: "「現地では通信できない」を回避すべき例外ではなく要件として先に固定し、通信できるうちに必要なデータを端末へ移す方式を選んだ。fetch インターセプトで地図タイルと目的地データを IndexedDB へ保存し、通信断をエラーではなく想定内の状態として扱えるようにしている。",
      },
      {
        title: "データ取得元をリポジトリ層に隔離",
        desc: "地図・目的地・マーカーをドメインモデルとして定義し、Supabase と IndexedDB という取得元の差異をリポジトリ層に閉じ込めた。上位のコンポーネントはオンライン／オフラインを意識せず、同じインターフェースで描画できる。",
      },
      {
        title: "最も操作に不慣れなユーザーを基準にした導線設計",
        desc: "オフライン機能は事前準備をしてもらえて初めて価値が出るため、機能実装と同等の比重で準備導線の単純化に工数を割いた。設定項目や判断を伴う操作を削り、「リンクを開く → タップする」だけで準備が完了する形に絞り込んでいる。",
      },
      {
        title: "TDD とクリーンアーキテクチャを意識した設計",
        desc: "ドメインロジックを TDD で実装し、テストコードが設計ドキュメントとして機能するよう意識した。レイヤードアーキテクチャとフィーチャーアーキテクチャを組み合わせ、責務の分離を保ちながらファイル構成の見通しを高めている。期間を空けて再着手しても設計意図を辿れる状態を維持することが狙い。",
      },
    ],
    nextSteps: [
      "地図スタイル・UI の改善による視認性と操作性の向上",
      "対応地図エリアの拡充",
      "認証認可の導入によるユーザーごとの地図・目的地管理",
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
  {
    id: 5,
    appName: "商圏分析Webアプリ",
    appCategory: "業務案件 / BtoB Web アプリ",
    thumbnail:
      "https://images.unsplash.com/photo-1619468129361-605ebea04b44?w=600&q=80",
    tagline: "出店判断を支える業務システムの、放置された不具合を解く",
    period: "2026.07（約1ヶ月）",
    client: "非公開（BtoB 商圏分析サービス）",
    role: "フロントエンドエンジニア（不具合調査・改修）",
    team: "フロントエンド2名 / バックエンド2名",
    outline:
      "利用企業20社が出店判断・エリアマーケティングの意思決定に日常利用する商圏分析 Web アプリのフロントエンド改修。商圏データの絞り込みや比較を画面操作で行うシステムのため、操作性の不具合がそのまま分析作業の効率と、そこから導かれる出店判断の確度に影響する。現行運用中のアプリに対し、リリース当初から放置されていた既存不具合の調査・修正を担当した。",
    objectives: {
      background:
        "参画時点で、リリースから1〜2年放置されていた不具合が複数残っていた。いずれも「致命的ではない」「不正操作にはつながらない」という理由で対応が見送られてきたもの。不具合をコードの誤りとしてではなく、利用企業の業務にどんな影響を与えているかという観点で評価し直したうえで、着手する順序を判断した。",
      target:
        "利用企業20社の分析担当者。出店候補エリアの絞り込みや商圏比較を日常的に画面上で行うため、誤操作や操作のやり直しがそのまま作業効率と判断の確度に跳ね返る。「押したボタンが押せる」水準の操作信頼性を前提として担保することを重視した。",
    },
    keyFeatures: [
      {
        title: "ブラウザサイズ依存のクリック不具合の調査・修正",
        desc: "縮小表示時のみ意図しない要素がクリックされる不具合を解消。原因は z-index の重なり順の考慮不足で、レイアウト変化によりチェックボックスがボタンより手前に配置されクリックを奪っていた。画面サイズに依存せず意図どおり操作できる状態にし、絞り込み作業中の誤操作とやり直しを防止した。",
      },
      {
        title: "存在しないページで404が返らない不具合の原因特定と方針立案",
        desc: "生の Access Deny XML がそのまま表示され、ユーザーが障害か権限不足かを判断できない状態だった問題。ローカルと本番の挙動差分からインフラ層（CloudFront + S3）に原因を切り分け、CloudFront Functions と KVS で S3 到達前に 404 を返す構成を設計。実装フェーズに進められる状態まで整理した。",
      },
      {
        title: "仮説を立ててから調査範囲を絞る Claude Code の使い方",
        desc: "丸投げせず、まず手動で再現条件を確認し「ブラウザサイズで JS の挙動は変わりにくい以上、CSS 起因だろう」と当たりをつけたうえで調査範囲を指定。結果、1〜2年原因不明だった不具合の原因特定に要した時間は約5分だった。",
      },
    ],

    stack: [
      "Next.js 12 (Pages Router)",
      "React 16",
      "TypeScript 4",
      "Recoil",
      "CSS-in-JS",
      "AWS CloudFront",
      "Amazon S3",
      "Claude Code",
    ],
    devPoints: [
      {
        title: "不具合を「業務への影響」として評価し優先度を決めた",
        desc: "2つの不具合はいずれも長期間放置されていたが、「致命的ではないと判断され初回リリースから除外」「不正操作につながらないため見送り」と経緯が異なる。放置の背景と、実際に利用企業の業務・体験に生じている影響を突き合わせたうえで、対応要否と優先度を判断した。",
      },
      {
        title: "生成AIには仮説を添えて渡す",
        desc: "再現検証と仮説立てを先に手動で行い、調査範囲をスタイル関連に絞ったうえで Claude Code に指示した。合わせて同じパターンが他画面に影響していないかまで調査させることで、絞り込みの精度と速度を両立させている。",
      },
      {
        title: "ローカルと本番の挙動差分で切り分けてから深追いする",
        desc: "「ローカルでは再現しない」という事実を、追加調査に入る前の切り分け材料として使用。原因をアプリケーションコードではなくインフラ層に確定させ、不要なコード精査を避けた。",
      },
      {
        title: "修正対象の画面単体で完結させず横展開まで含めて完了とする",
        desc: "z-index 起因の同種不具合が他画面に潜んでいないかを確認したうえで修正を完了。同じ原因による再発と潜在化を予防した。",
      },
    ],
    nextSteps: [
      "CloudFront Functions + KVS による 404 対応の実装フェーズ移行",
      "同種のレイヤー重なり起因の不具合に対する、レビュー観点としての横展開",
    ],
    externalLink: [],
  },
];
