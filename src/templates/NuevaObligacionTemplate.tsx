import React, { useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { Badge } from "../components/Badge";
import { PunishmentOption } from "../components/PunishmentOption";
import { RiskCardOption } from "../components/RiskCardOption";
import { SlothBotCard } from "../components/SlothBotCard";
import { TimeBoxCard } from "../components/TimeBoxCard";

export const NuevaObligacionTemplate: React.FC = () => {
  const [tarea, setTarea] = useState("");
  const [prioridad, setPrioridad] = useState<
    "vital" | "importante" | "ordinario"
  >("vital");
  const [castigo, setCastigo] = useState("payaso");
  const [aceptaTerminos, setAceptaTerminos] = useState(true);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Badge label="PROTOCOLO ANTI-PROCRASTINACIÓN" variant="subtle" />
        <TouchableOpacity style={styles.closeBtn}>
          <Text style={styles.closeText}>✕</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.titleWrapper}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Nueva Obligación </Text>
          <Badge label="Ineludible" variant="danger" />
        </View>
        <Text style={styles.subtitle}>
          O tu próxima excusa gloriosamente redactada. Elige con cautela.
        </Text>
      </View>

      <View style={styles.inputSection}>
        <View style={styles.labelRow}>
          <Text style={styles.label}>¿Qué vas a fingir que harás hoy?</Text>
          <Text style={styles.charLimit}>Máx. 80 car.</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Ej. Terminar informe contable sin abrir redes sociales"
          placeholderTextColor="#888"
          maxLength={80}
          value={tarea}
          onChangeText={setTarea}
        />
      </View>

      <SlothBotCard />

      <Text style={styles.sectionTitle}>Nivel de Gravedad & Riesgo</Text>
      <RiskCardOption
        icon="🔥"
        title="Prioridad Vital"
        description="Sirena ruidosa + Notificación de vergüenza a todos tus contactos"
        selected={prioridad === "vital"}
        onPress={() => setPrioridad("vital")}
        hasExclamation
      />
      <RiskCardOption
        icon="📢"
        title="Importante"
        description="Humillación automática en el feed de tus contactos"
        selected={prioridad === "importante"}
        onPress={() => setPrioridad("importante")}
      />
      <RiskCardOption
        icon="😐"
        title="Trámite Ordinario"
        description="Comentario cínico por defecto de SlothBot"
        selected={prioridad === "ordinario"}
        onPress={() => setPrioridad("ordinario")}
      />

      <View style={styles.timeRow}>
        <TimeBoxCard label="⏰ Hora Límite" value="16:30" icon="🕒" />
        <TimeBoxCard label="⌛ Bloque Foco" value="Intensivo (45m)" />
      </View>

      <View style={styles.banner}>
        <View>
          <Text style={styles.bannerTag}>TASA DE FRACASO ESTIMADA</Text>
          <Text style={styles.bannerVal}>68.4% de riesgo</Text>
        </View>
        <View style={styles.bannerCircle}>
          <Text style={{ fontWeight: "bold" }}>!</Text>
        </View>
      </View>

      <View style={styles.inputSection}>
        <Text style={styles.planBTitle}>
          🛠 Plan B Obligatorio (Anti-Parálisis)
        </Text>
        <Text style={styles.planBSubtitle}>
          Si te gana la flojera o se cae internet, ¿cuál es tu micro-paso mínimo
          para no pagar la fianza?
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Ej: Al menos escribir 3 líneas en el bloc de notas"
          placeholderTextColor="#888"
        />
      </View>

      <Text style={styles.sectionTitle}>
        🎭 Castigo Real por Incumplimiento
      </Text>
      <PunishmentOption
        title="Foto de perfil de payaso por 24 horas"
        description="Publicada automáticamente en tu feed y WhatsApp si vence el tiempo"
        selected={castigo === "payaso"}
        onSelect={() => setCastigo("payaso")}
      />
      <PunishmentOption
        title="Publicar excusa en el Muro de la Vergüenza"
        description="Notifica a tus amigos para que te liquiden en comentarios"
        selected={castigo === "muro"}
        onSelect={() => setCastigo("muro")}
      />
      <PunishmentOption
        title="Subir foto con gorro de burro al feed"
        description="Filtro forzado con IA publicado como tu avatar 24h"
        selected={castigo === "burro"}
        onSelect={() => setCastigo("burro")}
      />

      <TouchableOpacity
        style={styles.checkboxRow}
        onPress={() => setAceptaTerminos(!aceptaTerminos)}
      >
        <View style={[styles.check, aceptaTerminos && styles.checkActive]}>
          {aceptaTerminos && (
            <Text style={{ color: "#fff", fontSize: 10 }}>✓</Text>
          )}
        </View>
        <Text style={styles.checkText}>
          Renuncio formalmente a culpar a Mercurio Retrógrado, a la cafeína
          tardía o al cansancio espiritual. Asumo las consecuencias.
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 18, paddingBottom: 60 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  closeBtn: { padding: 6, backgroundColor: "#eceaf0", borderRadius: 15 },
  closeText: { fontSize: 12, fontWeight: "bold", color: "#555" },
  titleWrapper: { marginTop: 14, marginBottom: 12 },
  titleRow: { flexDirection: "row", alignItems: "center" },
  title: { fontSize: 22, fontWeight: "bold", color: "#1a102b" },
  subtitle: { fontSize: 12, color: "#68607a", marginTop: 4 },
  inputSection: { marginVertical: 10 },
  labelRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  label: { fontSize: 12, fontWeight: "700", color: "#27203a" },
  charLimit: { fontSize: 11, color: "#908aa0" },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#eceaf0",
    borderRadius: 12,
    padding: 12,
    fontSize: 13,
    color: "#27203a",
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#27203a",
    marginTop: 14,
    marginBottom: 8,
  },
  timeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  banner: {
    backgroundColor: "#1d152c",
    padding: 16,
    borderRadius: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 12,
  },
  bannerTag: { color: "#84cc16", fontSize: 9, fontWeight: "bold" },
  bannerVal: { color: "#fff", fontSize: 18, fontWeight: "bold", marginTop: 2 },
  bannerCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#84cc16",
    justifyContent: "center",
    alignItems: "center",
  },
  planBTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#653aa0",
    marginBottom: 4,
  },
  planBSubtitle: { fontSize: 11, color: "#7b748c", marginBottom: 8 },
  checkboxRow: {
    flexDirection: "row",
    marginTop: 12,
    alignItems: "flex-start",
  },
  check: {
    width: 18,
    height: 18,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: "#7540f0",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    marginTop: 2,
  },
  checkActive: { backgroundColor: "#7540f0" },
  checkText: { flex: 1, fontSize: 11, color: "#7b748c", lineHeight: 16 },
});
