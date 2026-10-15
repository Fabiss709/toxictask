import Icon from "./Icon.jsx";

export default function ActionButton({ icon, title, subtitle, variant = "neutral", onClick, trailingIcon }) {
  const style = variant === "danger"
    ? "bg-error text-on-error"
    : variant === "dark"
      ? "bg-surface-container-high text-on-surface"
      : "bg-surface-container-low text-on-surface";
  return <button type="button" onClick={onClick} className={`flex w-full items-center justify-between gap-3 rounded-xl px-4 py-3 text-left transition hover:brightness-95 ${style}`}>
    <span className="flex min-w-0 items-center gap-3">
      <Icon name={icon} className="text-2xl" />
      <span className="min-w-0">
        <span className="block font-headline text-sm font-bold leading-tight">{title}</span>
        {subtitle && <span className="mt-1 block text-[10px] opacity-90">{subtitle}</span>}
      </span>
    </span>
    {trailingIcon && <Icon name={trailingIcon} className="text-xl" />}
  </button>;
}
