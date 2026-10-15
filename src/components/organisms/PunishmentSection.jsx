import SectionTitle from "../atoms/SectionTitle.jsx";
import ActionButton from "../atoms/ActionButton.jsx";
import SocialPunishment from "../molecules/SocialPunishment.jsx";

export default function PunishmentSection() {
  const notify = (message) => window.alert(message);
  return <section className="flex flex-col gap-4 rounded-xl bg-surface-container-lowest p-4 shadow-md">
    <SectionTitle icon="alarm_on" title="Zona de Sanciones" subtitle="Medidas extremas para gente sin fuerza de voluntad." />
    <ActionButton icon="qr_code_scanner" title="Configurar Alarma QR" subtitle="Activa sirena Nivel 5 obligatoria" variant="danger" trailingIcon="chevron_right" onClick={() => notify("Aquí conectarás la configuración de la Alarma QR.")} />
    <SocialPunishment onEdit={() => notify("Aquí podrás editar el castigo social.")} />
  </section>;
}
