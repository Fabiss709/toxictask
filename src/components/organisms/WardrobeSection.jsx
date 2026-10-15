import Icon from "../atoms/Icon.jsx";
import CosmeticCard from "../molecules/CosmeticCard.jsx";

export default function WardrobeSection({ cosmetics }) {
  return <section className="flex flex-col gap-2 rounded-xl bg-surface-container-lowest p-4 shadow-md">
    <div className="flex items-center justify-between gap-2">
      <div className="flex items-center gap-2"><Icon name="checkroom" className="text-[22px] text-secondary" /><h2 className="font-headline text-base font-bold">Armario y Vergüenzas</h2></div>
      <span className="whitespace-nowrap text-[9px] font-bold uppercase tracking-wider text-on-surface-variant">2/4 Equipados</span>
    </div>
    <p className="text-xs text-on-surface-variant">Viste al perezoso con tus fracasos y pequeños logros amargos.</p>
    <div className="grid grid-cols-2 gap-2 pt-1">{cosmetics.map(item => <CosmeticCard key={item.name} item={item} />)}</div>
  </section>;
}
