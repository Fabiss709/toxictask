import { useState } from "react";
import Icon from "../atoms/Icon.jsx";

function getAggression(value) {
  if (value <= 25) return { label: `Suave (${value}%)`, description: "Te recordaré tus tareas con emojis tímidos y palabras suaves." };
  if (value <= 65) return { label: `Moderado (${value}%)`, description: "Sarcasmo balanceado y desaprobación pasivo-agresiva constante." };
  if (value <= 95) return { label: `Crudo (${value}%)`, description: "La IA no tendrá piedad con tus traumas ni tus excusas." };
  return { label: `Humillación Total (${value}%)`, description: "Llamará a tus contactos para contarles que no cumpliste tus metas." };
}

export default function AggressionControl() {
  const [value, setValue] = useState(90);
  const current = getAggression(value);
  const presets = [{label:"Suave",value:10},{label:"Moderado",value:50},{label:"Crudo",value:90},{label:"Humillación",value:100}];
  return <section className="flex flex-col gap-3 rounded-xl bg-primary-container p-4 text-on-primary shadow-lg">
    <div className="flex items-center justify-between gap-2">
      <div className="flex items-center gap-2"><Icon name="psychology" className="text-2xl text-tertiary-fixed" /><h2 className="font-headline text-lg font-bold">Agresividad IA</h2></div>
      <span className="rounded-full bg-error px-2.5 py-1 text-[10px] font-bold">{current.label}</span>
    </div>
    <div className="flex justify-between gap-1 pt-1 text-[9px] font-bold text-on-primary-container">
      {presets.map(p => <button key={p.label} type="button" onClick={() => setValue(p.value)} className={`${value === p.value ? "text-tertiary-fixed" : ""} hover:text-white`}>{p.label}</button>)}
    </div>
    <input aria-label="Nivel de agresividad de la IA" className="h-3 w-full cursor-pointer accent-[#b5f64c]" type="range" min="0" max="100" step="1" value={value} onChange={e => setValue(Number(e.target.value))} />
    <div className="flex items-start gap-2 rounded-lg bg-primary/80 p-3 shadow-inner">
      <Icon name="warning" className="mt-0.5 shrink-0 text-lg text-tertiary-fixed" />
      <p className="text-xs leading-tight">"{current.description}"</p>
    </div>
  </section>;
}
