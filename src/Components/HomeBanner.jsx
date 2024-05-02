import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Robot from "./Robot";
import { useFonts } from "expo-font";

export default function HomeBanner() {
    const [fontsLoaded] = useFonts({
        'BebasNeue': require('../../assets/fonts/BebasNeue-Regular.ttf'),
      });

  return (
    <View style={styles.container}>
      <Text style={styles.title} >Eleve o seu marketing para o próximo patamar com inteligência artificial</Text>
      <Robot style={styles.robot} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D88318",
    height: 400,
    position: "relative",
    paddingHorizontal: 20,
    paddingVertical: 40
  },
  robot: {
    position: "absolute",
    right: 10,
    bottom: 0,
  },
  title:{
    fontFamily:'BebasNeue',
    fontSize: 40,
    lineHeight: 70
  }

});
