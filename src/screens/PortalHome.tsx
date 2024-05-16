import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect } from "react";
import { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebaseConfig";

export default function PortalHome() {
  const [campaigns, setCampaigns] = useState([]);

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
      // console.log(campaign);
    });
    setCampaigns(c);
    console.log(campaigns);
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
          renderItem={({ item, index }) => {
            return (
              <View key={index} style={{ height: 100 }}>
                <Text style={styles.item}>{item.category} aqui</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    flex: 1,
    gap: 20,
  },
  item: {
    padding: 20,
    fontSize: 15,
    marginTop: 5,
  },
});
