import { StyleSheet, Text, View, FlatList, Image, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebaseConfig";
import { BarChart } from "react-native-chart-kit";

export default function Campaign({ route }) {
  const [dataValues, setDataValues] = useState([]);
  const [dataKeys, setDataKeys] = useState([]);

  const getValues = async () => {
    const docRef = doc(db, "graphs", "1");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setDataValues(Object.values(docSnap.data()));
      setDataKeys(Object.keys(docSnap.data()));
      
    }
  };

  const chartData = {
    labels: dataKeys,
    datasets: [
      {
        data: dataValues
      }
    ]
  };

  const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: "#fff",
    backgroundGradientToOpacity: 1,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 3,
    barPercentage: 0.5,
  };

  const screenWidth = Dimensions.get("window").width;

  useEffect(() => {
    getValues();
  }, []);

  return (
    <View style={styles.main}>
      <Image style={styles.logo} source={{ uri: route.params.logo }} />
      <Text style={styles.title} >{route.params.name}</Text>
      <FlatList
        data={route.params.tags}
        horizontal={true}
        renderItem={({ item }) => {
          return (
            <View style={styles.tag} >
              <Text>#{item}</Text>
            </View>
          );
        }}
      />
      <View style={styles.list}>
        <Text style={styles.listTitle} >Post por rede social</Text>
        <View style={styles.listItem}>
          <Text>Facebook</Text>
          <Text>{dataValues[0]}</Text>
        </View>
        <View style={styles.listItem}>
          <Text>Instagram</Text>
          <Text>{dataValues[1]}</Text>
        </View>
        <View style={styles.listItem}>
          <Text>TikTok</Text>
          <Text>{dataValues[2]}</Text>
        </View>
      </View>
      <BarChart
        data={chartData}
        width={screenWidth}
        height={250}
        chartConfig={chartConfig}
        verticalLabelRotation={30}
        yAxisLabel=""
        yAxisSuffix=""
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#D88318"
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    margin: 16
  },
  title:{
    fontSize: 30,
    textAlign: "center"
  },
  tag:{
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 35,
    marginHorizontal: 5
  },
  list:{
    borderTopWidth: 1,
    margin: 16,
    paddingTop: 16,
    height: 200
  },
  listTitle:{
    fontSize: 25
  },
  listItem:{
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    alignItems: "center"
  }
});
