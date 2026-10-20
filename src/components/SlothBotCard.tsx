import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const SlothBotCard: React.FC = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.icon}>🤖</Text>
      <View style={styles.textContainer}>
        <Text style={styles.title}>SLOTHBOT AUDITOR</Text>
        <Text style={styles.quote}>
          "Sé realista, dijiste lo mismo el martes y te fuiste a dormir 3 horas
          de siesta con el archivo sin guardar."
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#feebe9",
    padding: 12,
    borderRadius: 14,
    marginVertical: 8,
    alignItems: "center",
  },
  icon: {
    fontSize: 24,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#cf2e2e",
  },
  quote: {
    fontSize: 11,
    color: "#613b3b",
    fontStyle: "italic",
    marginTop: 2,
  },
});
