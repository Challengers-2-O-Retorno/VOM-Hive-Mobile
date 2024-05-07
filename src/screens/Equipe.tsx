import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import Membro from "../Components/Membro";
import { useFonts } from "expo-font";

export default function Equipe() {
  const [fontsLoaded] = useFonts({
    BebasNeue: require("../../assets/fonts/BebasNeue-Regular.ttf"),
  });
  return (
    <ScrollView style={styles.main}>
      <Text style={styles.title}>Conheca a equipe por trás do projeto</Text>

      <View style={styles.container}>
        <Membro
          avatar={"https://avatars.githubusercontent.com/gutolive09"}
          name={"Gustavo de Oliveira Azevedo"}
          role={"Front lead"}
        />
        <Membro
          avatar={"https://avatars.githubusercontent.com/Mmateus106"}
          name={"Mateus Mantovani Araújo"}
          role={"Front lead"}
        />
        <Membro
          avatar={"https://avatars.githubusercontent.com/Jixatos"}
          name={"Juan de Godoy"}
          role={"Front lead"}
        />
        <Membro
          avatar={"https://avatars.githubusercontent.com/gabrielrodri33"}
          name={"Gabriel Siqueira Rodrigues"}
          role={"Front lead"}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    paddingTop: 80,
    backgroundColor: "#D88318",
  },
  container: {
    flex: 1,
    gap: 30,
    marginVertical: 30,
    paddingVertical: 30,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    fontFamily: "BebasNeue",
  },
});
