import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function Membro({avatar ,name, role}) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          width={150}
          height={150}
          source={{ uri: avatar }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.cardText}>{name}</Text>
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: StyleSheet.hairlineWidth,
              marginVertical: 10
            }}
          />
          <Text style={styles.cardText}>{role}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D88318",
    padding: 20,
    borderRadius: 20,
    height: 200,
    marginHorizontal: 20,
  },
  card: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textContainer: {
    height: 100,
    width: "50%",
  },
  cardText: {
    textAlign: "center",
    fontSize: 20,
  },
});
