import { StyleSheet, Text} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function HomeButton({title, navigation}) {

  function navegar(){
    if(title=="Acesse a plataforma") navigation.navigate('Login')
    if(title=="Conheça a equipe") navigation.navigate('Equipe')
  }


  return (
    <TouchableOpacity style={styles.button} onPress={navegar} >
        <Text style={styles.text} >{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button:{
        marginTop: 40,
        padding: 20,
        backgroundColor: "#D88318",
        borderRadius: 40,
        minWidth: 350

    },
    text:{
      textAlign: "center",
      fontSize: 30,
      color: "#fff",
      fontWeight:"bold"
    }
})