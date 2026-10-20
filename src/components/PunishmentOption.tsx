import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RadioIndicator } from "./RadioIndicator";

interface PunishmentOptionProps {
  title: string;
  description: string;
  selected: boolean;
  onSelect: () => void;
}

export const PunishmentOption: React.FC<PunishmentOptionProps> = ({
  title,
  description,
  selected,
  onSelect,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onSelect}
      activeOpacity={0.7}
    >
      <RadioIndicator selected={selected} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#eceaf0",
    marginBottom: 8,
  },
  content: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#27203a",
  },
  description: {
    fontSize: 10,
    color: "#7b748c",
    marginTop: 2,
  },
});
