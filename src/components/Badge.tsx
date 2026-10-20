import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface BadgeProps {
  label: string;
  variant?: "danger" | "lime" | "purple" | "subtle";
}

export const Badge: React.FC<BadgeProps> = ({ label, variant = "purple" }) => {
  const getColors = () => {
    switch (variant) {
      case "danger":
        return { bg: "#fee2e2", text: "#dc2626" };
      case "lime":
        return { bg: "#84cc16", text: "#130d20" };
      case "subtle":
        return { bg: "#e9e4f5", text: "#4c3275" };
      case "purple":
      default:
        return { bg: "#382255", text: "#ffffff" };
    }
  };

  const { bg, text } = getColors();

  return (
    <View style={[styles.badge, { backgroundColor: bg }]}>
      <Text style={[styles.text, { color: text }]}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  text: {
    fontSize: 10,
    fontWeight: "bold",
  },
});
