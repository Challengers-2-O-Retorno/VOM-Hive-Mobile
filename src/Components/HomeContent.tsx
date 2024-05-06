import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Topic from "./Topic"
import HomeButton from "./HomeButton";

export default function HomeContent() {
  return (
    <View style={styles.content}>
      <Text style={styles.title} >
        Aproveitando o máximo da técnologia para impulsionar seu crescimento
        empresarial
      </Text>
      <Topic/>
      <HomeButton/>
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
    paddingVertical: 25,
    fontSize: 25,
    textAlign: "center",
    lineHeight: 45
  }
});
