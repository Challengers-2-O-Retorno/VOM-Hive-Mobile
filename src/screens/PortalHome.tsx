import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import React, { useEffect } from "react";
import { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebaseConfig";
import { AntDesign } from "@expo/vector-icons";

export default function PortalHome({ navigation }) {
  const [campaigns, setCampaigns] = useState([]);

  const getItems = async () => {
    let c = [];
    while (c.length <= 1) {
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
       
      });
    }
    setCampaigns(c);
    console.log(campaigns);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <View style={styles.main}>
      <Text style={styles.title}>Reveja suas ultimas campanhas</Text>
      <View style={styles.container}>
        <FlatList
          data={campaigns}
          maxToRenderPerBatch={3}
          scrollEnabled={false}
          renderItem={({ item, index }) => {
            return (
              <View key={index} style={styles.campaign}>
                <Image style={styles.campaignImg} source={{ uri: item.logo }} />
                <Text style={styles.campaignText}>{item.name}</Text>
                <AntDesign name="arrowright" size={24} color="black" />
              </View>
            );
          }}
        />
      </View>
      <Text style={styles.linkText}>Vai cadastrar uma campanha nova ?</Text>
      <Pressable onPress={() => navigation.navigate("CriarCampanha")}>
        <Text style={styles.linkBtn}>Comece já</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    height: "100%",
    backgroundColor: "#D88318",
    flex: 1,
  },
  title: {
    fontSize: 30,
    margin: 16,
    fontWeight: "bold",
  },
  container: {
    height: 230,
  },
  campaignText: {
    padding: 20,
    fontSize: 20,
  },
  campaign: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    borderRadius: 35,
    marginBottom: 10,
    marginHorizontal: 16,
    backgroundColor: "#fff",
  },
  campaignImg: {
    borderRadius: 50,
    width: 60,
    height: 60,
  },
  linkText: {
    fontSize: 25,
    marginHorizontal: 16,
  },
  linkBtn: {
    backgroundColor: "#fff",
    padding: 10,
    textAlign: "center",
    width: 100,
    alignSelf: "center",
  },
});
