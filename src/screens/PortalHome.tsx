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
        logo: doc.data().logo,
        name: doc.data().name,
        category: doc.data().category,
        target: doc.data().target,
        tags: doc.data().tags,
      };

      c.push(campaign);
      console.log(campaign);
    });
    console.log("rodou")
  };

  useEffect(() => {
    getItems();
    console.log(campaigns)
  }, []);

  return (
    <View>
      <Text>Reveja suas ultimas campanhas</Text>
      <View>
        <FlatList
          data={campaigns}
          renderItem={({ item }) => {
            return (
              <View>
                <Text>{item.name}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
