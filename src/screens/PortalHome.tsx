import { StyleSheet, Text, View, FlatList, Dimensions } from "react-native";
import React, { useEffect } from "react";
import { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebaseConfig";

export default function PortalHome() {
  const [campaigns, setCampaigns] = useState([]);

  const screenWidth = Dimensions.get('window').width;

  const getItems = async () => {
    let c = [];
    const query = await getDocs(collection(db, "campaigns"));
    query.forEach((doc) => {
      const campaign = {
        id: doc.id,
        logo: doc.data().logo,
        name: doc.data().name,
        category: doc.data().category,
        target: doc.data().target,
        tags: doc.data().tags,
      };

      c.push(campaign);
        console.log(campaign);
    });
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <View>
      <Text>Reveja suas ultimas campanhas</Text>
      <View style={styles.container}>
        <FlatList
          data={campaigns}
          renderItem={({ item }) => {
            return (
              <View style={{borderWidth: 1}} >
                <Text style={styles.item} >{item.category} aqui</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    padding: 50,
    flex: 1
  },
  item:{
    padding: 20,
    fontSize: 15,
    marginTop: 5,
  }
});
