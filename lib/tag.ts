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

export function getTechColor(tech: string) {
  return techColors[tech] ?? "bg-gray-100 text-gray-600";
}
