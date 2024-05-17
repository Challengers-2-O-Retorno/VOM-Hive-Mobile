import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  FlatList,
  ScrollView,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../services/firebaseConfig";

export default function CriarCampaign({ navigation }) {
  const data = [
    { label: "Alimento", value: "1" },
    { label: "Imóvel", value: "2" },
    { label: "Eletrônico", value: "3" },
    { label: "Eletrodomésticos", value: "4" },
    { label: "Vestimenta", value: "5" },
    { label: "Acessório", value: "6" },
  ];

  const [name, setName] = useState(""); // nome da campanha
  const [prod, setProd] = useState(""); // nome do produto
  const [logo, setLogo] = useState(""); // link da logo
  const [target, setTarget] = useState(""); // publico alvo
  const [category, setCategory] = useState(null); //Dropdown
  const [inputTags, setInputTags] = useState(""); // valor do campo para add tags
  const [listTags, setListTags] = useState([]); // lista de tags

  const addItem = async () => {
    try {
      const docRef = await addDoc(collection(db, "campaigns"), {
        name: name,
        prod: prod,
        logo: logo,
        target: target,
        category: category,
        tags: listTags,
      });

      alert("Campanha criada com sucesso!");
      navigation.jumpTo("Home");
    } catch (error) {
      console.log(error.code);
      alert("Ocorreu algo de errado!");
    }
  };

  return (
    <ScrollView>
      <Text style={styles.title}>Inicie a sua campanha</Text>
      <View>
        <Text style={styles.label}>Nome da campanha</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={(value) => setName(value)}
        />
      </View>
      <View>
        <Text style={styles.label}>Nome do produto</Text>
        <TextInput
          style={styles.input}
          value={prod}
          onChangeText={(value) => setProd(value)}
        />
      </View>
      <View>
        <Text style={styles.label}>Link da logo</Text>
        <TextInput
          style={styles.input}
          value={logo}
          onChangeText={(value) => setLogo(value)}
        />
      </View>
      <View>
        <Text style={styles.label}>Público alvo</Text>
        <TextInput
          style={styles.input}
          value={target}
          onChangeText={(value) => setTarget(value)}
        />
      </View>
      <View>
        <Text style={styles.label}>Categoria do produto</Text>
        <Dropdown
          style={styles.input}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          data={data}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Selecione a categoria"
          value={category}
          onChange={(item) => {
            setCategory(item.value);
          }}
        />
      </View>
      <View>
        <Text style={styles.label}>Adicione as Tags relevantes</Text>
        <TextInput
          style={styles.input}
          value={inputTags}
          onChangeText={(value) => setInputTags(value)}
        />
        <Pressable>
          <Text
            style={styles.addTag}
            onPress={() => {
              if (inputTags) {
                listTags.push(inputTags);
                setInputTags("");
              }
            }}
          >
            Adicionar
          </Text>
        </Pressable>
      </View>
      <View style={{ height: 100 }}>
        <View style={styles.tagContainer}>
          <FlatList
            data={listTags}
            horizontal={true}
            renderItem={({ item, index }) => {
              return (
                <View key={index} style={styles.tag}>
                  <Text>#{item}</Text>
                  <AntDesign
                    name="closecircleo"
                    size={28}
                    color="black"
                    onPress={() => {
                      listTags.splice(item[index]);
                    }}
                  />
                </View>
              );
            }}
          />
        </View>
      </View>
      <Pressable onPress={addItem}>
        <Text style={styles.createBtn}>Criar</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    marginHorizontal: 16,
    marginVertical: 40,
  },
  input: {
    margin: 16,
    height: 50,
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
    backgroundColor: "#f1f1f1",
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  label: {
    marginHorizontal: 16,
  },
  addTag: {
    backgroundColor: "#D88318",
    padding: 10,
    width: 85,
    alignSelf: "flex-end",
    margin: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  tagContainer: {
    height: 100,
    flex: 1,
    flexDirection: "row",
    gap: 20,
  },
  tag: {
    borderWidth: 1,
    borderRadius: 35,
    minWidth: 100,
    maxWidth: 200,
    height: 50,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  createBtn: {
    backgroundColor: "#D88318",
    textAlign: "center",
    fontSize: 30,
    color: "#fff",
    marginHorizontal: 16,
    marginBottom: 16,
  },
});
