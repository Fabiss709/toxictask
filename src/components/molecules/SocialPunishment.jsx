import Icon from "../atoms/Icon.jsx";

export default function SocialPunishment({ onEdit }) {
  return <div className="flex items-center justify-between gap-3 rounded-lg bg-surface-container-low p-2">
    <div className="flex min-w-0 items-center gap-2">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-container-high"><Icon name="chat_bubble" className="text-xl text-secondary" /></div>
      <div><p className="text-xs font-bold">Castigo Social Activo</p><p className="mt-1 text-[11px] text-on-surface-variant">Envío automático de mensaje humillante a tu grupo de amigos al posponer</p></div>
    </div>
    <button type="button" onClick={onEdit} className="shrink-0 rounded bg-surface-container px-3 py-1 text-[10px] font-bold hover:bg-surface-container-high">Editar</button>
  </div>;
}
