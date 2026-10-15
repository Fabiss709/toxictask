import Icon from "../atoms/Icon.jsx";
import { navItems } from "../../data/profile.js";

export default function BottomNavigation() {
  return <nav className="fixed bottom-0 z-50 flex h-16 w-full max-w-md items-center justify-around bg-primary-container/95 px-1 text-on-primary-container shadow backdrop-blur-xl">
    {navItems.map(([icon, label], index) => <a key={label} href={`#${label.toLowerCase()}`} onClick={e => { if (label !== "Inicio") { e.preventDefault(); window.alert(`La sección ${label} aún no está conectada.`); } }} className={`flex h-11 min-w-[50px] flex-col items-center justify-center transition-colors hover:text-tertiary-fixed ${index === 0 ? "font-bold text-tertiary-fixed" : ""}`}>
      <Icon name={icon} className="text-2xl" /><span className="mt-0.5 text-[9px]">{label}</span>
    </a>)}
  </nav>;
}
