import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Topic from "./Topic"

export default function HomeContent() {
  return (
    <View style={styles.content}>
      <Text style={styles.title} >
        Aproveitando o máximo da técnologia para impulsionar seu crescimento
        empresarial
      </Text>
      <Topic/>
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
  title:{
    paddingVertical: 250,
    fontSize: 30,
    textAlign: "center",
    lineHeight: 45
  }
});
