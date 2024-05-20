import { StyleSheet, TextInput, Pressable, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { auth } from "../services/firebaseConfig";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";

export default function Login({navigation}) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  function login(){
    signInWithEmailAndPassword(auth, email, pass)
      .then((user) =>{
        console.log(user.user)
        navigation.navigate("Portal")
      })
      .catch((error)=>{
        console.log(error.message)
        alert("Ocorreu algo de errado!")
      })
  }

  async function resetPass(){
    await sendPasswordResetEmail(auth, email)
    .then(() =>{
      alert("Enviamos um email para você redefinir sua senha")
    })
    .catch((error)=>{
      console.log(error)
      alert("Ocorreu algum problema!")
    })
  }

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.inputContainer}>
        <View>
          <Text style={styles.inputLabel} >Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={(value) => setEmail(value)}
          />
        </View>
        <View>
          <Text style={styles.inputLabel} >Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="senha"
            secureTextEntry={true}
            value={pass}
            onChangeText={(value) => setPass(value)}
          />
        </View>

        <Pressable style={styles.btn}  android_ripple={{color: "#D88318", radius: 300}} onPress={login} >
          <Text style={styles.btnText}>Enviar</Text>
        </Pressable>
        <Pressable>
        <Text style={styles.btnReset} onPress={resetPass}>Esqueceu a senha ? Clique Aqui</Text>
      </Pressable>
      <Pressable>
        <Text style={styles.btnReset} onPress={()=> navigation.navigate("Cadastro")} >Não tem conta ? Cadastre-se já</Text>
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
  btnReset:{
    textDecorationLine: "underline",
    fontWeight:"bold",
    fontSize: 15
  }
});
