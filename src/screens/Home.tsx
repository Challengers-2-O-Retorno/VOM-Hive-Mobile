import { SafeAreaView, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import HomeBanner from '../Components/HomeBanner'
import HomeContent from '../Components/HomeContent'
import { ScrollView } from 'react-native-gesture-handler'

export function Home(){
  return (
    <>
    <ScrollView style={styles.home}>
      <HomeBanner/>
      <HomeContent/>
    </ScrollView>
    </>
  )
}

export default Home

const styles = StyleSheet.create({
  home:{
    backgroundColor: '#D88318',
    paddingTop: 85
  }
})