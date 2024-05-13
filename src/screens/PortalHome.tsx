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
    //   console.log(campaign);
    });
    // console.log("rodou");
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <View style={{flex:1}}>
      <Text>Reveja suas ultimas campanhas</Text>
      <View style={{width: "100%"}}>
        <FlatList
        style={styles.list}
          data={campaigns}
          renderItem={({ item }) => (
            <View style={{width: 100, height: 100}}>
              <Text>{item.category} aqui</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    list:{
        flex:1,
        width: 500,
        backgroundColor: "#f00"
    }
});
