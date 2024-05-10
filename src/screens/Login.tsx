import { StyleSheet, TextInput, Pressable, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Login() {
  return (
    <SafeAreaView style={styles.main} >
      <View style={styles.inputContainer} >
      <TextInput
        style={styles.input} 
        placeholder='usuario'
        
        />
        <TextInput
        style={styles.input} 
        placeholder='usuario'
        secureTextEntry={true}
        
        />
        <Pressable style={styles.btn} >
          <Text style={styles.btnText} >Enviar</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  main:{
    backgroundColor: "#D88318",
    height:"100%",
    paddingVertical: 50,
  },
  inputContainer:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 40
  },
  input:{
    backgroundColor: "#fff",
    color:"#000",
    fontSize: 20,
    width: 300,
    padding: 15,
    borderRadius: 35
  },
  btn:{
    borderColor: "#fff",
    borderWidth: 4,
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 35,
  },
  btnText:{
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold"
  }
})