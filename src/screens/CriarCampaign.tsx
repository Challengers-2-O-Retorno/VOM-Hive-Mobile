import { StyleSheet, Text, View, TextInput } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import React, { useState } from "react";

export default function CriarCampaign() {
  const data = [
    { label: "Alimento", value: "1" },
    { label: "Imóvel", value: "2" },
    { label: "Eletrônico", value: "3" },
    { label: "Eletrodomésticos", value: "4" },
    { label: "Vestimenta", value: "5" },
    { label: "Acessório", value: "6" },
  ];

  const [value, setValue] = useState(null);

  return (
    <View>
      <Text>Criar campanha</Text>
      <View>
        <Text style={styles.label}>Nome da campanha</Text>
        <TextInput placeholder="aaa" style={styles.input} />
      </View>
      <View>
        <Text style={styles.label}>Nome do produto</Text>
        <TextInput placeholder="aaa" style={styles.input} />
      </View>
      <View>
        <Text style={styles.label}>Público alvo</Text>
        <TextInput placeholder="aaa" style={styles.input} />
      </View>
      <View>
        <Text style={styles.label}>Público alvo</Text>
        <Dropdown
          style={styles.input}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          data={data}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Selecione a categoria"
          value={value}
          onChange={(item) => {
            setValue(item.value);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
