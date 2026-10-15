import ActionButton from "../atoms/ActionButton.jsx";

export default function AccountActions() {
  const pause = () => window.alert("Pausa de piedad solicitada. Conecta aquí la lógica de comodines.");
  const logout = () => window.alert("Conecta aquí la lógica de cierre de sesión.");
  return <section className="flex flex-col gap-2 pt-2">
    <ActionButton icon="pause_circle" title="Pausa de Piedad (Comodín 24h)" subtitle="3 disponibles" variant="dark" onClick={pause} />
    <button type="button" onClick={logout} className="flex w-full items-center justify-center gap-2 rounded-xl bg-surface-container-low px-4 py-3 text-sm font-bold text-error hover:bg-error-container/40">
      <span className="material-symbols-outlined text-lg">logout</span>Cerrar Sesión
    </button>
  </section>;
}
