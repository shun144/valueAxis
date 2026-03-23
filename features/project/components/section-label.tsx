interface Props {
  en: string;
  ja: string;
}

export default function SectionLabel({ en, ja }: Props) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="w-1 h-6 bg-indigo-400 rounded-full inline-block" />
      <div>
        <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest">
          {en}
        </p>
        <p className="text-xl font-extrabold text-gray-900">{ja}</p>
      </div>
    </div>
  );
}
