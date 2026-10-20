import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ProgressBar } from "./ProgressBar";

export const DuelCard: React.FC = () => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.liveTag}>
          <Text style={styles.liveText}>● EN VIVO • DUELO A MUERTE</Text>
        </View>
        <Text style={styles.timer}>⏱ 00h 38m 23s</Text>
      </View>

      <Text style={styles.title}>
        Vs <Text style={styles.opponent}>@Carlos_Vago</Text>
      </Text>
      <Text style={styles.subtitle}>
        Batalla de Pomodoros: Quien afloje hoy, se humilla solo.
      </Text>

      {/* Fila de enfrentamiento */}
      <View style={styles.vsRow}>
        <View style={styles.player}>
          <View style={[styles.avatar, { backgroundColor: "#7540f0" }]}>
            <Text style={styles.avatarTxt}>TÚ</Text>
          </View>
          <View style={{ marginLeft: 6 }}>
            <Text style={styles.scoreGreen}>3 Bloques</Text>
            <Text style={styles.status}>Enfocado</Text>
          </View>
        </View>
        <Text style={styles.vsText}>VS</Text>
        <View style={[styles.player, { justifyContent: "flex-end" }]}>
          <View style={{ marginRight: 6, alignItems: "flex-end" }}>
            <Text style={styles.scoreRed}>2 Bloques</Text>
            <Text style={styles.status}>Distraído</Text>
          </View>
          <View style={[styles.avatar, { backgroundColor: "#e2e0ea" }]}>
            <Text style={[styles.avatarTxt, { color: "#333" }]}>CV</Text>
          </View>
        </View>
      </View>

      <ProgressBar leftPercent={60} />
      <View style={styles.labels}>
        <Text style={styles.leftLabel}>Ventaja de +1 Pomodoro (60%)</Text>
        <Text style={styles.rightLabel}>40%</Text>
      </View>

      <View style={styles.punishmentCard}>
        <Text style={styles.punishmentTag}>🔥 CASTIGO PACTADO EN JUEGO</Text>
        <Text style={styles.punishmentDesc}>
          "El perdedor subirá una selfie con orejas de burro a LinkedIn y pagará
          un café gourmet virtual."
        </Text>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.advanceBtn}>
          <Text style={styles.advanceTxt}>⚔️ Avanzar Bloque y Destrozarlo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.skullBtn}>
          <Text>💀</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#251538",
    borderRadius: 16,
    padding: 14,
    marginBottom: 14,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  liveTag: {
    backgroundColor: "#dc2626",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
  },
  liveText: {
    color: "#fff",
    fontSize: 9,
    fontWeight: "bold",
  },
  timer: {
    color: "#84cc16",
    fontSize: 10,
    fontWeight: "bold",
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  opponent: {
    color: "#a855f7",
  },
  subtitle: {
    color: "#b9b2c7",
    fontSize: 11,
    marginTop: 2,
  },
  vsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 12,
  },
  player: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  avatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarTxt: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "bold",
  },
  scoreGreen: {
    color: "#84cc16",
    fontSize: 11,
    fontWeight: "bold",
  },
  scoreRed: {
    color: "#f87171",
    fontSize: 11,
    fontWeight: "bold",
  },
  status: {
    color: "#9d94ab",
    fontSize: 9,
  },
  vsText: {
    color: "#dc2626",
    fontWeight: "900",
    fontSize: 14,
    marginHorizontal: 8,
  },
  labels: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4,
  },
  leftLabel: {
    color: "#84cc16",
    fontSize: 9,
  },
  rightLabel: {
    color: "#f87171",
    fontSize: 9,
  },
  punishmentCard: {
    backgroundColor: "#331c4b",
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  punishmentTag: {
    color: "#f97316",
    fontSize: 9,
    fontWeight: "bold",
  },
  punishmentDesc: {
    color: "#ddd6fe",
    fontSize: 10,
    fontStyle: "italic",
    marginTop: 2,
  },
  actions: {
    flexDirection: "row",
    gap: 8,
    marginTop: 4,
  },
  advanceBtn: {
    flex: 1,
    backgroundColor: "#84cc16",
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  advanceTxt: {
    color: "#130d20",
    fontWeight: "bold",
    fontSize: 12,
  },
  skullBtn: {
    width: 42,
    backgroundColor: "#3d255a",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
