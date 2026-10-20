import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface RiskCardOptionProps {
  icon: string;
  title: string;
  description: string;
  selected: boolean;
  onPress: () => void;
  hasExclamation?: boolean;
}

export const RiskCardOption: React.FC<RiskCardOptionProps> = ({
  icon,
  title,
  description,
  selected,
  onPress,
  hasExclamation,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, selected && styles.containerSelected]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.icon}>{icon}</Text>
      <View style={styles.info}>
        <Text style={[styles.title, selected && styles.textSelected]}>
          {title}
        </Text>
        <Text style={[styles.description, selected && styles.descSelected]}>
          {description}
        </Text>
      </View>
      {hasExclamation && <Text style={styles.exclamation}>!</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#eceaf0",
    marginBottom: 8,
  },
  containerSelected: {
    backgroundColor: "#2f1c42",
    borderColor: "#2f1c42",
  },
  icon: {
    fontSize: 20,
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#27203a",
  },
  textSelected: {
    color: "#ffffff",
  },
  description: {
    fontSize: 10,
    color: "#7b748c",
    marginTop: 2,
  },
  descSelected: {
    color: "#bfaecf",
  },
  exclamation: {
    color: "#84cc16",
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 8,
  },
});
