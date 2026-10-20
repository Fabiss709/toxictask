import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface TimeBoxCardProps {
  label: string;
  value: string;
  icon?: string;
}

export const TimeBoxCard: React.FC<TimeBoxCardProps> = ({
  label,
  value,
  icon,
}) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.box}>
        <Text style={styles.value}>{value}</Text>
        {icon ? <Text style={styles.icon}>{icon}</Text> : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 0.48,
  },
  label: {
    fontSize: 11,
    fontWeight: "700",
    color: "#27203a",
    marginBottom: 5,
  },
  box: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#eceaf0",
    borderRadius: 12,
    padding: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  value: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#27203a",
  },
  icon: {
    fontSize: 14,
  },
});
