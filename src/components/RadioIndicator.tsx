import React from "react";
import { StyleSheet, View } from "react-native";

export const RadioIndicator: React.FC<{ selected: boolean }> = ({
  selected,
}) => {
  return (
    <View style={[styles.outer, selected && styles.outerSelected]}>
      {selected && <View style={styles.inner} />}
    </View>
  );
};

const styles = StyleSheet.create({
  outer: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#b1a7c7",
    justifyContent: "center",
    alignItems: "center",
  },
  outerSelected: {
    borderColor: "#7540f0",
  },
  inner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#7540f0",
  },
});
