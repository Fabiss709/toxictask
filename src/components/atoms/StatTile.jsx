export default function StatTile({ value, label, color = "text-secondary" }) {
  return <div className="flex flex-col items-center justify-center rounded-lg bg-surface-container-lowest p-2 text-center shadow-sm">
    <span className={`font-headline text-xl font-bold leading-none ${color}`}>{value}</span>
    <span className="mt-1 text-[10px] text-on-surface-variant">{label}</span>
  </div>;
}
