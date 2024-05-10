import { StyleSheet, TextInput, Pressable, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

export default function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.inputContainer}>
        <View>
          <Text style={styles.inputLabel} >Usuário</Text>
          <TextInput
            style={styles.input}
            placeholder="usuario"
            value={user}
            onChangeText={(value) => setUser(value)}
          />
        </View>
        <View>
          <Text style={styles.inputLabel} >Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="usuario"
            secureTextEntry={true}
            value={pass}
            onChangeText={(value) => setPass(value)}
          />
        </View>

        <Pressable style={styles.btn}  android_ripple={{color: "#D88318", radius: 300}}>
          <Text style={styles.btnText}>Enviar</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#D88318",
    height: "100%",
    paddingVertical: 50,
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 40,
  },
  input: {
    backgroundColor: "#fff",
    color: "#000",
    fontSize: 20,
    width: 300,
    padding: 15,
    borderRadius: 35,
  },
  inputLabel:{
    paddingLeft: 25,
    fontWeight: "bold",
    fontSize: 15
  },
  btn: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 35,
  },
  btnText: {
    fontSize: 20,
    color: "#000",
    fontWeight: "bold",
  },
});
