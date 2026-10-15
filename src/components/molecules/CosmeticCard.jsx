import Badge from "../atoms/Badge.jsx";
import Icon from "../atoms/Icon.jsx";

export default function CosmeticCard({ item }) {
  const cardStyle = item.type === "punishment" ? "bg-error-container/30" : item.type === "locked" ? "bg-surface-container opacity-80" : "bg-surface-container-low";
  return <article className={`relative flex min-w-0 flex-col rounded-lg p-2 shadow-sm ${cardStyle}`}>
    <div className="absolute right-2 top-2 z-10">
      {item.type === "equipped" ? <Badge>{item.status}</Badge>
        : item.type === "punishment" ? <Badge variant="red">{item.status}</Badge>
        : <span className="flex rounded-full bg-primary-container p-1 text-on-primary-container"><Icon name="lock" className="text-sm" /></span>}
    </div>
    <div className={`mb-2 flex h-20 items-center justify-center overflow-hidden rounded ${item.type === "punishment" ? "bg-error-container/40" : "bg-surface-container-high"}`}>
      <img alt={item.name} src={item.image} className={`h-16 w-16 object-contain ${item.type === "locked" ? "opacity-50 grayscale" : ""}`} />
    </div>
    <span className="text-xs font-bold">{item.name}</span>
    <span className={`mt-1 text-[11px] ${item.type === "punishment" ? "text-error" : item.type === "equipped" ? "text-secondary" : "text-on-surface-variant"}`}>{item.description}</span>
  </article>;
}
