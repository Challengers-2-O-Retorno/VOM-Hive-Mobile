import { StyleSheet, StatusBar } from "react-native";
import React from "react";
import HomeBanner from "../Components/HomeBanner";
import HomeContent from "../Components/HomeContent";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export function Home({ navigation }) {
  return (
    <>
      <SafeAreaView>
        <StatusBar backgroundColor={"#D88318"} />
        <ScrollView style={styles.home}>
          <HomeBanner />
          <HomeContent navigation={navigation} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export default Home;

const styles = StyleSheet.create({
  home: {
    backgroundColor: "#D88318",
    paddingTop: 85,
  },
});
