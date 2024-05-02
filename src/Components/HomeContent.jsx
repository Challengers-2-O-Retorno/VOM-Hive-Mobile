import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function HomeContent() {
  return (
    <View style={styles.content}>
      <Text>a</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: "#fff",
    width: "100%",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
});
