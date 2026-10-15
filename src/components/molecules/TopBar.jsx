import Icon from "../atoms/Icon.jsx";
import Badge from "../atoms/Badge.jsx";

export default function TopBar() {
  return <header className="fixed top-0 z-50 flex h-16 w-full max-w-md items-center justify-between bg-primary-container/95 px-4 text-on-primary shadow backdrop-blur-xl">
    <div className="flex items-center gap-3">
      <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-primary text-secondary-container">
        <Icon name="pest_control" className="text-2xl" />
        <span className="absolute -bottom-1 -right-1"><Badge variant="lime">LVL 2</Badge></span>
      </div>
      <div><h1 className="font-headline text-lg font-bold leading-none">Inicio</h1><p className="mt-1 text-[10px] tracking-wide text-tertiary-fixed-dim">Rango: Flojo Promedio</p></div>
    </div>
    <div className="flex items-center gap-1">
      <button aria-label="Notificaciones" className="rounded-full p-2 text-on-primary-container hover:text-white"><Icon name="notifications" /></button>
      <button aria-label="Ajustes" className="rounded-full p-2 text-on-primary-container hover:text-white"><Icon name="settings" /></button>
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary"><Icon name="person" /></span>
    </div>
  </header>;
}
