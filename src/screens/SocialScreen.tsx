import { useState } from "react";
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function SocialScreen() {
  const [tab, setTab] = useState<"global" | "grupos" | "duelos">("global");

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Header Tabs */}
        <View style={styles.tabsContainer}>
          <TouchableOpacity
            style={[styles.tabBtn, tab === "global" && styles.tabBtnActive]}
            onPress={() => setTab("global")}
          >
            <Text
              style={[styles.tabText, tab === "global" && styles.tabTextActive]}
            >
              Global Diaria
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tabBtn, tab === "grupos" && styles.tabBtnActive]}
            onPress={() => setTab("grupos")}
          >
            <Text
              style={[styles.tabText, tab === "grupos" && styles.tabTextActive]}
            >
              Grupos (3)
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tabBtn, tab === "duelos" && styles.tabBtnActive]}
            onPress={() => setTab("duelos")}
          >
            <Text
              style={[styles.tabText, tab === "duelos" && styles.tabTextActive]}
            >
              1v1 🔴
            </Text>
          </TouchableOpacity>
        </View>

        {/* Card Duelo Activo */}
        <View style={styles.duelCard}>
          <View style={styles.duelHeader}>
            <View style={styles.liveBadge}>
              <Text style={styles.liveText}>● EN VIVO • DUELO A MUERTE</Text>
            </View>
            <Text style={styles.timerText}>⏱ 00h 38m 23s</Text>
          </View>

          <Text style={styles.duelTitle}>
            Vs <Text style={styles.duelOpponent}>@Carlos_Vago</Text>
          </Text>
          <Text style={styles.duelSubtitle}>
            Batalla de Pomodoros: Quien afloje hoy, se humilla solo.
          </Text>

          {/* Versus Stats */}
          <View style={styles.vsRow}>
            <View style={styles.fighter}>
              <View
                style={[styles.avatarRound, { backgroundColor: "#7540f0" }]}
              >
                <Text style={styles.avatarTxt}>TÚ</Text>
              </View>
              <View style={{ marginLeft: 6 }}>
                <Text style={styles.fighterScoreGreen}>3 Bloques</Text>
                <Text style={styles.fighterStatus}>Enfocado</Text>
              </View>
            </View>
            <Text style={styles.vsCenterText}>VS</Text>
            <View style={[styles.fighter, { justifyContent: "flex-end" }]}>
              <View style={{ marginRight: 6, alignItems: "flex-end" }}>
                <Text style={styles.fighterScoreRed}>2 Bloques</Text>
                <Text style={styles.fighterStatus}>Distraído</Text>
              </View>
              <View
                style={[styles.avatarRound, { backgroundColor: "#e2e0ea" }]}
              >
                <Text style={[styles.avatarTxt, { color: "#333" }]}>CV</Text>
              </View>
            </View>
          </View>

          {/* Barra de progreso de batalla */}
          <View style={styles.progressContainer}>
            <View
              style={[
                styles.progressBar,
                { width: "60%", backgroundColor: "#84cc16" },
              ]}
            />
            <View
              style={[
                styles.progressBar,
                { width: "40%", backgroundColor: "#ef4444" },
              ]}
            />
          </View>
          <View style={styles.progressLabels}>
            <Text style={styles.progressLeft}>
              Ventaja de +1 Pomodoro (60%)
            </Text>
            <Text style={styles.progressRight}>40%</Text>
          </View>

          {/* Castigo pactado */}
          <View style={styles.punishmentBox}>
            <Text style={styles.punishmentTag}>
              🔥 CASTIGO PACTADO EN JUEGO
            </Text>
            <Text style={styles.punishmentText}>
              "El perdedor subirá una selfie con orejas de burro a LinkedIn y
              pagará un café gourmet virtual."
            </Text>
          </View>

          {/* Botones de acción */}
          <View style={styles.actionButtonsRow}>
            <TouchableOpacity style={styles.btnAdvance}>
              <Text style={styles.btnAdvanceText}>
                ⚔️ Avanzar Bloque y Destrozarlo
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSkull}>
              <Text>💀</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Mi Posición Actual */}
        <View style={styles.myRankCard}>
          <View style={styles.myRankBadge}>
            <Text style={styles.myRankNum}>#8</Text>
          </View>
          <View style={{ flex: 1, marginLeft: 10 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.myName}>Tú (Alex)</Text>
              <Text style={styles.riskBadge}>Riesgo Descenso</Text>
            </View>
            <Text style={styles.riskAlertText}>
              ⚠️ A sólo 40 XP de caer a "Flojo Promedio"
            </Text>
          </View>
          <View style={{ alignItems: "flex-end" }}>
            <Text style={styles.xpText}>320 XP</Text>
            <Text style={styles.streakText}>🔥 25d</Text>
          </View>
        </View>

        {/* Podio de los Sin Vida */}
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.podioTitle}>Podio de los Sin Vida</Text>
          <Text style={styles.podioReset}>Reinicio en 08:18:02</Text>
        </View>

        <View style={styles.podioRow}>
          {/* Top 2 */}
          <View style={styles.podioCol}>
            <View style={styles.podioAvatarWrap}>
              <Text>💻</Text>
            </View>
            <Text style={styles.podioName}>Mateo_Code</Text>
            <Text style={styles.podioXP}>980 XP</Text>
            <Text style={styles.podioBadge}>🔥 41d</Text>
            <TouchableOpacity style={styles.podioActionBtn}>
              <Text style={styles.podioActionTxt}>Retar ⚔️</Text>
            </TouchableOpacity>
          </View>

          {/* Top 1 */}
          <View style={[styles.podioCol, styles.podioColLeader]}>
            <View style={styles.crownBadge}>
              <Text style={styles.crownTxt}>👑 #1 Implacable</Text>
            </View>
            <View
              style={[
                styles.podioAvatarWrap,
                { borderColor: "#84cc16", borderWidth: 2 },
              ]}
            >
              <Text>🧝‍♀️</Text>
            </View>
            <Text style={[styles.podioName, { color: "#fff" }]}>
              Valeria S.
            </Text>
            <Text style={[styles.podioXP, { color: "#84cc16" }]}>1,240 XP</Text>
            <Text style={styles.podioBadge}>Racha 64d</Text>
            <TouchableOpacity
              style={[styles.podioActionBtn, { backgroundColor: "#130d20" }]}
            >
              <Text style={styles.podioActionTxt}>💀 Envidiar</Text>
            </TouchableOpacity>
          </View>

          {/* Top 3 */}
          <View style={styles.podioCol}>
            <View style={styles.podioAvatarWrap}>
              <Text>👩‍💻</Text>
            </View>
            <Text style={styles.podioName}>Lucía M.</Text>
            <Text style={styles.podioXP}>850 XP</Text>
            <Text style={styles.podioBadge}>🛡 Escudo</Text>
            <TouchableOpacity style={styles.podioActionBtn}>
              <Text style={styles.podioActionTxt}>Retar ⚔️</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Zona Segura List */}
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.listSubtitle}>
            PUESTOS 4-7: TRABAJADORES POR INERCIA
          </Text>
          <Text style={styles.listTag}>Zona Segura</Text>
        </View>

        <View style={styles.simpleUserRow}>
          <Text style={styles.posNum}>4</Text>
          <View style={styles.initialsCircle}>
            <Text style={styles.initialsTxt}>DR</Text>
          </View>
          <View style={{ flex: 1, marginLeft: 8 }}>
            <Text style={styles.rowUserName}>Diego_Runner</Text>
            <Text style={styles.rowUserSub}>Hizo 5 pomodoros seguidos</Text>
          </View>
          <View style={{ alignItems: "flex-end" }}>
            <Text style={styles.rowUserXP}>720 XP</Text>
            <Text style={styles.rowUserStreak}>Racha 18d</Text>
          </View>
        </View>

        {/* Zona de Vergüenza Pública */}
        <View style={[styles.sectionHeaderRow, { marginTop: 16 }]}>
          <Text style={[styles.listSubtitle, { color: "#dc2626" }]}>
            👺 ZONA DE VERGÜENZA PÚBLICA (0 TAREAS)
          </Text>
          <Text style={[styles.listTag, { color: "#dc2626" }]}>
            Penalizados
          </Text>
        </View>

        <View style={styles.shameRow}>
          <Text style={{ fontSize: 20 }}>🤡</Text>
          <Text style={styles.posNum}>9</Text>
          <View style={{ flex: 1, marginLeft: 6 }}>
            <Text style={styles.rowUserName}>Kevin_TikToker</Text>
            <Text style={styles.shameSub}>3h en redes hoy • 0 Bloques</Text>
          </View>
          <Text style={styles.shameXP}>95 XP</Text>
          <TouchableOpacity style={styles.shameBtn}>
            <Text>📢</Text>
          </TouchableOpacity>
        </View>

        {/* Botón Flotante / Footer: Lanzar Duelo */}
        <TouchableOpacity style={styles.btnLaunchDuel}>
          <Text style={styles.btnLaunchDuelText}>
            ⚔️ Lanzar Nuevo Duelo 1v1
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#f5f3f9" },
  container: { padding: 14, paddingBottom: 60 },
  tabsContainer: {
    flexDirection: "row",
    backgroundColor: "#e8e5f2",
    borderRadius: 20,
    padding: 3,
    marginBottom: 14,
  },
  tabBtn: {
    flex: 1,
    paddingVertical: 8,
    alignItems: "center",
    borderRadius: 18,
  },
  tabBtnActive: { backgroundColor: "#231535" },
  tabText: { fontSize: 11, fontWeight: "700", color: "#665e75" },
  tabTextActive: { color: "#fff" },
  duelCard: {
    backgroundColor: "#251538",
    borderRadius: 16,
    padding: 14,
    marginBottom: 14,
  },
  duelHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  liveBadge: {
    backgroundColor: "#dc2626",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
  },
  liveText: { color: "#fff", fontSize: 9, fontWeight: "bold" },
  timerText: { color: "#84cc16", fontSize: 10, fontWeight: "bold" },
  duelTitle: { color: "#fff", fontSize: 18, fontWeight: "bold", marginTop: 10 },
  duelOpponent: { color: "#a855f7" },
  duelSubtitle: { color: "#b9b2c7", fontSize: 11, marginTop: 2 },
  vsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 12,
  },
  fighter: { flexDirection: "row", alignItems: "center", flex: 1 },
  avatarRound: {
    width: 34,
    height: 34,
    borderRadius: 17,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarTxt: { color: "#fff", fontSize: 11, fontWeight: "bold" },
  fighterScoreGreen: { color: "#84cc16", fontSize: 11, fontWeight: "bold" },
  fighterScoreRed: { color: "#f87171", fontSize: 11, fontWeight: "bold" },
  fighterStatus: { color: "#9d94ab", fontSize: 9 },
  vsCenterText: {
    color: "#dc2626",
    fontWeight: "900",
    fontSize: 14,
    marginHorizontal: 8,
  },
  progressContainer: {
    height: 8,
    borderRadius: 4,
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: "#3b2554",
  },
  progressBar: { height: "100%" },
  progressLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4,
  },
  progressLeft: { color: "#84cc16", fontSize: 9 },
  progressRight: { color: "#f87171", fontSize: 9 },
  punishmentBox: {
    backgroundColor: "#331c4b",
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  punishmentTag: { color: "#f97316", fontSize: 9, fontWeight: "bold" },
  punishmentText: {
    color: "#ddd6fe",
    fontSize: 10,
    fontStyle: "italic",
    marginTop: 2,
  },
  actionButtonsRow: { flexDirection: "row", gap: 8, marginTop: 4 },
  btnAdvance: {
    flex: 1,
    backgroundColor: "#84cc16",
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  btnAdvanceText: { color: "#130d20", fontWeight: "bold", fontSize: 12 },
  btnSkull: {
    width: 42,
    backgroundColor: "#3d255a",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  myRankCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 14,
    marginBottom: 14,
  },
  myRankBadge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#251538",
    justifyContent: "center",
    alignItems: "center",
  },
  myRankNum: { color: "#fff", fontWeight: "bold", fontSize: 12 },
  myName: { fontSize: 13, fontWeight: "bold", color: "#1f162e" },
  riskBadge: {
    backgroundColor: "#fee2e2",
    color: "#dc2626",
    fontSize: 9,
    paddingHorizontal: 6,
    borderRadius: 6,
    marginLeft: 6,
  },
  riskAlertText: { fontSize: 10, color: "#dc2626", marginTop: 2 },
  xpText: { fontSize: 13, fontWeight: "bold", color: "#1f162e" },
  streakText: { fontSize: 10, color: "#ca8a04" },
  sectionHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  podioTitle: { fontSize: 14, fontWeight: "bold", color: "#1f162e" },
  podioReset: { fontSize: 10, color: "#6b7280" },
  podioRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  podioCol: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 8,
    alignItems: "center",
    marginHorizontal: 3,
  },
  podioColLeader: {
    backgroundColor: "#251538",
    paddingVertical: 14,
    transform: [{ translateY: -6 }],
  },
  crownBadge: {
    backgroundColor: "#84cc16",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    marginBottom: 4,
  },
  crownTxt: { fontSize: 8, fontWeight: "bold", color: "#130d20" },
  podioAvatarWrap: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#e5e7eb",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 4,
  },
  podioName: { fontSize: 10, fontWeight: "bold", color: "#1f162e" },
  podioXP: { fontSize: 10, fontWeight: "bold", color: "#6d28d9" },
  podioBadge: { fontSize: 8, color: "#6b7280", marginVertical: 2 },
  podioActionBtn: {
    backgroundColor: "#7c3aed",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
    marginTop: 4,
    width: "100%",
    alignItems: "center",
  },
  podioActionTxt: { color: "#fff", fontSize: 9, fontWeight: "bold" },
  listSubtitle: { fontSize: 9, fontWeight: "bold", color: "#6b7280" },
  listTag: { fontSize: 9, color: "#16a34a", fontWeight: "bold" },
  simpleUserRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginBottom: 6,
  },
  posNum: { fontSize: 11, fontWeight: "bold", color: "#4b5563", width: 18 },
  initialsCircle: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: "#e5e7eb",
    justifyContent: "center",
    alignItems: "center",
  },
  initialsTxt: { fontSize: 9, fontWeight: "bold", color: "#374151" },
  rowUserName: { fontSize: 11, fontWeight: "bold", color: "#1f162e" },
  rowUserSub: { fontSize: 9, color: "#6b7280" },
  rowUserXP: { fontSize: 11, fontWeight: "bold", color: "#1f162e" },
  rowUserStreak: { fontSize: 9, color: "#6b7280" },
  shameRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fee2e2",
    padding: 10,
    borderRadius: 10,
    marginBottom: 6,
  },
  shameSub: { fontSize: 9, color: "#b91c1c" },
  shameXP: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#b91c1c",
    marginRight: 8,
  },
  shameBtn: { backgroundColor: "#dc2626", padding: 6, borderRadius: 8 },
  btnLaunchDuel: {
    backgroundColor: "#7c3aed",
    paddingVertical: 14,
    borderRadius: 16,
    alignItems: "center",
    marginTop: 14,
  },
  btnLaunchDuelText: { color: "#fff", fontSize: 13, fontWeight: "bold" },
});
