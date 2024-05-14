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
        logo: doc.data().logo,
        name: doc.data().name,
        category: doc.data().category,
        target: doc.data().target,
        tags: doc.data().tags,
      };

      c.push(campaign);
        console.log(campaign);
    });
    // console.log("rodou");
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <View>
      <Text>Reveja suas ultimas campanhas</Text>
      <View>
        <FlatList
          style={[styles.list, {width: screenWidth}]}
          data={campaigns}
          renderItem={({ item }) => {
            return (
              <View style={{borderWidth: 1}} >
                <Text>{item.category} aqui</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
});
