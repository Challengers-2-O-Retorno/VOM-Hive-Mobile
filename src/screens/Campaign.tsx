import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import {doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebaseConfig";

export default function Campaign({ route }) {
  const [data, setData] = useState([]);

  const getValues = async () => {
    const docRef = doc(db, "graphs", "1");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
    //   console.log("Document data:", docSnap.data());
      setData(Object.values(docSnap.data()));
    } else {
    //   console.log("No such document!");
    }
  };

  useEffect(() => {
    getValues();
  }, []);

  return (
    <View>
        <Image style={styles.logo} source={{ uri: route.params.logo }}/>
      <Text>{route.params.name}</Text>
      <FlatList
        data={route.params.tags}
        horizontal={true}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item}</Text>
            </View>
          );
        }}
      />
      <View>
        <View>
          <Text>Facebook</Text>
          <Text>{data[0]}</Text>
        </View>
        <View>
          <Text>Facebook</Text>
          <Text>{data[1]}</Text>
        </View>
        <View>
          <Text>Facebook</Text>
          <Text>{data[2]}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    logo:{
        width: 50,
        height: 50
    }
});
