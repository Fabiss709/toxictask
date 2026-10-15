import Icon from "./Icon.jsx";

export default function SectionTitle({ icon, title, subtitle, dark = false }) {
  return (
    <div className="flex items-center gap-2">
      <Icon name={icon} className={`text-[22px] ${dark ? "text-tertiary-fixed" : "text-secondary"}`} />
      <div>
        <h2 className={`font-headline text-lg font-bold ${dark ? "text-on-primary" : "text-on-surface"}`}>{title}</h2>
        {subtitle && <p className={`text-xs ${dark ? "text-on-primary-container" : "text-on-surface-variant"}`}>{subtitle}</p>}
      </div>
    </div>
  );
}
