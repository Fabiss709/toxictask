import { useState } from "react";
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function NuevaObligacionScreen() {
  const [tarea, setTarea] = useState("");
  const [prioridad, setPrioridad] = useState<
    "vital" | "importante" | "ordinario"
  >("vital");
  const [castigo, setCastigo] = useState<string>("payaso");
  const [aceptaTerminos, setAceptaTerminos] = useState(true);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Cabecera modal / Protocolo */}
        <View style={styles.topBar}>
          <View style={styles.tagBadge}>
            <View style={styles.purpleDot} />
            <Text style={styles.tagBadgeText}>
              PROTOCOLO ANTI-PROCRASTINACIÓN
            </Text>
          </View>
          <TouchableOpacity style={styles.closeBtn}>
            <Text style={styles.closeBtnText}>✕</Text>
          </TouchableOpacity>
        </View>

        {/* Título */}
        <View style={styles.titleContainer}>
          <Text style={styles.mainTitle}>
            Nueva Obligación{" "}
            <Text style={styles.badgeIneludible}>Ineludible</Text>
          </Text>
          <Text style={styles.subTitle}>
            O tu próxima excusa gloriosamente redactada. Elige con cautela.
          </Text>
        </View>

        {/* Input Tarea */}
        <View style={styles.section}>
          <View style={styles.labelRow}>
            <Text style={styles.inputLabel}>
              ¿Qué vas a fingir que harás hoy?
            </Text>
            <Text style={styles.charCount}>Máx. 80 car.</Text>
          </View>
          <TextInput
            style={styles.textInput}
            placeholder="Ej. Terminar informe contable sin abrir redes sociales"
            placeholderTextColor="#888"
            maxLength={80}
            value={tarea}
            onChangeText={setTarea}
          />
        </View>

        {/* Slothbot Auditor */}
        <View style={styles.slothCard}>
          <Text style={styles.slothIcon}>🤖</Text>
          <View style={{ flex: 1 }}>
            <Text style={styles.slothTitle}>SLOTHBOT AUDITOR</Text>
            <Text style={styles.slothText}>
              "Sé realista, dijiste lo mismo el martes y te fuiste a dormir 3
              horas de siesta con el archivo sin guardar."
            </Text>
          </View>
        </View>

        {/* Nivel de Gravedad */}
        <Text style={styles.sectionHeader}>Nivel de Gravedad & Riesgo</Text>

        <TouchableOpacity
          style={[
            styles.riskOption,
            prioridad === "vital" && styles.riskOptionSelected,
          ]}
          onPress={() => setPrioridad("vital")}
        >
          <Text style={styles.riskIcon}>🔥</Text>
          <View style={{ flex: 1 }}>
            <Text style={styles.riskTitle}>Prioridad Vital</Text>
            <Text style={styles.riskDesc}>
              Sirena ruidosa + Notificación de vergüenza a todos tus contactos
            </Text>
          </View>
          <Text style={styles.exclamation}>!</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.riskOption,
            prioridad === "importante" && styles.riskOptionSelected,
          ]}
          onPress={() => setPrioridad("importante")}
        >
          <Text style={styles.riskIcon}>📢</Text>
          <View style={{ flex: 1 }}>
            <Text style={styles.riskTitle}>Importante</Text>
            <Text style={styles.riskDesc}>
              Humillación automática en el feed de tus contactos
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.riskOption,
            prioridad === "ordinario" && styles.riskOptionSelected,
          ]}
          onPress={() => setPrioridad("ordinario")}
        >
          <Text style={styles.riskIcon}>😐</Text>
          <View style={{ flex: 1 }}>
            <Text style={styles.riskTitle}>Trámite Ordinario</Text>
            <Text style={styles.riskDesc}>
              Comentario cínico por defecto de SlothBot
            </Text>
          </View>
        </TouchableOpacity>

        {/* Tiempos */}
        <View style={styles.timeRow}>
          <View style={styles.timeCol}>
            <Text style={styles.timeLabel}>⏰ Hora Límite</Text>
            <View style={styles.timeBox}>
              <Text style={styles.timeVal}>16:30</Text>
              <Text>🕒</Text>
            </View>
          </View>
          <View style={styles.timeCol}>
            <Text style={styles.timeLabel}>⌛ Bloque Foco</Text>
            <View style={styles.timeBox}>
              <Text style={styles.timeVal}>Intensivo (45m)</Text>
            </View>
          </View>
        </View>

        {/* Banner Riesgo */}
        <View style={styles.riskBanner}>
          <View>
            <Text style={styles.riskBannerTag}>TASA DE FRACASO ESTIMADA</Text>
            <Text style={styles.riskBannerValue}>68.4% de riesgo</Text>
          </View>
          <View style={styles.alertCircle}>
            <Text style={{ color: "#1a102b", fontWeight: "bold" }}>!</Text>
          </View>
        </View>

        {/* Plan B */}
        <View style={styles.section}>
          <Text style={styles.planBTitle}>
            🛠 Plan B Obligatorio (Anti-Parálisis)
          </Text>
          <Text style={styles.planBSub}>
            Si te gana la flojera o se cae internet, ¿cuál es tu micro-paso
            mínimo para no pagar la fianza?
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Ej: Al menos escribir 3 líneas en el bloc de notas"
            placeholderTextColor="#888"
          />
        </View>

        {/* Castigos */}
        <Text style={styles.sectionHeader}>
          🎭 Castigo Real por Incumplimiento
        </Text>
        {[
          {
            id: "payaso",
            title: "Foto de perfil de payaso por 24 horas",
            desc: "Publicada automáticamente en tu feed y WhatsApp si vence el tiempo",
          },
          {
            id: "muro",
            title: "Publicar excusa en el Muro de la Vergüenza",
            desc: "Notifica a tus amigos para que te liquiden en comentarios",
          },
          {
            id: "burro",
            title: "Subir foto con gorro de burro al feed",
            desc: "Filtro forzado con IA publicado como tu avatar 24h",
          },
        ].map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.radioOption}
            onPress={() => setCastigo(item.id)}
          >
            <View
              style={[
                styles.radioCircle,
                castigo === item.id && styles.radioCircleActive,
              ]}
            />
            <View style={{ flex: 1, marginLeft: 10 }}>
              <Text style={styles.radioTitle}>{item.title}</Text>
              <Text style={styles.radioDesc}>{item.desc}</Text>
            </View>
          </TouchableOpacity>
        ))}

        {/* Checkbox Compromiso */}
        <TouchableOpacity
          style={styles.checkboxRow}
          onPress={() => setAceptaTerminos(!aceptaTerminos)}
        >
          <View
            style={[styles.checkbox, aceptaTerminos && styles.checkboxActive]}
          >
            {aceptaTerminos && (
              <Text style={{ color: "#fff", fontSize: 10 }}>✓</Text>
            )}
          </View>
          <Text style={styles.checkboxText}>
            Renuncio formalmente a culpar a Mercurio Retrógrado, a la cafeína
            tardía o al cansancio espiritual. Asumo las consecuencias.
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#fcfaff" },
  container: { padding: 18, paddingBottom: 50 },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tagBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e9e4f5",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  purpleDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#7540f0",
    marginRight: 6,
  },
  tagBadgeText: { fontSize: 10, fontWeight: "700", color: "#4c3275" },
  closeBtn: { padding: 6, backgroundColor: "#eceaf0", borderRadius: 15 },
  closeBtnText: { fontSize: 12, fontWeight: "bold", color: "#555" },
  titleContainer: { marginTop: 14, marginBottom: 12 },
  mainTitle: { fontSize: 22, fontWeight: "bold", color: "#1a102b" },
  badgeIneludible: {
    backgroundColor: "#ffd4cf",
    color: "#e63946",
    fontSize: 11,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
    overflow: "hidden",
  },
  subTitle: { fontSize: 12, color: "#68607a", marginTop: 4 },
  section: { marginVertical: 10 },
  labelRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  inputLabel: { fontSize: 12, fontWeight: "700", color: "#27203a" },
  charCount: { fontSize: 11, color: "#908aa0" },
  textInput: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#eceaf0",
    borderRadius: 12,
    padding: 12,
    fontSize: 13,
    color: "#27203a",
  },
  slothCard: {
    flexDirection: "row",
    backgroundColor: "#feebe9",
    padding: 12,
    borderRadius: 14,
    marginVertical: 8,
    alignItems: "center",
  },
  slothIcon: { fontSize: 24, marginRight: 10 },
  slothTitle: { fontSize: 10, fontWeight: "bold", color: "#cf2e2e" },
  slothText: {
    fontSize: 11,
    color: "#613b3b",
    fontStyle: "italic",
    marginTop: 2,
  },
  sectionHeader: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#27203a",
    marginTop: 14,
    marginBottom: 8,
  },
  riskOption: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#eceaf0",
    marginBottom: 8,
  },
  riskOptionSelected: { backgroundColor: "#2f1c42", borderColor: "#2f1c42" },
  riskIcon: { fontSize: 20, marginRight: 10 },
  riskTitle: { fontSize: 13, fontWeight: "bold", color: "#27203a" },
  riskDesc: { fontSize: 10, color: "#7b748c" },
  exclamation: {
    color: "#88e026",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 8,
  },
  timeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  timeCol: { flex: 0.48 },
  timeLabel: {
    fontSize: 11,
    fontWeight: "700",
    color: "#27203a",
    marginBottom: 5,
  },
  timeBox: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#eceaf0",
    borderRadius: 12,
    padding: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  timeVal: { fontSize: 13, fontWeight: "bold", color: "#27203a" },
  riskBanner: {
    backgroundColor: "#1d152c",
    padding: 16,
    borderRadius: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 12,
  },
  riskBannerTag: { color: "#88e026", fontSize: 9, fontWeight: "bold" },
  riskBannerValue: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 2,
  },
  alertCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#88e026",
    justifyContent: "center",
    alignItems: "center",
  },
  planBTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#653aa0",
    marginBottom: 4,
  },
  planBSub: { fontSize: 11, color: "#7b748c", marginBottom: 8 },
  radioOption: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#eceaf0",
    marginBottom: 8,
  },
  radioCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: "#b1a7c7",
  },
  radioCircleActive: { borderColor: "#7540f0", backgroundColor: "#7540f0" },
  radioTitle: { fontSize: 12, fontWeight: "bold", color: "#27203a" },
  radioDesc: { fontSize: 10, color: "#7b748c" },
  checkboxRow: {
    flexDirection: "row",
    marginTop: 12,
    alignItems: "flex-start",
  },
  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: "#7540f0",
    backgroundColor: "#7540f0",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    marginTop: 2,
  },
  checkboxActive: { backgroundColor: "#7540f0" },
  checkboxText: { flex: 1, fontSize: 11, color: "#7b748c", lineHeight: 16 },
});
