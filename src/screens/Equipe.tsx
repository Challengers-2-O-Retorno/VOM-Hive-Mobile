import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import Membro from "../Components/Membro";

export default function Equipe() {
  return (
    <View style={styles.main}>
      <Text>Conheca a equipe por trás do projeto</Text>
      <ScrollView>
        <View style={styles.container}>
        <Membro avatar={"https://avatars.githubusercontent.com/gutolive09"} name={"Gustavo de Oliveira Azevedo"}  role={"Front lead"}/>
        <Membro avatar={"https://avatars.githubusercontent.com/Mmateus106"} name={"Mateus Mantovani Araújo"}  role={"Front lead"}/>
        <Membro avatar={"https://avatars.githubusercontent.com/Jixatos"} name={"Juan de Godoy"}  role={"Front lead"}/>
        <Membro avatar={"https://avatars.githubusercontent.com/gabrielrodri33"} name={"Gabriel Siqueira Rodrigues"}  role={"Front lead"}/>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    paddingTop: 80,
  },
  container:{
    flex: 1,
    gap: 30,
    marginVertical: 30
  }
});
