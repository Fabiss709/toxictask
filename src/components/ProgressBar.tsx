import React from "react";
import { StyleSheet, View } from "react-native";

interface ProgressBarProps {
  leftPercent: number;
  leftColor?: string;
  rightColor?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  leftPercent,
  leftColor = "#84cc16",
  rightColor = "#ef4444",
}) => {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.bar,
          { width: `${leftPercent}%`, backgroundColor: leftColor },
        ]}
      />
      <View
        style={[
          styles.bar,
          { width: `${100 - leftPercent}%`, backgroundColor: rightColor },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 8,
    borderRadius: 4,
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: "#3b2554",
  },
  bar: {
    height: "100%",
  },
});
