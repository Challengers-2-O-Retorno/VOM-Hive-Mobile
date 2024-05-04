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
        padding: 20,
        backgroundColor: "#000"
    }
})