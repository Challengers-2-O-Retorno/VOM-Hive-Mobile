import { StyleSheet, Text} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function HomeButton() {
  return (
    <TouchableOpacity style={styles.button} >
        <Text>Acesse a plataforma</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button:{
        marginTop: 40,
        padding: 20,
        backgroundColor: "#D88318",
        width: "80%",
        height: 200
    }
})