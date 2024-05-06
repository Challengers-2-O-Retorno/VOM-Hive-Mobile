import { StyleSheet, Text, View} from "react-native";
import React from "react";
import Topic from "./Topic";
import HomeButton from "./HomeButton";

export default function HomeContent({navigation}) {
  return (
    <View style={styles.content}>
      <Text style={styles.title}>
        Aproveitando o máximo da técnologia para impulsionar seu crescimento
        empresarial
      </Text>
      <Topic />
      <View style={styles.buttonContainer} >
        <HomeButton title={"Acesse a plataforma"} navigation={navigation}/>
        <HomeButton title={"Conheça a equipe"} navigation={navigation}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: "#fff",
    width: "100%",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingBottom: 100
  },
  title: {
    paddingVertical: 25,
    fontSize: 25,
    textAlign: "center",
    lineHeight: 45,
  },
  buttonContainer:{
    flex: 1,
    alignItems: "center",
  }
});
