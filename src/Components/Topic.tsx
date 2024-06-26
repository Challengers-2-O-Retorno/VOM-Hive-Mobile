import * as React from "react";
import {
  Dimensions,
  Text,
  View,
  StyleSheet,
  ImageBackground,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";

function Index() {
  const width = Dimensions.get("window").width;

  const data = [
    {
      title: "Agilidade",
      desc: "Prepare a sua cmapanha mais rápido",
      image: require("../../assets/img/marketing-strategy.jpg"),
    },
    {
      title: "Facilidade",
      desc: " Planeje as suas campanhas com sem dificuldades ",
      image: require("../../assets/img/business-people.jpg"),
    },
    {
      title: "Assertividade",
      desc: "Alcance o seu publico alvo",
      image: require("../../assets/img/socialMedia.jpg"),
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <Carousel
        loop
        width={width}
        height={width / 1.5}
        autoPlay={true}
        data={data}
        scrollAnimationDuration={2500}
        renderItem={({ index }) => (
          <View>
            <ImageBackground
              source={data[index].image}
              style={styles.background}
            >
              <View style={styles.card}>
                <Text style={styles.cardTitle}>{data[index].title}</Text>
                <Text style={styles.cardDesc}>{data[index].desc}</Text>
              </View>
            </ImageBackground>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "rgba(0,0,0,0.4)",
    height: "100%",
    flex: 1,
    justifyContent: "flex-end",
    gap: 15,
    padding: 25
  },
  background: {
    height: "100%",
  },
  cardTitle: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff"
  },
  cardDesc:{
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff"
  }
});

export default Index;
