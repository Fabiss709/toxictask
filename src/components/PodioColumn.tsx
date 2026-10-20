import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface PodioColumnProps {
  isLeader?: boolean;
  name: string;
  xp: string;
  tag: string;
  actionText: string;
  crownText?: string;
}

export const PodioColumn: React.FC<PodioColumnProps> = ({
  isLeader,
  name,
  xp,
  tag,
  actionText,
  crownText,
}) => {
  return (
    <View style={[styles.col, isLeader && styles.colLeader]}>
      {crownText && (
        <View style={styles.crown}>
          <Text style={styles.crownText}>{crownText}</Text>
        </View>
      )}
      <View style={[styles.avatar, isLeader && styles.leaderAvatar]}>
        <Text style={{ fontSize: 18 }}>{isLeader ? "🧝‍♀️" : "👨‍💻"}</Text>
      </View>
      <Text style={[styles.name, isLeader && styles.textWhite]}>{name}</Text>
      <Text style={[styles.xp, isLeader && styles.textLime]}>{xp}</Text>
      <Text style={styles.tag}>{tag}</Text>
      <TouchableOpacity style={[styles.btn, isLeader && styles.btnDark]}>
        <Text style={styles.btnText}>{actionText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  col: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 8,
    alignItems: "center",
    marginHorizontal: 3,
  },
  colLeader: {
    backgroundColor: "#251538",
    paddingVertical: 14,
    transform: [{ translateY: -6 }],
  },
  crown: {
    backgroundColor: "#84cc16",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    marginBottom: 4,
  },
  crownText: {
    fontSize: 8,
    fontWeight: "bold",
    color: "#130d20",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#e5e7eb",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 4,
  },
  leaderAvatar: {
    borderColor: "#84cc16",
    borderWidth: 2,
  },
  name: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#1f162e",
  },
  xp: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#6d28d9",
  },
  tag: {
    fontSize: 8,
    color: "#6b7280",
    marginVertical: 2,
  },
  btn: {
    backgroundColor: "#7c3aed",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
    marginTop: 4,
    width: "100%",
    alignItems: "center",
  },
  btnDark: {
    backgroundColor: "#130d20",
  },
  btnText: {
    color: "#fff",
    fontSize: 9,
    fontWeight: "bold",
  },
  textWhite: {
    color: "#fff",
  },
  textLime: {
    color: "#84cc16",
  },
});
