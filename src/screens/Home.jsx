import { SafeAreaView, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import HomeBanner from '../Components/HomeBanner'
import HomeContent from '../Components/HomeContent'

export function Home(){
  return (
    <>
    <SafeAreaView style={styles.home}>
      <HomeBanner/>
      <HomeContent/>
    </SafeAreaView>
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